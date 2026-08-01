import { NextResponse } from "next/server";
import crypto from "crypto";
import connectToDatabase from "@/lib/mongodb";
import Order from "@/models/Order";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      cartItems, 
      totalAmount,
      deliveryAddress, // <--- Extracted delivery address from frontend
      billingAddress   // <--- Extracted billing address from frontend
    } = body;

    // 1. Verify the Razorpay Signature
    const secret = process.env.RAZORPAY_KEY_SECRET;
    
    if (!secret) {
        throw new Error("RAZORPAY_KEY_SECRET is not defined");
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return NextResponse.json({ message: "Invalid payment signature", error: true }, { status: 400 });
    }

    // 2. Connect to MongoDB
    await connectToDatabase();

    // 3. Format the cart items to perfectly match the Mongoose OrderItemSchema
    // This catches 'name' if your frontend uses that instead of 'title', and adds fallback quantities.
    const formattedItems = cartItems.map((item: any) => ({
      id: item.id || Math.random().toString(36).substring(7), // Fallback ID if missing
      title: item.title || item.name || "Unknown Item",       // Grabs name or title
      price: item.price || 0,
      quantity: item.quantity || 1,                           // Defaults to 1 if missing
      image: item.image || "",
    }));

    // 4. Create and save the new order
    const newOrder = new Order({
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      items: formattedItems,
      totalAmount: totalAmount,
      status: "Paid",
      deliveryAddress: deliveryAddress, // <--- Saved to database
      billingAddress: billingAddress,   // <--- Saved to database
    });

    await newOrder.save();

    // 5. Return success to the frontend
    return NextResponse.json({ message: "Payment verified and order saved successfully", success: true });

  } catch (error) {
    console.error("Error saving order:", error);
    return NextResponse.json({ message: "Internal Server Error", error: true }, { status: 500 });
  }
}