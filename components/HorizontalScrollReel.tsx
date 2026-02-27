'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'AETHER',
    category: 'E-Commerce',
    year: '2025',
    stack: 'Next.js, WebGL',
    image: 'https://picsum.photos/1920/1080?random=1',
  },
  {
    id: '02',
    title: 'NEXUS',
    category: 'Fintech',
    year: '2024',
    stack: 'React, D3.js',
    image: 'https://picsum.photos/1920/1080?random=2',
  },
  {
    id: '03',
    title: 'VOID',
    category: 'Portfolio',
    year: '2024',
    stack: 'Three.js, GSAP',
    image: 'https://picsum.photos/1920/1080?random=3',
  },
  {
    id: '04',
    title: 'SYNTH',
    category: 'SaaS',
    year: '2023',
    stack: 'Vue, Tailwind',
    image: 'https://picsum.photos/1920/1080?random=4',
  },
];

export default function HorizontalScrollReel() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${100 * (projects.length - 1)}%`]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative flex h-screen w-screen shrink-0 items-center justify-center overflow-hidden"
            >
              {/* Background Image with Parallax */}
              <motion.div
                className="absolute inset-0 z-0 opacity-20 grayscale"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              <div className="relative z-10 flex h-full w-full max-w-[1400px] flex-col justify-between p-8 md:p-16 lg:p-24">
                {/* Header */}
                <div className="flex w-full items-start justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    Selected Works
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-neutral-400">
                      {project.id} / 0{projects.length}
                    </span>
                    <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-black">
                      <ArrowUpRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex w-full flex-col justify-between gap-12 md:flex-row md:items-end">
                  <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-[12vw] font-bold leading-[0.85] tracking-tighter md:text-[8vw]"
                  >
                    {project.title}
                  </motion.h2>

                  <div className="flex flex-col gap-8 pb-4 md:pb-8">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                        Category
                      </span>
                      <span className="text-sm font-medium uppercase tracking-wider text-neutral-200">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                        Year
                      </span>
                      <span className="text-sm font-medium uppercase tracking-wider text-neutral-200">
                        {project.year}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                        Tech Stack
                      </span>
                      <span className="text-sm font-medium uppercase tracking-wider text-neutral-200">
                        {project.stack}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
