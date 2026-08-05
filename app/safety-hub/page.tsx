"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/safetyhub/Hero";
import PersonaSelector from "@/components/safetyhub/PersonaSelector";
import EmergencyToolkit from "@/components/safetyhub/EmergencyToolkit";
import Downloads from "@/components/safetyhub/Downloads";
import Programmes from "@/components/safetyhub/Programmes";


export default function SafetyCentrePage() {
  const [selected, setSelected] = useState("women");

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <Hero />
      <div id="PersonaSelector" className="scroll-mt-24">
      <PersonaSelector
        selected={selected}
        onSelect={setSelected}
      />
      </div>
      <EmergencyToolkit selected={selected} />
      <div id="Downloads" className="scroll-mt-24">
      <Downloads selected={selected} />
      </div>
      <Programmes />

      

      <Footer />
    </main>
  );
}