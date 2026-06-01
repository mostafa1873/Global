"use client";

import { motion } from "framer-motion";

export default function GlobalNexusMobileServiceDetails() {
  // أنيميشن ناعم لظهور العناصر عند التمرير
  const blockFadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] } 
    }
  };

  return (
    <section className="w-full pb-10 bg-transparent relative z-10 overflow-hidden" dir="rtl">
      
      {/* هالة إضاءة خلفية ناعمة جداً في المنتصف لتوفير عمق بصري هادئ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* خط أفقي علوي رفيع للغاية وممتد يفصل بين الهيرو وهذا السكشن بجمالية مطلقة */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 lg:mb-24" />

        {/* توزيع تحريري متوازي (Column-based Editorial Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* العمود الأول: نبذة عن الخدمة */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={blockFadeIn}
            className="flex flex-col space-y-6 text-center lg:text-right group"
          >
            {/* مؤشر بصري علوي تقني وبسيط للغاية (بدون كارت) */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-blue-600 font-mono text-xs tracking-widest uppercase">01  THE VISION</span>
              <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-blue-600/50 to-transparent" />
            </div>

            {/* العنوان الرئيسي للعمود */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight relative">
              نبذة عن الخدمة
              {/* خط توهج ليزري يظهر بنعومة عند تمرير الماوس */}
              <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-blue-600 transition-all duration-500 group-hover:w-1/3 hidden lg:block" />
            </h2>

            {/* نصوص المحتوى متناسقة ومريحة جداً للقراءة والتباعد البصري */}
            <div className="space-y-6 pt-4">
              <p className="text-white/90 text-base sm:text-lg font-medium leading-[1.8] sm:leading-[2]">
                نقوم بتطوير تطبيقات موبايل تساعد الشركات على تقديم خدماتها أو منتجاتها بطريقة أكثر تنظيمًا وسهولة، مع التركيز على تجربة المستخدم، وضوح الواجهة، وسلاسة الاستخدام.
              </p>
              
              <p className="text-white/80 text-sm sm:text-base font-medium leading-[1.8] border-r-2 border-white/10 pr-4 mt-4">
                سواء كان التطبيق مخصصاً للعملاء أو للاستخدام الداخلي داخل الشركة، نعمل على بناء تجربة رقمية تخدم الهدف الأساسي من المشروع بشكل مباشر واحترافي.
              </p>
            </div>
          </motion.div>

          {/* العمود الثاني: المشكلة التي تعالجها الخدمة */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={blockFadeIn}
            className="flex flex-col space-y-6 text-center lg:text-right group"
          >
            {/* مؤشر بصري علوي تقني */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-blue-600 font-mono text-xs tracking-widest uppercase">02  THE CHALLENGE</span>
              <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-blue-600/50 to-transparent" />
            </div>

            {/* العنوان الرئيسي للعمود الثاني */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight relative">
              المشكلة التي تعالجها الخدمة
              <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-blue-600 transition-all duration-500 group-hover:w-1/3 hidden lg:block" />
            </h2>

            {/* نصوص محتوى العمود الثاني */}
            <div className="space-y-6 pt-4">
              <p className="text-white/80 text-base sm:text-lg font-medium leading-[1.8] sm:leading-[2]">
                بعض الشركات تحتاج إلى وسيلة مباشرة ومستقرة للتواصل مع العملاء أو تقديم الخدمات، بدلاً من الاعتماد الكامل على السوشيال ميديا أو قنوات متفرقة.
              </p>
              
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-blue-600 text-sm sm:text-base font-semibold leading-[1.8]">
                التطبيق يساعد على خلق قناة رقمية خاصة بالشركة، يمكن من خلالها تقديم تجربة أكثر تحكّماً وتنظيماً.
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}