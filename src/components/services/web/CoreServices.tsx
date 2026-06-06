"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function ServiceOverview() {
  const t = useTranslations("WebDevelopmentService.Overview");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="w-full py-10 border-t border-white/10 px-6 md:px-24 bg-transparent text-white" dir={currentDir}>
      <div className="max-w-7xl mx-auto">
        
        {/* العنوان - بتصميم غير تقليدي */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-[clamp(2.5rem,10vw,6rem)] font-black leading-[1.1] tracking-tighter break-words text-blue-600">
            {t("titlePart1")} <br />
            <span className="text-transparent inline-block mt-2" style={{ WebkitTextStroke: "1.5px white" }}>
              {t("titlePart2")}
            </span>
          </h2>
        </motion.div>

        {/* النص مقسم بشكل هندسي جريء */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          
          {/* العمود الأول: الفقرة الأولى */}
          {/* تم ضبط المحاذاة لتكون ديناميكية للتناظر lg:text-start بدلاً من التثبيت */}
          <div className="md:col-span-7 text-center lg:text-start ltr:text-start">
            <motion.p 
              initial={{ opacity: 0, x: currentDir === "rtl" ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-lg sm:text-2xl md:text-3xl font-light leading-[1.6] text-white"
            >
              {t("paragraph1")}
            </motion.p>
          </div>

          {/* العمود الثاني: الفقرة الثانية بتصميم متباين */}
          {/* تم ضبط البوردر الجانبي ليكون مرن (rtl:border-r-2 ltr:border-l-2) والمحاذاة الداخلية حسب الاتجاه */}
          <div className={`md:col-span-5 border-white/10 pr-5 md:pr-8 pl-5 md:pl-8 text-center lg:text-start flex flex-col items-center lg:items-start ${
            currentDir === "rtl" 
              ? "border-r-2 md:border-r-4 border-blue-600" 
              : "border-l-2 md:border-l-4 border-blue-600 text-start"
          }`}>
            <motion.p 
              initial={{ opacity: 0, x: currentDir === "rtl" ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl font-medium leading-[1.7] md:leading-[1.8] text-white/90"
            >
              {t("paragraph2")}
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}