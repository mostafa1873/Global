"use client";

import { motion } from "framer-motion";

export default function BrandingHeroNonTraditional() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    // قفلنا الارتفاع تماماً ومنعنا السكرول
    <section className="relative w-full h-[100dvh] max-h-[100dvh] flex flex-col justify-between items-center overflow-hidden bg-transparent select-none z-10" dir="rtl">
      
      {/* شبكة الإضاءة الخلفية */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-nexus-blue/[0.03] blur-[100px] rounded-full pointer-events-none z-0 transform-gpu" />

      {/* التعديل الجذري هنا: pt-[14vh] بتزق السيكشن كله تحت النيفبار عشان مفيش حاجة تستخبى و pb-[10vh] بتسيب مساحة أمان فوق الـ Chatbot */}
      <motion.div 
        className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 pt-[17vh] pb-[9vh] md:pt-40 md:pb-24 flex flex-col h-full flex-1 justify-between md:justify-center lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* 1. السطر العلوي: البادج نزل وبقى تحت النيفبار وبكامل وضوحه وتألقه */}
        <motion.div 
          variants={itemVariants}
          className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 pb-3 md:pb-6 border-b border-white/[0.06] shrink-0"
        >
          <div className="hidden md:flex items-center gap-3 order-2">
            <span className="w-1.5 h-1.5 rounded-full bg-nexus-blue shrink-0" />
            <span className="text-white/40 font-mono text-xs uppercase tracking-widest whitespace-nowrap">
              Service . Core Capability
            </span>
          </div>
          <span className="text-nexus-blue font-mono text-[11px] sm:text-xs uppercase tracking-widest bg-nexus-blue/5 px-3.5 py-1 rounded-full border border-nexus-blue/10 order-1 sm:order-2 self-center sm:self-auto whitespace-nowrap">
            Branding & Visual Identity
          </span>
        </motion.div>

        {/* الحاوية الوسطية: بتضمن توزيع مريح وفخم جداً للعنوان والباراجراف والزرار على الموبايل عبر justify-evenly */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-2 sm:gap-6 lg:gap-8 items-center lg:items-start flex-1 justify-evenly md:justify-center w-full my-auto py-2 md:py-0">
          
          {/* 2. الجانب الأيمن: العنوان الرئيسي - كبرنا الخط تاني لـ text-3xl عشان يملى مكانه بهيبة وفخامة */}
          <motion.div className="lg:col-span-8 flex flex-col items-center lg:items-start justify-center w-full" variants={itemVariants}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.3] sm:leading-[1.2] lg:leading-[1.15] text-center lg:text-right select-text break-words">
              هوية بصرية تعكس <br className="hidden sm:block" />
              قيمة شركتك وتمنحها <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-white via-white/80 to-white/40">
                حضورًا أوضح
              </span>
            </h1>
          </motion.div>

          {/* الجانب الأيسر: الوصف والزرار */}
          {/* التعديل هنا: التوزيع على الموبايل ملموم وراقي جداً بدون space-y مبالغ فيها */}
          <motion.div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-4 lg:pt-4 w-full" variants={itemVariants}>
            
            {/* مؤشر بصري خطي ناعم يظهر في الشاشات الكبيرة فقط */}
            <div className="w-12 h-[1px] bg-nexus-blue/50 hidden lg:block" />
            
            {/* 3. النص الوصفي: مقاس متزن text-sm واضح ومريح للقراءة ومش مخنوق */}
            <p className="text-white/70 text-sm md:text-lg font-light leading-relaxed text-center lg:text-right select-text max-w-md lg:max-w-none px-1 sm:px-0">
              الهوية البصرية ليست مجرد شعار أو ألوان، بل هي الطريقة التي يتعرف بها العملاء على شركتك ويتذكرونها. في Global Nexus نساعد الشركات على بناء هويات بصرية واضحة، متناسقة، وقادرة على التعبير عن قيمتها بشكل احترافي.
            </p>

            {/* 4. الزرار التفاعلي: مرفوع بمسافة أمان فخمة جداً ومستحيل يلمس الـ Chatbot */}
            <div className="pt-2 flex justify-center lg:justify-end w-full max-w-xs sm:max-w-none z-20">
              <button className="group relative w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-6 px-5 py-3.5 border border-white/10 hover:border-nexus-blue/40 bg-white/[0.01] hover:bg-nexus-blue/[0.03] text-white rounded-xl transition-all duration-300 overflow-hidden active:scale-[0.99] shrink-0">
                <span className="font-bold text-sm tracking-wide relative z-10 transition-colors group-hover:text-white whitespace-nowrap">
                  ابدأ بناء هويتك البصرية
                </span>
                
                {/* الأيقونة التفاعلية */}
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

        {/* الخط السفلي: ثابت ومحكوم فوق حافة الشاشة السفلية بمسافة رايقة جداً */}
        <div className="w-full h-[1px] bg-white/[0.04] md:mt-24 shrink-0" />

      </motion.div>
    </section>
  );
}