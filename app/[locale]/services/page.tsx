import CtaAbout from "@/src/components/services/Cta";
import ServicesHero from "@/src/components/services/hero";
import ServicesList from "@/src/components/services/services";

export default function ServicesPage() {

  return (

    <>
      <ServicesHero />

      <ServicesList />

      <CtaAbout />
    </>

  );
}