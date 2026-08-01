"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CartDrawer from "@/components/cart/CartDrawer";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Pull cartItems from your global state
  const { cartItems } = useCart();
  
  // Dynamically calculate the total number of items in the cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (isMenuOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isCartOpen]);

  return (
    <>
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="w-full bg-[#DA6D40] px-4 py-2 text-center">
        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white md:text-[10px]">
          Free shipping on all orders above 1500
        </p>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-[#0F2643]/10 bg-white/90 backdrop-blur-md">
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12 md:h-20">
          
          <div className="flex flex-1 items-center justify-start">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="group flex items-center gap-3 transition-colors hover:text-[#DA6D40]"
              aria-label="Open Menu"
            >
              <div className="flex flex-col gap-[3px]">
                <span className="block h-[1px] w-5 bg-[#0F2643] transition-colors group-hover:bg-[#DA6D40]" />
                <span className="block h-[1px] w-5 bg-[#0F2643] transition-colors group-hover:bg-[#DA6D40]" />
                <span className="block h-[1px] w-5 bg-[#0F2643] transition-colors group-hover:bg-[#DA6D40]" />
              </div>
              <span className="hidden text-[11px] font-medium uppercase tracking-widest text-[#0F2643] group-hover:text-[#DA6D40] md:block">
                Menu
              </span>
            </button>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <Link href="/" className="flex items-center justify-center transition-opacity hover:opacity-80">
              <Image
                src="/logos/Logo.svg"
                alt="Whaleora"
                width={140}
                height={40}
                priority
                className="h-auto w-[110px] object-contain md:w-[140px]"
              />
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end gap-5">
            <button className="hidden text-[#0F2643] transition-colors hover:text-[#DA6D40] sm:block" aria-label="Search">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            
            <button className="hidden text-[#0F2643] transition-colors hover:text-[#DA6D40] md:block" aria-label="Account">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </button>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="group flex items-center gap-2"
              aria-label="Open cart"
            >
              <span className="text-[11px] font-medium uppercase tracking-widest text-[#0F2643] transition-colors group-hover:text-[#DA6D40]">
                Cart
              </span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FBECDB] text-[9px] font-bold text-[#0F2643] transition-colors group-hover:bg-[#DA6D40] group-hover:text-white">
                {cartItemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. MEGA MENU DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-[#0F2643]/30 backdrop-blur-sm transition-opacity duration-500 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* 4. THE MEGA MENU DRAWER */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-full max-w-sm transform bg-[#0F2643] p-8 shadow-2xl transition-transform duration-700 ease-in-out md:p-12 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <Image
            src="/logos/Logo.svg"
            alt="Whaleora"
            width={100}
            height={30}
            className="h-auto w-[100px] object-contain brightness-0 invert"
          />
          
          {/* ADDED: Cart Page Link */}
          <Link
            href="/cart"
            onClick={() => setIsMenuOpen(false)}
            className="group flex items-center gap-2 transition-colors hover:text-[#DA6D40]"
            aria-label="Go to Cart"
          >
            <span className="text-[10px] font-medium uppercase tracking-widest text-white/50 group-hover:text-[#DA6D40]">
              Cart ({cartItemCount})
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="group flex items-center gap-2 transition-colors hover:text-[#DA6D40]"
            aria-label="Close Menu"
          >
            <span className="text-[10px] font-medium uppercase tracking-widest text-white/50 group-hover:text-[#DA6D40]">
              Close
            </span>
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <nav className="mt-12 flex flex-col gap-10">
          
          <div className="flex flex-col">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
              The Collection
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <Link href="/products" onClick={() => setIsMenuOpen(false)} className="font-heading text-3xl tracking-tight !text-white transition-all hover:translate-x-2 hover:!text-[#DA6D40]">
                Shop All
              </Link>
              <Link href="/products/sos-alarm" onClick={() => setIsMenuOpen(false)} className="font-heading text-3xl tracking-tight !text-white transition-all hover:translate-x-2 hover:!text-[#DA6D40]">
                SOS Alarm
              </Link>
              <Link href="/products/pepper-spray" onClick={() => setIsMenuOpen(false)} className="font-heading text-3xl tracking-tight !text-white transition-all hover:translate-x-2 hover:!text-[#DA6D40]">
                Pepper Spray
              </Link>
              <Link href="/products/window-breaker" onClick={() => setIsMenuOpen(false)} className="font-heading text-3xl tracking-tight !text-white transition-all hover:translate-x-2 hover:!text-[#DA6D40]">
                Window Breaker
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
              Explore
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="font-heading text-3xl tracking-tight !text-white transition-all hover:translate-x-2 hover:!text-[#DA6D40]">
                About Whaleora
              </Link>
              <Link href="/institutions" onClick={() => setIsMenuOpen(false)} className="font-heading text-3xl tracking-tight !text-white transition-all hover:translate-x-2 hover:!text-[#DA6D40]">
                Partnerships
              </Link>
              <Link href="/safety-hub" onClick={() => setIsMenuOpen(false)} className="font-heading text-3xl tracking-tight !text-white transition-all hover:translate-x-2 hover:!text-[#DA6D40]">
                Safety Hub
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
              Support
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="font-heading text-3xl tracking-tight !text-white transition-all hover:translate-x-2 hover:!text-[#DA6D40]">
                Contact Us
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="font-heading text-3xl tracking-tight text-white transition-all hover:translate-x-2 hover:text-[#DA6D40]">
                FAQ
              </Link>
            </div>
          </div>

        </nav>
      </div>

      {/* 5. CART DRAWER COMPONENT */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}