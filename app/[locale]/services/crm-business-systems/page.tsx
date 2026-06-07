import AdsHero from "@/src/components/services/crm/hero";
import ProblemSolutionSection from "@/src/components/services/crm/ProblemSolution";
import ProcessSection from "@/src/components/services/crm/Process";
import SocialProofAndOffer from "@/src/components/services/crm/SocialProof";

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

// دالة توليد الميتا داتا المخصصة لصفحة خدمة أنظمة إدارة الأعمال والـ CRM
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    // القراءة من الـ namespace المخصص لخدمة الأنظمة والـ CRM
    const t = await getTranslations({ locale, namespace: 'MetadataCRM' });

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
                    alt: "Global Nexus CRM & Business Systems Services Preview",
                },
            ],
        },
    };
}

export default function ServicesPaidAds() {

    return (

        <>

            <AdsHero />

            <ProblemSolutionSection />

            <ProcessSection />

            <SocialProofAndOffer />

        </>

    );
}