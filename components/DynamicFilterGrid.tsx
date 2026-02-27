'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['All', 'Dashboard', 'Dev Tool', 'AI', 'Visualization'];

const projects = [
  {
    id: '01',
    title: 'Metrics Pro',
    category: 'Dashboard',
    image: 'https://picsum.photos/800/600?random=31',
    desc: 'Advanced analytics dashboard for enterprise teams.',
  },
  {
    id: '02',
    title: 'Code Weaver',
    category: 'Dev Tool',
    image: 'https://picsum.photos/800/1000?random=32',
    desc: 'Visual node-based logic builder for web apps.',
  },
  {
    id: '03',
    title: 'Neural Vision',
    category: 'AI',
    image: 'https://picsum.photos/800/800?random=33',
    desc: 'Computer vision model training interface.',
  },
  {
    id: '04',
    title: 'Data Flow',
    category: 'Visualization',
    image: 'https://picsum.photos/800/1200?random=34',
    desc: 'Real-time data stream visualization tool.',
  },
  {
    id: '05',
    title: 'Admin Panel',
    category: 'Dashboard',
    image: 'https://picsum.photos/800/600?random=35',
    desc: 'Customizable admin interface for CMS platforms.',
  },
  {
    id: '06',
    title: 'API Tester',
    category: 'Dev Tool',
    image: 'https://picsum.photos/800/800?random=36',
    desc: 'Lightweight REST and GraphQL API testing client.',
  },
];

export default function DynamicFilterGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section className="relative flex min-h-screen w-full flex-col bg-black px-8 py-32 text-white md:px-16 lg:px-24">
      {/* Header & Filters */}
      <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <h1 className="font-display text-5xl font-bold tracking-tighter md:text-7xl">
          Works
        </h1>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-6 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? 'border-white bg-white text-black'
                  : 'border-white/20 text-neutral-400 hover:border-white/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              key={project.id}
              className="group relative flex cursor-pointer flex-col gap-4 overflow-hidden rounded-2xl bg-neutral-950 p-4 border border-white/5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                referrerPolicy="no-referrer"
                className="object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="font-mono text-sm leading-relaxed text-white">
                    {project.desc}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between px-2">
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
