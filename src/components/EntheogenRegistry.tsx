import React, { useState, useMemo } from 'react';
import { entheogensData } from '../data/entheogens';
import { Entheogen } from '../types';
import { 
  Search, SlidersHorizontal, Info, X, MapPin, 
  BookOpen, AlertTriangle, HelpCircle, HardHat, Check,
  Leaf, Flower, ShieldAlert, Wind, Activity, Flame, Skull, Sparkles, GlassWater, Sprout, CupSoda, Sun
} from 'lucide-react';

// Maps string icons to actual Lucide component types
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Leaf, Flower, ShieldAlert, Wind, Activity, Flame, Skull, Sparkles, GlassWater, Sprout, CupSoda, Sun
};

export default function EntheogenRegistry() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('All');
  const [selectedToxicity, setSelectedToxicity] = useState<string>('All');
  const [selectedEntheogen, setSelectedEntheogen] = useState<Entheogen | null>(null);

  const classes = useMemo(() => {
    return ['All', ...new Set(entheogensData.map(e => e.class))];
  }, []);

  const toxicities = useMemo(() => {
    return ['All', 'Low', 'Moderate', 'High', 'Extreme'];
  }, []);

  const filteredEntheogens = useMemo(() => {
    return entheogensData.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.botanicalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.activeCompounds.some(c => c.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.pharmacology.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesClass = selectedClass === 'All' || item.class === selectedClass;
      const matchesToxicity = selectedToxicity === 'All' || item.toxicityLevel === selectedToxicity;

      return matchesSearch && matchesClass && matchesToxicity;
    });
  }, [searchTerm, selectedClass, selectedToxicity]);

  return (
    <div className="space-y-6">
      {/* Title section with supportive spacing */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-black tracking-tighter uppercase italic text-white sm:text-3xl">
            Botanical Entheogen Registry
          </h2>
          <p className="mt-1 font-mono text-[9px] tracking-[0.15em] uppercase text-zinc-400">
            A declassified catalog of natural cognitive-modulating plants and sacred sacraments.
          </p>
        </div>
        <div className="border border-white/15 bg-black px-4 py-2 font-mono text-[10px] tracking-widest text-zinc-400">
          INDEXED STATE: <span className="text-accent font-black">{entheogensData.length} ACTIVE</span>
        </div>
      </div>

      {/* Grid of Search and Filters */}
      <div className="grid gap-4 md:grid-cols-12 bg-[#0F0F0F] p-5 border border-white/10">
        {/* Search */}
        <div className="relative md:col-span-5">
          <label className="sr-only">Search</label>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            className="block w-full border border-white/10 bg-black py-3 pl-10 pr-3 font-sans text-xs text-white placeholder-zinc-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
            placeholder="Search plant, botanical, active compound..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filter classes */}
        <div className="md:col-span-4 flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-wider uppercase text-zinc-500 shrink-0 select-none">Class:</span>
          <div className="flex flex-wrap gap-1.5 w-full">
            <select
              className="block w-full border border-white/10 bg-black px-3 py-3 font-sans text-xs text-white focus:border-accent focus:outline-none"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls === 'All' ? 'All Classes' : cls}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Toxicity */}
        <div className="md:col-span-3 flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-wider uppercase text-zinc-500 shrink-0 select-none">Risk:</span>
          <select
            className="block w-full border border-white/10 bg-black px-3 py-3 font-sans text-xs text-white focus:border-accent focus:outline-none"
            value={selectedToxicity}
            onChange={(e) => setSelectedToxicity(e.target.value)}
          >
            {toxicities.map(tox => (
              <option key={tox} value={tox}>{tox === 'All' ? 'All Toxicity Levels' : `${tox} Toxicity`}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Grid & Slide-in Details Content */}
      <div className="grid gap-6 lg:grid-cols-12 items-start">
        {/* Dynamic Cards Grid */}
        <div className={`${selectedEntheogen ? 'lg:col-span-6' : 'lg:col-span-12'} grid gap-4 sm:grid-cols-2 md:grid-cols-2 ${!selectedEntheogen && 'lg:grid-cols-3'} transition-all duration-300`}>
          {filteredEntheogens.length > 0 ? (
            filteredEntheogens.map((item) => {
              const IconComponent = iconMap[item.iconName] || Leaf;
              const isSelected = selectedEntheogen?.id === item.id;
              
              // Define toxicity style pills
              let toxicityStyle = 'bg-zinc-900 border-zinc-800 text-zinc-400';
              if (item.toxicityLevel === 'Low') toxicityStyle = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
              if (item.toxicityLevel === 'Moderate') toxicityStyle = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
              if (item.toxicityLevel === 'High') toxicityStyle = 'bg-orange-500/10 text-orange-400 border-orange-500/20';
              if (item.toxicityLevel === 'Extreme') toxicityStyle = 'bg-red-500/10 text-red-400 border-red-500/20 font-bold';

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedEntheogen(item)}
                  className={`group relative flex flex-col justify-between border p-5 transition-all duration-200 cursor-pointer ${
                    isSelected 
                      ? 'border-accent bg-accent-dim shadow-xl' 
                      : 'border-white/10 bg-[#0F0F0F] hover:border-white/30 hover:bg-[#121212]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-2.5 border ${
                        isSelected 
                          ? 'bg-accent/15 border-accent text-accent' 
                          : 'bg-black border-white/10 text-zinc-400 group-hover:text-white'
                      } transition-colors`}>
                        <IconComponent className="h-4.5 w-4.5" />
                      </div>
                      <span className={`border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider ${
                        item.class === 'Psychedelic' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                        item.class === 'Dissociative' ? 'bg-sky-500/10 text-sky-400 border-sky-500/20' :
                        item.class === 'Deliriant' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' :
                        'bg-zinc-800 text-zinc-400 border-zinc-700'
                      }`}>
                        {item.class}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-md font-black tracking-tight text-white uppercase italic group-hover:text-accent">
                        {item.name}
                      </h3>
                      <p className="font-mono text-[10px] text-zinc-500 italic mt-0.5">
                        {item.botanicalName}
                      </p>
                    </div>

                    <p className="line-clamp-2 text-xs text-zinc-400 leading-relaxed">
                      {item.history}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.activeCompounds.slice(0, 2).map((alkaloid, index) => (
                        <span key={index} className="inline-flex border border-white/5 bg-black px-2 py-0.5 font-mono text-[9px] text-zinc-400">
                          {alkaloid}
                        </span>
                      ))}
                      {item.activeCompounds.length > 2 && (
                        <span className="inline-flex border border-white/5 bg-black px-1.5 py-0.5 font-mono text-[9px] text-zinc-500">
                          +{item.activeCompounds.length - 2} MORE
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="font-sans text-[10px] text-zinc-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span className="truncate max-w-[120px]">{item.region.split('(')[0]}</span>
                    </span>
                    <span className={`border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider ${toxicityStyle}`}>
                      {item.toxicityLevel} Risk
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full border border-dashed border-white/10 bg-[#0F0F0F] p-12 text-center">
              <HelpCircle className="h-8 w-8 text-zinc-600 mx-auto mb-3 animate-pulse" />
              <p className="font-mono text-xs tracking-wider uppercase text-zinc-400">No matching entheogens found</p>
              <p className="font-sans text-xs text-zinc-500 mt-1">Try resetting or modifying your search descriptors or filters.</p>
            </div>
          )}
        </div>

        {/* Detailed Side Drawer panel */}
        {selectedEntheogen && (
          <div className="lg:col-span-6 border-2 border-white/10 bg-[#0F0F0F] p-6 space-y-6 animate-fade-in sticky top-28">
            {/* Drawer Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div className="space-y-1">
                <span className="bg-accent/10 border border-accent/30 px-2.5 py-0.5 font-mono text-[9px] text-accent uppercase tracking-wider font-bold">
                  {selectedEntheogen.class} Sacrament
                </span>
                <h3 className="text-xl font-black uppercase italic tracking-tight text-white leading-none mt-1">
                  {selectedEntheogen.name}
                </h3>
                <p className="font-mono text-xs text-zinc-500 italic">
                  {selectedEntheogen.botanicalName}
                </p>
              </div>
              <button
                onClick={() => setSelectedEntheogen(null)}
                className="border border-white/10 p-2 text-zinc-400 hover:border-white hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* General Specs Block */}
            <div className="grid grid-cols-2 gap-3.5 bg-black/60 p-4 border border-white/5">
              <div>
                <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-wider">Botanical Family</span>
                <span className="text-xs text-zinc-300 font-bold">{selectedEntheogen.family}</span>
              </div>
              <div>
                <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-wider">Geographical Origin</span>
                <span className="text-xs text-zinc-300 font-bold flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                  <span className="truncate">{selectedEntheogen.region.split('(')[0]}</span>
                </span>
              </div>
              <div className="col-span-2 pt-3 border-t border-white/5">
                <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-wider">Active Alkaloids / Compounds</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {selectedEntheogen.activeCompounds.map((alk, i) => (
                    <span key={i} className="border border-accent-border bg-accent/5 px-2.5 py-0.5 font-mono text-[10px] text-accent font-bold">
                      {alk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Informational Blocks */}
            <div className="space-y-4 font-sans text-xs text-zinc-300 leading-relaxed">
              <div className="space-y-1">
                <h4 className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-accent" />
                  Ethnobotanical History
                </h4>
                <p className="bg-black/20 p-3 border border-white/5 text-zinc-350 leading-relaxed">
                  {selectedEntheogen.history}
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase flex items-center gap-1.5">
                  <Flame className="h-4 w-4 text-accent" />
                  Traditional Ceremony & Native Usage
                </h4>
                <p className="bg-black/20 p-3 border border-white/5 text-zinc-350 leading-relaxed">
                  {selectedEntheogen.nativeUsage}
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase flex items-center gap-1.5">
                  <Activity className="h-4 w-4 text-accent" />
                  Neurological Mechanism & Pharmacology
                </h4>
                <p className="bg-black/20 p-3 border border-white/5 text-zinc-350 leading-relaxed">
                  {selectedEntheogen.pharmacology}
                </p>
              </div>
            </div>

            {/* Toxicity and Legality Footer Alert */}
            <div className="border-t border-white/10 pt-4 grid grid-cols-2 gap-3">
              <div className="border border-white/5 p-3 bg-black/40">
                <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-widest">Toxicity Risk</span>
                <span className="flex items-center gap-1.5 mt-1 text-xs">
                  <AlertTriangle className={`h-4 w-4 ${
                    selectedEntheogen.toxicityLevel === 'Low' ? 'text-emerald-400' :
                    selectedEntheogen.toxicityLevel === 'Moderate' ? 'text-amber-400' :
                    'text-red-500'
                  }`} />
                  <span className="font-bold uppercase tracking-wider text-white">{selectedEntheogen.toxicityLevel} Risk</span>
                </span>
              </div>
              <div className="border border-white/5 p-3 bg-black/40">
                <span className="block font-mono text-[9px] text-zinc-550 uppercase tracking-widest">Global Status</span>
                <span className="font-mono text-[9px] text-zinc-400 block mt-1.5 line-clamp-2 leading-tight uppercase font-bold">
                  {selectedEntheogen.legality}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
