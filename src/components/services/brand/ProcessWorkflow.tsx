"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function BrandingEditorialDeck() {
    const t = useTranslations("BrandingService.BrandingEditorialDeck");
    const locale = useLocale();
    const currentDir = locale === "ar" ? "rtl" : "ltr";

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    // قراءة مصفوفة المخرجات ديناميكياً من ملف الترجمة لضمان دقة التنفيذ وعرضها بالتساوي
    const offerings = t.raw("offerings") as string[];

    return (
        <section
            className="relative w-full py-10 px-4 sm:px-6 md:px-12 select-none z-10 overflow-hidden"
            dir={currentDir}
        >
            <div className="relative z-10 w-full max-w-[1300px] mx-auto flex flex-col space-y-10 md:space-y-20">

                {/* ================= الكتلة الأولى: المشكلة (توزيع جانبي فخم) ================= */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start"
                >
                    {/* الجانب الهندسي الجاذب للعين - تم إضافة بادينج تناظري ذكي (rtl:lg:pl-12 ltr:lg:pr-12) لمنع التصاق النص بالبوردر */}
                    <div className="lg:col-span-4 flex flex-row lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-4 border-b lg:border-b-0 rtl:lg:border-l-0 rtl:lg:border-r ltr:lg:border-r-0 ltr:lg:border-l border-white/[0.08] pb-4 lg:pb-0 rtl:lg:pl-12 ltr:lg:pr-12 rtl:lg:pr-10 ltr:lg:pl-10 w-full">
                        <span className="font-mono text-4xl md:text-6xl font-thin text-white/75 tracking-tighter">
                            {t("challengeNum")}
                        </span>
                        <div className="space-y-1 text-start lg:text-start max-w-[90%]">
                            <span className="text-blue-600 font-mono text-[10px] tracking-widest uppercase block">
                                {t("challengeLabel")}
                            </span>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-600 tracking-tight leading-tight">
                                {t("challengeTitle")}
                            </h2>
                        </div>
                    </div>

                    {/* الجانب القرائي الانسيابي */}
                    <div className="lg:col-span-8 flex flex-col space-y-6 text-center lg:text-start items-center lg:items-start">
                        <p className="text-white/90 text-base sm:text-lg md:text-xl ltr:text-sm ltr:sm:text-base ltr:md:text-lg font-light leading-relaxed select-text break-words">
                            {t("challengeText1")}
                        </p>
                        <p className="text-white/80 text-sm sm:text-base md:text-lg ltr:text-xs ltr:sm:text-sm font-light leading-relaxed select-text italic rtl:border-l-0 rtl:border-r-2 ltr:border-r-0 ltr:border-l-2 border-white/20 rtl:pr-4 ltr:pl-4 w-full">
                            {t("challengeText2")}
                        </p>
                    </div>
                </motion.div>


                {/* ================= الكتلة الثانية: ماذا نقدم (قائمة منسابة متباعدة) ================= */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">

                    {/* العنوان الجانبي الثابت - تم إضافة نفس البادينج التناظري هنا لتوحيد الهوية البصرية ومنع الالتصاق */}
                    <div className="lg:col-span-4 flex flex-row lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-4 border-b lg:border-b-0 rtl:lg:border-l-0 rtl:lg:border-r ltr:lg:border-r-0 ltr:lg:border-l border-white/[0.08] pb-4 lg:pb-0 rtl:lg:pl-12 ltr:lg:pr-12 rtl:lg:pr-10 ltr:lg:pl-10 w-full">
                        <span className="font-mono text-4xl md:text-6xl font-thin text-white/75 tracking-tighter">
                            {t("scopeNum")}
                        </span>
                        <div className="space-y-1 text-start lg:text-start max-w-[90%]">
                            <span className="text-blue-600 font-mono text-[10px] tracking-widest uppercase block">
                                {t("scopeLabel")}
                            </span>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-600 tracking-tight leading-tight">
                                {t("scopeTitle")}
                            </h2>
                        </div>
                    </div>

                    {/* قائمة المخرجات الذكية */}
                    <div className="lg:col-span-8 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-start">
                            {offerings.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: currentDir === "rtl" ? -6 : 6 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="group flex items-start gap-4 py-3 border-b border-white/[0.03] hover:border-nexus-blue/20 transition-colors duration-300"
                                >
                                    <span className="font-mono text-xs text-blue-600 group-hover:text-blue-400 transition-colors pt-1">
                                        [{index + 1}]
                                    </span>
                                    <p className="text-white/90 group-hover:text-white text-sm sm:text-base ltr:text-xs ltr:sm:text-sm font-normal leading-normal select-text">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* ================= الكتلة الثالثة: لمن الخدمة + النتيجة (توازن متناظر) ================= */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">

                    {/* لمن الخدمة مناسبة */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="flex flex-col space-y-4 border-b pb-6 lg:pb-0 lg:border-b-0 rtl:lg:border-l-0 rtl:lg:border-r ltr:lg:border-r-0 ltr:lg:border-l border-white/[0.06] rtl:lg:pr-8 ltr:lg:pl-8 text-center lg:text-start items-center lg:items-start w-full"
                    >
                        <span className="font-mono text-xs text-white/70 tracking-widest uppercase block">
                            {t("audienceNum")}
                        </span>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">
                            {t("audienceTitle")}
                        </h3>
                        <div className="space-y-4 text-white/90 text-sm sm:text-base ltr:text-xs ltr:sm:text-sm font-light leading-relaxed select-text pt-2">
                            <p>
                                {t("audienceText1")}
                            </p>
                            <p className="text-white/85 text-xs sm:text-sm ltr:text-[11px] ltr:sm:text-xs">
                                {t("audienceText2")}
                            </p>
                        </div>
                    </motion.div>

                    {/* النتيجة المتوقعة */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="flex flex-col space-y-4 border-b pb-6 lg:pb-0 lg:border-b-0 rtl:lg:border-l-0 rtl:lg:border-r-2 ltr:lg:border-r-0 ltr:lg:border-l-2 border-nexus-blue rtl:lg:pr-8 ltr:lg:pl-8 text-center lg:text-start items-center lg:items-start bg-gradient-to-l ltr:bg-gradient-to-r from-nexus-blue/[0.01] to-transparent py-2 w-full"
                    >
                        <span className="font-mono text-xs text-blue-600 tracking-widest uppercase block">
                            {t("outcomeNum")}
                        </span>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">
                            {t("outcomeTitle")}
                        </h3>
                        <p className="text-white/90 group-hover:text-white text-base sm:text-lg ltr:text-sm ltr:sm:text-base font-light leading-relaxed select-text pt-2 max-w-xl">
                            {t("outcomeText")}
                        </p>
                    </motion.div>

                </div>

            </div>

        </section>
    );
}