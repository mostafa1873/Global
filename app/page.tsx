import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import Hero from "../src/components/home/Hero";
import Services from "../src/components/home/Services";
import About from "@/src/components/home/About";
// import HowWeWork from "@/src/components/home/HowWeWork";
import WorkProcess from "@/src/components/home/WorkProcess";
import TargetAudience from "@/src/components/home/TargetAudience";
import Vision from "@/src/components/home/Vision";
import CompactClosing from "@/src/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen relative">

      <Hero />

      <About />

      <Services />

      {/* <HowWeWork /> */}

      <WorkProcess />

      <WhyChooseUs />

      <TargetAudience />

      <Vision />

      <CompactClosing /> 

    </main>
  );
}