"use client";

import { motion } from "framer-motion";

export default function GlobalNexusMobileServiceFeatures() {
  // أنيميشن ظهور الحاويات الكبرى
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  // أنيميشن ناعم للنقاط والفقرات النصية
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] } 
    }
  };

  // قائمة ما نقدمه داخل الخدمة
  const offers = [
    "تطوير تطبيقات موبايل للشركات",
    "تطبيقات لخدمة العملاء",
    "تطبيقات للحجز والطلبات",
    "تطبيقات داخلية لفريق العمل",
    "تصميم واجهات استخدام واضحة",
    "تحسين تجربة المستخدم داخل التطبيق",
    "ربط التطبيق بالأنظمة المطلوبة",
    "تجهيز التطبيق للنمو والتطوير مستقبلًا"
  ];

  return (
    <section className="w-full pb-10 bg-transparent relative z-10 overflow-hidden" dir="rtl">
      
      {/* هالة خلفية ناعمة جداً تمنح السكشن عمقاً تكنولوجياً متناغماً */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* خط أفقي ممتد فخم للغاية يفصل بين السكاشن */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 lg:mb-24" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {}
          {/* الجانب الأيمن: ماذا نقدم داخل الخدمة؟ (يأخذ 7 أعمدة ليعطي مساحة كافية للنقاط الثمانية) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-7 space-y-8 text-right"
          >
            {/* عنوان السكشن الجانبي */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-blue-600 font-mono text-xs tracking-widest uppercase">01  THE OFFERINGS</span>
              <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-blue-600/50 to-transparent" />
            </div>

            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              ماذا نقدم داخل الخدمة؟
            </motion.h2>

            {/* شبكة عرض ثنائية خالية من الإطارات المغلقة لتعبر عن الحرية والانسيابية */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-4">
              {offers.map((offer, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-4 group cursor-default"
                >
                  {/* رقم تسلسلي تقني ناعم باللون الأزرق بدلاً من البولتس التقليدية */}
                  <span className="text-blue-600 font-mono text-xs pt-1 select-none font-bold transition-transform duration-300 group-hover:scale-110">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  {/* النص المعروض بدقة متناهية */}
                  <span className="text-white/80 text-base sm:text-lg font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                    {offer}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {}
          {/* الجانب الأيسر: لمن الخدمة + النتيجة المتوقعة (يأخذ 5 أعمدة كبنية تحريرية متناسقة) */}
          <div className="lg:col-span-5 space-y-12 lg:space-y-16">
            
            {/* 1. لمن هذه الخدمة مناسبة؟ */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-6 text-center lg:text-right"
            >
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-blue-600 font-mono text-xs tracking-widest uppercase">02  THE FIT</span>
                <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-blue-600/50 to-transparent" />
              </div>

              <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                لمن هذه الخدمة مناسبة؟
              </motion.h3>

              <div className="space-y-4 pt-2">
                <motion.p variants={itemVariants} className="text-white/70 text-sm sm:text-base font-medium leading-[1.8]">
                  هذه الخدمة مناسبة للشركات التي تحتاج إلى تقديم خدماتها عبر تطبيق، أو ترغب في تحسين تجربة العملاء من خلال قناة رقمية سهلة الاستخدام.
                </motion.p>
                <motion.p variants={itemVariants} className="text-white/50 text-sm font-medium leading-[1.8] border-r border-white/10 pr-4">
                  كما تناسب الشركات التي لديها عمليات متكررة مثل الحجز، الطلبات، المتابعة، أو التواصل المستمر مع العملاء.
                </motion.p>
              </div>
            </motion.div>

            {/* 2. النتيجة المتوقعة */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-6 text-center lg:text-right"
            >
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-blue-600 font-mono text-xs tracking-widest uppercase">03  THE OUTCOME</span>
                <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-blue-600/50 to-transparent" />
              </div>

              <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                النتيجة المتوقعة
              </motion.h3>

              {/* بلوك فخم ومضاء لتمييز النتيجة النهائية الصارخة للمشروع */}
              <motion.div 
                variants={itemVariants}
                className="p-6 sm:p-8 rounded-2xl bg-blue-600/[0.01] border-r-2 border-blue-600/40 relative overflow-hidden"
              >
                {/* توهج خافت مريح للعين داخل البلوك */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/[0.03] rounded-full blur-[40px] pointer-events-none" />
                
                <p className="text-blue-600 text-sm sm:text-base lg:text-lg font-semibold leading-[1.8] relative z-10">
                  بعد تنفيذ الخدمة، تحصل الشركة على تطبيق واضح وسهل الاستخدام يساعدها على تقديم تجربة أفضل للعملاء وتنظيم الخدمات بشكل أكثر مرونة.
                </p>
              </motion.div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}