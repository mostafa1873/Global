"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    id: "01",
    title: "تفكير استراتيجي",
    desc: "نبدأ كل مشروع بفهم واضح للأهداف قبل الانتقال إلى التنفيذ.",
  },
  {
    id: "02",
    title: "حلول مخصصة",
    desc: "نطوّر حلولًا تناسب طبيعة كل نشاط بدلًا من الاعتماد على نماذج جاهزة.",
  },
  {
    id: "03",
    title: "تجربة مستخدم أفضل",
    desc: "نركز على تحسين تجربة العميل في كل نقطة تواصل رقمية.",
  },
  {
    id: "04",
    title: "تنفيذ واضح ومنظم",
    desc: "نعتمد على خطوات عمل واضحة تساعد على إدارة المشروع بكفاءة.",
  },
  {
    id: "05",
    title: "حلول قابلة للنمو",
    desc: "نطوّر أنظمة وحلول يمكن تطويرها مع توسع الشركة واحتياجاتها المستقبلية.",
  }
];

export default function WhyGlobalNexus() {
  return (
    <section className="relative w-full py-10 border-t border-white/5 z-10 select-none" dir="rtl">
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12">

        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-12">

          {/* الجزء الأيمن: الثابت في الديسكتوب والمتسنتر في الموبايل */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-right space-y-6 lg:sticky lg:top-40 transform-gpu">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
              <span className="text-white font-mono tracking-widest text-xs uppercase pt-0.5">
                لماذا Global Nexus
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight select-text">
              شراكات رقمية مبنية <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                على الوضوح والتنفيذ
              </span>
            </h2>

            <p className="text-white/85 text-base md:text-lg font-light leading-relaxed select-text pt-2 max-w-md">
              نعمل مع الشركات التي تبحث عن تطوير حضورها الرقمي بشكل احترافي، من خلال حلول تجمع بين الفهم التجاري، التنفيذ التقني، والتصميم الواضح.            </p>
          </div>

          {/* الجزء الأيسر: التدفق العمودي الشفاف والنظيف */}
          <div className="w-full lg:w-1/2 relative flex flex-col space-y-16 md:space-y-24 md:pr-12 lg:pr-16">

            {/* خط رأسي أنيق يظهر في الديسكتوب بس يفصل المسار */}
            <div className="hidden md:block absolute right-0 top-4 bottom-4 w-[1px] bg-gradient-to-b from-white/20 via-white/50 to-transparent pointer-events-none" />

            {reasons.map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
                className="group relative flex flex-col items-center md:items-start text-center md:text-right transform-gpu"
              >
                {/* الدائرة المضيئة الصامتة على الخط في الديسكتوب */}
                <div className="hidden md:block absolute -right-[53px] lg:-right-[69px] top-2 w-2 h-2 rounded-full bg-[#020617] border border-white/30 group-hover:border-white group-hover:scale-125 transition-all duration-300 z-20" />

                {/* الرقم */}
                <span className="font-mono text-xs text-white tracking-widest mb-3 block font-bold group-hover:text-white/50 transition-colors duration-300">
                  {reason.id}
                </span>

                {/* العنوان */}
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-3 select-text group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                  {reason.title}
                </h3>

                {/* الوصف الأصلي كامل */}
                <p className="text-white text-sm md:text-base font-light leading-relaxed max-w-md select-text group-hover:text-white/50 transition-colors duration-300">
                  {reason.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}