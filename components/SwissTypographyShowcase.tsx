'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'AESTHETICS',
    client: 'Studio N',
    role: 'Lead Developer',
    year: '2025',
  },
  {
    id: '02',
    title: 'STRUCTURE',
    client: 'Arch Group',
    role: 'Frontend Engineer',
    year: '2024',
  },
  {
    id: '03',
    title: 'DYNAMICS',
    client: 'Motion Lab',
    role: 'Creative Developer',
    year: '2023',
  },
  {
    id: '04',
    title: 'SYSTEMS',
    client: 'Data Corp',
    role: 'UI/UX Designer',
    year: '2022',
  },
];

export default function SwissTypographyShowcase() {
  return (
    <section className="relative flex min-h-screen w-full flex-col bg-black text-white overflow-hidden">
      {/* Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-8 opacity-10 md:px-16 lg:px-24">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-full w-[1px] bg-white" />
        ))}
      </div>

      <div className="relative z-10 flex w-full flex-col gap-16 px-8 py-32 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex w-full items-end justify-between border-b border-white/20 pb-8">
          <h1 className="font-display text-2xl font-bold uppercase tracking-widest md:text-4xl">
            Selected Works
          </h1>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
            2022 — 2025
          </span>
        </div>

        {/* Project List */}
        <div className="flex flex-col">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative flex cursor-pointer flex-col border-b border-white/10 py-12 transition-colors hover:border-white/40 md:flex-row md:items-center md:justify-between"
              whileHover="hover"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-16">
                <span className="font-mono text-sm text-neutral-600 transition-colors group-hover:text-white">
                  {project.id}
                </span>
                <motion.h2
                  className="font-display text-6xl font-black uppercase leading-none tracking-tighter md:text-8xl lg:text-[10rem]"
                  variants={{
                    hover: { x: 20 },
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {project.title}
                </motion.h2>
              </div>

              <div className="mt-8 flex flex-col items-start gap-8 md:mt-0 md:flex-row md:items-center md:gap-16">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Client
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest text-neutral-300">
                    {project.client}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Role
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest text-neutral-300">
                    {project.role}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Year
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest text-neutral-300">
                    {project.year}
                  </span>
                </div>
                <motion.div
                  className="hidden items-center justify-center rounded-full border border-white/20 p-4 transition-colors group-hover:bg-white group-hover:text-black md:flex"
                  variants={{
                    hover: { x: -10, rotate: -45 },
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <ArrowRight className="h-6 w-6" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
