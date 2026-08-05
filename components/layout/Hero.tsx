import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-[#FBECDB] pb-20 pt-10">
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
            The New Standard in Safety
          </span>
        </div>

        {/* Lora Applied via font-heading */}
        <h1 className="mx-auto max-w-4xl font-heading text-6xl leading-[1.05] tracking-tight text-[#0F2643] md:text-7xl lg:text-8xl">
          Your Safety. <br className="hidden md:block" />
          Our Priority.
        </h1>

        <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-[#5F6F77] md:text-xl">
          Beautifully designed everyday safety essentials that help you feel calm, confident and prepared wherever life takes you.
        </p>

        <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/products"
            className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#0F2643] px-8 text-sm font-medium !text-white transition-all duration-300 hover:bg-[#DA6D40] sm:w-auto"
          >
            Explore Collection
          </Link>
          
          <Link
            href="/about"
            className="inline-flex h-14 w-full items-center justify-center rounded-full border border-[#0F2643]/20 bg-transparent px-8 text-sm font-medium text-[#0F2643] transition-colors hover:bg-[#0F2643]/5 sm:w-auto"
          >
            Our Philosophy
          </Link>
        </div>
      </Container>
    </section>
  );
}