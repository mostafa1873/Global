"use client";

import { motion } from "framer-motion";

export default function BrandingEditorialDeck() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const as const }
        }
    };

    const offerings = [
        "تطوير أو تحسين الشعار",
        "اختيار الألوان الأساسية والثانوية",
        "تحديد الخطوط المناسبة",
        "تصميم عناصر الهوية البصرية",
        "إعداد اتجاه بصري واضح للعلامة التجارية",
        "تطبيق الهوية على المنصات الرقمية",
        "تحسين شكل المحتوى البصري على السوشيال ميديا",
        "تجهيز نمط تصميم يساعد على توحيد الظهور الرقمي"
    ];

    return (
        <section className="relative w-full py-10 px-4 sm:px-6 md:px-12 select-none z-10 overflow-hidden" dir="rtl">

            <div className="relative z-10 w-full max-w-[1300px] mx-auto flex flex-col space-y-24 md:space-y-40">

                {/* ================= الكتلة الأولى: المشكلة (توزيع جانبي فخم) ================= */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start"
                >
                    {/* الجانب الهندسي الجاذب للعين */}
                    <div className="lg:col-span-4 flex flex-row lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-4 border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-4 lg:pb-0 lg:pl-8">
                        <span className="font-mono text-4xl md:text-6xl font-thin text-white/75 tracking-tighter">01.</span>
                        <div className="space-y-1 text-left lg:text-right">
                            <span className="text-blue-600 font-mono text-[10px] tracking-widest uppercase block">  CHALLENGE</span>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-600 tracking-tight">المشكلة التي تعالجها الخدمة</h2>
                        </div>
                    </div>

                    {/* الجانب القرائي الانسيابي */}
                    <div className="lg:col-span-8 flex flex-col space-y-6 text-center lg:text-right items-center lg:items-start">
                        <p className="text-white/90 text-base sm:text-lg md:text-xl font-light leading-relaxed select-text break-words">
                            كثير من الشركات تقدم خدمات جيدة، لكنها لا تظهر بالصورة التي تعكس قيمتها الحقيقية. أحيانًا يكون الشعار غير واضح، أو الألوان غير متناسقة، أو التصاميم مختلفة من منصة لأخرى، مما يضعف ثقة العميل ويجعل العلامة التجارية أقل تميزًا.
                        </p>
                        <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed select-text italic border-r-2 border-white/20 pr-4">
                            الهوية البصرية المنظمة تساعد الشركة على بناء انطباع أقوى، وتجعل حضورها أكثر ثباتًا واحترافية.
                        </p>
                    </div>
                </motion.div>


                {/* ================= الكتلة الثانية: ماذا نقدم (قائمة منسابة متباعدة) ================= */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">

                    {/* العنوان الجانبي الثابت */}
                    <div className="lg:col-span-4 flex flex-row lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-4 border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-4 lg:pb-0 lg:pl-8">
                        <span className="font-mono text-4xl md:text-6xl font-thin text-white/75 tracking-tighter">02.</span>
                        <div className="space-y-1 text-left lg:text-right">
                            <span className="text-blue-600 font-mono text-[10px] tracking-widest uppercase block">  SCOPE</span>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-600 tracking-tight">ماذا نقدم داخل الخدمة؟</h2>
                        </div>
                    </div>

                    {/* قائمة المخرجات الذكية: مقسومة عمودين متباعدين لتسهيل القراءة وتفادي شكل المقال */}
                    <div className="lg:col-span-8 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-right">
                            {offerings.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: -6 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="group flex items-start gap-4 py-3 border-b border-white/[0.03] hover:border-nexus-blue/20 transition-colors duration-300"
                                >
                                    <span className="font-mono text-xs text-blue-600 group-hover:text-blue-400 transition-colors pt-1">
                                        [{index + 1}]
                                    </span>
                                    <p className="text-white/90 group-hover:text-white text-sm sm:text-base font-normal leading-normal select-text">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* ================= الكتلة الثالثة: لمن الخدمة + النتيجة (توازن متناظر) ================= */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">

                    {/* لمن الخدمة مناسبة */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="flex flex-col space-y-4 border-r border-white/[0.06] pr-6 md:pr-8 text-center lg:text-right items-center lg:items-start"
                    >
                        <span className="font-mono text-xs text-white/70 tracking-widest uppercase block">03  TARGET_AUDIENCE</span>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">لمن هذه الخدمة مناسبة؟</h3>
                        <div className="space-y-4 text-white/90 text-sm sm:text-base font-light leading-relaxed select-text pt-2">
                            <p>
                                هذه الخدمة مناسبة للشركات التي تبدأ من الصفر وتحتاج إلى هوية بصرية كاملة، وكذلك الشركات التي تمتلك هوية حالية لكنها تحتاج إلى تطوير أو إعادة تنظيم.
                            </p>
                            <p className="text-white/85 text-xs sm:text-sm">
                                كما تناسب الشركات التي ترغب في تحسين شكل ظهورها على السوشيال ميديا، الموقع الإلكتروني، العروض التقديمية، أو المواد التسويقية.
                            </p>
                        </div>
                    </motion.div>

                    {/* النتيجة المتوقعة (بوزن بصري أثقل لإبراز القيمة) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="flex flex-col space-y-4 border-r-2 border-nexus-blue pr-6 md:pr-8 text-center lg:text-right items-center lg:items-start bg-gradient-to-l from-nexus-blue/[0.01] to-transparent py-2"
                    >
                        <span className="font-mono text-xs text-blue-600 tracking-widest uppercase block">04  THE_OUTCOME</span>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">النتيجة المتوقعة</h3>
                        <p className="text-white/90 group-hover:text-white text-base sm:text-lg font-light leading-relaxed select-text pt-2 max-w-xl">
                            بعد تنفيذ الخدمة، يصبح لدى الشركة هوية بصرية أكثر وضوحًا واتساقًا، تساعدها على تقديم نفسها بثقة، وتمنح العملاء انطباعًا أكثر احترافية عن العلامة التجارية.
                        </p>
                    </motion.div>

                </div>

            </div>

            {/* لمسة الإغلاق الهندسية الفخمة أسفل الواجهة */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mt-24 md:mt-36" />
        </section>
    );
}