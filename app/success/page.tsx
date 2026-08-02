"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti"; // Import the raw confetti function
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";

export default function SuccessPage() {
  const router = useRouter();

  // Fire confetti automatically when the page loads!
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }, // Starts slightly lower on the screen for a nice fountain effect
      colors: ['#DA6D40', '#0F2643', '#FBECDB'], // Your brand colors
      zIndex: 9999, // Ensures it appears on top of everything
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      <section className="py-32">
        <Container>
          <div className="mx-auto flex max-w-lg flex-col items-center rounded-2xl border border-[#0F2643]/10 bg-white p-12 text-center shadow-sm">
            
            {/* Green Success Checkmark */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-500">
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="font-heading text-3xl text-[#0F2643]">Payment Successful!</h1>
            
            <p className="mt-4 text-[15px] font-light leading-relaxed text-[#5F6F77]">
              Thank you for your purchase. Your safety essentials order has been secured and we are getting it ready for shipment.
            </p>

            <button
              onClick={() => router.push("/")}
              className="mt-10 flex h-14 w-full items-center justify-center rounded-full bg-[#0F2643] text-[12px] font-medium uppercase tracking-widest text-white transition hover:bg-[#DA6D40]"
            >
              Continue Shopping
            </button>
            
          </div>
        </Container>
      </section>
    </main>
  );
}