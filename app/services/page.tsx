import Hero from "@/src/components/home/Hero";
import FinalCTA from "@/src/components/services/FinalCTA";
// import ServicesHero from "@/src/components/services/hero";
import ServicesList from "@/src/components/services/services";
// import WhyChooseUs from "@/src/components/services/why";

export default function ServicesPage() {

  return (

    <>
      {/* <ServicesHero /> */}

      <Hero />

      <ServicesList />

      {/* <WhyChooseUs /> */}

      <FinalCTA /> 
    </>

  );
}