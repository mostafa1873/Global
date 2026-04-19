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
    { id: 1, title: "Elite Fintech", category: "Website", type: "web", image: "/works/ezz-web.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 order-2 lg:order-none" },
    { id: 2, title: "Agro Platform", category: "Website", type: "reels", image: "/works/ezz-reals.mp4", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 order-1 lg:order-none" },
    { id: 3, title: "Elite Fintech", category: "Website", type: "reels", image: "/works/agro-reals.mp4", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 order-3 lg:order-none" },
    { id: 4, title: "Agro Platform", category: "Website", type: "web", image: "/works/agro/agro-web.jpg", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 order-4 lg:order-none" },

    // --- المجموعة الثانية (الجديدة في قسم منفصل) ---
    // ضفنا هنا section: "bottom" عشان نفصلهم تحت
    { id: 4.1, title: "New Web Wide", category: "Website", type: "web", section: "bottom", image: "/works/power_web.jpeg", gridClass: "col-span-1 md:col-span-1 lg:col-span-8" },
    { id: 4.2, title: "New Web Tall", category: "Website", type: "tall", section: "bottom", image: "/works/green_web.jpeg", gridClass: "col-span-1 md:col-span-1 lg:col-span-4" },

    { id: 5, title: "EZZ Exports", category: "Branding", image: "/works/main-c.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 6, title: "Pure Land", category: "Branding", image: "/works/pure/main.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 7, title: "Global Identity", category: "Branding", image: "/works/dodo/main.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 8, title: "EZZ Exports", category: "Branding", image: "/works/agro/main.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 9, title: "Pure Land", category: "Branding", image: "/works/main-a.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 10, title: "Global Identity", category: "Branding", image: "/works/elmaka/main.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },

    { id: 11, title: "Nexus Bottle", category: "packaging", image: "/works/mostafa/2.jpeg", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 12, title: "Eco Box", category: "packaging", image: "/works/mostafa/1.jpeg", gridClass: "col-span-1 lg:col-span-8 h-[250px] lg:h-full lg:row-span-1" },
    { id: 14, title: "Eco Box", category: "packaging", image: "/works/mostafa/4.jpeg", gridClass: "col-span-1 lg:col-span-8 h-[250px] lg:h-full lg:row-span-1" },
    { id: 13, title: "Nexus Bottle", category: "packaging", image: "/works/mostafa/3.jpeg", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 15, title: "Nexus Bottle", category: "packaging", image: "/works/mostafa/6.jpeg", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 16, title: "Eco Box", category: "packaging", image: "/works/mostafa/5.jpeg", gridClass: "col-span-1 lg:col-span-8 h-[250px] lg:h-full lg:row-span-1" },
    { id: 17, title: "Nexus Bottle", category: "packaging", image: "/works/dodo/cup.jpeg", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 18, title: "Nexus Bottle", category: "packaging", image: "/works/dodo/2.jpeg", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
    { id: 19, title: "Nexus Bottle", category: "packaging", image: "/works/dodo/1.jpeg", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },

    { id: 20, title: "Core Render", category: "Social", image: "/works/elmaka/makaa.jpeg", gridClass: "col-span-1 lg:col-span-5 row-span-2 aspect-[9/16] lg:row-start-1" },
    { id: 21, title: "Neon Concept", category: "Social", image: "/works/ezz_social1.jpeg", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-1" },
    { id: 22, title: "Future Vision", category: "Social", image: "/works/ezz_social2.jpeg", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-2" },

    { id: 23, title: "Neon Concept", category: "Social", image: "/works/dodo/dodo_social1.jpeg", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-3 lg:col-start-1" },
    { id: 24, title: "Future Vision", category: "Social", image: "/works/dodo/dodo_social2.jpeg", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-4 lg:col-start-1" },
    { id: 25, title: "Core Render", category: "Social", image: "/works/pure/pure.jpeg", gridClass: "col-span-1 lg:col-span-5 row-span-2 aspect-[9/16] lg:row-start-3 lg:col-start-8" },
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
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={`relative group cursor-pointer overflow-hidden ${project.gridClass} ${currentStyle.cardClass} ${aspectRatioClass}`}
            >
                <div className="w-full h-full">
                    {isVideo ? (
                        <video src={project.image} className={mediaClass} autoPlay loop muted playsInline />
                    ) : (
                        <img src={project.image} className={mediaClass} alt={project.title} />
                    )}
                </div>
            </motion.div>
        );
    };

    return (
        <section className="py-10 border-t border-white/5 px-6 lg:px-16 bg-transparent relative" dir="rtl">
            <div className="max-w-[1600px] mx-auto relative">
                
                {/* --- النصوص الجانبية الخاصة بقسم الموقع --- */}
                <AnimatePresence>
                    {filter === "Website" && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="hidden lg:flex flex-col absolute left-10 top-[37.5%] -translate-y-1/2 w-[320px] z-0 pointer-events-none"
                            >
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-blue-600 font-mono text-xs font-black tracking-tighter">01</span>
                                    <div className="h-[1px] w-8 bg-blue-600/30"></div>
                                    <span className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">Project Architecture</span>
                                </div>
                                <h3 className="text-white text-3xl font-black mb-6 leading-none tracking-tighter uppercase italic">
                                    Next.js <br />
                                    <span className="text-blue-600 not-italic">Engine.</span>
                                </h3>
                                <div className="relative group">
                                    <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-600 via-blue-600/20 to-transparent"></div>
                                    <p className="text-white/50 text-[13px] leading-relaxed font-light pl-2">
                                        طورنا منصة "عز" بتقنيات <span className="text-white font-medium">Next.js</span> لضمان سرعة فائقة تناسب معايير السوق الأوروبي.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="hidden lg:flex flex-col absolute right-10 top-[65%] -translate-y-1/2 w-[320px] z-0 pointer-events-none text-right"
                            >
                                <div className="flex items-baseline gap-2 mb-2 justify-end">
                                    <span className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">React Architecture</span>
                                    <div className="h-[1px] w-8 bg-blue-600/30"></div>
                                    <span className="text-blue-600 font-mono text-xs font-black tracking-tighter">02</span>
                                </div>
                                <h3 className="text-white text-3xl font-black mb-6 leading-none tracking-tighter uppercase italic text-left" dir="ltr">
                                    Agro <br />
                                    <span className="text-blue-600 not-italic">Interface.</span>
                                </h3>
                                <div className="relative group text-right">
                                    <div className="absolute -right-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-600 via-blue-600/20 to-transparent"></div>
                                    <p className="text-white/50 text-[13px] leading-relaxed font-light pr-2">
                                        في "أجرو مارت" استغلينا قوة <span className="text-white font-medium">React</span> لخلق واجهة تسوق ذكية.
                                    </p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* --- الهيدر والأزرار --- */}
                <div className="relative mb-12 flex flex-col items-center justify-center text-center gap-10">
                    <div className="relative z-20">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} className="h-[2px] bg-blue-600 mx-auto mb-6" />
                        <h2 className="text-6xl md:text-8xl lg:text-[110px] font-black text-white tracking-tighter leading-tight">
                            جزء من <span className="text-blue-600">شغلنا.</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 bg-white/[0.02] p-2 rounded-[2.5rem] border border-white/5 backdrop-blur-sm z-20 relative">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setFilter(cat.name)}
                                className={`relative flex items-center gap-3 px-8 py-3 rounded-full text-[11px] font-black transition-all duration-500 overflow-hidden group ${filter === cat.name ? "text-white" : "text-white/40 hover:text-white"}`}
                            >
                                {filter === cat.name && (
                                    <motion.div layoutId="activeTab" className="absolute inset-0 bg-blue-600 -z-10 shadow-lg shadow-blue-600/20" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                                )}
                                <cat.icon size={14} className={filter === cat.name ? "animate-pulse" : "group-hover:rotate-12 transition-transform"} />
                                <span className="tracking-widest uppercase">{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>


                <motion.div layout className={`${currentStyle.gridContainer} relative z-10`}>
                    <AnimatePresence mode="popLayout">
                        {topProjects.map((project) => renderProjectCard(project))}
                    </AnimatePresence>
                </motion.div>

                <AnimatePresence>
                    {bottomProjects.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className=" pt-5 relative z-10"
                        >
                            {/* ده الـ Grid المنفصل الخاص بالجزء الجديد */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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