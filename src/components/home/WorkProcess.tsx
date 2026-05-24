"use client";

import { motion } from "framer-motion";

const workflowSteps = [
  {
    phase: "01",
    enTitle: "Discovery",
    arTitle: "فهم النشاط التجاري، التحديات الحالية، والأهداف المطلوبة.",
  },
  {
    phase: "02",
    enTitle: "Strategy",
    arTitle: "تحديد الحلول الرقمية المناسبة وخطة التنفيذ.",
  },
  {
    phase: "03",
    enTitle: "Design & Development",
    arTitle: "تصميم وتطوير الأنظمة والحلول الرقمية المطلوبة.",
  },
  {
    phase: "04",
    enTitle: "Launch",
    arTitle: "إطلاق المشروع وتجهيز البيئة الرقمية للتشغيل.",
  },
  {
    phase: "05",
    enTitle: "Optimization",
    arTitle: "المتابعة والتحسين المستمر بناءً على الأداء واحتياجات النمو.",
  }
];

export default function WorkProcess() {
  // أنيميشن ناعم جداً بـ transform-gpu لظهور المراحل بالتوالي دون تأثير على السكرول
  const stepVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section className="relative w-full py-10 border-t border-white/5 z-10 select-none" dir="rtl">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* هيدر السيكشن الفخم */}
        <div className="flex flex-col items-center md:items-start text-center md:text-right mb-20 md:mb-28 space-y-5 max-w-3xl transform-gpu">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
            <span className="text-white/60 font-mono tracking-widest text-xs uppercase pt-0.5">
              منهجية العمل
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight select-text">
            مراحل العمل <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              التي نقود بها مشروعك
            </span>
          </h2>
        </div>

        {/* مسار المراحل المتطور:
            - في الموبايل: ترتيب رأسي متناسق ومتسنتر تماماً مع خط فاصل يمين أو منتصف.
            - في الديسكتوب: مسار أفقي ممتد وموزع هندسياً بدون فراغات عشوائية.
        */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-6 w-full before:absolute before:right-1/2 md:before:right-0 md:before:left-0 before:top-0 before:bottom-0 md:before:bottom-auto md:before:h-[1px] before:w-[1px] md:before:w-full before:bg-white/10 before:pointer-events-none">
          
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.phase}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={stepVariant}
              className="group relative flex-1 flex flex-col items-center md:items-start text-center md:text-right pt-8 md:pt-10 md:pl-6 transform-gpu"
            >
              {/* العقدة أو النقطة الهندسية المضيئة على الخط الفاصل */}
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 md:right-0 md:translate-x-0 w-2.5 h-2.5 rounded-full border border-white/30 bg-[#020617] group-hover:border-white group-hover:bg-white transition-all duration-300 z-20" />
              
              {/* رقم المرحلة الأنيق */}
              <span className="font-mono text-xs text-white/20 tracking-widest uppercase mb-2 group-hover:text-white/40 transition-colors duration-300">
                PHASE {step.phase}
              </span>

              {/* العنوان الإنجليزي للمرحلة */}
              <h3 className="font-mono text-lg md:text-xl font-bold text-white/40 group-hover:text-white transition-colors duration-300 mb-4 select-text">
                {step.enTitle}
              </h3>

              {/* الشرح العربي الأصلي كامل كما هو بالملي */}
              <p className="text-white/50 text-sm md:text-base font-light leading-relaxed select-text max-w-xs md:max-w-none">
                {step.arTitle}
              </p>
              
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}