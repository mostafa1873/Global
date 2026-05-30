"use client";

import { motion } from "framer-motion";
import { FiTrendingUp, FiUsers, FiCpu, FiArrowLeft } from "react-icons/fi";

export default function VisionSection() {
    return (
        <section className="relative w-full py-16 px-4 sm:px-6 md:px-16 bg-transparent overflow-hidden" dir="rtl">
            
            <div className="absolute top-1/3 left-10 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-blue-500/[0.02] rounded-full blur-[80px] sm:blur-[130px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-indigo-500/[0.02] rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* الجانب الأيمن */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-center lg:text-right pb-0">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 border border-blue-600/30 px-4 py-1.5 rounded-full bg-blue-500/[0.03] backdrop-blur-sm mx-auto lg:mx-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                                <span className="text-blue-600 font-mono text-xs tracking-widest uppercase">OUR VISION</span>
                            </div>
                            
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                                بناء بيئات <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-500 via-indigo-600 to-blue-600">
                                    رقمية أكثر استدامة.
                                </span>
                            </h2>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            // تعديل المحاذاة هنا لـ text-center على الموبايل
                            className="flex flex-col items-center md:items-start p-6 rounded-3xl border border-white/5 bg-gradient-to-l from-white/[0.01] to-transparent gap-4 text-center md:text-right"
                        >
                            <div className="p-3 bg-blue-600/10 rounded-xl text-blue-400">
                                <FiCpu className="text-xl" />
                            </div>
                            <div className="space-y-1">
                                <h5 className="text-white font-bold text-sm">الهندسة الرقمية الحديثة</h5>
                                <p className="text-white/75 text-xs leading-relaxed">نصمم البنية التحتية لتتحمل التوسع المستقبلي لشركتك دون الحاجة لإعادة البناء من الصفر.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* الجانب الأيسر: Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto lg:auto-rows-[220px]">
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            // إضافة items-center للسنتر
                            className="md:col-span-2 p-6 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-md shadow-2xl flex flex-col items-center md:items-start justify-between group hover:border-blue-500/20 transition-all duration-500 overflow-hidden text-center md:text-right"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative z-10 w-full">
                                <div className="space-y-2 max-w-md">
                                    <span className="text-blue-600 text-xs font-mono tracking-wider block">THE CORE PURPOSE</span>
                                    <p className="text-white/80 text-base leading-relaxed font-light">
                                        نسعى إلى مساعدة الشركات على <span className="text-white font-semibold underline decoration-blue-600/50 underline-offset-4">بناء أنظمة رقمية</span> تدعم النمو طويل المدى وتحسن طريقة تفاعلها مع العملاء بشكل كامل وعميق.
                                    </p>
                                </div>
                                <div className="p-3 bg-blue-600/10 rounded-2xl text-blue-500 hidden sm:block">
                                    <FiTrendingUp className="text-2xl" />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-white/80 font-mono mt-4 relative z-10">
                                <span>GLOBAL NEXUS INDEX</span>
                                <FiArrowLeft />
                                <span className="text-blue-600/80">SUSTAINABLE GROWTH</span>
                            </div>
                        </motion.div>

                        <motion.div 
                            // تعديل المحاذاة للسنتر
                            className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-md flex flex-col items-center md:items-start justify-between group hover:border-indigo-500/20 transition-all duration-500 text-center md:text-right"
                        >
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-400">
                                    <FiUsers className="text-lg" />
                                </div>
                                <h4 className="text-white font-bold text-lg">تفاعل استثنائي وثابت</h4>
                                <p className="text-white/80 text-xs leading-relaxed">
                                    تحويل كل نقطة تلاقي مع عميلك إلى تجربة سينمائية فريدة تبني الولاء وتضمن استمرار العلاقة وتطورها.
                                </p>
                            </div>
                            <span className="text-[10px] text-blue-600 font-mono tracking-widest block uppercase mt-4">RETENTION DRIVEN</span>
                        </motion.div>

                        <motion.div 
                            // تعديل المحاذاة للسنتر
                            className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-md flex flex-col items-center md:items-start justify-between group hover:border-blue-500/20 transition-all duration-500 text-center md:text-right"
                        >
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400">
                                    <span className="text-xs font-mono font-bold">L-T</span>
                                </div>
                                <h4 className="text-white font-bold text-lg">النمو طويل المدى</h4>
                                <p className="text-white/80 text-xs leading-relaxed">
                                    نبتعد عن المسكنات البرمجية المؤقتة؛ حلولنا تُبنى لتخدم رؤية شركتك لسنوات قادمة بكل كفاءة واستقرار.
                                </p>
                            </div>
                            <span className="text-[10px] text-blue-600 font-mono tracking-widest block uppercase mt-4">FUTURE PROOFED</span>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}