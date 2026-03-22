"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react"; // استيراد الأيقونة
import Image from "next/image";
import img1 from "../../assets/about.jpg";

export default function AboutSection() {
  return (
    <section className="py-14 md:py-16 border-b border-white/5 relative overflow-hidden" dir="rtl">

      {/* لمسة إضاءة خافتة في الخلفية */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(37,99,235,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* تم استخدام flex-col وتغيير الترتيب بالـ order لتحقيق طلبك */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center text-center lg:text-right">

          {/* 1. جملة حكايتنا في كلمتين (تظهر أولاً في الموبايل) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="order-1 md:hidden lg:col-span-12 flex justify-center lg:justify-start"
          >
            <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-500 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              حكايتنا في كلمتين
            </div>
          </motion.div>

          {/* 2. الجانب الأيسر: الصورة (تظهر ثانياً في الموبايل) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:col-span-5 relative group w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src={img1}
                alt="Nexus Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
            </div>

            {/* كرت الأرقام العائم */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-blue-600 p-6 md:p-8 rounded-3xl shadow-2xl hidden md:block z-20"
            >
              <p className="text-white text-4xl md:text-5xl font-black mb-1">150+</p>
              <p className="text-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-widest">بيزنس كبر معانا</p>
            </motion.div>
          </motion.div>

          {/* 3. الجانب الأيمن: باقي المحتوى (يظهر ثالثاً في الموبايل) */}
          <div className="order-3 lg:col-span-7 space-y-8 w-full">

            {/* 1. جملة حكايتنا في كلمتين (تظهر أولاً في الموبايل) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="hidden md:block lg:col-span-12 flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-500 text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                حكايتنا في كلمتين
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] tracking-tighter"
            >
              إحنا مش مجرد وكالة، <br />
              <span className="text-blue-600">إحنا شريكك في السيطرة</span> <br />
              على السوق الرقمي.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-slate-400 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              <p>
                عارفين إن السوق زحمة، وعارفين إن البرمجة والماركتنج مش بس كود وإعلانات.. الموضوع أكبر من كدة بكتير. في نكسس، بنجمع بين "صياعة" الماركتنج و "قوة" البرمجة عشان نطلعلك براند ملهوش زي.
              </p>
              <p>
                فريقنا مبيحبش الحلول التقليدية، إحنا بنفصل كل حاجة على مقاس البيزنس بتاعك، عشان هدفنا واحد: إن براندك ميبقاش مجرد "موجود" أونلاين، لا ده يبقى هو "القائد".
              </p>
            </motion.div>

            {/* أرقام سريعة تحت الكلام */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-white/5"
            >
              <div>
                <p className="text-white text-xl md:text-2xl font-black">2026</p>
                <p className="text-slate-500 text-[10px] md:text-sm uppercase font-bold tracking-tighter">بداية الرحلة</p>
              </div>
              <div>
                <p className="text-white text-xl md:text-2xl font-black">12+</p>
                <p className="text-slate-500 text-[10px] md:text-sm uppercase font-bold tracking-tighter">دماغ مبدعة</p>
              </div>
              <div>
                <p className="text-white text-xl md:text-2xl font-black">100%</p>
                <p className="text-slate-500 text-[10px] md:text-sm uppercase font-bold tracking-tighter">تركيز عالنتائج</p>
              </div>
            </motion.div>

            {/* الزرار الـ "رايق" في نهاية السكشن */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-4 flex justify-center lg:justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-500 hover:bg-blue-600 hover:border-blue-600 shadow-xl"
              >
                شوف حكايتنا كاملة
                <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform duration-500 text-blue-500 group-hover:text-white" />
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}