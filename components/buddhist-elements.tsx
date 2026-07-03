import React, { useState } from 'react';
import { Sparkles, Play, Layers } from 'lucide-react';

// --- Types ---
interface ElementCardProps {
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
}

export default function BuddhistDecorations() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 p-8 flex flex-col items-center justify-center font-sans selection:bg-stone-800 selection:text-amber-200">
      <header className="mb-16 text-center max-w-xl">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-500/70 font-semibold">System Aesthetics</span>
        <h1 className="text-3xl font-light tracking-wide text-stone-100 mt-2">Meditative Decorative Elements</h1>
        <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
          Tactile, atmospheric UI components designed with deep shadows, subtle gradients, and micro-interactions for immersive interfaces.
        </p>
      </header>

      {/* Grid Layout for the 5 Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        
        {/* 1. THE SINGING BOWL */}
        <ElementCard 
          title="Rin Gong" 
          subtitle="The Singing Bowl" 
          description="Resonates with subtle, expanding concentric circles upon interaction, mimicking sound therapy vibrations."
        >
          <div className="relative w-full h-full flex items-center justify-center group cursor-pointer">
            {/* Ambient Sound Waves (Animated on hover) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 rounded-full border border-amber-500/0 scale-100 group-hover:animate-[ping_2s_infinite] group-hover:border-amber-500/20 transition-all duration-700" />
              <div className="w-24 h-24 rounded-full border border-amber-500/0 scale-100 group-hover:animate-[ping_3s_infinite] group-hover:border-amber-500/10 transition-all duration-1000 delay-300" />
            </div>

            {/* The Composition */}
            <div className="relative flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105">
              {/* Wooden Mallet */}
              <div className="absolute -right-4 top-2 w-3 h-16 bg-gradient-to-b from-amber-800 to-amber-950 rounded-full transform rotate-[35deg] origin-bottom shadow-md z-20 group-hover:rotate-[25deg] transition-transform duration-500" />
              
              {/* Hammered Bronze Bowl */}
              <div className="w-28 h-20 bg-gradient-to-b from-amber-600 via-amber-700 to-stone-900 rounded-b-full rounded-t-sm shadow-[inset_0_4px_12px_rgba(255,255,255,0.2),0_12px_24px_rgba(0,0,0,0.6)] border-t border-amber-500/30 relative z-10">
                {/* Inner Shadow / Depth */}
                <div className="absolute top-0 inset-x-2 h-2 bg-stone-950/60 rounded-b-full" />
                {/* Subtle Patina Texture Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent)] rounded-b-full" />
              </div>

              {/* Silk Cushion */}
              <div className="w-32 h-6 bg-gradient-to-r from-red-800 via-red-600 to-red-900 rounded-full shadow-[0_6px_12px_rgba(0,0,0,0.5)] -mt-2 relative z-0 border-b border-red-950">
                <div className="absolute top-0 inset-x-4 h-1.5 bg-red-500/30 rounded-full mix-blend-overlay" />
              </div>
            </div>
            <Play className="absolute bottom-4 right-4 w-3.5 h-3.5 text-neutral-600 group-hover:text-amber-500 transition-colors" />
          </div>
        </ElementCard>

        {/* 2. THE LOTUS BLOSSOM */}
        <ElementCard 
          title="Padma" 
          subtitle="The Lotus Blossom" 
          description="Emerges perfectly from a dark, reflective mirror surface. Features steep gradients and high contrast."
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center group cursor-pointer">
            {/* Lotus Petal Construction */}
            <div className="relative w-28 h-24 mb-2 flex items-end justify-center transition-transform duration-500 group-hover:scale-105">
              
              {/* Outer/Back Petals */}
              <div className="absolute bottom-1 w-14 h-16 bg-gradient-to-t from-rose-900 to-stone-100 rounded-full transform -rotate-45 origin-bottom-left opacity-80 shadow-inner" />
              <div className="absolute bottom-1 w-14 h-16 bg-gradient-to-t from-rose-900 to-stone-100 rounded-full transform rotate-45 origin-bottom-right opacity-80 shadow-inner" />
              
              {/* Mid Petals */}
              <div className="absolute bottom-0 w-12 h-18 bg-gradient-to-t from-rose-700 via-rose-400 to-neutral-50 rounded-full transform -rotate-20 origin-bottom shadow-md" />
              <div className="absolute bottom-0 w-12 h-18 bg-gradient-to-t from-rose-700 via-rose-400 to-neutral-50 rounded-full transform rotate-20 origin-bottom shadow-md" />
              
              {/* Center Core Petal */}
              <div className="relative w-10 h-20 bg-gradient-to-t from-rose-600 via-rose-300 to-white rounded-full shadow-lg z-10 flex items-center justify-center">
                {/* Dewdrop Highlight */}
                <div className="w-1.5 h-2.5 bg-white/70 rounded-full absolute top-8 left-3 blur-[0.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>

            {/* Mirror Liquid Base */}
            <div className="w-36 h-3 bg-gradient-to-r from-stone-900 via-neutral-800 to-stone-900 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.8)] border border-neutral-700/20 relative">
              <div className="absolute inset-0 bg-cyan-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <Sparkles className="absolute bottom-4 right-4 w-3.5 h-3.5 text-neutral-600 group-hover:text-rose-400 transition-colors" />
          </div>
        </ElementCard>

        {/* 3. THE TEMPLE BELL */}
        <ElementCard 
          title="Bonshō" 
          subtitle="The Temple Bell" 
          description="A heavy ceremonial bronze bell suspended within a structural frame, featuring a dynamic swaying cord."
        >
          <div className="relative w-full h-full flex items-center justify-center group cursor-pointer">
            {/* Structural Wooden Beam */}
            <div className="absolute top-10 w-32 h-2.5 bg-gradient-to-b from-stone-800 to-stone-950 rounded-sm shadow-md border-b border-stone-700/20" />
            
            {/* The Bell Assembly */}
            <div className="relative flex flex-col items-center mt-6 transition-transform duration-500 group-hover:translate-y-0.5">
              {/* Hanger Ring */}
              <div className="w-4 h-4 rounded-full border-2 border-stone-700 bg-transparent -mb-1" />
              
              {/* Bronze Bell Body */}
              <div className="w-20 h-24 bg-gradient-to-b from-stone-700 via-stone-800 to-stone-900 rounded-t-2xl shadow-[inset_0_2px_6px_rgba(255,255,255,0.1),0_12px_20px_rgba(0,0,0,0.7)] relative border border-stone-800">
                {/* Horizontal Relief Ridges */}
                <div className="absolute top-8 inset-x-0 h-0.5 bg-stone-950/60 border-b border-stone-600/20" />
                <div className="absolute top-16 inset-x-0 h-0.5 bg-stone-950/60 border-b border-stone-600/20" />
                
                {/* Flare at the base */}
                <div className="absolute bottom-0 -inset-x-1 h-3 bg-gradient-to-b from-stone-800 to-stone-950 rounded-b-sm border-t border-stone-700/30" />
              </div>

              {/* Hanging Braided Cord */}
              <div className="w-1 h-14 bg-gradient-to-b from-amber-700 to-amber-900 rounded-full shadow-md origin-top transform group-hover:rotate-[6deg] transition-transform duration-1000 ease-in-out mt-1" />
            </div>
          </div>
        </ElementCard>

        {/* 4. ZEN BALANCING STONES */}
        <ElementCard 
          title="Mínhuǎng" 
          subtitle="Zen Balancing Stones" 
          description="A flawless, tactile vertical stack of volcanic rocks sitting on crisp, geometrically raked sand rings."
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center group cursor-pointer">
            
            {/* Raked Sand Texture Rings (Simulated with layered borders) */}
            <div className="absolute bottom-8 w-40 h-10 border border-neutral-800/60 rounded-full flex items-center justify-center pointer-events-none transition-all duration-700 group-hover:border-neutral-700/80">
              <div className="w-32 h-7 border border-neutral-800/40 rounded-full" />
            </div>

            {/* Cairn Stack */}
            <div className="relative flex flex-col items-center justify-center mb-6 transition-transform duration-500 group-hover:-translate-y-1">
              <div className="w-8 h-5 bg-gradient-to-br from-neutral-600 to-stone-800 rounded-full shadow-md transform translate-y-4 z-40 border-b border-neutral-700" />
              <div className="w-12 h-6.5 bg-gradient-to-br from-neutral-700 to-stone-850 rounded-full shadow-md transform translate-y-3 z-30 border-b border-neutral-800" />
              <div className="w-15 h-8 bg-gradient-to-br from-neutral-800 to-stone-900 rounded-full shadow-md transform translate-y-2 z-20" />
              <div className="w-18 h-9.5 bg-gradient-to-br from-neutral-700 via-stone-850 to-stone-950 rounded-full shadow-lg transform translate-y-1 z-10" />
              <div className="w-22 h-11 bg-gradient-to-br from-neutral-800 via-stone-900 to-stone-950 rounded-full shadow-xl z-0" />
            </div>
            <Layers className="absolute bottom-4 right-4 w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
          </div>
        </ElementCard>

        {/* 5. ENSŌ RING WITH INCENSE */}
        <ElementCard 
          title="Ensō & Incense" 
          subtitle="The Brushstroke Circle" 
          description="Features a raw, high-contrast ink gesture with an animated wisp of smoke visualizing stillness."
        >
          <div className="relative w-full h-full flex items-center justify-center group cursor-pointer overflow-hidden">
            
            {/* Ensō Circle via CSS Gradient Mask to look like ink texture */}
            <div className="w-28 h-28 rounded-full border-[7px] border-neutral-300 border-r-transparent border-b-neutral-400/40 opacity-80 transform -rotate-12 transition-all duration-700 group-hover:rotate-12 group-hover:opacity-100 relative flex items-center justify-center shadow-[inset_0_0_8px_rgba(0,0,0,0.8)]">
              {/* Imperfect raw brush feel emulation */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-neutral-950 rounded-full" />
            </div>

            {/* Incense Stick Setup */}
            <div className="absolute bottom-6 right-16 flex flex-col items-center">
              {/* Burning Tip */}
              <div className="w-1 h-1 bg-amber-500 rounded-full animate-pulse shadow-[0_0_4px_#f59e0b]" />
              {/* Stick */}
              <div className="w-0.5 h-14 bg-stone-700 transform rotate-12 origin-bottom" />
            </div>

            {/* Animated Smoke Wisp */}
            <div className="absolute bottom-20 right-20 pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500">
              <svg width="40" height="80" viewBox="0 0 40 80" fill="none" className="animate-[pulse_3s_infinite]">
                <path 
                  d="M20 75 C 25 60, 10 45, 20 30 C 30 15, 15 5, 22 0" 
                  stroke="url(#smokeGradient)" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                  className="animate-[dash_4s_linear_infinite]"
                  strokeDasharray="100"
                  strokeDashoffset="0"
                />
                <defs>
                  <linearGradient id="smokeGradient" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#d4d4d4" stopOpacity="0" />
                    <stop offset="50%" stopColor="#e5e5e5" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </ElementCard>

      </div>
    </div>
  );
}

// --- Reusable Layout Card Wrapper ---
function ElementCard({ title, subtitle, description, children }: ElementCardProps) {
  return (
    <div className="h-96 bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-2xl border border-neutral-800/60 p-6 flex flex-col justify-between shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)] hover:border-neutral-700/80 transition-all duration-500 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.9)] relative overflow-hidden group/card">
      {/* Subtle Background Glow on Card Hover */}
      <div className="absolute -inset-px bg-gradient-to-b from-neutral-800/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" />
      
      {/* Decorative Interactive Container */}
      <div className="flex-1 w-full flex items-center justify-center relative">
        {children}
      </div>

      {/* Metadata Footnote */}
      <div className="border-t border-neutral-950 pt-4 mt-2 relative z-10">
        <span className="text-[10px] font-mono tracking-widest text-amber-500/60 uppercase">{subtitle}</span>
        <h2 className="text-base font-normal text-stone-200 tracking-wide mt-0.5">{title}</h2>
        <p className="text-xs text-neutral-500 mt-1 leading-relaxed font-light">{description}</p>
      </div>
    </div>
  );
}