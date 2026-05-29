import React, { useState } from 'react';
import { peptidesData } from '../data/peptides';
import { Peptide } from '../types';
import { 
  Building, ShieldCheck, Flame, Scale, Server, AlertCircle, Info, Zap, 
  HelpCircle, CheckCircle, ExternalLink, Activity, Trophy
} from 'lucide-react';

export default function PeptideMatrix() {
  const [selectedPeptide, setSelectedPeptide] = useState<Peptide>(peptidesData[0]);

  return (
    <div className="space-y-6">
      {/* Title block */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-black tracking-tighter uppercase italic text-white sm:text-3xl">
            Synthetic & Peptide Matrix
          </h2>
          <p className="mt-1 font-mono text-[9px] tracking-[0.15em] uppercase text-zinc-400">
            Analyzing biochemical pathways, experimental neuro-enhancing modulators, and grey-market factors.
          </p>
        </div>
        <div className="border border-white/15 bg-black px-4 py-2 font-mono text-[10px] tracking-widest text-zinc-400">
          INDEX RANGE: <span className="text-accent font-black">5 CRITICAL RECORDS</span>
        </div>
      </div>

      {/* Two Columns: Comparative Picker list (Left) and Detailed Analysis Dashboard (Right) */}
      <div className="grid gap-6 lg:grid-cols-12 items-start">
        
        {/* Left List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="font-mono text-[10px] text-zinc-550 uppercase tracking-[0.2em] mb-3">
            // SELECT ARCHIVE TO CONSOLE
          </div>
          {peptidesData.map((pep) => {
            const isSelected = selectedPeptide.id === pep.id;
            return (
              <div
                key={pep.id}
                onClick={() => setSelectedPeptide(pep)}
                className={`group flex items-start justify-between border p-4 transition-all duration-200 cursor-pointer ${
                  isSelected 
                    ? 'border-accent bg-accent-dim' 
                    : 'border-white/10 bg-[#0F0F0F] hover:border-white/30 hover:bg-[#121212]'
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-black uppercase italic tracking-tight text-white group-hover:text-accent">
                      {pep.name}
                    </h3>
                    <span className={`border px-2 py-0.2 font-mono text-[8px] uppercase tracking-wider ${
                      pep.type === 'Neurotrophic Factor' ? 'bg-purple-950/40 text-purple-400 border-purple-900/30' :
                      pep.type === 'Peptide' ? 'bg-sky-950/40 text-sky-400 border-sky-900/30' :
                      pep.type === 'Ampakine' ? 'bg-amber-950/40 text-amber-400 border-amber-900/30' :
                      'bg-zinc-950 text-zinc-400 border-zinc-850'
                    }`}>
                      {pep.type}
                    </span>
                  </div>
                  <p className="font-mono text-[9px] tracking-wider text-zinc-500">
                    PROVIDER ORIGIN: {pep.origin.split(',')[0]}
                  </p>
                </div>

                <div className="flex gap-1 items-center">
                  <div className="text-right">
                    <span className="block font-mono text-[8px] tracking-wider text-zinc-550">DENSITY</span>
                    <span className={`font-mono text-xs font-black ${isSelected ? 'text-accent' : 'text-zinc-400'}`}>{pep.efficacyRating}/10</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Detail Console */}
        <div className="lg:col-span-7 bg-[#0F0F0F] border-2 border-white/10 p-6 sm:p-8 space-y-6">
          
          {/* Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between border-b border-white/10 pb-5">
            <div className="space-y-1">
              <span className="bg-accent/10 border border-accent/30 px-3 py-0.5 font-mono text-[9px] text-accent uppercase tracking-widest font-black">
                {selectedPeptide.type} RECORD
              </span>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mt-1.5">
                {selectedPeptide.name}
              </h3>
              <p className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">
                MANUFACTURER // SOURCE: {selectedPeptide.origin}
              </p>
            </div>
            
            <div className="border border-white/10 bg-black px-4 py-2 flex items-center gap-3 self-start">
              <div className="text-center min-w-[60px]">
                <span className="block font-sans text-[8px] text-zinc-550 uppercase font-black tracking-wider">STATE</span>
                <span className={`block font-mono text-[9px] font-bold uppercase tracking-widest ${
                  selectedPeptide.status.includes('Approved') || selectedPeptide.status.includes('Prescription')
                    ? 'text-accent'
                    : 'text-amber-450'
                }`}>
                  {selectedPeptide.status.split('(')[0]}
                </span>
              </div>
            </div>
          </div>

          {/* Core metrics comparison utilizing sliders */}
          <div className="space-y-4 bg-black/60 p-5 border border-white/5">
            <h4 className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.2em] mb-3">
              // PATHWAY DYNAMIC PROFILE INDEX
            </h4>

            {/* Efficacy Speed Gauge */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-zinc-350 font-medium flex items-center gap-1.5">
                  <Zap className="h-4 w-4 text-accent shrink-0" />
                  Cognitive Density Response
                </span>
                <span className="font-mono text-white font-bold">{selectedPeptide.efficacyRating} / 10</span>
              </div>
              <div className="h-2 w-full bg-black border border-white/5 overflow-hidden">
                <div 
                  className="h-full bg-accent transition-all duration-500"
                  style={{ width: `${selectedPeptide.efficacyRating * 10}%` }}
                ></div>
              </div>
            </div>

            {/* Safety Score Gauge */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-zinc-355 font-medium flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  Safety and Cellular Buffering
                </span>
                <span className="font-mono text-white font-bold">{selectedPeptide.safetyRating} / 10</span>
              </div>
              <div className="h-2 w-full bg-black border border-white/5 overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-500"
                  style={{ width: `${selectedPeptide.safetyRating * 10}%` }}
                ></div>
              </div>
            </div>

            {/* Sensory Distortion Gauge */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-zinc-350 font-medium flex items-center gap-1.5">
                  <Flame className="h-4 w-4 text-rose-450 shrink-0" />
                  Sensory Distortion Threshold
                </span>
                <span className="font-mono text-white font-bold">{selectedPeptide.sensoryDistortion} / 10</span>
              </div>
              <div className="h-2 w-full bg-black border border-white/5 overflow-hidden">
                <div 
                  className="h-full bg-rose-500 transition-all duration-500"
                  style={{ width: `${selectedPeptide.sensoryDistortion * 10}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Extended clinical descriptors */}
          <div className="space-y-4 font-sans text-xs sm:text-sm">
            <div className="space-y-1 bg-black/20 p-4 border border-white/5">
              <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-widest font-bold">Primary Target Vector</span>
              <p className="text-zinc-200 leading-relaxed font-bold italic text-sm">
                {selectedPeptide.primaryIndication}
              </p>
            </div>

            <div className="space-y-1 bg-black/20 p-4 border border-white/5">
              <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-widest font-bold">Anatomical Analysis Detail</span>
              <p className="text-zinc-400 leading-relaxed">
                {selectedPeptide.description}
              </p>
            </div>

            <div className="space-y-1 bg-black/20 p-4 border border-white/5">
              <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-widest font-bold">Biochemical Actions Matrix</span>
              <p className="text-zinc-350 leading-relaxed">
                {selectedPeptide.mechanismOfAction}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-black/20 p-4 border border-white/5">
                <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-widest font-bold">Lethal/Active Dose</span>
                <p className="text-accent font-mono text-[10px] mt-1 uppercase font-bold tracking-wider">
                  {selectedPeptide.potencyMetric}
                </p>
              </div>
              <div className="bg-black/20 p-4 border border-white/5">
                <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-widest font-bold">Dynamic Regulation</span>
                <p className="text-zinc-400 font-sans text-xs mt-1 uppercase">
                  {selectedPeptide.status.split('(')[1] ? selectedPeptide.status.split('(')[1].replace(')', '') : selectedPeptide.status}
                </p>
              </div>
            </div>
          </div>

          {/* Footer warning */}
          <div className="flex gap-3 border border-white/5 bg-black/40 p-4 items-start select-none">
            <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="font-mono text-[9px] text-zinc-500 leading-normal uppercase tracking-wider">
              CRITICAL: Experimental parameters are strictly formulated for theoretical biological comparison, research analysis pipelines, and historical timeline mapping. Absolute security caution is advised.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
