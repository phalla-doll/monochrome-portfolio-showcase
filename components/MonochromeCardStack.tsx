'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    id: '01',
    title: 'ARCHITECT',
    subtitle: 'Structural Design System',
    year: '2025',
  },
  {
    id: '02',
    title: 'MONOLITH',
    subtitle: 'Enterprise Dashboard',
    year: '2024',
  },
  {
    id: '03',
    title: 'OBSIDIAN',
    subtitle: 'Dark Mode Framework',
    year: '2023',
  },
];

export default function MonochromeCardStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black py-32 text-white">
      {/* Watermark Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.03]">
        <h1 className="font-display text-[20vw] font-black uppercase leading-none tracking-tighter">
          DEPTH
        </h1>
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-12 px-8">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <motion.div
              key={project.id}
              className="group relative flex w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 p-12 transition-all duration-500 hover:border-white/30 hover:bg-neutral-900 md:flex-row md:items-end md:p-16"
              style={{
                zIndex: projects.length - index,
                marginTop: index === 0 ? 0 : '-80px',
              }}
              animate={{
                y: isHovered ? -20 : isOtherHovered ? 10 : 0,
                scale: isHovered ? 1.02 : isOtherHovered ? 0.98 : 1,
                boxShadow: isHovered
                  ? '0 30px 60px -10px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1)'
                  : '0 10px 30px -10px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 transition-colors group-hover:text-neutral-300">
                  {project.id} — {project.year}
                </span>
                <h2 className="font-display text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
                  {project.title}
                </h2>
              </div>
              <div className="mt-8 flex items-center justify-between md:mt-0 md:justify-end">
                <p className="font-mono text-sm uppercase tracking-widest text-neutral-400">
                  {project.subtitle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
