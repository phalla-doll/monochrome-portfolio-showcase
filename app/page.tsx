'use client';

import { useState } from 'react';
import HorizontalScrollReel from '@/components/HorizontalScrollReel';
import SplitScreenPreview from '@/components/SplitScreenPreview';
import MonochromeCardStack from '@/components/MonochromeCardStack';
import TerminalIndexMode from '@/components/TerminalIndexMode';
import MinimalVerticalTimeline from '@/components/MinimalVerticalTimeline';
import SwissTypographyShowcase from '@/components/SwissTypographyShowcase';
import DynamicFilterGrid from '@/components/DynamicFilterGrid';

const modes = [
  { id: 'reel', name: '01. Project Reel', component: HorizontalScrollReel },
  { id: 'split', name: '02. Split Screen', component: SplitScreenPreview },
  { id: 'stack', name: '03. Card Stack', component: MonochromeCardStack },
  { id: 'terminal', name: '04. Terminal Index', component: TerminalIndexMode },
  { id: 'timeline', name: '05. Vertical Timeline', component: MinimalVerticalTimeline },
  { id: 'swiss', name: '06. Swiss Typography', component: SwissTypographyShowcase },
  { id: 'grid', name: '07. Filter Grid', component: DynamicFilterGrid },
];

export default function Home() {
  const [activeMode, setActiveMode] = useState(modes[0].id);

  const ActiveComponent = modes.find((m) => m.id === activeMode)?.component || HorizontalScrollReel;

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/50 p-2 backdrop-blur-md md:gap-4 md:p-4">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setActiveMode(mode.id)}
            className={`rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all duration-300 md:text-xs ${
              activeMode === mode.id
                ? 'bg-white text-black'
                : 'text-neutral-500 hover:text-white'
            }`}
          >
            <span className="hidden md:inline">{mode.name}</span>
            <span className="md:hidden">{mode.id.substring(0, 3)}</span>
          </button>
        ))}
      </nav>

      {/* Active Section */}
      <div className="w-full">
        <ActiveComponent />
      </div>
    </main>
  );
}
