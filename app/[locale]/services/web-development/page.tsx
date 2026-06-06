import AgencyCTA from "@/src/components/services/web/AgencyCTA";
import CoreServices from "@/src/components/services/web/CoreServices";
import WebDevelopmentPage from "@/src/components/services/web/hero";
import TechMusclesPreview from "@/src/components/services/web/portfolio";

export default function ServicesPage() {

    return (

        <>
            <WebDevelopmentPage />

            <CoreServices />

            <TechMusclesPreview />

            <AgencyCTA />
        </>

    );
}