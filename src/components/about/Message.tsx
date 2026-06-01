"use client";

import { motion } from "framer-motion";

export default function GlobalNexusPhilosophy() {
  return (
    <section className="w-full py-10 bg-transparent text-white overflow-hidden" dir="rtl">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="space-y-0">
          
          {/* سكشن 1: فلسفة العمل */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 py-0 border-b border-white/10"
          >
            {/* العنوان - ثابت (Sticky) على الشاشات الكبيرة */}
            <div className="w-full md:w-5/12 md:sticky md:top-32 self-start text-center md:text-right">
              <span className="text-blue-600 font-mono text-sm tracking-widest uppercase mb-4 block">
                فلسفة العمل
              </span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight">
                الوضوح <br/><span className="text-white">قبل التنفيذ</span>
              </h2>
            </div>
            
            {/* المحتوى */}
            <div className="w-full md:w-7/12">
              <div className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md text-center md:text-right">
                <p className="text-lg text-white/90 leading-relaxed font-light">
                  نؤمن أن نجاح أي مشروع رقمي يبدأ من فهم واضح لطبيعة النشاط، أهدافه، وتحدياته الحالية. لذلك لا نبدأ بالتنفيذ مباشرة، بل نعمل أولًا على تحديد ما يحتاجه المشروع فعلًا، وما الحلول التي يمكن أن تحقق له قيمة حقيقية.
                </p>
              </div>
            </div>
          </motion.div>

          {/* سكشن 2: طريقة التفكير */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 py-16 border-b border-white/10"
          >
            <div className="w-full md:w-5/12 md:sticky md:top-32 self-start text-center md:text-right">
              <span className="text-blue-600 font-mono text-sm tracking-widest uppercase mb-4 block">
                طريقة التفكير
              </span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight">
                نربط بين <br/><span className="text-white">التصميم، التقنية، والنمو</span>
              </h2>
            </div>
            
            <div className="w-full md:w-7/12">
              <div className="bg-blue-600/10 border border-blue-600/20 p-8 md:p-10 rounded-3xl text-center md:text-right">
                <p className="text-lg text-white/90 leading-relaxed font-medium">
                  نعمل على تطوير حلول تجمع بين الشكل الاحترافي، الأداء التقني، والتفكير التجاري. الهدف ليس فقط تنفيذ موقع أو حملة أو نظام، بل بناء تجربة رقمية تساعد الشركة على الظهور بشكل أفضل، التواصل مع عملائها بوضوح، وتنظيم أدواتها الرقمية.
                </p>
              </div>
            </div>
          </motion.div>

          {/* سكشن 3: ماذا يميزنا */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 py-16 border-b border-white/10"
          >
            <div className="w-full md:w-5/12 md:sticky md:top-32 self-start text-center md:text-right">
              <span className="text-blue-600 font-mono text-sm tracking-widest uppercase mb-4 block">
                ماذا يميزنا
              </span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight">
                حلول عملية تناسب <br/><span className="text-white">طبيعة كل شركة</span>
              </h2>
            </div>
            
            <div className="w-full md:w-7/12">
              <div className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-8 md:p-10 rounded-3xl text-center md:text-right">
                <p className="text-lg text-white/90 leading-relaxed">
                  لا نتعامل مع المشاريع بنفس الطريقة، لأن كل شركة لها طبيعة مختلفة، وجمهور مختلف، وأهداف مختلفة. لذلك نركز على بناء حلول تناسب الاحتياج الفعلي لكل مشروع، مع الحفاظ على وضوح التنفيذ وسهولة التطوير مستقبلًا.
                </p>
              </div>
            </div>
          </motion.div>

          {/* سكشن 4: رؤيتنا */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 py-16 relative"
          >
            {/* إضاءة الخلفية للسكشن الأخير زي ما طلبت */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full md:w-5/12 md:sticky md:top-32 self-start relative z-10 text-center md:text-right">
              <span className="text-blue-600 font-mono text-sm tracking-widest uppercase mb-4 block">
                رؤيتنا
              </span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight">
                بناء بيئات رقمية <br/><span className="text-white">أكثر استدامة</span>
              </h2>
            </div>
            
            <div className="w-full md:w-7/12 relative z-10">
              <div className="bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-3xl text-center md:text-right">
                <p className="text-lg text-white/90 leading-relaxed font-light">
                  نسعى إلى مساعدة الشركات على بناء حضور رقمي أكثر تنظيمًا واستدامة، من خلال حلول تجمع بين الاستراتيجية، التصميم، والتقنية، وتدعم النمو على المدى الطويل.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}