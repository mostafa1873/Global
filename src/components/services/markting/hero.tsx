"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("DigitalMarketingService.Hero");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section
      className="relative w-full h-auto lg:min-h-screen flex items-center overflow-hidden pt-30 pb-12 md:pt-18 md:pb-0"
      dir={currentDir}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* قسم النصوص */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block mb-8">
              <span className="px-5 py-2 text-sm font-medium tracking-wide text-white border border-white/[0.2] bg-white/[0.03] rounded-full backdrop-blur-sm">
                {t("badge")}
              </span>
            </motion.div>

            {/* العنوان الرئيسي */}
            <motion.h1
              variants={itemVariants}
              className={`font-extrabold text-white leading-[1.4] lg:leading-[1.2] tracking-tight mb-5 ${locale === "en"
                  ? "text-xl sm:text-3xl md:text-4xl lg:text-5xl"
                  : "text-2xl lg:text-5xl"
                }`}
              dangerouslySetInnerHTML={{ __html: t.raw("title") }}
            />

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-white max-w-2xl leading-relaxed mb-8"
            >
              {t("description")}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
              {/* التعديل هنا: تعديل حجم الخط والـ Padding ليكون متناسق وملموم في الموبايل ويكبر تلقائياً على الشاشات الأكبر */}
              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-3 sm:gap-4 pr-6 pl-3 py-2.5 sm:pr-8 sm:pl-4 sm:py-4 bg-white text-black font-bold text-sm sm:text-base rounded-full transition-colors duration-300 ease-in-out tracking-tight shadow-sm hover:bg-blue-600 hover:text-white"
              >
                <span>{t("ctaBtn")}</span>

                {/* الدائرة والسهم: تم تصغير حجم الدائرة قليلاً في الموبايل لتناسب الحجم الجديد للزرار */}
                <span className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-blue-600 text-white group-hover/btn:bg-white group-hover/btn:text-blue-600 transition-colors duration-300 ease-in-out shrink-0">
                  <svg
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transform transition-transform duration-300 ease-in-out ${currentDir === "ltr"
                        ? "rotate-180 group-hover/btn:translate-x-1.5"
                        : "group-hover/btn:-translate-x-1.5"
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* قسم الفيجوالز والكروت العائمة */}
          <motion.div
            className={`lg:col-span-5 relative h-[400px] md:h-[500px] hidden lg:flex items-center justify-center ${currentDir === "ltr" ? "space-x-reverse" : ""
              }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* الكارت الأول */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className={`absolute top-10 w-60 bg-white/5 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 z-10 ${currentDir === "ltr" ? "left-0" : "right-0"
                }`}
            >
              <div className="w-10 h-10 bg-blue-500/20 rounded-full mb-6 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-blue-500 rounded-sm" />
              </div>
              <h3 className="text-white font-bold mb-3">{t("card1Title")}</h3>
              <div className="space-y-3">
                <div className="h-2 w-full bg-white/10 rounded-full" />
                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
              </div>
            </motion.div>

            {/* الكارت الثاني المركزي */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              style={{ animationDelay: "-2s" }}
              className={`absolute top-1/2 -translate-y-1/2 w-64 bg-[#0f172a] p-6 rounded-3xl shadow-[0_0_50px_-15px_rgba(37,99,235,0.3)] border border-blue-500/30 z-20 ${currentDir === "ltr" ? "right-0" : "left-0"
                }`}
            >
              <div className="flex justify-between items-center mb-8">
                <div className={`flex space-x-2 ${currentDir === "rtl" ? "space-x-reverse" : ""}`}>
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-white/10 rounded-full" />
                </div>
                <span className="text-xs text-blue-400 font-medium">{t("card2Status")}</span>
              </div>
              <div className="h-24 rounded-xl bg-blue-600/40 mb-6 flex items-center justify-center border border-blue-500/10">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full opacity-50 blur-sm" />
              </div>
              <h3 className="text-white font-bold text-lg">{t("card2Title")}</h3>
            </motion.div>

            {/* الكارت الثالث السفلي */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              style={{ animationDelay: "-1s" }}
              className={`absolute bottom-0 w-52 bg-white/5 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 z-10 ${currentDir === "ltr" ? "left-10" : "right-10"
                }`}
            >
              <div className={`flex items-end gap-2 h-16 mb-6 ${currentDir === "ltr" ? "flex-row" : "flex-row"}`}>
                <div className="w-full bg-white/5 h-1/3 rounded-t-sm" />
                <div className="w-full bg-blue-600/20 h-2/3 rounded-t-sm" />
                <div className="w-full bg-blue-600 h-full rounded-t-sm shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
              </div>
              <h3 className="text-white font-bold mb-1">{t("card3Title")}</h3>
              <p className="text-sm text-blue-600 tracking-wider">{t("card3Subtitle")}</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}