"use client";

import Container from "@/components/layout/Container";
import { personas } from "./data/personas";
import Button from "@/components/ui/button";

type Props = {
  selected: string;
  onSelect: (id: string) => void;
};

export default function PersonalisedHub({ selected, onSelect }: Props) {
  const activePersona =
    personas.find((p) => p.id === selected) ?? personas[0];

  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        
        {/* Main Side-by-Side Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] lg:gap-16 items-start">
          
          {/* ======================= */}
          {/* LEFT SIDE: SELECTOR     */}
          {/* ======================= */}
          <div className="flex flex-col">
            
            {/* Header */}
            <div className="max-w-xs">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                Personalised Experience
              </p>

              <h2 className="mt-2 font-heading text-2xl leading-tight tracking-tight text-[#0F2643] md:text-3xl">
                Who are you today?
              </h2>

              <p className="mt-3 text-sm font-light leading-relaxed text-[#5F6F77]">
                Choose a profile. We'll personalise the Safety Centre based on your needs.
              </p>
            </div>

            {/* Sidebar Cards - Converted to a cleaner 2-column or structured layout to prevent crowding */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {personas.map((persona) => {
                const isActive = selected === persona.id;

                return (
                  <button
                    key={persona.id}
                    onClick={() => onSelect(persona.id)}
                    className={`group relative flex flex-col items-start rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "scale-[1.02] border-[#DA6D40] bg-[#FBECDB] shadow-md"
                        : "border-[#0F2643]/10 bg-white hover:-translate-y-0.5 hover:border-[#DA6D40] hover:shadow-sm"
                    }`}
                  >
                    <div className="text-2xl drop-shadow-sm transition-transform duration-300 group-hover:scale-110 mb-3">
                      {persona.emoji}
                    </div>

                    <h3 className={`font-heading text-xs font-semibold leading-tight tracking-tight transition-colors ${
                      isActive ? "text-[#DA6D40]" : "text-[#0F2643]"
                    }`}>
                      {persona.title}
                    </h3>

                    {/* Subtle selected indicator top right */}
                    {isActive && (
                      <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#DA6D40] shadow-[0_0_8px_rgba(218,109,64,0.6)]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ======================= */}
          {/* RIGHT SIDE: CONTENT     */}
          {/* ======================= */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-[#0F2643]/10 bg-white shadow-[0_8px_30px_rgba(15,38,67,0.04)] lg:sticky lg:top-8">
              
              {/* Internal Grid - Shifts to stacking on large screens, side-by-side on extra large */}
              <div className="grid xl:grid-cols-[1.2fr_0.8fr]">
                
                {/* Content Left */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FBECDB] text-xl shadow-inner">
                      {activePersona.emoji}
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                        Personalised Safety Centre
                      </p>
                      <h2 className="mt-1 font-heading text-xl tracking-tight text-[#0F2643] md:text-2xl">
                        {activePersona.title}
                      </h2>
                    </div>
                  </div>

                  <p className="mt-4 max-w-md text-[13px] font-light leading-relaxed text-[#5F6F77]">
                    {activePersona.subtitle}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-[#0F2643]/5 bg-[#FBECDB]/30 p-4 transition hover:bg-[#FBECDB]/50">
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
                        Toolkit
                      </p>
                      <p className="mt-1.5 font-heading text-xl tracking-tight text-[#0F2643]">
                        {activePersona.toolkit.length}
                      </p>
                      <p className="mt-0.5 text-[9px] text-[#5F6F77]">
                        Essential resources
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#0F2643]/5 bg-[#FBECDB]/30 p-4 transition hover:bg-[#FBECDB]/50">
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
                        Downloads
                      </p>
                      <p className="mt-1.5 font-heading text-xl tracking-tight text-[#0F2643]">
                        {activePersona.downloads.length}
                      </p>
                      <p className="mt-0.5 text-[9px] text-[#5F6F77]">
                        Ready to use
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#0F2643]/5 bg-[#FBECDB]/30 p-4 transition hover:bg-[#FBECDB]/50">
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
                        Products
                      </p>
                      <p className="mt-1.5 font-heading text-xl tracking-tight text-[#0F2643]">
                        {activePersona.products.length}
                      </p>
                      <p className="mt-0.5 text-[9px] text-[#5F6F77]">
                        Recommended
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#0F2643]/5 bg-[#FBECDB]/30 p-4 transition hover:bg-[#FBECDB]/50">
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
                        Programmes
                      </p>
                      <p className="mt-1.5 font-heading text-xl tracking-tight text-[#0F2643]">
                        {activePersona.programmes.length}
                      </p>
                      <p className="mt-0.5 text-[9px] text-[#5F6F77]">
                        Available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Right */}
                <div className="flex flex-col justify-center bg-[#0F2643] p-8 lg:p-10">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#DDAE84]">
                    Quick Start
                  </p>

                  <h3 className="mt-2.5 font-heading text-xl leading-tight tracking-tight text-[#FBECDB]">
                    Everything you need,
                    <br />
                    in one place.
                  </h3>

                  <ul className="mt-5 space-y-2.5">
                    <li className="flex items-center gap-3 text-[11px] font-light text-white/85">
                      <span className="text-[#DDAE84]">✓</span> Explore your personalised toolkit
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-light text-white/85">
                      <span className="text-[#DDAE84]">✓</span> Download free resources
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-light text-white/85">
                      <span className="text-[#DDAE84]">✓</span> Discover recommended products
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-light text-white/85">
                      <span className="text-[#DDAE84]">✓</span> Learn about awareness programmes
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-light text-white/85">
                      <span className="text-[#DDAE84]">✓</span> Keep emergency numbers handy
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Button className="h-10 rounded-full px-6 text-[10px] font-medium transition hover:scale-105">
                      Start Exploring
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}