"use client";

import { useState, use } from "react"; // <-- Added 'use' here
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";

// Notice we changed params to be a Promise in the TypeScript definition
export default function SubmitReviewPage({ params }: { params: Promise<{ productId: string }> }) {
  // <-- UNWRAP THE PARAMS HERE -->
  const { productId } = use(params);

  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      productId: productId, // <-- Now we use the unwrapped string!
      reviewerName: formData.get("reviewerName"),
      comment: formData.get("comment"),
      rating,
    };

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
        
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#DA6D40', '#0F2643', '#FBECDB'] 
        });

        setTimeout(() => {
          router.push(`/products/${productId}`); // <-- Updated this line too
        }, 3500);

      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.error || "Could not save review."}`);
      }
    } catch (error) {
      console.error("Failed to submit", error);
      alert("Network error. Check your terminal to see if the database is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- SUCCESS SCREEN ---
  if (isSuccess) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <Container className="flex h-[70vh] flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ type: "spring", bounce: 0.5 }}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FBECDB] text-[#DA6D40]"
          >
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 font-heading text-3xl text-[#0F2643]"
          >
            Thank You!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-sm text-[#5F6F77]"
          >
            Your review has been added. Redirecting you...
          </motion.p>
        </Container>
      </main>
    );
  }

  // --- REVIEW FORM SCREEN ---
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Container className="py-16 md:py-24">
        <div className="mx-auto max-w-md rounded-2xl bg-[#FBECDB]/40 p-8 shadow-sm">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
            Share Your Experience
          </p>
          <h1 className="mt-2 text-center font-heading text-2xl text-[#0F2643]">
            Leave a Review
          </h1>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <svg
                    className={`h-10 w-10 transition-colors ${
                      star <= (hoveredRating || rating) ? "fill-[#DA6D40] text-[#DA6D40]" : "fill-transparent text-[#0F2643]/20"
                    }`}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </button>
              ))}
            </div>

            <div className="flex flex-col">
              <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0F2643]">Name</label>
              <input name="reviewerName" required placeholder="Jane Doe" className="mt-1 w-full border-b border-[#0F2643]/20 bg-transparent py-2 text-[13px] text-[#0F2643] focus:border-[#DA6D40] focus:outline-none" />
            </div>

            <div className="flex flex-col">
              <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0F2643]">Review</label>
              <textarea name="comment" required rows={4} placeholder="What did you think of the product?" className="mt-1 w-full resize-none border-b border-[#0F2643]/20 bg-transparent py-2 text-[13px] text-[#0F2643] focus:border-[#DA6D40] focus:outline-none"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={rating === 0 || isSubmitting} 
              className="mt-4 h-12 w-full rounded-full bg-[#0F2643] text-[11px] font-medium uppercase tracking-widest text-white transition hover:bg-[#DA6D40] disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Publish Review"}
            </button>
            {rating === 0 && (
              <p className="text-center text-[10px] text-[#DA6D40]">Please select a star rating to publish.</p>
            )}
          </form>
        </div>
      </Container>
    </main>
  );
}