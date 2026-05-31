"use client";

import { motion } from "framer-motion";
import { FiDatabase, FiSettings, FiTrendingUp } from "react-icons/fi";

export default function CRMServiceOverview() {
  const features = [
    {
      title: "متابعة العملاء والبيانات",
      desc: "تسجيل دقيق لكل بيانات العميل وتاريخ تعاملاته لضمان عدم ضياع أي فرصة.",
      icon: <FiDatabase />
    },
    {
      title: "تنظيم الطلبات والعمليات",
      desc: "تحويل الطلبات العشوائية إلى دورة عمل واضحة وسلسة تزيد من إنتاجية الفريق.",
      icon: <FiSettings />
    },
    {
      title: "رفع كفاءة الأداء",
      desc: "الهدف هو تحويل العمليات اليومية إلى نظام قابل للمتابعة، القياس، والتحسين المستمر.",
      icon: <FiTrendingUp />
    }
  ];

  return (
    <section className="relative w-full py-10 px-6 text-center md:text-right" dir="rtl">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* العنوان والنبذة بنفس نصك الحرفي */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-24 border-b border-white/10 pb-12">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8 md:mb-0">
            نبذة عن الخدمة
          </h2>
          <div className="max-w-xl">
            <p className="text-xl text-white font-medium mb-6">
              نقوم بتطوير أنظمة CRM وأنظمة أعمال مخصصة تساعد الشركات على متابعة العملاء، تسجيل البيانات، تنظيم الطلبات، وإدارة العمليات بطريقة أكثر وضوحًا وكفاءة.
            </p>
            <p className="text-lg text-white/90 font-light leading-relaxed">
              الهدف من هذه الخدمة هو تقليل العشوائية داخل العمل، وتحويل العمليات اليومية إلى نظام واضح يمكن متابعته وتحسينه.
            </p>
          </div>
        </div>

        {/* الكروت بتنسيق نظيف وهادئ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center md:items-start"
            >
              <div className="text-blue-600 text-3xl mb-8">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/90 leading-relaxed font-light">
                {feature.desc}
              </p>
              
              <div className="mt-12 h-[1px] w-12 bg-blue-600/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}