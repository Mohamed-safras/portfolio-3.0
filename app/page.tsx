"use client";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FlotingNavBar";
import { navItems } from "@/data";

export default function Page() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Clients />
        <RecentProjects />
        <Experience />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
}
