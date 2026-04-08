import BrandIdentityProcess from "@/src/components/services/brand/BrandIdentity";
import FinalCTASection from "@/src/components/services/brand/FinalCTA";
import BrandingHero from "@/src/components/services/brand/hero";
import ProcessWorkflow from "@/src/components/services/brand/ProcessWorkflow";
import SocialProofSection from "@/src/components/services/brand/SocialProof";



export default function ServicesBranding() {

    return (

        <>

            <BrandingHero />

            <BrandIdentityProcess />

            <ProcessWorkflow />

            <SocialProofSection />

            <FinalCTASection />

        </>

    );
}