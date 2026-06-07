import UiFinalCTA from "@/src/components/services/ux/cta";
import GlobalNexusUIUXFeatures from "@/src/components/services/ux/end";
import GlobalNexusUIUXHero from "@/src/components/services/ux/hero";
import GlobalNexusUIUXDetails from "@/src/components/services/ux/secound";

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

// دالة توليد الميتا داتا المخصصة لصفحة خدمة تصميم الـ UI/UX
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    // القراءة من الـ namespace المخصص لخدمة الـ UI/UX
    const t = await getTranslations({ locale, namespace: 'MetadataUIUX' });

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
                    alt: "Global Nexus UI/UX Design Services Preview",
                },
            ],
        },
    };
}

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