import UiFinalCTA from "@/src/components/services/ux/cta";
import GlobalNexusUIUXFeatures from "@/src/components/services/ux/end";
import GlobalNexusUIUXHero from "@/src/components/services/ux/hero";
import GlobalNexusUIUXDetails from "@/src/components/services/ux/secound";


export default function ServicesPage() {

    return (

        <>

            <GlobalNexusUIUXHero />

            <GlobalNexusUIUXDetails />

            <GlobalNexusUIUXFeatures />

            <UiFinalCTA /> 

        </>

    );
}