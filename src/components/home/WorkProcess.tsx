"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const stepIds = ["01", "02", "03", "04", "05"];

export default function WorkProcess() {
  const t = useTranslations("WorkProcess");
  const locale = useLocale();
  const isAr = locale === "ar";

  // أنيميشن ناعم جداً بـ transform-gpu لظهور المراحل بالتوالي دون تأثير على السكرول
  const stepVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }
    })
  };

  return (
    <section className="relative w-full py-10 border-t border-white/5 z-10 select-none" dir={isAr ? "rtl" : "ltr"}>
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">

        {/* هيدر السيكشن الفخم */}
        <div className={`flex flex-col mb-20 md:mb-28 space-y-5 max-w-3xl transform-gpu ${
          isAr ? "items-center md:items-start text-center md:text-right" : "items-center md:items-start text-center md:text-left"
        }`}>
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.2] bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-white tracking-widest text-xs uppercase pt-0.5">
              {t("badge")}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight select-text">
            {t("titleLine1")} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              {t("titleLine2")}
            </span>
          </h2>
        </div>

        {/* مسار المراحل المتطور */}
        <div className={`relative flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-6 w-full before:absolute before:top-0 before:bottom-0 before:w-[1px] before:bg-white/10 before:pointer-events-none md:before:bottom-auto md:before:h-[1px] md:before:w-full ${
          isAr 
            ? "before:right-1/2 md:before:right-0 md:before:left-0" 
            : "before:left-1/2 md:before:left-0 md:before:right-0"
        }`}>

          {stepIds.map((id, index) => {
            const phase = t(`steps.${id}.phase`);
            const enTitle = t(`steps.${id}.enTitle`);
            const arTitle = t(`steps.${id}.arTitle`);

            return (
              <motion.div
                key={phase}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={stepVariant}
                className={`group relative flex-1 flex flex-col items-center text-center pt-8 md:pt-10 transform-gpu ${
                  isAr ? "md:items-start md:text-right md:pl-6" : "md:items-start md:text-left md:pr-6"
                }`}
              >
                {/* العقدة أو النقطة الهندسية المضيئة على الخط الفاصل - تم ضبط التموضع بالملي بالاتجاهين */}
                <div className={`absolute top-0 w-2.5 h-2.5 rounded-full border border-white/30 bg-[#020617] group-hover:border-white group-hover:bg-white transition-all duration-300 z-20 -translate-y-1/2 ${
                  isAr 
                    ? "right-1/2 translate-x-1/2 md:right-0 md:translate-x-0" 
                    : "left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0"
                }`} />

                {/* رقم المرحلة الأنيق */}
                <span className="font-mono text-xs text-blue-600 tracking-widest uppercase mb-2 group-hover:text-white/60 transition-colors duration-300">
                  PHASE {phase}
                </span>

                {/* العنوان الإنجليزي للمرحلة */}
                <h3 className="font-mono text-lg md:text-xl font-bold text-white/85 group-hover:text-white transition-colors duration-300 mb-4 select-text">
                  {enTitle}
                </h3>

                {/* الشرح العربي الأصلي كامل كما هو بالملي */}
                <p className="text-white/80 text-sm md:text-base font-light leading-relaxed select-text max-w-xs md:max-w-none">
                  {arTitle}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}