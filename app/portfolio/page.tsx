import { ExternalLink, Layout, Smartphone, Globe, Code2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      title: "منصة إي-كوميرس ون",
      category: "موقع ويب",
      description: "نظام متكامل للتجارة الإلكترونية مع لوحة تحكم ذكية ومعالجة دفع آمنة.",
      tags: ["Next.js", "Stripe", "Tailwind"],
      icon: <Globe size={20} />,
      image: "bg-gradient-to-br from-blue-600/20 to-purple-600/20"
    },
    {
      title: "تطبيق للياقة البدنية",
      category: "تطبيق موبايل",
      description: "تطبيق موبايل لمتابعة التمارين الرياضية مع ميزة الذكاء الاصطناعي لتحليل الأداء.",
      tags: ["React Native", "Firebase", "AI"],
      icon: <Smartphone size={20} />,
      image: "bg-gradient-to-br from-emerald-600/20 to-teal-600/20"
    },
    {
      title: "لوحة تحكم نكسس لليانات",
      category: "نظام داخلي",
      description: "نظام لإدارة البيانات الضخمة وتحويلها إلى رسوم بيانية تفاعلية سهلة الفهم.",
      tags: ["TypeScript", "D3.js", "Node.js"],
      icon: <Layout size={20} />,
      image: "bg-gradient-to-br from-amber-600/20 to-orange-600/20"
    },
    {
      title: "بوابة الخدمات الحكومية",
      category: "تطوير برمجيات",
      description: "أتمتة العمليات الورقية وتحويلها إلى نظام رقمي سريع وسهل الاستخدام للمواطنين.",
      tags: ["PostgreSQL", "Docker", "Next.js"],
      icon: <Code2 size={20} />,
      image: "bg-gradient-to-br from-slate-600/20 to-blue-900/20"
    }
  ];

  return (
    <main className="min-h-screen text-white pt-32 pb-20 px-6">
      
      {/* --- Header --- */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">Our Masterpieces</span>
            <h1 className="text-4xl md:text-7xl font-black mt-4 tracking-tighter">
              أعمالنا التي تتحدث <br /> 
              <span className="text-blue-600 italic">عن تميزنا</span>
            </h1>
          </div>
          <p className="text-slate-400 max-w-sm text-sm leading-loose font-medium">
            نحن لا نسلم مشاريع فحسب، نحن نبني تجارب رقمية تترك أثراً دائماً وتساعد عملائنا على التصدر.
          </p>
        </div>
      </section>

      {/* --- Projects Grid --- */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden hover:border-blue-600/40 transition-all duration-500"
          >
            {/* Project Image Placeholder */}
            <div className={`h-[250px] md:h-[350px] w-full relative flex items-center justify-center ${project.image} group-hover:scale-105 transition-transform duration-700`}>
                <div className="text-white/10 group-hover:text-white/20 transition-colors">
                    {project.icon && <project.icon.type size={120} strokeWidth={1} />}
                </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 relative bg-[#020617]/80 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                  {project.category}
                </span>
                <div className="p-3 bg-blue-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 shadow-lg shadow-blue-600/20">
                    <ExternalLink size={18} />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-blue-500 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold text-slate-500 px-2 py-1 bg-white/5 rounded-md uppercase tracking-tighter">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- Footer Call to Action --- */}
      <section className="max-w-7xl mx-auto mt-24 text-center">
        <Link 
          href="/contact"
          className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl"
        >
          مشروعك ممكن يكون هنا
          <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
        </Link>
      </section>

    </main>
  );
}