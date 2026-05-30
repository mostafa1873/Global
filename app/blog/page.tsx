import { Calendar, Clock, ChevronLeft, Tag, ArrowLeft, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
// استيراد بيانات المدونة من ملف الـ JSON
import blogData from "../../blog.json";
import Image from "next/image";

export default function BlogPage() {
  // استخدام البيانات من ملف الـ JSON مباشرة
  const posts = blogData;

  // هناخد أول 3 مقالات كعينة نعرضها في قسم "الأكثر قراءة" في السايدبار
  const trendingPosts = posts.slice(0, 3);

  return (
    <main className="min-h-screen text-white pt-32 pb-20 px-6">

      {/* --- Blog Header --- */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 border-b border-white/5 pb-12">

          <div className="text-center md:text-right">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
              المدونة <span className="text-blue-600">التقنية</span>
            </h1>
            <p className="text-slate-400 max-w-xl text-sm md:text-lg leading-relaxed font-light">
              مقالات حصرية من خبراء نكسس حول أحدث تقنيات البرمجة، التصميم، واستراتيجيات الأعمال الرقمية.
            </p>
          </div>

          {/* زر حجز استشارة أو بدء مشروع (شكل Premium Glassmorphism) */}
          <div className="w-full md:w-auto" dir="rtl">
            <Link 
              href="/contact" 
              className="group relative flex items-center justify-center gap-4 py-4 px-8 rounded-full bg-white/[0.02] border border-white/10 hover:border-blue-500/50 backdrop-blur-md overflow-hidden transition-all duration-500 shadow-[0_0_0_0_rgba(37,99,235,0)] hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)]"
            >
              {/* تأثير الإضاءة الخلفية للزرار عند الـ Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Zap size={14} className="fill-current" />
              </div>
              <span className="relative z-10 text-sm font-black tracking-wide text-slate-200 group-hover:text-white transition-colors">
                ابدأ مشروعك معنا
              </span>
              <ArrowLeft size={18} className="relative z-10 text-slate-500 group-hover:text-blue-400 group-hover:-translate-x-1 transition-all duration-300" />
            </Link>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12" dir="rtl">

        {/* --- Main Posts Grid --- */}
        <div className="lg:col-span-8 grid gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group relative grid md:grid-cols-5 gap-6 p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-600/30 transition-all duration-500">
              {/* Thumbnail */}
              <div className="relative md:col-span-2 h-48 md:h-full rounded-[1.5rem] overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity bg-slate-900">
                <Image
                  src={post.image.startsWith('/') ? post.image : `/${post.image}`}
                  alt={post.title_ar}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  fill
                  priority={false}
                />
              </div>

              {/* Post Content */}
              <Link href={`/blog/${post.slug_ar}`} className="md:col-span-3 flex flex-col justify-center py-2 group/card cursor-pointer">

                <div className="flex items-center gap-4 text-slate-500 text-[10px] font-black mb-4 uppercase tracking-widest">
                  <span className="text-blue-500 flex items-center gap-1">
                    <Tag size={12} /> تقنية
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> 5 دقائق
                  </span>
                </div>

                <h2 className="text-2xl font-black mb-4 group-hover/card:text-blue-500 transition-colors leading-tight">
                  {post.title_ar}
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium line-clamp-2">
                  {post.mainTitle_ar}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover/card:text-blue-500 transition-colors duration-300">
                    Explore Post
                  </span>
                  <div className="flex-1 h-[1px] bg-white/5 group-hover/card:bg-blue-500/30 transition-colors duration-500 mx-2" />
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover/card:border-blue-500/50 transition-all duration-300">
                    <ChevronLeft size={16} className="text-white group-hover/card:-translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

              </Link>
            </article>
          ))}
        </div>

        {/* --- Sidebar --- */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* قسم الأكثر قراءة (Editorial Premium Style) */}
          <div className="p-8 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hidden md:block">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 shadow-inner">
                <TrendingUp size={22} />
              </div>
              <h3 className="text-2xl font-black tracking-tight">الأكثر قراءة</h3>
            </div>
            
            <div className="flex flex-col">
              {trendingPosts.map((trendPost, i) => (
                <Link 
                  key={trendPost.id} 
                  href={`/blog/${trendPost.slug_ar}`} 
                  className="group/side relative flex items-center gap-5 py-6 border-b border-white/5 last:border-0 last:pb-0 first:pt-0"
                >
                  {/* رقم المقال (Typography عملاق وراقي) */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-6xl font-black text-white/[0.02] group-hover/side:text-blue-500/10 transition-colors duration-500 pointer-events-none select-none z-0">
                    0{i + 1}
                  </div>

                  {/* Thumbnail */}
                  <div className="w-24 h-24 rounded-[1.2rem] overflow-hidden relative bg-slate-900 shadow-xl shrink-0 z-10 border border-white/5 group-hover/side:border-blue-500/30 transition-colors duration-300">
                    <Image 
                      src={trendPost.image.startsWith('/') ? trendPost.image : `/${trendPost.image}`}
                      alt={trendPost.title_ar}
                      fill
                      className="object-cover opacity-70 group-hover/side:opacity-100 group-hover/side:scale-110 transition-all duration-700"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 z-10">
                    <h4 className="text-sm font-bold text-slate-300 group-hover/side:text-white transition-colors line-clamp-2 mb-3 leading-relaxed">
                      {trendPost.title_ar}
                    </h4>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 flex items-center gap-1.5">
                      <Clock size={12} /> 5 MIN READ
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Box (كما هو) */}
          <div className="p-8 rounded-[2.5rem] bg-blue-600 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-xl font-black mb-4 relative z-10">نشرة نكسس</h3>
            <p className="text-blue-100 text-xs mb-6 relative z-10 font-medium leading-relaxed">اشترك ليوصلك أحدث المقالات التقنية أسبوعياً.</p>
            <input
              type="email"
              placeholder="ايميلك هنا"
              className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-xs placeholder:text-blue-200 outline-none mb-4 focus:bg-white/20 transition-colors relative z-10"
            />
            <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-slate-50 transition-colors relative z-10">
              اشترك الآن
            </button>
          </div>
        </aside>

      </div>

    </main>
  );
}