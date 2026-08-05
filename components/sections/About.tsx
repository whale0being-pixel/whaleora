import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import TrustBar from "@/components/layout/TrustBar";
import About from "@/components/layout/About";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { Carousel, SlideData } from "@/components/ui/carousel";

// Define your product data for the Carousel
const productSlides: SlideData[] = [
  {
    title: "Personal SOS Alarm",
    button: "View Details →",
    src: "/images/SOS mock up.png",
    href: "/products/sos-alarm",
  },
  {
    title: "Pepper Spray",
    button: "View Details →",
    src: "/images/Spray MockUP.png",
    href: "/products/pepperspray",
  },
  {
    title: "Emergency Window Breaker",
    button: "View Details →",
    src: "/images/Window Breaker mock up.png",
    href: "/products/windowbreaker",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* 1. HERO COMPONENT */}
      <Hero />
      
      {/* 2. TRUST & ABOUT */}
      <TrustBar />
      <About />
      
      {/* 3. WHY WHALEORA */}
      <section className="bg-white py-9 md:py-9">
        <Container>
          <div className="flex flex-col items-center text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
              The Standard
            </p>
            <h2 className="mt-3 font-heading text-3xl tracking-tight text-[#0F2643] md:text-4xl">
              Why Whaleora?
            </h2>
            <p className="mt-3 max-w-md text-[13px] font-light text-[#5F6F77]">
              Reinventing personal safety through refined aesthetics, rigorous testing, and empathetic design.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#0F2643]/10 bg-[#FBECDB]/20 p-6">
              <p className="font-heading text-xl text-[#0F2643]">Discreet & Minimal</p>
              <p className="mt-2 text-[13px] font-light leading-relaxed text-[#5F6F77]">
                Designed to blend effortlessly into your daily wardrobe and accessories without looking intimidating.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0F2643]/10 bg-[#FBECDB]/20 p-6">
              <p className="font-heading text-xl text-[#0F2643]">Rigorously Tested</p>
              <p className="mt-2 text-[13px] font-light leading-relaxed text-[#5F6F77]">
                Every acoustic alarm and deterrent spray is engineered to perform precisely when it matters most.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0F2643]/10 bg-[#FBECDB]/20 p-6 sm:col-span-2 lg:col-span-1">
              <p className="font-heading text-xl text-[#0F2643]">Community-First</p>
              <p className="mt-2 text-[13px] font-light leading-relaxed text-[#5F6F77]">
                Backed by institutional partnerships and practical educational programs across India.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. FEATURED PRODUCTS (Replaced with Carousel) */}
      <section className="bg-[#FBECDB]/30 py-8 md:py-8 overflow-hidden">
        <Container>
          <div className="flex flex-col items-center text-center mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
              The Essentials
            </p>
            <h2 className="mt-3 font-heading text-3xl tracking-tight text-[#0F2643] md:text-4xl">
              Engineered for absolute confidence.
            </h2>
            <p className="mt-3 max-w-md text-[13px] font-light text-[#5F6F77]">
              Compact, elegant tools designed to integrate seamlessly into your daily routine.
            </p>
          </div>

          {/* The New 3D Carousel */}
          <div className="flex w-full justify-center pb-12">
            <Carousel slides={productSlides} />
          </div>

          <div className="mt-16 text-center">
            <Link href="/products">
              <button className="inline-flex h-10 items-center justify-center rounded-full bg-[#0F2643] px-7 text-[11px] font-medium uppercase tracking-widest text-white transition-all hover:bg-[#DA6D40]">
                View All Products
              </button>
            </Link>
          </div>
        </Container>
      </section>

      {/* 5. SAFETY HUB BANNER */}
      <section className="bg-[#0F2643] py-16 text-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                Whaleora Library
              </p>
              <h2 className="mt-3 font-heading text-2xl leading-tight tracking-tight text-[#FBECDB] sm:text-3xl">
                Knowledge is preparedness.
              </h2>
              <p className="mt-4 text-[13px] font-light leading-relaxed text-white/70">
                Access free safety checklists, de-escalation guides, and emergency contact templates customized for students, professionals, and families.
              </p>
              <div className="mt-6">
                <Link href="/safety-hub">
                  <button className="inline-flex h-10 items-center justify-center rounded-full bg-[#DA6D40] px-7 text-[11px] font-medium uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[#0F2643]">
                    Visit Safety Hub
                  </button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="font-heading text-2xl text-[#FBECDB]">100%</p>
                <p className="mt-1 text-[10px] font-light text-white/60">Reliable hardware specs</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="font-heading text-2xl text-[#FBECDB]">24/7</p>
                <p className="mt-1 text-[10px] font-light text-white/60">Ready when you are</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="font-heading text-2xl text-[#FBECDB]">B2B</p>
                <p className="mt-1 text-[10px] font-light text-white/60">Institutional programs</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="font-heading text-2xl text-[#FBECDB]">130dB</p>
                <p className="mt-1 text-[10px] font-light text-white/60">Acoustic power output</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}