"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "هي المكالمة دي بجد مجانية؟",
    answer: "أكيد، 100٪. مفيش أي رسوم مخفية. هدفنا إننا نفهم طبيعة بيزنسك ونشوف إزاي نقدر نساعدك تكبر صح.",
  },
  {
    question: "مين اللي يقدر يستفيد من المكالمة دي؟",
    answer: "أي صاحب شركة، براند، أو بيزنس عاوز يبني حضور رقمي قوي ومحترف، ومحتاج خطة واضحة ومدروسة للنمو.",
  },
  {
    question: "إيه اللي بيحصل بعد ما المكالمة تخلص؟",
    answer: "لو لقينا إننا نقدر نحقق نجاح مع بعض، بنجهز لك عرض فني ومالي مفصل فيه كل الخطوات اللي هنمشي عليها عشان نوصل لأهدافك.",
  },
];

export default function BookACall() {
  const [openFaq, setOpenFaq] = useState<number | null>(null); // خليتها null عشان الزحمة بتبدأ لما كله يبقى مفتوح

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen w-full bg-[#020617] overflow-hidden pt-28 pb-20 px-6" dir="rtl">
      
      {/* خلفية الإضاءة المتحركة - قللتها شوية لراحة العين */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* العمود الأيمن: المحتوى والنصوص (خليته 40% عشان الهدوء البصري) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:w-[40%] pt-8 text-center lg:text-right items-center lg:items-start"
        >
          {/* شارة صغيرة */}
          <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 text-[10px] font-bold tracking-widest uppercase italic">استشارة استراتيجية</span>
          </motion.div>

          {/* العنوان الرئيسي */}
          <motion.h1 variants={itemVariants} className="text-white text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tight">
            جاهز <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 italic">
               نكبر سوا؟
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12 max-w-sm">
            خلينا نتكلم عن بيزنسك، نفهم أهدافك، ونرسم لك خريطة طريق واضحة للنجاح الرقمي.
          </motion.p>

          {/* المميزات بشكل أبسط */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 mb-16 w-full max-w-xs">
            {[
              "تحليل وضع البيزنس وتحديد الفجوات.",
              "اكتشاف فرص نمو جديدة غير مستغلة.",
              "رسم خريطة طريق مبدئية لأهدافك.",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-400 group">
                <FiCheckCircle className="text-blue-600 text-lg flex-shrink-0" />
                <span className="text-[15px]">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* قسم الأسئلة الشائعة بنسخة أهدى بكتير */}
          <motion.div variants={itemVariants} className="w-full max-w-sm border-t border-white/5 pt-12">
            <h3 className="text-white/40 font-bold text-xs uppercase tracking-[0.2em] mb-8">أسئلة شائعة</h3>
            <div className="flex flex-col gap-3 text-right">
              {faqs.map((faq, index) => (
                <div key={index} className="group border-b border-white/5 pb-3">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex justify-between items-center w-full text-slate-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    {faq.question}
                    <FiChevronDown className={`text-blue-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-500 text-[13px] leading-relaxed mt-3">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* العمود الأيسر: الـ Calendly (واخد 60% عشان يكون واضح) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full lg:w-[60%] lg:sticky lg:top-24 h-[650px] md:h-[750px] rounded-[3rem] bg-black/40 border border-white/5 shadow-2xl overflow-hidden"
        >
          {/* Overlay لتغطية الـ footer */}
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#020617] z-20 pointer-events-none" />
          
          <iframe
            src="https://calendly.com/globalnexus1999/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=020617&text_color=ffffff&primary_color=2563eb"
            className="w-full h-full relative z-10"
            frameBorder="0"
            title="Book a Call with Global Nexus"
          ></iframe>

          {/* تأثير التحميل */}
          <div className="absolute inset-0 bg-[#020617] -z-10 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}