"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ChevronLeft } from "lucide-react";
import Link from "next/link";

// استخدمت نفس بيانات صفحة المدونة عشان التناسق
const featuredPosts = [
  {
    title: "مستقبل الذكاء الاصطناعي في تطوير الويب 2026",
    date: "10 مارس 2026",
    readTime: "5 دقائق",
    category: "تقنية",
    image: "bg-gradient-to-br from-blue-900 to-blue-500"
  },
  {
    title: "لماذا تختار Next.js لمشروعك القادم؟",
    date: "5 مارس 2026",
    readTime: "8 دقائق",
    category: "تطوير",
    image: "bg-gradient-to-br from-slate-800 to-slate-600"
  }
];

export default function BlogSection() {
  return (
    <section className="py-16 border-t border-white/5" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - بنفس توزيع صفحة المدونة */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/5 pb-10">
          <div className="text-right">
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter">
              آخر <span className="text-blue-600">المقالات</span>
            </h2>
            <p className="text-slate-500 mt-4 text-lg font-light max-w-xl">
              نشاركك خبراتنا في عالم الإبداع والرقمية، مقالات حصرية من خبراء نكسس.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 text-blue-500 font-black text-sm uppercase tracking-widest hover:text-white transition-all pb-2"
          >
            مشاهدة كل المقالات 
            <ChevronLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Posts Grid - نفس ستايل الـ Articles في صفحة المدونة */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.map((post, i) => (
            <motion.article
              key={i}
              whileHover={{ y: -10 }}
              className="group relative grid md:grid-cols-5 gap-6 p-5 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-600/30 transition-all duration-500 cursor-pointer"
            >
              {/* Thumbnail - نفس الـ Gradients */}
              <div className={`md:col-span-2 h-48 md:h-full rounded-[1.5rem] overflow-hidden ${post.image} opacity-80 group-hover:opacity-100 transition-opacity`} />
              
              {/* Post Content */}
              <div className="md:col-span-3 flex flex-col justify-center py-2 text-right">
                <div className="flex items-center gap-3 text-slate-500 text-[10px] font-black mb-4 uppercase tracking-widest">
                  <span className="text-blue-500 flex items-center gap-1">
                    <Tag size={12} /> {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-black text-white mb-4 group-hover:text-blue-500 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-1 text-slate-500 text-[10px] font-bold">
                    <Clock size={12} /> {post.readTime}
                  </span>
                  <Link href={`/blog/${i}`} className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronLeft size={18} className="text-blue-600" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}