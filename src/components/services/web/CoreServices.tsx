"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Puzzle, ScanText, Target, ChevronLeft, ChevronRight, Orbit } from "lucide-react";

const coreData = [
  {
    icon: <Zap size={20} />,
    title: "أداء صاروخي",
    problem: "العميل مابيحبش يستنى.",
    solution: "بنستخدم أحدث تكنولوجيات الـ Frontend عشان موقعك يفتح في لمح البصر.",
    tech: "Next.js 15 / Turbo"
  },
  {
    icon: <Puzzle size={20} />,
    title: "تصميم بيفهم العميل",
    problem: "مش بنرسم لوحة فنية وخلاص.",
    solution: "بنصمم رحلة كاملة للزائر جوه موقعك لحد ما يوصل لزرار 'اتصل بنا'.",
    tech: "UX Research / Figma"
  },
  {
    icon: <ScanText size={20} />,
    title: "موبايل أولاً",
    problem: "أكتر من 80% من الزيارات من الموبايل.",
    solution: "موقعك هيكون شيك ومظبوط على أي شاشة، من الموبايل لحد شاشات العرض.",
    tech: "Responsive Design"
  },
  {
    icon: <Target size={20} />,
    title: "SEO من أول يوم",
    problem: "مابنرميش الكود وخلاص.",
    solution: "بنبني هيكل الموقع تقنياً عشان محركات البحث تفهمه وتطلعك في الأول.",
    tech: "Search Console / Schema"
  },
];

export default function TechPipelineCore() {
  return (
    <section className="relative py-10 md:py-15 overflow-hidden transform-gpu border-t border-white/5" dir="rtl">
      
      {/* العنوان الجانبي الثابت (خلفية) - مخفي في الموبايل عشان الزحمة */}
      <div className="absolute top-10 right-10 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <h2 className="text-[15vw] font-black text-white leading-none">CORE</h2>
      </div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative">
        
        {/* Header رايق ومختصر - تعديل: سنتر في الموبايل */}
        <div className="mb-10 md:mb-20 text-center md:text-right">
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-blue-500 font-mono tracking-[0.4em] text-xs md:text-sm"
          >
            PROCESS 01
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-black text-white mt-4 leading-tight"
          >
            الهندسة وراء <span className="text-blue-600">النجاح</span>
          </motion.h2>
        </div>

        {/* الـ Pipeline (المسار التقني) */}
        <div className="relative">
          
          {/* الخط المركزي - مخفي في الموبايل عشان الكلام يبقى في النص براحته */}
          <div className="absolute right-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-blue-600/0 via-blue-600/50 to-blue-600/0 hidden md:block" />

          <div className="space-y-16 md:space-y-40">
            {coreData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                // تعديل: items-center في الموبايل عشان السنترة
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
              >
                
                {/* الدائرة المركزية (Node) - مخفية في الموبايل لعدم الزحمة */}
                <div className="absolute right-[calc(50%-10px)] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#020617] border-2 border-blue-600 z-20 shadow-[0_0_15px_rgba(37,99,235,0.5)] hidden md:block" />

                {/* الجانب الأول: العنوان والمشكلة (الظل) - تعديل: text-center في الموبايل */}
                <div className={`w-full md:w-1/2 text-center ${index % 2 === 0 ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'}`}>
                  <div className={`inline-flex items-center gap-3 text-blue-500 mb-3 md:mb-4 font-mono text-[10px] md:text-sm ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <span className="opacity-50">0{index + 1}</span>
                    <div className="w-6 md:w-8 h-px bg-blue-600/30" />
                    <span>{item.tech}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <div className="p-3 md:p-4 rounded-xl border border-white/5 bg-white/[0.02] inline-block">
                    <p className="text-neutral-500 text-xs md:text-sm italic">
                      <span className="text-red-900 ml-2">●</span> {item.problem}
                    </p>
                  </div>
                </div>

                {/* الجانب الثاني: الحل (الضوء) - تعديل: text-center في الموبايل */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-blue-500/10 bg-gradient-to-br from-blue-600/[0.05] to-transparent backdrop-blur-xl relative overflow-hidden group text-center md:text-right"
                  >
                    {/* أيقونة الحل العائمة */}
                    <div className="absolute -top-2 -left-2 opacity-5 text-white">
                      {item.icon}
                    </div>
                    
                    <div className="relative z-10">
                      {/* تعديل: justify-center في الموبايل للأيقونات */}
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-4 text-blue-400">
                        <ChevronLeft size={14} className="md:w-4 md:h-4" />
                        <span className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase">Smart Solution</span>
                      </div>
                      <p className="text-neutral-200 text-lg md:text-xl leading-relaxed font-light">
                        {item.solution}
                      </p>
                    </div>
                  </motion.div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Grid Pattern الخلفية */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20" 
        style={{ backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
      />
    </section>
  );
}