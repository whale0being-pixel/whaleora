import mongoose, { Schema, Document } from "mongoose";

// 1. Define the Item Schema (already working)
const OrderItemSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
});

// 2. Define the NEW Address Schema
const AddressSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true }, // <--- ADD THIS LINE
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
});

// 3. Define the main Order Schema
const OrderSchema = new Schema(
  {
    razorpayOrderId: { type: String, required: true },
    razorpayPaymentId: { type: String, required: true },
    items: [OrderItemSchema],
    totalAmount: { type: Number, required: true },
    status: { type: String, required: true, default: "Paid" },
    customerEmail: { type: String }, 
    
    // 4. INJECT the addresses here so Mongoose knows to save them!
    deliveryAddress: AddressSchema,
    billingAddress: AddressSchema,
  },
  { timestamps: true }
);

// Export the model (Prevents Next.js hot-reloading crash)
export default mongoose.models.Order || mongoose.model("Order", OrderSchema);