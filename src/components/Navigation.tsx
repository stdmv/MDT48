import React, { useState, useEffect } from 'react';
import { Leaf, Cpu, BookOpen, Brain, Clock, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [utcTime, setUtcTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'entheogens', label: 'Entheogen Registry', icon: Leaf },
    { id: 'peptides', label: 'Synthetic & Peptide Matrix', icon: Cpu },
    { id: 'novel', label: 'Eiben Ledger (MDT-48)', icon: BookOpen },
    { id: 'anomalies', label: 'Synergy & Anomalies', icon: Brain },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Brand in bold italic */}
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-xl font-black tracking-tighter italic text-white sm:text-2xl select-none">
              EIBEN <span className="text-accent">/ ARCHIVE</span>
            </h1>
            <p className="font-mono text-[9px] tracking-[0.2em] text-zinc-500 uppercase mt-0.5">
              DATASTREAM CONTROL V4.8
            </p>
          </div>
        </div>

        {/* Desktop Navigation with high-letter spacing */}
        <nav className="hidden md:flex gap-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 border px-4 py-2 font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-accent/10 border-accent text-accent'
                    : 'border-white/10 text-zinc-400 hover:border-white hover:text-white'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Clock & Secondary Info */}
        <div className="hidden items-center gap-4 sm:flex">
          <div className="flex items-center gap-2 rounded-none border border-white/10 bg-black px-3.5 py-1.5 font-mono text-[10px] tracking-wider text-zinc-400">
            <Clock className="h-3 w-3 text-accent animate-pulse" />
            <span>{utcTime || '2026-05-29 11:53:11 UTC'}</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center border border-white/10 p-2 text-zinc-400 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0A0A] px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex w-full items-center gap-3 border px-4 py-3 font-sans text-xs font-bold tracking-[0.1em] uppercase transition-colors ${
                  isActive
                    ? 'bg-accent/10 text-accent border-accent'
                    : 'text-zinc-400 hover:text-white border-white/5'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between px-4 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
            <span>CLOCK STATE</span>
            <span className="text-accent">{utcTime || '2026-05-29 11:53:11 UTC'}</span>
          </div>
        </div>
      )}
    </header>
  );
}
