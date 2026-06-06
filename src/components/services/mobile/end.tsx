"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function GlobalNexusMobileServiceFeatures() {
  const t = useTranslations("MobileService.Features");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  // أنيميشن ظهور الحاويات الكبرى
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  // أنيميشن ناعم للنقاط والفقرات النصية
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000] as const
      }
    }
  };

  // جلب مصفوفة العروض المترجمة بشكل آمن وديناميكي
  const offersCount = 8;
  const offers = Array.from({ length: offersCount }, (_, i) => t(`offers.${i}`));

  return (
    <section className="w-full pb-10 bg-transparent relative z-10 overflow-hidden" dir={currentDir}>

      {/* هالة خلفية ناعمة جداً تمنح السكشن عمقاً تكنولوجياً متناغماً */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* خط أفقي ممتد فخم للغاية يفصل بين السكاشن */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 lg:mb-24" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* الجانب الأيمن / الأيسر التناظري: ماذا نقدم داخل الخدمة؟ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className={`lg:col-span-7 space-y-8 ${currentDir === "rtl" ? "text-right" : "text-left"}`}
          >
            {/* عنوان السكشن الجانبي */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-blue-600 font-mono text-xs tracking-widest uppercase">{t("offeringsNum")}</span>
              <div className={`h-[1px] flex-1 max-w-[80px] ${currentDir === "rtl"
                  ? "bg-gradient-to-l from-blue-600/50 to-transparent"
                  : "bg-gradient-to-r from-blue-600/50 to-transparent"
                }`} />
            </div>

            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {t("offeringsTitle")}
            </motion.h2>

            {/* شبكة عرض ثنائية خالية من الإطارات المغلقة لتعبر عن الحرية والانسيابية */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-4">
              {offers.map((offer, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-4 group cursor-default"
                >
                  {/* رقم تسلسلي تقني ناعم باللون الأزرق */}
                  <span className="text-blue-600 font-mono text-xs pt-1 select-none font-bold transition-transform duration-300 group-hover:scale-110">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  {/* النص المعروض بدقة متناهية متناسب مع اتجاه اللغة */}
                  <span className={`font-medium leading-relaxed group-hover:text-white transition-colors duration-300 ${currentDir === "rtl" ? "text-white/80 text-base sm:text-lg" : "text-white/75 text-sm sm:text-base"
                    }`}>
                    {offer}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* الجانب المقابل: لمن الخدمة + النتيجة المتوقعة */}
          <div className="lg:col-span-5 space-y-12 lg:space-y-16">

            {/* 1. لمن هذه الخدمة مناسبة؟ */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className={`space-y-6 text-center lg:text-start`}
            >
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-blue-600 font-mono text-xs tracking-widest uppercase">{t("fitNum")}</span>
                <div className={`h-[1px] flex-1 max-w-[80px] ${currentDir === "rtl"
                    ? "bg-gradient-to-l from-blue-600/50 to-transparent"
                    : "bg-gradient-to-r from-blue-600/50 to-transparent"
                  }`} />
              </div>

              <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {t("fitTitle")}
              </motion.h3>

              <div className="space-y-4 pt-2">
                <motion.p variants={itemVariants} className={`text-white/70 font-medium leading-[1.8] ${currentDir === "rtl" ? "text-sm sm:text-base" : "text-xs sm:text-sm"
                  }`}>
                  {t("fitDesc1")}
                </motion.p>
                <motion.p variants={itemVariants} className={`text-white/50 font-medium leading-[1.8] ${currentDir === "rtl"
                    ? "text-sm border-r border-white/10 pr-4"
                    : "text-xs border-l border-white/10 pl-4"
                  }`}>
                  {t("fitDesc2")}
                </motion.p>
              </div>
            </motion.div>

            {/* 2. النتيجة المتوقعة */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-6 text-center lg:text-start"
            >
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-blue-600 font-mono text-xs tracking-widest uppercase">{t("outcomeNum")}</span>
                <div className={`h-[1px] flex-1 max-w-[80px] ${currentDir === "rtl"
                    ? "bg-gradient-to-l from-blue-600/50 to-transparent"
                    : "bg-gradient-to-r from-blue-600/50 to-transparent"
                  }`} />
              </div>

              <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {t("outcomeTitle")}
              </motion.h3>

              {/* بلوك فخم ومضاء لتمييز النتيجة النهائية مع دعم الـ Borders التناظرية */}
              <motion.div
                variants={itemVariants}
                className={`p-6 sm:p-8 rounded-2xl bg-blue-600/[0.01] relative overflow-hidden ${currentDir === "rtl" ? "border-r-2 border-blue-600/40" : "border-l-2 border-blue-600/40"
                  }`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/[0.03] rounded-full blur-[40px] pointer-events-none" />

                <p className={`text-blue-600 font-semibold leading-[1.8] relative z-10 ${currentDir === "rtl" ? "text-sm sm:text-base lg:text-lg" : "text-xs sm:text-sm lg:text-base"
                  }`}>
                  {t("outcomeDesc")}
                </p>
              </motion.div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}