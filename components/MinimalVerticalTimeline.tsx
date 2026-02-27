'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const projects = [
  {
    id: '01',
    title: 'Design System',
    category: 'Infrastructure',
    year: '2025',
    impact: 'Reduced UI development time by 40% across 5 product teams.',
  },
  {
    id: '02',
    title: 'Real-time Analytics',
    category: 'Data Visualization',
    year: '2024',
    impact: 'Processed 1M+ events/min with sub-second latency.',
  },
  {
    id: '03',
    title: 'Global E-Commerce',
    category: 'Platform',
    year: '2023',
    impact: 'Scaled to support $50M+ in annual recurring revenue.',
  },
  {
    id: '04',
    title: 'AI Code Assistant',
    category: 'Machine Learning',
    year: '2022',
    impact: 'Integrated LLM capabilities into developer workflow.',
  },
];

export default function MinimalVerticalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative flex min-h-screen w-full flex-col items-center bg-black py-32 text-white">
      {/* Spine Line */}
      <div className="absolute left-8 top-0 h-full w-[1px] bg-white/10 md:left-1/3">
        <motion.div
          className="w-full bg-white"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="flex w-full max-w-6xl flex-col gap-32 px-8 md:px-16 lg:px-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex w-full flex-col gap-8 md:ml-[33.333%] md:w-2/3 md:pl-16"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[2.5rem] top-2 hidden h-4 w-4 rounded-full border border-white bg-black md:block" />

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                <span>{project.year}</span>
                <span className="h-[1px] w-8 bg-white/20" />
                <span>{project.category}</span>
              </div>
              <h2 className="font-display text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl">
                {project.title}
              </h2>
            </div>
            <p className="max-w-xl text-lg font-light leading-relaxed text-neutral-400">
              {project.impact}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
