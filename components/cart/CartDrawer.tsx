"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../app/context/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-[#0F2643]/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-500 sm:max-w-md">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#0F2643]/10 px-6 py-5">
          <h2 className="font-heading text-lg tracking-tight text-[#0F2643]">Your Cart</h2>
          <button 
            onClick={onClose}
            className="text-[11px] font-medium uppercase tracking-wider text-[#5F6F77] transition-colors hover:text-[#DA6D40]"
          >
            Close
          </button>
        </div>

        {/* Cart Items (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-[13px] font-light text-[#5F6F77]">Your cart is currently empty.</p>
              <button 
                onClick={onClose}
                className="mt-4 text-[11px] font-medium text-[#DA6D40] hover:underline hover:underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <li key={item.id} className="flex gap-5">
                  {/* Item Image */}
                  <div className="relative flex h-24 w-20 shrink-0 items-center justify-center rounded-xl bg-[#FBECDB]/50 overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      width={60} 
                      height={60} 
                      className="h-auto max-h-16 w-auto object-contain"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-[15px] leading-tight tracking-tight text-[#0F2643]">
                        {item.name}
                      </h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-[10px] text-[#5F6F77] transition-colors hover:text-[#DA6D40]"
                      >
                        Remove
                      </button>
                    </div>
                    
                    <div className="flex items-end justify-between">
                      <div className="flex h-8 w-20 items-center justify-between rounded-full border border-[#0F2643]/15 px-3">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-xs text-[#0F2643]/60 hover:text-[#0F2643] transition-colors"
                        >
                          −
                        </button>
                        <span className="text-[11px] text-[#0F2643]">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-xs text-[#0F2643]/60 hover:text-[#0F2643] transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-heading text-[15px] tracking-tight text-[#0F2643]">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t border-[#0F2643]/10 bg-white px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="font-heading text-[15px] tracking-tight text-[#0F2643]">Subtotal</span>
              <span className="font-heading text-xl tracking-tight text-[#0F2643]">
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>
            <p className="mt-2 text-[11px] font-light text-[#5F6F77]">
              Shipping and taxes calculated at checkout.
            </p>
            
            <Link href="/checkout" onClick={onClose}>
              <button className="mt-5 flex h-10 w-full items-center justify-center rounded-full bg-[#0F2643] px-8 text-[11px] font-medium text-white transition duration-300 hover:bg-[#DA6D40]">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}