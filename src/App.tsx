import React, { useState } from 'react';
import Navigation from './components/Navigation';
import EntheogenRegistry from './components/EntheogenRegistry';
import PeptideMatrix from './components/PeptideMatrix';
import NovelDossier from './components/NovelDossier';
import AnomalyEngine from './components/AnomalyEngine';
import { Brain, Star, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('entheogens');

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans text-zinc-150 flex flex-col selection:bg-accent selection:text-black">
      {/* Navigation bar */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main content viewport */}
      <main className="flex-grow mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
        
        {/* Welcome Callout Banner - Shows context dynamically based on active tab */}
        {activeTab === 'entheogens' && (
          <div className="p-8 border border-white/10 bg-[#0F0F0F] relative overflow-hidden select-none">
            <div className="absolute right-6 top-1/2 -translate-y-1/2 h-24 w-24 text-accent/5 pointer-events-none">
              <Brain className="h-full w-full" />
            </div>
            
            {/* Brutalist visual accent lines */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent"></div>
            
            <div className="flex items-center gap-2 text-accent font-mono text-[10px] uppercase font-bold tracking-[0.25em] pl-2">
              <Star className="h-3.5 w-3.5 text-accent" />
              EIBEN SYSTEM CLASSIFIED MAIN PORTAL // DECLASSIFIED FILES LINK
            </div>
            <h2 className="font-sans text-2xl sm:text-4xl font-black text-white tracking-tighter uppercase italic mt-3 pl-2 leading-tight">
              Ethnobotanical Chemistry & <br />
              <span className="text-accent">Cognitive Science</span> Archival System
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-4xl mt-3 pl-2">
              Integrated terminal interface analyzing public entheogenic sacraments, synthetic neurotrophic factors, and the declassified historical timeline of the fictional compound <strong className="text-white font-bold tracking-tight">MDT-48 (Alan Glynn's Under the Night)</strong>. Designed using maximum functional density and high-contrast parameters.
            </p>
          </div>
        )}

        {/* Conditional rendering of central panels */}
        <div className="animate-fade-in">
          {activeTab === 'entheogens' && <EntheogenRegistry />}
          {activeTab === 'peptides' && <PeptideMatrix />}
          {activeTab === 'novel' && <NovelDossier />}
          {activeTab === 'anomalies' && <AnomalyEngine />}
        </div>

      </main>

      {/* Footer block */}
      <footer className="border-t border-white/5 w-full bg-[#0A0A0A] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-[0.1em] text-zinc-500">
          <div>
            COGNITIVE RESEARCH MAIN ACCESSIBILITY MATRIX — ESTABLISHED 2026.
          </div>
          <div className="flex items-center gap-1.5 uppercase select-none font-bold text-accent">
            <ShieldCheck className="h-4 w-4" />
            SECURE DECLASSIFIED NETWORK ACCESS
          </div>
        </div>
      </footer>
    </div>
  );
}
