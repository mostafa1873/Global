"use client";

import { motion } from "framer-motion";

export default function BrandingCyberDashboard() {
  const panelVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const as const }
    }
  };

  return (
    <section className="relative w-full py-10 px-4 sm:px-6 md:px-12 select-none z-10 overflow-hidden" dir="rtl">

      {/* شبكة ضوئية تفاعلية دقيقة جداً في سنتر السكشن */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] bg-nexus-blue/[0.02] blur-[130px] rounded-full pointer-events-none z-0 transform-gpu" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col space-y-8 md:space-y-12">

        {/* اللوحة الأولى: لوحة المفهوم والنبذة (Concept Slate) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={panelVariants}
          className="group relative w-full border border-white/[0.06] bg-white/[0.01] hover:border-nexus-blue/30 hover:bg-nexus-blue/[0.01] rounded-2xl p-6 sm:p-10 transition-all duration-500 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-center lg:items-start text-center lg:text-right"
        >
          {/* تفاصيل تقنية (زوايا الـ UI الفخمة) */}
          <div className="absolute top-0 right-0 w-3 h-[1px] bg-white/20 group-hover:bg-nexus-blue/60 transition-colors" />
          <div className="absolute top-0 right-0 h-3 w-[1px] bg-white/20 group-hover:bg-nexus-blue/60 transition-colors" />
          <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-white/10 group-hover:bg-nexus-blue/40 transition-colors" />
          <div className="absolute bottom-0 left-0 h-3 w-[1px] bg-white/10 group-hover:bg-nexus-blue/40 transition-colors" />

          {/* عمود العنوان الجانبي */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-3 shrink-0">
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-white uppercase tracking-widest bg-nexus-blue/5 border border-nexus-blue/10 px-2.5 py-1 rounded-md">
              <span>SYS.DATA  01</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-600 tracking-tight">
              نبذة عن الخدمة
            </h2>
          </div>

          {/* عمود البيانات النصية (موزعة كتدفق بيانات رقمي مريح وليس كمقال) */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start space-y-6">
            <p className="text-white text-base sm:text-lg md:text-xl font-light leading-relaxed select-text break-words">
              نقوم بتطوير هوية بصرية تساعد الشركة على الظهور بصورة أكثر وضوحًا وثقة أمام عملائها، سواء من خلال الشعار، الألوان، الخطوط، عناصر التصميم، أو طريقة تطبيق الهوية على المنصات المختلفة.
            </p>
            {/* خط واجهة مستخدم تكنولوجي رفيع */}
            <div className="w-full h-[1px] bg-gradient-to-l from-transparent via-white/10 to-transparent lg:to-white/10" />
            <p className="text-white/90 text-xs sm:text-sm md:text-base font-light leading-relaxed select-text break-words">
              الهدف من الخدمة هو بناء شكل بصري متكامل يعبر عن طبيعة الشركة، يميزها عن المنافسين، ويساعدها على تقديم نفسها بشكل احترافي في كل نقطة تواصل مع الجمهور
            </p>
          </div>
        </motion.div>

        {/* علامة تقاطع هندسية تفصل بين اللوحين في الديسكتوب وتتوسط في الموبايل */}
        <div className="w-full flex justify-center px-6">
          <span className="text-white font-mono text-xs select-none tracking-widest group-hover:text-nexus-blue/30 transition-colors">
            [ + INTERACTIVE INTERFACE + ]
          </span>
        </div>

      </div>

      <div className="w-full h-[1px] bg-white/[0.04] mt-20 md:mt-32" />
    </section>
  );
}