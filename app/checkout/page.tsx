"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import Script from "next/script";

export default function CheckoutPage() {
  const { cartTotal, cartItems, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  // Expanded Address State to include phone
  const [delivery, setDelivery] = useState({ name: "", phone: "", street: "", city: "", state: "", zip: "" });
  const [billing, setBilling] = useState({ name: "", phone: "", street: "", city: "", state: "", zip: "" });
  const [sameAsDelivery, setSameAsDelivery] = useState(true);

  // New Error State for inline validation
  const [errors, setErrors] = useState({ name: "", phone: "", street: "", city: "", state: "", zip: "" });

  const validateForm = () => {
    let newErrors = { name: "", phone: "", street: "", city: "", state: "", zip: "" };
    let isValid = true;

    if (!delivery.name.trim()) { newErrors.name = "Full name required"; isValid = false; }
    if (!/^[6-9]\d{9}$/.test(delivery.phone)) { newErrors.phone = "Enter a valid 10-digit mobile number"; isValid = false; }
    if (!delivery.street.trim()) { newErrors.street = "Enter full address including house, street, etc."; isValid = false; }
    if (!/^\d{6}$/.test(delivery.zip)) { newErrors.zip = "Enter a valid 6-digit PIN code"; isValid = false; }
    if (!delivery.city.trim()) { newErrors.city = "City is required"; isValid = false; }
    if (!delivery.state.trim()) { newErrors.state = "State is required"; isValid = false; }

    setErrors(newErrors);
    return isValid;
  };

  const handleDeliveryChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDelivery(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field as the user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }

    // Auto-fetch City and State if a 6-digit PIN is entered
    if (name === "zip" && value.length === 6 && /^\d+$/.test(value)) {
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${value}`);
        const data = await res.json();
        
        if (data && data[0].Status === "Success") {
          const postOffice = data[0].PostOffice[0];
          setDelivery(prev => ({
            ...prev,
            city: postOffice.District,
            state: postOffice.State
          }));
          // Clear any city/state errors if they existed
          setErrors(prev => ({ ...prev, city: "", state: "", zip: "" }));
        } else {
          setErrors(prev => ({ ...prev, zip: "Invalid PIN code for India" }));
        }
      } catch (error) {
        console.error("Failed to fetch pincode data", error);
      }
    }
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    if (cartTotal === 0) {
      alert("Your cart is empty!");
      return;
    }
    
    // Run our new inline validation
    if (!validateForm()) return;

    setIsProcessing(true);
    const finalBilling = sameAsDelivery ? delivery : billing;

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: cartTotal }),
      });

      const order = await response.json();
      if (!response.ok) throw new Error(order.error || "Failed to create order");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: order.amount, 
        currency: order.currency,
        name: "Whaleora",
        description: "Safety Essentials Order",
        order_id: order.id,
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch("/api/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                cartItems: cartItems,
                totalAmount: cartTotal,
                deliveryAddress: delivery,
                billingAddress: finalBilling,
              }),
            });

            const verifyData = await verifyRes.json();
            if (!verifyRes.ok || !verifyData.success) {
              alert("Payment verification failed! Please contact support.");
              return;
            }

            clearCart(); 
            router.push("/success");
          } catch (err) {
            console.error("Error saving order:", err);
            alert("Payment succeeded, but we had trouble saving your order. Please contact support.");
          }
        },
        prefill: {
          name: delivery.name,
          email: "", 
          contact: delivery.phone, // Passes the phone number to Razorpay
        },
        theme: { color: "#0F2643" },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
      
      razorpay.on("payment.failed", function (response: any) {
        alert(`Payment Failed: ${response.error.description}`);
      });

    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Something went wrong during checkout.");
    } finally {
      setIsProcessing(false);
    }
  };
// Add this right before the main return statement!
if (cartItems.length === 0) {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-md rounded-2xl border border-[#0F2643]/10 bg-white p-8 text-center shadow-sm">
            <h1 className="font-heading text-2xl text-[#0F2643]">Your cart is empty</h1>
            <p className="mt-2 text-sm text-[#5F6F77]">Looks like you haven't added any safety essentials yet.</p>
            <button 
              onClick={() => router.push("/")} // Change "/" to your products page if different
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[#0F2643] px-8 text-[12px] font-medium uppercase tracking-widest text-white transition hover:bg-[#DA6D40]"
            >
              Continue Shopping
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}

// Your existing return (...) goes here
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <section className="py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            
            {/* Left Column: Address Forms */}
            <div className="rounded-2xl border border-[#0F2643]/10 bg-white p-8 shadow-sm">
              <h2 className="mb-6 font-heading text-2xl text-[#0F2643]">Delivery Address</h2>
              <div className="grid gap-4">
                
                {/* Name Input */}
                <div>
                  <input type="text" name="name" value={delivery.name} placeholder="Full Name" onChange={handleDeliveryChange} className={`w-full rounded-md border p-3 text-sm outline-none ${errors.name ? "border-red-500 bg-red-50" : "focus:border-[#0F2643]"}`} />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                {/* Phone Input */}
                <div>
                  <input type="tel" name="phone" value={delivery.phone} placeholder="Mobile Number (10 digits)" maxLength={10} onChange={handleDeliveryChange} className={`w-full rounded-md border p-3 text-sm outline-none ${errors.phone ? "border-red-500 bg-red-50" : "focus:border-[#0F2643]"}`} />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                {/* Pincode Input */}
                <div>
                  <input type="text" name="zip" value={delivery.zip} placeholder="PIN Code" maxLength={6} onChange={handleDeliveryChange} className={`w-full rounded-md border p-3 text-sm outline-none ${errors.zip ? "border-red-500 bg-red-50" : "focus:border-[#0F2643]"}`} />
                  {errors.zip && <p className="mt-1 text-xs text-red-500">{errors.zip}</p>}
                </div>

                {/* City and State (Auto-filled) */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input type="text" name="city" value={delivery.city} placeholder="City" onChange={handleDeliveryChange} className={`w-full rounded-md border p-3 text-sm outline-none ${errors.city ? "border-red-500 bg-red-50" : "focus:border-[#0F2643]"}`} />
                    {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
                  </div>
                  <div>
                    <input type="text" name="state" value={delivery.state} placeholder="State" onChange={handleDeliveryChange} className={`w-full rounded-md border p-3 text-sm outline-none ${errors.state ? "border-red-500 bg-red-50" : "focus:border-[#0F2643]"}`} />
                    {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
                  </div>
                </div>

                {/* Street Input */}
                <div>
                  <input type="text" name="street" value={delivery.street} placeholder="Flat, House no., Building, Company, Apartment" onChange={handleDeliveryChange} className={`w-full rounded-md border p-3 text-sm outline-none ${errors.street ? "border-red-500 bg-red-50" : "focus:border-[#0F2643]"}`} />
                  {errors.street && <p className="mt-1 text-xs text-red-500">{errors.street}</p>}
                </div>

              </div>

              {/* Billing Checkbox */}
              <div className="mt-6 flex items-center gap-2">
                <input type="checkbox" id="sameAsDelivery" checked={sameAsDelivery} onChange={(e) => setSameAsDelivery(e.target.checked)} className="h-4 w-4 accent-[#0F2643]" />
                <label htmlFor="sameAsDelivery" className="text-sm text-[#5F6F77]">Billing address is same as delivery</label>
              </div>
            </div>

            {/* Right Column: Order Summary & Pay */}
            <div className="h-fit rounded-2xl border border-[#0F2643]/10 bg-white p-8 shadow-sm">
              <h1 className="font-heading text-3xl text-[#0F2643]">Order Summary</h1>
              <p className="mt-2 text-[14px] font-light text-[#5F6F77]">
                You are purchasing {cartItems.length} item(s) for a total of ₹{cartTotal.toLocaleString("en-IN")}.
              </p>

              <button
                onClick={handlePayment}
                disabled={isProcessing || cartTotal === 0}
                className="mt-8 flex h-14 w-full items-center justify-center rounded-full bg-[#0F2643] text-[12px] font-medium uppercase tracking-widest text-white transition hover:bg-[#DA6D40] disabled:opacity-50 disabled:hover:bg-[#0F2643]"
              >
                {isProcessing ? "Processing..." : `Pay ₹${cartTotal.toLocaleString("en-IN")}`}
              </button>
            </div>
            
          </div>
        </Container>
      </section>
    </main>
  );
}