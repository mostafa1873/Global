import Hero from "@/app/components/home/Hero";
import Services from "./components/home/Services";
import Navbar from "./components/main/Navbar";
import PortfolioMarquee from "./components/home/PortfolioMarquee";
import Testimonials from "./components/home/Testimonials";
import Works from "./components/home/works";
import Footer from "./components/main/Footer";

// دي صفحة Server Component بالكامل
export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* لو عندك Navbar هتحطه هنا */}

      <Navbar />
      
      <Hero />

      <PortfolioMarquee />
      
      <Services />

      <Works />

      <Testimonials />
      {/* باقي السكاشن هتنزل هنا */}
      <Footer />
    </main>
  );
}