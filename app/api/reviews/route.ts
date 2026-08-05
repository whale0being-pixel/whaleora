import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import Review from "@/models/Review";

// POST: Save a new review from the QR code page
export async function POST(request: Request) {
  try {
    await connectMongo();
    const body = await request.json();
    const { productId, reviewerName, rating, comment } = body;

    if (!productId || !reviewerName || !rating || !comment) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newReview = await Review.create({ productId, reviewerName, rating, comment });
    return NextResponse.json({ success: true, review: newReview }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// GET: Fetch reviews for a specific product page
export async function GET(request: Request) {
  try {
    await connectMongo();
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json({ error: "Product ID required" }, { status: 400 });
    }

    // Fetch reviews, newest first
    const reviews = await Review.find({ productId }).sort({ createdAt: -1 });
    return NextResponse.json({ reviews }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}