import FinalCTASection from "@/src/components/services/brand/FinalCTA";
import ProcessWorkflow from "@/src/components/services/brand/ProcessWorkflow";
import BrandingHeroNonTraditional from "@/src/components/services/brand/mainSection";
import BrandingCyberDashboard from "@/src/components/services/brand/aboutSection";

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

// دالة توليد الميتا داتا المخصصة لصفحة خدمة التصميم والهوية البصرية
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    // القراءة من الـ namespace المخصص لخدمة الهوية البصرية
    const t = await getTranslations({ locale, namespace: 'MetadataBranding' });

    // تحويل نص الكلمات المفتاحية لمصفوفة متوافقة مع Next.js
    const keywordsString = t("keywords") || "";
    const keywordsArray = keywordsString.split(",").map((item: string) => item.trim()).filter(Boolean);

    return {
        title: t("title"),
        description: t("description"),
        keywords: keywordsArray,
        openGraph: {
            title: t("title"),
            description: t("description"),
            images: [
                {
                    url: "/og-main.webp",
                    width: 1200,
                    height: 630,
                    alt: "Global Nexus Branding Services Preview",
                },
            ],
        },
    };
}

export default function ServicesBranding() {

    return (

        <>

            <BrandingHeroNonTraditional />

            <BrandingCyberDashboard />

            <ProcessWorkflow />

            <FinalCTASection />

        </>

    );
}