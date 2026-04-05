"use client";

import { motion } from "framer-motion";

const clients = [
  {
    name: "Ezz Export",
    arabic: "عز للتصدير",
    sector: "تصدير زراعي",
    mission: "إدارة الهوية الرقمية للأسواق الأوروبية",
    result: "+45% طلبات",
  },
  {
    name: "Agro Mart",
    arabic: "أجرو مارت",
    sector: "توريدات زراعية",
    mission: "استراتيجية محتوى لبناء ثقة المستوردين",
    result: "12 دولة",
  },
  {
    name: "Bon Dodo",
    arabic: "بن دودو",
    sector: "قهوة مختصة",
    mission: "صناعة محتوى Reels وتفاعل للبراند",
    result: "800K+ مشاهدة",
  },
];

export default function ExecutiveRoster() {
  return (
    <section className="py-10 relative overflow-hidden border-t border-white/10" dir="rtl">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-4 text-center md:text-right">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold text-blue-500/60 uppercase tracking-[0.3em]">Selected Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              مشاريع أدرناها <span className="text-blue-500">بنجاح</span>
            </h2>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent mr-8" />
        </div>

        {/* Table Header - Desktop Only */}
        <div className="hidden md:grid grid-cols-12 gap-6 pb-6 border-b border-white/10 text-[10px] font-bold text-blue-500/60 uppercase tracking-[0.2em]">
          <div className="col-span-3">العميل / Client</div>
          <div className="col-span-2">المجال / Sector</div>
          <div className="col-span-5">المهمة / Mission</div>
          <div className="col-span-2 text-left">النتيجة / Impact</div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-6 md:gap-0">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 p-8 md:py-12 md:px-4 border border-white/5 md:border-0 md:border-b md:border-white/5 rounded-3xl md:rounded-none bg-white/[0.01] md:bg-transparent hover:bg-white/[0.03] md:hover:bg-white/[0.02] transition-all duration-500"
            >
              
              {/* العميل - المركز البصري في الموبايل */}
              <div className="col-span-3 flex flex-col items-center md:items-baseline gap-1">
                <h3 className="text-3xl md:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-blue-400 transition-colors">
                  {client.name}
                </h3>
                <span className="text-xs text-neutral-500 font-bold">{client.arabic}</span>
              </div>

              {/* المجال - Badge شيك في الموبايل */}
              <div className="col-span-2 flex justify-center md:justify-start">
                <span className="px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400/80 text-xs font-medium md:bg-transparent md:border-0 md:p-0 md:text-neutral-400 md:text-sm">
                  {client.sector}
                </span>
              </div>

              {/* المهمة - نص هادي */}
              <div className="col-span-5 text-center md:text-right text-sm md:text-base text-neutral-400 font-light leading-relaxed px-4 md:px-0">
                {client.mission}
              </div>

              {/* النتيجة - تركيز قوي */}
              <div className="col-span-2 flex flex-col items-center md:items-end justify-center">
                 <span className="text-[10px] font-bold text-blue-500/40 uppercase mb-2 md:hidden tracking-widest">النتيجة المحققة</span>
                 <span className="text-4xl md:text-2xl font-black text-blue-500 tracking-tighter drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                   {client.result}
                 </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 flex justify-center md:justify-end opacity-20">
          <div className="text-[10px] text-neutral-500 font-mono tracking-[0.2em]">
            SYSTEM_STATUS: OPERATIONAL // 2026
          </div>
        </div>

      </div>
    </section>
  );
}