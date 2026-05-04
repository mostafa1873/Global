"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";

// استيراد صور البورتفوليو
import img1 from "../../../public/works/main-a.webp";
import img2 from "../../../public/works/social/w11.webp";
import img3 from "../../../public/works/agro/main.webp";
import img4 from "../../../public/works/social/w2.webp";
import img5 from "../../../public/works/dodo/main.webp";
import img6 from "../../../public/works/pure/pure.webp";
import img7 from "../../../public/works/pure/main.webp";

export default function PortfolioSlider() {
  const projects = [
    { src: img1, width: "w-[150px] md:w-[260px]", ratio: "aspect-[9/16]" },
    { src: img2, width: "w-[150px] md:w-[260px]", ratio: "aspect-[9/16]" },
    { src: img3, width: "w-[150px] md:w-[260px]", ratio: "aspect-[9/16]" },
    { src: img4, width: "w-[150px] md:w-[260px]", ratio: "aspect-[9/16]" },
    { src: img5, width: "w-[150px] md:w-[260px]", ratio: "aspect-[9/16]" },
    { src: img6, width: "w-[150px] md:w-[260px]", ratio: "aspect-[9/16]" },
    { src: img7, width: "w-[150px] md:w-[260px]", ratio: "aspect-[9/16]" },
  ];

  const row1 = useMemo(() => [...projects, ...projects], []);

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 relative z-20 overflow-hidden" dir="ltr">
      {/* الصف العلوي */}
      <div className="flex w-full overflow-visible">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-3 md:gap-4 pr-4"
        >
          {row1.map((item, i) => (
            <div
              key={`r1-${i}`}
              className={`relative flex-shrink-0 rounded-[0.5rem] md:rounded-[1rem] overflow-hidden shadow-xl ${item.width} ${item.ratio}`}
            >
              <Image
                src={item.src}
                alt="project"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}