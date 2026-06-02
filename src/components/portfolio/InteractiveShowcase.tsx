"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { X, ArrowUpLeft, Target, Lightbulb, Zap, MonitorSmartphone, Palette, Share2, Package, LayoutTemplate } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "Ezz Export",
    tagline: "Agricultural Export / Fresh & Frozen Produce",
    logo: "EZZ Export",
    image: "/works/case_ezz.webp",
    services: [
      "Website Development", "Digital Positioning", "Website Content Structure", 
      "Visual Direction", "Product Presentation", "Social Media Designs", "User Experience Flow"
    ],
    details: [
      {
        title: "المشكلة",
        content: "كانت Ezz Export بحاجة إلى حضور رقمي أكثر احترافية يعكس طبيعة نشاطها كشركة تعمل في مجال تصدير المنتجات الزراعية، خاصة أن طبيعة السوق المستهدف تعتمد على الثقة، وضوح المعلومات، وجودة عرض المنتجات. كان التحدي الأساسي هو تقديم الشركة بصورة منظمة أمام العملاء والشركاء المحتملين، مع عرض المنتجات والخدمات بطريقة تساعد الزائر على فهم طبيعة الشركة والتواصل معها بسهولة.",
        icon: Target,
        color: "text-red-400", bg: "bg-red-500/5", border: "border-red-500/10"
      },
      {
        title: "الـ Positioning",
        content: "تم توجيه الحضور الرقمي لـ Ezz Export ليعكس صورة شركة تصدير موثوقة، منظمة، وتركز على الجودة والتعامل الاحترافي مع الأسواق الخارجية. اعتمد الاتجاه العام على إبراز الشركة ككيان يعمل في قطاع الـB2B والتصدير الزراعي، مع التركيز على وضوح المنتجات، جدية التواصل، وسهولة الوصول إلى المعلومات الأساسية التي يحتاجها العميل المحتمل.",
        icon: Lightbulb,
        color: "text-yellow-400", bg: "bg-yellow-500/5", border: "border-yellow-500/10"
      },
      {
        title: "Website",
        content: "تم تطوير موقع إلكتروني يساعد الشركة على عرض منتجاتها وخدماتها بشكل واضح ومنظم، مع تصميم صفحات تسهل على الزائر التعرف على طبيعة النشاط، المنتجات المتاحة، وطريقة التواصل مع فريق الشركة. ركز الموقع على تقديم تجربة تصفح بسيطة ومباشرة، مع تنظيم المحتوى بطريقة تخدم قرار العميل المحتمل وتمنحه انطباعًا أكثر احترافية عن الشركة.",
        icon: MonitorSmartphone,
        color: "text-blue-400", bg: "bg-blue-500/5", border: "border-blue-500/10"
      },
      {
        title: "Visual Direction",
        content: "تم العمل على اتجاه بصري مناسب لطبيعة قطاع التصدير الزراعي، من خلال الاعتماد على صور المنتجات، ألوان مرتبطة بالجودة والطبيعة، وطريقة عرض منظمة تعكس الثقة والاحترافية. الهدف من الاتجاه البصري كان إبراز المنتجات بشكل واضح، وتقديم الشركة بصورة تناسب الأسواق الخارجية والعملاء في قطاع الأغذية والزراعة.",
        icon: Palette,
        color: "text-purple-400", bg: "bg-purple-500/5", border: "border-purple-500/10"
      },
      {
        title: "Social Media",
        content: "تم تنفيذ مجموعة من التصميمات والمحتوى البصري للسوشيال ميديا بما يتماشى مع طبيعة نشاط الشركة، مع التركيز على عرض المنتجات، بناء الثقة، وتحسين شكل الظهور الرقمي أمام العملاء المحتملين. تم الاعتماد على تصميمات منظمة تساعد على تقديم الشركة ومنتجاتها بطريقة أكثر احترافية وملاءمة لطبيعة السوق.",
        icon: Share2,
        color: "text-pink-400", bg: "bg-pink-500/5", border: "border-pink-500/10"
      }
    ],
    result: "أصبح لدى Ezz Export حضور رقمي أكثر وضوحًا واحترافية، يساعد الشركة على تقديم نفسها بشكل أفضل أمام العملاء والشركاء المحتملين. كما ساعد الموقع والمحتوى البصري على تنظيم طريقة عرض المنتجات، تحسين تجربة الزائر، وتسهيل التواصل مع الشركة من خلال واجهة رقمية أكثر ثقة وتنظيمًا.",
  },
  {
    id: 2,
    name: "Agro Mart",
    tagline: "Agricultural Export / Packaged Food Products",
    logo: "AGRO",
    image: "/works/agro/case_agro.webp",
    services: [
      "Branding & Visual Identity", "Website Development", "Packaging Visual Direction", 
      "Digital Positioning", "Social Media Designs", "Product Presentation", 
      "User Experience Flow", "Full Digital Presence Direction"
    ],
    details: [
      {
        title: "المشكلة",
        content: "كانت Agro Mart بحاجة إلى بناء حضور رقمي وبصري متكامل يساعدها على الظهور كشركة زراعية حديثة قادرة على تقديم منتجاتها بصورة احترافية للسوق المحلي والخارجي. التحدي لم يكن في تصميم موقع أو شعار فقط، بل في بناء صورة كاملة للعلامة التجارية، تشمل الهوية البصرية، طريقة عرض المنتجات، الموقع الإلكتروني، والمحتوى المستخدم في التواصل الرقمي.",
        icon: Target,
        color: "text-red-400", bg: "bg-red-500/5", border: "border-red-500/10"
      },
      {
        title: "الـ Positioning",
        content: "تم توجيه Agro Mart كعلامة تجارية زراعية حديثة تقدم منتجاتها بطريقة منظمة واحترافية، مع التركيز على الثقة، الجودة، والارتباط المباشر بالمصدر الزراعي. اعتمد الـPositioning على إبراز فكرة أن الشركة تقدم منتجات زراعية بصورة مناسبة للأسواق التي تبحث عن مورد واضح، منظم، وسهل التواصل معه.",
        icon: Lightbulb,
        color: "text-yellow-400", bg: "bg-yellow-500/5", border: "border-yellow-500/10"
      },
      {
        title: "Branding",
        content: "تم تطوير هوية بصرية تساعد Agro Mart على بناء شكل واضح ومميز، بداية من الشعار والألوان، وصولًا إلى اتجاه بصري يمكن تطبيقه على الموقع، المنتجات، والتصميمات الرقمية. الهدف من الهوية كان بناء انطباع يعكس طبيعة النشاط الزراعي، مع الحفاظ على شكل حديث ومنظم يناسب طبيعة الشركات العاملة في مجال المنتجات الغذائية والزراعية.",
        icon: LayoutTemplate,
        color: "text-indigo-400", bg: "bg-indigo-500/5", border: "border-indigo-500/10"
      },
      {
        title: "Website",
        content: "تم تصميم وتطوير موقع إلكتروني يعرض الشركة ومنتجاتها بشكل واضح، مع تنظيم الصفحات بطريقة تساعد الزائر على فهم طبيعة النشاط، استكشاف المنتجات، والوصول إلى معلومات التواصل بسهولة. ركز الموقع على تجربة استخدام بسيطة، عرض بصري قوي للمنتجات، وهيكل محتوى يساعد على تقديم الشركة بشكل احترافي أمام العملاء المحتملين.",
        icon: MonitorSmartphone,
        color: "text-blue-400", bg: "bg-blue-500/5", border: "border-blue-500/10"
      },
      {
        title: "Packaging & Product Presentation",
        content: "تم العمل على اتجاه بصري لعرض المنتجات والتغليف بشكل يعكس جودة المنتج ويساعد على تقديمه بصورة أكثر جاذبية واحترافية. تم التركيز على إبراز المنتجات بطريقة منظمة وواضحة، مع تصميمات تعزز من قيمة العلامة التجارية وتساعدها على الظهور بشكل أكثر تميزًا داخل السوق.",
        icon: Package,
        color: "text-orange-400", bg: "bg-orange-500/5", border: "border-orange-500/10"
      },
      {
        title: "Social Media",
        content: "تم تنفيذ تصميمات سوشيال ميديا متوافقة مع الهوية البصرية للعلامة التجارية، بهدف بناء حضور رقمي متناسق يعرض المنتجات، يدعم الثقة، ويحافظ على شكل احترافي موحد عبر المنصات. المحتوى البصري تم توجيهه ليكون مناسبًا لطبيعة المنتجات الزراعية والغذائية، مع التركيز على الوضوح, الجودة، وسهولة فهم الرسالة.",
        icon: Share2,
        color: "text-pink-400", bg: "bg-pink-500/5", border: "border-pink-500/10"
      }
    ],
    result: "أصبح لدى Agro Mart حضور رقمي وبصري متكامل، يبدأ من الهوية البصرية ويمتد إلى الموقع الإلكتروني، عرض المنتجات، وتصميمات السوشيال ميديا. ساعد المشروع على تقديم العلامة التجارية بصورة أكثر احترافية وتنظيمًا، وجعل تجربة العميل في التعرف على الشركة ومنتجاتها أوضح وأكثر ثقة.",
  }
];

function ClientPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function AvantGardeShowcase() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [selectedId]);

  const selectedClient = useMemo(() => clients.find(c => c.id === selectedId), [selectedId]);

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.03 + (i * 0.03), // تقليل الديلي لتسريع الاستجابة وحل الـ Lag
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1] as const
      }
    })
  };

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden relative border-t border-white/5" dir="rtl">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-70" />

      <div className="px-4 sm:px-6 md:px-16 max-w-[100vw] relative z-10">

        {/* Section Header - Centered Perfectly */}
        <div className="mb-16 md:mb-24 mt-16 md:mt-20 flex flex-col gap-4 md:gap-5 items-center text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm">
            <Zap size={12} className="fill-blue-500 text-blue-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-400">Featured Case Studies</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.2]"
          >
            مشاريع متكاملة تعكس طريقة تفكيرنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 block mt-2">في بناء الحضور الرقمي</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-neutral-400 text-sm md:text-lg leading-relaxed max-w-2xl mt-1 md:mt-2 font-light"
          >
            في هذا القسم نعرض نماذج من المشاريع التي عملنا عليها بشكل متكامل، بداية من فهم طبيعة النشاط وتحديد اتجاه الظهور الرقمي، وصولًا إلى تنفيذ الموقع الإلكتروني، المحتوى البصري، وتجربة المستخدم.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-3"
          />
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 md:gap-12 pb-24 md:pb-32">
          {clients.map((client) => (
            <div
              key={client.id}
              onClick={() => setSelectedId(client.id)}
              className="w-full cursor-pointer group transform-gpu"
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[1.75rem] md:rounded-[2rem] bg-[#09090b] border border-white/5 group-hover:border-blue-500/30 transition-all duration-500 shadow-2xl shadow-black/80 will-change-transform">
                <motion.img
                  layoutId={`image-${client.id}`}
                  src={client.image}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  alt={client.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/30 to-transparent transition-opacity group-hover:opacity-90 duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex justify-between items-end z-10">
                  <div className="text-right">
                    <h3 className="text-xl md:text-3xl font-black mb-1 md:mb-2 text-white tracking-tight">{client.name}</h3>
                    <p className="text-blue-600/90 text-[11px] md:text-sm font-medium font-mono">{client.tagline}</p>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-500 shrink-0">
                    <ArrowUpLeft size={16} className="transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedId && selectedClient && (
          <ClientPortal>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[999999] flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-black/40 backdrop-blur-md transform-gpu"
              dir="rtl"
            >
              <div
                className="absolute inset-0 bg-[#020204]/95 z-0"
                onClick={() => setSelectedId(null)}
              />

              {/* زر الإغلاق المتطور عائم في الأعلى */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 left-4 md:top-6 left-6 z-[10005] w-10 h-10 md:w-11 md:h-11 bg-neutral-900/90 hover:bg-white hover:text-black backdrop-blur-xl rounded-full flex items-center justify-center text-white/80 transition-all border border-white/5 hover:border-white shadow-xl active:scale-95"
              >
                <X size={18} />
              </button>

              {/* النصف الأيمن: صورة المشروع واللوجو بتدرج سينمائي عالي الجودة */}
              <div className="w-full h-[40vh] md:h-screen md:w-1/2 lg:w-5/12 relative z-10 shrink-0 overflow-hidden pointer-events-none border-b md:border-b-0 md:border-l border-white/5 transform-gpu">
                <motion.img
                  layoutId={`image-${selectedId}`}
                  src={selectedClient.image}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={selectedClient.name}
                  transition={{ type: "spring", stiffness: 220, damping: 26 }}
                />
                {/* تدرج ظلي ناعم وسينمائي متوازن */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                {/* الكارد الزجاجي في المنتصف بالظبط مع بلور خفيف للأداء العالي وتنسيق هيدروليكي متوازن */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="absolute bottom-4 left-4 right-4 md:bottom-12 md:left-8 md:right-8 p-5 md:p-8 text-center bg-black/40 backdrop-blur-md border border-white/10 rounded-[1.25rem] md:rounded-[1.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] will-change-transform"
                >
                  <h2 className="text-xl md:text-4xl font-black mb-1 md:mb-2 text-white tracking-tight">
                    {selectedClient.name}
                  </h2>
                  <p className="text-[11px] md:text-sm text-neutral-200 font-medium tracking-wide">
                    {selectedClient.tagline}
                  </p>
                </motion.div>
              </div>

              {/* النصف الأيسر: لوحة تصفح البيانات الفخمة مجهزة ضد مشاكل السكرول */}
              <div
                className="w-full h-[60vh] md:h-screen md:w-1/2 lg:w-7/12 bg-[#040406] relative z-20 overflow-y-auto custom-scrollbar overscroll-contain bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-neutral-900/20 via-transparent to-transparent transform-gpu"
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full min-h-full p-5 sm:p-10 md:p-12 lg:p-16 flex flex-col items-start text-right"
                >
                  <div className="max-w-3xl w-full pb-16 md:pb-20 relative z-10">

                    {/* خدمات العميل المُعاد تصميمها برقي */}
                    <motion.div custom={1} initial="hidden" animate="visible" variants={contentVariants} className="mb-10 md:mb-14 w-full">
                      <h4 className="text-[11px] font-bold text-neutral-500 mb-3 md:mb-4 uppercase tracking-widest font-mono border-b border-white/5 pb-2">الخدمات المُقدمة</h4>
                      <div className="flex flex-wrap gap-1.5 md:gap-2 justify-start">
                        {selectedClient.services.map((service, idx) => (
                          <span key={idx} className="bg-neutral-900/60 border border-white/5 hover:border-blue-500/20 text-neutral-300 hover:text-white text-[10px] md:text-[11px] font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-xl transition-colors duration-300">
                            {service}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* تفاصيل دراسة الحالة مرتبة داخل Bento Grid فخم */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10 md:mb-14 w-full">
                      {selectedClient.details.map((detail, idx) => {
                        const Icon = detail.icon;
                        return (
                          <motion.div
                            key={idx}
                            custom={idx + 2}
                            initial="hidden"
                            animate="visible"
                            variants={contentVariants}
                            className="group flex flex-col items-start bg-neutral-950/40 border border-white/5 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-white/10 hover:bg-neutral-950/80 will-change-transform"
                          >
                            <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl ${detail.bg} ${detail.color} flex items-center justify-center mb-3 md:mb-4 border ${detail.border} shadow-inner`}>
                              <Icon size={16} />
                            </div>
                            <h4 className="text-base md:text-lg font-bold mb-1.5 md:mb-2 text-white/90 group-hover:text-white transition-colors">{detail.title}</h4>
                            <p className="text-neutral-400 leading-relaxed font-light text-xs md:text-sm">{detail.content}</p>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* قسم النتيجة النهائية الحاسم والمبهر بملامح بريميوم */}
                    <motion.div
                      custom={selectedClient.details.length + 2} initial="hidden" animate="visible" variants={contentVariants}
                      className="w-full bg-gradient-to-br from-blue-950/20 via-neutral-950/40 to-neutral-950/20 border border-blue-500/15 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] relative overflow-hidden shadow-2xl"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
                      <h4 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.25em] mb-3 md:mb-4 font-mono">
                        النتيجة النهائية
                      </h4>
                      <p className="text-base md:text-xl font-bold leading-relaxed text-white/90 tracking-tight">
                        {selectedClient.result}
                      </p>
                    </motion.div>

                  </div>
                </motion.div>
              </div>

            </motion.div>
          </ClientPortal>
        )}
      </AnimatePresence>

      {/* الستايل المخصص المتوافق مع الفخامة الداكنة وسلاسة الحركة */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #040406; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e40af; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #2563eb; }
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #1e40af #040406; }
      `}</style>
    </div>
  );
}