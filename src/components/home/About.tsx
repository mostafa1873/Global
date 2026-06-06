"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Rocket, Users, Target, Briefcase, Layers } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("AboutSection");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section className="py-6 md:py-6 border-t border-white/5 relative overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* العناوين - مركزية وأنيقة */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.2] bg-white/[0.03] text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
            {t("badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black text-white leading-tight uppercase"
          >
            {t("titleLine1")} <br />
            <span className="text-blue-600 uppercase">{t("titleLine2")}</span>
          </motion.h2>
        </div>

        {/* شبكة البنتو (Bento Grid) - بديل الصورة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

          {/* كارت الوصف الكبير */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 text-center p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-center"
          >
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
              {t("p1_part1")}<span className="text-white font-medium">{t("p1_bold1")}</span> <span className="text-white font-medium">{t("p1_bold2")}</span>.
            </p>
          </motion.div>    

          {/* كارت صغير - البداية */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-blue-600 flex flex-col items-center justify-center text-center group"
          >
            <Rocket className="text-white/85 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white text-3xl font-black">2026</h3>
            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mt-1">{t("card2026_sub")}</p>
          </motion.div>

          {/* كارت صغير - الفريق */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group"
          >
            <Users className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white text-3xl font-black">12+</h3>
            <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">{t("cardExperts_sub")}</p>
          </motion.div>

          {/* كارت صغير - مشروع */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group"
          >
            <Briefcase className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white text-3xl font-black">20+</h3>
            <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">{t("cardProjects_sub")}</p>
          </motion.div>

          {/* كارت صغير - خدمة */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group"
          >
            <Layers className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white text-3xl font-black">20+</h3>
            <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">{t("cardServices_sub")}</p>
          </motion.div>

          {/* كارت الوصف الكبير */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 text-center p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-center"
          >
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
              {t("p2_part1")}<span className="text-white font-medium">{t("p2_bold1")}</span>{t("p2_part2")}<span className="text-white font-medium">{t("p2_bold2")}</span>
            </p>
          </motion.div>

          {/* كارت صغير - النتائج */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group"
          >
            <Target className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white text-3xl font-black">100%</h3>
            <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">{t("cardCommitment_sub")}</p>
          </motion.div>
        </div>

        {/* الزرار النهائي - يتغير اتجاه السهم تلقائياً حسب لغة الصفحة */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center"
        >
          <Link href="/about">
            <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black text-sm hover:bg-blue-600 hover:text-white transition-all duration-500">
              {t("btnMore")}
              {isAr ? (
                <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
              ) : (
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              )}
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}