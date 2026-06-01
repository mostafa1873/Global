"use client";

import { motion } from "framer-motion";

export default function GlobalNexusUIUXDetails() {
  return (
    <section className="w-full py-0 md:py-10 bg-transparent text-white overflow-hidden" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* عنوان السكشن الرئيسي */}
        <div className="mb-16 flex items-center justify-center lg:justify-start gap-4 text-center lg:text-right">
          <div className="h-[1px] w-12 bg-blue-600 hidden lg:block" />
          <h2 className="text-xl font-mono text-blue-500 uppercase tracking-[0.2em]">Our Services</h2>
        </div>

        {/* شبكة البينتو - تمت إزالة auto-rows-fr لتجنب تمدد الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* كارت 1: نبذة عن الخدمة */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md relative group hover:border-blue-600/30 transition-all duration-500 text-center lg:text-right flex flex-col items-center lg:items-start"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/[0.03] rounded-bl-3xl" />
            <div className="relative z-10 space-y-6">
              <span className="text-blue-500 font-mono text-sm block">01  THE ESSENCE</span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">تصميم واجهات وتجارب استخدام رقمية</h3>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                نقوم بتصميم واجهات وتجارب استخدام للمواقع والتطبيقات والأنظمة الرقمية، مع التركيز على جعل تجربة العميل أكثر سهولة وتنظيمًا.
              </p>
              <div className="flex gap-4 pt-4 border-t border-white/10 pt-6">
                 <div className="flex-1">
                    <p className="text-white/90 font-medium leading-relaxed italic">
                      "لا يقتصر التصميم على الشكل فقط، بل يشمل ترتيب المعلومات، وضوح الخطوات، سهولة التفاعل، وتوجيه المستخدم نحو الإجراء المطلوب."
                    </p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* كارت 2: المشكلة - تم تقليل المساحات وتغيير الـ flex */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-red-950/[0.05] border border-red-900/20 backdrop-blur-md flex flex-col gap-6 group hover:border-red-600/30 transition-all duration-500 text-center items-center"
          >
            <div className="space-y-4">
              <span className="text-red-500 font-mono text-sm block">02  THE CHALLENGE</span>
              <h3 className="text-2xl font-bold">المشكلة</h3>
              <p className="text-white/90 leading-relaxed text-sm">
                موقعك قد يبدو جيداً، لكن العميل يتوه فيه ولا يعرف كيف يتمم طلبه.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-red-600/10 border border-red-500/20 w-full">
              <p className="text-white/90 text-xs font-semibold">
                تجربة المستخدم الضعيفة تؤثر على ثقتهم وتقلل فرص مبيعاتك.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}