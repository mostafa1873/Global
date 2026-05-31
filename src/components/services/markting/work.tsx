"use client";

import { motion } from "framer-motion";

export default function ServicesDetailed() {
  const services = [
    { title: "Social Media Management", desc: "إدارة حسابات الشركة على المنصات الرقمية من خلال محتوى منظم، تصميمات متناسقة، وجدولة واضحة تساعد على بناء حضور مستمر." },
    { title: "Content Strategy", desc: "تخطيط المحتوى بناءً على أهداف الشركة والجمهور المستهدف، بحيث لا يكون النشر عشوائيًا، بل يخدم الوعي، الثقة، والتحويل." },
    { title: "Paid Advertising", desc: "إدارة الحملات الإعلانية بطريقة تساعد الشركة على الوصول إلى الجمهور المناسب وتحسين فرص الحصول على نتائج قابلة للقياس." },
    { title: "Campaign Planning", desc: "تخطيط حملات موسمية أو تجارية حسب أهداف الشركة، سواء لزيادة الوعي، إطلاق خدمة، الترويج لعرض، أو جذب عملاء محتملين." },
    { title: "Performance Optimization", desc: "متابعة النتائج وتحليل الأداء بهدف تحسين المحتوى، الإعلانات، وتجربة العميل بشكل مستمر." }
  ];

  return (
    <section className="relative py-10 overflow-hidden border border-white/10" dir="rtl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-10 text-center">
          خدمات متكاملة <span className="text-blue-600">تضمن ظهورك</span>
        </h2>

        {/* الخط الزمني للخدمات */}
        <div className="relative border-r border-blue-600/30 mr-4 space-y-8 md:space-y-12">
          {services.map((item, index) => (
            <div key={index} className="relative pr-6 md:pr-8">
              <div className="absolute -right-1.5 top-0 w-3 h-3 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
              <div className="p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-600/30 transition-colors">
                <h3 className="text-blue-600 font-bold text-lg md:text-xl mb-2">{item.title}</h3>
                <p className="text-white/90 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* قسم لمن تناسب والنتيجة (تصميم هندسي متقاطع) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 md:mt-24">
          <div className="relative p-6 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10">
            <div className="absolute -top-3 -right-3 w-8 h-8 md:w-10 md:h-10 border-t-2 border-r-2 border-blue-600/50" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">لمن هذه الخدمة؟</h3>
            <p className="text-white/90 leading-relaxed text-sm md:text-base mb-4">هذه الخدمة مناسبة للشركات التي تريد تحسين حضورها على السوشيال ميديا، الوصول إلى عملاء جدد، أو تنظيم التسويق الرقمي الخاص بها بشكل أكثر احترافية.</p>
            <p className="text-white/90 leading-relaxed text-sm md:text-base">كما تناسب الشركات التي لديها خدمات قوية لكنها لا تصل إلى جمهورها بالشكل المطلوب.</p>
          </div>

          <div className="relative p-6 md:p-10 rounded-3xl bg-blue-600/10 border border-blue-600/20">
            <div className="absolute -bottom-3 -left-3 w-8 h-8 md:w-10 md:h-10 border-b-2 border-l-2 border-blue-600/50" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">النتيجة المتوقعة</h3>
            <p className="text-white leading-relaxed text-sm md:text-base">بعد تنفيذ الخدمة، يصبح لدى الشركة حضور تسويقي أوضح، محتوى أكثر تنظيمًا، ورسائل أقوى تساعد على بناء الثقة وزيادة فرص التواصل مع العملاء المحتملين.</p>
          </div>
        </div>
      </div>
    </section>
  );
}