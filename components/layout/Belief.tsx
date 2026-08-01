import Image from "next/image";
import Container from "@/components/layout/Container";

const cards = [
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
];

export default function Belief() {
  return (
    <section className="relative overflow-hidden bg-[#FBECDB] py-12 md:py-12">
      <Image
        src="/patterns/Pattern wo Background.svg"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-[0.04]"
      />

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
            Our Belief
          </p>

          {/* Lora Applied via font-heading */}
          <h2 className="mt-5 max-w-4xl font-heading text-4xl leading-[1.1] tracking-tight text-[#0F2643] md:text-5xl lg:text-6xl">
            Safety isn&apos;t panic.
            <br />
            Safety is confidence.
          </h2>

          <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-[#5F6F77]">
            Whaleora believes that preparedness should feel calm, intuitive and
            empowering—not intimidating.
          </p>
        </div>

        <div className="mx-auto mt-16 grid w-full max-w-[1180px] items-stretch gap-6 md:mt-20 lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[270px] h-full flex-col rounded-[32px] bg-white/80 p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl md:p-10"
            >
              {/* Lora Applied via font-heading */}
              <h3 className="font-heading text-3xl tracking-tight text-[#0F2643]">
                {card.title}
              </h3>

              <p className="mt-6 flex-1 text-base font-light leading-relaxed text-[#5F6F77]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}