"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function GlobalNexusUIUXHero() {
  const t = useTranslations("UIUXService.Hero");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] as const }
    }
  };

  // حركة مؤشر الماوس الوهمي داخل محاكي الواجهات
  const cursorAnimation = {
    animate: {
      x: [0, currentDir === "rtl" ? -80 : 80, currentDir === "rtl" ? 40 : -40, 0], // تكييف اتجاه حركة الماوس بالتناظر مع لغة التصفح
      y: [0, 90, -40, 0],
      scale: [1, 0.9, 1.1, 1],
      transition: {
        duration: 7,
        ease: "easeInOut" as const,
        repeat: Infinity,
      }
    }
  };

  return (
    // التعديل الآمن والوحيد: جعلنا الارتفاع مرن h-auto على الموبايل لإنهاء الفراغ الأسود السفلي تماماً، ومع الديسكتوب يرجع بكامل الشاشة lg:min-h-screen مع إضافة pb-12 كمساحة أمان
    <div className="w-full text-white h-auto lg:min-h-screen bg-transparent flex items-center justify-center pt-32 pb-12 lg:py-0" dir={currentDir}>

      {/* الحاوية العريضة لملء الجوانب برقي */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* تقسيم الهيرو: 6 أعمدة للنص، و 6 أعمدة لمحاكي تجربة المستخدم */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* الجانب النصي: التيبوغرافي ومحتوى الخدمة مع تحسين التباعد في الموبايل والديسكتوب */}
          <motion.div
            initial="hidden"
            animate="visible"
            className={`lg:col-span-6 flex flex-col justify-center space-y-6 text-center items-center ${currentDir === "rtl" ? "lg:text-right lg:items-start" : "lg:text-left lg:items-start"
              }`}
          >
            <div className={`flex flex-col items-center ${currentDir === "rtl" ? "lg:items-start" : "lg:items-start"}`}>
              {/* الـ Badge اللطيف المتناسق مع الهوية - تحكم منفصل بحجم الخط الإنجليزي */}
              <motion.div
                variants={fadeIn}
                className={`inline-flex items-center gap-2 px-3 py-1.5 border border-white/[0.15] bg-white/[0.03] rounded-full font-semibold tracking-[0.15em] text-white/90 uppercase mb-6 ${currentDir === "rtl" ? "text-[10px] sm:text-xs" : "text-[9px] sm:text-[11px]"
                  }`}
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>{t("badge")}</span>
              </motion.div>

              {/* العنوان الرئيسي المصمم بدقة فائقة - تحكم منفصل تماماً بحجم الخط الإنجليزي (تم تصغير أبعاد الـ LTR برفق) */}
              <motion.h1
                variants={fadeIn}
                className={`font-black text-white leading-[1.2] tracking-tight mb-4 sm:mb-6 px-2 lg:px-0 ${currentDir === "rtl"
                    ? "text-2xl sm:text-4xl lg:text-5xl"
                    : "text-xl sm:text-3xl lg:text-4xl"
                  }`}
                dangerouslySetInnerHTML={{ __html: t.raw("title") }}
              />

              {/* الشرح التوضيحي المنسق لخدمة الـ UI/UX - تحكم منفصل تماماً بحجم خط الوصف الإنجليزي */}
              <motion.p
                variants={fadeIn}
                className={`text-white/80 font-medium leading-[1.6] sm:leading-[1.8] max-w-xl mx-auto lg:mx-0 px-2 lg:px-0 ${currentDir === "rtl"
                    ? "text-xs sm:text-sm md:text-base"
                    : "text-[11px] sm:text-xs md:text-sm"
                  }`}
                dangerouslySetInnerHTML={{ __html: t.raw("description") }}
              />
            </div>

            {/* زر اتخاذ الإجراء التفاعلي المتألق - بعد ضبط وعكس الهوفر بالكامل بناءً على طلبك */}
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className={`w-full sm:w-fit pt-2 flex justify-center ${currentDir === "rtl" ? "lg:justify-start" : "lg:justify-start"
                }`}
            >
              <Link
                href="/contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black hover:bg-blue-600 hover:text-white font-bold rounded-full transition-all duration-300 shadow-md group ${currentDir === "rtl"
                    ? "text-xs sm:text-sm md:text-base"
                    : "text-[11px] sm:text-xs md:text-sm"
                  }`}
              >
                <span>{t("ctaText")}</span>

                {/* الدائرة بتتحول لأبيض كامل في الهوفر، والسهم جواها بيتحول لأزرق */}
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600 flex items-center justify-center transition-all duration-300 shrink-0 group-hover:scale-105">
                  <svg
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-300 ${currentDir === "rtl" ? "group-hover:-translate-x-0.5" : "rotate-180 group-hover:translate-x-0.5"
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

          {/* الجانب الأيسر: محاكي تصميم واجهات تجربة المستخدم التفاعلي - يختفي في الموبايل */}
          <div className="hidden lg:col-span-6 lg:flex items-center justify-center relative min-h-[450px] w-full overflow-visible">

            {/* توهج خفي عائم في الخلفية */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-blue-600/[0.08] rounded-full blur-[110px] pointer-events-none" />

            {/* اللوحة الرئيسية للمحاكي بالنمط الزجاجي البريميوم */}
            <div className="w-[400px] h-[300px] rounded-3xl bg-white/[0.03] backdrop-blur-[14px] border border-white/20 p-6 shadow-2xl relative flex flex-col justify-between overflow-hidden">

              {/* شريط التحكم البصري العلوي */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/50" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <span className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="font-mono text-[10px] text-white/40 select-none">{t("figmaFileName")}</span>
              </div>

              {/* عناصر تجربة المستخدم المستهدفة (التفاعل البصري) */}
              <div className="grid grid-cols-2 gap-4 my-auto">
                {/* العنصر الأول: واجهة سلكية (Wireframe) */}
                <div className="border border-white/10 border-dashed rounded-xl p-4 flex flex-col gap-2 bg-white/[0.01]">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="w-2/3 h-2 bg-white/20 rounded-full" />
                  <div className="w-1/2 h-1.5 bg-white/10 rounded-full" />
                </div>

                {/* العنصر الثاني: واجهة مستخدم منتهية وسلسة (High-Fidelity) */}
                <div className="border border-blue-600/30 rounded-xl p-4 flex flex-col gap-2 bg-blue-600/[0.04] shadow-[0_0_15px_rgba(37,99,235,0.1)] relative">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="w-2/3 h-2 bg-blue-500 rounded-full" />
                  <div className="w-1/2 h-1.5 bg-blue-400/50 rounded-full" />
                </div>
              </div>

              {/* شريط الإشعارات والتحميل السفلي */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[11px] text-white/40">
                <span>{t("liveEdit")}</span>
                <span className="text-blue-500 font-semibold">{t("activeNow")}</span>
              </div>

              {/* مؤشر الماوس الوهمي التفاعلي */}
              <motion.div
                variants={cursorAnimation}
                animate="animate"
                className="absolute z-30 pointer-events-none"
                style={{ top: "45%", left: "55%" }}
              >
                <svg className="w-6 h-6 text-blue-500 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 3V17L9.5 12.5H16.5L4.5 3Z" />
                </svg>
              </motion.div>

            </div>

          </div>

          {/* نهاية السيرفر ستاك الهيكلي */}
        </div>

      </div>
    </div>
  );
}