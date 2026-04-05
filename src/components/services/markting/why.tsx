"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "دراسة المنافسين",
    engTitle: "Competitor Analysis",
    desc: "بنغوص في سوقك، بنعرف المنافسين بيعملوا إيه، إيه نقط قوتهم وضعفهم، عشان نطلع بـ 'الخلطة' اللي تخليك في حتة تانية خالص.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "تحديد الـ Brand Voice",
    engTitle: "Tone of Voice",
    desc: "البراند بتاعك هيتكلم إزاي؟ فورمال؟ ولا روش؟ ولا بيخاطب العاطفة؟ بنحدد النبرة اللي هتبني علاقة حقيقية وثقة مع جمهورك.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "الاعتماد والتنفيذ",
    engTitle: "Approval & Execution",
    desc: "مفيش مفاجآت. بنعرض عليك بلان المحتوى كاملة، توافق عليها، ونبدأ نحول الورق لتصاميم وفيديوهات تخطف العين.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "التقارير والتطوير",
    engTitle: "Reports & Optimization",
    desc: "البيزنس أرقام. آخر كل شهر بنقعد سوا، نحلل اللي حصل، نشوف إيه اللي جاب مبيعات ونطوره، وإيه اللي محتاج يتغير.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-10 overflow-hidden border-t border-white/10" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10" />

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          >
            Workflow          
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tighter"
          >
            نظام الشغل
          </motion.h2>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* الخط الواصل الخلفي */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent hidden lg:block -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                {/* تعديل: أضفت items-center و text-center للموبايل ورجعتها items-start للشاشات الكبيرة */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col items-center md:items-start text-center md:text-right relative overflow-hidden">

                  {/* الدائرة العلوية */}
                  <div className="mb-8 relative">
                    <div className="w-14 h-14 bg-white/5 text-blue-400 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 border border-white/10 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                      {step.icon}
                    </div>
                    {/* تعديل: أضفت right-1/2 translate-x-1/2 لسنترة الرقم فوق الأيقونة في الموبايل */}
                    <div className="absolute -top-2 -right-2 md:right-auto md:-right-2 text-[10px] font-mono font-bold bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-lg border border-[#020617]">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-blue-500/60 font-bold mb-4 block">
                    {step.engTitle}
                  </span>

                  <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                    {step.desc}
                  </p>

                  {/* الخط السفلي - يتوسط في الموبايل */}
                  <div className="w-8 h-1 bg-white/10 mt-6 rounded-full group-hover:w-full transition-all duration-700 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(37,99,235,0.8)] mx-auto md:mx-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-neutral-500 italic text-sm font-medium">
            نظامنا مصمم عشان يريحك إحنا بنهتم بالتفاصيل وإنت تهتم بالنتائج.
          </p>
        </div>

      </div>
    </section>
  );
}