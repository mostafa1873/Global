"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function BrandingHeroNonTraditional() {
  const t = useTranslations("BrandingService");
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
      className="relative w-full h-auto lg:min-h-screen flex items-center overflow-hidden pt-30 pb-12 md:pt-18 md:pb-0 bg-transparent select-none z-10"
      dir={currentDir}
    >
      {/* شبكة الإضاءة الخلفية الناعمة */}
      <div className="absolute top-0 rtl:right-1/4 ltr:left-1/4 w-[300px] h-[300px] bg-nexus-blue/[0.03] blur-[100px] rounded-full pointer-events-none z-0 transform-gpu" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* قسم النصوص والمعلومات */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* البادج المطور */}
            <motion.div variants={itemVariants} className="inline-block mb-6 sm:mb-8">
              <div className="flex items-center gap-3 px-4 sm:px-5 py-2 border border-white/[0.2] bg-white/[0.03] rounded-full backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium tracking-wide text-white">
                  {t("badge")}
                </span>
              </div>
            </motion.div>

            {/* العنوان الرئيسي */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl ltr:text-2xl ltr:sm:text-3xl ltr:lg:text-4xl font-extrabold text-white leading-[1.4] lg:leading-[1.2] ltr:leading-[1.3] tracking-tight mb-6 sm:mb-8 select-text break-words w-full"
            >
              {t("titleMain")} <br className="hidden sm:block" />
              {t("titleMiddle")} <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text rtl:bg-gradient-to-l ltr:bg-gradient-to-r from-white via-white/80 to-white/40 block mt-1 md:mt-2">
                {t("titleSub")}
              </span>
            </motion.h1>

            {/* النص الوصفي */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg lg:text-xl ltr:text-sm ltr:md:text-base text-white/70 max-w-2xl leading-relaxed mb-8 sm:mb-12 select-text px-2 sm:px-0"
            >
              {t("description")}
            </motion.p>

            {/* الزر التفاعلي - تم حل مشكلة الريسبونسف هنا */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center justify-center lg:justify-start w-full px-4 sm:px-0 z-20">
              <button className="group/btn inline-flex items-center justify-center sm:justify-start gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-bold text-sm sm:text-base rounded-full transition-all duration-300 ease-in-out tracking-tight shadow-sm hover:bg-nexus-blue hover:text-white w-full sm:w-auto active:scale-[0.99]">
                <span className="whitespace-nowrap">{t("ctaButton")}</span>
                <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-nexus-blue text-white group-hover/btn:bg-white group-hover/btn:text-nexus-blue transition-colors duration-300 ease-in-out shrink-0">
                  <svg className="w-4 h-4 transform transition-transform duration-300 ease-in-out rtl:group-hover/btn:-translate-x-1.5 ltr:group-hover/btn:translate-x-1.5 ltr:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* الكروت المعمارية */}
          <motion.div
            className="lg:col-span-5 relative h-[400px] md:h-[500px] hidden lg:flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* الكارت الأول العلوي */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute rtl:right-0 ltr:left-0 top-10 w-60 bg-white/5 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/10 z-10"
            >
              <div className="relative w-full h-28 bg-black/20 border border-white/5 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 border-b border-white/[0.04] my-auto h-0" />
                <div className="absolute inset-0 border-l border-white/[0.04] mx-auto w-0" />
                <div className="w-16 h-16 border border-dashed border-nexus-blue/30 rounded-full absolute" />
                <div className="w-10 h-10 border border-nexus-blue/20 rounded-full absolute" />
                <div className="w-12 h-12 border border-white/10 rotate-45 absolute" />
                <svg className="w-8 h-8 text-nexus-blue relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m12-9l-6 6m0 0l6 6" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{t("cardGeometryTitle")}</h3>
              <p className="text-xs text-white/40 font-mono">{t("cardGeometrySub")}</p>
            </motion.div>

            {/* الكارت الثاني الأوسط */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              style={{ animationDelay: "-2s" }}
              className="absolute rtl:left-0 ltr:right-0 top-1/2 -translate-y-1/2 w-64 bg-[#0f172a] p-6 rounded-3xl shadow-[0_0_50px_-15px_rgba(0,0,0,0.8)] border border-nexus-blue/20 z-20"
            >
              <span className="text-[11px] text-nexus-blue font-mono uppercase tracking-wider block mb-4">{t("cardPaletteSub")}</span>
              <div className="flex gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-nexus-blue shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center text-[9px] text-white font-mono font-bold">#NEXUS</div>
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[9px] text-black font-mono font-bold">#FFFFFF</div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[9px] text-white/40 font-mono">#DARK</div>
              </div>
              <h3 className="text-white font-bold text-base">{t("cardPaletteTitle")}</h3>
            </motion.div>

            {/* الكارت الثالث السفلي */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              style={{ animationDelay: "-1s" }}
              className="absolute rtl:right-10 ltr:left-10 bottom-0 w-52 bg-white/5 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/10 z-10"
            >
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                <span className="text-2xl font-serif text-white/90 font-medium">Aa</span>
                <span className="text-xl font-sans text-nexus-blue font-black">عـ</span>
              </div>
              <div className="space-y-2 mb-3">
                <div className="h-1.5 w-full bg-white/20 rounded-full" />
                <div className="h-1.5 w-5/6 bg-white/10 rounded-full" />
                <div className="h-1.5 w-2/3 bg-white/5 rounded-full" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{t("cardTypographyTitle")}</h3>
              <p className="text-xs text-nexus-blue font-mono">{t("cardTypographySub")}</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}