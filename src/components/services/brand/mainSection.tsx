"use client";

import { motion } from "framer-motion";

export default function BrandingHeroNonTraditional() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const 
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section 
      className="relative w-full h-auto lg:min-h-screen flex items-center overflow-hidden pt-30 pb-12 md:pt-18 md:pb-0 bg-transparent select-none z-10" 
      dir="rtl"
    >
      {/* شبكة الإضاءة الخلفية الناعمة */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-nexus-blue/[0.03] blur-[100px] rounded-full pointer-events-none z-0 transform-gpu" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* قسم النصوص والمعلومات الأصلية (لم يتم تغيير أي حرف) */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-right"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* البادج المطور */}
            <motion.div variants={itemVariants} className="inline-block mb-8">
              <div className="flex items-center gap-3 px-5 py-2 bg-nexus-blue/10 border border-nexus-blue/20 rounded-full backdrop-blur-sm">
                <span className="text-sm font-medium tracking-wide text-nexus-blue">
                  Branding & Visual Identity
                </span>
                <div className="hidden md:flex items-center gap-2 border-r border-white/10 pr-2 mr-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-nexus-blue shrink-0" />
                  <span className="text-white/40 font-mono text-xs uppercase tracking-widest whitespace-nowrap">
                    Service . Core Capability
                  </span>
                </div>
              </div>
            </motion.div>

            {/* العنوان الرئيسي الأصلي */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl lg:text-5xl font-extrabold text-white leading-[1.5] lg:leading-[1.2] tracking-tight mb-8 select-text break-words"
            >
              هوية بصرية تعكس <br className="hidden sm:block" />
              قيمة شركتك وتمنحها <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-white via-white/80 to-white/40 block md:mt-2">
                حضورًا أوضح
              </span>
            </motion.h1>

            {/* النص الوصفي الأصلي */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed mb-12 select-text"
            >
              الهوية البصرية ليست مجرد شعار أو ألوان، بل هي الطريقة التي يتعرف بها العملاء على شركتك ويتذكرونها. في Global Nexus نساعد الشركات على بناء هويات بصرية واضحة، متناسقة، وقادرة على التعبير عن قيمتها بشكل احترافي.
            </motion.p>

            {/* الزر التفاعلي الأصلي */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center justify-center lg:justify-start w-full z-20">
              <button className="group/btn inline-flex items-center justify-between sm:justify-start gap-4 pr-8 pl-4 py-4 bg-white text-black font-bold text-base rounded-full transition-colors duration-300 ease-in-out tracking-tight shadow-sm hover:bg-nexus-blue hover:text-white w-full sm:w-auto active:scale-[0.99]">
                <span className="whitespace-nowrap">ابدأ بناء هويتك البصرية</span>
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-nexus-blue text-white group-hover/btn:bg-white group-hover/btn:text-nexus-blue transition-colors duration-300 ease-in-out shrink-0">
                  <svg className="w-4 h-4 transform transition-transform duration-300 ease-in-out group-hover/btn:-translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* التعديل الجذري هنا: كروت معمارية وتصميمية خاصة بالهوية البصرية (Branding Visual System) */}
          <motion.div
            className="lg:col-span-5 relative h-[400px] md:h-[500px] hidden lg:flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* الكارت الأول العلوي: شبكة بناء الشعار والمقاسات الهندسة الهيكلية */}
            <motion.div 
              variants={floatVariants} 
              animate="animate"
              className="absolute right-0 top-10 w-60 bg-white/5 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/10 z-10"
            >
              <div className="relative w-full h-28 bg-black/20 border border-white/5 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                {/* خطوط شبكة التصميم (Grid Lines) */}
                <div className="absolute inset-0 border-b border-white/[0.04] my-auto h-0" />
                <div className="absolute inset-0 border-l border-white/[0.04] mx-auto w-0" />
                <div className="w-16 h-16 border border-dashed border-nexus-blue/30 rounded-full absolute" />
                <div className="w-10 h-10 border border-nexus-blue/20 rounded-full absolute" />
                <div className="w-12 h-12 border border-white/10 rotate-45 absolute" />
                {/* أيقونة الشعار الهندسي كرمز براندنج */}
                <svg className="w-8 h-8 text-nexus-blue relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m12-9l-6 6m0 0l6 6" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-sm mb-1">هندسة وبناء الشعار</h3>
              <p className="text-xs text-white/40 font-mono">Logo Grid & Geometry</p>
            </motion.div>

            {/* الكارت الثاني الأوسط: لوحة الألوان (Brand Color Palette) المعتمدة للبراند */}
            <motion.div 
              variants={floatVariants} 
              animate="animate"
              style={{ animationDelay: "-2s" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-64 bg-[#0f172a] p-6 rounded-3xl shadow-[0_0_50px_-15px_rgba(0,0,0,0.8)] border border-nexus-blue/20 z-20"
            >
              <span className="text-[11px] text-nexus-blue font-mono uppercase tracking-wider block mb-4">Brand Color Palette</span>
              <div className="flex gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-nexus-blue shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center text-[9px] text-white font-mono font-bold">#NEXUS</div>
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[9px] text-black font-mono font-bold">#FFFFFF</div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[9px] text-white/40 font-mono">#DARK</div>
              </div>
              <h3 className="text-white font-bold text-base">التناغم والاتساق اللوني</h3>
            </motion.div>

            {/* الكارت الثالث السفلي: تايبوجرافي ونمط الخطوط العربية والأجنبية للهوية */}
            <motion.div 
              variants={floatVariants} 
              animate="animate"
              style={{ animationDelay: "-1s" }}
              className="absolute right-10 bottom-0 w-52 bg-white/5 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/10 z-10"
            >
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                <span className="text-2xl font-serif text-white/90 font-medium">Aa</span>
                <span className="text-xl font-sans text-nexus-blue font-black">عـ</span>
              </div>
              <div className="space-y-2 mb-3">
                <div className="h-1.5 w-full bg-white/20 rounded-full" />
                <div className="h-1.5 w-5/6 bg-white/10 rounded-full" />
                <div className="h-1.5 w-2/3 bg-white/5 rounded-full" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">التايبوجرافي والخطوط</h3>
              <p className="text-xs text-nexus-blue font-mono">Typography & Alignment</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}