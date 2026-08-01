import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/button";

const guides = [
  {
    category: "Women Safety",
    title: "How to Stay Safe While Travelling Alone",
    description:
      "Practical habits, awareness tips and preparation techniques for safer solo travel.",
    image: "/images/SOS.png",
  },
  {
    category: "Campus Safety",
    title: "Essential Safety Tips Every Student Should Know",
    description:
      "Small habits that help students stay confident and prepared every day.",
    image: "/images/Band.png", // Assuming you have this image, otherwise update the path
  },
  {
    category: "Emergency",
    title: "What To Do During An Emergency",
    description:
      "A simple guide covering the first few minutes that matter the most.",
    image: "/images/spray.png", // Assuming you have this image, otherwise update the path
  },
];

export default function FeaturedGuide() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-12">
      {/* Subtle Background Pattern */}
      <Image
        src="/patterns/Pattern wo Background.svg"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-[0.025]"
      />

      <Container className="relative z-10">
        
        {/* Bulletproof Centered Header */}
        <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
            Featured Articles
          </p>

          <h2 className="mt-5 text-center font-heading text-4xl leading-[1.1] tracking-tight text-[#0F2643] md:text-5xl lg:text-6xl">
            Learn something valuable today.
          </h2>

          <p className="mt-6 max-w-2xl text-center text-lg font-light leading-relaxed text-[#5F6F77] md:text-xl">
            Simple, practical resources created to help individuals,
            institutions and families stay prepared.
          </p>
        </div>

        {/* Moxie-Style Grid with Whaleora Aesthetic */}
        <div className="mt-16 grid gap-8 md:mt-20 lg:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.title}
              className="group flex flex-col overflow-hidden rounded-[40px] border border-[#0F2643]/5 bg-[#FBECDB]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(15,38,67,0.08)]"
            >
              {/* Image Container with Hover Effects */}
              <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#FBECDB]/50">
                {/* Interactive ambient glow */}
                <div className="absolute h-40 w-40 rounded-full bg-[#DA6D40]/10 blur-[60px] transition-transform duration-700 group-hover:scale-150" />
                
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="relative z-10 object-contain p-12 drop-shadow-md transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-1 flex-col p-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                  {guide.category}
                </p>

                <h3 className="mt-4 font-heading text-2xl leading-[1.15] tracking-tight text-[#0F2643] md:text-3xl">
                  {guide.title}
                </h3>

                <p className="mt-4 flex-1 text-base font-light leading-relaxed text-[#5F6F77]">
                  {guide.description}
                </p>

                <div className="mt-8">
                  <Button 
                    variant="secondary"
                    className="inline-flex h-14 w-full items-center justify-center rounded-full border border-[#0F2643]/20 bg-transparent px-8 text-sm font-medium text-[#0F2643] transition hover:border-[#0F2643] hover:bg-white"
                  >
                    Read Article
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}