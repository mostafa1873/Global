"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpLeft, Globe, Palette, Box, Layers } from "lucide-react";

const projects = [
    // Website: ميكس بين الكبير (المريع) والطولي
    { id: 1, title: "Elite Fintech", category: "Website", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 lg:row-span-2" },
    { id: 2, title: "Agro Platform", category: "Website", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-2" },
    // Website: ميكس بين الكبير (المريع) والطولي
    { id: 3, title: "Elite Fintech", category: "Website", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-2" },
    { id: 4, title: "Agro Platform", category: "Website", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 lg:row-span-2" },

    // Branding: كله طولي (Tall)
    { id: 5, title: "EZZ Exports", category: "Branding", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-2" },
    { id: 6, title: "Pure Land", category: "Branding", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-2" },
    { id: 7, title: "Global Identity", category: "Branding", image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-2" },
    // Branding: كله طولي (Tall)
    { id: 8, title: "EZZ Exports", category: "Branding", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-2" },
    { id: 9, title: "Pure Land", category: "Branding", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-2" },
    { id: 10, title: "Global Identity", category: "Branding", image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-2" },

    // Packaging: بنتو جريد مختلف (موزع)
    { id: 11, title: "Nexus Bottle", category: "packaging", image: "https://images.unsplash.com/photo-1595079676339-1534802ad6cf?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 12, title: "Eco Box", category: "packaging", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 lg:row-span-1" },
    { id: 13, title: "Premium Pack", category: "packaging", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 21, title: "Nexus Bottle", category: "packaging", image: "https://images.unsplash.com/photo-1595079676339-1534802ad6cf?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },

    // Packaging: بنتو جريد مختلف (موزع)
    { id: 14, title: "Nexus Bottle", category: "packaging", image: "https://images.unsplash.com/photo-1595079676339-1534802ad6cf?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
    { id: 15, title: "Eco Box", category: "packaging", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 lg:row-span-1" },
    { id: 16, title: "Premium Pack", category: "packaging", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },

    // Visuals: بنتو جريد مختلف
    { id: 17, title: "Core Render", category: "Visuals", image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-6 lg:row-span-1" },
    { id: 18, title: "Neon Concept", category: "Visuals", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-6 lg:row-span-1" },
    // Visuals: بنتو جريد مختلف
    { id: 19, title: "Core Render", category: "Visuals", image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-6 lg:row-span-1" },
    { id: 20, title: "Neon Concept", category: "Visuals", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070", gridClass: "col-span-1 md:col-span-1 lg:col-span-6 lg:row-span-1" },
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

    return (
        <section className="py-10 border-t border-white/5 px-6 lg:px-16 bg-transparent" dir="rtl">
            <div className="max-w-[1600px] mx-auto">

                {/* --- Centralized Premium Header --- */}
                <div className="relative mb-12 flex flex-col items-center justify-center text-center gap-10">

                    {/* 1. الجملة الرئيسية بستايل ضخم في المنتصف */}
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

                    {/* 2. الفلتر في المنتصف بستايل الـ Pill */}
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
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 auto-rows-[320px]"
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
                                className={`relative group cursor-pointer overflow-hidden rounded-[2.5rem] bg-[#050505] border border-white/5 ${project.gridClass}`}
                            >
                                {/* Image Component */}
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={project.image}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                        alt={project.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest block mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                {project.category}
                                            </span>
                                            <h3 className="text-3xl font-black text-white tracking-tighter group-hover:text-blue-600 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>

                                        <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                            <ArrowUpLeft size={24} />
                                        </div>
                                    </div>
                                </div>

                                {/* Subtle Border Glow on Hover */}
                                <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-[2.5rem] transition-colors pointer-events-none" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}