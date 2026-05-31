"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    enTitle: "Branding & Visual Identity",
    arTitle: "هويات بصرية تعكس قيمة العلامة التجارية",
    desc: "هويات بصرية تساعد الشركات على الظهور بشكل أوضح وأكثر احترافية.",
  },
  {
    id: "02",
    enTitle: "Web Development",
    arTitle: "مواقع إلكترونية مصممة للأداء وتجربة المستخدم",
    desc: "مواقع إلكترونية مصممة للأداء، الوضوح، وتحسين تجربة العملاء.",
  },
  {
    id: "03",
    enTitle: "Digital Marketing",
    arTitle: "استراتيجيات تسويق تدعم الوصول والنمو",
    desc: "استراتيجيات تسويق رقمي تساعد الشركات على الوصول لجمهورها بشكل أفضل.",
  },
  {
    id: "04",
    enTitle: "CRM & Business Systems",
    arTitle: "أنظمة تساعد الشركات على تنظيم العمليات وإدارة العملاء",
    desc: "أنظمة رقمية تساعد على تنظيم العمليات وإدارة العملاء بكفاءة أعلى.",
  },
  {
    id: "05",
    enTitle: "Mobile Applications",
    arTitle: "تطبيقات رقمية تدعم تجربة المستخدم",
    desc: "تطبيقات رقمية تساعد الشركات على تقديم تجربة أكثر مرونة وسهولة.",
  },
  {
    id: "06",
    enTitle: "UI / UX Design",
    arTitle: "تجارب استخدام أكثر وضوحًا وفعالية",
    desc: "تصميم واجهات وتجارب استخدام تركز على الوضوح وسهولة التفاعل.",
  }
];

export default function Services() {
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const as const }
    })
  };

  return (
    <section className="relative w-full py-10 border-t border-white/5 overflow-hidden z-10 select-none" dir="rtl">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nexus-blue/[0.02] blur-[150px] rounded-full pointer-events-none z-0 transform-gpu translate-z-0 will-change-transform" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center text-center space-y-5 transform-gpu">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-nexus-blue/20 bg-nexus-blue/5">
            <span className="w-1.5 h-1.5 rounded-full bg-nexus-blue animate-pulse" />
            <span className="text-nexus-blue font-mono tracking-widest text-xs uppercase pt-0.5">
              خدماتنا
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight select-text">
            حلول رقمية مصممة <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/50">
              لدعم نمو الشركات
            </span>
          </h2>

          <p className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-2xl select-text pt-2">
            كل خدمة نقدمها مصممة لتخدم هدفًا واضحًا داخل رحلة نمو الشركة، سواء كان الهدف بناء هوية أقوى، تطوير موقع إلكتروني، تحسين الوصول للعملاء، أو تنظيم العمليات الداخلية          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const serviceSlug = service.enTitle.toLowerCase().replace(/ & /g, '-').replace(/ \/ /g, '-').replace(/\s+/g, '-');

            return (
              <motion.a
                key={service.id}
                href={`/services/${serviceSlug}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariant}
                custom={index}
                className="group relative flex flex-col justify-between p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:border-nexus-blue/30 hover:bg-white/[0.02] transition-all duration-500 h-full min-h-[350px] transform-gpu cursor-pointer active:scale-[0.99]"
              >
                <div className="absolute inset-0 bg-radial-gradient from-nexus-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu" />

                {/* الهيدر العلوي: ممركز في الموبايل، وطبيعي يمين وشمال في الديسكتوب مع إضافة Gap مناسب */}
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start w-full mb-8 gap-3 sm:gap-0">
                  <span className="font-mono text-xs text-white/50 uppercase tracking-widest border-b border-white/10 pb-1 text-center sm:text-right">
                    {service.enTitle}
                  </span>
                  <span className="font-mono text-lg text-white group-hover:text-nexus-blue transition-colors duration-300 font-bold mt-2 sm:mt-0">
                    {service.id}
                  </span>
                </div>

                {/* محاذاة النص والزرار: النصوص يمين والزرار شمال في نفس السطر بدقة ريسبونسف */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-auto w-full">

                  {/* النصوص: ممركزة في الموبايل وبمحاذاة كاملة في الشاشات الكبيرة */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-right space-y-3 select-text w-full sm:max-w-[70%]">
                    <h3 className="text-xl font-bold text-white group-hover:text-nexus-blue transition-colors duration-300 leading-snug">
                      {service.arTitle}
                    </h3>
                    <p className="text-white/60 group-hover:text-white/90 transition-colors duration-300 text-sm font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* الزرار الفخم: ممركز في الموبايل وعلى اليسار في الديسكتوب */}
                  <div className="flex justify-center sm:justify-end w-full sm:w-auto sm:pb-1">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 text-xs font-medium tracking-wide text-white/60 group-hover:text-white bg-white/[0.02] border border-white/[0.08] group-hover:border-nexus-blue/50 group-hover:bg-nexus-blue/[0.04] rounded-full transition-all duration-300 backdrop-blur-md whitespace-nowrap overflow-hidden relative">
                      <span>استكشف الخدمة</span>

                      {/* منطقة حركة السهم المودرن */}
                      <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white/40 group-hover:text-nexus-blue transform transition-all duration-300 group-hover:-translate-x-5 absolute"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>

                        {/* السهم الثاني اللى بيظهر من اليمين مكان اللى مشى */}
                        <svg
                          className="w-4 h-4 text-nexus-blue transform transition-all duration-300 translate-x-5 group-hover:translate-x-0 absolute"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-nexus-blue/0 to-transparent group-hover:via-nexus-blue/40 transition-all duration-700 pointer-events-none transform-gpu" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}