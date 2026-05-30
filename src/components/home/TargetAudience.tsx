"use client";

import { motion } from "framer-motion";

const sectors = [
  { id: "01", name: "الشركات الناشئة" },
  { id: "02", name: "الشركات الخدمية" },
  { id: "03", name: "العلامات التجارية الحديثة" },
  { id: "04", name: "الشركات التجارية" },
  { id: "05", name: "المشاريع التي تحتاج إلى تطوير بنيتها الرقمية" }
];

export default function TargetAudience() {
  return (
    <section className="relative w-full py-10 z-10 select-none overflow-hidden" dir="rtl">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* الهيدر الأصلي بتاعك كامل وبمحاذاة فخمة */}
        <div className="flex flex-col items-center md:items-start text-center md:text-right mb-20 md:mb-28 space-y-6 max-w-3xl transform-gpu">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
            <span className="text-white font-mono tracking-widest text-xs uppercase pt-0.5">
              لمن نقدم خدماتنا
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight select-text">
            حلول رقمية للشركات <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              التي تبحث عن نمو منظم
            </span>
          </h2>
          
          <p className="text-white/85 text-base md:text-lg lg:text-xl font-light leading-relaxed select-text pt-2">
            نعمل مع الشركات التي تسعى لتطوير حضورها الرقمي وتحسين أنظمتها التشغيلية وبناء تجربة أكثر احترافية لعملائها.
          </p>
        </div>

        {/* الماتريكس الهندسية: شفافة بالكامل، التوزيع محكوم بالملي */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-white/10 relative">
          
          {sectors.map((sector, index) => {
            // منطق التحكم في عرض الكروت لمنع أي مساحات فارغة (Anti-Gap Logic)
            const isLast = index === sectors.length - 1;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col justify-between p-8 md:p-12 min-h-[220px] md:min-h-[260px] transform-gpu border-b border-white/10 md:border-b-0
                  ${isLast ? "col-span-1 md:col-span-2 lg:col-span-4 border-b-0" : "lg:border-l lg:border-white/10"}
                  ${index === 1 ? "md:border-l-0 lg:border-l lg:border-white/10" : ""}
                  ${index === 3 ? "md:border-l-0 lg:border-l-0" : ""}
                `}
              >
                {/* تقاطعات الـ Crosshairs الهندسية (بديل الباكجراوند التقليدي) */}
                <div className="hidden lg:block absolute -top-1.5 -left-1.5 font-mono text-sm text-white/10 group-hover:text-white/50 transition-colors duration-300 pointer-events-none">
                  +
                </div>
                <div className="hidden lg:block absolute -bottom-2 -left-1.5 font-mono text-sm text-white/10 group-hover:text-white/50 transition-colors duration-300 pointer-events-none">
                  +
                </div>

                {/* رقم القطاع بتنسيق تكنولوجي بريميوم */}
                <div className="flex items-center justify-between w-full mb-6">
                  <span className="font-mono text-xs text-white/60 tracking-widest group-hover:text-white/60 transition-colors duration-300">
                     TARGET_{sector.id}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-white transition-colors duration-500" />
                </div>

                {/* اسم القطاع الأصلي كاملاً */}
                <div className="mt-auto">
                  <h3 className={`text-xl font-bold text-white/85 group-hover:text-white transition-all duration-300 select-text leading-snug
                    ${isLast ? "lg:text-3xl max-w-2xl" : "lg:text-2xl"}
                  `}>
                    {sector.name}
                  </h3>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}