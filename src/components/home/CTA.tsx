"use client";
import { motion } from "framer-motion";
import { ArrowUpLeft, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-3xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group rounded-[2rem] p-px bg-gradient-to-tr from-white/10 via-transparent to-white/10"
        >
          {/* الكرت واخد نفس لون الخلفية مع إضافة البوردر الرايق هنا */}
          <div className="relative rounded-[2rem] p-8 md:p-12 overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-colors duration-500">
            
            {/* تأثير ضوء خافت جداً في الزاوية */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[60px] rounded-full group-hover:bg-blue-600/20 transition-colors duration-700" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              
              <div className="text-right">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                  جاهز لتبدأ <span className="text-blue-500">قصتك؟</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-base font-medium">
                  فلنحول أفكارك الكبيرة إلى واقع رقمي ملموس.
                </p>
              </div>

              {/* أزرار الأكشن */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* زرار الواتساب الشيك */}
                <motion.a
                  href="https://wa.me/your-number" // حط رقمك هنا
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-green-600/10 border border-green-600/20 text-green-500 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 hover:text-white transition-all duration-500"
                >
                  <MessageCircle size={18} />
                  واتساب
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl"
                >
                  ابدأ الآن
                  <ArrowUpLeft size={18} />
                </motion.button>
              </div>

            </div>

            {/* نويز خفيف جداً للحفاظ على نفس الستايل */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
          </div>
        </motion.div>

        {/* نص فرعي بسيط تحت الكرت */}
        <p className="text-center mt-8 text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
          Global Nexus • Creative Agency 2026
        </p>

      </div>
    </section>
  );
}