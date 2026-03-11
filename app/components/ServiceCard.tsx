"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export default function ServiceCard({ title, description, icon, className }: Props) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-nexus-navy/10 p-8 hover:border-nexus-blue/50 transition-colors duration-500 ${className}`}
    >
      {/* إضاءة خفيفة تظهر عند الـ Hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-nexus-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-nexus-blue/10 text-nexus-blue group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">{title}</h3>
        <p className="text-nexus-gray leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}