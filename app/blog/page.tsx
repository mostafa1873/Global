import { Calendar, Clock, ChevronLeft, Tag, TrendingUp, Zap, ArrowUpLeft } from "lucide-react";
import Link from "next/link";
import blogData from "../../blog.json";
import Image from "next/image";


const featuredPost = blogData[0]; // المقال الرئيسي الأول
const remainingPosts = blogData.slice(1); // باقي المقالات
const trendingPosts = blogData.slice(0, 2); // الأكثر تفاعلاً (مقالين فقط)

export default function BlogPage() {
  return (
    <main className="min-h-screen text-white pt-32 pb-24 px-6 md:px-12">
      
      {/* --- Minimalist Official Header --- */}
      <header className="max-w-7xl mx-auto mb-16 px-6 border-b border-white/[0.08] pb-10" dir="rtl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-right">
          
          <div className="flex-1 w-full md:w-auto flex flex-col items-center md:items-start">
            <span className="inline-block px-4 py-1.5 rounded-full text-white bg-white/[0.08] text-[10px] font-black tracking-[0.25em] uppercase mb-4 border border-white/10">
              GLOBAL NEXUS INSIGHTS
            </span>
            <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-snug whitespace-nowrap md:whitespace-normal">
              مقالات  <br className="block md:hidden" /><span className="text-blue-600">ورؤى استراتيجية</span>
            </h1>
          </div> 

          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-blue-600/50 hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-3 text-[13px] font-bold tracking-wide text-white group"
            >
              <span>طلب استشارة استراتيجية</span>
              <ArrowUpLeft size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          
        </div>
      </header>

      {/* --- Executive Bento Grid Layout --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6" dir="rtl">
        
        {/* 1. المقال الرئيسي الكبير */}
        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug_ar}`} className="lg:col-span-2 p-6 md:p-8 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] flex flex-col justify-between gap-6 group items-center lg:items-start text-center lg:text-right-none">
            <div className="w-full h-72 md:h-96 relative rounded-[1.5rem] overflow-hidden bg-slate-900">
              <Image
                src={featuredPost.image.startsWith('/') ? featuredPost.image : `/${featuredPost.image}`}
                alt={featuredPost.title_ar}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                fill
                priority
              />
            </div>
            
            <div className="flex flex-col flex-1 justify-between w-full">
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-4 text-white text-[11px] font-bold uppercase mb-3">
                  <span className="text-blue-600">تحليلات السوق</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                  {featuredPost.title_ar}
                </h2>
                <p className="text-white text-sm md:text-base font-light leading-relaxed line-clamp-2">
                  {featuredPost.mainTitle_ar}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.04] flex justify-center lg:justify-end w-full">
                <div className="group/btn flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 group-hover:border-blue-600/40 group-hover:bg-blue-600/10 transition-all duration-400 text-white w-fit shadow-lg shadow-black/20">
                  <span className="text-sm font-bold tracking-wide">تحليل التقرير بالكامل</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <ChevronLeft size={16} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* 2. كارت الأكثر تفاعلاً */}
        <div className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] flex flex-col justify-between order-2 lg:order-none">
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 pb-5 border-b border-white/[0.06]">
              <TrendingUp size={18} className="text-blue-600" />
              <h3 className="text-base font-bold text-white">الأكثر قراءة هذا الأسبوع</h3>
            </div>
            
            {/* تم زيادة التباعد وتنسيق العناصر لتصبح كروت داخلية تملأ الفراغ بشكل احترافي رائع */}
            <div className="flex flex-col gap-4">
              {trendingPosts.map((trendPost, i) => (
                <Link 
                  key={trendPost.id} 
                  href={`/blog/${trendPost.slug_ar}`} 
                  className="group/item flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-right p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-blue-600/20 transition-all duration-300 w-full"
                >
                  <span className="font-mono text-sm text-slate-600 group-hover/item:text-blue-600 transition-colors pt-0.5">
                    0{i + 1}
                  </span>
                  <div className="flex-1 w-full">
                    <h4 className="text-xs font-bold text-white group-hover/item:text-blue-600 transition-colors leading-relaxed line-clamp-2">
                      {trendPost.title_ar}
                    </h4>
                    
                    {/* إضافة المقتطف النصي هنا لملء الفراغ العمودي بطريقة ممتازة بصرياً */}
                    <p className="text-white/50 text-[11px] font-light leading-relaxed line-clamp-2 mt-1.5 text-center lg:text-right">
                      {trendPost.mainTitle_ar}
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-3">
                      <span className="text-[10px] text-white/60">{trendPost.date}</span>
                      <span className="text-white/20 text-[9px]">•</span>
                      
                      <div className="flex items-center gap-1 text-[10px] text-white/50 group-hover/item:text-white/70 transition-colors">
                        <Clock size={11} className="text-blue-500/80" />
                        <span>10 دقائق قراءة</span>
                      </div>
                      
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-medium border ${
                        i === 0 
                          ? 'bg-blue-600/10 text-blue-400 border-blue-500/20 shadow-[0_0_12px_rgba(37,99,235,0.15)] animate-pulse' 
                          : 'bg-white/[0.04] text-white/80 border-white/10'
                      }`}>
                        {i === 0 ? "شائع الآن " : "رؤية استراتيجية"}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <h4 className="text-xs font-bold text-white mb-3 text-center lg:text-right">النشرة الدورية للمدراء التنفيذيين</h4>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="بريدك الالكتروني" 
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600 transition-colors text-center sm:text-right"
              />
              <button className="bg-blue-600 hover:bg-blue-600 px-5 py-3 rounded-xl text-xs font-bold transition-colors🚀">
                انضمام
              </button>
            </div>
          </div>
        </div>

        {/* 3. باقي المقالات */}
        {remainingPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug_ar}`} className="p-5 rounded-[2rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.06] hover:border-blue-600/30 transition-all duration-400 flex flex-col justify-between group items-center lg:items-start text-center lg:text-right">
            <div className="w-full">
              <div className="w-full h-48 relative rounded-2xl overflow-hidden bg-slate-900 mb-5">
                <Image
                  src={post.image.startsWith('/') ? post.image : `/${post.image}`}
                  alt={post.title_ar}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                />
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[10px] text-white font-medium mb-3">
                <span className="text-blue-600/70">تسويق رقمي</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-blue-600 transition-colors line-clamp-2 mb-3 leading-snug">
                {post.title_ar}
              </h3>
              <p className="text-white text-xs font-light leading-relaxed line-clamp-2">
                {post.mainTitle_ar}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/[0.04] flex justify-center lg:justify-end w-full">
              <div className="group/btn flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 group-hover:border-blue-600/30 group-hover:bg-blue-600/10 transition-all duration-300 text-xs font-bold text-white w-fit">
                <span>عرض المقال</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <ChevronLeft size={12} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}