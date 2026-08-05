"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#FBECDB] pb-12 pt-12 md:pb-12 md:pt-12">
      {/* Background Pattern */}
      <Image
        src="/patterns/Pattern wo Background.svg"
        alt=""
        fill
        priority
        className="pointer-events-none object-cover opacity-[0.50]"
      />

      <Container className="relative z-10">
        
        {/* Hub Header */}
        <div className="relative text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
            Whaleora Safety Hub
          </p>

          <h1 className="mx-auto mt-4 font-heading text-4xl leading-[1.1] tracking-tight text-[#0F2643] md:text-5xl lg:text-6xl">
            Learn. Prepare. Stay Safe.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-[#5F6F77] md:text-lg">
            Practical guides, safety awareness resources, institutional
            programmes, and everyday preparedness—all designed to help you
            move through life with confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("PersonaSelector")}
              className="rounded-full bg-[#0F2643] px-8 py-4 text-white transition hover:bg-[#192340]"
            >
              Explore Guides
            </button>
            
            <button
              onClick={() => scrollToSection("Downloads")}
              className="rounded-full border border-[#0F2643]/20 px-8 py-4 text-[#0F2643] transition hover:bg-white"
            >
              Browse Resources
            </button>
          </div>
        </div>

        {/* Featured Card */}
        <div className="relative mt-16 overflow-hidden rounded-[32px] bg-white/80 shadow-[0_20px_40px_rgba(15,38,67,0.04)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 md:mt-20">
          <div className="grid items-stretch lg:grid-cols-2">
            
            {/* Image Side */}
            <div className="relative flex min-h-[280px] items-center justify-center bg-black/5 lg:min-h-[400px]">
              {/* Subtle ambient glow behind the image */}
              <div className="absolute h-48 w-48 rounded-full bg-[#DA6D40]/10 blur-[60px]" />
              
              <Image
                src="/images/SOS.png"
                alt="Safety Guide"
                fill
                className="relative z-10 object-contain p-8 md:p-12 drop-shadow-lg"
              />
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                Featured Guide
              </p>

              <h2 className="mt-4 font-heading text-3xl leading-[1.1] tracking-tight text-[#0F2643] md:text-4xl">
                10 Everyday Safety Habits Everyone Should Know
              </h2>

              <p className="mt-4 text-base font-light leading-relaxed text-[#5F6F77]">
                Personal safety isn't about fear—it's about preparation.
                Discover simple habits that make everyday life safer at home,
                while travelling, commuting or studying.
              </p>

              <div className="mt-8 flex">
                <button className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium">
                  Read Guide
                </button>
              </div>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}