"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Rocket, Users, Target, Briefcase, Layers } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-6 md:py-6 border-t border-white/5 relative overflow-hidden" dir="rtl">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* العناوين - مركزية وأنيقة */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
            حكايتنا في كلمتين
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white leading-tight"
          >
            شريكك الاستراتيجي  <br />
            <span className="text-blue-600">للنمو</span>
          </motion.h2>
        </div>

        {/* شبكة البنتو (Bento Grid) - بديل الصورة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

          {/* كارت الوصف الكبير */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 text-center p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-center"
          >
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              ندرك أن السوق لم يعد بحاجة لمجرد إعلانات أو برمجيات تقليدية. في Global Nexus ندمج بين <span className="text-white font-medium">"التفكير التسويقي المبتكر"</span> و <span className="text-white font-medium">"الحلول البرمجية المتقدمة"</span> لبناء هوية رقمية متفردة تضعك في صدارة مجالك.

            </p>
          </motion.div>

          {/* كارت صغير - البداية */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-blue-600 flex flex-col items-center justify-center text-center group"
          >
            <Rocket className="text-white/80 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white text-3xl font-black">2026</h3>
            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mt-1">رؤية تتحقق</p>
          </motion.div>

          {/* كارت صغير - الفريق */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group"
          >
            <Users className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white text-3xl font-black">12+</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">خبراء في الصناعة</p>
          </motion.div>

          {/* كارت صغير - مشروع */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group"
          >
            <Briefcase className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white text-3xl font-black">20+</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">مشروع</p>
          </motion.div>

          {/* كارت صغير - خدمة */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group"
          >
            <Layers className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white text-3xl font-black">20+</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">خدمة</p>
          </motion.div>

          {/* كارت الوصف الكبير */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 text-center p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-center"
          >
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              في Global Nexus هدفنا ليس مجرد ظهور<span className="text-white font-medium">"علامتك التجارية"</span> بل ترسيخ مكانتها <span className="text-white font-medium">"كقائد" </span>للسوق.

            </p>
          </motion.div>

          {/* كارت صغير - النتائج */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group"
          >
            <Target className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white text-3xl font-black">100%</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">إلتزام تام بالنتائج</p>
          </motion.div>
        </div>

        {/* الزرار النهائي */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center"
        >
          <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black text-sm hover:bg-blue-600 hover:text-white transition-all duration-500">
            اكتشف منهجيتنا
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}