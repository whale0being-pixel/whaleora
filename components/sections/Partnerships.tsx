import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/button";

const partnerships = [
  {
    number: "01",
    title: "Schools & Colleges",
    text: "Safety awareness sessions, student-focused safety products and thoughtfully designed safety kits.",
  },
  {
    number: "02",
    title: "NGOs & Communities",
    text: "Programs and bulk solutions designed to make everyday safety more accessible.",
  },
  {
    number: "03",
    title: "CSR & Institutions",
    text: "Scalable safety initiatives combining products, awareness and measurable community impact.",
  },
];

export default function Partnerships() {
  return (
    <section className="relative overflow-hidden bg-[#0F2643] py-12 md:py-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <Image
          src="/patterns/Pattern wo Background.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <Container className="relative mx-auto flex flex-col items-center">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#DA6D40]">
            Institutional Partnerships
          </p>

          <h2 className="mt-5 font-heading text-4xl leading-[1.15] text-white md:text-5xl lg:text-6xl">
            Safety works better
            <br />
            when we work together.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/65">
            We partner with institutions, NGOs and organisations to bring
            practical safety awareness and accessible safety solutions to more
            people.
          </p>
        </div>

        <div className="mx-auto mt-16 grid w-full max-w-[1160px] justify-items-center gap-6 md:mt-20 lg:grid-cols-3 lg:gap-8">
          {partnerships.map((partnership) => (
            <article
              key={partnership.number}
              className="flex min-h-[300px] w-full max-w-[380px] flex-col rounded-[32px] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm md:p-10 lg:max-w-none"
            >
              <span className="text-xs tracking-[0.25em] text-[#DA6D40]">
                {partnership.number}
              </span>

              <h3 className="mt-8 font-heading text-3xl text-white">
                {partnership.title}
              </h3>

              <p className="mt-5 flex-1 text-base leading-8 text-white/60">
                {partnership.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center w-full">
          <Button variant="secondary">
            Partner With Whaleora
          </Button>
        </div>
      </Container>
    </section>
  );
}