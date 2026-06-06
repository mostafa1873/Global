"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function GlobalNexusMobileServiceDetails() {
  const t = useTranslations("MobileService.Details");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  // أنيميشن ناعم لظهور العناصر عند التمرير
  const blockFadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] as const }
    }
  };

  return (
    <section className="w-full pb-10 bg-transparent relative z-10 overflow-hidden" dir={currentDir}>

      {/* هالة إضاءة خلفية ناعمة جداً في المنتصف لتوفير عمق بصري هادئ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* خط أفقي علوي رفيع للغاية وممتد يفصل بين الهيرو وهذا السكشن بجمالية مطلقة */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 lg:mb-24" />

        {/* توزيع تحريري متوازي (Column-based Editorial Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* العمود الأول: نبذة عن الخدمة */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={blockFadeIn}
            className="flex flex-col space-y-6 text-center lg:text-start group"
          >
            {/* مؤشر بصري علوي تقني وبسيط للغاية (بدون كارت) */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-blue-600 font-mono text-xs tracking-widest uppercase">{t("visionNum")}</span>
              <div className={`h-[1px] flex-1 max-w-[80px] ${currentDir === "rtl"
                  ? "bg-gradient-to-l from-blue-600/50 to-transparent"
                  : "bg-gradient-to-r from-blue-600/50 to-transparent"
                }`} />
            </div>

            {/* العنوان الرئيسي للعمود */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight relative">
              {t("visionTitle")}
              {/* خط توهج ليزري يظهر بنعومة عند تمرير الماوس مع دعم تناظر الاتجاه */}
              <span className={`absolute bottom-0 w-0 h-[1px] bg-blue-600 transition-all duration-500 group-hover:w-1/3 hidden lg:block ${currentDir === "rtl" ? "right-0" : "left-0"
                }`} />
            </h2>

            {/* نصوص المحتوى متناسقة ومريحة جداً للقراءة والتباعد البصري للـ LTR/RTL */}
            <div className="space-y-6 pt-4">
              <p className={`text-white/90 font-medium leading-[1.8] sm:leading- ${currentDir === "rtl" ? "text-base sm:text-lg" : "text-sm sm:text-base"
                }`}>
                {t("visionDesc1")}
              </p>

              <p className={`text-white/80 font-medium leading-[1.8] mt-4 ${currentDir === "rtl"
                  ? "text-sm sm:text-base border-r-2 border-white/10 pr-4"
                  : "text-xs sm:text-sm border-l-2 border-white/10 pl-4"
                }`}>
                {t("visionDesc2")}
              </p>
            </div>
          </motion.div>

          {/* العمود الثاني: المشكلة التي تعالجها الخدمة */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={blockFadeIn}
            className="flex flex-col space-y-6 text-center lg:text-start group"
          >
            {/* مؤشر بصري علوي تقني */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-blue-600 font-mono text-xs tracking-widest uppercase">{t("challengeNum")}</span>
              <div className={`h-[1px] flex-1 max-w-[80px] ${currentDir === "rtl"
                  ? "bg-gradient-to-l from-blue-600/50 to-transparent"
                  : "bg-gradient-to-r from-blue-600/50 to-transparent"
                }`} />
            </div>

            {/* العنوان الرئيسي للعمود الثاني */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight relative">
              {t("challengeTitle")}
              <span className={`absolute bottom-0 w-0 h-[1px] bg-blue-600 transition-all duration-500 group-hover:w-1/3 hidden lg:block ${currentDir === "rtl" ? "right-0" : "left-0"
                }`} />
            </h2>

            {/* نصوص محتوى العمود الثاني */}
            <div className="space-y-6 pt-4">
              <p className={`text-white/80 font-medium leading-[1.8] sm:leading- ${currentDir === "rtl" ? "text-base sm:text-lg" : "text-sm sm:text-base"
                }`}>
                {t("challengeDesc1")}
              </p>

              <div className={`p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-blue-600 font-semibold leading-[1.8] ${currentDir === "rtl" ? "text-sm sm:text-base" : "text-xs sm:text-sm"
                }`}>
                {t("challengeDesc2")}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}