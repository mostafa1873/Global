"use client";

import { motion } from "framer-motion";
import { 
  TrendingDown, 
  MessageSquareDashed, 
  HelpCircle, 
  Target, 
  Crosshair, 
  PenTool, 
  Activity,
  ArrowDown
} from "lucide-react";

const painPoints = [
  {
    text: "بتصرف ميزانية على إعلانات بدون عائد حقيقي؟",
    icon: TrendingDown,
  },
  {
    text: "رسائل كثيرة واستفسارات، لكن بدون مبيعات؟",
    icon: MessageSquareDashed,
  },
  {
    text: "صعوبة في قياس أداء الإعلانات وفهم نتائجها؟",
    icon: HelpCircle,
  }
];

const solutions = [
  {
    title: "تحليل السوق",
    desc: "دراسة دقيقة للمنافسين وتحديد فجوات السوق لصالحك.",
    icon: Target,
  },
  {
    title: "استهداف دقيق",
    desc: "الوصول للجمهور المهتم فعلياً والمستعد لاتخاذ قرار الشراء.",
    icon: Crosshair,
  },
  {
    title: "صياغة بيعية",
    desc: "كتابة محتوى إعلاني (Copywriting) مصمم خصيصاً لإغلاق البيعات.",
    icon: PenTool,
  },
  {
    title: "تحسين مستمر",
    desc: "متابعة يومية للأداء وتعديل الاستراتيجية لضمان أعلى عائد.",
    icon: Activity,
  }
];

export default function ProblemSolutionSection() {
  return (
    <section className="relative w-full py-10 md:py-10 border-t border-white/10 overflow-hidden" dir="rtl">
      
      {/* تأثير الشبكة الخلفية الموحد لموقعك */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* === الهيدر (المقدمة) بنفس ستايل الشارة بتاعتك === */}
        <div className="text-center mb-16 md:mb-20 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 shadow-[0_0_15px_rgba(255,255,255,0.03)]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
            <span className="text-[10px] md:text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
              System Diagnostics
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[75px] font-black text-white tracking-tighter leading-[1.2] md:leading-[1.1] mb-8"
          >
            الإعلانات الناجحة مش حظ <br className="hidden md:block" />
            الإعلانات الناجحة <span className="inline-block px-3 md:px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-xl md:rounded-2xl transform -rotate-1 shadow-[0_0_20px_rgba(37,99,235,0.3)]">سيستم.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-neutral-300 font-medium max-w-2xl mx-auto leading-relaxed bg-white/[0.02] backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            قبل ما تلوم السوق أو تقتنع إن منتجك مش بيتباع، خلينا نراجع ليه حملاتك الحالية بتستنزف ميزانيتك.
          </motion.p>
        </div>
        
        {/* === المرحلة الأولى: المشكلة (Pain Cards) ستايل Glass Dark === */}
        <div className="mb-20 md:mb-24 flex flex-col items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white/[0.02] backdrop-blur-2xl border border-white/5 p-8 rounded-[2rem] flex flex-col items-center text-center gap-5 transition-all hover:border-blue-500/30 group shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl">
                  <point.icon size={28} strokeWidth={1.5} />
                </div>
                <p className="text-neutral-300 font-bold leading-relaxed text-lg tracking-tight">{point.text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* === نقطة التحول (The Pivot) === */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center py-16 md:py-24 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 md:h-16 bg-gradient-to-b from-transparent to-blue-500/50" />
          
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[1.3] md:leading-[1.2] tracking-tighter">
            الحقيقة إن المشكلة <span className="text-neutral-700 line-through decoration-blue-600/50 decoration-[4px] md:decoration-[6px]">مش في السوق</span> <br/>
            المشكلة في <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">طريقة الإعلان.</span>
          </h2>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full flex flex-col items-center">
            <div className="w-px h-20 md:h-28 bg-gradient-to-b from-blue-500/50 via-blue-600 to-blue-400 shadow-[0_0_15px_#3b82f6]" />
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-3 text-blue-500"
            >
              <ArrowDown size={32} strokeWidth={3} />
            </motion.div>
          </div>
        </motion.div>

        {/* === المرحلة الثانية: الحل (The System Offer) === */}
        <div className="mt-40 md:mt-48 max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
             <h3 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight leading-tight px-4">
               إحنا بنبنيلك <span className="text-blue-500">سيستم إعلانات كامل</span>
             </h3>
             <p className="text-neutral-400 text-lg md:text-xl font-medium px-4">مش مجرد حملة بتشتغل وتطفي.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10 -translate-y-1/2" />

            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-[#020617] rounded-full border border-white/10 z-20 -translate-y-1/2 group-hover:border-blue-500 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.2)]" />

                <div className="bg-white/[0.01] backdrop-blur-3xl p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative z-10 h-full overflow-hidden flex flex-col items-center md:items-start text-center md:text-right">
                  {/* Hover Background Glow */}
                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 relative z-10 shadow-lg">
                    <solution.icon size={26} />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 tracking-tighter relative z-10">{solution.title}</h4>
                  <p className="text-base text-neutral-400 leading-relaxed font-bold relative z-10">
                    {solution.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

       {/* === الهدف النهائي (The Ultimate Goal) ستايل Compact & Chic === */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-24 max-w-3xl mx-auto px-4"
        >
          <div className="relative group overflow-hidden border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-center shadow-2xl">
            
            {/* إضاءة ناعمة جداً في الخلفية (نفس ألوانك) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <span className="text-blue-500 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase opacity-70">
                The Final Result
              </span>
              
              <h3 className="text-2xl md:text-5xl font-black text-white leading-tight">
                الهدف النهائي؟ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-600">
                  نجيبلك عملاء، مش مجرد أرقام.
                </span>
              </h3>
              
              {/* خط ديكوري صغير وشيك */}
              <div className="flex justify-center gap-1 mt-6">
                <div className="w-8 h-[2px] bg-blue-600/30 rounded-full" />
                <div className="w-2 h-[2px] bg-blue-600 rounded-full" />
                <div className="w-8 h-[2px] bg-blue-600/30 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}