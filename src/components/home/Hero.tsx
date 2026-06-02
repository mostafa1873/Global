"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const }
    })
  };

  return (
    // السيكشن مقفول ومستحيل يعمل سكرول
    <section
      className="relative h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden z-10 select-none bg-transparent"
      dir="rtl"
    >

      {/* إضاءة غامرة ناعمة جداً في العمق */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nexus-blue/10 blur-[130px] rounded-full pointer-events-none select-none z-0" />

      {/* التعديل هنا: رجعنا justify-center وظبطنا الـ pt والـ pb بالتساوي (pt-24 pb-20) لمنع الفراغ السفلي الميت */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-20 md:pb-12 flex flex-col items-center text-center justify-center gap-5 sm:gap-6 md:gap-8 h-full flex-1 max-h-[100dvh]">

        {/* 1. بادج علوي بستايل تيكنيكال */}
        <motion.div
          variants={fadeInVariant} initial="hidden" animate="visible" custom={0.1}
          className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.02] backdrop-blur-md px-3.5 py-1.5 rounded-full shrink-0"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexus-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-nexus-blue"></span>
          </span>
          <span className="text-white/80 font-mono tracking-[0.15em] text-[9px] md:text-xs uppercase">
            GLOBAL NEXUS • CREATIVE SYSTEM
          </span>
        </motion.div>

        {/* كونتير داخلي ملموم ومظبوط بالمللي للمسافات والنصوص */}
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full justify-center">
          
          {/* 2. العنوان الرئيسي */}
          <motion.h1
            variants={fadeInVariant} initial="hidden" animate="visible" custom={0.2}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.25] md:leading-[1.15] tracking-tight max-w-5xl select-text"
          >
            نبني أنظمة النمو <br />
            <span className="bg-clip-text text-transparent text-white via-white/90">
              الرقمي
            </span>{" "}
            للشركات الحديثة
          </motion.h1>

          {/* 3. العبارة الإنجليزية مدمجة بشكل نظيف */}
          <motion.div
            variants={fadeInVariant} initial="hidden" animate="visible" custom={0.3}
            dir="ltr"
            className="flex items-center justify-center gap-2 w-full shrink-0 flex-wrap px-4"
          >
            <div className="h-[1px] w-6 md:w-12 bg-white/20 hidden sm:block" />
            <p className="text-[12px] md:text-lg font-medium tracking-tight text-white/60 text-center">
              <span className="italic font-serif font-normal text-white">Where the</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-bold uppercase text-[11px] md:text-sm">
                real value is created
              </span>
            </p>
            <div className="h-[1px] w-6 md:w-12 bg-white/20 hidden sm:block" />
          </motion.div>

          {/* 4. الوصف والفقرة الشارحة */}
          <motion.p
            variants={fadeInVariant} initial="hidden" animate="visible" custom={0.4}
            className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto select-text px-2"
          >
            نساعد الشركات على تطوير حضورها الرقمي وبناء أنظمة رقمية أكثر وضوحًا وكفاءة، من خلال حلول تجمع بين التسويق، الهوية البصرية، المواقع الإلكترونية، وتجربة المستخدم.
          </motion.p>

          {/* 5. النص الداعم الصغير */}
          <motion.div
            variants={fadeInVariant} initial="hidden" animate="visible" custom={0.5}
            className="text-white/40 text-[11px] md:text-sm font-normal max-w-lg border-t border-white/[0.06] pt-3 w-full select-text hidden xs:block"
          >
            في Global Nexus نعمل على تطوير حلول رقمية تساعد الشركات على تحسين تجربة عملائها، تنظيم حضورها الرقمي، وبناء بيئة أكثر احترافية تدعم النمو والاستمرارية.
          </motion.div>
          
        </div>

        {/* 6. قسم الأزرار الرسمية - التعديل هنا: استخدام mt-2 للموبايل عشان يلم الفراغ اللي تحت النصوص ويخلي الشكل متناسق جداً */}
        <motion.div
          variants={fadeInVariant} initial="hidden" animate="visible" custom={0.6}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none sm:w-auto shrink-0 z-20 mt-2 md:mt-0"
        >
          {/* زر الأكشن الرئيسي */}
          <button className="w-full sm:w-auto py-3 md:py-3.5 px-6 md:px-8 flex items-center justify-center bg-white text-black font-bold text-sm uppercase tracking-wide rounded-xl hover:bg-nexus-blue hover:text-white transition-all duration-300 shadow-xl active:scale-[0.98]">
            احجز مكالمة استراتيجية
          </button>

          {/* زر استكشف خدماتنا */}
          <button className="group flex items-center justify-center gap-3 w-full sm:w-auto py-3 md:py-3.5 px-6 md:px-8 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300">
            <span className="text-white font-semibold text-sm">استكشف خدماتنا</span>
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white rotate-180 transform group-hover:-translate-x-1 transition-transform duration-300">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}