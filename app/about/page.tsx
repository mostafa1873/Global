import { Target, Eye, Award, Rocket, CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

// دي صفحة Server Component (مفيش "use client")
export default function AboutPage() {
  const stats = [
    { label: "مشروع مكتمل", value: "150+", icon: <CheckCircle2 size={20} className="text-blue-500" /> },
    { label: "عميل سعيد", value: "80+", icon: <Award size={20} className="text-blue-500" /> },
    { label: "سنة خبرة", value: "10+", icon: <TrendingUp size={20} className="text-blue-500" /> },
    { label: "خبير تقني", value: "25+", icon: <Rocket size={20} className="text-blue-500" /> },
  ];

  return (
    <main className="min-h-screen text-white pt-32 pb-20 px-6">
      
      {/* --- Hero Section --- */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <span className="px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
          About Nexus
        </span>
        <h1 className="text-4xl md:text-7xl font-black mt-8 mb-6 tracking-tighter leading-tight">
          نبتكر الحلول التي <br /> 
          <span className="text-blue-600">تُحدث فرقاً</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-lg leading-relaxed font-light">
          نحن فريق من المبدعين والمهندسين نسعى لتحويل الأفكار المعقدة إلى واقع رقمي بسيط وجميل. 
          نؤمن بأن التكنولوجيا هي وسيلة وليست غاية.
        </p>
      </section>

      {/* --- Stats Grid --- */}
      <section className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="mb-4 w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <h2 className="text-4xl font-black mb-1 tabular-nums">{stat.value}</h2>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest font-black">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* --- Vision & Values --- */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
           <div className="absolute -right-10 -top-10 text-white/[0.02] group-hover:text-blue-600/[0.05] transition-colors">
              <Eye size={250} />
           </div>
           <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
              رؤيتنا <div className="w-8 h-1 bg-blue-600 rounded-full" />
           </h3>
           <p className="text-slate-400 leading-loose relative z-10 font-medium">
             نسعى لأن نكون الشريك المفضل للشركات التي تطمح للريادة الرقمية، من خلال تقديم حلول برمجية 
             تجمع بين الأداء الفائق وتجربة المستخدم السلسة.
           </p>
        </div>

        <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
           <div className="absolute -right-10 -top-10 text-white/[0.02] group-hover:text-blue-600/[0.05] transition-colors">
              <Target size={250} />
           </div>
           <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
              رسالتنا <div className="w-8 h-1 bg-blue-600 rounded-full" />
           </h3>
           <p className="text-slate-400 leading-loose relative z-10 font-medium">
             مهمتنا هي تبسيط التكنولوجيا وجعلها متاحة ومفيدة للجميع. نحن لا نبني تطبيقات فحسب، 
             بل نبني جسوراً بين طموحك وعملائك في كل مكان.
           </p>
        </div>
      </section>

      {/* --- Footer CTA --- */}
      <section className="max-w-7xl mx-auto mt-32 border-t border-white/5 pt-20 text-center">
         <h4 className="text-2xl font-black mb-8">هل أنت مستعد لبدء مشروعك؟</h4>
         <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all active:scale-95"
          >
            تحدث معنا
            <ArrowRight size={18} />
         </Link>
      </section>
    </main>
  );
}