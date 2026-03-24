"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiBriefcase, FiTarget, FiLink, FiInstagram, FiLinkedin, FiPhone } from "react-icons/fi";

export default function ThankYou() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center py-24 md:py-32 px-4 overflow-hidden" dir="rtl">

            {/* الخلفية المعززة بصرياً */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center"
            >

                {/* الأيقونة العلوية - حجم متناسب */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative flex items-center justify-center w-20 h-20 mb-8"
                >
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
                    <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-lg shadow-blue-500/20">
                        <FiCheck className="text-white text-3xl" />
                    </div>
                </motion.div>

                {/* العناوين - ريسبونسف فونت */}
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <h1 className="text-white text-3xl md:text-6xl font-black mb-4 tracking-tight leading-tight">
                        موعدك اتأكد <span className="text-blue-500 italic">بنجاح!</span>
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed px-2">
                        خطوة ممتازة! هنكلمك في الموعد اللي اخترته عشان نبدأ رحلة تطوير بيزنسك.
                    </p>
                </motion.div>

                {/* كارت تفاصيل المكالمة - تصميم مدمج */}
                <motion.div variants={itemVariants} className="w-full max-w-2xl mb-12">
                    <div className="bg-blue-500/5 border border-blue-500/10 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-right">
                        <div className="flex items-center gap-3 text-white font-bold text-lg md:text-xl">
                            <FiPhone className="text-blue-500 animate-pulse shrink-0" />
                            <span>مكالمة تليفونية مباشرة</span>
                        </div>
                        <div className="hidden md:block w-px h-6 bg-blue-500/20" />
                        <span className="text-slate-400 text-sm md:text-base">على رقم الموبايل اللي سجلته في الفورم.</span>
                    </div>
                </motion.div>

                {/* قسم النصائح - Grid مرن جداً */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full mb-16">
                    
                    {/* الكارت الأول */}
                    <motion.div variants={itemVariants} className="group bg-white/[0.02] border border-white/5 rounded-[2rem] p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-300">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                <FiTarget className="text-blue-500 text-xl" />
                            </div>
                            <h3 className="text-white font-bold text-lg">تحضير بسيط</h3>
                        </div>
                        <ul className="space-y-3">
                            {["نبذة عن مشروعك ورؤيتك.", "أكبر تحدي بيقابلك حالياً.", "الأهداف اللي حابب نوصل لها سوا."].map((text, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                                    <span className="w-1 h-1 rounded-full bg-blue-500/50 mt-2 shrink-0" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* الكارت الثاني */}
                    <motion.div variants={itemVariants} className="group bg-white/[0.02] border border-white/5 rounded-[2rem] p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-300">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                <FiBriefcase className="text-blue-500 text-xl" />
                            </div>
                            <h3 className="text-white font-bold text-lg">خطوة استباقية</h3>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            لو حابب تبعتلنا لينكات السوشيال ميديا أو موقعك قبل المكالمة عشان ندرسهم.. ده هيساعدنا جداً.
                        </p>
                        <div className="flex items-center gap-2 text-blue-400/80 bg-blue-400/5 p-3 rounded-xl border border-blue-400/10">
                            <FiLink className="text-sm shrink-0" />
                            <span className="text-[11px] md:text-xs font-medium italic">موقعك، بروفايل الشركة، أو حساباتك التجارية.</span>
                        </div>
                    </motion.div>
                </div>

                {/* السوشيال ميديا - ترتيب أفقي مرن */}
                <motion.div variants={itemVariants} className="w-full flex flex-col items-center gap-6">
                    <span className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">Stay Connected</span>
                    <div className="flex flex-row gap-4">
                        <a href="https://linkedin.com/company/globalnexus1999" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/5 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 text-sm font-bold">
                            <FiLinkedin />
                            <span className="hidden md:inline">LinkedIn</span>
                        </a>
                        <a href="https://instagram.com/globalnexus1999" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/5 rounded-full text-slate-400 hover:text-white hover:bg-pink-600 transition-all duration-300 text-sm font-bold">
                            <FiInstagram />
                            <span className="hidden md:inline">Instagram</span>
                        </a>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}