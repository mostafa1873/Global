"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function AboutHero() {
  const t = useTranslations("ServicesPage.Hero");
  const locale = useLocale();
  const isAr = locale === "ar";

  const fadeVariant = {
    hidden: {
      opacity: 0,
      y: 25,
      filter: "blur(12px)"
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  return (
    // السيكشن شفاف بالكامل ومحمي بـ z-index ومسافات متناسقة مع دعم الـ 100dvh والتوسط العمودي ودعم اتجاه اللغة ديناميكياً
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center pt-36 pb-24 border-b border-white/5 z-10 select-none bg-transparent" dir={isAr ? "rtl" : "ltr"}>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">

        {/* الحاوية الرئيسية الممتدة والمتمركفة بدقة */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto transform-gpu">

          {/* البادج بنفس التنسيق الموحد في الموقع مع تأثير زجاجي خفيف */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.2] bg-white/[0.03] backdrop-blur-md mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-white tracking-widest text-xs uppercase pt-0.5">
              {t("badge")}
            </span>
          </motion.div>

          {/* العنوان الرئيسي - تم مواءمة أحجام الخطوط في الإنجليزي والموبايل لضمان الانسيابية والبقاء على سطرين منظمين */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            className={`font-black text-white tracking-tight leading-[1.3] mb-8 select-text ${
              isAr 
                ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl" 
                : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-2 sm:px-0"
            }`}
          >
            {t("titleLine1")} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 filter drop-shadow-sm">
              {t("titleLine2")}
            </span>
          </motion.h1>

          {/* النص الوصفي بتوزيع مسافات وتباين ألوان أعلى فخامة */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            className={`text-white/80 font-light leading-relaxed max-w-2xl select-text mx-auto tracking-wide ${
              isAr ? "text-base sm:text-lg md:text-xl" : "text-sm sm:text-base md:text-lg px-2 sm:px-0"
            }`}
          >
            {t("description")}
          </motion.p>

        </div>
      </div>
    </section>
  );
}