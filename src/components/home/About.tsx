"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import client1 from "../../assets/client-1.png";
import client2 from "../../assets/client-2.png";
import client3 from "../../assets/client-3.png";
import client4 from "../../assets/client-4.png";
import client5 from "../../assets/client-1.png";
import client6 from "../../assets/brand_5.webp";

const logos = [client1, client2, client3, client4, client5, client6];

export default function AboutAndLogos() {
    return (
        /* غيرنا bg-transparent لـ bg-nexus-dark عشان يلحم مع الهيرو */
        <section className="relative py-8 md:py-10 bg-[#020617] overflow-hidden" dir="rtl">
            
            {/* 1. الـ Grid الخفي والـ Noise (نفس اللي في الهيرو بالظبط) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>

            {/* 2. طبقة إضاءة (Glow) إضافية في الزاوية عشان الروح تكمل */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-nexus-blue/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* 1. المحتوى النصي: ترتيب أنضف */}
                    <div className="space-y-8 text-center lg:text-right order-1 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-block py-1 px-3 border-r-2 border-blue-600 bg-blue-600/5 text-blue-500 text-xs font-bold tracking-[0.2em]"
                        >
                            شركاء النجاح
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white text-4xl md:text-6xl font-black leading-[1.15]"
                        >
                            قوة <span className="text-blue-600">البراند</span> <br />
                            تبدأ من الفكرة الصح.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
                        >
                            وإحنا دورنا نحول الفكرة دي لاستراتيجية وتسويق وتجربة بصرية تخلي شركتك تظهر بشكل يليق بقيمتها قدام عملاء السوق.
                            <br />
                            ودول شركاء النجاح اللي وثقوا فينا، وقدرنا نحقق معاهم نتائج نفتخر بيها.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="pt-6 grid grid-cols-2 sm:flex sm:flex-row justify-center lg:justify-start gap-6 md:gap-10"
                        >
                            {/* الميزة الأولى */}
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 text-sm font-medium">جودة عالمية</span>
                            </div>

                            {/* الميزة الثانية */}
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 text-sm font-medium">سرعة تنفيذ</span>
                            </div>

                            {/* الميزة الثالثة */}
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 text-sm font-medium">حلول مبتكرة</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* 2. شبكة اللوجوهات */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 order-2 lg:order-2">
                        {logos.map((logo, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                                className="group relative h-24 md:h-32 flex items-center justify-center p-6 bg-white/[0.02] border border-white/5 rounded-xl transition-all duration-300 shadow-2xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent transition-all duration-500" />

                                <div className="relative w-full h-full grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                    <Image
                                        src={logo}
                                        alt="client logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

             {/* --- الإضافة هنا: آخر أعمالنا تحت الزرارين مباشرة --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col items-center gap-4 group cursor-pointer mt-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-nexus-blue transition-all duration-500"></div>
                <span className="text-white/40 group-hover:text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] transition-colors">
                  آخر أعمالنا
                </span>
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-nexus-blue transition-all duration-500"></div>
              </div>

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-nexus-blue opacity-50 group-hover:opacity-100"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
              </motion.div>
            </motion.div>
            {/* --- نهاية الإضافة --- */}

            {/* إضاءات خلفية خافتة (Glows) */}
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}