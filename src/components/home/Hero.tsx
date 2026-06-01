"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const }
    })
  };

  return (
    <section
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden z-10 select-none"
      dir="rtl"
    >

      {/* إضاءة غامرة ناعمة جداً في العمق (شفافة وبدون أي ألوان خلفية صلبة) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nexus-blue/10 blur-[140px] rounded-full pointer-events-none select-none z-0" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-24 md:pt-28 pb-8 flex flex-col items-center text-center justify-center space-y-6 md:space-y-8 h-full max-h-screen">

        {/* 1. بادج علوي رايق ونظيف جداً بستايل تيكنيكال */}
        <motion.div
          variants={fadeInVariant} initial="hidden" animate="visible" custom={0.1}
          className="inline-flex items-center gap-2.5 border border-white/[0.08] bg-white/[0.02] backdrop-blur-md px-4 py-2 rounded-full shrink-0"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexus-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-nexus-blue"></span>
          </span>
          <span className="text-white/80 font-mono tracking-[0.2em] text-[10px] md:text-xs uppercase">
            GLOBAL NEXUS • CREATIVE SYSTEM
          </span>
        </motion.div>

        {/* 2. العنوان الرئيسي العملاق - تم ضبط الحجم ليكون متناسق ومثالي مع أبعاد الشاشات بدون تضخم */}
        <motion.h1
          variants={fadeInVariant} initial="hidden" animate="visible" custom={0.2}
          className="text-xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.3] md:leading-[1.15] tracking-tight max-w-5xl select-text"
        >
          نبني أنظمة النمو <br />
          <span className="bg-clip-text text-transparent text-white via-white/90">
            الرقمي
          </span>{" "}
          للشركات الحديثة
        </motion.h1>

        {/* 3. العبارة الإنجليزية مدمجة بشكل نظيف كفاصل بصري راقي */}
        <motion.div
          variants={fadeInVariant} initial="hidden" animate="visible" custom={0.3}
          dir="ltr"
          className="flex items-center justify-center gap-3 w-full shrink-0 flex-wrap px-4"
        >
          <div className="h-[1px] w-8 md:w-12 bg-white/20 hidden sm:block" />
          <p className="text-sm md:text-lg font-medium tracking-tight text-white/60 text-center">
            <span className="italic font-serif font-normal text-white">Where the</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-bold uppercase text-xs md:text-sm">
              real value is created
            </span>
          </p>
          <div className="h-[1px] w-8 md:w-12 bg-white/20 hidden sm:block" />
        </motion.div>
        {/* 4. الوصف والفقرة الشارحة منسابة ومريحة جداً للقراءة */}
        <motion.p
          variants={fadeInVariant} initial="hidden" animate="visible" custom={0.4}
          className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto select-text"
        >
          نساعد الشركات على تطوير حضورها الرقمي وبناء أنظمة رقمية أكثر وضوحًا وكفاءة، من خلال حلول تجمع بين التسويق، الهوية البصرية، المواقع الإلكترونية، وتجربة المستخدم.        </motion.p>

        {/* 5. النص الداعم الصغير */}
        <motion.div
          variants={fadeInVariant} initial="hidden" animate="visible" custom={0.5}
          className="text-white/40 text-xs md:text-sm font-normal max-w-xl border-t border-white/[0.06] pt-4 w-full select-text"
        >
          في Global Nexus نعمل على تطوير حلول رقمية تساعد الشركات على تحسين تجربة عملائها، تنظيم حضورها الرقمي، وبناء بيئة أكثر احترافية تدعم النمو والاستمرارية.        </motion.div>

        {/* 6. قسم الأزرار الرسمية عالية التباين والفخامة */}
        <motion.div
          variants={fadeInVariant} initial="hidden" animate="visible" custom={0.6}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2 shrink-0"
        >
          {/* زر الأكشن الرئيسي */}
          <button className="w-full sm:w-auto py-3.5 px-8 flex items-center justify-center bg-white text-black font-bold text-sm uppercase tracking-wide rounded-xl hover:bg-nexus-blue hover:text-white transition-all duration-300 shadow-xl active:scale-[0.98]">
            احجز مكالمة استراتيجية
          </button>

          {/* زر استكشف خدماتنا */}
          <button className="group flex items-center justify-center gap-3 w-full sm:w-auto py-3.5 px-8 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300">
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