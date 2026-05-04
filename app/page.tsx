import Hero from "../src/components/home/Hero";
import Services from "../src/components/home/Services";
import Testimonials from "../src/components/home/Testimonials";
import Works from "../src/components/home/works";
import About from "@/src/components/home/About";
import BlogSection from "@/src/components/home/Blog";
import FinalCTA from "@/src/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen relative">


      <Hero />

      <About />

      {/* <Services /> */}

      {/* <Works /> */}

      <BlogSection />

      <Testimonials />

      <FinalCTA />


    </main>
  );
}