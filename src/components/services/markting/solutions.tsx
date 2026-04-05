"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "خطة محتوى",
    desc: "مفيش بوست بينزل صدفه. بنعمل جدول شهري مدروس بناءً على أهدافك البيعية.",
    align: "start",
    bgColor: "bg-[#030712]/80 backdrop-blur-xl",
    textColor: "text-white",
    mockup: "calendar",
    borderColor: "border-white/5",
    rotate: "lg:-rotate-6"
  },
  {
    title: "تصميم وإنتاج",
    desc: "بنسلمك تصاميم وفيديوهات (Reels) احترافية تليق ببراند بيحترم عميله.",
    align: "end",
    bgColor: "bg-blue-950/20 backdrop-blur-md",
    textColor: "text-white",
    mockup: "video",
    borderColor: "border-blue-500/20 shadow-[0_0_40px_-15px_rgba(37,99,235,0.2)]",
    rotate: "lg:rotate-6"
  },
  {
    title: "إدارة التفاعل",
    desc: "رد سريع واحترافي على التعليقات والرسائل، لأن كل رسالة هي فرصة بيع ضايعة.",
    align: "start",
    bgColor: "bg-[#030712]/80 backdrop-blur-xl",
    textColor: "text-white",
    mockup: "chat",
    borderColor: "border-white/5",
    rotate: "lg:-rotate-3"
  },
  {
    title: "تحليل الأداء",
    desc: "تقرير شهري بالأرقام (الوصول، التفاعل، المبيعات) عشان تعرف إنت رايح فين.",
    align: "end",
    bgColor: "bg-blue-950/20 backdrop-blur-md",
    textColor: "text-white",
    mockup: "chart",
    borderColor: "border-blue-500/20 shadow-[0_0_40px_-15px_rgba(37,99,235,0.2)]",
    rotate: "lg:rotate-3"
  }
];

export default function FloatingServices() {
  return (
    <section className="py-10 md:py-10 overflow-hidden border-t border-white/10" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* العنوان الرئيسي */}
        <div className="mb-10 md:mb- relative text-center md:text-right">
          <div className="absolute top-0 right-1/2 md:right-0 translate-x-1/2 md:translate-x-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
          
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight"
          >
            إحنا بنعمل إيه بالظبط؟
          </motion.h2>
          <p className="text-blue-500 text-lg md:text-xl font-bold tracking-[0.2em] uppercase opacity-80">
            Professional Solutions
          </p>
        </div>

        {/* شبكة الخدمات */}
        <div className="relative space-y-8 md:space-y-[-40px]">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex w-full justify-center ${service.align === 'start' ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative group ${service.bgColor} ${service.textColor} p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] w-full md:max-w-3xl border ${service.borderColor} hover:border-blue-500/30 transition-all duration-700 text-center md:text-right`}
              >
                {/* المحتوى النصي */}
                <div className="relative z-30 flex flex-col items-center md:items-start">
                  <h3 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 tracking-tight">{service.title}</h3>
                  <p className="text-base md:text-xl text-neutral-400 leading-relaxed max-w-lg font-medium">
                    {service.desc}
                  </p>
                </div>

                {/* الموك آب - يظهر فقط في الشاشات الكبيرة للحفاظ على نظافة التصميم في الموبايل */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute hidden lg:block -top-12 ${service.rotate} 
                    ${service.align === 'start' ? '-left-32' : '-right-32'} z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
                >
                  {service.mockup === "calendar" && <CalendarMockup />}
                  {service.mockup === "video" && <VideoMockup />}
                  {service.mockup === "chat" && <ChatMockup />}
                  {service.mockup === "chart" && <ChartMockup />}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// المكونات الرسومية (Mockups) - مفيش أي تغيير فيها
function CalendarMockup() {
  return (
    <div className="w-52 h-64 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl p-5 border border-white/10 flex flex-col gap-4 text-right">
      <div className="w-full h-32 bg-blue-500/10 rounded-2xl border border-blue-500/20 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
      </div>
      <div className="h-2 w-full bg-white/10 rounded-full" />
      <div className="h-2 w-2/3 bg-white/10 rounded-full" />
      <div className="mt-auto flex justify-between items-center">
        <div className="w-10 h-10 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
        <div className="w-12 h-6 bg-white/5 rounded-lg" />
      </div>
    </div>
  );
}

function VideoMockup() {
  return (
    <div className="w-64 h-44 bg-[#0a0f1e] rounded-[2rem] shadow-2xl overflow-hidden relative border border-blue-500/30">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
           <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <div className="w-3/4 h-full bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,1)]" />
      </div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="w-56 bg-[#030712] rounded-3xl shadow-2xl p-6 border border-white/10 space-y-6">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-white/10" />
        <div className="w-28 h-12 bg-white/5 rounded-2xl rounded-tr-none border border-white/5" />
      </div>
      <div className="flex gap-3 flex-row-reverse">
        <div className="w-10 h-10 rounded-full bg-blue-600" />
        <div className="w-24 h-12 bg-blue-600/20 rounded-2xl rounded-tl-none border border-blue-500/30" />
      </div>
    </div>
  );
}

function ChartMockup() {
  return (
    <div className="w-72 h-48 bg-white/5 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 border border-blue-500/20 relative">
      <div className="flex items-end gap-3 h-full">
        {[30, 60, 40, 85, 50, 70].map((h, i) => (
          <motion.div 
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
            className="flex-1 bg-blue-500/30 rounded-t-lg border-t border-blue-400 relative group"
          >
            <div className="absolute -top-1 left-0 right-0 h-0.5 bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,1)]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}