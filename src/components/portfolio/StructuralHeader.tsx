"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function PortfolioHero() {
  const t = useTranslations("PortfolioPage.Hero");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    // تم تحويل الـ Padding العمودي ليكون مرناً ومريحاً على الموبايل لمنع تصادم النصوص مع الأزرار العائمة، ويعود لطبيعته تماماً من أول شاشات sm
    <section className="relative w-full min-h-[100dvh] flex items-center pt-27 pb-24 sm:pt-28 sm:pb-32 md:py-20 bg-transparent text-white overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      
      {/* إضاءات نيون تقنية مدمجة في العمق بلون blue-600 الصريح */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.06] blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/[0.03] blur-[130px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* الجانب الأيمن: التيبوغرافيا والنصوص متمركزه بالمللي على الموبايل ويمين على الديسكتوب */}
          <div className={`lg:col-span-6 text-center space-y-5 ${isAr ? "lg:text-right" : "lg:text-left"}`}>
            
            {/* بادج علوي مودرن بلون blue-600 محمي من الالتفاف */}
            <motion.div
              initial={{ opacity: 0, x: isAr ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex text-white items-center gap-2 px-3 py-1 border border-white/[0.2] bg-white/[0.03] rounded-4xl text-[11px] tracking-wider uppercase text-blue-600 mx-auto lg:mx-0 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping shrink-0" />
              {t("badge")}
            </motion.div>

            {/* العنوان الرئيسي: ضبطنا leading الإنجليزي في الموبايل لمنع اختناق الأسطر وتداخل الحروف */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-b from-white to-white/85 bg-clip-text text-transparent ${
                isAr ? "leading-[1.35]" : "leading-[1.15] md:leading-[1]"
              }`}
            >
              {t("titleLine1")} <br />
              <span className="text-blue-600 block">
                {t("titleHighlight")}
              </span>
            </motion.h1>

            {/* تدفق النصوص: توزيع المساحات ديناميكياً لتفادي مظهر الكتلة المصمتة المزعج */}
            <div className={`mx-auto lg:mx-0 ${isAr ? "space-y-3 max-w-2xl" : "space-y-4 max-w-lg pt-2"}`}>
              {/* النص الأول: ضبط الحجم ليبدأ من text-sm على الموبايل الصغير ليتنفس بوضوح ويصعد تدريجياً لـ md:text-lg */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className={`leading-relaxed text-white/90 ${
                  isAr ? "text-sm sm:text-base md:text-lg font-medium" : "text-[14px] sm:text-base font-normal tracking-wide"
                }`}
              >
                {t("paragraph1")}
              </motion.p>

              {/* النص الثاني: تقليل الشدة البصرية للإنجليزي (text-white/65) لخلق تدرج مريح للعين مع أحجام متناسقة للموبايل */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className={`text-center leading-relaxed ${
                  isAr 
                    ? "text-xs sm:text-sm md:text-base text-white/85 font-light lg:text-right lg:border-r-2 lg:border-blue-600/30 lg:pr-5" 
                    : "text-[12px] sm:text-sm text-white/65 font-light lg:text-left lg:border-l-2 lg:border-blue-600/30 lg:pl-5 tracking-wide"
                }`}
              >
                {t("paragraph2")}
              </motion.p>
            </div>

          </div>

          {/* الجانب الأيسر: المنصة الرقمية التفاعلية */}
          {/* مخفي تماماً hidden على الموبايل وبيشتغل flex من أول md بكامل أناقته كما هو */}
          <div className="hidden md:flex lg:col-span-6 relative justify-center items-center min-h-[380px] sm:min-h-[450px] mt-8 lg:mt-0 overflow-visible w-full">
            
            {/* حلقة هندسية في الخلفية */}
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-blue-600/[0.01] border border-white/[0.02] animate-[spin_80s_linear_infinite]" />

            {/* كارت لوحة التحكم / المتصفح الرئيسي العائم */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10, rotate: isAr ? -0.5 : 0.5, transition: { duration: 0.3 } }}
              className={`absolute w-[260px] sm:w-[350px] h-[170px] sm:h-[220px] bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-2xl backdrop-blur-xl p-4 sm:p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] z-20 transform -translate-y-6 select-none ${
                isAr ? "-translate-x-2 sm:-translate-x-4" : "translate-x-2 sm:translate-x-4"
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <span className="text-[9px] font-mono text-white/30 tracking-widest">NEXUS_CORE_UI</span>
              </div>
              <div className="w-full h-20 sm:h-24 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent rounded-xl border border-white/5 relative overflow-hidden">
                <div className={`absolute bottom-3 w-1/2 h-2 bg-white/10 rounded ${isAr ? "right-3" : "left-3"}`} />
                <div className={`absolute bottom-6 w-3/4 h-1 bg-white/5 rounded ${isAr ? "right-3" : "left-3"}`} />
                <div className={`absolute top-3 w-7 h-7 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center ${isAr ? "left-3" : "right-3"}`}>
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                </div>
              </div>
            </motion.div>

            {/* كارت واجهة الاستوديو الخلفي المائل */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ x: isAr ? 35 : -35, y: 25, rotate: isAr ? 1 : -1, transition: { duration: 0.3 } }}
              className={`absolute w-[210px] sm:w-[310px] h-[150px] sm:h-[200px] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 rounded-2xl backdrop-blur-md p-4 shadow-xl z-10 select-none transform translate-y-8 sm:translate-y-10 ${
                isAr ? "translate-x-8 sm:translate-x-10" : "-translate-x-8 sm:-translate-x-10"
              }`}
            >
              <div className="w-full h-full bg-gradient-to-bl from-blue-600/5 via-transparent to-transparent rounded-xl border border-white/5 flex items-center justify-center">
                <div className="w-12 h-1 bg-white/10 rounded-full" />
              </div>
            </motion.div>

            {/* كارت الموبايل الأمامي الفخم بلون وهوية blue-600 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ y: 48, transition: { duration: 0.3 } }}
              className={`absolute w-[95px] sm:w-[135px] h-[180px] sm:h-[250px] bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/15 rounded-[20px] sm:rounded-[24px] backdrop-blur-2xl p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-30 select-none transform translate-y-10 sm:translate-y-14 ${
                isAr ? "-translate-x-16 sm:-translate-x-24" : "translate-x-16 sm:translate-x-24"
              }`}
            >
              <div className="w-full h-full bg-slate-950/80 rounded-[16px] sm:rounded-[18px] p-2.5 sm:p-3 border border-white/5 flex flex-col justify-between">
                <div className="w-4 h-1 bg-white/20 rounded-full mx-auto mb-1" />
                <div className="space-y-2 flex-1 pt-3">
                  <div className="w-full h-5 sm:h-6 bg-blue-600/20 rounded-md border border-blue-600/10" />
                  <div className="w-2/3 h-1 bg-white/10 rounded" />
                  <div className="w-1/2 h-1 bg-white/5 rounded" />
                </div>
                <div className="w-full h-4 bg-white/5 rounded-md border border-white/5" />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}