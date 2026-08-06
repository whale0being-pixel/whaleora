"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/button";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const products = [
  
  {
    id: "p-2",
    name: "Personal SOS Alarm",
    subtitle: "Compact & ultra-loud alarm",
    price: "₹1799",
    category: "Alarms",
    image: "/images/SOS mock up.png",
    badge: "Bestseller",
    href: "/products/sos-alarm",
  },
  {
    id: "p-5",
    name: "Pepper Spray",
    subtitle: "Quick-release self defense",
    price: "₹499",
    category: "Tools",
    image: "/images/Spray MockUP.png",
    badge: "Essential",
    href: "/products/pepperspray",
  },
  {
    id: "p-8",
    name: "Survival Whistle",
    subtitle: "120dB dual-tube design",
    price: "₹299",
    category: "Alarms",
    image: "/images/Whistle mock up.png",
    href: "/products/whistle",
  },
  {
    id: "p-3",
    name: "Emergency Window Breaker",
    subtitle: "Emergency escape tool",
    price: "₹599",
    category: "Tools",
    image: "/images/Window Breaker mock up.png",
    href: "/products/windowbreaker",
  },
  {
    id: "p-1",
    name: "The Everyday Safety Kit",
    subtitle: "Complete personal protection",
    price: "₹2,499",
    category: "Kits",
    image: "/images/Spray MockUP.png", 
    href: "#",
  },
 
  {
    id: "p-4",
    name: "Campus Preparedness Pack",
    subtitle: "Curated for students",
    price: "₹1,999",
    category: "Kits",
    image: "/images/Spray MockUP.png",
    href: "#",
  },

  {
    id: "p-6",
    name: "First Aid Mini",
    subtitle: "Essential medical supplies",
    price: "₹499",
    category: "Kits",
    image: "/images/Spray MockUP.png",
    href: "#",
  },
  {
    id: "p-7",
    name: "Reflective Safety Vest",
    subtitle: "High visibility for commuters",
    price: "₹699",
    category: "Apparel",
    image: "/images/Spray MockUP.png",
    href: "#",
  },
  
  {
    id: "p-9",
    name: "Drink Cover",
    subtitle: "Comprehensive household safety",
    price: "₹599",
    category: "Tools",
    image: "/images/Spray MockUP.png",
    href: "#",
  },
];

const categories = ["All", "Kits", "Alarms", "Tools", "Apparel"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-[#FBECDB] py-20 lg:py-28">
        <Image
          src="/patterns/Pattern wo Background.svg"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-[0.50]"
        />

        <Container className="relative text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
            The Collection
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight tracking-tight text-[#0F2643] md:text-5xl lg:text-6xl">
            Engineered for absolute confidence.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[14px] font-light leading-relaxed text-[#5F6F77]">
            Compact, elegant personal safety essentials designed to integrate seamlessly into your daily routine.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-[10px] font-medium uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? "bg-[#0F2643] text-white"
                    : "border border-[#0F2643]/10 bg-white/60 text-[#0F2643] hover:border-[#DA6D40]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Filter & Grid Section */}
      <section className="py-3 md:py-3">
        <Container>
          <div className="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((prod) => (
              <CardContainer key={prod.id} className="inter-var !my-0 !py-0 w-full">
                <CardBody className="group/card relative flex h-full w-full flex-col justify-between rounded-2xl border border-[#0F2643]/10 bg-white p-8 transition-all duration-300 hover:border-[#DA6D40]/40 hover:shadow-2xl hover:shadow-[#DA6D40]/10">
                  <div>
                    {/* NEW CODE */}
<Link href={prod.href} className="block">
  <CardItem
    translateZ="80"
    // Removed flex/items-center and added overflow-hidden to keep the hover effect inside the rounded corners
    className="relative h-64 w-full overflow-hidden rounded-xl bg-[#FBECDB]/30 transition-colors group-hover/card:bg-[#FBECDB]/60"
  >
    {prod.badge && (
      <CardItem
        translateZ="110"
        className="absolute left-3 top-3 z-10 rounded-full bg-[#DA6D40] px-3 py-1 text-[8px] font-bold uppercase tracking-wider text-white"
      >
        {prod.badge}
      </CardItem>
    )}
    <Image
      src={prod.image}
      alt={prod.name}
      fill // Tells Next.js to fill the parent container completely
      className="object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
    />
  </CardItem>
</Link>

                    <CardItem
                      translateZ="40"
                      className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-[#DA6D40]"
                    >
                      {prod.category}
                    </CardItem>

                    <Link href={prod.href}>
                      <CardItem
                        translateZ="50"
                        as="h3"
                        className="mt-2 font-heading text-2xl tracking-tight text-[#0F2643] transition-colors group-hover/card:text-[#DA6D40]"
                      >
                        {prod.name}
                      </CardItem>
                    </Link>

                    <CardItem
                      translateZ="30"
                      as="p"
                      className="mt-2 text-[13px] font-light leading-relaxed text-[#5F6F77]"
                    >
                      {prod.subtitle}
                    </CardItem>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#0F2643]/5 pt-6">
                    <CardItem
                      translateZ="40"
                      className="font-heading text-lg font-medium text-[#0F2643]"
                    >
                      {prod.price}
                    </CardItem>

                    <CardItem translateZ="50">
                      <Link href={prod.href}>
                      <Button className="flex h-9 items-center justify-center rounded-full px-5 text-[10px] font-medium uppercase tracking-wider">
                          View Details
                        </Button>
                      </Link>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="flex w-full flex-col items-center justify-center py-20 text-center">
              <p className="text-[13px] font-light text-[#5F6F77]">
                No products found in this category.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-[11px] font-medium text-[#DA6D40] hover:underline"
              >
                View all products
              </button>
            </div>
          )}
        </Container>
      </section>

      <Footer />
    </main>
  );
}