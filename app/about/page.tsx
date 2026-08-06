import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="font-sans relative flex min-h-screen flex-col bg-white selection:bg-[#DA6D40]/20 selection:text-[#0F2643]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[#FBECDB] pb-20 pt-10 lg:min-h-[80vh]">
        <div className="absolute top-0 h-24 w-full" aria-hidden="true"></div>

        <Image
          src="/patterns/Pattern wo Background.svg"
          alt=""
          fill
          priority
          className="pointer-events-none object-cover opacity-[0.50]"
        />

        <Container className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 rounded-full border border-[#0F2643]/10 bg-white/50 px-5 py-2 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
              About Whaleora
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl font-heading text-5xl leading-[1.1] tracking-tight text-[#0F2643] md:text-6xl lg:text-7xl">
            Safety shouldn&apos;t feel scary.
          </h1>

          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-[#5F6F77] md:text-xl">
            We believe personal safety should feel calm, intuitive and
            accessible—not intimidating.
          </p>
        </Container>
      </section>

      {/* Combined Story & Belief Section */}
      <section className="relative overflow-hidden bg-white py-12 md:py-12">
        <Image
          src="/patterns/Pattern wo Background.svg"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-[0.025]"
        />

        <Container className="relative">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            
            {/* LEFT COLUMN: Why Whaleora (Sticky on Desktop) */}
            <div className="mx-auto max-w-[600px] text-center lg:sticky lg:top-40 lg:mx-0 lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                Why Whaleora
              </p>

              <h2 className="mt-5 font-heading text-4xl leading-[1.1] tracking-tight text-[#0F2643] md:text-5xl">
                Preparedness belongs in everyday life.
              </h2>

              <div className="mt-8 space-y-6 text-lg font-light leading-relaxed text-[#5F6F77]">
                <p>
                  Whaleora exists to make personal safety simple, reliable and
                  beautifully designed.
                </p>

                <p>
                  We believe preparedness should become part of everyday
                  life—not something people think about only after an
                  emergency.
                </p>

                <p>
                  Through thoughtfully crafted products, awareness programmes
                  and institutional partnerships from our base in Thane, we are building an ecosystem
                  where safety feels calm, accessible and empowering.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Belief Cards */}
<div className="flex flex-col gap-4">
  
  {/* Optional Right-Side Context Header */}
  <div className="mb-4 text-center lg:text-left">
    <h3 className="font-heading text-3xl tracking-tight text-[#0F2643] md:text-4xl">
      Safety isn&apos;t panic. <br />
      Safety is confidence.
    </h3>
  </div>

  {/* Stacked Cards */}
  {[
    {
      title: "Vision",
      text: "A world where every person moves through life with the quiet confidence of knowing they are safe.",
    },
    {
      title: "Mission",
      text: "To make personal safety simple, reliable and accessible through thoughtfully designed products, education and partnerships.",
    },
    {
      title: "Promise",
      text: "Safety you can trust, when it matters most.",
    },
  ].map((card) => (
    <div
      key={card.title}
      // Changed to smaller rounded corners and reduced padding (p-6 and md:p-8)
      className="flex flex-col rounded-2xl bg-[#FBECDB]/40 p-6 transition duration-500 hover:-translate-y-1 hover:shadow-lg md:p-8"
    >
      {/* Scaled down heading sizes */}
      <h4 className="font-heading text-xl tracking-tight text-[#0F2643] md:text-2xl">
        {card.title}
      </h4>

      {/* Tighter top margin and scaled down text base */}
      <p className="mt-2 text-sm font-light leading-relaxed text-[#5F6F77] md:text-base">
        {card.text}
      </p>
    </div>
  ))}
</div>
            
          </div>
        </Container>
      </section>
      
      <Footer />
    </main>
  );
}