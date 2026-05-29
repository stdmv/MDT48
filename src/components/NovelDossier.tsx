import React, { useState } from 'react';
import { novelEvents, mdt48Lsd25Comparison } from '../data/novelData';
import { NovelEvent } from '../types';
import { 
  History, Eye, ShieldAlert, Sparkles, AlertCircle, ChevronLeft, ChevronRight, 
  MapPin, User, Bookmark, HelpCircle, Flame, Server
} from 'lucide-react';

export default function NovelDossier() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const activeEvent: NovelEvent = novelEvents[currentEventIndex];

  const handleNextEvent = () => {
    if (currentEventIndex < novelEvents.length - 1) {
      setCurrentEventIndex(prev => prev + 1);
    }
  };

  const handlePrevEvent = () => {
    if (currentEventIndex > 0) {
      setCurrentEventIndex(prev => prev - 1);
    }
  };

  return (
    <div className="space-y-8">
      {/* Title block */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-black tracking-tighter uppercase italic text-white sm:text-3xl">
            Eiben Ledger (MDT-48 Files)
          </h2>
          <p className="mt-1 font-mono text-[9px] tracking-[0.15em] uppercase text-zinc-400">
            Declassified archival records tracing the fictional compound MDT-48 from 1953 to present configurations.
          </p>
        </div>
        <div className="border border-white/15 bg-black px-4 py-2 font-mono text-[10px] tracking-widest text-zinc-400">
          ALAN GLYNN VECTOR: <span className="text-accent font-black">"UNDER THE NIGHT"</span>
        </div>
      </div>

      {/* Narrative Section & Interactive Slide-stepper Timeline */}
      <div className="grid gap-6 lg:grid-cols-12 items-start">
        
        {/* Timeline Event Card Column */}
        <div className="lg:col-span-7 bg-[#0F0F0F] border-2 border-white/10 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-accent font-mono text-[10px] uppercase font-bold tracking-[0.2em]">
              <History className="h-4 w-4 animate-spin-slow text-accent" />
              CHRONOLOGY THREAD TRACER
            </div>
            <div className="font-mono text-xs text-zinc-550">
              PHASE {currentEventIndex + 1} // {novelEvents.length}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="border border-accent-border bg-accent/5 px-3 py-1 font-mono text-xs font-black text-accent">
                {activeEvent.year}
              </span>
              <h3 className="text-lg font-black uppercase italic tracking-tight text-white">
                {activeEvent.title}
              </h3>
            </div>

            {/* Event Specific Location and Character Roles */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-black/60 p-3 border border-white/5">
              <span className="flex items-center gap-1.5 text-zinc-400">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                <span className="truncate max-w-[150px] font-mono text-[10px] uppercase">{activeEvent.location}</span>
              </span>
              <span className="flex items-center gap-1.5 text-zinc-400">
                <User className="h-4 w-4 text-accent shrink-0" />
                <span className="truncate max-w-[150px] font-mono text-[10px] uppercase">{activeEvent.character}</span>
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2">
              {activeEvent.description}
            </p>

            {/* List key details */}
            <div className="space-y-3 pt-2">
              <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-[0.2em] font-black">
                // SYSTEM OBSERVATIONS & CLINICAL INDICES
              </span>
              <div className="grid gap-2">
                {activeEvent.keyDetails.map((detail, idx) => (
                  <div key={idx} className="flex gap-2.5 bg-black/40 px-3.5 py-2.5 border border-white/5 items-start">
                    <Bookmark className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stepper Navigation buttons */}
          <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-6">
            <button
              onClick={handlePrevEvent}
              disabled={currentEventIndex === 0}
              className={`flex items-center gap-1.5 border px-4 py-2.5 font-sans font-bold uppercase tracking-wider text-[10px] cursor-pointer transition-all duration-200 ${
                currentEventIndex === 0 
                  ? 'border-white/5 bg-transparent text-zinc-700 cursor-not-allowed opacity-30' 
                  : 'border-white/10 bg-black text-white hover:border-accent hover:text-accent'
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
              PREVIOUS PHASE
            </button>
            <button
              onClick={handleNextEvent}
              disabled={currentEventIndex === novelEvents.length - 1}
              className={`flex items-center gap-1.5 border px-4 py-2.5 font-sans font-bold uppercase tracking-wider text-[10px] cursor-pointer transition-all duration-200 ${
                currentEventIndex === novelEvents.length - 1 
                  ? 'border-white/5 bg-transparent text-zinc-700 cursor-not-allowed opacity-30' 
                  : 'border-white/10 bg-black text-white hover:border-accent hover:text-accent'
              }`}
            >
              NEXT PHASE
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Narrative Context Sidebar */}
        <div className="lg:col-span-5 bg-[#0F0F0F] border border-white/10 p-6 space-y-4">
          <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-[0.2em] font-black">
            // OPERATIONAL DOSSIER SYNOPSIS
          </span>

          <p className="font-sans text-xs text-zinc-400 leading-relaxed">
            In Alan Glynn's masterwork thriller <strong className="text-zinc-200 font-bold">Under the Night</strong>, the chemical agent <strong className="text-accent font-bold">MDT-48</strong> signifies an analytical divergence in human cerebral operations.
          </p>

          <p className="font-sans text-xs text-zinc-400 leading-relaxed">
            Supposedly evaluated in 1953 alongside standard lysergamides, MDT acted as a pristine cognitive supercharger rather than presenting chaotic hallucinations.
          </p>

          <div className="border border-white/5 bg-black/40 p-4 space-y-2 select-none">
            <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-widest font-bold">THE COLLATERAL CORRIDOR:</span>
            <p className="font-sans text-xs text-zinc-500 leading-relaxed italic">
              While Ned Sweeney (retaining MDT) achieved infinite pattern matching, subject Matt Drake (retaining LSD) experienced profound reality breakdown, wandering into a moving vehicle and triggering immediate federal containment cover-ups.
            </p>
          </div>

          <p className="font-sans text-xs text-zinc-400 leading-relaxed">
            Ultimately, compound synthesis was systematically classified. Cultivating a cohort with superhuman operational metrics compromises hierarchical geopolitical governance structures.
          </p>
        </div>
      </div>

      {/* side-by-side spec sheet comparison of MDT-48 and LSD-25 */}
      <div className="space-y-4">
        <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">
          Structural Evaluation: MDT-48 vs. LSD-25
        </h3>
        
        {/* Table View */}
        <div className="overflow-x-auto border border-white/10 bg-[#0F0F0F]">
          <table className="w-full border-collapse font-sans text-xs text-zinc-300 text-left">
            <thead className="bg-black text-zinc-550 font-mono text-[9px] uppercase tracking-[0.15em] border-b border-white/10">
              <tr>
                <th className="px-6 py-4">PROPERTY / SPECTRUM</th>
                <th className="px-6 py-4 text-accent font-bold">CLASSIFIED MDT-48 CODE</th>
                <th className="px-6 py-4 text-orange-400 font-bold">EXPERIMENTAL LSD-25 CODE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mdt48Lsd25Comparison.map((row, index) => (
                <tr key={index} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 bg-black/20 font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-bold w-1/4">
                    {row.property}
                  </td>
                  <td className="px-6 py-4 space-y-0.5 w-3/8">
                    <span className="block font-black text-white text-xs uppercase italic tracking-tight">{row.mdt48.value}</span>
                    <span className="block text-xs text-zinc-400 leading-relaxed">{row.mdt48.description}</span>
                  </td>
                  <td className="px-6 py-4 space-y-0.5 w-3/8">
                    <span className="block font-black text-zinc-300 text-xs uppercase italic tracking-tight">{row.lsd25.value}</span>
                    <span className="block text-xs text-zinc-500 leading-relaxed">{row.lsd25.description}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
