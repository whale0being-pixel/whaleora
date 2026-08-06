"use client";

import React, { useEffect, useRef, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export interface SlideData {
  title: string;
  button: string;
  src: string;
  href: string;
  category?: string;
}

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    checkScrollability();
  }, []);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      // Adjusted scroll distance to match the new, smaller card width + gap
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      {/* Right side fade gradient */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[5%] bg-gradient-to-l from-white to-transparent" />

      {/* Main Scroll Container */}
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-row justify-start gap-4 pl-4 md:gap-6 md:pl-10">
          {slides.map((slide, index) => (
            <Link
              href={slide.href}
              key={"card" + index}
              // Scaled down dimensions: Mobile (220x300) | Desktop (280x380)
              className="group relative z-10 flex h-[300px] w-[220px] shrink-0 flex-col justify-between overflow-hidden rounded-[24px] bg-[#FBECDB]/20 sm:h-[380px] sm:w-[280px] transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#0F2643]/10 last:mr-[5vw]"
            >
              {/* Top Gradient for Text Readability */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-2/3 bg-gradient-to-b from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              
              {/* Bottom Gradient for Button Readability */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Card Content (Top) */}
              <div className="relative z-30 p-5 md:p-6">
                {slide.category && (
                  <p className="text-left font-sans text-[10px] font-bold uppercase tracking-widest text-[#DA6D40]">
                    {slide.category}
                  </p>
                )}
                {/* Scaled down heading size */}
                <h3 className="mt-2 text-left font-heading text-xl font-medium leading-tight text-white md:text-2xl">
                  {slide.title}
                </h3>
              </div>

              {/* Card Content (Bottom) */}
              <div className="relative z-30 flex w-full p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-6">
                <div className="flex h-9 w-fit items-center justify-center rounded-full bg-white px-5 text-[10px] font-bold uppercase tracking-widest text-[#0F2643] shadow-md transition-colors group-hover:bg-[#DA6D40] group-hover:text-white">
                  {slide.button}
                </div>
              </div>

              {/* Background Image */}
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="absolute inset-0 z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 220px, 280px"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mr-4 mt-2 flex justify-end gap-2 md:mr-10">
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full border border-[#0F2643]/10 bg-white text-[#0F2643] shadow-sm transition-all hover:bg-[#0F2643] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#0F2643]"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label="Previous slide"
        >
          <IconArrowNarrowLeft className="h-5 w-5 text-current" />
        </button>
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full border border-[#0F2643]/10 bg-white text-[#0F2643] shadow-sm transition-all hover:bg-[#0F2643] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#0F2643]"
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label="Next slide"
        >
          <IconArrowNarrowRight className="h-5 w-5 text-current" />
        </button>
      </div>
    </div>
  );
}