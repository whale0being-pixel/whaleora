import Container from "@/components/layout/Container";
import Link from "next/link";
import { personas } from "./data/personas";

type Props = {
  selected: string;
};

const emergencyNumberMap: Record<string, string> = {
  Police: "100",
  Ambulance: "108",
  Fire: "101",
  "Women Helpline": "1091",
  Childline: "1098",
  "National Emergency": "112",
  "Campus Security": "1800-111-111",
  "Tourist Helpline": "1363",
};

export default function EmergencyToolkit({
  selected,
}: Props) {
  const persona =
    personas.find((p) => p.id === selected) ?? personas[0];

  const toolkit = persona.toolkit.map((item) => ({
    title: item,
    subtitle: "Preparedness",
    href: "#",
  }));

  const numbers = persona.emergencyNumbers.map((item) => ({
    title: item,
    number: emergencyNumberMap[item] ?? "112",
  }));

  return (
    <section className="bg-[#FBECDB] py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">

          {/* LEFT */}

          <div>

            <div className="max-w-md">

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                Preparedness
              </p>

              <h2 className="mt-2 font-heading text-2xl leading-tight tracking-tight text-[#0F2643] md:text-3xl">
                Small actions. Big difference.
              </h2>

              <p className="mt-3 text-sm font-light leading-relaxed text-[#5F6F77]">
                Everyday tools curated specifically for {persona.title.toLowerCase()}.
              </p>

            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#0F2643]/10 bg-white shadow-[0_4px_20px_rgba(15,38,67,0.02)]">

              {toolkit.map((item, index) => (

                <Link
                  key={item.title}
                  href={item.href}
                  className={`group flex items-center justify-between px-6 py-3 transition-all duration-300 hover:bg-[#FBECDB]/40 ${
                    index !== toolkit.length - 1
                      ? "border-b border-[#0F2643]/10"
                      : ""
                  }`}
                >

                  <div>

                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#DA6D40]">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-0.5 font-heading text-sm tracking-tight text-[#0F2643]">
                      {item.title}
                    </h3>

                  </div>

                  <span className="text-xl text-[#0F2643]/30 transition group-hover:translate-x-1">
                    →
                  </span>

                </Link>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="max-w-md">

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
                Emergency Contacts
              </p>

              <h2 className="mt-2 font-heading text-2xl leading-tight tracking-tight text-[#0F2643] md:text-3xl">
                Important numbers.
              </h2>

              <p className="mt-3 text-sm font-light leading-relaxed text-[#5F6F77]">
                Emergency contacts relevant to {persona.title.toLowerCase()}.
              </p>

            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#0F2643]/10 bg-white shadow-[0_4px_20px_rgba(15,38,67,0.02)]">

              {numbers.map((item, index) => (

                <a
                  key={item.title}
                  href={`tel:${item.number}`}
                  className={`group flex items-center justify-between px-6 py-3 transition-all duration-300 hover:bg-[#FBECDB]/40 ${
                    index !== numbers.length - 1
                      ? "border-b border-[#0F2643]/10"
                      : ""
                  }`}
                >

                  <h3 className="font-heading text-sm tracking-tight text-[#0F2643]">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-5">

                    <span className="font-medium text-[#DA6D40]">
                      {item.number}
                    </span>

                    <span className="text-xl text-[#0F2643]/30 transition group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </a>

              ))}

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}