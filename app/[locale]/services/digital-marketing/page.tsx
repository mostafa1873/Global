import FinalCallSection from "@/src/components/services/markting/cta";
import MarketingSection from "@/src/components/services/markting/hero";
import IntegratedSolutions from "@/src/components/services/markting/solutions";
import PartnershipSection from "@/src/components/services/markting/why";
import CaseStudiesSection from "@/src/components/services/markting/work";

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

// دالة توليد الميتا داتا المخصصة لصفحة خدمة التسويق الرقمي
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    // القراءة من الـ namespace المخصص لخدمة التسويق الرقمي
    const t = await getTranslations({ locale, namespace: 'MetadataMarketing' });

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
                    alt: "Global Nexus Marketing Services Preview",
                },
            ],
        },
    };
}

export default function Servicesmarketing() {

    return (

        <>
            <MarketingSection />

            <IntegratedSolutions />

            <PartnershipSection />

            <CaseStudiesSection />

            <FinalCallSection />
        </>

    );
}