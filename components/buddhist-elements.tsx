"use client";

import React, { useState, useEffect } from 'react';

// --- Types ---
interface ElementCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function ZenYogaElements() {
  // --- Singing Bowl State ---
  const [isStriking, setIsStriking] = useState(false);
  const [rippleKey, setRippleKey] = useState(0); 

  // --- Updated Click Trigger (Adjusted for 1.25s total animation) ---
  const handleBowlClick = () => {
    if (isStriking) return; 
    
    setIsStriking(true);
    
    // Ripple triggers exactly at the impact frame (~42% of 1250ms = ~525ms)
    setTimeout(() => {
      setRippleKey((prev) => prev + 1);
    }, 525);

    // Reset striker state after the full 1.25s sequence completes
    setTimeout(() => {
      setIsStriking(false);
    }, 1250); 
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 p-8 flex flex-col items-center justify-center gap-8 font-sans selection:bg-neutral-900 selection:text-neutral-100">
      {/* Dynamic Keyframes injected safely into the render tree */}
      <style>{`
        /* Pure CSS Incense Burning (Slowed down to 5 minutes / 300 seconds total) */
        @keyframes burnDown {
          0% { height: 96px; }
          100% { height: 14.4px; }
        }

        /* Syncs the smoke to smoothly drop downward at the exact same 5-minute rate */
        @keyframes smokeFollow {
          0% { transform: translateY(0px); }
          100% { transform: translateY(81.6px); }
        }

        @keyframes smokeFade {
          0%, 100% { opacity: 0.35; }
          30% { opacity: 0.35; }
          50% { opacity: 0; }
          75% { opacity: 0; }
        }

        /* Dimmed Ember: Shifted to deep blood-oranges and reduced box-shadow spreads */
        @keyframes emberBreath {
          0%, 100% { 
            transform: scale(0.9) translate(-1px, -2px);
            background-color: #9a3412; /* Deeper burnt orange */
            box-shadow: 0 0 3px #7c2d12;
          }
          50% { 
            transform: scale(1.1) translate(-1px, -2px);
            background-color: #ea580c; /* Controlled orange flare */
            box-shadow: 0 0 5px #ea580c, 0 0 2px #f97316;
          }
        }
  
        /* Inverted 3D Mallet Strike Mechanics */
        @keyframes striker3DHit {
          0% { transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
          35% { transform: translateY(-8px) translateX(12px) scale(1.35) rotate(-14deg); }
          42% { transform: translateY(-10px) translateX(-30px) scale(1.1) rotate(16deg); }
          50% { transform: translateY(-12px) translateX(-8px) scale(1.25) rotate(-6deg); }
          70% { transform: translateY(-4px) translateX(-2px) scale(1.15) rotate(0deg); }
          100% { transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
        }

        /* Expanding, fading echo ripples */
        @keyframes rippleOut {
          0% { transform: scale(0.5); opacity: 0.9; }
          100% { transform: scale(2.4); opacity: 0; }
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
        
        {/* 1. ACTUAL BURNING INCENSE */}
        <ElementCard title="Burning Incense" subtitle="Senkō">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center translate-y-8">
              <div className="w-10 h-24 relative flex justify-center origin-bottom transform rotate-[12deg]">
                {/* Burn speed slowed to 300s (5 minutes) */}
                <div 
                  className="w-0.5 bg-stone-700 absolute bottom-0"
                  style={{ animation: 'burnDown 300s linear infinite' }}
                >
                  <div 
                    className="absolute left-0 top-0 w-1.5 h-1.5 rounded-full"
                    // Ember pulse cycle slowed down significantly to 12s
                    style={{ animation: 'emberBreath 12s ease-in-out infinite' }}
                  />
                </div>
              </div>
              <div className="w-16 h-4 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-b-xl border-t border-neutral-700/30 shadow-lg mt-[-1px] relative z-10">
                <div className="absolute top-0 inset-x-2 h-1 bg-neutral-950 rounded-b-sm" />
              </div>
            </div>

            {/* Smoke drop speed matched perfectly to the 300s burn cycle */}
            <div 
              className="absolute left-[52.5%] pointer-events-none mix-blend-screen"
              style={{ 
                bottom: '134px',
                animation: 'smokeFollow 300s linear infinite, smokeFade 6s ease-in-out infinite' 
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
          <button 
            onClick={handleBowlClick}
            className="relative w-48 h-32 flex flex-col items-center justify-center focus:outline-none group cursor-pointer"
            aria-label="Strike singing bowl"
          >
            <div className="relative flex flex-col items-center justify-center scale-110 transition-transform group-hover:scale-[1.13]">
              <div className="w-24 h-16 bg-gradient-to-b from-amber-600/90 via-amber-700 to-neutral-900 rounded-b-full shadow-[inset_0_2px_6px_rgba(255,255,255,0.15),0_12px_20px_rgba(0,0,0,0.6)] border-t border-amber-500/20 relative z-10">
                <div className="absolute top-0 inset-x-1.5 h-1.5 bg-neutral-950/80 rounded-b-full" />
              </div>
              <div className="w-20 h-2 bg-neutral-800 rounded-full shadow-md -mt-1 relative z-0" />
              <div 
                className="absolute left-[calc(100%-8px)] -bottom-3 flex flex-col items-center z-20 will-change-transform"
                style={{
                  transformOrigin: 'top center',
                  animation: isStriking ? 'striker3DHit 1.25s cubic-bezier(0.25, 1, 0.2, 1) forwards' : 'none'
                }}
              >
                <div className="w-1 h-10 bg-gradient-to-b from-amber-950 to-amber-900/70 rounded-t-full opacity-90" />
                <div className="w-4 h-4 bg-gradient-to-b from-neutral-600 via-neutral-800 to-neutral-950 rounded-full -mt-1.5 shadow-[0_5px_8px_rgba(0,0,0,0.6),0_1px_3px_rgba(0,0,0,0.4)] border border-neutral-700/20" />
              </div>
            </div>

            {rippleKey > 0 && (
              <div key={rippleKey} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div 
                  className="absolute w-24 h-24 rounded-full border-2 border-amber-500/40 mix-blend-screen"
                  style={{ animation: 'rippleOut 2.8s cubic-bezier(0.1, 0.8, 0.3, 1) forwards' }}
                />
                <div 
                  className="absolute w-24 h-24 rounded-full border border-amber-600/20 mix-blend-screen"
                  style={{ animation: 'rippleOut 3.6s cubic-bezier(0.1, 0.6, 0.2, 1) 0.12s forwards' }}
                />
              </div>
            )}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-28 h-28 rounded-full border border-amber-500/5 animate-[ping_4s_infinite_ease-in-out] opacity-10" />
            </div>
          </button>
        </ElementCard>

        {/* 6. DIYA LAMP */}
        <ElementCard title="Diya Lamp" subtitle="Clay Oil Lamp">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className="absolute bottom-[66px] w-20 h-3 bg-black/60 rounded-full blur-[4px] mix-blend-multiply" />
            <div className="w-24 h-10 bg-gradient-to-b from-amber-800 via-amber-900 to-stone-900 rounded-b-full rounded-tl-3xl shadow-md relative flex items-center justify-center border-t border-amber-700/30 z-10">
              <div className="absolute top-0 inset-x-2 h-3 bg-stone-950 rounded-b-full shadow-inner overflow-hidden">
                <div className="absolute bottom-0 inset-x-1 h-1.5 bg-gradient-to-r from-amber-600/30 to-amber-500/10 rounded-b-full" />
              </div>
              <div className="absolute right-1 top-0 w-5 h-2 bg-gradient-to-b from-stone-900 to-amber-950 rounded-full transform -rotate-[15deg]" />
              <div className="absolute right-1 top-[-18px] w-3 h-6 bg-gradient-to-t from-amber-500 via-orange-400 to-amber-200 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.6)] animate-[pulse_1.8s_infinite] transform origin-bottom z-20" />
            </div>
          </div>
        </ElementCard>

        {/* 7. SACRED MARACA */}
        <ElementCard title="Sacred Maraca" subtitle="Mbaracá Totem">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center animate-[shamanicShake_2.5s_infinite_ease-in-out]">
              <div className="absolute top-[-8px] flex justify-center items-end w-6 h-3 pointer-events-none z-20">
                <div className="w-0.5 h-3 bg-gradient-to-t from-amber-500 to-amber-300 rounded-t-full transform -rotate-[25deg] origin-bottom shadow-sm" />
                <div className="w-1 h-3.5 bg-gradient-to-t from-red-600 to-orange-400 rounded-t-full transform -rotate-[5deg] origin-bottom shadow-sm" />
                <div className="w-1 h-3.5 bg-gradient-to-t from-teal-600 to-cyan-400 rounded-t-full transform rotate-[10deg] origin-bottom shadow-sm" />
                <div className="w-0.5 h-3 bg-gradient-to-t from-amber-500 to-yellow-300 rounded-t-full transform rotate-[28deg] origin-bottom shadow-sm" />
              </div>
              <div className="w-9 h-11 bg-gradient-to-b from-stone-800 via-stone-700 to-stone-900 rounded-full shadow-[0_6px_12px_rgba(0,0,0,0.6)] border border-neutral-700/30 relative z-10 flex flex-col items-center justify-center">
                <div className="absolute top-2 w-full h-1.5 bg-gradient-to-r from-red-800 via-red-700 to-red-900 border-y border-stone-950/20 opacity-90" />
                <div className="w-5 h-5 rounded-full border border-amber-500/30 border-dashed flex items-center justify-center relative my-0.5">
                  <div className="w-2 h-px bg-amber-500/20 absolute" />
                  <div className="w-px h-2 bg-amber-500/20 absolute" />
                </div>
                <div className="absolute bottom-2.5 w-full h-1.5 bg-gradient-to-r from-teal-800 via-emerald-700 to-teal-900 border-y border-stone-950/20 opacity-80" />
              </div>
              <div className="w-1.5 h-8 bg-gradient-to-b from-amber-900 via-amber-950 to-stone-950 rounded-b-sm -mt-1 z-0 shadow-sm" />
            </div>
            <div className="absolute bottom-[58px] w-8 h-1 bg-black/60 rounded-full blur-[2px] animate-[shadowTrack_2.5s_infinite_rose-in-out]" />
          </div>
        </ElementCard>

      </div>

      <style>{`
        @keyframes shamanicShake {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(-3px, -1px) rotate(-4deg); }
          45% { transform: translate(2.5px, 0.5px) rotate(3deg); }
          65% { transform: translate(-2.5px, 0px) rotate(-3deg); }
          85% { transform: translate(2px, -0.5px) rotate(2deg); }
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
      <div className="flex-1 w-full flex items-center justify-center relative">
        {children}
      </div>
      <div className="w-full text-center border-t border-neutral-950/40 pt-3 relative z-10">
        <h2 className="text-xs font-normal text-stone-300 tracking-wide">{title}</h2>
        <p className="text-[10px] text-neutral-600 font-mono tracking-wider uppercase mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}