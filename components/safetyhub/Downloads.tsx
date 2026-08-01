import Container from "@/components/layout/Container";
import Link from "next/link";
import { personas } from "./data/personas";

type Props = {
  selected: string;
};

const allTopics = [
  "Women's Safety",
  "Student Safety",
  "Travel Safety",
  "Workplace Safety",
  "Emergency Preparedness",
  "Digital Safety",
  "Child Safety",
  "Senior Citizen",
  "Self Defence",
  "Safety Devices",
  "Campus Safety",
  "Community",
];

export default function Downloads({
  selected,
}: Props) {
  const persona =
    personas.find((p) => p.id === selected) ?? personas[0];

  const resources = persona.downloads.map((item) => ({
    title: item,
    
    href: "#",
  }));

  return (
    <section className="bg-white py-12 md:py-16">
      <Container>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          
          {/* ======================= */}
          {/* LEFT: RECOMMENDATIONS   */}
          {/* ======================= */}
          <div>

            <div className="max-w-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                Recommended For You
              </p>

              <h2 className="mt-2 font-heading text-2xl leading-tight tracking-tight text-[#0F2643] md:text-3xl">
                {persona.recommendationHeading}
              </h2>

              <p className="mt-3 text-sm font-light leading-relaxed text-[#5F6F77]">
                Personalised guidance curated for{" "}
                <span className="font-medium text-[#0F2643]">
                  {persona.title}
                </span>.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#0F2643]/10 bg-[#FBECDB]/30 shadow-[0_4px_20px_rgba(15,38,67,0.02)]">
              {persona.recommendations.map((tip, index) => (
                <div
                  key={index}
                  className={`group flex items-start gap-4 px-6 py-4 transition-all duration-300 hover:bg-[#FBECDB]/70 ${
                    index !== persona.recommendations.length - 1
                      ? "border-b border-[#0F2643]/10"
                      : ""
                  }`}
                >
                  
                  {/* Checkmark matching the layout style */}
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DA6D40]/10">
                    <span className="text-[10px] text-[#DA6D40]">
                      ✓
                    </span>
                  </div>

                  <div>
                 

                    <p className="mt-0.5 text-sm leading-relaxed tracking-tight text-[#0F2643]">
                      {tip}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* ======================= */}
          {/* RIGHT: RESOURCES        */}
          {/* ======================= */}
          <div>

            <div className="max-w-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                Resources
              </p>

              <h2 className="mt-2 font-heading text-2xl leading-tight tracking-tight text-[#0F2643] md:text-3xl">
                Download free resources.
              </h2>

              <p className="mt-3 text-sm font-light leading-relaxed text-[#5F6F77]">
                Resources specifically recommended for{" "}
                {persona.title.toLowerCase()}.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#0F2643]/10 bg-[#FBECDB]/30 shadow-[0_4px_20px_rgba(15,38,67,0.02)]">
              {resources.map((resource, index) => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className={`group flex items-center justify-between px-6 py-4 transition-all duration-300 hover:bg-[#FBECDB]/70 ${
                    index !== resources.length - 1
                      ? "border-b border-[#0F2643]/10"
                      : ""
                  }`}
                >
                  <div>
                   

                    <h3 className="mt-0.5 font-heading text-sm tracking-tight text-[#0F2643]">
                      {resource.title}
                    </h3>
                  </div>

                  <span className="text-xl text-[#0F2643]/30 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}