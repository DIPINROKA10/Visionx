import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Works from "@/components/sections/Works";
import Achievements from "@/components/sections/Achievements";
import TechStack from "@/components/sections/TechStack";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function VisionXPage() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary/30 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Team />
        <Works />
        <Achievements />
        <TechStack />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
