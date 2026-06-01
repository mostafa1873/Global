"use client";

import { motion } from "framer-motion";

export default function GlobalNexusMobileServicePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] as const }
    }
  };

  // حركات تطفو بسرعات مختلفة للشاشات المتداخلة لتعطي عمقاً بصرياً (Parallax effect)
  const floatCard1 = {
    animate: {
      y: [0, -12, 0],
      x:,
      transition: { duration: 5, ease: "easeInOut" as const, repeat: Infinity }
    }
  };

  const floatCard2 = {
    animate: {
      y:,
      x: [0, -5, 0],
      transition: { duration: 6, ease: "easeInOut" as const, repeat: Infinity }
    }
  };

  const floatCard3 = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 4.5, ease: "easeInOut" as const, repeat: Infinity }
    }
  };

  return (
    // تم تحديد الارتفاع ليكون 100vh ثابت في الشاشات الكبيرة مع مرونة كاملة لعدم تداخل النافبار
    <div className="w-full text-white min-h-[100vh] bg-transparent flex items-center justify-center pt-32 lg:py-0" dir="rtl">
      {/* توسيع الحاوية لـ max-w-7xl لملء المساحات الجانبية الشاغرة بذكاء واحترافية */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* الـ Grid بتوزيع هيرو عصري مبتكر */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* الجانب الأيمن: المحتوى النصي المنسق بفخامة مع التوسيط في وضع الموبايل */}
          <motion.div 
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-center space-y-6 text-center lg:text-right items-center lg:items-start"
          >
            <div>
              {/* الـ Badge مع التوسيط في الموبايل */}
              <motion.div 
                variants={fadeIn} 
                className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase flex items-center gap-2 mb-6 justify-center lg:justify-start"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Mobile Applications</span>
              </motion.div>

              {/* العنوان الصريح القوي - تم تصغيره قليلاً ليتناسق بدقة */}
              <motion.h1 
                variants={fadeIn}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.3] tracking-tight mb-6"
              >
                تطبيقات رقمية تمنح عملاءك <span className="text-blue-600 block mt-2">تجربة أسهل وأكثر مرونة</span>
              </motion.h1>

              {/* الفقرة النصية بتناسقها المريح وحجم خط معدل بدقة */}
              <motion.p 
                variants={fadeIn}
                className="text-white/80 text-sm md:text-base font-medium leading-[1.8] max-w-2xl mx-auto lg:mx-0"
              >
                التطبيقات أصبحت من أهم الأدوات التي تساعد الشركات على تقديم خدماتها بطريقة أسرع وأكثر قربًا من العملاء. في <span className="font-bold text-white">Global Nexus</span> نطوّر تطبيقات موبايل تساعد الشركات على تحسين تجربة المستخدم وتسهيل الوصول إلى خدماتها.
              </motion.p>
            </div>

            {/* زر اتخاذ الإجراء التفاعلي - ممركز في الموبايل ومحاذى لليمين في الديسكتوب */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-fit pt-2 flex justify-center lg:justify-start"
            >
              <a 
                href="#contact-section"
                className="w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-4 bg-white text-black hover:bg-blue-600 hover:text-white font-bold rounded-full transition-all duration-300 shadow-lg group text-base"
              >
                <span>ابدأ تطوير تطبيقك</span>
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center transition-transform group-hover:-translate-x-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* الجانب الأيسر: "The Layered App Stack" - تم إضافة كلاس hidden لإخفاء الكروت على الموبايل و lg:flex لإظهارها على الديسكتوب فقط */}
          <div className="hidden lg:flex lg:col-span-6 items-center justify-center relative min-h-[450px] sm:min-h-[550px] w-full overflow-visible">
            
            {/* الإضاءة الخلفية للـ Ambient Glow بلون الهوية الأزرق */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* الكارت الخلفي المتداخل 1 (المحادثات والإشعارات) - تم ضبط الإزاحة لضمان كامل الظهور */}
            <motion.div 
              variants={floatCard1}
              animate="animate"
              className="absolute w-[180px] sm:w-[230px] aspect-[4/5] rounded-3xl bg-white/[0.03] backdrop-blur-[10px] border border-white/10 p-4 sm:p-5 shadow-2xl left-1/2 -translate-x-[95%] -translate-y-10 sm:-translate-y-14 z-10 flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-600/30 flex items-center justify-center text-blue-500 font-bold text-xs">GN</div>
                <div className="space-y-1">
                  <div className="w-20 h-2 bg-white/25 rounded-full" />
                  <div className="w-12 h-1.5 bg-white/10 rounded-full" />
                </div>
              </div>
              <div className="space-y-3 my-auto">
                <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                  <div className="w-full h-2 bg-white/25 rounded-full mb-1.5" />
                  <div className="w-4/5 h-1.5 bg-white/10 rounded-full" />
                </div>
                <div className="bg-blue-600/10 p-2 rounded-xl border border-blue-600/10 self-end mr-4">
                  <div className="w-16 h-2 bg-blue-400/50 rounded-full mb-1" />
                  <div className="w-10 h-1.5 bg-blue-400/30 rounded-full" />
                </div>
              </div>
              <div className="w-full h-8 rounded-xl bg-white/5 border border-white/5 flex items-center px-2">
                <div className="w-full h-1.5 bg-white/20 rounded-full" />
              </div>
            </motion.div>

            {/* الكارت الأوسط المتداخل 2 (الإحصائيات والأداء البصري) - ممركز بشكل دقيق */}
            <motion.div 
              variants={floatCard2}
              animate="animate"
              className="absolute w-[190px] sm:w-[240px] aspect-[4/5] rounded-3xl bg-white/[0.06] backdrop-blur-[12px] border border-white/20 p-5 sm:p-6 shadow-2xl z-20 flex flex-col justify-between left-1/2 -translate-x-1/2"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-white/50">أداء النظام</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
              </div>
              
              {/* رسم بياني بصري دائري فريد بالـ CSS فقط */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto flex items-center justify-center my-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="40" className="stroke-white/10 fill-none" strokeWidth="8" />
                  <circle cx="50%" cy="50%" r="40" className="stroke-blue-600 fill-none" strokeWidth="8" strokeDasharray="251" strokeDashoffset="62" strokeLinecap="round" />
                </svg>
                <div className="absolute text-center">
                  <span className="text-lg sm:text-xl font-bold tracking-tight">75%</span>
                  <span className="block text-[8px] uppercase tracking-wider text-white/40">سريع جداً</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] text-white/60">
                  <span>المستخدمين</span>
                  <span className="text-blue-400 font-bold">+12.4k</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-blue-600 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* الكارت الأمامي المتداخل 3 (الأمان والنجاح والعمليات) - تم إزاحته بنعومة لجهة اليسار/الأمام ليظهر كاملاً */}
            <motion.div 
              variants={floatCard3}
              animate="animate"
              className="absolute w-[160px] sm:w-[200px] aspect-[4/5] rounded-3xl bg-white/[0.02] backdrop-blur-[8px] border border-white/10 p-4 sm:p-5 shadow-2xl left-1/2 -translate-x-[-5%] translate-y-12 sm:translate-y-16 z-30 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] uppercase font-bold text-blue-500 tracking-wider">سلس وآمن</span>
                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              <div className="flex flex-col items-center justify-center py-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-white">اكتملت العملية</span>
                <span className="text-[8px] text-white/40 mt-1">بأعلى معايير الأمان</span>
              </div>

              <div className="w-full h-7 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <div className="w-12 h-1 bg-green-400/60 rounded-full" />
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
}