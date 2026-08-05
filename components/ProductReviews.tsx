"use client";

import { useEffect, useState } from "react";

interface Review {
  _id: string;
  reviewerName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export default function ProductReviews({ productId }: { productId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Keeps the cache fix in place
        const res = await fetch(`/api/reviews?productId=${productId}`, {
          cache: "no-store",
        });
        const data = await res.json();
        if (data.reviews) setReviews(data.reviews);
      } catch (error) {
        console.error("Failed to load reviews", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);

  // Reduced padding for a tighter section
  if (isLoading)
    return (
      <div className="py-6 text-center text-sm text-[#5F6F77]">
        Loading reviews...
      </div>
    );

  return (
    // Compact top margin and section padding for elegance
    <div className="mt-10 border-t border-[#0F2643]/10 pt-8">
    {/* Reduced font size for the section title */}
    <h2 className="font-heading text-xl text-[#0F2643]">
        Customer Reviews
      </h2>

      {reviews.length === 0 ? (
        <p className="mt-4 text-sm text-[#5F6F77]">
          No reviews yet. Be the first to leave one!
        </p>
      ) : (
        // Grid of defined, compact cards with reduced gap
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            // Refined, defined card design with less padding
            <div
              key={review._id}
              className="rounded-lg border border-[#0F2643]/10 bg-white/40 p-4 shadow-sm"
            >
              {/* Tighter spacing for stars, and slightly smaller stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < review.rating
                        ? "fill-[#DA6D40] text-[#DA6D40]"
                        : "fill-transparent text-[#0F2643]/20"
                    }`}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ))}
              </div>
              {/* Compact text spacing and size */}
              <p className="mt-2 text-[13px] leading-relaxed text-[#5F6F77]">
                &quot;{review.comment}&quot;
              </p>
              {/* Refined author details spacing */}
              <p className="mt-2.5 text-[10px] font-bold uppercase tracking-wider text-[#0F2643]">
                - {review.reviewerName}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}