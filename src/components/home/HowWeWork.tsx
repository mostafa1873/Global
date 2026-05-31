"use client";

import { motion } from "framer-motion";

export default function HowWeWork() {
  // أنيميشن ناعم جداً لظهور الخطوات الشارحة أثناء السكرول - تم ضبط التايب سكريبت هنا
  const itemVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const as const }
    })
  };

  return (
    <section className="relative w-full py-10 border-t border-white/5 z-10 select-none" dir="rtl">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* الهيدر: النص الأصلي بتاعك كامل بدون أي تغيير أو حذف */}
        <div className="flex flex-col items-center md:items-start text-center md:text-right mb-16 md:mb-24 space-y-5 max-w-4xl transform-gpu">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" />
            <span className="text-white font-mono tracking-widest text-xs uppercase pt-0.5">
              كيف نعمل
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight select-text">
            كيف نبني الأنظمة الرقمية <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
              للنمو؟
            </span>
          </h2>
          
          <p className="text-white text-base md:text-lg lg:text-xl font-light leading-relaxed select-text pt-2">
            نعتمد على منهجية عمل واضحة تبدأ بفهم النشاط التجاري والتحديات الحالية، ثم الانتقال إلى تصميم الحلول المناسبة وتنفيذها بطريقة تساعد الشركات على بناء حضور رقمي أكثر كفاءة واستقرارًا.
          </p>
        </div>

        {/* شبكة الخطوات الشارحة - شفافة تماماً بدون أي ألوان خلفية، تعتمد فقط على خطوط الفصل الرفيعة */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
          
          {/* الخطوة الأولى */}
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={itemVariant}
            className="flex flex-col items-center md:items-start text-center md:text-right p-8 md:p-12 border-b md:border-b-0 md:border-l border-white/10 transform-gpu"
          >
            <span className="font-mono text-xs text-blue-600 tracking-widest uppercase mb-4 block">PHASE 01</span>
            <h3 className="text-xl font-bold text-white mb-3">فهم النشاط والتحديات</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed select-text">
              تبدأ المنهجية بفهم عميق وتحليل دقيق للنشاط التجاري والوقوف على كافة التحديات الحالية التي تواجه المنظومة.
            </p>
          </motion.div>

          {/* الخطوة الثانية */}
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={itemVariant}
            className="flex flex-col items-center md:items-start text-center md:text-right p-8 md:p-12 border-b md:border-b-0 md:border-l border-white/10 transform-gpu"
          >
            <span className="font-mono text-xs text-blue-600 tracking-widest uppercase mb-4 block">PHASE 02</span>
            <h3 className="text-xl font-bold text-white mb-3">تصميم الحلول المناسبة</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed select-text">
              الانتقال المباشر إلى مرحلة التخطيط لابتكار وتصميم الحلول البرمجية والرقمية البديلة التي تناسب أهداف النمو.
            </p>
          </motion.div>

          {/* الخطوة الثالثة */}
          <motion.div 
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={itemVariant}
            className="flex flex-col items-center md:items-start text-center md:text-right p-8 md:p-12 transform-gpu"
          >
            <span className="font-mono text-xs text-blue-600 tracking-widest uppercase mb-4 block">PHASE 03</span>
            <h3 className="text-xl font-bold text-white mb-3">التنفيذ والاستقرار</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed select-text">
              تنفيذ الحلول على أرض الواقع ببنية تحتية قوية تساعد الشركات على بناء حضور رقمي ذو كفاءة عالية واستقرار تام.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}