"use client";

import { motion } from "framer-motion";

export default function Vision() {
  const coreValues = ["الاستراتيجية", "التصميم", "التقنية"];

  return (
    <section className="relative w-full py-10 z-10 select-none overflow-hidden" dir="rtl">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* لوح الزجاج الرئيسي الفخم (Glassmorphism Panel) - تم ضبط الـ padding للموبايل */}
        <div className="relative w-full border border-white/10 rounded-3xl p-5 sm:p-8 md:p-16 lg:p-20 overflow-hidden transform-gpu group/canvas bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl shadow-2xl shadow-black/50">
          
          {/* لمحة الضوء أو الانعكاس الزجاجي العالي (Glass Highlight Top-Light) */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          {/* زوايا استوديو حادة ونحيفة على الأطراف تفتح وتضيء مع الـ Hover */}
          <div className="absolute top-0 right-0 w-8 h-[1px] bg-white/20 group-hover/canvas:bg-white/60 transition-colors duration-500" />
          <div className="absolute top-0 right-0 w-[1px] h-8 bg-white/20 group-hover/canvas:bg-white/60 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-white/20 group-hover/canvas:bg-white/60 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 w-[1px] h-8 bg-white/20 group-hover/canvas:bg-white/60 transition-colors duration-500" />

          {/* محاذاة الجريد الداخلي الفخم - تم ضبط الـ gap للموبايل */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start relative z-10">
            
            {/* الجزء الأيمن: العنوان الأصلي مفرود بفخامة */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-right space-y-4 sm:space-y-6">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
                <span className="text-white/60 font-mono tracking-widest text-xs uppercase pt-0.5">
                  الرؤية
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight select-text">
                نحو بيئة رقمية <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                  أكثر وضوحًا واستدامة
                </span>
              </h2>
            </div>

            {/* الجانب الأيسر: الفقرة والركائز ككتلة بصرية واحدة محترمة */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 sm:space-y-10 lg:pt-4">
              
              {/* النص الأصلي كامل وبحجم خط بريميوم جداً ومريح في السكرول */}
              <p className="text-lg md:text-2xl lg:text-3xl font-light text-white/60 leading-relaxed sm:leading-loose select-text text-center lg:text-right">
                نسعى إلى مساعدة الشركات على بناء أنظمة رقمية تدعم النمو طويل المدى من خلال حلول تجمع بين{" "}
                <span className="text-white font-medium underline underline-offset-8 decoration-white/20 hover:decoration-white transition-colors duration-300">الاستراتيجية</span>،{" "}
                <span className="text-white font-medium underline underline-offset-8 decoration-white/20 hover:decoration-white transition-colors duration-300">التصميم </span>
                <span className="text-white font-medium underline underline-offset-8 decoration-white/20 hover:decoration-white transition-colors duration-300"> ، والـتقنية</span>.
              </p>

              {/* الكبسولات الزجاجية التفاعلية للركائز الثلاثة - مرنة ومتناسقة على كل الشاشات */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
                {coreValues.map((value, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2 }}
                    className="px-5 py-2.5 sm:px-6 sm:py-3 border border-white/5 hover:border-white/20 bg-white/[0.02] backdrop-blur-md rounded-xl flex items-center gap-3 transition-all duration-300 group cursor-default transform-gpu shadow-sm"
                  >
                    <span className="font-mono text-xs text-white/30 group-hover:text-white/60 transition-colors duration-300">
                      0{idx + 1}
                    </span>
                    <span className="text-sm md:text-base font-medium text-white/50 group-hover:text-white transition-colors duration-300">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}