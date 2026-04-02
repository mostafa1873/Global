"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import proj1 from "../../../assets/ezz.png";
import proj2 from "../../../assets/agro.png";

// تعريف أنواع البيانات للكروت
interface Project {
    id: number;
    title: string;
    image: StaticImageData;
    link: string;
    color: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "مشروع إيز إكسبورت",
        image: proj1,
        link: "https://ezzexport.com",
        color: "#2563eb"
    },
    {
        id: 2,
        title: "بن دودو كوفي",
        image: proj2,
        link: "https://ezzexport.com",
        color: "#7c3aed"
    },
    {
        id: 3,
        title: "لوحة تحكم ذكية",
        image: proj1,
        link: "#",
        color: "#06b6d4"
    }
];

export default function TechMusclesScroll() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={container} className="relative bg-transparent border-t border-white/5" dir="rtl">
            <div className="container mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-10">

                {/* Header احترافي */}
                <div className="sticky top-10 md:top-20 z-0 mb-12 md:mb-5 px-2" dir="rtl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">

                        <div className="relative">
                            <h2 className="absolute -top-10 md:-top-16 -right-4 md:-right-8 text-8xl md:text-[12rem] font-black text-white/[0.03] uppercase italic select-none tracking-tighter leading-none pointer-events-none">
                                WORKS
                            </h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative z-10 space-y-2"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-px w-8 bg-blue-600" />
                                    <span className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">
                                        Portfolio.v1
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-7xl font-black text-white leading-none">
                                    بعض <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">أعمالنا</span>
                                </h2>
                            </motion.div>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-3 z-10">
                            <div className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-2xl border border-white/5 backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                                    Latest_Updates.2026
                                </span>
                            </div>

                            <p className="text-neutral-500 text-[11px] md:text-sm font-light max-w-[280px] md:text-left leading-relaxed">
                                نستعرض هنا نخبة من المشاريع التي تعكس <br className="hidden md:block" /> قوتنا في التنفيذ ودقة التفاصيل.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col pb-[10vh]">
                    {projects.map((project, index) => {
                        const targetScale = 1 - ((projects.length - index) * 0.05);
                        return (
                            <ProjectCard
                                key={project.id}
                                {...project}
                                i={index}
                                progress={scrollYProgress}
                                range={[index * (1 / projects.length), 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// تعريف الـ Props للـ ProjectCard لحل مشكلة الـ Type Error
interface ProjectCardProps extends Project {
    i: number;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
}

const ProjectCard = ({ title, image, link, i, progress, range, targetScale }: ProjectCardProps) => {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-[70vh] md:h-[80vh] flex items-center justify-center sticky top-16 md:top-24 mb-12 md:mb-0">
            <motion.div
                style={{
                    scale,
                    top: `calc(-2vh + ${i * 20}px)`
                }}
                className="relative h-[400px] md:h-[500px] w-full max-w-[900px] rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 bg-neutral-950 overflow-hidden shadow-2xl mx-auto"
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 md:p-12 flex flex-col justify-center md:justify-end items-center md:items-stretch">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full text-center md:text-right">
                        <div className="space-y-2 md:space-y-4">
                            <span className="text-xs md:text-sm font-mono text-blue-500 block">PROJECT_0{i + 1}</span>
                            <h3 className="text-2xl md:text-5xl font-bold text-white tracking-tight">{title}</h3>
                        </div>

                        <motion.a
                            href={link}
                            target="_blank"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center justify-center gap-3 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-xs md:text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl w-fit mx-auto md:mx-0"
                        >
                            زيارة الموقع
                            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};