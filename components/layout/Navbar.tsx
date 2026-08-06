"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CartDrawer from "@/components/cart/CartDrawer";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Add a subtle shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawers are open
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
      <div className="relative z-50 w-full bg-[#DA6D40] px-4 py-2.5 text-center">
        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white md:text-[10px]">
          Free shipping on all orders above ₹1500
        </p>
      </div>

      {/* 2. MAIN HEADER */}
      <header 
        className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
          scrolled 
            ? "border-[#0F2643]/10 bg-white/95 shadow-sm backdrop-blur-xl py-0" 
            : "border-transparent bg-white/80 backdrop-blur-md py-1"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 lg:px-12">
          
          {/* LEFT: Logo */}
          <div className="flex w-1/4 items-center justify-start">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
              <Image
                src="/logos/Logo.svg"
                alt="Whaleora"
                width={140}
                height={40}
                priority
                className="h-auto w-[110px] object-contain md:w-[130px]"
              />
            </Link>
          </div>

          {/* CENTER: Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden w-2/4 flex-1 items-center justify-center gap-6 lg:gap-10 xl:flex">
            {[
              { name: "Shop", href: "/products" },
              { name: "Safety Hub", href: "/safety-hub" },
              { name: "About", href: "/about" },
              { name: "Partnerships", href: "/institutions" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="group relative py-2 text-[10px] lg:text-[11px] font-bold uppercase tracking-widest text-[#0F2643] transition-colors hover:text-[#DA6D40]"
              >
                {link.name}
                {/* Minimalist animated underline */}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#DA6D40] transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* RIGHT: Actions & Mobile Toggle */}
          <div className="flex w-1/4 items-center justify-end gap-4 md:gap-6">
            
            {/* Search Icon */}
            <button className="hidden text-[#0F2643] transition-colors hover:text-[#DA6D40] sm:block" aria-label="Search">
              <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            
            {/* Account Icon */}
            <button className="hidden text-[#0F2643] transition-colors hover:text-[#DA6D40] md:block" aria-label="Account">
              <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </button>

            {/* Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="group flex items-center gap-2"
              aria-label="Open cart"
            >
              <span className="hidden text-[11px] font-bold uppercase tracking-widest text-[#0F2643] transition-colors group-hover:text-[#DA6D40] sm:block">
                Cart
              </span>
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#FBECDB]/50 text-[#0F2643] transition-colors group-hover:bg-[#DA6D40] group-hover:text-white">
                <svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0F2643] text-[8px] font-bold text-white">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </button>

            {/* Mobile Hamburger Menu (Hidden on Desktop) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="group flex flex-col gap-[4px] p-2 xl:hidden"
              aria-label="Open Menu"
            >
              <span className="block h-[1.5px] w-5 bg-[#0F2643] transition-colors group-hover:bg-[#DA6D40]" />
              <span className="block h-[1.5px] w-5 bg-[#0F2643] transition-colors group-hover:bg-[#DA6D40]" />
              <span className="block h-[1.5px] w-3 bg-[#0F2643] transition-all group-hover:w-5 group-hover:bg-[#DA6D40]" />
            </button>

          </div>
        </div>
      </header>

      {/* 3. MOBILE MENU DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-[#0F2643]/40 backdrop-blur-sm transition-opacity duration-500 xl:hidden ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* 4. THE MOBILE MENU DRAWER */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col transform bg-[#0F2643] p-8 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] xl:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-6 shrink-0">
          <Image
            src="/logos/Logo.svg"
            alt="Whaleora"
            width={100}
            height={30}
            className="h-auto w-[90px] object-contain brightness-0 invert"
          />

          <button
            onClick={() => setIsMenuOpen(false)}
            className="group flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-[#DA6D40]"
            aria-label="Close Menu"
          >
            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <nav className="mt-8 flex-1 overflow-y-auto pr-4 pb-10 flex flex-col gap-10">
          
          <div className="flex flex-col">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
              The Collection
            </p>
            <div className="mt-5 flex flex-col gap-5">
              <Link href="/products" onClick={() => setIsMenuOpen(false)} className="font-heading text-3xl tracking-tight text-white transition-all hover:translate-x-2 hover:text-[#DA6D40]">
                Shop All
              </Link>
              <Link href="/products/sos-alarm" onClick={() => setIsMenuOpen(false)} className="text-lg font-light text-white/80 transition-colors hover:text-[#DA6D40]">
                Personal SOS Alarm
              </Link>
              <Link href="/products/pepperspray" onClick={() => setIsMenuOpen(false)} className="text-lg font-light text-white/80 transition-colors hover:text-[#DA6D40]">
                Pepper Spray
              </Link>
              <Link href="/products/windowbreaker" onClick={() => setIsMenuOpen(false)} className="text-lg font-light text-white/80 transition-colors hover:text-[#DA6D40]">
                Window Breaker
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
              Explore
            </p>
            <div className="mt-5 flex flex-col gap-4">
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-white transition-colors hover:text-[#DA6D40]">
                About Whaleora
              </Link>
              <Link href="/institutions" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-white transition-colors hover:text-[#DA6D40]">
                Partnerships
              </Link>
              <Link href="/safety-hub" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-white transition-colors hover:text-[#DA6D40]">
                Safety Hub
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
              Support
            </p>
            <div className="mt-5 flex flex-col gap-4">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-white transition-colors hover:text-[#DA6D40]">
                Contact Us
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-white transition-colors hover:text-[#DA6D40]">
                FAQ
              </Link>
            </div>
          </div>

        </nav>

        {/* Floating Cart Button at bottom of Mobile Menu */}
        <div className="mt-auto shrink-0 border-t border-white/10 pt-6">
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setTimeout(() => setIsCartOpen(true), 150); // slight delay to let menu close smoothly
            }}
            className="group flex w-full items-center justify-between rounded-full bg-white px-6 py-4 transition-colors hover:bg-[#DA6D40]"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0F2643] transition-colors group-hover:text-white">
              View Cart
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FBECDB] text-[10px] font-bold text-[#0F2643] transition-colors group-hover:bg-[#0F2643] group-hover:text-white">
              {cartItemCount}
            </span>
          </button>
        </div>
      </div>

      {/* 5. CART DRAWER COMPONENT */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}