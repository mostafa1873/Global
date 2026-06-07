import MobileFinalCTA from "@/src/components/services/mobile/cta";
import GlobalNexusMobileServiceFeatures from "@/src/components/services/mobile/end";
import GlobalNexusMobileServicePage from "@/src/components/services/mobile/hero";
import GlobalNexusMobileServiceDetails from "@/src/components/services/mobile/secound";

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

// دالة توليد الميتا داتا المخصصة لصفحة خدمة تطوير تطبيقات الموبايل
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    // القراءة من الـ namespace المخصص لخدمة تطبيقات الموبايل
    const t = await getTranslations({ locale, namespace: 'MetadataMobileApps' });

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
                    alt: "Global Nexus Mobile App Development Services Preview",
                },
            ],
        },
    };
}

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