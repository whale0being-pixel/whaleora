import Container from "@/components/layout/Container";

const trustItems = [
  {
    number: "01",
    title: "Thoughtfully Designed",
    text: "Safety essentials designed for everyday life.",
  },
  {
    number: "02",
    title: "Simple & Reliable",
    text: "No complicated technology. Just practical protection.",
  },
  {
    number: "03",
    title: "For Everyone",
    text: "Safety should be accessible, inclusive and empowering.",
  },
  {
    number: "04",
    title: "Built With Purpose",
    text: "Products backed by awareness and education.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#0F2643]">
      <Container>
        <div className="grid divide-y divide-white/10 py-1 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.number}
              className="px-6 py-4 first:pl-0 last:pr-0 sm:py-2 lg:px-8"
            >
              <div className="flex items-start gap-4">
                <span className="pt-1 text-xs tracking-[0.2em] text-[#DA6D40]">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-base font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}