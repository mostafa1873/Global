"use client";

import { motion } from "framer-motion";

export default function ProblemAndServices() {
  const services = [
    "إعداد استراتيجية محتوى مناسبة لطبيعة النشاط",
    "إدارة منصات التواصل الاجتماعي",
    "كتابة محتوى تسويقي واحترافي",
    "تخطيط الحملات الرقمية",
    "إدارة الإعلانات الممولة",
    "تحسين الرسائل التسويقية والعروض",
    "متابعة وتحليل الأداء",
    "تحسين المحتوى بناءً على النتائج",
    "دعم رحلة العميل من الظهور إلى التواصل"
  ];

  return (
    <section className="relative py-10 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* المشكلة والحل */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
          <div className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">المشكلة التي تعالجها الخدمة</h3>
            <p className="text-white leading-relaxed text-sm md:text-base">
              الكثير من الشركات تنشر محتوى بشكل عشوائي أو تطلق حملات إعلانية دون استراتيجية واضحة، مما يؤدي إلى نتائج ضعيفة أو تفاعل لا يتحول إلى عملاء.
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">التسويق الرقمي المنظم</h3>
            <p className="text-white leading-relaxed text-sm md:text-base">
              التسويق الرقمي المنظم يساعد الشركة على فهم جمهورها، تحسين رسالتها، واستخدام المنصات الرقمية بطريقة أكثر كفاءة.
            </p>
          </div>
        </div>

        {/* ماذا نقدم */}
        <div className="relative p-6 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10">
          <div className="absolute -top-3 -right-3 w-8 h-8 md:w-10 md:h-10 border-t-2 border-r-2 border-blue-600/50" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 md:w-10 md:h-10 border-b-2 border-l-2 border-blue-600/50" />

          <h3 className="text-xl md:text-3xl font-extrabold text-blue-600 mb-10 text-center md:text-right">ماذا نقدم داخل الخدمة؟</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-blue-600 font-bold shrink-0">•</span>
                <p className="text-white text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}