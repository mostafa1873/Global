"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ArrowUpLeft, Target, Lightbulb, TrendingUp, Zap } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "Agro Mart",
    tagline: "من سوق محلي ← تصدير عالمي",
    logo: "🌿",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=2070&auto=format&fit=crop",
    story: "كان بيعتمد على العلاقات الشخصية والتوريد المحدود.. دلوقت عنده سيستم تصدير بيوصل لـ 12 دولة.",
    problem: "صعوبة الوصول لعملاء دوليين وغياب الهوية الاحترافية في السوق العالمي.",
    solution: "بناء منصة تصدير متكاملة مع استراتيجية محتوى بلغات متعددة.",
    result: "زيادة 300% في طلبات التوريد الخارجية خلال أول 6 شهور.",
    themeColor: "text-blue-500", // تعديل للون البراند بتاعك
  },
  {
    id: 2,
    name: "Ben Dodo",
    tagline: "إعادة تعريف تجربة القهوة",
    logo: "☕",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    story: "براند محلي كان تايه وسط المنافسين.. حولناه لأيقونة بصرية والناس بدأت تطلب 'البراند بالاسم'.",
    problem: "ضعف الولاء للعلامة التجارية وتشابه الهوية مع المنافسين التقليديين.",
    solution: "تصميم هوية بصرية 'Chic' تعتمد على الـ 3D Mockups وتجربة مستخدم مريحة.",
    result: "انتشار واسع في السوشيال ميديا وتحول البراند لـ 'Lifestyle'.",
    themeColor: "text-blue-500", // تعديل للون البراند بتاعك
  },
  {
    id: 3,
    name: "عز للتصدير",
    tagline: "من سوق محلي ← تصدير عالمي",
    logo: "🌿",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=2070&auto=format&fit=crop",
    story: "كان بيعتمد على العلاقات الشخصية والتوريد المحدود.. دلوقت عنده سيستم تصدير بيوصل لـ 12 دولة.",
    problem: "صعوبة الوصول لعملاء دوليين وغياب الهوية الاحترافية في السوق العالمي.",
    solution: "بناء منصة تصدير متكاملة مع استراتيجية محتوى بلغات متعددة.",
    result: "زيادة 300% في طلبات التوريد الخارجية خلال أول 6 شهور.",
    themeColor: "text-blue-500", // تعديل للون البراند بتاعك
  }
];

export default function AvantGardeShowcase() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedId) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedId]);

  const selectedClient = clients.find(c => c.id === selectedId);

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + (i * 0.1), duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden relative" dir="rtl">
      {/* Noise Texture Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="px-6 md:px-16 max-w-[100vw] relative z-10">
        
        <div className="mb-24 mt-12 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-blue-500">
             <Zap size={14} className="fill-blue-500" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em]">Selected Case Studies</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter"
          >
            رحلة النجاح <span className="text-blue-500 italic">مع عملائنا.</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100px" }}
            className="h-1 bg-blue-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              layoutId={`card-container-${client.id}`}
              onClick={() => setSelectedId(client.id)}
              className="w-full cursor-pointer group"
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/5 group-hover:border-blue-500/30 transition-all duration-500">
                <motion.img 
                  layoutId={`image-${client.id}`}
                  src={client.image} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out" 
                  alt={client.name} 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end">
                  <motion.div layoutId={`header-${client.id}`}>
                    <span className="text-4xl block mb-4 filter drop-shadow-lg">{client.logo}</span>
                    <h3 className="text-2xl md:text-3xl font-black mb-1 text-white tracking-tighter">{client.name}</h3>
                    <p className="text-neutral-400 text-sm font-medium">{client.tagline}</p>
                  </motion.div>
                  
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xl">
                    <ArrowUpLeft size={20} className="transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedClient && (
          <div className="fixed inset-0 z-[10000] flex flex-col md:flex-row bg-[#050505] overflow-hidden h-full w-full">
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedId(null)}
              className="absolute top-6 left-6 z-[10001] w-14 h-14 bg-white/5 hover:bg-blue-600 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/10 active:scale-90 shadow-2xl"
            >
              <X size={24} />
            </motion.button>

            <motion.div 
              layoutId={`card-container-${selectedId}`}
              className="w-full h-[45vh] md:h-full md:w-1/2 relative z-10 shrink-0 border-l border-white/5"
            >
              <motion.img 
                layoutId={`image-${selectedId}`}
                src={selectedClient.image} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" 
                alt={selectedClient.name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-90" />
              
              <motion.div 
                layoutId={`header-${selectedId}`}
                className="absolute bottom-6 md:bottom-12 right-6 md:right-12 left-6"
              >
                <span className="text-6xl md:text-8xl block mb-4 filter drop-shadow-2xl">{selectedClient.logo}</span>
                <h2 className="text-4xl md:text-7xl font-black mb-2 drop-shadow-lg leading-tight tracking-tighter text-white">{selectedClient.name}</h2>
                <p className="text-lg md:text-2xl text-blue-400 font-bold italic">{selectedClient.tagline}</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-[55vh] md:h-full md:w-1/2 overflow-y-auto scrollbar-hide bg-[#050505] p-6 sm:p-10 md:p-16 lg:p-24 flex flex-col relative"
            >
               <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="max-w-xl mx-auto md:mx-0 w-full pb-20 relative z-10">
                
                <motion.div custom={1} initial="hidden" animate="visible" variants={contentVariants} className="mb-12 md:mb-16">
                  <h4 className="text-blue-500 uppercase tracking-[0.3em] text-[10px] md:text-xs font-black mb-4 md:mb-6 border-r-2 border-blue-500/20 pr-3">القصة والتحول</h4>
                  <p className="text-2xl md:text-4xl font-black leading-[1.2] text-white tracking-tight">
                    "{selectedClient.story}"
                  </p>
                </motion.div>

                <motion.div custom={2} initial="hidden" animate="visible" variants={contentVariants} className="h-px w-full bg-white/5 mb-12 md:mb-16" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 mb-12 md:mb-16">
                  <motion.div custom={3} initial="hidden" animate="visible" variants={contentVariants}>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mb-4 md:mb-6 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                      <Target size={20} />
                    </div>
                    <h4 className="text-lg font-black mb-2 md:mb-3 text-white tracking-tighter">التحدي الهيكلي</h4>
                    <p className="text-neutral-400 leading-relaxed font-medium text-sm md:text-base">{selectedClient.problem}</p>
                  </motion.div>

                  <motion.div custom={4} initial="hidden" animate="visible" variants={contentVariants}>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 md:mb-6 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                      <Lightbulb size={20} />
                    </div>
                    <h4 className="text-lg font-black mb-2 md:mb-3 text-white tracking-tighter">الحل الهندسي</h4>
                    <p className="text-neutral-400 leading-relaxed font-medium text-sm md:text-base">{selectedClient.solution}</p>
                  </motion.div>
                </div>

                <motion.div 
                  custom={5} initial="hidden" animate="visible" variants={contentVariants}
                  className="bg-blue-600/5 border border-blue-600/10 p-7 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] relative overflow-hidden shadow-2xl"
                >
                  <TrendingUp size={120} className={`absolute -left-6 -bottom-6 opacity-10 text-blue-600 hidden md:block`} />
                  <h4 className="text-blue-400 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] mb-4 relative z-10 pr-2 italic">النتيجة النهائية</h4>
                  <p className={`text-4xl md:text-6xl font-black leading-tight text-blue-500 relative z-10 tracking-tighter`}>
                    {selectedClient.result}
                  </p>
                </motion.div>

              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 768px) {
          .overflow-y-auto {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  );
}