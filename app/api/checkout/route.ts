import { NextResponse } from "next/server";
import Razorpay from "razorpay";

// 1. Initialize the Razorpay instance with your secret keys
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: Request) {
  try {
    // 2. Extract the total amount sent from the frontend cart
    const body = await request.json();
    const { amount } = body;

    if (!amount) {
      return NextResponse.json(
        { error: "Amount is required to create an order" },
        { status: 400 }
      );
    }

    // 3. Razorpay expects the amount in the smallest currency unit (paise for INR)
    // So we multiply the cart total by 100
    const options = {
      amount: Math.round(amount * 100), 
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    // 4. Create the order via the Razorpay API
    const order = await razorpay.orders.create(options);

    // 5. Send the order details back to the frontend
    return NextResponse.json(order, { status: 200 });

  } catch (error) {
    console.error("Razorpay Order Error:", error);
    return NextResponse.json(
      { error: "Failed to generate Razorpay order" },
      { status: 500 }
    );
  }
}