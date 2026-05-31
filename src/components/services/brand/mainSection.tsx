"use client";

import { motion } from "framer-motion";

export default function BrandingHeroNonTraditional() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const as const } 
    }
  };

  return (
    <section className="relative w-full pt-24 pb-12 md:pt-40 md:pb-24 px-4 sm:px-6 md:px-12 select-none z-10 overflow-hidden" dir="rtl">
      
      {/* شبكة خفيفة من الإضاءة الموضعية بدون تغيير لون الخلفية */}
      <div className="absolute top-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-nexus-blue/[0.03] blur-[100px] sm:blur-[120px] rounded-full pointer-events-none z-0 transform-gpu" />

      <motion.div 
        className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* السطر العلوي: متجاوب بالكامل مع تمركز العناصر في منتصف الموبايل */}
        <motion.div 
          variants={itemVariants}
          className="w-full flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]"
        >
          <div className="hidden md:flex items-center gap-3 order-2">
            <span className="w-1.5 h-1.5 rounded-full bg-nexus-blue shrink-0" />
            <span className="text-white/40 font-mono text-[10px] sm:text-xs uppercase tracking-widest whitespace-nowrap">
              Service . Core Capability
            </span>
          </div>
          <span className="text-nexus-blue font-mono text-[10px] sm:text-xs uppercase tracking-widest bg-nexus-blue/5 px-3 py-1 rounded-full border border-nexus-blue/10 order-1 sm:order-2 self-center sm:self-auto whitespace-nowrap">
            Branding & Visual Identity
          </span>
        </motion.div>

        {/* القسم الرئيسي: تقسيم الشاشة بشكل غير متماثل (Editorial Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 md:pt-16 items-start">
          
          {/* الجانب الأيمن: العنوان الرئيسي ممركز في الموبايل ويمين في الديسكتوب */}
          <motion.div className="lg:col-span-8 flex flex-col items-center lg:items-start justify-start" variants={itemVariants}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.3] sm:leading-[1.2] lg:leading-[1.15] text-center lg:text-right select-text break-words">
              هوية بصرية تعكس <br className="hidden sm:block" />
              قيمة شركتك وتمنحها <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-white via-white/80 to-white/40">
                حضورًا أوضح
              </span>
            </h1>
          </motion.div>

          {/* الجانب الأيسر: الوصف والزرار ممركزين في الموبايل ويمين في الديسكتوب */}
          <motion.div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6 sm:space-y-8 lg:pt-4" variants={itemVariants}>
            
            {/* مؤشر بصري خطي ناعم يظهر في الشاشات الكبيرة فقط */}
            <div className="w-12 h-[1px] bg-nexus-blue/50 hidden lg:block" />
            
            {/* النص الوصفي: ممركز في الموبايل ويمين في الديسكتوب */}
            <p className="text-white/70 text-sm sm:text-base md:text-lg font-light leading-relaxed text-center lg:text-right select-text">
              الهوية البصرية ليست مجرد شعار أو ألوان، بل هي الطريقة التي يتعرف بها العملاء على شركتك ويتذكرونها. في Global Nexus نساعد الشركات على بناء هويات بصرية واضحة، متناسقة، وقادرة على التعبير عن قيمتها بشكل احترافي.
            </p>

            {/* الزرار التفاعلي: ممركز تماماً في الموبايل وفي مكانه الطبيعي في الديسكتوب */}
            <div className="pt-2 flex justify-center lg:justify-end w-full">
              <button className="group relative w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 sm:gap-8 px-5 sm:px-6 py-3.5 sm:py-4 border border-white/10 hover:border-nexus-blue/40 bg-white/[0.01] hover:bg-nexus-blue/[0.03] text-white rounded-xl transition-all duration-300 overflow-hidden active:scale-[0.99] shrink-0">
                <span className="font-bold text-xs sm:text-sm md:text-base tracking-wide relative z-10 transition-colors group-hover:text-white whitespace-nowrap">
                  ابدأ بناء هويتك البصرية
                </span>
                
                {/* الأيقونة التفاعلية المودرن */}
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center relative z-10 overflow-hidden transition-colors group-hover:border-nexus-blue/30 group-hover:bg-nexus-blue/20 shrink-0">
                  <svg 
                    className="w-4 h-4 text-white/70 group-hover:text-nexus-blue transform transition-all duration-300 group-hover:-translate-x-5 absolute" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <svg 
                    className="w-4 h-4 text-nexus-blue transform transition-all duration-300 translate-x-5 group-hover:translate-x-0 absolute" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>
              </button>
            </div>

          </motion.div>

        </div>

        {/* السطر السفلي المقفل للسكشن لإتمام اللمسة الهندسية */}
        <div className="w-full h-[1px] bg-white/[0.04] mt-12 md:mt-24" />

      </motion.div>
    </section>
  );
}