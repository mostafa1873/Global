"use client";

import { motion } from "framer-motion";
import { MoveLeft, Star, Briefcase, Quote } from "lucide-react";

// المحتوى الأصلي بتاعك بالظبط بدون أي تغيير
const projects = [
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
    title: "هوية ريادة Tech",
    tag: "Brand Transformation"
  },
  {
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2074&auto=format&fit=crop",
    title: "ELITE Fintech",
    tag: "Visual Strategy"
  },
  {
    image: "https://images.unsplash.com/photo-1633113087654-c49c686c2acf?q=80&w=2070&auto=format&fit=crop",
    title: "CORE Solutions",
    tag: "Digital Experience"
  }
];

export default function ArchitecturalWorkSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    // التعديل هنا بإضافة as const لحل مشكلة الـ Type Error في الـ ease
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="py-10 text-white border-t border-white/5 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* الحاوية الرئيسية بستايل الشبكة المعمارية - تم تعديل الحواف للموبايل */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border border-white/5 rounded-[2rem] md:rounded-[3rem] bg-black/20 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/30"
        >
          
          {/* --- صف الهيدر: ضبط المسافات والعناوين للموبايل --- */}
          <div className="border-b border-white/5 p-8 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 relative">
            <div className="absolute top-0 right-0 w-80 h-full bg-blue-600/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-right relative z-10">
              <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 shadow-inner">
                <Star size={12} className="text-blue-500 fill-blue-500" />
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Proven Structural Impact</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] md:leading-[0.9]">
                حولناهم من عادي ← <span className="text-blue-500 italic relative">براند يُحترم.</span>
              </h2>
            </div>
            
            <motion.a 
              href="/portfolio"
              whileHover={{ scale: 1.05, boxShadow: "0 0-20px rgba(59, 130, 246, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black text-sm transition-all shadow-lg shadow-black/20 relative z-10 w-full md:w-auto"
            >
              <Briefcase size={18} />
              تصفح معرض الأعمال بالكامل
            </motion.a>
          </div>

          {/* --- صف الصور: ضبط توزيع الشبكة والحدود الفاصلة --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/5">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className={`relative group overflow-hidden border-white/5 
                  ${i !== projects.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''}`}
              >
                <div className="aspect-[4/5] md:aspect-[3/4]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-6 right-6 left-6 md:bottom-8 md:right-8 md:left-8 text-right">
                    <span className="text-blue-500 font-bold text-[10px] uppercase tracking-widest mb-2 block">{project.tag}</span>
                    <h3 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4 md:mb-6 tracking-tighter">{project.title}</h3>
                    <div className="flex items-center gap-3 text-neutral-500 group-hover:text-blue-400 transition-colors">
                       <span className="text-xs font-bold uppercase tracking-wider">تفاصيل المشروع</span>
                       <MoveLeft size={16} className="group-hover:translate-x-[-5px] transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- صف الشهادة: ضبط التمركز والخطوط العريضة للموبايل --- */}
          <motion.div 
            variants={itemVariants}
            className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 bg-white/[0.01] relative"
          >
             <Quote size={120} className="absolute -bottom-5 -left-5 text-white/[0.02] -rotate-12 pointer-events-none hidden md:block" />

             <div className="flex-1 text-center md:text-right relative z-10">
                <span className="text-blue-500/50 font-mono text-[10px] md:text-sm mb-4 block tracking-widest uppercase">The Lasting Impact</span>
                <p className="text-2xl md:text-5xl font-black text-white tracking-tighter leading-[1.2] md:leading-[1.1]">
                  "<span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-300 to-white relative">الناس بقت بتاخدنا بجد</span> <br className="hidden md:block" /> 
                  بعد ما غيرنا الهوية"
                </p>
             </div>
             
             <div className="flex flex-col items-center md:items-end gap-2 border-t md:border-t-0 md:border-r border-white/5 pt-8 md:pt-0 md:pr-10 text-center md:text-right relative z-10 w-full md:w-auto">
                <span className="text-white font-black text-lg md:text-xl tracking-tight">أحمد الرويني</span>
                <span className="text-neutral-500 text-xs md:text-sm font-medium">مدير تنفيذي - ELITE Tech</span>
                <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-blue-500 fill-blue-500" />)}
                </div>
             </div>
          </motion.div>

        </motion.div>
      </div>

      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}