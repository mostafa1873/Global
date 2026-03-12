import { 
  Code2, Smartphone, Globe, ShieldCheck, 
  BarChart3, Palette, Cpu, Sparkles, ArrowUpRight 
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "تطوير الويب المتكامل",
      description: "بناء مواقع وتطبيقات ويب فائقة السرعة باستخدام أحدث التقنيات مثل Next.js و React.",
      icon: <Globe size={28} />,
      color: "bg-blue-600"
    },
    {
      title: "تطبيقات الموبايل",
      description: "تصميم وتطوير تطبيقات أندرويد و iOS بأداء عالي وتجربة مستخدم سلسة جداً.",
      icon: <Smartphone size={28} />,
      color: "bg-purple-600"
    },
    {
      title: "تصميم UI/UX",
      description: "واجهات مستخدم إبداعية تركز على تجربة المستخدم لضمان أعلى معدلات التحويل.",
      icon: <Palette size={28} />,
      color: "bg-pink-600"
    },
    {
      title: "حلول الذكاء الاصطناعي",
      description: "دمج تقنيات الـ AI لتمتة العمليات وتحليل البيانات بشكل ذكي داخل مشروعك.",
      icon: <Cpu size={28} />,
      color: "bg-emerald-600"
    },
    {
      title: "الأمن السيبراني",
      description: "تأمين بياناتك وحماية تطبيقاتك من الثغرات الأمنية باستخدام أقوى معايير التشفير.",
      icon: <ShieldCheck size={28} />,
      color: "bg-amber-600"
    },
    {
      title: "تحليل البيانات",
      description: "تحويل البيانات الخام إلى تقارير تفاعلية تساعدك في اتخاذ قراراتك الاستراتيجية.",
      icon: <BarChart3 size={28} />,
      color: "bg-indigo-600"
    }
  ];

  return (
    <main className="min-h-screen text-white pt-32 pb-20 px-6">
      
      {/* --- Header --- */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          <Sparkles size={14} />
          What We Offer
        </div>
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">
          خدماتنا التقنية <br /> 
          <span className="text-slate-500">لحلول لا محدودة</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-lg leading-relaxed font-light italic">
          نحن نقدم حزمة متكاملة من الخدمات الرقمية المصممة خصيصاً لتناسب حجم طموحاتك.
        </p>
      </section>

      {/* --- Services Grid --- */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative p-8 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
          >
            {/* الخلفية المضيئة عند الهوفر */}
            <div className={`absolute -right-10 -top-10 w-32 h-32 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${service.color}`} />
            
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${service.color}`}>
              {service.icon}
            </div>

            <h3 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors">
              {service.title}
            </h3>
            
            <p className="text-slate-400 leading-loose text-sm mb-8 font-medium">
              {service.description}
            </p>

            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors"
            >
              اطلب الخدمة الآن
              <ArrowUpRight size={16} />
            </Link>
          </div>
        ))}
      </section>

      {/* --- Trust Section --- */}
      <section className="max-w-5xl mx-auto mt-32 text-center p-12 rounded-[4rem] bg-gradient-to-b from-blue-900/20 to-transparent border border-white/5">
        <h2 className="text-2xl md:text-4xl font-black mb-6 italic">ليه تختار نكسس لمشروعك الجاي؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div>
            <div className="text-blue-500 font-black text-4xl mb-2">01</div>
            <p className="text-slate-300 font-bold">جودة برمجية عالمية</p>
          </div>
          <div>
            <div className="text-blue-500 font-black text-4xl mb-2">02</div>
            <p className="text-slate-300 font-bold">دعم فني متواصل</p>
          </div>
          <div>
            <div className="text-blue-500 font-black text-4xl mb-2">03</div>
            <p className="text-slate-300 font-bold">التزام تام بالمواعيد</p>
          </div>
        </div>
      </section>

    </main>
  );
}