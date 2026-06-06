"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function CRMFullDetails() {
    const t = useTranslations("CRMService.FullDetails");
    const locale = useLocale();
    const currentDir = locale === "ar" ? "rtl" : "ltr";

    // جلب مصفوفة الخدمات المترجمة ديناميكياً بالكامل من ملف الـ JSON
    const servicesKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

    return (
        <section className="relative w-full py-10 px-6 text-center lg:text-start border-t border-white/10" dir={currentDir}>
            <div className="max-w-7xl mx-auto w-full">

                {/* المشكلة والحل - معالجة خطوط الفصل التناظرية بدقة ميكرونية */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-10 border-b border-white/10 pb-16 lg:pb-24">
                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-sm font-bold text-blue-600 mb-4 lg:mb-6 tracking-widest uppercase">
                            {t("challenge")}
                        </h3>
                        <h2 className={`font-black text-white mb-6 lg:mb-8 ${currentDir === "rtl" ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl"
                            }`}>
                            {t("problemTitle")}
                        </h2>
                        <p className={`text-white/90 font-light leading-relaxed ${currentDir === "rtl" ? "text-lg" : "text-base"
                            }`}>
                            {t("problemDesc")}
                        </p>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                        {/* التعديل الهندسي هنا: خط الفاصل يقلب يمين في العربي (border-r-2) ويسار في الإنجليزي (border-l-2) */}
                        <p className={`text-white font-medium pt-6 lg:pt-0 border-t-2 lg:border-t-0 ${currentDir === "rtl"
                                ? "text-lg lg:text-xl border-blue-600 lg:border-r-2 lg:pr-8"
                                : "text-base lg:text-lg border-blue-600 lg:border-l-2 lg:pl-8"
                            }`}>
                            {t("solutionDesc")}
                        </p>
                    </div>
                </div>

                {/* ماذا نقدم - شبكة العناصر مع ضبط إحداثيات النقاط الزرقاء الزخرفية */}
                <div className="mb-16 lg:mb-18">
                    <h3 className={`font-black text-white mb-12 lg:mb-16 ${currentDir === "rtl" ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl"
                        }`}>
                        {t("offerTitle")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                        {servicesKeys.map((key, i) => (
                            <div
                                key={i}
                                className={`group relative flex flex-col items-center lg:items-start ${currentDir === "rtl" ? "lg:pr-8" : "lg:pl-8"
                                    }`}
                            >
                                {/* ضبط ركن تموضع النقطة الزرقاء بناءً على الاتجاه واللغة */}
                                <div className={`lg:absolute lg:top-2 w-2 h-2 bg-blue-600 mb-3 lg:mb-0 ${currentDir === "rtl" ? "lg:right-0" : "lg:left-0"
                                    }`} />
                                <h4 className={`font-medium text-white ${currentDir === "rtl" ? "text-xl" : "text-lg"
                                    }`}>
                                    {t(`servicesList.${key}`)}
                                </h4>
                                <div className="mt-4 lg:mt-6 h-[1px] w-12 bg-white/10 group-hover:bg-blue-600 transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* لمن الخدمة + النتيجة - الكروت التحتية الموزونة بصرياً */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="p-8 lg:p-10 border border-white/10 flex flex-col items-center rounded-3xl">
                        <h3 className={`font-bold text-white mb-6 ${currentDir === "rtl" ? "text-xl" : "text-lg"
                            }`}>
                            {t("audienceTitle")}
                        </h3>
                        <p className={`text-white/80 font-light leading-relaxed ${currentDir === "rtl" ? "text-base" : "text-sm"
                            }`}>
                            {t("audienceDesc")}
                        </p>
                    </div>
                    <div className="p-8 lg:p-10 border border-blue-600/30 bg-blue-600/5 flex flex-col items-center rounded-3xl">
                        <h3 className={`font-bold text-white mb-6 ${currentDir === "rtl" ? "text-xl" : "text-lg"
                            }`}>
                            {t("resultTitle")}
                        </h3>
                        <p className={`text-white/90 font-light leading-relaxed ${currentDir === "rtl" ? "text-base" : "text-sm"
                            }`}>
                            {t("resultDesc")}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}