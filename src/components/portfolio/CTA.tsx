"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function PortfolioSalesClosing() {
    const t = useTranslations("PortfolioPage.PortfolioSalesClosing");
    const locale = useLocale();
    const isRtl = locale === "ar";

    return (
        <section className="relative w-full py-10 px-4 bg-transparent border-t border-white/10 overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
            <div className="max-w-4xl mx-auto relative z-10 text-center">

                {/* العنوان - تم ضبط التنسيق الهيكلي وحجم الخط للموبايل في الإنجليزي ليكون مريحاً ومتناسقاً جداً */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white mb-5 sm:mb-8 tracking-tight leading-tight"
                >
                    {/* الجملة الأساسية الحاسمة مع الحفاظ على الأجزاء الثلاثة للترجمة والتمييز اللوني */}
                    <span className={`block font-black mb-2 sm:mb-4 tracking-tight leading-[1.5] ${isRtl
                        ? "text-xl sm:text-2xl md:text-4xl"
                        : "text-lg sm:text-xl md:text-3xl px-2 sm:px-0"
                        }`}>
                        {t("title_part1")}
                        <br />
                        {t("title_part2")} <span className="text-blue-600">{t("title_part3")}</span>
                    </span>

                    {/* المحتوى الفرعي (الوصف) - تم تحسين التباين والحجم لراحة العين على الشاشات الصغيرة */}
                    <span className={`block font-light text-white/90 max-w-3xl mx-auto leading-relaxed ${isRtl ? "text-base sm:text-lg md:text-xl" : "text-sm sm:text-lg md:text-xl px-1 sm:px-0"
                        }`}>
                        {t("description")}
                    </span>
                </motion.h2>

                {/* الزرار المركزي الضخم والمحكم بنظام عرض مرن ومستجيب */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-2 bg-white/[0.02] border border-white/5 rounded-3xl sm:rounded-full backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full sm:w-auto"
                >
                    {/* زرار الاستشارة الأساسي - مرن وفخم يفرد النص بالكامل على سطر واحد على الموبايل */}
                    <Link href="/call" className="w-full sm:w-auto">
                        <motion.button
                            whileHover={{ x: isRtl ? -5 : 5 }}
                            className={`w-full sm:w-auto bg-white text-black font-black rounded-full flex items-center justify-center gap-3 transition-transform ${isRtl
                                ? "px-6 py-4 text-base sm:px-10 sm:py-5 sm:text-lg md:text-xl whitespace-nowrap"
                                : "px-6 py-4 text-base sm:px-10 sm:py-5 sm:text-lg md:text-xl whitespace-nowrap"
                                }`}
                        >
                            {t("cta_button")}
                            {isRtl ? <FiArrowLeft className="text-xl md:text-2xl shrink-0" /> : <FiArrowRight className="text-xl md:text-2xl shrink-0" />}
                        </motion.button>
                    </Link>

                    {/* زرار الواتساب (المكمل) */}
                    <motion.a
                        href="https://wa.me/201109458238"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        className="p-5 text-[#25D366] hover:text-white group transition-colors"
                    >
                        <FaWhatsapp className="text-3xl" />
                    </motion.a>
                </motion.div>

                {/* جملة ختامية بسيطة جداً */}
                <p className="mt-16 text-slate-500 text-sm font-light tracking-wide opacity-50">
                    Your Digital Transformation Starts Here — 2026
                </p>

            </div>

        </section>
    );
}