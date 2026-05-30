"use client";

import { motion } from "framer-motion";

const sectors = [
  { id: "01", name: "الشركات الخدمية" },
  { id: "02", name: "الشركات التجارية" },
  { id: "03", name: "الشركات الناشئة" },
  { id: "04", name: "العيادات والمراكز" },
  { id: "05", name: "المصانع وشركات التصدير" },
  { id: "06", name: "البراندات المحلية" },
  { id: "07", name: "الشركات التي تحتاج إلى تطوير بنيتها الرقمية" }
];

export default function TargetAudience() {
  return (
    <section className="relative w-full py-10 z-10 select-none border-t border-white/5 overflow-hidden" dir="rtl">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center">

        {/* الهيدر في المنتصف تماماً ليتناسب مع التوزيع الحر */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6 max-w-3xl transform-gpu">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
            <span className="text-white font-mono tracking-widest text-xs uppercase pt-0.5">
              لمن نقدم خدماتنا
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight select-text">
            حلول رقمية للشركات <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              التي تبحث عن نمو منظم
            </span>
          </h2>

          <p className="text-white/70 text-lg font-light leading-relaxed select-text pt-2 max-w-2xl">
            نقدم خدماتنا للشركات والأنشطة التجارية التي ترغب في تطوير حضورها الرقمي، تحسين صورتها أمام العملاء، وبناء أدوات تساعدها على التواصل والنمو بشكل أكثر احترافية.
          </p>
        </div>

        {/* التوزيع الحر (Floating Tags) - مساحات واسعة ونظيفة جداً */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-4 w-full">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="group inline-flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 transition-all duration-500 transform-gpu cursor-default"
            >
              <span className="font-mono text-sm text-white/30 group-hover:text-white/60 transition-colors duration-300">
                {sector.id}
              </span>
              <span className="text-lg md:text-xl font-bold text-white/80 group-hover:text-white transition-colors duration-300 select-text">
                {sector.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}