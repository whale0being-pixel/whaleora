import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Belief from "@/components/layout/Belief";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import About from "@/components/layout/About";
import TrustBar from "@/components/layout/TrustBar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1. HERO COMPONENT (Kept at full immersive scale) */}
      <Hero />
{/* 2. BELIEF COMPONENT */}
<TrustBar />
      
{/* 2. BELIEF COMPONENT */}
<About />
      {/* 3. WHY WHALEORA (Brand Value Props) */}
      <section className="bg-white py-16 md:py-20">
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

      {/* 4. FEATURED PRODUCTS */}
      <section className="bg-[#FBECDB]/30 py-16 md:py-20">
        <Container>
          <div className="flex flex-col items-center text-center">
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

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Product 1 */}
            <div className="group flex flex-col justify-between rounded-2xl border border-[#0F2643]/10 bg-white p-6 transition-all duration-300 hover:border-[#DA6D40]/40 hover:shadow-md">
              <div>
                <div className="flex h-52 w-full items-center justify-center rounded-xl bg-[#FBECDB]/30 transition-colors group-hover:bg-[#FBECDB]/60">
                  <Image
                    src="/images/Spray MockUP.png"
                    alt="SOS Alarm"
                    width={180}
                    height={180}
                    className="h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
                  Acoustic Defense
                </p>
                <h3 className="mt-1.5 font-heading text-xl tracking-tight text-[#0F2643]">
                  SOS Alarm
                </h3>
                <p className="mt-2 text-[12px] font-light leading-relaxed text-[#5F6F77]">
                  130dB piercing dual-siren with built-in strobe LED for immediate attention deterrent.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-[#0F2643]/5 pt-4">
                <span className="font-heading text-base font-medium text-[#0F2643]">₹1,299</span>
                <Link href="/products/sos-alarm" className="text-[11px] font-medium uppercase tracking-wider text-[#0F2643] transition-colors hover:text-[#DA6D40]">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group flex flex-col justify-between rounded-2xl border border-[#0F2643]/10 bg-white p-6 transition-all duration-300 hover:border-[#DA6D40]/40 hover:shadow-md">
              <div>
                <div className="flex h-52 w-full items-center justify-center rounded-xl bg-[#FBECDB]/30 transition-colors group-hover:bg-[#FBECDB]/60">
                  <Image
                    src="/images/Spray MockUP.png"
                    alt="Pepper Spray"
                    width={180}
                    height={180}
                    className="h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
                  Rapid Response
                </p>
                <h3 className="mt-1.5 font-heading text-xl tracking-tight text-[#0F2643]">
                  Pepper Spray
                </h3>
                <p className="mt-2 text-[12px] font-light leading-relaxed text-[#5F6F77]">
                  High-velocity ballistic stream formulation with flip-top safety guard for effortless use.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-[#0F2643]/5 pt-4">
                <span className="font-heading text-base font-medium text-[#0F2643]">₹649</span>
                <Link href="/products/pepper-spray" className="text-[11px] font-medium uppercase tracking-wider text-[#0F2643] transition-colors hover:text-[#DA6D40]">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group flex flex-col justify-between rounded-2xl border border-[#0F2643]/10 bg-white p-6 transition-all duration-300 hover:border-[#DA6D40]/40 hover:shadow-md sm:col-span-2 lg:col-span-1">
              <div>
                <div className="flex h-52 w-full items-center justify-center rounded-xl bg-[#FBECDB]/30 transition-colors group-hover:bg-[#FBECDB]/60">
                  <Image
                    src="/images/Spray MockUP.png"
                    alt="Window Breaker"
                    width={180}
                    height={180}
                    className="h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
                  Emergency Escape
                </p>
                <h3 className="mt-1.5 font-heading text-xl tracking-tight text-[#0F2643]">
                  Window Breaker
                </h3>
                <p className="mt-2 text-[12px] font-light leading-relaxed text-[#5F6F77]">
                  Spring-loaded tungsten steel mechanism designed to shatter automotive glass instantly.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-[#0F2643]/5 pt-4">
                <span className="font-heading text-base font-medium text-[#0F2643]">₹899</span>
                <Link href="/products/window-breaker" className="text-[11px] font-medium uppercase tracking-wider text-[#0F2643] transition-colors hover:text-[#DA6D40]">
                  View Details →
                </Link>
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
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