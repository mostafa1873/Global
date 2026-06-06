import MobileFinalCTA from "@/src/components/services/mobile/cta";
import GlobalNexusMobileServiceFeatures from "@/src/components/services/mobile/end";
import GlobalNexusMobileServicePage from "@/src/components/services/mobile/hero";
import GlobalNexusMobileServiceDetails from "@/src/components/services/mobile/secound";


export default function ServicesPage() {

    return (

        <>

            <GlobalNexusMobileServicePage />

            <GlobalNexusMobileServiceDetails />

            <GlobalNexusMobileServiceFeatures />

            <MobileFinalCTA />

        </>

    );
}