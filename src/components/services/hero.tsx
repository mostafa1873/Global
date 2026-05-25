"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  const fadeVariant = {
    hidden: { 
      opacity: 0, 
      y: 25,
      filter: "blur(12px)" 
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        delay: custom * 0.15, 
        ease: [0.16, 1, 0.3, 1] as const 
      }
    })
  };

  return (
    // السيكشن شفاف بالكامل ومحمي بـ z-index ومسافات متناسقة
    <section className="relative w-full pt-36 md:pt-52 pb-24 border-b border-white/5 z-10 select-none bg-transparent" dir="rtl">
      
      {/* ─── نسيج الشبكة الرقمية الفخم (لا يغير لون الخلفية الشفافة) ─── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* الحاوية الرئيسية الممتدة والمتمركفة بدقة */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto transform-gpu">
          
          {/* البادج بنفس التنسيق الموحد في الموقع مع تأثير زجاجي خفيف */}
          <motion.div 
            custom={0} 
            initial="hidden" 
            animate="visible" 
            variants={fadeVariant}
            className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
            <span className="text-white/60 font-mono tracking-widest text-xs uppercase pt-0.5">
              من نحن
            </span>
          </motion.div>
          
          {/* العنوان الرئيسي بنفس الأوزان وبأعلى دقة وضوح ونعومة في الـ Gradient */}
          <motion.h1 
            custom={1} 
            initial="hidden" 
            animate="visible" 
            variants={fadeVariant}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15] mb-8 select-text"
          >
            حلول رقمية تساعد الشركات على النمو بشكل أكثر <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 filter drop-shadow-sm">
              وضوحًا وكفاءة
            </span>
          </motion.h1>

          {/* النص الوصفي بتوزيع مسافات وتباين ألوان أعلى فخامة */}
          <motion.p 
            custom={2} 
            initial="hidden" 
            animate="visible" 
            variants={fadeVariant}
            className="text-white/50 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl select-text mx-auto tracking-wide"
          >
            نقدم خدمات تجمع بين الاستراتيجية والتنفيذ لمساعدة الشركات على تطوير حضورها الرقمي وتحسين تجربة العملاء وبناء أنظمة تدعم الاستمرارية.
          </motion.p>

        </div>
      </div>
    </section>
  );
}