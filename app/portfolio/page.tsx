import PortfolioSalesClosing from "@/src/components/portfolio/CTA";
import PortfolioSection from "@/src/components/portfolio/Portfolio";
import StructuralHeader from "@/src/components/portfolio/StructuralHeader";


export default function PortfolioPage() {
  return (

    <main>

      <StructuralHeader />

      <PortfolioSection />

      <PortfolioSalesClosing />

    </main>

  );
}