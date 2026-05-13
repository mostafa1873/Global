import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import Hero from "../src/components/home/Hero";
// import Services from "../src/components/home/Services";
import Testimonials from "../src/components/home/Testimonials";
// import Works from "../src/components/home/works";
import About from "@/src/components/home/About";
import BlogSection from "@/src/components/home/Blog";
import SalesClosing from "@/src/components/about/SalesClosing";
// import FinalCTA from "@/src/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen relative">

      <Hero />

      <About />

      <WhyChooseUs />

      {/* <Services /> */}

      {/* <Works /> */}

      <BlogSection />

      <Testimonials />

      <SalesClosing />

      {/* <FinalCTA /> */}

    </main>
  );
}