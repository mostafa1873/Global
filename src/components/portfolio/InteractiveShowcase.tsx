"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect, useMemo } from "react"; // أضفت useMemo
import { X, ArrowUpLeft, Target, Lightbulb, TrendingUp, Zap } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "Agro Mart",
    tagline: "من شغل محلي لـ تصدير عالمي",
    logo: "AGRO",
    image: "/works/agro/case_agro.jpeg",
    story: "كانوا شغالين بالمعارف وتوريد على القد.. دلوقتي بنينا ليهم سيستم بيصدر لـ 12 دولة وهم مرتاحين.",
    problem: "العميل الأجنبي مكنش بيوصلهم، ومفيش هوية تبني ثقة وتخليهم ينافسوا برا بقلب جامد.",
    solution: "عملنا منصة تصدير متكاملة، ومحتوى بـ 3 لغات بيخاطب المستورد الأجنبي بلغته وعقليته.",
    result: "الطلبات الخارجية زادت 300% في أول 6 شهور بس.",
    themeColor: "text-blue-500",
  },
  {
    id: 2,
    name: "Ben Dodo",
    tagline: "بنغير مفهوم القهوة",
    logo: "DODO",
    image: "/works/dodo/case_dodo.jpeg",
    story: "كان براند قهوة محلي تايه في الزحمة.. حولناه لأيقونة، والناس بقت تطلب البراند بالاسم مش مجرد قهوة.",
    problem: "مفيش ارتباط بالبراند، والشكل كان تقليدي زيه زي أي كيس بن في السوق.",
    solution: "هوية بصرية 'شيك' ومختلفة بـ 3D Mockups، وتجربة شراء أونلاين سلسة جداً.",
    result: "البراند كسر الدنيا على السوشيال ميديا وبقى 'لايف ستايل'.",
    themeColor: "text-blue-500",
  },
  {
    id: 3,
    name: "عز للتصدير",
    tagline: "نقلة نوعية في التصدير",
    logo: "EZZ Export",
    image: "/works/case_ezz.jpeg",
    story: "الشغل كان معتمد على دايرة علاقات ضيقة.. عملنالهم نقلة خلت منتجاتهم مطلوبة في أكتر من 10 دول.",
    problem: "صعوبة في بناء ثقة مع المستورد الأجنبي، وغياب تام للتواجد الديجيتال الاحترافي.",
    solution: "بنينا واجهة ديجيتال فخمة بتعكس حجم الشركة الفعلي وتطمن أي مستورد يتعامل معاهم.",
    result: "حجم التصدير اتضاعف 3 مرات في أقل من سنة.",
    themeColor: "text-blue-500",
  }
];

