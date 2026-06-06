"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function GlobalNexusMobileServicePage() {
  const t = useTranslations("MobileService.Hero");
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

  // حركات تطفو بسرعات مختلفة للشاشات المتداخلة لتعطي عمقاً بصرياً (Parallax effect)
  const floatCard1 = {
    animate: {
      y: [0, -12, 0],
      x: [0, currentDir === "rtl" ? 10 : -10, 0],
      transition: { duration: 5, ease: "easeInOut" as const, repeat: Infinity }
    }
  };

  const floatCard2 = {
    animate: {
      y: [0, 8, 0],
      x: [0, currentDir === "rtl" ? -5 : 5, 0],
      transition: { duration: 6, ease: "easeInOut" as const, repeat: Infinity }
    }
  };

  const floatCard3 = {
    animate: {
      y: [0, -8, 0],
      x: [0, currentDir === "rtl" ? 15 : -15, 0],
      transition: { duration: 4.5, ease: "easeInOut" as const, repeat: Infinity }
    }
  };

  return (
    <div className="w-full text-white h-auto lg:min-h-screen bg-transparent flex items-center justify-center pt-32 pb-12 lg:py-0" dir={currentDir}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* الـ Grid بتوزيع هيرو عصري مبتكر */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* الجانب النصي */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-center space-y-6 text-center lg:text-start items-center lg:items-start"
          >
            <div>
              {/* التعديل 1: ضبط وتقفيل الـ Badge بالملي (حجم خط متناسق وبادينج دقيق وعزل العرض) */}
              <motion.div
                variants={fadeIn}
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/[0.15] bg-white/[0.03] rounded-full text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-white/90 uppercase mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse shrink-0" />
                <span className="leading-none">{t("badge")}</span>
              </motion.div>

              {/* العنوان الصريح القوي */}
              <motion.h1
                variants={fadeIn}
                className={`font-bold text-white leading-[1.3] tracking-tight mb-6 ${currentDir === "rtl"
                  ? "text-3xl sm:text-4xl lg:text-5xl"
                  : "text-2xl sm:text-3xl lg:text-4xl"
                  }`}
                dangerouslySetInnerHTML={{ __html: t.raw("title") }}
              />

              {/* الفقرة النصية بتناسقها المريح */}
              <motion.p
                variants={fadeIn}
                className={`text-white/80 font-medium leading-[1.8] max-w-2xl mx-auto lg:mx-0 ${currentDir === "rtl" ? "text-sm md:text-base" : "text-xs md:text-sm"
                  }`}
                dangerouslySetInnerHTML={{ __html: t.raw("description") }}
              />
            </div>

            {/* التعديل 2: تصغير وضغط زر اتخاذ الإجراء في وضع الموبايل بدقة ذكية تمنع التمطيط والفرش */}
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-fit pt-2 flex justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className={`group flex items-center justify-center bg-white text-black hover:bg-blue-600 hover:text-white font-bold rounded-full transition-all duration-300 shadow-lg ${currentDir === "rtl"
                  ? "text-sm sm:text-base gap-3 sm:gap-4 px-6 py-3 sm:px-8 sm:py-4 w-auto" // تحويل العرض لـ auto في الموبايل العربي ليكون منكمشاً وأنيقاً
                  : "text-xs sm:text-sm gap-2.5 sm:gap-4 px-5 py-2.5 sm:px-6 sm:py-3.5 w-auto" // تخسيس إضافي للإنجليزي لمنع تمدد الحروف اللاتينية
                  }`}
              >
                <span>{t("ctaText")}</span>
                {/* تعديل الهوفر: الخلفية تصبح بيضاء والسهم بالداخل أزرق عند تمرير الماوس */}
                <span className={`rounded-full bg-blue-600 text-white flex items-center justify-center transition-all duration-300 shrink-0 group-hover:bg-white group-hover:text-blue-600 ${currentDir === "rtl"
                  ? "w-7 h-7 sm:w-8 sm:h-8 group-hover:-translate-x-1"
                  : "w-6 h-6 sm:w-8 sm:h-8 rotate-180 group-hover:translate-x-1"
                  }`}>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* الجانب الأيسر: "The Layered App Stack" */}
          <div className="hidden lg:flex lg:col-span-6 items-center justify-center relative min-h-[450px] sm:min-h-[550px] w-full overflow-visible">

            {/* الإضاءة الخلفية للـ Ambient Glow بلون الهوية الأزرق */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* الكارت الخلفي المتداخل 1 (المحادثات والإشعارات) */}
            <motion.div
              variants={floatCard1}
              animate="animate"
              className={`absolute w-[180px] sm:w-[230px] aspect-[4/5] rounded-3xl bg-white/[0.03] backdrop-blur-[10px] border border-white/10 p-4 sm:p-5 shadow-2xl top-1/2 -translate-y-[60%] z-10 flex flex-col justify-between ${currentDir === "rtl" ? "left-1/2 -translate-x-[95%]" : "right-1/2 translate-x-[95%]"
                }`}
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-3" dir={currentDir}>
                <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-600/30 flex items-center justify-center text-blue-500 font-bold text-xs shrink-0">GN</div>
                <div className="space-y-1 w-full">
                  <div className="w-20 h-2 bg-white/25 rounded-full" />
                  <div className="w-12 h-1.5 bg-white/10 rounded-full" />
                </div>
              </div>
              <div className="space-y-3 my-auto flex flex-col" dir={currentDir}>
                <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                  <div className="w-full h-2 bg-white/25 rounded-full mb-1.5" />
                  <div className="w-4/5 h-1.5 bg-white/10 rounded-full" />
                </div>
                <div className={`bg-blue-600/10 p-2 rounded-xl border border-blue-600/10 w-fit ${currentDir === "rtl" ? "self-end mr-4" : "self-start ml-4"}`}>
                  <div className="w-16 h-2 bg-blue-400/50 rounded-full mb-1" />
                  <div className="w-10 h-1.5 bg-blue-400/30 rounded-full" />
                </div>
              </div>
              <div className="w-full h-8 rounded-xl bg-white/5 border border-white/5 flex items-center px-2">
                <div className="w-full h-1.5 bg-white/20 rounded-full" />
              </div>
            </motion.div>

            {/* الكارت الأوسط المتداخل 2 (الإحصائيات والأداء البصري) */}
            <motion.div
              variants={floatCard2}
              animate="animate"
              className="absolute w-[190px] sm:w-[240px] aspect-[4/5] rounded-3xl bg-white/[0.06] backdrop-blur-[12px] border border-white/20 p-5 sm:p-6 shadow-2xl z-20 flex flex-col justify-between left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              dir={currentDir}
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-white/50">{t("cardSystemPerformance")}</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
              </div>

              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto flex items-center justify-center my-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="40" className="stroke-white/10 fill-none" strokeWidth="8" />
                  <circle cx="50%" cy="50%" r="40" className="stroke-blue-600 fill-none" strokeWidth="8" strokeDasharray="251" strokeDashoffset="62" strokeLinecap="round" />
                </svg>
                <div className="absolute text-center">
                  <span className="text-lg sm:text-xl font-bold tracking-tight">75%</span>
                  <span className="block text-[8px] uppercase tracking-wider text-white/40">{t("cardVeryFast")}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] text-white/60">
                  <span>{t("cardUsers")}</span>
                  <span className="text-blue-400 font-bold">+12.4k</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-blue-600 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* الكارت الأمامي المتداخل 3 (الأمان والنجاح والعمليات) */}
            <motion.div
              variants={floatCard3}
              animate="animate"
              className={`absolute w-[160px] sm:w-[200px] aspect-[4/5] rounded-3xl bg-white/[0.02] backdrop-blur-[8px] border border-white/10 p-4 sm:p-5 shadow-2xl top-1/2 -translate-y-[40%] z-30 flex flex-col justify-between ${currentDir === "rtl" ? "left-1/2 -translate-x-[-5%]" : "right-1/2 translate-x-[5%]"
                }`}
              dir={currentDir}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] uppercase font-bold text-blue-500 tracking-wider">{t("cardSmoothSecure")}</span>
                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              <div className="flex flex-col items-center justify-center py-3 text-center">
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-white">{t("cardProcessCompleted")}</span>
                <span className="text-[8px] text-white/40 mt-1">{t("cardSecurityStandards")}</span>
              </div>

              <div className="w-full h-7 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <div className="w-12 h-1 bg-green-400/60 rounded-full" />
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
}