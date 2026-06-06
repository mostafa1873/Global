import PortfolioSalesClosing from "@/src/components/portfolio/CTA";
import AvantGardeShowcase from "@/src/components/portfolio/InteractiveShowcase";
import PortfolioSection from "@/src/components/portfolio/Portfolio";
import StructuralHeader from "@/src/components/portfolio/StructuralHeader";


export default function PortfolioPage() {
  return (

    <main>

      <StructuralHeader />

      <PortfolioSection />

      <AvantGardeShowcase />

      <PortfolioSalesClosing />

    </main>

  );
}