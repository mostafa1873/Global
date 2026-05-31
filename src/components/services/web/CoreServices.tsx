"use client";

import { motion } from "framer-motion";

export default function ServiceOverview() {
  return (
    <section className="w-full py-10 border-t border-white/10 px-6 md:px-24 bg-transparent text-white" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* العنوان - بتصميم غير تقليدي */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-[clamp(2.5rem,10vw,6rem)] font-black leading-[1.1] tracking-tighter break-words text-blue-600">
            نبذة عن <br />
            <span className="text-transparent inline-block mt-2" style={{ WebkitTextStroke: "1.5px white" }}>الخدمة</span>
          </h2>
        </motion.div>

        {/* النص مقسم بشكل هندسي جريء */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          
          {/* العمود الأول: الفقرة الأولى */}
          {/* تم إضافة text-center في الموبايل و text-right في الديسك توب */}
          <div className="md:col-span-7 text-center md:text-right">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-lg sm:text-2xl md:text-3xl font-light leading-[1.6] text-white"
            >
              نقوم بتصميم وتطوير مواقع إلكترونية تساعد الشركات على بناء حضور رقمي قوي ومنظم، مع التركيز على سهولة التصفح، وضوح الرسالة، وسرعة الوصول للمعلومات.
            </motion.p>
          </div>

          {/* العمود الثاني: الفقرة الثانية بتصميم متباين */}
          {/* تم توسيط النص والـ border في الموبايل، والعودة للوضع الطبيعي في الديسك توب */}
          <div className="md:col-span-5 border-r-2 md:border-r-4 border-blue-600 pr-5 md:pr-8 text-center md:text-right flex flex-col items-center md:items-end">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl font-medium leading-[1.7] md:leading-[1.8] text-white/90"
            >
              لا نعامل الموقع كواجهة شكلية فقط، بل كأداة تساعد الشركة على بناء الثقة، عرض خدماتها، وتحويل الزائر إلى عميل محتمل من خلال تجربة واضحة ومنظمة.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}