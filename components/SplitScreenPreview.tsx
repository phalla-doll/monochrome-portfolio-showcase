'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  {
    id: '01',
    title: 'Vercel Clone',
    category: 'Dashboard',
    stack: 'Next.js, Tailwind',
    image: 'https://picsum.photos/1920/1080?random=11',
  },
  {
    id: '02',
    title: 'Stripe Checkout',
    category: 'E-Commerce',
    stack: 'React, Stripe',
    image: 'https://picsum.photos/1920/1080?random=12',
  },
  {
    id: '03',
    title: 'Linear App',
    category: 'Productivity',
    stack: 'TypeScript, GraphQL',
    image: 'https://picsum.photos/1920/1080?random=13',
  },
  {
    id: '04',
    title: 'Figma Plugin',
    category: 'Tooling',
    stack: 'Vue, Figma API',
    image: 'https://picsum.photos/1920/1080?random=14',
  },
];

export default function SplitScreenPreview() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="relative flex min-h-screen w-full bg-black text-white">
      {/* Left Panel */}
      <div className="flex w-full flex-col justify-center border-r border-white/10 px-8 py-24 md:w-[40%] md:px-16 lg:px-24">
        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer flex flex-col gap-4"
              onMouseEnter={() => setActiveProject(project)}
            >
              <motion.h2
                className={`font-display text-5xl font-bold tracking-tighter transition-colors duration-500 md:text-6xl lg:text-7xl ${
                  activeProject.id === project.id ? 'text-white' : 'text-neutral-700'
                }`}
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {project.title}
              </motion.h2>
              <div
                className={`flex gap-4 font-mono text-[10px] uppercase tracking-[0.2em] transition-opacity duration-500 ${
                  activeProject.id === project.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-neutral-400">{project.category}</span>
                <span className="text-neutral-600">—</span>
                <span className="text-neutral-400">{project.stack}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="hidden w-[60%] overflow-hidden md:block relative">
        {/* Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-10 flex items-center justify-center p-24"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                referrerPolicy="no-referrer"
                className="object-cover opacity-80 grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
