import mongoose, { Schema, models } from "mongoose";

const ReviewSchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
      index: true, 
    },
    reviewerName: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Review = models.Review || mongoose.model("Review", ReviewSchema);

export default Review;