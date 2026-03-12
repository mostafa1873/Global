import Hero from "../src/components/home/Hero";
import Services from "../src/components/home/Services";
import PortfolioMarquee from "../src/components/home/PortfolioMarquee";
import Testimonials from "../src/components/home/Testimonials";
import Works from "../src/components/home/works";

export default function Home() {
  return (
    <main className="min-h-screen relative">


      <Hero />

      <PortfolioMarquee />

      <Services />

      <Works />

      <Testimonials />


    </main>
  );
}