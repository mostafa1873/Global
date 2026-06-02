"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpLeft, Globe, Palette, Box, Layers } from "lucide-react";

// --- إعدادات ستايل كل قسم لوحده ---
const categoryStyles = {
    "Website": {
        gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-auto items-start",
        imageClass: "w-full h-full object-cover",
        cardClass: "relative rounded-[2.5rem] overflow-hidden"
    },
    "Branding": {
        gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[500px] lg:auto-rows-[750px]",
        imageClass: "w-full h-full object-contain",
        cardClass: "rounded-[1.5rem]"
    },
    "Social": {
        gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-2 auto-rows-auto",
        imageClass: "w-full h-full object-cover",
        cardClass: "rounded-3xl overflow-hidden group"
    },
    "packaging": {
        gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:auto-rows-[400px] items-start",
        imageClass: "w-full h-full object-cover",
        cardClass: "rounded-[2.5rem] shadow-2xl"
    },
};

const projects = [
    // --- المجموعة الأولى (القديمة زي ما هي من غير أي تغيير) ---
    { id: 1, title: "Elite Fintech", category: "Website", type: "web", image: "/works/web/ezz-web.webp", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 order-2 lg:order-none" },
    { id: 2, title: "Agro Platform", category: "Website", type: "reels", image: "/works/web/ezz-reals.mp4", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 order-1 lg:order-none" },
    { id: 3, title: "Elite Fintech", category: "Website", type: "reels", image: "/works/web/agro-reals.mp4", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 order-3 lg:order-none" },
    { id: 4, title: "Agro Platform", category: "Website", type: "web", image: "/works/web/agro-web.webp", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 order-4 lg:order-none" },

    // --- المجموعة الثانية (الجديدة في قسم منفصل) ---
    { id: 4.1, title: "New Web Wide", category: "Website", type: "web", section: "bottom", image: "/works/web/power_web.webp", gridClass: "col-span-1 md:col-span-1 lg:col-span-8" },
    { id: 4.2, title: "New Web Tall", category: "Website", type: "tall", section: "bottom", image: "/works/web/green_web.webp", gridClass: "col-span-1 md:col-span-1 lg:col-span-4" },

    { id: 5, title: "EZZ Exports", category: "Branding", image: "/works/main-c.webp", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 6, title: "Pure Land", category: "Branding", image: "/works/pure/main.webp", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 7, title: "Global Identity", category: "Branding", image: "/works/dodo/main.webp", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 8, title: "EZZ Exports", category: "Branding", image: "/works/agro/main.webp", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 9, title: "Pure Land", category: "Branding", image: "/works/main-a.webp", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 10, title: "Global Identity", category: "Branding", image: "/works/elmaka/main.webp", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },

    { id: 11, title: "Nexus Bottle", category: "packaging", image: "/works/mostafa/2.webp", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 12, title: "Eco Box", category: "packaging", image: "/works/mostafa/1.webp", gridClass: "col-span-1 lg:col-span-8 h-[250px] lg:h-full lg:row-span-1" },
    { id: 14, title: "Eco Box", category: "packaging", image: "/works/mostafa/4.webp", gridClass: "col-span-1 lg:col-span-8 h-[250px] lg:h-full lg:row-span-1" },
    { id: 13, title: "Nexus Bottle", category: "packaging", image: "/works/mostafa/3.webp", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 15, title: "Nexus Bottle", category: "packaging", image: "/works/mostafa/6.webp", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 16, title: "Eco Box", category: "packaging", image: "/works/mostafa/5.webp", gridClass: "col-span-1 lg:col-span-8 h-[250px] lg:h-full lg:row-span-1" },
    { id: 17, title: "Nexus Bottle", category: "packaging", image: "/works/dodo/cup.webp", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 18, title: "Nexus Bottle", category: "packaging", image: "/works/dodo/2.webp", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 19, title: "Nexus Bottle", category: "packaging", image: "/works/dodo/1.webp", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 19.1, title: "Nexus Bottle", category: "packaging", image: "/works/agro/agro_in1.webp", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 19.2, title: "Eco Box", category: "packaging", image: "/works/agro/agro_pac.webp", gridClass: "col-span-1 lg:col-span-8 h-[250px] lg:h-full lg:row-span-1" },
    { id: 19.3, title: "Eco Box", category: "packaging", image: "/works/agro/agro_in.webp", gridClass: "col-span-1 lg:col-span-8 h-[250px] lg:h-full lg:row-span-1" },
    { id: 19.4, title: "Nexus Bottle", category: "packaging", image: "/works/agro/agro_pac1.webp", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },

    { id: 19.5, title: "Nexus Bottle", category: "packaging", image: "/works/agro/agro_min.webp", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 19.6, title: "Eco Box", category: "packaging", image: "/works/agro/agro_all.webp", gridClass: "col-span-1 lg:col-span-8 h-[250px] lg:h-full lg:row-span-1" },
    { id: 19.7, title: "Eco Box", category: "packaging", image: "/works/pure/pure_in.webp", gridClass: "col-span-1 lg:col-span-8 h-[250px] lg:h-full lg:row-span-1" },
    { id: 19.8, title: "Nexus Bottle", category: "packaging", image: "/works/pure/pure_pac1.webp", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 19.9, title: "Nexus Bottle", category: "packaging", image: "/works/pure/pure_in1.webp", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 19.11, title: "Eco Box", category: "packaging", image: "/works/pure/pure_pac.webp", gridClass: "col-span-1 lg:col-span-8 h-[250px] lg:h-full lg:row-span-1" },
    { id: 19.12, title: "Eco Box", category: "packaging", image: "/works/pure/pure_all.webp", gridClass: "col-span-1 lg:col-span-8 h-[250px] lg:h-full lg:row-span-1" },
    { id: 19.13, title: "Nexus Bottle", category: "packaging", image: "/works/pure/pure_min.webp", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },

    { id: 20, title: "Core Render", category: "Social", image: "/works/elmaka/makaa.webp", gridClass: "col-span-1 lg:col-span-5 row-span-2 aspect-[9/16] lg:row-start-1" },
    { id: 21, title: "Neon Concept", category: "Social", image: "/works/social/w5.webp", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-1" },
    { id: 22, title: "Future Vision", category: "Social", image: "/works/social/w8.webp", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-2" },

    { id: 23, title: "Neon Concept", category: "Social", image: "/works/dodo/w6.webp", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-3 lg:col-start-1" },
    { id: 24, title: "Future Vision", category: "Social", image: "/works/dodo/w7.webp", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-4 lg:col-start-1" },
    { id: 25, title: "Core Render", category: "Social", image: "/works/pure/pure.webp", gridClass: "col-span-1 lg:col-span-5 row-span-2 aspect-[9/16] lg:row-start-3 lg:col-start-8" },

    { id: 26, title: "New 1", category: "Social", image: "/works/social/w2.webp", gridClass: "col-span-1 lg:col-span-5 row-span-2 aspect-[9/16] lg:row-start-5 lg:col-start-1" },
    { id: 27, title: "New 2", category: "Social", image: "/works/social/w9.webp", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-5 lg:col-start-6" },
    { id: 28, title: "New 3", category: "Social", image: "/works/social/w10.webp", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-6 lg:col-start-6" },

    { id: 29, title: "New 4", category: "Social", image: "/works/social/w3.webp", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-7 lg:col-start-1" },
    { id: 30, title: "New 5", category: "Social", image: "/works/social/w1.webp", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-8 lg:col-start-1" },
    { id: 31, title: "New 6", category: "Social", image: "/works/social/w11.webp", gridClass: "col-span-1 lg:col-span-5 row-span-2 aspect-[9/16] lg:row-start-7 lg:col-start-8" },
];

const categories = [
    { name: "Website", icon: Globe },
    { name: "Branding", icon: Palette },
    { name: "Social", icon: Layers },
    { name: "packaging", icon: Box },
];

export default function CustomGridPortfolio() {
    const [filter, setFilter] = useState("Website");

    // فلتر المشاريع بناءً على القسم
    const allFilteredProjects = projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

    // فصلناهم لمجموعتين: الأساسية (اللي فوق) والثانوية (اللي تحت)
    const topProjects = allFilteredProjects.filter(p => p.section !== "bottom");
    const bottomProjects = allFilteredProjects.filter(p => p.section === "bottom");

    const currentStyle = categoryStyles[filter as keyof typeof categoryStyles] || categoryStyles["Website"];

    // دالة مساعدة عشان نرندر الكارت ومكررش الكود
    const renderProjectCard = (project: any) => {
        const aspectRatioClass = filter === "Website"
            ? (project.type === 'reels' ? 'aspect-[4/3]' : project.type === 'tall' ? 'aspect-[3/4]' : 'aspect-[16/9]')
            : '';

        const isVideo = project.image.endsWith(".mp4");
        const mediaClass = project.type === "reels" || project.type === "tall"
            ? "w-full h-full object-contain"
            : currentStyle.imageClass;

        return (
            <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as const }}
                className={`relative group cursor-pointer overflow-hidden ${project.gridClass} ${currentStyle.cardClass} ${aspectRatioClass}`}
            >
                <div className="w-full h-full">
                    {isVideo ? (
                        <video src={project.image} className={mediaClass} autoPlay loop muted playsInline />
                    ) : (
                        <img src={project.image} className={mediaClass} alt={project.title} />
                    )}
                </div>

                {/* --- كبسولة زجاجية شفافة ومينيمال جداً لـ Power Scale (تثبت أسفل اليمين على الصورة) --- */}
                {filter === "Website" && project.id === 4.1 && (
                    <div className="hidden absolute bottom-5 right-50 z-20 pointer-events-none md:flex items-center gap-3 py-2.5 px-4 rounded-2xl bg-black/25 backdrop-blur-md border border-white/5 shadow-md" dir="ltr">
                        <span className="text-blue-500 font-mono text-sm font-black">03</span>
                        <div className="w-[1px] h-3.5 bg-white/10"></div>
                        <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">Agro Power</span>
                        <p className="text-white/90 text-[10px] font-normal uppercase tracking-wider">تم بناؤها بواجهة مستخدم ذكية وسريعة لتسهيل وصول المستوردين الدوليين.</p>
                    </div>
                )}

                {/* --- كبسولة زجاجية شفافة ومينيمال جداً لـ Creative Layout (تثبت أسفل اليسار على الصورة) --- */}
                {filter === "Website" && project.id === 4.2 && (
                    <div className="hidden absolute bottom-7 left-12 z-20 pointer-events-none md:flex items-center gap-3 py-2.5 px-4 rounded-2xl bg-black/25 backdrop-blur-md border border-white/5 shadow-md" dir="ltr">
                        <span className="text-blue-500 font-mono text-sm font-black">04</span>
                        <div className="w-[1px] h-3.5 bg-white/10"></div>
                        <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">Green Power</span>
                        <p className="text-white/90 text-[10px] font-normal uppercase tracking-wider">تصميم عصري يعكس نضارة المنتجات العالمية.</p>
                    </div>
                )}
            </motion.div>
        );
    };

    return (
        <section className="py-10 border-t border-white/5 px-6 lg:px-16 bg-transparent relative" dir="rtl">
            <div className="max-w-[1600px] mx-auto relative">

                {/* --- النصوص الجانبية الخاصة بقسم الموقع الأساسي (علوي) --- */}
                <AnimatePresence>
                    {filter === "Website" && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="hidden lg:flex flex-col absolute left-10 top-[39%] -translate-y-1/2 w-[320px] z-0 pointer-events-none"
                            >
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-blue-600 font-mono text-xs font-black tracking-tighter">01</span>
                                    <div className="h-[1px] w-8 bg-blue-600/30"></div>
                                    <span className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">Project Architecture</span>
                                </div>
                                <h3 className="text-white text-3xl font-black mb-6 leading-none uppercase">
                                    EZZ <br />
                                    <span className="text-blue-600 not-italic">Export.</span>
                                </h3>
                                <div className="relative group">
                                    <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-600 via-blue-600/20 to-transparent"></div>
                                    <p className="text-white/50 text-[13px] leading-relaxed font-light pl-2">
                                        طورنا منصة "عز" بتقنيات <span className="text-white font-medium">حديثة</span> لضمان سرعة فائقة تناسب معايير السوق الأوروبي.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="hidden lg:flex flex-col absolute right-10 top-[65.8%] -translate-y-1/2 w-[320px] z-0 pointer-events-none text-right"
                            >
                                <div className="flex items-baseline gap-2 mb-2 justify-end">
                                    <span className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">React Architecture</span>
                                    <div className="h-[1px] w-8 bg-blue-600/30"></div>
                                    <span className="text-blue-600 font-mono text-xs font-black tracking-tighter">02</span>
                                </div>
                                <h3 className="text-white text-3xl font-black mb-6 leading-none tracking-tighter uppercase italic text-left" dir="ltr">
                                    AGRO <br />
                                    <span className="text-blue-600 not-italic">Mart.</span>
                                </h3>
                                <div className="relative group text-right">
                                    <div className="absolute -right-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-600 via-blue-600/20 to-transparent"></div>
                                    <p className="text-white/50 text-[13px] leading-relaxed font-light pr-2">
                                        في "أجرو مارت" استغلينا قوة <span className="text-white font-medium">أحدث التقنيات الذكية</span> لخلق واجهة تسوق ذكية.
                                    </p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* --- الهيدر والوصف --- */}
                <div className="relative mb-12 flex flex-col items-center justify-center text-center gap-6 max-w-4xl mx-auto px-4">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-600/[0.02] blur-[100px] rounded-full pointer-events-none -z-10" />

                    <div className="space-y-4 relative z-20">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 40 }}
                            viewport={{ once: true }}
                            className="h-[2px] bg-blue-600 mx-auto mb-4"
                        />

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                            مشاريع نفذناها بعناية <br className="hidden sm:block" />
                            لدعم <span className="text-blue-600">الحضور الرقمي</span>
                        </h2>

                        <p className="text-sm md:text-base text-white/65 font-light leading-relaxed max-w-2xl mx-auto pt-1">
                            نركز في كل مشروع على تقديم حل رقمي منظم يخدم هدفًا واضحًا، سواء كان تحسين صورة الشركة، عرض الخدمات والمنتجات, تسهيل التواصل مع العملاء، أو بناء تجربة استخدام أكثر وضوحًا.
                        </p>
                    </div>
                </div>

                {/* --- كبسولات الفلتر --- */}
                <div className="w-full max-w-5xl mx-auto px-4 mb-16 relative z-20">
                    <div className="w-full flex justify-center">
                        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-2xl md:rounded-full backdrop-blur-md max-w-full">
                            {categories.map((cat) => {
                                const isActive = filter === cat.name;
                                return (
                                    <button
                                        key={cat.name}
                                        onClick={() => setFilter(cat.name)}
                                        className={`
                                          relative flex items-center justify-center gap-2 px-3 py-2 rounded-xl md:rounded-full 
                                          text-xs sm:text-sm font-black tracking-wider uppercase select-none outline-none
                                          transition-all duration-200 ease-out border
                                          w-[110px] sm:w-[130px] text-center shrink-0
                                          ${isActive
                                                ? "bg-blue-600 border-blue-500 text-white shadow-[0_4px_20px_rgba(37,99,235,0.35)] scale-[1.02]"
                                                : "bg-white/[0.02] border-white/[0.05] text-white/50 hover:text-white hover:bg-white/[0.08] hover:border-white/10"
                                            }
                                        `}
                                    >
                                        <cat.icon
                                            size={14}
                                            className={`transition-transform duration-300 ${isActive ? "text-white scale-110 animate-pulse" : "text-white/40 group-hover:rotate-6"}`}
                                        />
                                        <span className="truncate">{cat.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* الـ Grid العلوي الأساسي */}
                <motion.div layout className={`${currentStyle.gridContainer} relative z-10`}>
                    <AnimatePresence mode="popLayout">
                        {topProjects.map((project) => renderProjectCard(project))}
                    </AnimatePresence>
                </motion.div>

                {/* الـ Grid السفلي المنفصل النظيف 100% */}
                <AnimatePresence>
                    {bottomProjects.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="pt-6 relative z-10"
                        >
                            {/* الـ Grid الفعلي للمشاريع السفلية */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                <AnimatePresence mode="popLayout">
                                    {bottomProjects.map((project) => renderProjectCard(project))}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}