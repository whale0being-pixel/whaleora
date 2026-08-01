
import About from "@/components/sections/About";
import Partnerships from "@/components/sections/Partnerships";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    // selection classes give a beautiful orange highlight when text is selected
    <main className="relative flex min-h-screen flex-col bg-white selection:bg-[#DA6D40]/20 selection:text-[#0F2643]">

    
    
      <About />
     
    
   
   
    </main>
  );
}