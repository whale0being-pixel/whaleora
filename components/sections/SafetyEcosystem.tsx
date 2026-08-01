import Image from "next/image";
import Container from "@/components/layout/Container";

const products = [
  { title: "SOS Alarm", image: "/images/SOS.png" },
  { title: "Pepper Spray", image: "/images/spray.png" },
  { title: "Drink Cover", image: "/images/Cover Mock up.png" },
  { title: "Emergency Band", image: "/images/Band.png" },
];

export default function SafetyEcosystem() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-12">
      <Image
        src="/patterns/Pattern wo Background.svg"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-[0.035]"
      />

      <Container className="relative mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
            Whaleora Ecosystem
          </p>

          {/* Lora Applied via font-heading */}
          <h2 className="mt-5 max-w-4xl text-center font-heading text-4xl leading-[1.1] tracking-tight text-[#0F2643] md:text-5xl lg:text-6xl">
            Designed to work together.
          </h2>

          <p className="mt-7 max-w-2xl text-center text-lg font-light leading-relaxed text-[#5F6F77]">
            Every product complements another, creating an ecosystem that helps
            you stay prepared every day.
          </p>
        </div>

        <div className="mx-auto mt-16 grid w-full max-w-[1180px] justify-items-center gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {products.map((product) => (
            <article
              key={product.title}
              className="group flex min-h-[390px] w-full max-w-[280px] flex-col rounded-[32px] bg-[#FBECDB] p-8 transition duration-500 hover:-translate-y-1 hover:shadow-xl md:max-w-none"
            >
              <div className="flex h-[270px] w-full items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={260}
                  height={260}
                  className="max-h-[240px] w-auto max-w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-auto pt-6 text-center">
                {/* Lora Applied via font-heading */}
                <h3 className="font-heading text-2xl tracking-tight text-[#0F2643]">
                  {product.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}