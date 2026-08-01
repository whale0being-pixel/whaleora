import Container from "@/components/layout/Container";

const programmes = [
  {
    title: "Schools",
    description:
      "Interactive safety awareness sessions, student workshops and teacher resources designed to build confidence from an early age.",
  },
  {
    title: "Colleges",
    description:
      "Campus-focused programmes covering personal safety, emergency preparedness and practical everyday awareness.",
  },
  {
    title: "Corporates",
    description:
      "Employee wellbeing and workplace safety sessions that encourage preparedness without creating fear.",
  },
  {
    title: "NGOs & Communities",
    description:
      "Collaborative awareness initiatives, outreach programmes and customised safety kits for the communities you serve.",
  },
];

export default function Programmes() {
  return (
    <section className="bg-[#FBECDB] py-8 md:py-8">
      <Container>
        
        {/* Bulletproof Centered Header - Scaled Down */}
        <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
            Awareness Programmes
          </p>

          <h2 className="mt-2 text-center font-heading text-2xl leading-tight tracking-tight text-[#0F2643] md:text-3xl">
            Building safer communities together.
          </h2>

          <p className="mt-3 max-w-xl text-center text-sm font-light leading-relaxed text-[#5F6F77]">
            Whaleora partners with institutions to make safety education more
            engaging, practical and accessible through thoughtfully designed
            programmes.
          </p>
        </div>

        {/* Premium Frosted Programme Cards - Scaled Down */}
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2">
          {programmes.map((programme) => (
            <div
              key={programme.title}
              className="group flex flex-col items-start rounded-2xl border border-white/50 bg-white/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,38,67,0.04)] md:p-8"
            >
              <h3 className="font-heading text-lg leading-tight tracking-tight text-[#0F2643] md:text-xl">
                {programme.title}
              </h3>

              <p className="mt-2 flex-1 text-xs font-light leading-relaxed text-[#5F6F77] md:text-sm">
                {programme.description}
              </p>

              <div className="mt-6 w-full md:w-auto">
                <button
                  type="button"
                  className="inline-flex h-10 w-full items-center justify-center rounded-full border border-[#0F2643]/20 bg-transparent px-6 text-[11px] font-medium text-[#0F2643] transition-all duration-300 hover:border-[#0F2643] hover:bg-[#0F2643] hover:text-white md:w-auto"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* High-Contrast Partnership CTA - Scaled Down */}
        <div className="relative mx-auto mt-12 flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#0F2643] px-6 py-8 text-center shadow-lg md:mt-16 md:px-12 md:py-10">
          {/* Subtle background glow for depth */}
          <div className="absolute top-0 h-full w-full opacity-20">
             <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DA6D40] blur-[80px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center">
            <h3 className="text-center font-heading text-xl leading-tight tracking-tight text-[#FBECDB] md:text-2xl">
              Want to organise a safety awareness session?
            </h3>

            <p className="mt-3 max-w-lg text-center text-xs font-light leading-relaxed text-white/80 md:text-sm">
              Whether you're a school, NGO, corporate or community organisation,
              we'd love to collaborate on creating safer environments through
              education and preparedness.
            </p>

            <div className="mt-6 w-full sm:w-auto">
              <button
                type="button"
                className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#FBECDB] px-8 text-[11px] font-medium text-[#0F2643] transition-all duration-300 hover:bg-white sm:w-auto"
              >
                Partner With Whaleora
              </button>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}