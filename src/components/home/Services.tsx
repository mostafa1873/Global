"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    enTitle: "Branding & Visual Identity",
    arTitle: "هويات بصرية تعكس قيمة العلامة التجارية",
    desc: "نقوم بتطوير هويات بصرية تساعد الشركات على بناء حضور أكثر وضوحًا واحترافية واتساقًا عبر مختلف القنوات والمنصات الرقمية.",
  },
  {
    id: "02",
    enTitle: "Web Development",
    arTitle: "مواقع إلكترونية مصممة للأداء وتجربة المستخدم",
    desc: "نطور مواقع إلكترونية تجمع بين التصميم الحديث، الأداء السريع، وتجربة الاستخدام لدعم التحويل وتحسين الحضور الرقمي للشركات.",
  },
  {
    id: "03",
    enTitle: "Digital Marketing",
    arTitle: "استراتيجيات تسويق تدعم الوصول والنمو",
    desc: "نعمل على بناء حملات واستراتيجيات رقمية تساعد الشركات على تحسين الوصول، تعزيز التفاعل، ودعم اكتساب العملاء بطريقة أكثر كفاءة.",
  },
  {
    id: "04",
    enTitle: "CRM & Business Systems",
    arTitle: "أنظمة تساعد الشركات على تنظيم العمليات وإدارة العملاء",
    desc: "نطور حلولًا تساعد الشركات على متابعة العملاء وتنظيم البيانات وتحسين سير العمل بما يدعم الكفاءة التشغيلية.",
  },
  {
    id: "05",
    enTitle: "Mobile Applications",
    arTitle: "تطبيقات رقمية تدعم تجربة المستخدم",
    desc: "نقوم بتطوير تطبيقات تساعد الشركات على تقديم تجربة أكثر مرونة وسهولة لعملائها عبر مختلف الأجهزة.",
  },
  {
    id: "06",
    enTitle: "UI / UX Design",
    arTitle: "تجارب استخدام أكثر وضوحًا وفعالية",
    desc: "نصمم واجهات وتجارب استخدام تركز على سهولة التفاعل وتحسين تجربة العميل ودعم الأهداف التجارية.",
  }
];

export default function Services() {
  // أنيميشن كارت الشاشة الناعم للظهور عند السكرول
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section className="relative w-full py-10 border-t border-white/5 overflow-hidden z-10 select-none" dir="rtl">
      

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nexus-blue/[0.02] blur-[150px] rounded-full pointer-events-none z-0 transform-gpu translate-z-0 will-change-transform" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* هيدر السيكشن - متسنتر وشيك جداً ومظبوط ريسبونسف */}
        <div className="max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center text-center space-y-5 transform-gpu">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-nexus-blue/20 bg-nexus-blue/5">
            <span className="w-1.5 h-1.5 rounded-full bg-nexus-blue animate-pulse" />
            <span className="text-nexus-blue font-mono tracking-widest text-xs uppercase pt-0.5">
             منظومة الخدمات الرقمية
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight select-text">
            حلول رقمية مصممة <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/50">
              لدعم النمو
            </span>
          </h2>
          
          <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-2xl select-text pt-2">
            نقدم مجموعة من الخدمات الرقمية التي تساعد الشركات على تطوير حضورها الرقمي وتحسين تجربة العملاء وبناء أنظمة تدعم التوسع والاستمرارية.
          </p>
        </div>

        {/* الشبكة الهندسية الصارمة والمتزنة (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariant}
              custom={index}
              /* تم إضافة transform-gpu لمنع تهنيج الكروت أثناء السكرول */
              className="group relative flex flex-col justify-between p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:border-nexus-blue/30 hover:bg-white/[0.02] transition-all duration-500 h-full min-h-[320px] transform-gpu"
            >
              {/* تأثير التوهج الخلفي الناعم جداً اللي بينور جوه الكارت عند الـ Hover */}
              <div className="absolute inset-0 bg-radial-gradient from-nexus-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu" />

              {/* الجزء العلوي: الرقم والخط التعريفي - متسنتر في الموبايل بس */}
              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start w-full mb-8 gap-3 md:gap-0">
                <span className="font-mono text-xs text-white/30 uppercase tracking-widest border-b border-white/10 pb-1 text-center md:text-right">
                  {service.enTitle}
                </span>
                <span className="font-mono text-lg text-white/10 group-hover:text-nexus-blue transition-colors duration-300 font-bold">
                  {service.id}
                </span>
              </div>

              {/* الجزء الأوسط والسفلي: النصوص مرتبة ومظبوطة في النص للموبايل */}
              <div className="flex flex-col items-center md:items-start text-center md:text-right space-y-3 mt-auto select-text">
                <h3 className="text-xl font-bold text-white group-hover:text-nexus-blue transition-colors duration-300 leading-snug">
                  {service.arTitle}
                </h3>
                <p className="text-white/40 group-hover:text-white/60 transition-colors duration-300 text-sm font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* خط ديكوري فخم جداً أسفل الكارت يضيء بالأزرق عند الـ Hover */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-nexus-blue/0 to-transparent group-hover:via-nexus-blue/40 transition-all duration-700 pointer-events-none transform-gpu" />

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}