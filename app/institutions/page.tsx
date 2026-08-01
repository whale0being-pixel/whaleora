import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const programs = [
  {
    title: "Universities & Campuses",
    description:
      "Equip students and faculty with everyday safety essentials, fostering a secure and confident campus environment from day to night.",
  },
  {
    title: "Corporate Wellness",
    description:
      "Integrate personal preparedness into your employee benefits program, ensuring your team feels valued, protected, and empowered.",
  },
  {
    title: "Retail & Distribution",
    description:
      "Partner with us to bring Whaleora's thoughtfully designed safety collection to premium retail spaces and curated boutiques.",
  },
];

export default function InstitutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section (Left untouched as requested) */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[#FBECDB] pb-20 pt-10 lg:min-h-[80vh]">
        <div className="absolute top-0 h-24 w-full" aria-hidden="true"></div>

        <Image
          src="/patterns/Pattern wo Background.svg"
          alt=""
          fill
          priority
          className="pointer-events-none object-cover opacity-[0.05]"
        />

        <Container className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 rounded-full border border-[#0F2643]/10 bg-white/50 px-5 py-2 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
              Institutional Partnerships
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl font-heading text-5xl leading-[1.1] tracking-tight text-[#0F2643] md:text-6xl lg:text-7xl">
            Building a culture of safety, together.
          </h1>

          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-[#5F6F77] md:text-xl">
            Safety isn&apos;t a one-time event—it is a culture.
            Our role is to help institutions strengthen that culture through practical tools, engaging education, and meaningful partnerships.
          </p>
        </Container>
      </section>

      {/* The Pitch (Sticky Side-by-Side Layout) */}
      <section className="relative w-full bg-white py-20 md:py-28">
        <Image
          src="/patterns/Pattern wo Background.svg"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-[0.025]"
        />

        <Container className="relative z-10">
          <div className="grid w-full items-start gap-16 lg:grid-cols-2 lg:gap-24">
            
            {/* LEFT COLUMN: Sticky Header */}
            <div className="mx-auto flex max-w-[600px] flex-col text-center lg:sticky lg:top-40 lg:mx-0 lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                Our Approach
              </p>
              
              <h2 className="mt-5 font-heading text-4xl leading-[1.1] tracking-tight text-[#0F2643] md:text-5xl">
                Education first. Products second.
              </h2>
            </div>

            {/* RIGHT COLUMN: Validated List & Flowing Text */}
            <div className="flex flex-col gap-6 text-lg font-light leading-relaxed text-[#5F6F77]">
              <p>
                Whaleora combines awareness, practical learning, and thoughtfully designed safety products into one integrated programme.
              </p>
              
              <div>
                <p className="mb-3 font-medium text-[#0F2643]">We help institutions through:</p>
                <ul className="space-y-2 pl-5 list-disc text-base">
                  <li>Personal Safety Awareness Sessions</li>
                  <li>Interactive Workshops</li>
                  <li>Personal Safety Products that reinforce learning</li>
                  <li>Everyday Safety Resources</li>
                </ul>
              </div>

              <p>
                The result is a programme that goes beyond a one-time event and contributes to a stronger culture of preparedness.
              </p>
            </div>
            
          </div>
        </Container>
      </section>

      {/* Programs Grid Section */}
      <section className="bg-[#FBECDB]/30 py-20 md:py-28">
        <Container>
          <div className="flex flex-col items-center text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
              Collaboration Tracks
            </p>
            <h2 className="mt-4 font-heading text-3xl tracking-tight text-[#0F2643] md:text-4xl lg:text-5xl">
              Tailored partnership models.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {programs.map((prog) => (
              <div 
                key={prog.title}
                className="flex flex-col justify-between rounded-2xl border border-[#0F2643]/10 bg-white p-8 transition-all duration-300 hover:border-[#DA6D40]/40 hover:shadow-lg"
              >
                <div>
                  <h3 className="font-heading text-2xl tracking-tight text-[#0F2643]">
                    {prog.title}
                  </h3>
                  <p className="mt-4 text-[14px] font-light leading-relaxed text-[#5F6F77]">
                    {prog.description}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#0F2643]/5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-[#0F2643] transition-colors hover:text-[#DA6D40]"
                  >
                    Enquire Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call To Action */}
      <section className="w-full bg-[#FBECDB] py-20 md:py-28">
        <Container className="flex flex-col items-center justify-center text-center">
          <h2 className="font-heading text-4xl leading-[1.1] tracking-tight text-[#0F2643] md:text-5xl">
            Let&apos;s start a conversation.
          </h2>
          
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-[#5F6F77]">
            Whether you&apos;re planning a safety awareness programme, exploring workshops, or looking for a long-term partner, we&apos;d love to hear from you.
          </p>
          
          <div className="mt-10 flex">
            <Link
              href="/contact"
              className="inline-flex h-14 shrink-0 items-center justify-center rounded-full bg-[#0F2643] px-10 text-sm font-medium !text-white transition duration-300 hover:bg-[#DA6D40]"
            >
              Contact Partnerships
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}