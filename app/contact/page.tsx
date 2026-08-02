"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// --- FAQ Data Structure ---
const faqCategories = [
  {
    id: "products",
    title: "Safety Kits & Products",
    faqs: [
      {
        q: "Are the safety tools legal to carry?",
        a: "Yes, all items in our everyday safety kits, including our 130dB personal alarms, are entirely legal to carry for self-defence in most jurisdictions. However, please check local regulations regarding pepper sprays.",
      },
      {
        q: "How loud is the personal safety alarm?",
        a: "Our alarms emit a piercing 130dB siren. To put that in perspective, it is as loud as a jet engine at close range and can be heard up to 300 metres away, designed to instantly deter threats and attract attention.",
      },
      {
        q: "Can I take my safety kit on an aeroplane?",
        a: "While personal alarms and window breakers are generally permitted in checked luggage, pepper sprays and certain sharp tools are strictly prohibited on commercial flights. Always review airline guidelines before travelling.",
      },
      {
        q: "Do personal alarms require batteries?",
        a: "Yes, they come pre-installed with long-lasting batteries (usually CR2032 or LR44) that can last up to 365 days on standby or 40 continuous minutes of alarm piercing sound.",
      },
    ],
  },
  {
    id: "orders",
    title: "Orders & Shipping",
    faqs: [
      {
        q: "How long does delivery take?",
        a: "Standard delivery typically takes 3-5 business days depending on your location. We also offer express 1-2 day shipping at checkout for urgent preparedness needs.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently, we only ship within the country to ensure we comply with specific regional safety and self-defence product laws.",
      },
      {
        q: "Can I return a safety kit if I change my mind?",
        a: "We offer a 14-day return policy for unused items in their original packaging. For safety and hygiene reasons, any deployed pepper sprays or used alarms cannot be returned.",
      },
    ],
  },
];

