import LuxuryCTA from "@/src/components/portfolio/CTA";
import InteractiveShowcase from "@/src/components/portfolio/InteractiveShowcase";
import PortfolioSection from "@/src/components/portfolio/Portfolio";
import StructuralHeader from "@/src/components/portfolio/StructuralHeader";


export default function PortfolioPage() {
  return (

    <main>
      
      {/* --- Structural Header --- */}
      <StructuralHeader />

      {/* --- Interactive Showcase --- */}
      <InteractiveShowcase />

      {/* --- Portfolio Section --- */}
      <PortfolioSection />

      {/* --- Call to Action --- */}
      <LuxuryCTA />

    </main>

  );
}