"use client";

import Image from "next/image";
import Link from "next/link";

import case1 from '../../assets/(0).jpg'
import case2 from '../../assets/(15).jpg'
import case3 from '../../assets/(17).jpg'
import case4 from '../../assets/(0).jpg'
import case5 from '../../assets/(0).jpg'
import case6 from '../../assets/(0).jpg'


const projects = [
  { id: 1, src: case1, title: "هوية بصرية", category: "BRANDING" },
  { id: 2, src: case2, title: "تصميم رقمي", category: "DIGITAL" },
  { id: 3, src: case3, title: "تجربة مستخدم", category: "UI/UX" },
  { id: 4, src: case4, title: "موشن جرافيك", category: "MOTION" },
  { id: 5, src: case5, title: "حملة إعلانية", category: "MARKETING" },
  { id: 6, src: case6, title: "حملة إعلانية", category: "MARKETING" },
];

export default function BentoWorkSection() {

  // 🔹 التوزيع الجديد: يملأ كل الفراغات (Gap Filler)
  const getGridItemClass = (index: number) => {
    switch (index) {
      case 0:
        // موبايل: كامل العرض | ديسك توب: كبير 2x2
        return "col-span-2 row-span-2 md:col-span-2 md:row-span-2"; 
      case 1:
        // موبايل: واخد نص العرض (هيجي جنب رقم 2)
        return "col-span-1 row-span-1 md:col-span-1 md:row-span-2"; 
      case 2:
        // موبايل: نص العرض (هيقفل الصف مع رقم 1)
        return "col-span-1 row-span-1 md:col-span-2 md:row-span-1"; 
      case 3:
        // موبايل: كامل العرض (عشان ميسيبش خرم في الجنب)
        return "col-span-2 row-span-1 md:col-span-1 md:row-span-1"; 
      case 4:
        // موبايل: نص العرض
        return "col-span-1 row-span-2 md:col-span-1 md:row-span-2"; 
      case 5:
        // موبايل: نص العرض (يقفل مع رقم 4)
        return "col-span-1 row-span-2 md:col-span-2 md:row-span-2"; 
      default:
        return "col-span-1";
    }
  };

  return (
    <section className="relative min-h-screen bg-transparent flex flex-col py-8 border-t border-white/5" dir="rtl">

      {/* 🔹 الجملة العلوية - بدون أي تغيير */}
      <div className="w-full flex flex-col items-center text-center mb-12 md:mb-20 px-4 relative z-10">
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 opacity-80">
          <span className="w-8 md:w-12 h-[1px] bg-blue-600/50"></span>
          <span className="text-blue-500 font-bold tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-xs uppercase">
            Creative Portfolio
          </span>
          <span className="w-8 md:w-12 h-[1px] bg-blue-600/50"></span>
        </div>

        <h2 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.2] md:leading-tight tracking-tight max-w-[90%] md:max-w-4xl">
          نصنع <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-600">الواقع</span> <br className="hidden sm:block" />
          من خيالك.
        </h2>

        <div className="mt-6 md:mt-8 h-[2px] w-16 md:w-24 bg-gradient-to-l from-blue-600 to-transparent rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"></div>
      </div>

      {/* 🔹 منطقة العرض (Bento Grid) - Gap-2 للموبايل لشكل متلاحم أكثر */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 auto-rows-[160px] md:auto-rows-[300px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative overflow-hidden rounded-[1.2rem] md:rounded-[2rem] group cursor-pointer border border-white/5 bg-[#020617] ${getGridItemClass(index)}`}
            >
              {/* الصورة */}
              <Image
                src={project.src}
                alt={project.title}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* تدرج لوني أسود */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

              {/* المحتوى */}
              <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end">
                <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="inline-block px-2 py-0.5 mb-2 text-[8px] md:text-xs font-bold tracking-widest text-blue-400 border border-blue-500/30 bg-blue-500/10 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-white text-sm md:text-3xl font-bold leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 زرار البرتفليو - بدون أي تغيير */}
      <div className="mt-16 flex justify-center w-full px-6">
        <Link href="/portfolio" className="group relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-[25px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <button className="relative z-10 px-8 py-4 md:px-12 md:py-5 bg-white/5 border border-white/10 rounded-full text-white font-bold uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/40 hover:scale-105">
            استكشف جميع المشاريع
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center transition-transform group-hover:-translate-x-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="rotate-180">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </Link>
      </div>

    </section>
  );
}