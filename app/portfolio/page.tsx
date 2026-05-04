import IntegratedSystem from "@/src/components/about/IntegratedSystem";
import Hero from "@/src/components/home/Hero";
import LuxuryCTA from "@/src/components/portfolio/CTA";
import InteractiveShowcase from "@/src/components/portfolio/InteractiveShowcase";
import PortfolioSection from "@/src/components/portfolio/Portfolio";
import PortfolioSlider from "@/src/components/portfolio/Slider";
// import StructuralHeader from "@/src/components/portfolio/StructuralHeader";


export default function PortfolioPage() {
  return (

    <main>

      {/* --- Structural Header --- */}
      {/* <StructuralHeader /> */}

      <Hero />

      <PortfolioSlider />

      <IntegratedSystem />


      {/* --- Interactive Showcase --- */}
      <InteractiveShowcase />

      {/* --- Portfolio Section --- */}
      <PortfolioSection />

      {/* --- Call to Action --- */}
      <LuxuryCTA />

    </main>

  );
}