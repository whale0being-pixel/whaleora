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
  {
    title: "Survival Whistle",
    button: "View Details →",
    src: "/images/Whistle mock up.png",
    href: "/products/whistle",
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
      <section className="bg-[#FBECDB]/30 py-10 overflow-hidden">
        <Container>
          {/* Reduced margin-bottom and slightly scaled down headings to match the new compact cards */}
          <div className="mb-4 flex flex-col items-center text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
              The Essentials
            </p>
            <h2 className="mt-2 font-heading text-2xl tracking-tight text-[#0F2643] md:text-3xl">
              Engineered for absolute confidence.
            </h2>
            <p className="mt-2 max-w-md text-[13px] font-light text-[#5F6F77]">
              Compact, elegant tools designed to integrate seamlessly into your daily routine.
            </p>
          </div>

          {/* The New Carousel - Removed pb-12 padding */}
          <div className="flex w-full justify-center">
            <Carousel slides={productSlides} />
          </div>

          {/* Slashed the top margin from mt-16 to mt-4 */}
          <div className="mt-4 text-center">
            <Link href="/products">
              <button className="inline-flex h-10 items-center justify-center rounded-full bg-[#0F2643] px-7 text-[11px] font-medium uppercase tracking-widest text-white transition-all hover:bg-[#DA6D40]">
                View All Products
              </button>
            </Link>
          </div>
        </Container>
      </section>
      {/* 5. SAFETY HUB BANNER */}
      <section className="bg-white py-10 md:py-12">
        <Container>
          <div className="relative overflow-hidden rounded-[24px] bg-[#FBECDB]/40 p-8 md:p-10 lg:p-12">
            
            {/* Subtle background ambient glows */}
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#DA6D40]/10 blur-[60px]" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#0F2643]/5 blur-[60px]" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
              
              {/* Left Content: The Pitch */}
              <div className="max-w-lg text-center lg:text-left lg:mr-auto">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                  Whaleora Safety Hub
                </p>
                
                <h2 className="mt-3 font-heading text-2xl leading-[1.1] tracking-tight text-[#0F2643] md:text-3xl lg:text-4xl">
                  Preparedness is a habit.
                </h2>
                
                <p className="mt-3 text-[13px] font-light leading-relaxed text-[#5F6F77]">
                  Access free checklists, situational guides, and expert resources designed for everyday confidence.
                </p>
                
                <div className="mt-6 flex justify-center lg:justify-start">
                  <Link href="/safety-hub">
                    <button className="inline-flex h-10 items-center justify-center rounded-full bg-[#0F2643] px-7 text-[10px] font-medium uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DA6D40] hover:shadow-lg hover:shadow-[#DA6D40]/20">
                      Explore The Hub
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Content: Streamlined Minimal Cards */}
              <div className="grid w-full grid-cols-2 gap-3 sm:max-w-md lg:shrink-0">
                {[
                  { title: "Guides", desc: "Everyday situational awareness." },
                  { title: "Checklists", desc: "Travel and campus prep." },
                  { title: "Workshops", desc: "Institutional training." },
                  { title: "Resources", desc: "Emergency templates." },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col justify-center rounded-xl border border-white/60 bg-white/50 p-4 shadow-sm backdrop-blur-md transition-colors hover:bg-white"
                  >
                    <h3 className="font-heading text-base font-medium text-[#0F2643]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[11px] font-light leading-relaxed text-[#5F6F77]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}