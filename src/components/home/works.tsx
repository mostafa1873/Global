"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../assets/(0).jpg";
import img2 from "../../assets/(15).jpg";
import img3 from "../../assets/(17).jpg";
import img4 from "../../assets/11.jpg";
import img5 from "../../assets/12.jpg";

const projects = [
  // 1. الكارت الطويل اللي على اليمين خالص
  { id: 1, type: "image", src: img1, span: "md:col-span-1 md:row-span-2", title: "Creative" },
  // 2. الكارت اللي فوق "البطل" (عريض)
  { id: 2, type: "image", src: img2, span: "md:col-span-3 md:row-span-1", title: "Main Feature" },
  // 3. الكارت الطويل اللي على الشمال خالص
  { id: 3, type: "image", src: img3, span: "md:col-span-1 md:row-span-2", title: "Modern" },
  // 4. "البطل" اللي في النص بالظبط (كبير وواضح)
  { id: 4, type: "image", src: img4, span: "md:col-span-3 md:row-span-2", title: "The Hero Project" },
  // 5. كارت تحت على اليمين
  { id: 5, type: "video", src: img5, span: "md:col-span-1 md:row-span-1", title: "Motion" },
  // 6. كارت تحت على الشمال
  { id: 6, type: "image", src: img1, span: "md:col-span-1 md:row-span-1", title: "Digital" },
];

export default function BentoWorkSection() {
  return (
    <section className=" py-16 md:py-28 px-4 md:px-10 relative overflow-hidden" dir="rtl">
      
      {/* Header الرايق */}
      <div className="max-w-[1400px] mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Portfolio</span>
          <h2 className="text-white text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            معرض <span className="text-blue-600">أعمالنا</span>
          </h2>
        </motion.div>
      </div>

      {/* Bento Grid - التقسيمة السيمترية (5 أعمدة) */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        {projects.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className={`relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-blue-900/10 ${item.span}`}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            ) : (
              <video
                src={item.src as any}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            )}

            {/* إضاءة داخلية خفيفة */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
            
            {/* Border Glow عند الهوفر */}
            <div className="absolute inset-0 border-2 border-blue-600/0 group-hover:border-blue-600/40 transition-all duration-500 rounded-[2.5rem] pointer-events-none z-10" />
            
            {/* عنوان يظهر في الهوفر */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
                <p className="text-white font-black text-xs uppercase tracking-widest">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* لمسة إضاءة خلفية ناعمة */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/[0.05] blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/[0.05] blur-[150px] -z-10" />
    </section>
  );
}