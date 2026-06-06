"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function AboutHero() {
  const t = useTranslations("AboutPage.Hero");
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
    <section 
      className="relative w-full min-h-[100dvh] flex flex-col justify-center pt-36 pb-24 border-b border-white/5 z-10 select-none bg-transparent overflow-hidden" 
      dir={isAr ? "rtl" : "ltr"}
    >

      {/* ─── نسيج الشبكة الرقمية الفخم ─── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto transform-gpu">

          {/* البادج */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.2] bg-white/[0.03] mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-white tracking-widest text-xs uppercase pt-0.5">
              {t("badge")}
            </span>
          </motion.div>

          {/* العنوان الرئيسي */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            className={`font-black text-white tracking-tight leading-[1.4] mb-8 select-text ${
              isAr 
                ? "text-2xl sm:text-5xl md:text-6xl lg:text-7xl" 
                : "text-xl sm:text-4xl md:text-5xl lg:text-6xl px-2 sm:px-0"
            }`}
          >
            {t("titleLine1")} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 filter drop-shadow-sm">
              {t("titleLine2")}
            </span>
          </motion.h1>

          {/* النص الوصفي */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            className={`text-white/80 font-light leading-relaxed max-w-2xl select-text mx-auto tracking-wide ${
              isAr ? "text-base sm:text-lg md:text-xl" : "text-sm sm:text-base md:text-lg"
            }`}
          >
            <strong className="text-white font-semibold tracking-wide border-b border-white/20 pb-0.5">
              {t("companyName")}
            </strong>
            <br className="mt-4 block" />
            {t("description")}
          </motion.p>

        </div>
      </div>
    </section>
  );
}