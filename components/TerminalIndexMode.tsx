'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  {
    id: '01',
    name: 'gold-monitoring-dashboard',
    type: 'financial',
    desc: 'Real-time financial metrics dashboard with WebSocket integration.',
    image: 'https://picsum.photos/1920/1080?random=21',
  },
  {
    id: '02',
    name: 'json-forge',
    type: 'dev-tool',
    desc: 'Visual editor for complex JSON schemas and data structures.',
    image: 'https://picsum.photos/1920/1080?random=22',
  },
  {
    id: '03',
    name: 'quantum-auth',
    type: 'security',
    desc: 'Zero-trust authentication flow with biometric fallback.',
    image: 'https://picsum.photos/1920/1080?random=23',
  },
  {
    id: '04',
    name: 'neural-network-viz',
    type: 'ai-model',
    desc: 'Interactive 3D visualization of deep learning model layers.',
    image: 'https://picsum.photos/1920/1080?random=24',
  },
];

export default function TerminalIndexMode() {
  const [hoveredProject, setHoveredProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="relative flex min-h-screen w-full flex-col bg-black p-8 font-mono text-white md:p-16 lg:p-24">
      {/* Header */}
      <div className="mb-24 flex items-center gap-4 border-b border-white/20 pb-8">
        <span className="text-xl font-bold uppercase tracking-widest text-neutral-400">
          Project Index
        </span>
        <span className="animate-pulse text-xl text-white">_</span>
      </div>

      {/* List */}
      <div className="flex w-full max-w-5xl flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex cursor-pointer items-center gap-8 py-4 text-sm transition-colors hover:text-white md:text-lg lg:text-xl"
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <span className="text-neutral-600 transition-colors group-hover:text-white">
              {hoveredProject?.id === project.id ? '>' : ' '}
            </span>
            <span className="w-8 text-neutral-500">{project.id}</span>
            <span className="flex-1 text-neutral-400 transition-colors group-hover:text-white">
              {project.name}
            </span>
            <span className="w-32 text-right text-neutral-500 transition-colors group-hover:text-neutral-300">
              [{project.type}]
            </span>
          </div>
        ))}
      </div>

      {/* Slide-up Modal Preview */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none fixed bottom-8 right-8 z-50 flex w-96 flex-col gap-4 border border-white/20 bg-black p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest text-neutral-400">
                Preview
              </span>
              <span className="text-xs text-neutral-600">
                {hoveredProject.id}
              </span>
            </div>
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
              <Image
                src={hoveredProject.image}
                alt={hoveredProject.name}
                fill
                referrerPolicy="no-referrer"
                className="object-cover opacity-80 grayscale"
              />
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              {hoveredProject.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
