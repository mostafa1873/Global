import InteractiveShowcase from "@/src/components/portfolio/InteractiveShowcase";
import StructuralHeader from "@/src/components/portfolio/StructuralHeader";


export default function PortfolioPage() {
  return (

    <main>
      
      {/* --- Structural Header --- */}
      <StructuralHeader />

      {/* --- Interactive Showcase --- */}
      <InteractiveShowcase />

    </main>

  );
}