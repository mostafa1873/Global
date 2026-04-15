"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpLeft, Globe, Palette, Box, Layers } from "lucide-react";

// --- إعدادات ستايل كل قسم لوحده (هنا سر اللعبة) ---
const categoryStyles = {
    "Website": {
        // كونتينر الجريد: صفوف بارتفاع 320 بيكسل
        gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 auto-rows-[320px]",
        // ستايل الصورة: زوم خفيف 110%
        imageClass: "w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110",
        // ستايل الكارد نفسه (عشان لو حابب تغير الـ Border radius لكل قسم)
        cardClass: "rounded-[2.5rem]"
    },
    "Branding": {
        // الـ auto-rows في الموبايل خليناها 500px عشان الصور تظهر ومختفية
        // وفي الكمبيوتر (lg) سيبناها 750px زي ما إنت عاوز بالظبط
        gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[500px] lg:auto-rows-[750px]",

        // هنا الصور هتملا الارتفاع المتاح (h-full) مع الحفاظ على أبعادها (object-contain)
        imageClass: "w-full h-full object-contain",

        cardClass: "rounded-[1.5rem]"
    },
    "Visuals": {
        gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2 auto-rows-[400px]",
        imageClass: "w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-125 opacity-90 group-hover:opacity-100",
        cardClass: "rounded-3xl"
    },
    "packaging": {
        // الـ 400px هنا هي اللي هتخلي الـ 3/4 يظبط لما ندمج الصفوف
        gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[400px]",

        // استخدمنا object-cover مع center عشان تفاصيل العبوة تبان فخمة
        imageClass: "w-full h-full object-cover",

        cardClass: "rounded-[2.5rem] shadow-2xl"
    },
};

const projects = [
    // Website (يعتمد على إعدادات Website فوق)
    { id: 1, title: "Elite Fintech", category: "Website", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 lg:row-span-2" },
    { id: 2, title: "Agro Platform", category: "Website", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-2" },
    { id: 3, title: "Elite Fintech", category: "Website", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-2" },
    { id: 4, title: "Agro Platform", category: "Website", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 lg:row-span-2" },

    // Branding (يعتمد على إعدادات Branding فوق)
    { id: 5, title: "EZZ Exports", category: "Branding", image: "/works/main-c.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 6, title: "Pure Land", category: "Branding", image: "/works/pure/main.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 7, title: "Global Identity", category: "Branding", image: "/works/dodo/main.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 8, title: "EZZ Exports", category: "Branding", image: "/works/agro/main.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 9, title: "Pure Land", category: "Branding", image: "/works/main-a.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 10, title: "Global Identity", category: "Branding", image: "/works/elmaka/main.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },

    // Packaging 
    { id: 11, title: "Nexus Bottle", category: "packaging", image: "/works/dodo/cup.jpeg", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 12, title: "Eco Box", category: "packaging", image: "/works/pure/Stationery_mockup_for_202604131554.jpeg", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 lg:row-span-1" },

    { id: 14, title: "Eco Box", category: "packaging", image: "/works/agro/paper.jpeg", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 lg:row-span-1" },
    { id: 13, title: "Nexus Bottle", category: "packaging", image: "/works/agro/iqf.jpeg", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },

    { id: 15, title: "Nexus Bottle", category: "packaging", image: "/works/agro/in_brine.jpeg", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 16, title: "Eco Box", category: "packaging", image: "/works/agro/paper.jpeg", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 lg:row-span-1" },

    // Visuals
    { id: 17, title: "Core Render", category: "Visuals", image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-6 lg:row-span-1" },
    { id: 18, title: "Neon Concept", category: "Visuals", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-6 lg:row-span-1" },
];

const categories = [
    { name: "Website", icon: Globe },
    { name: "Branding", icon: Palette },
    { name: "Visuals", icon: Layers },
    { name: "packaging", icon: Box },
];

export default function CustomGridPortfolio() {
    const [filter, setFilter] = useState("Website");
    const filteredProjects = projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

    // بنجيب الإعدادات الخاصة بالقسم المختار، ولو مفيش بنرجعه للـ Website كديفولت
    const currentStyle = categoryStyles[filter] || categoryStyles["Website"];

    return (
        <section className="py-10 border-t border-white/5 px-6 lg:px-16 bg-transparent" dir="rtl">
            <div className="max-w-[1600px] mx-auto">

                {/* --- Header --- */}
                <div className="relative mb-12 flex flex-col items-center justify-center text-center gap-10">
                    <div className="relative">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 60 }}
                            className="h-[2px] bg-blue-600 mx-auto mb-6"
                        />
                        <h2 className="text-6xl md:text-8xl lg:text-[110px] font-black text-white tracking-tighter leading-tight">
                            جزء من <span className="text-blue-600">شغلنا.</span>
                        </h2>
                        <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.6em] mt-4">
                            Creative Portfolio 2026 Edition
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 bg-white/[0.02] p-2 rounded-[2.5rem] border border-white/5 backdrop-blur-sm">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setFilter(cat.name)}
                                className={`relative flex items-center gap-3 px-8 py-3 rounded-full text-[11px] font-black transition-all duration-500 overflow-hidden group ${filter === cat.name
                                    ? "text-white"
                                    : "text-white/40 hover:text-white"
                                    }`}
                            >
                                {filter === cat.name && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-blue-600 -z-10 shadow-lg shadow-blue-600/20"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <cat.icon size={14} className={filter === cat.name ? "animate-pulse" : "group-hover:rotate-12 transition-transform"} />
                                <span className="tracking-widest uppercase">{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Dynamic Layout Grid --- */}
                {/* هنا حطينا الكلاس الديناميكي بتاع الكونتينر اللي بيتغير مع الفلتر */}
                <motion.div
                    layout
                    className={currentStyle.gridContainer}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                // ضفنا الكلاس الديناميكي بتاع الكارد
                                className={`relative group cursor-pointer overflow-hidden ${project.gridClass} ${currentStyle.cardClass}`}
                            >
                                {/* Image Component */}
                                <div className="absolute inset-0 w-full h-full">
                                    {/* هنا حطينا الكلاس الديناميكي بتاع الصورة */}
                                    <img
                                        src={project.image}
                                        className={currentStyle.imageClass}
                                        alt={project.title}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}