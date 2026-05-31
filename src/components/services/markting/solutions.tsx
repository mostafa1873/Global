"use client";

import { motion } from "framer-motion";

export default function ServiceOverview() {
  return (
    <section className="relative py-10 overflow-hidden" dir="rtl">
      {/* توهج الخلفية لمحاكاة الهيرو */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* النص الجانبي */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 text-center lg:text-right"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              نبذة عن <span className="text-blue-600">الخدمة</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8 mx-auto lg:mx-0" />
            <p className="text-base md:text-lg text-white leading-relaxed">
              نقدم حلول تسويق رقمي تساعد الشركات على تحسين ظهورها أمام الجمهور المناسب، وبناء تواصل أقوى مع العملاء، وزيادة فرص الحصول على استفسارات وطلبات حقيقية.
            </p>
          </motion.div>

          {/* الكارت المميز */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative p-6 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_0_30px_-10px_rgba(37,99,235,0.2)]">
              {/* زخرفة زاوية */}
              <div className="absolute -top-3 -right-3 w-8 h-8 md:w-10 md:h-10 border-t-2 border-r-2 border-blue-600/50" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 md:w-10 md:h-10 border-b-2 border-l-2 border-blue-600/50" />
              
              <p className="text-lg md:text-xl lg:text-2xl text-white font-medium leading-relaxed">
                نعمل على <span className="text-blue-600 font-semibold underline decoration-blue-600/30 underline-offset-8">ربط المحتوى، التصميم، الإعلانات، وتحليل الأداء</span> داخل اتجاه واحد يخدم أهداف الشركة ويمنحها حضورًا أكثر وضوحًا.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}