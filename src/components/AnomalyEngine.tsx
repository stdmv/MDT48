import React, { useState } from 'react';
import { anomaliesData, bioMechanisms, BioMechanism } from '../data/anomalies';
import { 
  Cpu, Heart, Eye, Award, ExternalLink, ShieldAlert,
  Brain, Zap, Sparkles, AlertCircle, Quote, Activity
} from 'lucide-react';

export default function AnomalyEngine() {
  const [activeMech, setActiveMech] = useState<BioMechanism>(bioMechanisms[0]);

  return (
    <div className="space-y-8">
      {/* Title block */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-black tracking-tighter uppercase italic text-white sm:text-3xl">
            Synergy & Cognitive Anomalies
          </h2>
          <p className="mt-1 font-mono text-[9px] tracking-[0.15em] uppercase text-zinc-400">
            Investigating historical biological peaks alongside the cellular pathways of cognitive acceleration.
          </p>
        </div>
        <div className="border border-white/15 bg-black px-4 py-2 font-mono text-[10px] tracking-widest text-zinc-400">
          PATHWAYS LINK: <span className="text-accent font-black">3 REGULATORY LEVELS</span>
        </div>
      </div>

      {/* Exceptional Thinkers Profiles */}
      <div className="space-y-4">
        <h3 className="text-xl font-black uppercase italic tracking-tighter text-white flex items-center gap-2">
          <Award className="h-5 w-5 text-accent" />
          Exceptional Human Anomalies
        </h3>
        
        <div className="grid gap-6 md:grid-cols-3">
          {anomaliesData.map((person) => (
            <div 
              key={person.id}
              className="group flex flex-col justify-between border border-white/10 bg-[#0F0F0F] p-6 space-y-4 transition-all duration-200 hover:border-white/30"
            >
              <div className="space-y-4">
                <div className="space-y-0.5">
                  <span className="font-mono text-[9px] tracking-wider text-zinc-500 uppercase font-bold">
                    EPOCH {person.era}
                  </span>
                  <h4 className="text-md font-black uppercase italic tracking-tight text-white group-hover:text-accent transition-colors">
                    {person.name}
                  </h4>
                </div>

                <p className="font-sans text-xs text-zinc-300 font-medium leading-relaxed italic border-l-2 border-accent pl-3">
                  "{person.achievementSummary}"
                </p>

                <div className="space-y-2">
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    <strong className="text-white font-bold">Phenomenon:</strong> {person.cognitivePhenomena}
                  </p>

                  <div className="font-sans text-xs text-zinc-400 leading-relaxed bg-black/60 p-3.5 border border-white/5">
                    <strong className="font-mono text-[9px] block uppercase tracking-widest text-zinc-550 mb-1 font-bold">Biological Hypothesis:</strong> {person.biologicalHypothesis}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 font-sans text-[11px] text-zinc-500 italic">
                "{person.quote}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Biological Pathways Map */}
      <div className="space-y-4">
        <h3 className="text-xl font-black uppercase italic tracking-tighter text-white flex items-center gap-2">
          <Activity className="h-5 w-5 text-accent" />
          Biological Acceleration Pathways
        </h3>

        <div className="grid gap-6 lg:grid-cols-12 items-start">
          {/* Pathway Picker Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-[0.2em] mb-2">
              // SELECT NEUROLOGICAL WINDOW
            </span>
            {bioMechanisms.map((mech) => {
              const isSelected = activeMech.id === mech.id;
              return (
                <button
                  key={mech.id}
                  onClick={() => setActiveMech(mech)}
                  className={`w-full text-left border p-4.5 transition-all duration-200 cursor-pointer ${
                    isSelected 
                      ? 'border-accent bg-accent-dim' 
                      : 'border-white/10 bg-[#0F0F0F] hover:border-white/30 hover:bg-[#121212]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-0.5">
                      <h4 className={`text-xs font-black uppercase tracking-wider ${isSelected ? 'text-accent' : 'text-zinc-200'}`}>
                        {mech.name}
                      </h4>
                      <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mt-0.5">
                        {mech.scientificTerm}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed explanation output */}
          <div className="lg:col-span-7 bg-[#0F0F0F] border-2 border-white/10 p-6 sm:p-8 space-y-5 shadow-xl">
            <div className="space-y-1">
              <span className="bg-accent/15 border border-accent/20 px-2.5 py-0.5 font-mono text-[9px] text-accent font-black uppercase tracking-widest">
                {activeMech.scientificTerm} MODEL
              </span>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mt-2">
                {activeMech.name}
              </h3>
            </div>

            <div className="space-y-4 font-sans text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-wider font-bold">Core Biological Concept</span>
                <p className="text-zinc-350 leading-relaxed bg-black/40 p-4 border border-white/5">
                  {activeMech.concept}
                </p>
              </div>

              <div className="space-y-1">
                <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-wider font-bold">MDT-48 Mimicry Model simulation</span>
                <p className="text-zinc-350 leading-relaxed bg-black/40 p-4 border border-white/5 border-l-2 border-l-accent">
                  {activeMech.howMdtMimics}
                </p>
              </div>

              {/* Peptides mimicking this pathway */}
              <div className="space-y-2">
                <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-wider font-bold mb-1">Analog Testing Channels</span>
                <div className="flex flex-wrap gap-2">
                  {activeMech.realWorldPeptides.map((pepName, idx) => (
                    <span 
                      key={idx} 
                      className="border border-accent-border bg-accent/5 px-3 py-1 font-mono text-[10px] text-accent flex items-center gap-1.5 uppercase font-bold tracking-wider"
                    >
                      <Cpu className="h-3.5 w-3.5" />
                      {pepName}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