export default function AvantGardeShowcase() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedId) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedId]);

  // استخدام useMemo لتحسين البحث عن العميل المختار
  const selectedClient = useMemo(() => clients.find(c => c.id === selectedId), [selectedId]);

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + (i * 0.05), // تسريع الأنيميشن لتقليل الإحساس باللاج
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const
      }
    })
  };

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden relative border-t border-white/5" dir="rtl">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="px-6 md:px-16 max-w-[100vw] relative z-10">

        <div className="mb-24 mt-12 flex flex-col gap-6 items-center md:items-start text-center md:text-right">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-blue-500">
            <Zap size={14} className="fill-blue-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Selected Case Studies</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-black tracking-tighter"
          >
            رحلة النجاح <span className="text-blue-500 italic">مع عملائنا.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100px" }}
            className="h-1 bg-blue-600 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              layoutId={`card-container-${client.id}`}
              onClick={() => setSelectedId(client.id)}
              className="w-full cursor-pointer group transform-gpu"
              style={{ willChange: "transform, opacity" }} 
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/5 group-hover:border-blue-500/40 transition-all duration-500 shadow-2xl shadow-black/50">
                <motion.img
                  layoutId={`image-${client.id}`}
                  src={client.image}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                  alt={client.name}
                  style={{ transform: 'translateZ(0)' }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end">
                  <motion.div layoutId={`header-${client.id}`}>
                    <span className="text-4xl block mb-4 filter drop-shadow-md">{client.logo}</span>
                    <h3 className="text-2xl md:text-3xl font-black mb-2 text-white/90 tracking-tighter">{client.name}</h3>
                    <p className="text-blue-400/80 text-sm font-medium">{client.tagline}</p>
                  </motion.div>

                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-500">
                    <ArrowUpLeft size={20} className="transform group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence> 
        {selectedId && selectedClient && (
          <div className="fixed inset-0 z-[10000] flex flex-col md:flex-row h-full w-full">
            
            {/* Background Overlay optimized */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl z-0 transform-gpu"
              onClick={() => setSelectedId(null)}
            />

            <motion.button
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute top-6 left-6 z-[10005] w-12 h-12 bg-white/10 hover:bg-white hover:text-black backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/10 active:scale-90"
            >
              <X size={20} />
            </motion.button>

            <motion.div
              layoutId={`card-container-${selectedId}`}
              className="w-full h-[45vh] md:h-full md:w-1/2 relative z-10 shrink-0 transform-gpu"
              style={{ transform: 'translateZ(0)', willChange: 'transform' }}
            >
              <motion.img
                layoutId={`image-${selectedId}`}
                src={selectedClient.image}
                className="absolute inset-0 w-full h-full object-cover"
                alt={selectedClient.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/20 md:via-black/40 to-transparent" />

              <motion.div
                layoutId={`header-${selectedId}`}
                className="absolute bottom-8 md:bottom-16 right-0 left-0 px-8 md:px-16 text-right"
              >
                <span className="text-6xl md:text-8xl block mb-4 filter drop-shadow-xl">{selectedClient.logo}</span>
                <h2 className="text-4xl md:text-7xl font-black mb-2 text-white tracking-tighter">{selectedClient.name}</h2>
                <p className="text-xl md:text-2xl text-blue-400 font-bold">{selectedClient.tagline}</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="w-full h-[55vh] -mt-6 md:mt-0 rounded-t-[2.5rem] md:rounded-none md:h-full md:w-1/2 overflow-y-auto scrollbar-hide bg-[#050505] p-8 md:p-16 lg:p-20 flex flex-col relative z-20 items-center md:items-start text-center md:text-right transform-gpu"
              style={{ transform: 'translateZ(0)' }}
            >
              <div className="max-w-xl mx-auto md:mx-0 w-full pb-20 relative z-10">
                <motion.div custom={1} initial="hidden" animate="visible" variants={contentVariants} className="mb-10 w-full">
                  <div className="inline-flex items-center mb-6">
                    <span className="bg-blue-600/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-blue-500/20">
                      التحول الكامل
                    </span>
                  </div>
                  <p className="text-2xl md:text-3xl font-light leading-[1.5] text-white/90 italic">
                    "{selectedClient.story}"
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 w-full">
                  <motion.div custom={2} initial="hidden" animate="visible" variants={contentVariants} className="flex flex-col items-center md:items-start">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-4 border border-red-500/20">
                      <Target size={18} />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">المشكلة</h4>
                    <p className="text-neutral-400 leading-relaxed font-light text-base">{selectedClient.problem}</p>
                  </motion.div>

                  <motion.div custom={3} initial="hidden" animate="visible" variants={contentVariants} className="flex flex-col items-center md:items-start">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 border border-blue-500/20">
                      <Lightbulb size={18} />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">حلّنا العبقري</h4>
                    <p className="text-neutral-400 leading-relaxed font-light text-base">{selectedClient.solution}</p>
                  </motion.div>
                </div>

                <motion.div
                  custom={4} initial="hidden" animate="visible" variants={contentVariants}
                  className="w-full bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/30 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden"
                >
                  <h4 className="text-blue-400 text-[11px] font-black uppercase tracking-[0.2em] mb-4">
                    النتيجة النهائية
                  </h4>
                  <p className="text-3xl md:text-5xl font-black leading-tight text-white tracking-tighter">
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
      `}</style>
    </div>
  );
}