export default function ContactPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const currentCategory = faqCategories.find((c) => c.id === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pb-12 pt-10 md:pb-16">
        <div className="h-16 w-full md:h-20" aria-hidden="true"></div>

        <Image
          src="/patterns/Pattern wo Background.svg"
          alt=""
          fill
          priority
          className="pointer-events-none object-cover opacity-[0.10]"
        />

        <Container className="relative z-10 flex w-full flex-col items-center justify-center text-center">
          <div className="flex w-full max-w-2xl flex-col items-center justify-center text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
              Help & Support
            </p>

            <h1 className="mt-3 font-heading text-3xl leading-tight tracking-tight text-[#0F2643] md:text-4xl lg:text-5xl">
              We&apos;re here to help.
            </h1>

            <p className="mt-4 text-sm font-light leading-relaxed text-[#5F6F77] md:text-base">
              Browse our frequently asked questions or get in touch with our team for support, institutional partnerships, and general inquiries.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section (Moxie-style Side-by-Side) */}
      <section className="relative z-10 border-t border-[#0F2643]/5 bg-white py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] lg:gap-16">
            
            {/* LEFT: CATEGORY SIDEBAR */}
            <div className="flex flex-col gap-2 md:sticky md:top-32 md:self-start">
              <h3 className="mb-2 px-5 font-heading text-lg tracking-tight text-[#0F2643]">
                FAQs
              </h3>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenFaqIndex(0); // Reset accordion state on tab switch
                  }}
                  className={`text-left px-5 py-2.5 text-[11px] font-medium transition-all duration-300 rounded-lg ${
                    activeCategory === category.id
                      ? "bg-[#FBECDB] text-[#0F2643]"
                      : "text-[#5F6F77] hover:bg-[#FBECDB]/30 hover:text-[#0F2643]"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* RIGHT: DYNAMIC CONTENT */}
            <div className="min-h-[300px] md:pt-9">
              <div className="flex flex-col divide-y divide-[#0F2643]/10 border-y border-[#0F2643]/10">
                {currentCategory?.faqs?.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={index} className="py-4">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between text-left group"
                      >
                        <h3 className={`font-heading text-[13px] tracking-tight transition-colors ${
                          isOpen ? "text-[#DA6D40]" : "text-[#0F2643] group-hover:text-[#DA6D40]"
                        }`}>
                          {faq.q}
                        </h3>
                        <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FBECDB]/50 text-xs text-[#0F2643] transition-transform duration-300">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-[11px] font-light leading-relaxed text-[#5F6F77] pr-8">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
          </div>
        </Container>
      </section>

      {/* Contact Content & Form */}
      <section className="relative w-full bg-white pb-20 pt-12 md:pb-24">
        <Image
          src="/patterns/Pattern wo Background.svg"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-[0.025]"
        />

        <Container className="relative z-10">
          <div className="mx-auto mb-12 max-w-xl text-center md:mb-16">
            <h2 className="font-heading text-2xl leading-tight tracking-tight text-[#0F2643] md:text-xl">
              Still have questions?
            </h2>
            <p className="mt-3 text-sm font-light leading-relaxed text-[#5F6F77]">
              If you couldn't find what you were looking for, reach out to us directly. We typically respond within 24 hours.
            </p>
          </div>

          <div className="grid w-full items-start gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* LEFT COLUMN: Contact Details */}
            <div className="mx-auto flex max-w-[480px] flex-col text-center lg:sticky lg:top-32 lg:mx-0 lg:text-left lg:pt-4">
              
              <div className="flex flex-col items-center gap-6 lg:items-start">
                
                {/* WHATSAPP LINK */}
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                    Direct Message
                  </p>
                  <a 
                    href="https://wa.me/8169219734?text=Hi%20Whaleora!%20I%20have%20an%20inquiry." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group mt-2 flex w-fit items-center gap-2.5 rounded-full border border-[#0F2643]/10 px-4 py-2 text-[13px] font-medium text-[#0F2643] transition-all hover:border-[#DA6D40] hover:text-[#DA6D40]"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    Message on WhatsApp
                  </a>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                    General Inquiries
                  </p>
                  <a href="mailto:hello@whaleora.com" className="mt-1.5 block text-[15px] font-medium text-[#0F2643] transition-colors hover:text-[#DA6D40]">
                    hello@whaleora.com
                  </a>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                    Partnerships & Institutions
                  </p>
                  <a href="mailto:partners@whaleora.com" className="mt-1.5 block text-[15px] font-medium text-[#0F2643] transition-colors hover:text-[#DA6D40]">
                    partners@whaleora.com
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Form */}
            <div className="w-full rounded-2xl bg-[#FBECDB]/40 p-6 md:p-10">
              <form className="flex flex-col gap-2">
                
                <div className="relative flex flex-col">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0F2643]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    className="mt-1 w-full border-b border-[#0F2643]/20 bg-transparent py-2.5 text-[13px] font-light text-[#0F2643] placeholder:text-[#5F6F77]/50 focus:border-[#DA6D40] focus:outline-none focus:ring-0"
                    required
                  />
                </div>

                <div className="relative flex flex-col">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0F2643]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jane@example.com"
                    className="mt-1 w-full border-b border-[#0F2643]/20 bg-transparent py-2.5 text-[13px] font-light text-[#0F2643] placeholder:text-[#5F6F77]/50 focus:border-[#DA6D40] focus:outline-none focus:ring-0"
                    required
                  />
                </div>

                <div className="relative flex flex-col">
                  <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0F2643]">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    className="mt-1 w-full border-b border-[#0F2643]/20 bg-transparent py-2.5 text-[13px] font-light text-[#0F2643] placeholder:text-[#5F6F77]/50 focus:border-[#DA6D40] focus:outline-none focus:ring-0"
                    required
                  />
                </div>

                <div className="relative flex flex-col">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0F2643]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us a little more about your inquiry..."
                    className="mt-1 w-full resize-none border-b border-[#0F2643]/20 bg-transparent py-2.5 text-[13px] font-light text-[#0F2643] placeholder:text-[#5F6F77]/50 focus:border-[#DA6D40] focus:outline-none focus:ring-0"
                    required
                  ></textarea>
                </div>

                <div className="mt-2 flex">
                  <button
                    type="submit"
                    className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-[#0F2643] px-8 text-[11px] font-medium text-white transition duration-300 hover:bg-[#DA6D40]"
                  >
                    Send Message
                  </button>
                </div>
                
              </form>
            </div>
            
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}