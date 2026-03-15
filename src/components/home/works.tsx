"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// المصفوفة زي ما هي بالظبط
const projects = [
  { id: 1, src: "/assets/img1.jpg", height: "h-[400px]", title: "هوية بصرية", category: "BRANDING" },
  { id: 2, src: "/assets/img2.jpg", height: "h-[250px]", title: "تصميم رقمي", category: "DIGITAL" },
  { id: 3, src: "/assets/img3.jpg", height: "h-[500px]", title: "تجربة مستخدم", category: "UI/UX" },
  { id: 4, src: "/assets/img4.jpg", height: "h-[300px]", title: "موشن جرافيك", category: "MOTION" },
  { id: 5, src: "/assets/img5.jpg", height: "h-[450px]", title: "حملة إعلانية", category: "MARKETING" },
  { id: 6, src: "/assets/img6.jpg", height: "h-[350px]", title: "تطوير ويب", category: "DEV" },
  { id: 7, src: "/assets/img7.jpg", height: "h-[550px]", title: "إنتاج فني", category: "ART" },
  { id: 8, src: "/assets/img8.jpg", height: "h-[400px]", title: "استراتيجية", category: "STRATEGY" },
];

export default function MasonryWorkSection() {
  return (
    // الخلفية بقت غامقة (نفس لون موقعك) عشان الكلام ينطق
    <section className="relative py-18 overflow-hidden" dir="rtl">

      {/* Background Noise Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] pointer-events-none"></div>

      {/* Glow Ambient - إضاءة زرقاء خفيفة بدل البرتقالي */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header - تنسيق احترافي متجاوب */}
        <div className="mb-20 flex flex-col items-center md:items-start text-center md:text-right">

          {/* كلمة علوية صغيرة بستايل مودرن */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-4"
          >
            أعمالنا
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-5xl md:text-8xl font-black leading-[1.1] md:leading-[1]"
          >
            حيث تلتقي <br />
            <span className="relative inline-block">
              <span className="text-blue-500 italic">الرؤية بالتنفيذ.</span>
              {/* خط مضيء تحت الكلمة بيدي لمسة فنية */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 right-0 h-2 bg-blue-600/20 blur-sm rounded-full"
              />
            </span>
          </motion.h2>

          {/* الخط الفاصل الملون - متمركز في الموبايل */}
          <div className="h-1 w-20 md:w-32 bg-gradient-to-l from-blue-600 to-blue-400 mt-8 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
        </div>

        {/* Masonry Layout - التنسيق اللي طلبته */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative break-inside-avoid rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/10 bg-[#0f172a]"
            >
              {/* Image Container */}
              <div className={`relative w-full ${project.height}`}>
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Overlay - أزرق عميق يتماشى مع الـ Work */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-90 transition-all duration-500 flex flex-col justify-end p-8 text-right">
                  <span className="text-blue-400 font-bold text-xs mb-2 tracking-[0.2em]">
                    {project.category}
                  </span>
                  <h3 className="text-white font-black text-2xl md:text-3xl">
                    {project.title}
                  </h3>

                  {/* Arrow Icon */}
                  <div className="mt-4 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="rotate-180">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button - أزرق "نيكسوس" بدل البرتقالي */}
        <div className="mt-20 flex justify-center" dir="rtl">
          <Link href="/portfolio" className="group relative">
            {/* هالة ضوئية خفيفة جداً ورا الزرار */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10 flex items-center gap-5 px-6 py-3 rounded-full bg-[#ffffff-[0.03]] border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-white/[0.05]"
            >
              {/* النص - صغرنا الحجم وبقى أنحف */}
              <span className="text-white/80 group-hover:text-white font-medium text-lg tracking-tight transition-colors duration-300">
                مشاهدة جميع المشاريع
              </span>

              {/* دائرة السهم - بقت صغيرة ورقيقة */}
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center transition-all duration-500 group-hover:translate-x-[-5px]">
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
                  className="rotate-0"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </div>
            </motion.div>
          </Link>
        </div>

      </div>
    </section>
  );
}