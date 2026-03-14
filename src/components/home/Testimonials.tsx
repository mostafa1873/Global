"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// اللوجوهات
import client1 from "../../assets/client-1.png";
import client2 from "../../assets/client-2.png";
import client3 from "../../assets/client-3.png";
import client4 from "../../assets/client-4.png";
import client5 from "../../assets/brand_5.webp";

const row1 = [client1, client2, client3, client4, client5, client1, client2];
const row2 = [client3, client4, client5, client1, client2, client3, client4];

export default function Partners() {
    return (
        // تقليل الـ py في الموبايل لمنع التداخل مع السكاشن الأخرى
        <section className="relative w-full py-10 md:py-60 overflow-hidden flex flex-col items-center justify-center min-h-[450px] md:min-h-[800px]">

            {/* عنوان السكشن بالعربي */}
            <div className="relative z-30 mb-10 md:mb-20 text-center px-4" dir="rtl">
                <h3 className="text-white/40 uppercase tracking-[0.2em] text-[10px] md:text-sm mb-2 font-medium">
                    شبكة عملائنا
                </h3>
                <h2 className="text-white text-3xl md:text-6xl font-bold leading-tight">
                    شركاء <span className="text-blue-500 italic">النجاح</span>
                </h2>
                <div className="w-12 md:w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full opacity-50" />
            </div>

            {/* الحاوية اللي بتعمل حرف الـ X */}
            <div className="relative w-full flex-1 flex items-center justify-center">

                {/* الشريط الأول (النازل \) */}
                <div className="absolute w-[250%] md:w-[150%] py-4 md:py-12 border-y border-white/10 rotate-[8deg] md:rotate-[10deg] -translate-y-8 md:translate-y-0 overflow-hidden flex z-20 bg-black/40 backdrop-blur-sm">
                    <motion.div
                        // الحركة هنا بتبدأ من 0 وتنتهي عند نص المسافة بالظبط عشان تلحم في نفسها
                        animate={{ x: [0, "-50%"] }} 
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="flex gap-8 md:gap-32 px-4 items-center flex-nowrap"
                    >
                        {/* تكرار المصفوفة 4 مرات عشان نملى الفراغ والحركة متقطعش */}
                        {[...row1, ...row1, ...row1, ...row1].map((img, idx) => (
                            <div key={idx} className="w-28 md:w-60 h-10 md:h-24 relative flex-shrink-0">
                                <Image
                                    src={img}
                                    alt="partner"
                                    fill
                                    className="object-contain brightness-110 mix-blend-screen px-2"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* الشريط الثاني (الطالع /) */}
                <div className="absolute w-[250%] md:w-[150%] py-4 md:py-12 border-y border-white/10 -rotate-[8deg] md:-rotate-[10deg] translate-y-8 md:translate-y-0 overflow-hidden flex z-10 bg-black/40 backdrop-blur-sm">
                    <motion.div
                        // الشريط ده بيتحرك عكس الاتجاه وبنفس المنطق
                        animate={{ x: ["-50%", 0] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex gap-8 md:gap-32 px-4 items-center flex-nowrap"
                    >
                        {[...row2, ...row2, ...row2, ...row2].map((img, idx) => (
                            <div key={idx} className="w-28 md:w-60 h-10 md:h-24 relative flex-shrink-0">
                                <Image
                                    src={img}
                                    alt="partner"
                                    fill
                                    className="object-contain brightness-110 mix-blend-screen px-2"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>

            {/* نص خلفي خفيف */}
            <div className="absolute bottom-5 md:bottom-20 left-1/2 -translate-x-1/2 opacity-[0.02] pointer-events-none select-none">
                <h2 className="text-white text-[20vw] md:text-[12vw] font-black tracking-widest uppercase">Global</h2>
            </div>

        </section>
    );
}