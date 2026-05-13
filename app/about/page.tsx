// import AboutHero from "@/src/components/about/Hero";
// import IntegratedSystem from "@/src/components/about/IntegratedSystem";
import HeartMessage from "@/src/components/about/Message";
// import ProblemSolver from "@/src/components/about/ProblemSolver";
import SalesClosing from "@/src/components/about/SalesClosing";
import Hero from "@/src/components/home/Hero";
// import Link from "next/link";

export default function AboutPage() {

  return (

    <>

      <Hero />

      {/* <AboutHero /> */}
      {/* <ProblemSolver /> */}
      {/* <IntegratedSystem /> */}
      
      <HeartMessage />
      <SalesClosing />

    </>
  );
}