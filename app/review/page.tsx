import Link from "next/link";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";

// Define your products here
const products = [
  { id: "pepperspray", name: "Pepper Spray" },
  { id: "sos-alarm", name: "SOS Alarm" },
  { id: "whistle", name: "Safety Whistle" },
  { id: "windowbreaker", name: "Window Breaker" },
];

export default function ReviewHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Container className="py-16 md:py-24">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA6D40]">
            Share Your Experience
          </p>
          <h1 className="mt-2 font-heading text-3xl text-[#0F2643]">
            Which product are you reviewing?
          </h1>
          
          <p className="mt-4 text-sm text-[#5F6F77]">
            Select your Whaleora product below to leave a review and help others stay safe.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {products.map((product) => (
              <Link 
                key={product.id} 
                href={`/review/${product.id}`}
                className="group flex flex-col items-center justify-center rounded-2xl border border-[#0F2643]/10 bg-[#FBECDB]/20 p-6 transition-all hover:bg-[#FBECDB]/60 hover:shadow-sm"
              >
                <span className="font-heading text-lg text-[#0F2643] transition-colors group-hover:text-[#DA6D40]">
                  {product.name}
                </span>
                <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#0F2643]/40 group-hover:text-[#DA6D40]/70">
                  Select &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}