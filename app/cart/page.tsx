"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <section className="py-12 md:py-20">
        <Container>
          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
              Secure Checkout
            </p>
            <h1 className="mt-2 font-heading text-3xl tracking-tight text-[#0F2643] md:text-5xl">
              Your Safety Cart
            </h1>
            <p className="mt-4 max-w-xl text-[14px] font-light leading-relaxed text-[#5F6F77]">
              Review your selected essentials before completing your order. Free shipping across India on orders above ₹1,500.
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-[#0F2643]/10 bg-white py-32 shadow-sm">
              <p className="text-[15px] font-light text-[#5F6F77]">
                Your cart is currently empty.
              </p>
              <Link href="/products">
                <button className="mt-6 flex h-12 items-center justify-center rounded-full bg-[#0F2643] px-10 text-[11px] font-medium uppercase tracking-widest text-white transition hover:bg-[#DA6D40]">
                  Continue Shopping
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16 items-start">
              
              {/* LEFT: Cart Items */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-[#0F2643]/10 bg-white p-6 shadow-sm transition-all hover:border-[#0F2643]/20"
                  >
                    {/* Item Image */}
                    <div className="relative flex aspect-square w-full sm:w-32 shrink-0 items-center justify-center rounded-xl bg-[#FBECDB]/20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="h-20 w-auto object-contain drop-shadow-sm"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex flex-1 flex-col sm:flex-row justify-between w-full gap-6 sm:gap-4">
                      <div className="flex flex-col justify-center">
                        <h3 className="font-heading text-xl text-[#0F2643]">
                          {item.name}
                        </h3>
                        <p className="mt-1 font-heading text-lg font-medium text-[#0F2643]/80">
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center gap-6 sm:justify-end">
                        <div className="flex h-10 w-28 items-center justify-between rounded-full border border-[#0F2643]/15 px-4">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-sm text-[#0F2643]/60 hover:text-[#DA6D40] transition-colors"
                          >
                            −
                          </button>
                          <span className="text-[12px] font-medium text-[#0F2643]">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-sm text-[#0F2643]/60 hover:text-[#DA6D40] transition-colors"
                          >
                            +
                          </button>
                        </div>

                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] font-medium uppercase tracking-widest text-[#5F6F77] transition-colors hover:text-[#DA6D40]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT: Order Summary */}
              <div className="rounded-2xl border border-[#0F2643]/10 bg-white p-8 shadow-sm lg:sticky lg:top-32">
                <h2 className="font-heading text-2xl text-[#0F2643]">Order Summary</h2>
                
                <div className="mt-8 flex flex-col gap-4 border-b border-[#0F2643]/10 pb-6">
                  <div className="flex justify-between text-[14px] font-light text-[#5F6F77]">
                    <span>Subtotal</span>
                    <span className="font-medium text-[#0F2643]">₹{cartTotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-[14px] font-light text-[#5F6F77]">
                    <span>Estimated Shipping</span>
                    <span className="font-medium text-[#DA6D40]">Free</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-end">
                  <span className="font-heading text-lg text-[#0F2643]">Total</span>
                  <span className="font-heading text-3xl font-medium text-[#0F2643]">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#5F6F77]">
                  Shipping Address (Thane & India Wide)
                </p>

                <Link href="/checkout" className="mt-8 block">
                  <button className="flex h-14 w-full items-center justify-center rounded-full bg-[#0F2643] px-8 text-[12px] font-medium uppercase tracking-widest text-white transition hover:bg-[#DA6D40] hover:scale-[1.02]">
                    Proceed to Payment
                  </button>
                </Link>
                
                <p className="mt-4 text-center text-[11px] font-light text-[#5F6F77]">
                  Secure encrypted checkout via Razorpay.
                </p>
              </div>

            </div>
          )}
        </Container>
      </section>

      <Footer />
    </main>
  );
}