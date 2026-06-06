"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function GlobalNexusServicePage() {
  const t = useTranslations("WebDevelopmentService.Hero");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] as const }
    }
  };

  return (
    <div className="w-full text-white py-10 h-auto md:min-h-screen md:py-30" dir={currentDir}>

      <section className="w-full max-w-6xl mx-auto px-4 relative z-10 pt-17 md:pt-5">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="w-full border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden bg-white/5 backdrop-blur-[12px] shadow-2xl"
        >

          {/* Header */}
          <div className="w-full border-b border-white/10 px-6 py-4 flex items-center justify-between bg-white/[0.02]">
            <motion.div variants={fadeIn} className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{t("serviceLabel")}</span>
            </motion.div>
            <div className="flex gap-1.5 opacity-30">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>

          {/* Title - تم إضافة تحكم شرطي ديناميكي لحجم الخط في الموبايل بناءً على لغة الواجهة الحالية */}
          <div className="p-6 md:p-16 border-b border-white/10 text-center lg:text-start">
            <motion.h1
              variants={fadeIn}
              className={`font-bold text-white leading-[1.3] tracking-tight ${
                locale === "en" 
                  ? "text-xl sm:text-3xl md:text-5xl" 
                  : "text-2xl sm:text-4xl md:text-5xl"
              }`}
              dangerouslySetInnerHTML={{ __html: t.raw("title") }}
            />
          </div>

          {/* Grid Container */}
          <div className="flex flex-col lg:flex-row">

            {/* Description */}
            <div className="w-full lg:w-2/3 p-6 md:p-12 border-b lg:border-b-0 border-white/10 flex items-center text-center lg:text-start">
              <motion.p
                variants={fadeIn}
                className="text-white text-sm md:text-lg font-medium leading-[1.5]"
                dangerouslySetInnerHTML={{ __html: t.raw("description") }}
              />
            </div>

            {/* Button - تم إصلاح تنسيق وريسبونسف الزرار ليكون مضغوطاً ومسنترأ في الموبايل */}
            <div className="w-full lg:w-1/3 p-6 md:p-12 flex items-center justify-center lg:justify-end">
              <motion.div
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // لغينا الـ max-w-[300px] وخليناه max-w-max عشان يلم نفسه، وبيروح lg:max-w-none في الديسكتوب
                className="w-full max-w-max lg:max-w-none"
              >
                <a
                  href="#contact-section"
                  // جعلنا التوزيع جواه justify-center عشان النص والسهم يكونوا لازقين في بعض ف המوبייל، وبيروح justify-between في الديسكتوب
                  className="w-full flex items-center justify-center lg:justify-between gap-4 px-6 py-4 bg-white text-black hover:bg-blue-600 hover:text-white font-bold rounded-full transition-all duration-300 shadow-lg"
                >
                  <span className="whitespace-nowrap">{t("ctaBtn")}</span>
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${currentDir === "ltr" ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </span>
                </a>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
}