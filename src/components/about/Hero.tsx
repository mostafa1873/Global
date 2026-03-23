"use client";

import { motion } from "framer-motion";
import { FiArrowLeft, FiCode, FiBarChart } from "react-icons/fi";

export default function TechAgencyHero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
    };

    return (
        <section className="relative min-h-[90vh] md:min-h-screen w-full text-white overflow-hidden flex flex-col items-center justify-center px-6 md:px-12 py-8 md:py-0" dir="rtl">

            {/* 2. كروت عائمة (Floating Services) */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-[15%] left-[5%] md:top-[20%] md:left-[15%] p-4 bg-blue-500/5 backdrop-blur-xl border border-blue-500/10 rounded-2xl hidden lg:flex items-center gap-3"
                >
                    <FiCode className="text-blue-500 text-xl" />
                    <span className="text-sm font-medium opacity-80">برمجة متطورة</span>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-[15%] right-[5%] md:bottom-[25%] md:right-[10%] p-4 bg-indigo-500/5 backdrop-blur-xl border border-indigo-500/10 rounded-2xl hidden lg:flex items-center gap-3"
                >
                    <FiBarChart className="text-indigo-500 text-xl" />
                    <span className="text-sm font-medium opacity-80">تسويق استراتيجي</span>
                </motion.div>
            </div>

            {/* 3. المحتوى الرئيسي - تم تحسين التباعد للموبايل */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center justify-center py-5 pt-18 md:pt-30 md:py-20"
            >
                <motion.div variants={itemVariants} className="mb-6 md:mb-8 flex items-center gap-2 md:gap-3 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-blue-400 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">Next Gen Digital Solutions</span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-[42px] sm:text-7xl md:text-8xl lg:text-[110px] font-black leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 md:mb-10"
                >
                    نمـــسك لك <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 via-blue-600 to-indigo-500">
                        كل الخيوط.
                    </span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-slate-400 text-[15px] md:text-xl lg:text-2xl font-light leading-relaxed max-w-[90%] md:max-w-3xl mb-12 md:mb-16 px-2 md:px-0"
                >
                    في <span className="text-white font-medium italic">Global Nexus</span>. بدل ما تدوخ بين الشركات، بنجمع لك البرمجة والتسويق والإدارة في مكان واحد <span className="text-blue-400 font-semibold md:underline md:underline-offset-8">بيزنسك بيكبر معانا.</span>
                </motion.p>

                {/* 4. قسم الحركة (Responsive) */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-12 w-full">

                    {/* الزرار */}
                    <button className="w-full sm:w-auto min-w-[200px] md:min-w-[240px] group relative px-8 py-4 md:px-10 md:py-5 bg-white text-black text-base font-bold rounded-xl md:rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
                        <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors">
                            ابدأ مشروعك الآن
                            <FiArrowLeft className="text-xl group-hover:-translate-x-2 transition-transform" />
                        </span>
                    </button>

                    {/* مؤشر النشاط */}
                    <div className="flex items-center justify-center gap-4 md:gap-6">
                        <div className="relative flex h-2.5 w-2.5 md:h-3 md:w-3 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-emerald-500"></span>
                        </div>

                        <div className="flex flex-col items-center md:items-start text-center md:text-right">
                            <span className="text-[10px] md:text-[10px] text-emerald-500 font-bold uppercase tracking-[0.2em]">
                                Available for Projects
                            </span>
                            <p className="text-[11px] md:text-[11px] text-slate-500 font-medium">
                                جاهزون لتحويل فكرتك إلى واقع اليوم
                            </p>
                        </div>
                    </div>

                </motion.div>
            </motion.div>

            {/* 5. رقم السكشن - ثابت بنفس الاستايل */}
            <div className="absolute left-4 bottom-4 md:left-10 md:bottom-10 opacity-5 md:opacity-40 pointer-events-none">
                <p className="text-slate-800 text-[60px] md:text-[150px] font-black leading-none select-none tracking-tighter">01</p>
            </div>

        </section>
    );
}