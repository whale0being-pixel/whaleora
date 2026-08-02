"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/button";
import { ConfettiButton } from "@/components/ui/confetti"; // adjust the path if you named the file differently

// 1. Import the cart context
import { useCart } from "@/app/context/CartContext";
// Note: If you still have path issues, use: import { useCart } from "../../context/CartContext"; (or wherever it is located)

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // 2. Initialize the add to cart function
  const { addToCart } = useCart();

  const product = {
    name: "Pepper Spray",
    subtitle: "Self Defense",
    price: 499,
    rating: 4.9,
    reviewsCount: 128,
    description:
      "A quick-release self-defense tool engineered for maximum distance, stopping power, and immediate effectiveness.",
    images: [
      "/images/spray.png",
      "/images/spray.png",
      "/images/spray.png",
    ],
    specs: [
      { label: "Formula", value: "Oleoresin Capsicum (OC) Pepper Formula" },
      { label: "Capacity", value: "50ml" },
      { label: "Range", value: "Up to 8–10 feet" },
      { label: "Safety", value: "Protective Locking Cap" },
      { label: "Build", value: "Pocket-Friendly Aluminium Canister" },
      { label: "Shelf Life", value: "Up to 3 Years" },
    ],
  
    features: [
      "Quick one-hand deployment with safety lock",
      "Powerful stream spray designed to reduce blowback",
      "Compact size for bags, pockets and keychains",
      "Provides valuable time to escape and seek help",
    ],
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            
            {/* LEFT: Image Gallery */}
            <div className="flex flex-col gap-4">
              <div className="relative flex aspect-square w-full items-center justify-center rounded-2xl border border-[#0F2643]/10 bg-[#FBECDB]/20 p-8">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-72 w-auto object-contain drop-shadow-md"
                  priority
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`flex aspect-square items-center justify-center rounded-xl border p-2 transition-all ${
                      activeImage === idx
                        ? "border-[#DA6D40] bg-[#FBECDB]/40 shadow-sm"
                        : "border-[#0F2643]/10 bg-white hover:border-[#DA6D40]/50"
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      width={80}
                      height={80}
                      className="h-16 w-auto object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: Product Info & Actions */}
            <div className="flex flex-col">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                {product.subtitle}
              </p>

              <h1 className="mt-2 font-heading text-3xl tracking-tight text-[#0F2643] md:text-4xl">
                {product.name}
              </h1>

              <div className="mt-3 flex items-center gap-3">
                <span className="font-heading text-2xl font-medium text-[#0F2643]">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-[#5F6F77]">
                  (Inclusive of all taxes)
                </span>
              </div>

              <p className="mt-6 text-[14px] font-light leading-relaxed text-[#5F6F77]">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="mt-8 flex items-center gap-6 border-y border-[#0F2643]/10 py-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0F2643]">
                  Quantity
                </span>
                <div className="flex items-center rounded-full border border-[#0F2643]/10 bg-white px-4 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-sm text-[#0F2643] transition hover:text-[#DA6D40]"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-medium text-[#0F2643]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-sm text-[#0F2643] transition hover:text-[#DA6D40]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                
                {/* Replaced <Button> with <ConfettiButton> */}
                <ConfettiButton 
                  options={{
                    particleCount: 120,
                    spread: 70,
                    colors: ["#DA6D40", "#0F2643", "#FBECDB"], // Matches your brand palette!
                  }}
                  onClick={() => {
                    // This still runs perfectly while the confetti fires
                    addToCart({
                      id: "pepper-spray", // Fixed ID to match the product
                      name: product.name,
                      price: product.price,
                      quantity: quantity,
                      image: product.images[0],
                    });
                  }}
                  className="flex-1 h-12 w-full rounded-full text-[11px] font-medium uppercase tracking-widest transition hover:scale-[1.02]"
                >
                  Add to Cart
                </ConfettiButton>

                <Link href="/checkout" className="flex-1">
                  <button className="flex h-12 w-full items-center justify-center rounded-full border border-[#0F2643]/20 bg-transparent text-[11px] font-medium uppercase tracking-widest text-[#0F2643] transition hover:border-[#DA6D40] hover:text-[#DA6D40]">
                    Buy Now
                  </button>
                </Link>
              </div>

              {/* Key Specs */}
              <div className="mt-10 rounded-2xl border border-[#0F2643]/10 bg-[#FBECDB]/20 p-6">
                <h3 className="font-heading text-lg text-[#0F2643]">Specifications</h3>
                <ul className="mt-4 space-y-2.5">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex justify-between text-[13px] font-light">
                      <span className="text-[#5F6F77]">{spec.label}</span>
                      <span className="font-medium text-[#0F2643]">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}