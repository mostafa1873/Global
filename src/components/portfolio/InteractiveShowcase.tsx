"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { useTranslations, useLocale } from "next-intl";
import { X, ArrowUpLeft, Target, Lightbulb, Zap, MonitorSmartphone, Palette, Share2, Package, LayoutTemplate } from "lucide-react";

function ClientPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function AvantGardeShowcase() {
  const t = useTranslations("PortfolioPage.showcase");
  const locale = useLocale();
  const isRtl = locale === "ar";

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

  const staticClients = useMemo(() => [
    {
      id: 1,
      key: "ezz",
      image: "/works/case_ezz.webp",
      services: [
        "Website Development", "Digital Positioning", "Website Content Structure",
        "Visual Direction", "Product Presentation", "Social Media Designs", "User Experience Flow"
      ],
      detailsKeys: [
        { titleKey: "problem_title", contentKey: "problem_content", icon: Target, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
        { titleKey: "positioning_title", contentKey: "positioning_content", icon: Lightbulb, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
        { titleKey: "website_title", contentKey: "website_content", icon: MonitorSmartphone, color: "text-blue-600", bg: "bg-blue-600/10", border: "border-blue-600/20" },
        { titleKey: "visual_title", contentKey: "visual_content", icon: Palette, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
        { titleKey: "social_title", contentKey: "social_content", icon: Share2, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" }
      ]
    },
    {
      id: 2,
      key: "agro",
      image: "/works/agro/case_agro.webp",
      services: [
        "Branding & Visual Identity", "Website Development", "Packaging Visual Direction",
        "Digital Positioning", "Social Media Designs", "Product Presentation",
        "User Experience Flow", "Full Digital Presence Direction"
      ],
      detailsKeys: [
        { titleKey: "problem_title", contentKey: "problem_content", icon: Target, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
        { titleKey: "positioning_title", contentKey: "positioning_content", icon: Lightbulb, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
        { titleKey: "branding_title", contentKey: "branding_content", icon: LayoutTemplate, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
        { titleKey: "website_title", contentKey: "website_content", icon: MonitorSmartphone, color: "text-blue-600", bg: "bg-blue-600/10", border: "border-blue-600/20" },
        { titleKey: "packaging_title", contentKey: "packaging_content", icon: Package, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
        { titleKey: "social_title", contentKey: "social_content", icon: Share2, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" }
      ]
    }
  ], []);

  const selectedClient = useMemo(() => staticClients.find(c => c.id === selectedId), [selectedId, staticClients]);

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.03 + (i * 0.03),
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1] as const
      }
    })
  };

  return (
    <div className="min-h-dvh text-white font-sans overflow-x-hidden relative border-t border-white/5" dir={isRtl ? "rtl" : "ltr"}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/15 via-transparent to-transparent opacity-70" />

      <div className="px-4 sm:px-6 md:px-16 max-w-[100vw] relative z-10">

        {/* Section Header */}
        <div className="mb-14 mt-10 flex flex-col gap-4 md:gap-5 items-center text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[inner_0_1px_1px_rgba(255,255,255,0.05)]">
            <Zap size={12} className="fill-blue-600 text-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">{t("badge")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`leading-[1.15] text-center max-w-4xl mx-auto tracking-tight ${isRtl ? "text-2xl sm:text-4xl md:text-5xl font-black" : "text-xl sm:text-3xl md:text-4xl font-extrabold"
              }`}
          >
            {t("title_part1")}
            <span className="text-blue-600 block mt-3 font-bold">
              {t("title_part2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className={`text-white/85 text-sm md:text-base leading-relaxed max-w-2xl mt-4 mx-auto font-light ${isRtl ? "" : "tracking-wide opacity-80"
              }`}
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-600/50 to-transparent mt-6 mx-auto"
          />
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 md:gap-12 pb-24">
          {staticClients.map((client) => (
            <div
              key={client.id}
              onClick={() => setSelectedId(client.id)}
              className="w-full cursor-pointer group transform-gpu"
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[1.75rem] md:rounded-[2rem] bg-white/[0.01] border border-white/5 group-hover:border-blue-600/30 backdrop-blur-sm transition-all duration-500 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] will-change-transform">
                <motion.img
                  layoutId={`image-${client.id}`}
                  src={client.image}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  alt={t(`clients.${client.key}.name`)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/40 to-transparent transition-opacity group-hover:opacity-90 duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex justify-between items-end z-10">
                  <div className={isRtl ? "text-right" : "text-left"}>
                    <h3 className={`text-xl md:text-3xl mb-1 md:mb-2 text-white ${isRtl ? "font-black tracking-tight" : "font-extrabold tracking-wide"}`}>
                      {t(`clients.${client.key}.name`)}
                    </h3>
                    <p className="text-blue-600 text-[11px] md:text-sm font-medium">{t(`clients.${client.key}.tagline`)}</p>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-500 shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <ArrowUpLeft size={16} className={`transform transition-transform duration-300 ${isRtl ? "group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rotate-90"}`} />
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
              className="fixed inset-0 z-[9999] flex flex-col md:flex-row h-dvh w-screen overflow-hidden bg-[#070709]/95 backdrop-blur-md transform-gpu"
              dir={isRtl ? "rtl" : "ltr"}
            >
              {/* Background Canvas */}
              <div
                className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"
                onClick={() => setSelectedId(null)}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className={`absolute top-5 md:top-8 z-[9999] w-10 h-10 bg-blue-600 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 border border-blue-600 shadow-sm active:scale-95 ${isRtl ? "left-5 md:left-8" : "right-5 md:right-8"
                  }`}
              >
                <X size={16} />
              </button>

              {/* Visual Half */}
              <div className={`w-full h-[40vh] md:h-dvh md:w-5/12 relative z-10 shrink-0 overflow-hidden pointer-events-none transform-gpu ${isRtl ? "md:border-l border-white/[0.05]" : "md:border-r border-white/[0.05]"
                }`}>
                <motion.img
                  layoutId={`image-${selectedId}`}
                  src={selectedClient.image}
                  className="absolute inset-0 w-full h-full object-cover filtering-none"
                  alt={t(`clients.${selectedClient.key}.name`)}
                  transition={{ type: "spring", stiffness: 180, damping: 24 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/20 to-black/40" />

                {/* Title & Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="absolute bottom-6 left-6 right-6 md:bottom-16 md:left-12 md:right-12 text-center"
                >
                  <h2 className={`text-2xl md:text-4xl mb-2 text-white tracking-tight ${isRtl ? "font-black" : "font-black"}`}>
                    {t(`clients.${selectedClient.key}.name`)}
                  </h2>
                  <div className="inline-block px-3 py-1 border border-white/[0.1] bg-white/[0.08] rounded-full">
                    <p className={`text-[10px] text-white font-medium uppercase ${isRtl ? "tracking-normal" : "tracking-widest"}`}>
                      {t(`clients.${selectedClient.key}.tagline`)}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Text/Content Half */}
              <div
                className="w-full h-[60vh] md:h-dvh md:w-7/12 bg-transparent relative z-20 overflow-y-auto custom-scrollbar overscroll-contain transform-gpu isolate"
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="w-full min-h-full p-6 sm:p-12 md:p-16 lg:p-24 flex flex-col items-center relative"
                >
                  <div className="max-w-2xl w-full pb-24 relative z-10" dir={isRtl ? "rtl" : "ltr"}>

                    {/* Services Section - ممركز في الموبايل ومحاذي للجنب في الديسكتوب */}
                    <motion.div custom={1} initial="hidden" animate="visible" variants={contentVariants} className="mb-20 w-full flex flex-col items-center md:items-start">
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        <h4 className={`text-[14px] font-bold text-white uppercase ${isRtl ? "tracking-normal" : "tracking-[0.3em]"}`}>
                          {t("services_title")}
                        </h4>
                      </div>

                      {/* كبسولات الموبايل مرتبة وهندسية في شبكة منتظمة، وتعود فليكس انسيابي جانبي في الديسكتوب */}
                      <div className="grid grid-cols-2 gap-2 w-full max-w-md md:flex md:flex-wrap md:justify-start md:gap-2.5 px-2 md:px-0">
                        {selectedClient.services.map((service, idx) => (
                          <span key={idx} className="border-white/[0.08] bg-white/[0.02] border text-white/85 text-[10px] md:text-[11px] px-2.5 py-2 md:px-3.5 md:py-1.5 rounded-xl md:rounded-full hover:text-white hover:border-blue-600/30 transition-all duration-300 font-medium text-center shadow-sm backdrop-blur-sm truncate">
                            {service}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Timeline Structure - الخط يظهر جانبي فقط في الديسكتوب حسب اتجاه اللغة ويختفي في الموبايل */}
                    <div className={`relative w-full flex flex-col space-y-12 md:space-y-12 md:before:absolute md:before:top-2 md:before:bottom-2 md:before:w-[1px] md:before:bg-gradient-to-b md:before:from-white/10 md:before:via-white/5 md:before:to-transparent ${isRtl ? "md:before:right-3.5" : "md:before:left-3.5"}`}>
                      {selectedClient.detailsKeys.map((detail, idx) => {
                        const Icon = detail.icon;
                        const stepNumber = String(idx + 1).padStart(2, '0');
                        return (
                          <motion.div
                            key={idx}
                            custom={idx + 2}
                            initial="hidden"
                            animate="visible"
                            variants={contentVariants}
                            className={`group relative flex flex-col items-center text-center md:flex-row md:items-start w-full transition-all duration-300 ${isRtl ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}
                          >
                            {/* الأيقونة: ممركزة فوق العنوان بالموبايل كشياكة تايبوجرافية، وجانبية على الخط بالديسكتوب */}
                            <div className={`relative mb-4 mx-auto md:absolute md:top-1.5 md:mb-0 w-8 h-8 md:w-7 md:h-7 rounded-full bg-[#070709] border border-white/10 flex items-center justify-center text-blue-600 group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-500 text-[9px] shadow-md z-10 ${isRtl ? "md:-right-[3px]" : "md:-left-[3px]"}`}>
                              <Icon size={12} className="group-hover:scale-110 transition-transform" />
                            </div>

                            {/* محتوى قسم تفاصيل الخطوة */}
                            <div className="flex-1 w-full flex flex-col items-center md:items-start pb-6 border-b border-white/[0.04] group-hover:border-white/[0.08] transition-colors duration-500">
                              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                {/* الرقم مخفي تماماً في الموبايل ويظهر فقط بجانب العنوان في الديسكتوب */}
                                <span className="hidden md:inline text-[10px] text-blue-600/60 font-medium tracking-tight">
                                  {stepNumber}
                                </span>
                                <h4 className={`text-lg font-medium text-blue-600 group-hover:text-blue-600 transition-colors ${isRtl ? "font-bold" : "font-semibold"
                                  }`}>
                                  {t(`clients.${selectedClient.key}.${detail.titleKey}`)}
                                </h4>
                              </div>
                              <p className="text-white/85 font-light text-sm leading-relaxed max-w-xl group-hover:text-white transition-colors duration-500 text-center md:text-start">
                                {t(`clients.${selectedClient.key}.${detail.contentKey}`)}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Final Result Section - ممركز في الموبايل وجانبي تماماً حسب اللغة في الديسكتوب */}
                    <motion.div
                      custom={selectedClient.detailsKeys.length + 2} initial="hidden" animate="visible" variants={contentVariants}
                      className={`mt-16 w-full relative overflow-hidden rounded-4xl border border-white/[0.05] bg-gradient-to-br from-white/[0.01] to-transparent p-6 md:p-8 hover:border-blue-600/20 transition-all duration-500 flex flex-col items-center text-center md:items-start ${isRtl ? "md:text-right" : "md:text-left"}`}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

                      <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                        <div className="w-1 h-3 bg-blue-600 rounded-full" />
                        <h4 className={`text-blue-600 text-[13px] font-bold uppercase ${isRtl ? "tracking-normal" : "tracking-[0.25em]"}`}>
                          {t("final_result")}
                        </h4>
                      </div>

                      <p className={`text-base md:text-xl leading-relaxed text-white/90 text-center md:text-start max-w-xl ${isRtl ? "font-bold" : "font-medium"
                        }`}>
                        {t(`clients.${selectedClient.key}.result`)}
                      </p>
                    </motion.div>

                  </div>
                </motion.div>
              </div>

            </motion.div>
          </ClientPortal>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(37, 99, 235, 0.4); }
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: rgba(255, 255, 255, 0.1) transparent; }
      `}</style>
    </div>
  );
}