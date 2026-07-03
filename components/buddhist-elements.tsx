"use client";

import React, { useState, useEffect } from 'react';

// --- Types ---
interface ElementCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

// --- Inner Component ---
// Added a clean fallback layout for your ElementCard container so it compiles successfully
function ElementCard({ title, subtitle, children }: ElementCardProps) {
  return (
    <div className="bg-neutral-900/40 border border-neutral-800/60 rounded-2xl p-6 flex flex-col h-64 min-w-[280px] relative overflow-hidden backdrop-blur-sm">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-stone-300 tracking-wide">{title}</h3>
        <p className="text-xs text-neutral-500 italic mt-0.5">{subtitle}</p>
      </div>
      <div className="flex-1 w-full relative">
        {children}
      </div>
    </div>
  );
}

export default function ZenYogaElements() {
  // Track the progress of the incense burning (100% full down to 0% finished)
  const [burnProgress, setBurnProgress] = useState(100);

  useEffect(() => {
    // Every 3 seconds (matching the new slower breath cycle), the stick burns down slightly
    const interval = setInterval(() => {
      setBurnProgress((prev) => {
        if (prev <= 15) return 100; // Reset loop when it burns completely down to the holder base
        return prev - 0.75; // Adjust this number down to make it burn even slower
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Calculate dynamic heights and shifts based on the current burn progress
  const currentStickHeight = (96 * burnProgress) / 100; // Max height is 24rem (96px)
  const smokeTranslateY = 96 - currentStickHeight; // Keeps smoke relative to the moving tip

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 p-8 flex flex-col items-center justify-center font-sans selection:bg-neutral-900 selection:text-neutral-100">
      {/* Dynamic Keyframes injected safely into the render tree */}
      <style>{`
        @keyframes smokeFade {
          0%, 100% { opacity: 0.35; }
          30% { opacity: 0.35; }
          50% { opacity: 0; }
          75% { opacity: 0; }
        }
        @keyframes emberBreath {
          0%, 100% { 
            transform: scale(1) translate(-1px, -2px);
            background-color: #d97706; /* Deeper amber */
            box-shadow: 0 0 4px #b45309;
          }
          50% { 
            transform: scale(1.3) translate(-1px, -2px);
            background-color: #f97316; /* Bright glowing orange */
            box-shadow: 0 0 10px #f97316, 0 0 4px #facc15;
          }
        }
      `}</style>

      <header className="mb-16 text-center max-w-md">
        <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium">System Elements</span>
        <h1 className="text-2xl font-light tracking-wide text-stone-200 mt-1">Dimensional Yoga & Zen Icons</h1>
        <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
          Balanced 3D structures with passive, continuous ambient animations for deep, focused interfaces.
        </p>
      </header>

      {/* Grid Layout for Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        
        {/* 1. ACTUAL BURNING INCENSE (PROGRESSIVE BURN UPGRADE) */}
        <ElementCard title="Burning Incense" subtitle="Senkō">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            
            {/* The Incense Stick & Holder Group */}
            <div className="relative flex flex-col items-center translate-y-8">
              
              {/* Stick (Angled) - Dynamic height applied inline */}
              <div 
                className="w-0.5 bg-stone-700 origin-bottom transform rotate-[12deg] relative transition-all duration-[3000ms] ease-linear"
                style={{ height: `${currentStickHeight}px` }}
              >
                {/* Glowing ember tip - Custom smooth breathing animation */}
                <div 
                  className="absolute left-0 top-0 w-1.5 h-1.5 rounded-full"
                  style={{ animation: 'emberBreath 3s ease-in-out infinite' }}
                />
              </div>
              
              {/* Minimal Thick Ceramic Bowl Holder */}
              <div className="w-16 h-4 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-b-xl border-t border-neutral-700/30 shadow-lg mt-[-1px] relative z-10">
                <div className="absolute top-0 inset-x-2 h-1 bg-neutral-950 rounded-b-sm" />
              </div>
            </div>

            {/* Smoke Group - Tracks downward along with the stick height */}
            <div 
              className="absolute left-[52.5%] pointer-events-none mix-blend-screen transition-all duration-[3000ms] ease-linear"
              style={{ 
                bottom: '134px',
                transform: `translateY(${smokeTranslateY}px)`,
                animation: 'smokeFade 6s ease-in-out infinite' 
              }}
            >
              <svg width="30" height="80" viewBox="0 0 30 80" fill="none">
                <path 
                  d="M15 80 C 25 60, 5 40, 15 20 C 22 8, 10 2, 15 0" 
                  stroke="url(#smokeGlow)" 
                  strokeWidth="1.2" 
                  strokeLinecap="round"
                  className="animate-[dash_5s_linear_infinite]"
                  strokeDasharray="140"
                />
                <defs>
                  <linearGradient id="smokeGlow" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

          </div>
        </ElementCard>

       {/* 2. MINIMAL SINGING BOWL */}
        <ElementCard title="Singing Bowl" subtitle="Rin Gong">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Pure, heavy hemispherical bronze shape */}
            <div className="w-24 h-16 bg-gradient-to-b from-amber-600/90 via-amber-700 to-neutral-900 rounded-b-full shadow-[inset_0_2px_6px_rgba(255,255,255,0.15),0_12px_20px_rgba(0,0,0,0.6)] border-t border-amber-500/20 relative z-10">
              {/* Deep interior rim */}
              <div className="absolute top-0 inset-x-1.5 h-1.5 bg-neutral-950/80 rounded-b-full" />
            </div>

            {/* Simple Flat Cushion Base */}
            <div className="w-20 h-2 bg-neutral-800 rounded-full shadow-md -mt-1 relative z-0" />

            {/* Passive Pulsing Sound Waves */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-28 h-28 rounded-full border border-amber-500/0 animate-[ping_4s_infinite_ease-in-out] opacity-10" />
            </div>
          </div>
        </ElementCard>

        {/* 2. LOTUS BLOSSOM (OPEN & PINK) */}
        <ElementCard title="Lotus Blossom" subtitle="Padma">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Open blooming structure using clean pink gradients */}
            <div className="relative w-28 h-16 flex items-end justify-center animate-[pulse_5s_infinite_ease-in-out]">
              {/* Wide Outer Bottom Petals */}
              <div className="absolute bottom-0 w-14 h-8 bg-gradient-to-t from-rose-900 via-rose-600/60 to-rose-400/40 rounded-full transform -rotate-[25deg] origin-bottom-left opacity-60" />
              <div className="absolute bottom-0 w-14 h-8 bg-gradient-to-t from-rose-900 via-rose-600/60 to-rose-400/40 rounded-full transform rotate-[25deg] origin-bottom-right opacity-60" />
              
              {/* Mid Layer Flared Petals */}
              <div className="absolute bottom-1 w-10 h-12 bg-gradient-to-t from-rose-800 via-rose-500 to-rose-300 rounded-full transform -rotate-[45deg] origin-bottom shadow-md" />
              <div className="absolute bottom-1 w-10 h-12 bg-gradient-to-t from-rose-800 via-rose-500 to-rose-300 rounded-full transform rotate-[45deg] origin-bottom shadow-md" />
              <div className="absolute bottom-1 w-9 h-14 bg-gradient-to-t from-rose-700 via-rose-400 to-rose-200 rounded-full transform -rotate-[15deg] origin-bottom shadow-sm" />
              <div className="absolute bottom-1 w-9 h-14 bg-gradient-to-t from-rose-700 via-rose-400 to-rose-200 rounded-full transform rotate-[15deg] origin-bottom shadow-sm" />
              
              {/* Center Standing Core Petals */}
              <div className="relative w-7 h-15 bg-gradient-to-t from-rose-600 via-rose-400 to-rose-100 rounded-full shadow-lg z-10 mx-[-2px]" />
              <div className="absolute bottom-1 w-6 h-13 bg-gradient-to-t from-rose-500 to-white rounded-full shadow-md z-20 transform -rotate-[5deg]" />
            </div>
          </div>
        </ElementCard>

        {/* 3. HELICONIA (RE-DESIGNED, BALANCED) */}
        <ElementCard title="Heliconia" subtitle="Lobster Claw">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Crisp, zig-zagging geometric bract arrangement */}
            <div className="flex flex-col items-center relative w-24 h-36 animate-[pulse_6s_infinite_ease-in-out]">
              <div className="w-0.5 h-full bg-neutral-800 absolute top-0" />
              
              {/* Alternating downward curved dimensional bracts */}
              <div className="w-12 h-7 bg-gradient-to-br from-neutral-600 via-neutral-700 to-neutral-900 rounded-tl-3xl rounded-br-3xl shadow-md transform translate-x-3 translate-y-2 border-l border-neutral-500/20" />
              <div className="w-12 h-7 bg-gradient-to-bl from-neutral-600 via-neutral-700 to-neutral-900 rounded-tr-3xl rounded-bl-3xl shadow-md transform -translate-x-3 translate-y-1 border-r border-neutral-500/20" />
              <div className="w-11 h-6.5 bg-gradient-to-br from-neutral-600 via-neutral-700 to-neutral-900 rounded-tl-3xl rounded-br-3xl shadow-md transform translate-x-2.5 translate-y-0 border-l border-neutral-500/20" />
              <div className="w-11 h-6.5 bg-gradient-to-bl from-neutral-600 via-neutral-700 to-neutral-900 rounded-tr-3xl rounded-bl-3xl shadow-md transform -translate-x-2.5 -translate-y-1 border-r border-neutral-500/20" />
              <div className="w-9 h-6 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-tl-3xl rounded-br-3xl shadow-md transform translate-x-2 -translate-y-2" />
            </div>
          </div>
        </ElementCard>

        {/* 5. JAPAMALA (NEW) */}
        <ElementCard title="Japamala" subtitle="108 Prayer Beads">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Elegant looping composition of uniform spherical beads */}
            <div className="relative w-28 h-28 flex items-center justify-center animate-[pulse_4s_infinite_ease-in-out]">
              {/* Outer string loop silhouette */}
              <div className="absolute inset-0 rounded-full border border-neutral-800/40 p-1">
                {/* Simulated continuous beads along an elliptical track */}
                <div className="w-full h-full rounded-full border-[6px] border-dotted border-neutral-600 tracking-widest opacity-80" />
              </div>
              
              {/* Prominent Guru Bead (Center Bottom Anchor) */}
              <div className="absolute bottom-[-4px] w-4 h-4 bg-gradient-to-br from-amber-600 to-amber-950 rounded-full shadow-md z-10" />
              
              {/* Traditional Red Tassel */}
              <div className="absolute bottom-[-24px] w-2.5 h-6 bg-gradient-to-b from-red-700 via-red-800 to-neutral-900 rounded-b-sm shadow-md" />
            </div>
          </div>
        </ElementCard>


    {/* 1. REWORKED DIYA LAMP (FIXED SHADOWS & GEOMETRY) */}
        <ElementCard title="Diya Lamp" subtitle="Clay Oil Lamp">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Ambient Base Shadow - Drop shadow decoupled from the container to avoid clipping */}
            <div className="absolute bottom-[66px] w-20 h-3 bg-black/60 rounded-full blur-[4px] mix-blend-multiply" />
            
            {/* Earthy terracotta clay container - Isometric/Frontal Hybrid */}
            <div className="w-24 h-10 bg-gradient-to-b from-amber-800 via-amber-900 to-stone-900 rounded-b-full rounded-tl-3xl shadow-md relative flex items-center justify-center border-t border-amber-700/30 z-10">
              {/* Internal Bezel Depth (The hollow bowl reservoir) */}
              <div className="absolute top-0 inset-x-2 h-3 bg-stone-950 rounded-b-full shadow-inner overflow-hidden">
                {/* Simulated Ghee / Oil Surface */}
                <div className="absolute bottom-0 inset-x-1 h-1.5 bg-gradient-to-r from-amber-600/30 to-amber-500/10 rounded-b-full" />
              </div>
              
              {/* Pinched Spout Channel (Right Side) */}
              <div className="absolute right-1 top-0 w-5 h-2 bg-gradient-to-b from-stone-900 to-amber-950 rounded-full transform -rotate-[15deg]" />
              
              {/* Steady Flame - Rooted perfectly inside the spout rim */}
              <div className="absolute right-1 top-[-18px] w-3 h-6 bg-gradient-to-t from-amber-500 via-orange-400 to-amber-200 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.6)] animate-[pulse_1.8s_infinite] transform origin-bottom z-20" />
            </div>
          </div>
        </ElementCard>

        {/* 3. INDIGENOUS SHAMANIC MARACA / MBARACÁ */}
        <ElementCard title="Sacred Maraca" subtitle="Mbaracá Totem">
          <div className="relative w-full h-full flex flex-col items-center justify-center animate-[pulse_5s_infinite_ease-in-out]">
            {/* Gourd Shaker Body */}
            <div className="w-16 h-20 bg-gradient-to-b from-stone-800 via-neutral-800 to-stone-900 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.5)] border border-neutral-700/20 relative z-10 flex items-center justify-center">
              {/* Geometric Linear Incisions typical of Amazonian tribal iconography */}
              <div className="absolute w-full h-px bg-neutral-950/60 top-8" />
              <div className="absolute w-full h-px bg-neutral-950/60 top-12" />
              <div className="w-8 h-8 rounded-full border border-neutral-950/30 border-dashed" />
            </div>
            
            {/* Central Wooden Shaft Piercing the Gourd */}
            <div className="w-2.5 h-16 bg-gradient-to-b from-amber-900 to-stone-950 rounded-b-md -mt-2 z-0" />
            
            {/* Top Tuft Accent (Symbolic Feathers) */}
            <div className="absolute top-[52px] w-1 h-5 bg-neutral-500 rounded-t-full transform -rotate-12" />
            <div className="absolute top-[52px] w-1 h-5 bg-neutral-400 rounded-t-full transform rotate-12" />
          </div>
        </ElementCard>

<ElementCard title="Sacred Maraca" subtitle="Mbaracá Totem">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            
            {/* Shaking Wrapper: Running half-scale methodical rhythmic translations */}
            <div className="relative flex flex-col items-center animate-[shamanicShake_2.5s_infinite_ease-in-out]">
              
              {/* Top Feather Accent (Scales proportionally to half-size) */}
              <div className="absolute top-[-8px] flex justify-center items-end w-6 h-3 pointer-events-none z-20">
                <div className="w-0.5 h-3 bg-gradient-to-t from-amber-500 to-amber-300 rounded-t-full transform -rotate-[25deg] origin-bottom shadow-sm" />
                <div className="w-1 h-3.5 bg-gradient-to-t from-red-600 to-orange-400 rounded-t-full transform -rotate-[5deg] origin-bottom shadow-sm" />
                <div className="w-1 h-3.5 bg-gradient-to-t from-teal-600 to-cyan-400 rounded-t-full transform rotate-[10deg] origin-bottom shadow-sm" />
                <div className="w-0.5 h-3 bg-gradient-to-t from-amber-500 to-yellow-300 rounded-t-full transform rotate-[28deg] origin-bottom shadow-sm" />
              </div>

              {/* Gourd Shaker Body: Reduced to exactly 50% footprint (w-9 h-11) */}
              {/* All structural shadow segmenting cuts removed for an un-fragmented exterior finish */}
              <div className="w-9 h-11 bg-gradient-to-b from-stone-850 via-stone-800 to-stone-900 rounded-full shadow-[0_6px_12px_rgba(0,0,0,0.6)] border border-neutral-700/30 relative z-10 flex flex-col items-center justify-center">
                
                {/* Upper Color Strip (Terracotta Clay Band) */}
                <div className="absolute top-2 w-full h-1.5 bg-gradient-to-r from-red-800 via-red-700 to-red-900 border-y border-stone-950/20 opacity-90" />

                {/* Central Clean Line-Art Focal Rings */}
                <div className="w-5 h-5 rounded-full border border-amber-500/30 border-dashed flex items-center justify-center relative my-0.5">
                  <div className="w-2 h-px bg-amber-500/20 absolute" />
                  <div className="w-px h-2 bg-amber-500/20 absolute" />
                </div>

                {/* Lower Color Strip (Deep Earth Teal Band) */}
                <div className="absolute bottom-2.5 w-full h-1.5 bg-gradient-to-r from-teal-800 via-emerald-700 to-teal-900 border-y border-stone-950/20 opacity-80" />
              </div>
              
              {/* Central Wooden Handle Rod (Proportionally matched to new half-scale) */}
              <div className="w-1.5 h-8 bg-gradient-to-b from-amber-900 via-amber-950 to-stone-950 rounded-b-sm -mt-1 z-0 shadow-sm" />
            </div>

            {/* Tracking Ground Shadow scaled to follow the new center anchor point smoothly */}
            <div className="absolute bottom-[58px] w-8 h-1 bg-black/60 rounded-full blur-[2px] animate-[shadowTrack_2.5s_infinite_ease-in-out]" />
          </div>
        </ElementCard>

        {/* 2. JAPAMALA WITH STEP-BY-STEP COUNTING ANIMATION */}
        <ElementCard title="Japamala" subtitle="108 Prayer Beads">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Looping frame applying a crisp, incremental rotational tic to simulate manual counting */}
            <div className="relative w-32 h-32 flex items-center justify-center animate-[malaCount_12s_infinite_steps(8)]">
              
              {/* Inner Silhouette String Guideline */}
              <div className="absolute inset-2 rounded-full border border-neutral-950/40 p-1 flex items-center justify-center">
                
                {/* Simulated Segment of Beads along an elliptical path */}
                <div className="w-full h-full rounded-full border-[6px] border-dotted border-stone-600 tracking-widest opacity-75 relative">
                  {/* High-definition accent beads placed incrementally to anchor the geometry */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-2 h-2 bg-gradient-to-br from-amber-600 to-stone-900 rounded-full shadow-sm" />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1.5 w-2 h-2 bg-gradient-to-br from-amber-600 to-stone-900 rounded-full shadow-sm" />
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1.5 w-2 h-2 bg-gradient-to-br from-amber-600 to-stone-900 rounded-full shadow-sm" />
                </div>
              </div>
              
              {/* Guru Bead (The primary focus node where the finger meets the tassel) */}
              <div className="absolute bottom-1 w-4.5 h-4.5 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-950 rounded-full shadow-md z-20 border border-amber-500/20" />
              
              {/* Traditional Red Ritual Tassel */}
              <div className="absolute bottom-[-20px] w-3 h-6 bg-gradient-to-b from-red-700 via-red-800 to-stone-950 rounded-b-sm shadow-md z-10" />
            </div>

            {/* Stationary Overlay: A subtle focal point highlight to indicate the "active" counting zone */}
            <div className="absolute bottom-[66px] w-6 h-6 rounded-full bg-amber-500/5 border border-amber-500/20 pointer-events-none blur-[1px]" />
          </div>
        </ElementCard>

      </div>

     {/* Style Matrix injecting keyframe motion translations */}
      <style>{`
        @keyframes shamanicShake {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          20% {
            transform: translate(-3px, -1px) rotate(-4deg);
          }
          45% {
            transform: translate(2.5px, 0.5px) rotate(3deg);
          }
          65% {
            transform: translate(-2.5px, 0px) rotate(-3deg);
          }
          85% {
            transform: translate(2px, -0.5px) rotate(2deg);
          }
        }

        @keyframes shadowTrack {
          0%, 100% { transform: translateX(0) scaleX(1); opacity: 0.6; }
          20% { transform: translateX(-2px) scaleX(0.9); opacity: 0.5; }
          45% { transform: translateX(1.5px) scaleX(1.1); opacity: 0.7; }
          65% { transform: translateX(-1.5px) scaleX(0.95); opacity: 0.55; }
          85% { transform: translateX(1px) scaleX(1.05); opacity: 0.65; }
        }
      `}</style>
    </div>
  );
}

// --- Reusable Layout Card Structure ---
function ElementCard({ title, subtitle, children }: ElementCardProps) {
  return (
    <div className="h-64 bg-neutral-900/30 rounded-xl border border-neutral-900 p-4 flex flex-col justify-between items-center shadow-lg relative overflow-hidden">
      {/* Central Visual Stage */}
      <div className="flex-1 w-full flex items-center justify-center relative">
        {children}
      </div>

      {/* Title block */}
      <div className="w-full text-center border-t border-neutral-950/40 pt-3 relative z-10">
        <h2 className="text-xs font-normal text-stone-300 tracking-wide">{title}</h2>
        <p className="text-[10px] text-neutral-600 font-mono tracking-wider uppercase mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}