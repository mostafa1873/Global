import AgencyCTA from "@/src/components/services/web/AgencyCTA";
import CoreServices from "@/src/components/services/web/CoreServices";
import WebDevelopmentPage from "@/src/components/services/web/hero";
import TechMusclesPreview from "@/src/components/services/web/portfolio";

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

// دالة توليد الميتا داتا المخصصة لصفحة خدمة تطوير المواقع الإلكترونية
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    // القراءة من الـ namespace المخصص لخدمة تطوير المواقع
    const t = await getTranslations({ locale, namespace: 'MetadataWebDev' });

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
                    alt: "Global Nexus Web Development Services Preview",
                },
            ],
        },
    };
}

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