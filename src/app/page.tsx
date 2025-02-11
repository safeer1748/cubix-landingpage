import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { About } from "@/components/sections/about";
import { Roadmap } from "@/components/sections/roadmap";
import { Team } from "@/components/sections/team";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Roadmap />
      <Team />
      <Contact />
    </main>
  );
}
