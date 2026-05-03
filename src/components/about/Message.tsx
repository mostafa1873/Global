"use client";

import { motion } from "framer-motion";
import { FiHeart, FiTarget, FiZap, FiShield, FiStar } from "react-icons/fi";

export default function HeartSection() {
    return (
        <section className="relative w-full py-10 md:py-10 px-4 sm:px-6 md:px-12 bg-transparent overflow-hidden flex flex-col justify-center" dir="rtl">

            {/* البوردر العلوي الخفيف */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10 w-full">

                {/* العنوان - متجاوب بالكامل */}
                <div className="mb-12 md:mb-20 text-center md:text-right flex flex-col items-center md:items-start">
                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 block"
                    >
                        Overview
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-white text-[28px] sm:text-4xl md:text-6xl font-black tracking-tighter leading-tight"
                    >
                        شريك <span className="text-blue-600 underline underline-offset-8 decoration-2">في نجاحك.</span>
                    </motion.h2>
                </div>

                {/* النص الأساسي العلوي */}
                <div className="mb-12 md:mb-16 text-center md:text-right">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-6 md:space-y-8"
                    >
                        <p className="text-slate-300 text-lg sm:text-xl md:text-3xl leading-relaxed font-light italic">
                            "في Global Nexus <span className="text-white font-bold not-italic">التميُز</span> هو القاعدة الثابتة وليس الإستثناء. نحن لا نعتبر أنفُسنا مجرد مقدمي خدمات، بل نحن الحليف الإستراتيجي الذي يُعيد تعريف مفهوم الأداء في قطاع الأعمال."
                        </p>
                        <p className="text-slate-400 text-sm sm:text-base md:text-xl leading-relaxed max-w-4xl mx-auto md:mr-0 md:ml-auto">
                            نحن نعمل جنباً إلى جنب مع المؤسسات <span className="text-blue-400">لتحسين العمليات</span> وتمكين الكوادر، ودمج التكنولوجيا الذكية حتى يصبح النجاح الفائق واقعاً ملموساً في كل يوم. نحن الوكالة التي تحول الإستراتيجيات الطموحة إلى <span className="text-white font-bold italic">"نتائج حقيقية"</span> وقابلة للقياس.
                        </p>
                    </motion.div>
                </div>

                {/* Bento Grid Layout - متجاوب جداً */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                    
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="md:col-span-4 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm flex flex-col text-center md:text-right h-full"
                    >
                        <FiTarget className="text-blue-500 text-3xl mb-6 mx-auto md:mx-0" />
                        <h4 className="text-white font-bold mb-4 text-xl tracking-tight">Vision</h4>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">أن نرفع معايير تنفيذ الأعمال في السوق الرقمي، حتى يصبح الإتقان هو المستوى الطبيعي والأساسي لكل مؤسسة أو فرد نقوم بتمكينه.</p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-8 p-6 md:p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20 backdrop-blur-sm flex flex-col text-center md:text-right h-full"
                    >
                        <FiZap className="text-blue-500 text-3xl mb-6 mx-auto md:mx-0" />
                        <h4 className="text-white font-bold mb-4 text-xl tracking-tight">Mission</h4>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">لقد وُجِدنا لرفع معايير تصميم وتنظيم وتنفيذ الأعمال، من خلال موائمة الأفراد والأنظمة والرؤى حول هدف واحد مشترك. نحن نحول الطموح إلى أفعال منضبطة، ونبني شراكات تولد تقدماً حقيقياً ومستداماً للشركات والمجتمعات التي نخدمها.</p>
                    </motion.div>

                    {/* Core Values */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-7 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm flex flex-col text-center md:text-right h-full"
                    >
                        <FiShield className="text-blue-500 text-3xl mb-6 mx-auto md:mx-0" />
                        <h4 className="text-white font-bold mb-6 text-xl tracking-tight">Core Values</h4>
                        <ul className="space-y-4 text-right">
                            {[
                                { t: "التميُز كمعيار:", d: "الإتقان هو نقطة الإنطلاق والأساس في كل مشروع نبدأه." },
                                { t: "النزاهة في التنفيذ:", d: "نحن نلتزم بالصدق والمسؤولية والشفافية التامة في كل خطوة." },
                                { t: "الإبتكار الهادف:", d: "نبتكر طرق عمل أذكى لتقديم قيمة فعلية وملموسة لعملائنا." },
                                { t: "النمو المُرتكز على الإنسان:", d: "نؤمن بأن تطوير الأفراد ورفع كفاءة الأداء هما مساران متلازمان للنجاح." },
                                { t: "عقلية الشراكة:", d: "نحن نعمل كفريق واحد مع عملائنا، فشراكتنا هي سر نجاحنا المستمر." }
                            ].map((item, i) => (
                                <li key={i} className="text-sm md:text-base leading-snug">
                                    <span className="text-blue-400 font-bold ml-1 block sm:inline">{item.t}</span>
                                    <span className="text-slate-400">{item.d}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Real Value */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-5 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-blue-600/5 to-transparent border border-white/5 backdrop-blur-sm flex flex-col text-center md:text-right h-full"
                    >
                        <FiStar className="text-blue-500 text-3xl mb-6 mx-auto md:mx-0" />
                        <h4 className="text-white font-bold mb-4 text-xl tracking-tight">Where the real value is created</h4>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed italic">
                            في Global Nexus نؤمن أن القيمة الحقيقية لا تكمُن في الوعود، بل في الأثر المُستدام الذي نتركه في كل مشروع. إلتزامنا هو تقديم حلول إستراتيجية تتجاوز التوقعات، حيث تتحول إستثمارات عملائنا إلى فرص نمو حقيقية ونتائج ملموسة تُعزز من مكانتهم في الصدارة.
                        </p>
                    </motion.div>

                </div>
            </div>

            {/* رقم القسم الخلفي - تحسين الرؤية في الموبايل */}
            <div className="absolute right-4 bottom-4 md:right-10 md:bottom-10 opacity-5 md:opacity-20 pointer-events-none z-0 overflow-hidden">
                <p className="text-slate-800 text-[60px] sm:text-[100px] md:text-[150px] font-black leading-none select-none tracking-tighter">
                    04
                </p>
            </div>

        </section>
    );
}