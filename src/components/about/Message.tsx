"use client";

import { motion } from "framer-motion";
import { FiTarget, FiZap, FiShield, FiStar, FiCompass, FiLayers } from "react-icons/fi";

export default function HeartSection() {
    return (
        <section className="relative w-full min-h-screen py-10 px-4 sm:px-6 md:px-16 bg-transparent" dir="rtl">

            {/* إضاءة شبحية خلفية ناعمة جداً */}
            <div className="absolute top-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/[0.03] rounded-full blur-[120px] md:blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative">
                {/* تم ضبط الـ items-stretch لضمان أن يمتد الـ Grid بكامل طول السيكشن ليعمل الـ Sticky بنجاح */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-stretch relative">

                    {/* الجانب الأيمن: المسرح الثابت السينمائية (Cinematic Fixed Stage) */}
                    {/* text-center على الموبايل و lg:text-right على اللاب توب */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28 lg:h-fit space-y-6 md:space-y-8 text-center lg:text-right z-20 pb-6 lg:pb-0 flex flex-col items-center lg:items-start">
                        <div className="space-y-2 w-full">
                            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block">
                                OVERVIEW
                            </span>
                            <h2 className="text-white text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">
                                شريك <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-blue-600"> في نجاحك.</span>
                            </h2>
                        </div>

                        {/* تم تعديل الحواف (border) والـ padding لتتناسب مع التوسيط على الموبايل */}
                        <p className="text-white/75 text-base md:text-xl leading-relaxed font-light italic border-b-4 lg:border-b-0 lg:border-r-4 border-blue-600 pb-4 lg:pb-0 lg:pr-4">
                            "في Global Nexus التميُز هو القاعدة الثابتة وليس الإستثناء. نحن لا نعتبر أنفُسنا مجرد مقدمي خدمات، بل نحن الحليف الإستراتيجي الذي يُعيد تعريف مفهوم الأداء في قطاع الأعمال."
                        </p>

                        <p className="text-white/75 text-xs md:text-base leading-relaxed">
                            نحن نعمل جنباً إلى جنب مع المؤسسات <span className="text-blue-600">لتحسين العمليات</span> وتمكين الكوادر، ودمج التكنولوجيا الذكية حتى يصبح النجاح الفائق واقعاً ملموساً في كل يوم. نحن الوكالة التي تحول الإستراتيجيات الطموحة إلى <span className="text-white font-bold italic">"نتائج حقيقية"</span> وقابلة للقياس.
                        </p>
                    </div>

                    {/* الجانب الأيسر: العناصر المتداخلة المبتكرة (Overlapping Interactive Cards) */}
                    {/* هنا الـ before تم تعديل كلاس الـ display بتاعه ليكون مخفي في الموبايل ويظهر فقط كلاب توب lg:before:block */}
                    <div className="lg:col-span-7 space-y-6 md:space-y-8 relative before:absolute before:hidden lg:before:block before:right-1/2 lg:before:right-4 before:translate-x-1/2 lg:before:translate-x-0 before:top-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-blue-500/30 before:via-white/5 before:to-transparent px-2 lg:px-0 lg:pr-12 text-center lg:text-right">

                        {/* 1. فلسفة العمل */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="relative p-5 md:p-8 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-blue-500/20 group flex flex-col items-center lg:items-start"
                        >
                            {/* تم إضافة hidden lg:block لتختفي الدائرة تماماً في الموبايل وتظهر في اللاب توب فقط */}
                            <div className="hidden lg:block absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:-right-[43px] top-8 w-3.5 h-3.5 md:w-6 md:h-6 rounded-full bg-slate-950 border-[3px] md:border-4 border-blue-600 flex items-center justify-center z-10" />
                            <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-4 mb-4">
                                <div className="p-2 md:p-3 bg-blue-500/10 rounded-xl md:rounded-2xl text-blue-600 flex-shrink-0">
                                    <FiCompass className="text-lg md:text-2xl group-hover:rotate-45 transition-transform duration-300" />
                                </div>
                                <div className="text-center lg:text-right">
                                    <span className="text-blue-600 font-mono text-[10px] md:text-xs block">CONCEPT</span>
                                    <h4 className="text-white font-bold text-base md:text-xl tracking-tight">الوضوح قبل التنفيذ</h4>
                                </div>
                            </div>
                            <p className="text-white/75 text-xs md:text-base leading-relaxed">
                                نؤمن أن نجاح أي مشروع رقمي يبدأ بفهم واضح للأهداف والتحديات، لذلك نركز على بناء حلول تتناسب مع طبيعة كل مشروع بدلًا من تقديم حلول عامة.
                            </p>
                        </motion.div>

                        {/* 2. طريقة التفكير */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="relative p-5 md:p-8 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-blue-500/20 group flex flex-col items-center lg:items-start"
                        >
                            {/* تم إضافة hidden lg:block لتختفي الدائرة تماماً في الموبايل */}
                            <div className="hidden lg:block absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:-right-[43px] top-8 w-3.5 h-3.5 md:w-6 md:h-6 rounded-full bg-slate-950 border-[3px] md:border-4 border-blue-600 flex items-center justify-center z-10" />
                            <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-4 mb-4">
                                <div className="p-2 md:p-3 bg-blue-500/10 rounded-xl md:rounded-2xl text-blue-600 flex-shrink-0">
                                    <FiLayers className="text-lg md:text-2xl group-hover:-translate-y-1 transition-transform duration-300" />
                                </div>
                                <div className="text-center lg:text-right">
                                    <span className="text-blue-600 font-mono text-[10px] md:text-xs block">MINDSET</span>
                                    <h4 className="text-white font-bold text-base md:text-xl tracking-tight">نربط بين التصميم، التقنية، والنمو</h4>
                                </div>
                            </div>
                            <p className="text-white/75 text-xs md:text-base leading-relaxed">
                                نهدف إلى تطوير حلول تحقق التوازن بين الهوية البصرية، تجربة المستخدم، والأهداف التجارية لضمان تجربة أكثر تكاملًا وفعالية.
                            </p>
                        </motion.div>

                        {/* 3. الرؤية والرسالة */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="relative p-5 md:p-8 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-md shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                        >
                            {/* تم إضافة hidden lg:block لتختفي الدائرة تماماً في الموبايل */}
                            <div className="hidden lg:block absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:-right-[43px] top-8 w-3.5 h-3.5 md:w-6 md:h-6 rounded-full bg-slate-950 border-[3px] md:border-4 border-blue-600 flex items-center justify-center z-10" />
                            <div className="space-y-3 flex flex-col items-center lg:items-start">
                                <div className="flex items-center gap-2 text-blue-600">
                                    <FiTarget className="text-base md:text-xl" />
                                    <h4 className="text-white font-bold text-sm md:text-lg">Vision</h4>
                                </div>
                                <p className="text-white/75 text-xs md:text-sm leading-relaxed">أن نرفع معايير تنفيذ الأعمال في السوق الرقمي، حتى يصبح الإتقان هو المستوى الطبيعي والأساسي لكل مؤسسة أو فرد نقوم بتمكينه.</p>
                            </div>
                            <div className="space-y-3 border-t md:border-t-0 md:border-r border-white/5 pt-4 md:pt-0 md:pr-6 flex flex-col items-center lg:items-start">
                                <div className="flex items-center gap-2 text-blue-600">
                                    <FiZap className="text-base md:text-xl" />
                                    <h4 className="text-white font-bold text-sm md:text-lg">Mission</h4>
                                </div>
                                <p className="text-white/75 text-xs md:text-sm leading-relaxed">لقد وُجِدنا لرفع معايير تصميم وتنظيم وتنفيذ الأعمال، من خلال موائمة الأفراد والأنظمة الرؤى. نحول الطموح إلى أفعال منضبطة، ونبني شراكات تولد تقدماً حقيقياً ومستداماً.</p>
                            </div>
                        </motion.div>

                        {/* 4. القيم الأساسية */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="relative p-6 md:p-10 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl shadow-2xl space-y-8 flex flex-col items-center lg:items-start w-full group"
                        >
                            {/* الدائرة الجانبية - تم إصلاح ظهورها الآن بإلغاء overflow-hidden من الكارت الرئيسي */}
                            <div className="hidden lg:block absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:-right-[43px] top-8 w-3.5 h-3.5 md:w-6 md:h-6 rounded-full bg-slate-950 border-[3px] md:border-4 border-blue-600 flex items-center justify-center z-10" />

                            <div className="flex items-center gap-3.5 bg-blue-600/10 px-4 py-2 rounded-full border border-blue-500/20 text-blue-500">
                                <FiShield className="text-xl md:text-2xl animate-pulse" />
                                <h4 className="text-white font-bold text-base md:text-xl tracking-tight">Core Values</h4>
                            </div>

                            <div className="space-y-4 w-full" dir="rtl">
                                {[
                                    { t: "التميُز كمعيار:", d: "الإتقان هو نقطة الإنطلاق والأساس في كل مشروع نبدأه." },
                                    { t: "النزاهة في التنفيذ:", d: "نحن نلتزم بالصدق والمسؤولية والشفافية التامة في كل خطوة." },
                                    { t: "إبتكار الهادف:", d: "نبتكر طرق عمل أذكى لتقديم قيمة فعلية وملموسة لعملائنا." },
                                    { t: "النمو المُرتكز على الإنسان:", d: "نؤمن بأن تطوير الأفراد ورفع كفاءة الأداء هما مساران متلازمان للنجاح." },
                                    { t: "عقلية الشراكة:", d: "نحن نعمل كفريق واحد مع عملائنا، فشراكتنا هي سر نجاحنا المستمر." }
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-2xl border border-white/[0.02] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.08] hover:translate-x-[-4px] transition-all duration-300 text-xs md:text-base flex flex-col lg:flex-row lg:items-start justify-center lg:justify-start gap-2 lg:gap-3 group/item"
                                    >
                                        {/* نقطة مضيئة تظهر بجانب كل عنصر لتنسيق أرتب */}
                                        <span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.6)] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />

                                        <div className="flex flex-col lg:flex-row lg:items-start gap-1 lg:gap-2">
                                            <span className="text-blue-500 font-bold ml-1 flex-shrink-0 transition-colors duration-300 group-hover/item:text-blue-400">
                                                {item.t}
                                            </span>
                                            <span className="text-white/75 text-xs md:text-sm leading-relaxed">
                                                {item.d}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* 5. الخاتمة */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative p-5 md:p-8 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/[0.03] to-transparent backdrop-blur-md flex flex-col items-center lg:items-start"
                        >
                            {/* تم إضافة hidden lg:block لتختفي الدائرة تماماً في الموبايل */}
                            <div className="hidden lg:block absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:-right-[43px] top-8 w-3.5 h-3.5 md:w-6 md:h-6 rounded-full bg-slate-950 border-4 border-blue-600 flex items-center justify-center z-10" />
                            <FiStar className="text-blue-600 text-xl md:text-2xl mb-4" />
                            <h4 className="text-white font-bold mb-3 text-base md:text-lg tracking-tight">Where the real value is created</h4>
                            <p className="text-white/75 text-xs md:text-base leading-relaxed italic font-light">
                                في Global Nexus نؤمن أن القيمة الحقيقية لا تكمُن في الوعود، بل في الأثر المُستدام الذي نتركه في كل مشروع. إلتزامنا هو تقديم حلول إستراتيجية تتجاوز التوقعات، حيث تتحول إستثمارات عملائنا إلى فرص نمو حقيقية ونتائج ملموسة تُعزز من مكانتهم في الصدارة.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}