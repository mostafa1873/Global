"use client";

import { motion } from "framer-motion";
import { FiAlertCircle, FiCheckCircle, FiLayers } from "react-icons/fi";

export default function WhyUsSection() {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="relative min-h-[90vh] md:min-h-screen w-full py-16 md:py-18 px-6 md:px-12 overflow-hidden flex flex-col justify-center" dir="rtl">

            {/* البوردر العلوي الخفيف جداً */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />

            {/* خلفية تقنية خفيفة */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">

                {/* العنوان الجانبي المودرن - تمركز في الموبايل */}
                <div className="flex flex-col mb-12 md:mb-20 text-center md:text-right items-center md:items-start">
                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4"
                    >
                        The Problem & Solution
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-white text-[32px] sm:text-4xl md:text-6xl font-[950] tracking-tighter"
                    >
                        ليه إحنا <span className="text-blue-600">موجودين؟</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

                    {/* الجانب الأيمن: شرح المشكلة - تمركز في الموبايل */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6 md:space-y-8 text-center md:text-right"
                    >
                        <div className="relative p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:border-red-500/20 transition-colors">
                            <FiAlertCircle className="text-red-500 text-3xl mb-6 mx-auto md:mx-0" />
                            <h3 className="text-white text-xl md:text-2xl font-bold mb-4 italic">أكبر مشكلة هي "التشتت"</h3>
                            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                                المبرمج بيعمل كود ملوش علاقة بالبيع، والمسوق بيعمل إعلانات مش ماشية مع إمكانيات الموقع، والنتيجة؟
                                <span className="text-red-400 font-bold block mt-2">ميزانية ضايعة ووجع دماغ.</span>
                            </p>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="p-4 md:p-8">
                            <p className="text-slate-500 text-lg md:text-xl font-light italic leading-loose">
                                "تعدد الشركات بيخلي السفينة تغرق.. <br className="hidden md:block" />
                                لأن مفيش رؤية واحدة بتجمع الكل."
                            </p>
                        </div>
                    </motion.div>

                    {/* الجانب الأيسر: الحل - تمركز في الموبايل */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:mt-20 space-y-6 text-center md:text-right"
                    >
                        <motion.div
                            variants={cardVariants}
                            className="p-6 md:p-8 rounded-3xl bg-blue-600 shadow-[0_20px_40px_rgba(37,99,235,0.2)]"
                        >
                            <FiCheckCircle className="text-white text-3xl md:text-4xl mb-6 mx-auto md:mx-0" />
                            <h3 className="text-white text-2xl md:text-3xl font-black mb-4">إحنا بننهي الصداع ده.</h3>
                            <p className="text-blue-50 text-lg md:text-xl leading-relaxed font-medium">
                                في جلوبال نيكسس، إحنا مش مجرد (شركة خدمات)، إحنا <span className="underline underline-offset-4 text-white">شريك استراتيجي</span> بيفهم في التكنولوجيا وفي السوق في نفس الوقت.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-blue-500/20"
                        >
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                                <div className="p-3 bg-blue-500/10 rounded-xl shrink-0">
                                    <FiLayers className="text-blue-500 text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg md:text-xl mb-2">المسؤولية الكاملة</h4>
                                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                                        لما بنمسك مشروع، بنبقى مسؤولين عن كل تفصيلة فيه عشان نضمن إن الصورة تطلع كاملة والنتائج تكون حقيقية.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* رقم القسم (02) - متجاوب وحافظنا على مكانه */}
            <div className="absolute right-4 bottom-4 md:right-10 md:bottom-10 opacity-5 md:opacity-40 pointer-events-none z-0">
                <p className="text-slate-800 text-[80px] sm:text-[100px] md:text-[150px] font-black leading-none select-none tracking-tighter">
                    02
                </p>
            </div>

        </section>
    );
}