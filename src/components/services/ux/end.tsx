"use client";

import { motion } from "framer-motion";

export default function GlobalNexusUIUXFeatures() {
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  const services = [
    "تصميم واجهات مواقع إلكترونية",
    "تصميم واجهات تطبيقات موبايل",
    "تصميم لوحات تحكم وأنظمة داخلية",
    "تنظيم رحلة المستخدم",
    "تحسين وضوح الصفحات والخطوات",
    "تصميم نماذج أولية للتجربة",
    "مراجعة وتحسين تجربة الاستخدام الحالية",
    "توجيه المستخدم نحو الأهداف الأساسية"
  ];

  return (
    <section className="w-full py-10 bg-transparent text-white" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-center lg:text-right">
          
          {/* الجزء الأول: ماذا نقدم؟ (Grid) */}
          <motion.div 
            variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="flex items-center gap-3 text-blue-600 text-xs uppercase tracking-widest justify-center lg:justify-start">
              <span className="w-6 h-[1px] bg-blue-600" />
              03  WHAT WE OFFER
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">ماذا نقدم داخل الخدمة؟</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx} variants={item}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-600/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    <span className="text-blue-600/50 font-mono text-lg font-bold group-hover:text-blue-500">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-white/90 font-medium">{service}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* الجزء الثاني: لمن الخدمة + النتيجة */}
          <div className="lg:col-span-5 space-y-12">
            
            <motion.div variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600 font-mono text-xs uppercase tracking-widest justify-center lg:justify-start">
                <span className="w-6 h-[1px] bg-blue-600" />
                04  WHO IS THIS FOR
              </div>
              <h3 className="text-2xl font-bold">لمن هذه الخدمة مناسبة؟</h3>
              <p className="text-white/85 leading-relaxed">
                هذه الخدمة مناسبة للشركات التي تطور موقعًا أو تطبيقًا جديدًا، وكذلك الشركات التي تمتلك منتجًا رقميًا قائمًا وتحتاج إلى تحسين تجربة المستخدم داخله. كما تناسب الشركات التي ترغب في جعل خدماتها الرقمية أسهل وأوضح للعملاء.
              </p>
            </motion.div>

            <motion.div variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600 font-mono text-xs uppercase tracking-widest justify-center lg:justify-start">
                <span className="w-6 h-[1px] bg-blue-600" />
                05  EXPECTED RESULT
              </div>
              <div className="p-8 rounded-3xl bg-blue-900/10 border border-blue-500/20">
                <h4 className="text-xl font-bold mb-3 text-blue-600">النتيجة المتوقعة</h4>
                <p className="text-white/85 leading-relaxed">
                  بعد تنفيذ الخدمة، تصبح تجربة المستخدم أكثر وضوحًا وسهولة، مما يساعد العملاء على التفاعل بشكل أفضل ويزيد من فرص تحقيق أهداف الموقع أو التطبيق.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}