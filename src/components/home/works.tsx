"use client";

import Image from "next/image";
import Link from "next/link";

// --- إعدادات ستايل كل قسم (تم حل مشكلة الاختفاء بإضافة ارتفاع أدنى وكلاس group) ---
const categoryStyles: Record<string, any> = {
"Website": {
    gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-auto items-start",
    imageClass: "w-full h-full object-cover",
    cardClass: "relative rounded-[2.5rem] overflow-hidden"
},
  "Branding": {
    gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[500px] lg:auto-rows-[750px]",
    imageClass: "w-full h-full object-contain p-4 md:p-8",
    cardClass: "relative group rounded-[1.5rem] overflow-hidden"
  },
  "Social": {
    gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-2 auto-rows-auto",
    imageClass: "w-full h-full object-cover",
    cardClass: "relative group rounded-3xl overflow-hidden"
  },
  "packaging": {
    gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:auto-rows-[400px] items-start",
    imageClass: "w-full h-full object-cover",
    cardClass: "relative group rounded-[2.5rem] shadow-2xl overflow-hidden"
  },
};

const projects = [
  // Website
  { id: 1, title: "Elite Fintech", category: "Website", type: "web", image: "/works/ezz-web.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-8 h-[300px] md:h-[500px] order-1 lg:order-none" },
  { id: 2, title: "Agro Platform", category: "Website", type: "reels", image: "/works/ezz-reals.mp4", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 order-2 lg:order-none" },

  // Branding
  { id: 5, title: "EZZ Exports", category: "Branding", image: "/works/main-c.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
  { id: 6, title: "Pure Land", category: "Branding", image: "/works/pure/main.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },
  { id: 7, title: "Global Identity", category: "Branding", image: "/works/dodo/main.png", gridClass: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1" },

  // Packaging
  { id: 11, title: "Nexus Bottle", category: "packaging", image: "/works/mostafa/2.jpeg", gridClass: "col-span-1 lg:col-span-4 h-[350px] lg:h-full lg:row-span-1" },
  { id: 12, title: "Eco Box", category: "packaging", image: "/works/mostafa/1.jpeg", gridClass: "col-span-1 lg:col-span-8 h-[250px] lg:h-full lg:row-span-1" },

  // Social
  { id: 20, title: "Core Render", category: "Social", image: "/works/elmaka/makaa.jpeg", gridClass: "col-span-1 lg:col-span-5 row-span-2 aspect-[9/16] lg:row-start-1" },
  { id: 21, title: "Neon Concept", category: "Social", image: "/works/ezz_social1.jpeg", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-1" },
  { id: 22, title: "Future Vision", category: "Social", image: "/works/ezz_social2.jpeg", gridClass: "col-span-1 lg:col-span-7 h-full lg:row-start-2" },
];

export default function BentoWorkSection() {
  const categories = Object.keys(categoryStyles);

  return (
    <section className="relative min-h-screen bg-transparent flex flex-col py-8 border-t border-white/5 overflow-hidden" dir="rtl">

      {/* الجملة العلوية */}
      <div className="w-full flex flex-col items-center text-center mb-16 md:mb-24 px-4 relative z-10">
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

      {/* منطقة العرض */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10 flex flex-col gap-5 md:gap-15">

        {categories.map((category) => {
          const style = categoryStyles[category];
          const categoryProjects = projects.filter(p => p.category === category).slice(0, 3);

          if (categoryProjects.length === 0) return null;

          return (
            <div key={category} className="flex flex-col w-full relative">

              {category === "Website" && (
                <div className="absolute top-110 left-15 z-20 hidden lg:block">
                  <Link href="https://ezzexport.com" className="group/btn relative inline-flex items-center gap-5 bg-white/5 border border-white/10 backdrop-blur-md px-10 py-5 rounded-full text-white transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10">
                    <span className="text-lg font-bold tracking-wide">زيارة الموقع المباشر</span>
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover/btn:rotate-45 transition-transform duration-500">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full -z-10 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  </Link>
                </div>
              )}

              {category === "Website" && (
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
              )}

              <div className={style.gridContainer}>
                {categoryProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`${style.cardClass} ${project.gridClass}`}
                  >
                    {project.type === "reels" ? (
                      <video
                        src={project.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`w-full h-full rounded-3xl ${style.imageClass}`}
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={` ${style.imageClass}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* زرار البرتفليو */}
      <div className="mt-20 flex justify-center w-full px-6">
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