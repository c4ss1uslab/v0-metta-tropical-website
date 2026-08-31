"use client"

import React, { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

const polycrisisItems = [
  "Ecological Collapse",
  "Climate Destabilization",
  "Social Fragmentation",
  "Geopolitical Conflicts",
  "Forced Displacement",
  "Economic Inequality",
  "Institutional Distrust",
  "Mental Health Pandemic",
  "Genocide/Ethnocide",
];

export default function TheoryOfChangePage() {
  const [animationState, setAnimationState] = useState<'idle' | 'looping' | 'shattering' | 'reconstructing'>('idle');
  const [brokenItem, setBrokenItem] = useState<number | null>(null);
  
  // Single source of truth for the animation timeline (0 to 100)
  const [sweep, setSweep] = useState(0);

  // This effect orchestrates the synchronized back-and-forth ping-pong movement
  useEffect(() => {
    if (animationState !== 'looping') {
      setSweep(0);
      return;
    }
    
    let currentSweep = 0;
    let direction = 1;
    
    const interval = setInterval(() => {
      currentSweep += direction * 0.65; 
      
      if (currentSweep >= 100) {
        currentSweep = 100;
        direction = -1; // Bounce back
      } else if (currentSweep <= 0) {
        currentSweep = 0;
        direction = 1; // Bounce forward
      }
      
      setSweep(currentSweep);
    }, 30); // ~33fps
    
    return () => clearInterval(interval);
  }, [animationState]);

  const startAnimation = () => {
    if (animationState !== 'idle') return;
    
    setAnimationState('looping');

    // 1. Loop for 9 seconds
    setTimeout(() => {
      setAnimationState('shattering');
      // Pick a random Layer 1 item to shatter
      setBrokenItem(Math.floor(Math.random() * polycrisisItems.length));

      // 2. Stay shattered for 3 seconds
      setTimeout(() => {
        setAnimationState('reconstructing');

        // 3. Reconstruct for 1.5 seconds, then reset
        setTimeout(() => {
          setAnimationState('idle');
          setBrokenItem(null);
        }, 1500);
      }, 3000);
    }, 9000);
  };

  // Define sequential phases for the sweep (0 to 100 scale moving Right to Left)
  const inLayer3 = sweep >= 0 && sweep <= 22;
  const inBridge32 = sweep > 22 && sweep <= 38;
  const inLayer2 = sweep > 38 && sweep <= 62;
  const inBridge21 = sweep > 62 && sweep <= 78;
  const inLayer1 = sweep > 78 && sweep <= 100;

  return (
    <>
      <style>{`
        /* Pre-shatter intense glow */
        @keyframes criticalGlow {
          0% { background-color: inherit; transform: scale(1); }
          100% { background-color: rgba(220, 20, 60, 1); color: white; border-color: rgba(220, 20, 60, 1); transform: scale(1.05) rotate(1deg); box-shadow: 0 0 20px rgba(220, 20, 60, 0.6); }
        }

        /* Glass Shards Flying */
        @keyframes shatterPiece1 { to { transform: translate(-40px, -40px) rotate(-45deg) scale(0); opacity: 0; } }
        @keyframes shatterPiece2 { to { transform: translate(40px, -20px) rotate(60deg) scale(0); opacity: 0; } }
        @keyframes shatterPiece3 { to { transform: translate(-20px, 40px) rotate(-30deg) scale(0); opacity: 0; } }
        @keyframes shatterPiece4 { to { transform: translate(40px, 40px) rotate(80deg) scale(0); opacity: 0; } }

        /* Reconstruction */
        @keyframes reconstruct {
          0% { filter: blur(5px); opacity: 0; transform: scale(0.8); }
          100% { filter: blur(0); opacity: 1; transform: scale(1); }
        }

        /* Utility Classes */
        .is-critical { animation: criticalGlow 0.3s forwards; }
        .is-reconstructing { animation: reconstruct 1.5s forwards ease-out; }
        
        .shard-1 { animation: shatterPiece1 1s forwards ease-out; clip-path: polygon(0 0, 100% 0, 50% 100%); background-color: rgba(220, 20, 60, 1); }
        .shard-2 { animation: shatterPiece2 1s forwards ease-out; clip-path: polygon(50% 0, 100% 100%, 0 100%); background-color: rgba(200, 10, 40, 1); }
        .shard-3 { animation: shatterPiece3 1s forwards ease-out; clip-path: polygon(0 50%, 100% 0, 100% 100%); background-color: rgba(220, 20, 60, 1); }
        .shard-4 { animation: shatterPiece4 1s forwards ease-out; clip-path: polygon(0 0, 100% 50%, 0 100%); background-color: rgba(180, 0, 20, 1); }
      `}</style>

      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-foreground text-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <span className="text-yellow font-medium text-sm tracking-wide uppercase">Theory of Change</span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-background leading-tight">
              Sanctuaries of Coherence in a Time Between Worlds
            </h1>
            <p className="mt-8 text-xl text-background/80 leading-relaxed">
              Understanding the deep roots of our predicament and the educational response it requires.
            </p>
          </div>
        </section>

        {/* The Predicament */}
        <section className="py-18 lg:py-18 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-20">
              <span className="text-crimson font-medium text-sm tracking-wide uppercase">1. The Predicament</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Seeing The Metacrisis
              </h2>

              <blockquote className="mt-8 font-serif text-xl md:text-2xl text-muted-foreground italic leading-relaxed border-l-4 border-crimson pl-6">
                &ldquo;The metacrisis is the historically specific threat to truth, beauty, and goodness caused by our persistent misunderstanding, misvaluing, and misappropriating of reality.&rdquo;
              </blockquote>
              <cite className="mt-4 block text-muted-foreground/70 text-sm not-italic font-medium">— Jonathan Rowson</cite>
            </div>

            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                Humanity is living through a time of profound civilizational rupture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In 1993 Edgar Morin and Anne Brigitte Kern introduced the term <strong><em>polycrisis</em></strong>¹, describing the complex entanglement of interwoven crises facing humanity, arguing that the true vital problem was not one single issue, but the interconnected mesh of all crises on Earth. More recently, during the 2023 World Economic Forum's annual gathering in Davos, the concept has entered mainstream discourse as institutions and communities struggle to make sense of an increasingly unstable world. While the reality of the polycrisis has been more widely acknowledged and has helped illuminate the interconnected nature of our challenges, we believe it does not fully explain the deeper roots generating them. Beneath the interconnected visible crises of our time lies what some have called the <strong><em>metacrisis</em></strong>.²
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The <strong>metacrisis</strong> understands the interconnectedness of our global collective crises—ecological collapse, social fragmentation, institutional breakdown, technological risk, and meaning crisis—as symptoms of deeper, underlying conditions and patterns generating them. The metacrisis is a crisis at the “meta” layers of civilization, it's a dysfunction in the underlying ways of perceiving, relating, and understanding reality that modern civilization has been built upon. These patterns have become embedded not only in our institutions and systems, but in our perception, shaping how reality becomes intelligible to us: what we value, how we relate, and what kinds of futures we are capable of imagining.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                It is a crisis not only of systems, but of being.
              </p>
            </div>
            <div className="space-y-1 py-6">
              <p className="text-muted-foreground leading-relaxed">
                It points to the crisis unfolding:
              </p>
              <p className="text-muted-foreground leading-relaxed">
                • <em>within</em> ourselves, in our psyche, soul and spirit;
              </p>
              <p className="text-muted-foreground leading-relaxed">
                • <em>between</em> ourselves, in the ways we relate to one another and life itself; and
              </p>
              <p className="text-muted-foreground leading-relaxed">
                • <em>beyond</em> ourselves, in the worldviews, ontologies and civilizational narratives that shape how reality becomes meaningful and intelligible to us.³
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                In the same way that a symptom points to an underlying disease that is causing it, the <em>polycrisis</em> is pointing to the <em>metacrisis</em> as the deeper civilizational patterns influencing our global challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand the metacrisis as unfolding across three interconnected layers:
              </p>
            </div>

            {/* Diagram Wrapper */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

              {/* 1. THE SYMPTOMATIC LAYER */}
              <div className="flex flex-col h-full border border-dashed border-border p-6 rounded-xl bg-card/30 relative">
                <div className="text-center mb-8 border-b border-border pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Layer 1</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">The Symptomatic Layer</h3>
                  <p className="text-sm font-medium text-crimson mt-2">The Polycrisis</p>
                </div>

                <div className="flex-grow flex flex-col items-center justify-center my-auto relative">
                  {/* Layer 1 Vertical Axis */}
                  <div className="absolute left-1/2 top-4 bottom-2 w-[2px] bg-crimson/20 -translate-x-1/2 z-0 rounded-full">
                    {animationState === 'looping' && inLayer1 && (
                      <div 
                        className="absolute left-1/2 w-[4px] h-12 bg-crimson shadow-[0_0_12px_rgba(220,20,60,0.8)] rounded-full -translate-x-1/2 -translate-y-1/2"
                        style={{ top: `${(sweep - 78) / 22 * 100}%` }} 
                      />
                    )}
                  </div>

                  <div className="w-full flex flex-col gap-3 relative z-10">
                    {polycrisisItems.map((item, idx) => {
                      const isBrokenTarget = brokenItem === idx;
                      const isShattered = animationState === 'shattering' && isBrokenTarget;
                      const isReconstructing = animationState === 'reconstructing' && isBrokenTarget;
                      
                      const verticalPos = (sweep - 78) / 22 * 100;
                      const targetY = (idx / 9) * 100;
                      const isGlowing = animationState === 'looping' && inLayer1 && Math.abs(verticalPos - targetY) < 15;

                      return (
                        <div key={idx} className="relative w-full cursor-pointer" onClick={startAnimation}>
                          <div
                            className={`p-2.5 rounded-xl border bg-cream text-center text-xs font-medium text-foreground transition-all duration-300
                              ${isGlowing ? 'border-crimson shadow-[0_0_15px_rgba(220,20,60,0.5)] scale-[1.03]' : 'border-crimson/30 shadow-sm hover:border-crimson'}
                              ${isBrokenTarget && animationState === 'looping' ? 'is-critical' : ''}
                              ${isReconstructing ? 'is-reconstructing' : ''}
                              ${isShattered ? 'opacity-0' : 'opacity-100'}`}
                          >
                            {item}
                          </div>

                          {isShattered && (
                            <div className="absolute inset-0 z-20 pointer-events-none">
                              <div className="absolute top-0 left-0 w-1/2 h-full shard-1 border border-red-400/50"></div>
                              <div className="absolute top-0 right-0 w-1/2 h-1/2 shard-2 border border-red-400/50"></div>
                              <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 shard-3 border border-red-400/50"></div>
                              <div className="absolute bottom-0 right-0 w-1/2 h-full shard-4 border border-red-400/50"></div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                    
                    {/* "Etc..." Card */}
                    {(() => {
                      const verticalPos = (sweep - 78) / 22 * 100;
                      const isGlowing = animationState === 'looping' && inLayer1 && Math.abs(verticalPos - 100) < 15;
                      return (
                        <div 
                          className={`w-full p-2.5 rounded-xl border bg-cream text-center text-xs font-medium text-foreground transition-all duration-300 cursor-pointer 
                            ${isGlowing ? 'border-crimson shadow-[0_0_15px_rgba(220,20,60,0.5)] scale-[1.03]' : 'border-crimson/30 shadow-sm hover:border-crimson'}`}
                          onClick={startAnimation}
                        >
                          Etc...
                        </div>
                      );
                    })()}
                  </div>
                </div>
                <div className="pt-6 mt-8 invisible text-xs">Spacer</div>
              </div>

              {/* 2. THE STRUCTURAL LAYER */}
              <div className="flex flex-col h-full border border-dashed border-border p-6 rounded-xl bg-card/30 relative">
                
                {/* Horizontal Bridges: Layer 2 -> Layer 1 */}
                <div className="hidden lg:block absolute -left-8 top-0 bottom-[96px] w-8 z-0">
                  {[24, 44, 64, 84].map((topPos, i) => (
                    <div key={i} className="absolute w-full border-t-2 border-dashed border-crimson/30 overflow-hidden" style={{ top: `${topPos}%` }}>
                      {animationState === 'looping' && inBridge21 && (
                        <div 
                          className="absolute -top-[1px] h-[4px] w-[16px] bg-crimson shadow-[0_0_10px_rgba(220,20,60,0.8)] rounded-full -translate-y-1/2" 
                          style={{ right: `${(sweep - 62) / 16 * 100}%` }} 
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div 
                  className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-background border border-border rounded-full p-1 text-muted-foreground shadow-sm cursor-pointer hover:border-crimson hover:text-crimson transition-colors"
                  onClick={startAnimation}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </div>

                <div className="text-center mb-8 border-b border-border pb-4 relative z-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Layer 2</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">The Structural Layer</h3>
                  <p className="text-sm font-medium text-crimson mt-2">Meta-Systemic Dysfunctions</p>
                </div>

                <div className="flex-grow flex flex-col items-center justify-center my-auto relative w-full pb-6">
                  {/* Layer 2 Vertical Axis */}
                  <div className="absolute left-1/2 top-4 bottom-0 w-[2px] bg-crimson/20 -translate-x-1/2 z-0 rounded-full">
                     {animationState === 'looping' && inLayer2 && (
                      <div 
                        className="absolute left-1/2 w-[4px] h-12 bg-crimson shadow-[0_0_12px_rgba(220,20,60,0.8)] rounded-full -translate-x-1/2 -translate-y-1/2"
                        style={{ top: `${(sweep - 38) / 24 * 100}%` }} 
                      />
                    )}
                  </div>

                  <div className="w-full flex flex-col gap-4 relative z-10">
                    {[
                      { title: 'Crisis of Power', desc: 'Increasing concentration of power within individuals and institutions serving their personal agendas.' },
                      { title: 'Crisis of Incentives', desc: 'Systems optimizing for short-term, rivalrous, and extractive behaviors.' },
                      { title: 'Crisis of Trust', desc: 'Fragmented information ecology undermining collective sensemaking and discernment of truth, breaking down coordination.' },
                      { title: 'Crisis of Complexity', desc: 'Systematic optimization of simplistic metrics extracting from a complex living ecosystem and web of relationships.', sup: '5' }
                    ].map((item, i) => {
                      const verticalPos = (sweep - 38) / 24 * 100;
                      const targetY = [12, 37, 62, 87][i];
                      const isGlowing = animationState === 'looping' && inLayer2 && Math.abs(verticalPos - targetY) < 15;

                      return (
                        <div 
                          key={i} 
                          className={`w-full p-4 rounded-xl border-l-4 border-crimson bg-cream transition-all duration-300
                            ${isGlowing ? 'shadow-[0_0_15px_rgba(220,20,60,0.5)] scale-[1.03]' : 'shadow-sm hover:shadow-[0_0_15px_rgba(220,20,60,0.2)]'}`}
                        >
                          <h4 className="font-serif font-medium text-foreground">
                            {item.title}{item.sup && <sub className="text-[9px] font-sans font-normal opacity-60 ml-0.5">{item.sup}</sub>}
                          </h4>
                          <p className="mt-1 text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border text-center relative z-10 -mt-6">
                  <p className="text-xs font-mono bg-foreground text-background py-2 px-3 rounded shadow-inner relative z-20">
                    Rivalrous dynamics + Exponential tech = <span className="text-crimson font-semibold">Death of humanity</span><sub className="text-[8px] opacity-60 ml-0.5">4</sub>
                  </p>
                </div>
              </div>

              {/* 3. THE ONTOLOGICAL-CULTURAL LAYER */}
              <div className="flex flex-col h-full border border-dashed border-border p-6 rounded-xl bg-card/30 relative md:col-span-2 lg:col-span-1">
                
                {/* Horizontal Bridges: Layer 3 -> Layer 2 */}
                <div className="hidden lg:block absolute -left-8 top-0 bottom-[96px] w-8 z-0">
                  {[24, 44, 64, 84].map((topPos, i) => (
                    <div key={i} className="absolute w-full border-t-2 border-dashed border-olive/30 overflow-hidden" style={{ top: `${topPos}%` }}>
                      {animationState === 'looping' && inBridge32 && (
                        <div 
                          className="absolute -top-[1px] h-[4px] w-[16px] bg-crimson shadow-[0_0_10px_rgba(220,20,60,0.8)] rounded-full -translate-y-1/2" 
                          style={{ right: `${(sweep - 22) / 16 * 100}%` }} 
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div 
                  className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-background border border-border rounded-full p-1 text-muted-foreground shadow-sm cursor-pointer hover:border-olive hover:text-olive transition-colors"
                  onClick={startAnimation}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </div>

                <div className="text-center mb-8 border-b border-border pb-4 relative z-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Layer 3</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">The Cultural-Ontological Layer</h3>
                  <p className="text-sm font-medium text-olive mt-2">
                    Foundational Dysfunctions<sub className="text-[9px] font-sans font-normal opacity-60 ml-0.5">1</sub>
                  </p>
                </div>

                <div className="flex-grow flex flex-col items-center justify-center my-auto relative w-full pb-6">
                  {/* Layer 3 Vertical Axis */}
                  <div className="absolute left-1/2 top-4 bottom-0 w-[2px] bg-olive/20 -translate-x-1/2 z-0 rounded-full">
                     {animationState === 'looping' && inLayer3 && (
                      <div 
                        className="absolute left-1/2 w-[4px] h-12 bg-crimson shadow-[0_0_12px_rgba(220,20,60,0.8)] rounded-full -translate-x-1/2 -translate-y-1/2"
                        style={{ top: `${(sweep - 0) / 22 * 100}%` }} 
                      />
                    )}
                  </div>

                  <div className="w-full flex flex-col gap-4 relative z-10">
                    {[
                      { title: 'Crisis of Perception', desc: 'Persistent delusions of separation, misapprehending nature and reality.' },
                      { title: 'Crisis of Relationship', desc: 'The loss of our intimate relationships with all life: ourselves, others, the world and the sacred. ' },
                      { title: 'Crisis of Value', desc: 'The erosion of meaning, connection to the sacred and orientation towards the good, truth and beautiful.', sup: '2' },
                      { title: 'Crisis of Capacity', desc: 'Individuals are not developing the emotional, relational, spiritual and intellectual maturity at the same rate that our technologies are increasing in power and consequence.' }
                    ].map((item, i) => {
                      const verticalPos = (sweep - 0) / 22 * 100;
                      const targetY = [12, 37, 62, 87][i];
                      const isGlowing = animationState === 'looping' && inLayer3 && Math.abs(verticalPos - targetY) < 15;

                      return (
                        <div 
                          key={i} 
                          className={`w-full p-4 rounded-xl border-l-4 bg-cream transition-all duration-300
                            ${isGlowing ? 'border-crimson shadow-[0_0_15px_rgba(220,20,60,0.5)] scale-[1.03]' : 'border-olive shadow-sm hover:shadow-[0_0_15px_rgba(107,142,35,0.2)]'}`}
                        >
                          <h4 className="font-serif font-medium text-foreground">
                            {item.title}{item.sup && <sub className="text-[9px] font-sans font-normal opacity-60 ml-0.5">{item.sup}</sub>}
                          </h4>
                          <p className="mt-1 text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="pt-6 border-t border-border text-center relative z-10 -mt-6">
                  <p className="text-xs font-mono bg-foreground text-background py-2 px-3 rounded shadow-inner relative z-20">
                    Global Intimacy Disorder + Exponential tech = <span className="text-orange-400 font-semibold">Death of our humanity</span><sub className="text-[8px] opacity-60 ml-0.5">3</sub>
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-8 space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                At its core, the metacrisis reveals a widening gap between the complexity and power of the world humanity has created and the depth of wisdom required to navigate it responsibly - and design accordingly. This is known as the growing <strong><em>wisdom gap</em></strong>.⁵ We believe understanding these metacrisis dynamics is essential because the depth of our response must correspond to the depth of the predicament itself.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If the roots of the crisis are ontological, relational, developmental and spiritual, then responses focused solely at the level of symptoms or systems will remain insufficient. The challenge before us, therefore, is not only to redesign systems and institutions, but to become more wise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                It is to transform the very ways of seeing, being, knowing and acting that gave rise to those systems in the first place. To be capable of perceiving interdependence, holding complexity, relating responsibly, and participating in life without generating conditions that undermine the future.
              </p>
            </div>
          </div>
        </section>

{/* The Problem */}
<section className="bg-cream py-24 lg:py-32">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">
    {/* Header */}
    <div className="mb-12 text-center">
      <span className="text-sm font-medium uppercase tracking-wide text-olive">
        2. The Problem We&apos;re Tackling
      </span>

      <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
        A Crisis of Education, Formation, and Human Development
      </h2>
    </div>

    {/* Quote */}
    <blockquote className="mt-8 border-l-4 border-olive pl-6 font-serif text-xl italic leading-relaxed text-muted-foreground md:text-2xl">
      &ldquo;If education is not the answer, you are asking the wrong question:
      why it&apos;s time to see planetary crises as a species-wide learning
      opportunity.&rdquo;
    </blockquote>

    <cite className="mt-4 block text-sm font-medium not-italic text-muted-foreground/70">
      — Zak Stein
    </cite>

    {/* Introduction */}
    <div className="mt-10 space-y-6">
      <p className="leading-relaxed text-muted-foreground">
        The three layers of the metacrisis outlined above reveal a deeper
        educational and developmental crisis unfolding beneath our global
        challenges. The metacrisis is not only a crisis of systems,
        institutions, and planetary conditions, but also of how human beings
        are being formed within them, how we learn to perceive, relate, desire,
        make meaning, exercise power, and understand what our lives are
        ultimately in service of.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        If the metacrisis is simultaneously systemic, ontological, relational,
        developmental, and civilizational, then our educational responses must
        be capable of engaging these multiple layers of reality as well.
      </p>

      <p className="font-medium leading-relaxed text-foreground">
        We understand this crisis of education and human formation through six
        interconnected gaps that together define the central problems our work
        seeks to respond to.
      </p>
    </div>

    {/* Six Gaps */}
    <div className="mt-12 space-y-5">
      {/* 1. Orientation Gap */}
      <details className="group overflow-hidden rounded-xl border border-olive/20 bg-background transition-all duration-300 open:border-olive/40 open:shadow-[0_16px_40px_rgba(17,24,39,0.05)]">
        <summary className="cursor-pointer list-none px-6 py-6 outline-none md:px-8 md:py-7 [&::-webkit-details-marker]:hidden">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
                1. The Orientation Gap
              </h3>

              <p className="mt-2 font-serif text-base italic leading-relaxed text-muted-foreground md:text-lg">
                What is worth offering our lives to?
              </p>
            </div>

            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-olive/30 text-olive transition-transform duration-300 group-open:rotate-45">
              <span className="text-xl font-light leading-none">+</span>
            </div>
          </div>

          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Education rarely helps people engage seriously with the
            existential, ethical, spiritual, and ontological questions that
            orient a life. It develops intelligence and capability without
            sufficient clarity about what those capacities are ultimately in
            service of.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-olive">
            <span className="group-open:hidden">Read more</span>
            <span className="hidden group-open:inline">Close</span>

            <svg
              className="h-4 w-4 transition-transform duration-300 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m6 9 6 6 6-6"
              />
            </svg>
          </div>
        </summary>

        <div className="border-t border-olive/15 bg-[#FFFDF6] px-6 py-7 md:px-8 md:py-8">
          <div className="space-y-6">
            <p className="leading-relaxed text-muted-foreground">
              Modern education has largely withdrawn from the existential,
              spiritual, ethical, and ontological questions that belong at the
              heart of human formation:{" "}
              <em>
                What is a human life for? What is the nature of reality? What is
                worthy of our devotion? What does it mean to live a meaningful
                life? How should we relate to suffering? What is ultimately
                worth serving?
              </em>
            </p>

            <p className="leading-relaxed text-muted-foreground">
              These questions have often been relegated to religious
              institutions or the private sphere, leaving few serious
              educational spaces in which they can be encountered, practiced,
              and lived into. Yet education is never truly neutral. Every
              educational system carries implicit assumptions about what a human
              being is, what constitutes a good life, what is worthy of
              devotion, and what the world is for.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              When these assumptions remain unconscious and unquestioned, the
              intelligence, capacities, and power cultivated through education
              can just as easily deepen fragmentation, alienation, and the
              destruction of life instead of contributing to its flourishing.
            </p>

            <p className="font-medium leading-relaxed text-foreground">
              The problem is not only how human beings develop, but what their
              development is ultimately oriented toward.
            </p>
          </div>
        </div>
      </details>

      {/* 2. Aspiration Gap */}
      <details className="group overflow-hidden rounded-xl border border-olive/20 bg-background transition-all duration-300 open:border-olive/40 open:shadow-[0_16px_40px_rgba(17,24,39,0.05)]">
        <summary className="cursor-pointer list-none px-6 py-6 outline-none md:px-8 md:py-7 [&::-webkit-details-marker]:hidden">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
                2. The Aspiration Gap
              </h3>

              <p className="mt-2 font-serif text-base italic leading-relaxed text-muted-foreground md:text-lg">
                Who must we become?
              </p>
            </div>

            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-olive/30 text-olive transition-transform duration-300 group-open:rotate-45">
              <span className="text-xl font-light leading-none">+</span>
            </div>
          </div>

          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Human beings grow toward the horizons they can imagine. The images
            our culture offers — the achiever, the founder, even the changemaker
            — are too small for the depth of transformation this moment
            requires, and we have almost nothing higher to grow toward.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-olive">
            <span className="group-open:hidden">Read more</span>
            <span className="hidden group-open:inline">Close</span>

            <svg
              className="h-4 w-4 transition-transform duration-300 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m6 9 6 6 6-6"
              />
            </svg>
          </div>
        </summary>

        <div className="border-t border-olive/15 bg-[#FFFDF6] px-6 py-7 md:px-8 md:py-8">
          <div className="space-y-6">
            <p className="leading-relaxed text-muted-foreground">
              Human beings grow toward the horizons of possibility they are
              able to imagine. We are formed not only by what we are taught,
              but by the images of human possibility our cultures teach us to
              admire and aspire toward.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Many of the dominant aspirations of modern life remain organized
              around individual achievement, status, accumulation,
              productivity, recognition, and success. Even the figure of the
              “changemaker” can leave unquestioned the deeper existential
              questions and forms of maturation, responsibility, and
              transformation demanded by a civilizational crisis.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              At a moment asking so much of humanity, the images of human
              possibility available to us feel too small for the depth of
              transformation required. We lack widely shared images of mature,
              wise, and responsible human beings capable of awakening deeper
              aspiration toward wisdom, courage, compassion, ethical
              discernment, and a life of devotion towards the flourishing of
              all living beings.
            </p>

            <p className="font-medium leading-relaxed text-foreground">
              Without compelling images of who we must become, sacred dimensions
              of human potential can remain dormant, and with them, the more
              beautiful possibilities for the kinds of worlds those human
              beings might help bring into being.
            </p>
          </div>
        </div>
      </details>

      {/* 3. Formation Gap */}
      <details className="group overflow-hidden rounded-xl border border-olive/20 bg-background transition-all duration-300 open:border-olive/40 open:shadow-[0_16px_40px_rgba(17,24,39,0.05)]">
        <summary className="cursor-pointer list-none px-6 py-6 outline-none md:px-8 md:py-7 [&::-webkit-details-marker]:hidden">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
                3. The Formation Gap
              </h3>

              <p className="mt-2 font-serif text-base italic leading-relaxed text-muted-foreground md:text-lg">
                How do we become such humans?
              </p>
            </div>

            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-olive/30 text-olive transition-transform duration-300 group-open:rotate-45">
              <span className="text-xl font-light leading-none">+</span>
            </div>
          </div>

          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Education has become highly effective at expanding what people know,
            while neglecting the deeper formation of who they are becoming. We
            can accumulate knowledge without allowing it to transform our
            character, relationships, actions, or ways of life. Wisdom,
            responsibility, ethical discernment, relational maturity, and
            spiritual depth still remain largely peripheral to most educational
            projects.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-olive">
            <span className="group-open:hidden">Read more</span>
            <span className="hidden group-open:inline">Close</span>

            <svg
              className="h-4 w-4 transition-transform duration-300 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m6 9 6 6 6-6"
              />
            </svg>
          </div>
        </summary>

        <div className="border-t border-olive/15 bg-[#FFFDF6] px-6 py-7 md:px-8 md:py-8">
          <div className="space-y-6">
            <p className="leading-relaxed text-muted-foreground">
              Education has increasingly been reduced to learning, while
              neglecting the deeper work of human formation.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Much of conventional education continues to shape millions of
              people through models centered on standardization, information
              transfer, specialization, testing, credentials, and preparation
              for participation in the dominant economic and social systems.
              These forms of education have contributed to great scientific,
              technological, and material achievements — though their benefits
              have been unevenly shared, and they emerged within civilizational
              paradigms that have also generated profound costs for human
              communities and the more-than-human world.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              These forms of learning matter. But{" "}
              <strong className="font-medium text-foreground">
                learning is not the same as development, and development is not
                the same as formation.
              </strong>{" "}
              Learning expands what we know and can do. Development expands the
              capacities through which we perceive, make meaning, relate, and
              respond. Formation shapes who we are becoming, what we come to
              love, value, attend to, serve, and ultimately organize our lives
              around.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Modern education has been far less intentional about this deeper
              work. And the reason is that we are formed by how we engage with
              and meet reality, and education has taught us to meet it almost
              entirely through abstraction and analysis. It rarely engages the
              interior life, the relational field between people, the felt
              sense of belonging to a place, or the dimensions of existence
              that exceed explanation altogether.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              This is why education can inform people well and form them hardly
              at all, because conceptual understanding alone can&apos;t fully
              transform a person. It is possible to understand interdependence
              completely and live extractively. It is possible to know the
              science of collapse and feel nothing. This is what happens when
              reality is only ever met from one depth.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              In this sense, more education is not necessarily better. Forms of
              education that reproduce narrow-boundary thinking, competition,
              fragmentation, extraction, hyper-individualism, and disconnection
              from life may continue to strengthen the very patterns generating
              the metacrisis.
            </p>

            <p className="font-medium leading-relaxed text-foreground">
              And as our technological and institutional power expands, the
              imbalance grows more consequential. We are rapidly increasing
              what human beings know and can do without cultivating, at anything
              like the same pace, the maturity to discern what is worth doing at
              all.
            </p>
          </div>
        </div>
      </details>

      {/* 4. Integration Gap */}
      <details className="group overflow-hidden rounded-xl border border-olive/20 bg-background transition-all duration-300 open:border-olive/40 open:shadow-[0_16px_40px_rgba(17,24,39,0.05)]">
        <summary className="cursor-pointer list-none px-6 py-6 outline-none md:px-8 md:py-7 [&::-webkit-details-marker]:hidden">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
                4. The Integration Gap
              </h3>

              <p className="mt-2 font-serif text-base italic leading-relaxed text-muted-foreground md:text-lg">
                What containers sustain such becoming across time?
              </p>
            </div>

            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-olive/30 text-olive transition-transform duration-300 group-open:rotate-45">
              <span className="text-xl font-light leading-none">+</span>
            </div>
          </div>

          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Many pieces of transformative education already exist —
            contemplative, ecological, systemic, relational, ancestral — but
            they remain fragmented, short-term, and disconnected from one
            another. We lack coherent pathways that hold them together across
            years, through practice, training and accompaniment, until
            transformation becomes a way of life.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-olive">
            <span className="group-open:hidden">Read more</span>
            <span className="hidden group-open:inline">Close</span>

            <svg
              className="h-4 w-4 transition-transform duration-300 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m6 9 6 6 6-6"
              />
            </svg>
          </div>
        </summary>

        <div className="border-t border-olive/15 bg-[#FFFDF6] px-6 py-7 md:px-8 md:py-8">
          <div className="space-y-6">
            <p className="leading-relaxed text-muted-foreground">
              We currently possess many pieces of alternative and transformative
              education offering the capacities and formation needed at this
              moment, but rarely the long-term container capable of bringing
              them together across time.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              In response to the limitations of conventional education,
              powerful alternatives have emerged: ecological education,
              holistic education, contemplative practice, systems thinking,
              developmental frameworks, relational practice, community-based
              learning, ancestral and Indigenous ways of knowing, and new
              approaches to leadership and social transformation. Together,
              they offer essential contributions toward reimagining human
              formation for our time.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Yet they often remain fragmented from one another, delivered
              through short-term programs, disconnected from the wider
              structures through which people actually organize their lives,
              and structurally dependent upon the same civilizational logics
              they seek to transform. Few educational environments are capable
              of engaging the systemic, relational, ontological, developmental,
              ecological, and civilizational dimensions of our predicament in
              an integrated way.
            </p>

            <p className="font-medium leading-relaxed text-foreground">
              The problem is not simply a lack of transformative experiences,
              but the absence of coherent pathways of formation capable of
              bringing these experiences into relationships across time.
              Profound transformation requires developmental ecologies in which
              different dimensions of growth can deepen, inform one another,
              become embodied through sustained practice and community, and
              eventually take root as a way of life.
            </p>
          </div>
        </div>
      </details>

      {/* 5. Communal Development Gap */}
      <details className="group overflow-hidden rounded-xl border border-olive/20 bg-background transition-all duration-300 open:border-olive/40 open:shadow-[0_16px_40px_rgba(17,24,39,0.05)]">
        <summary className="cursor-pointer list-none px-6 py-6 outline-none md:px-8 md:py-7 [&::-webkit-details-marker]:hidden">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
                5. The Communal Development Gap
              </h3>

              <p className="mt-2 font-serif text-base italic leading-relaxed text-muted-foreground md:text-lg">
                How do we mature together?
              </p>
            </div>

            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-olive/30 text-olive transition-transform duration-300 group-open:rotate-45">
              <span className="text-xl font-light leading-none">+</span>
            </div>
          </div>

          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Human development is still treated primarily as an individual
            endeavor, even though many capacities required by the metacrisis can
            only be cultivated together. Communities themselves must become the
            unit of development, not support structures for individual growth,
            but bodies capable of perceiving, sensing and acting as one.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-olive">
            <span className="group-open:hidden">Read more</span>
            <span className="hidden group-open:inline">Close</span>

            <svg
              className="h-4 w-4 transition-transform duration-300 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m6 9 6 6 6-6"
              />
            </svg>
          </div>
        </summary>

        <div className="border-t border-olive/15 bg-[#FFFDF6] px-6 py-7 md:px-8 md:py-8">
          <div className="space-y-6">
            <p className="leading-relaxed text-muted-foreground">
              We have treated human development primarily as an individual
              endeavor. Much of modern education — including many transformative
              and alternative approaches — continues to take the individual as
              its primary unit of change. We design curricula for individual
              learning, measure individual outcomes, cultivate individual
              capacities, and imagine transformation largely as something that
              happens within a person.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Yet many of the capacities required to respond to the metacrisis
              cannot exist within an individual alone. They can only be
              developed together. The challenge before us is not only to
              cultivate wiser, more courageous, and responsible individuals,
              but to learn how communities themselves can become subjects of
              development — collective bodies capable of deepening their shared
              attention, relational maturity, collective intelligence, capacity
              for sensemaking, and ability to act coherently in service of
              something larger than themselves.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              This resonates deeply with Thich Nhat Hanh&apos;s vision that{" "}
              <em>“the next Buddha will be a sangha.”</em> The wisdom required
              to navigate planetary challenges cannot depend upon isolated
              individuals becoming exceptional enough to carry this
              responsibility alone. We need educational cultures in which the
              locus of development expands from the individual to the relational
              and communal.
            </p>

            <p className="font-medium leading-relaxed text-foreground">
              And perhaps this widening must go further still. The communities
              within which we learn and develop are not exclusively human. A
              truly planetary education must restore our capacity to learn with
              and from the more-than-human world, recognizing land, ecosystems,
              other species, and living systems not merely as objects of
              knowledge, but as participants in the larger web of relationships
              through which human formation becomes possible.
            </p>
          </div>
        </div>
      </details>

      {/* 6. Civilizational Gap */}
      <details className="group overflow-hidden rounded-xl border border-olive/20 bg-background transition-all duration-300 open:border-olive/40 open:shadow-[0_16px_40px_rgba(17,24,39,0.05)]">
        <summary className="cursor-pointer list-none px-6 py-6 outline-none md:px-8 md:py-7 [&::-webkit-details-marker]:hidden">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
                6. The Civilizational Gap
              </h3>

              <p className="mt-2 font-serif text-base italic leading-relaxed text-muted-foreground md:text-lg">
                What kinds of worlds cultivate rather than undermine our
                becoming?
              </p>
            </div>

            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-olive/30 text-olive transition-transform duration-300 group-open:rotate-45">
              <span className="text-xl font-light leading-none">+</span>
            </div>
          </div>

          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Education does not end in schools: cultures, economies,
            technologies, institutions, and social environments continually
            shape who we become. Without transforming these wider societal
            infrastructures, people are repeatedly pulled back into the very
            patterns they are trying to outgrow.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-olive">
            <span className="group-open:hidden">Read more</span>
            <span className="hidden group-open:inline">Close</span>

            <svg
              className="h-4 w-4 transition-transform duration-300 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m6 9 6 6 6-6"
              />
            </svg>
          </div>
        </summary>

        <div className="border-t border-olive/15 bg-[#FFFDF6] px-6 py-7 md:px-8 md:py-8">
          <div className="space-y-6">
            <p className="leading-relaxed text-muted-foreground">
              At the deepest layer, we cannot respond to the metacrisis if
              education is reduced merely to schools, universities, or
              alternative institutions. Education, in its deepest sense, is the
              intergenerational process through which societies reproduce ways
              of perceiving, relating, knowing, valuing, and being across time.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Human beings are always being formed through culture, media,
              technology, economics, architecture, religion, family systems,
              institutions, and the wider social worlds they inhabit.
            </p>

            <div className="rounded-r-lg border-l-2 border-[#D9A01B] bg-[#FFF9E9]/70 px-5 py-5 md:px-6">
              <p className="font-medium leading-relaxed text-foreground">
                Civilization is always educating us and shaping the kind of
                humans we become:
              </p>

              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A01B]" />
                  <span>Systems shape behavior.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A01B]" />
                  <span>Cultures shape perception.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A01B]" />
                  <span>The media shapes desire.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A01B]" />
                  <span>Institutions shape identity.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A01B]" />
                  <span>Economies shape relationships.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A01B]" />
                  <span>Technologies shape attention.</span>
                </li>
              </ul>
            </div>

            <p className="leading-relaxed text-muted-foreground">
              Many of the dominant systems of modern life reinforce
              acceleration, competition, extraction, fragmentation,
              hyper-individualism, and disconnection from the living world.
              Even people who sincerely long to live differently are
              continually returned to environments whose incentives, rhythms,
              and assumptions pull them back toward the patterns they are trying
              to transform.
            </p>

            <p className="font-medium leading-relaxed text-foreground">
              Therefore, fragmented systems cultivate fragmented human beings,
              who then recreate fragmented systems. This recursive cycle has
              become one of the central dynamics perpetuating the metacrisis
              itself.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              The task is not only to create better schools, programs, or
              institutions, though this is indeed necessary. We cannot expect
              that individuals will heroically resist the environments around
              them. Eventually, the communities, institutions, economies,
              technologies, and cultures themselves must begin to support
              different ways of being human.
            </p>
          </div>
        </div>
      </details>
    </div>
  </div>
</section>

        {/* 3. The Developmental Hypothesis */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow font-medium text-sm tracking-wide uppercase">3. The Developmental Hypothesis</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background">
                What This Moment Requires
              </h2>
              <blockquote className="mt-8 font-serif text-xl text-background/80 italic border-l-4 border-yellow pl-6 text-left">
                &ldquo;The way we respond to the crisis is part of the crisis.&rdquo;
              </blockquote>
              <cite className="mt-2 block text-background/60 text-sm not-italic font-medium text-left">— Bayo Akomolafe</cite>
            </div>

            <div className="space-y-8 text-background/90 leading-relaxed">
              <p className="text-lg font-serif text-yellow">
                We believe the metacrisis cannot be resolved through new technologies, policies, or institutions alone. The same ways of seeing, being, knowing, and relating that contributed to the metacrisis cannot generate the conditions required for a life-enhancing civilization to emerge.
              </p>
              <p>
                This moment therefore calls for profound human and civilizational transformation in how we understand ourselves, reality, and our relationship with all life. Most modern civilizational structures — educational systems, media environments, economic systems, technologies, and cultural norms — continuously shape human desires, identities, ambitions, and behaviors in ways that reinforce fragmentation, extraction, hyper-individualism, disconnection from life, and the inability to perceive our deep interdependence with living systems.
              </p>
              <p className="font-medium text-yellow">
                At the heart of both our challenge and our work is a developmental question.
              </p>

              <p className="font-medium text-yellow">
                [what is the question?] - my development question + "we have lots to learn with living systems, indigenous practices, wisdom traditions, etc."
              </p>

              <p>
                We understand this moment as a civilizational rite of passage: a threshold demanding that humanity evolve beyond many of the ways of being modernity has normalized. Responding to the metacrisis requires transformation at the level of perception, relationship, identity, values, and participation in life itself.
              </p>
              <p>
                This means cultivating forms of wisdom, relational maturity, ethical depth, ecological awareness, ontological grounding, and developmental capacity capable of disclosing different ways of being human and participating in the world.
              </p>
              <p>
                Yet we currently possess very few structures capable of supporting such becoming. Most educational and developmental systems continue reproducing the same patterns of consciousness and culture that generated the crisis in the first place. While many important alternative initiatives have emerged over recent decades, most remain fragmented, isolated, difficult to access, or unable to sustain the long arc of transformation required during a civilizational transition.
              </p>
              <p>
                Human transformation of this depth cannot emerge through isolated workshops, short-term interventions, or information transfer alone. It requires <strong>new developmental ecologies</strong>: interconnected systems of practices, spaces, relationships, communities, and educational processes capable of seeping into existing systems, transforming them, creating new ones and supporting deep personal and collective transformation across time.
              </p>
              <p>
                These developmental ecologies become the seeds of new developmental cultures which, over time, can evolve into civilizational infrastructures capable of supporting wiser forms of human participation at scale. The task before us is not simply to create isolated transformational spaces, but collective coordination to help cultivate the conditions for new worlds, developmental cultures, and life-enhancing civilizations to emerge.
              </p>
            </div>
          </div>
        </section>

        {/* 4. The Response */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-cyan-800 font-medium text-sm tracking-wide uppercase">4. The Response</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Building Wisdom-Centered Educational Architectures
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto italic">
                Supporting individual and collective transformation in response to systemic collapse and in service of a mature, wise and life-affirming civilization.
              </p>
            </div>

            <div className="space-y-12 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">A Lineage</h3>
                <p>
                  Historically, at moments of civilizational rupture, new educational and relational architectures have historically emerged at the edges of society to help individuals navigate transition. Monasteries, wisdom traditions, folk schools, mystery schools, and quilombos created developmental environments capable of cultivating the ontologies, capacities, relationships, and cultural coherence required for their time. We are drawing from these lineages to build something our moment requires and largely lacks.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">What We Are Building</h3>
                <p>
                  A wisdom-centered educational architecture and developmental ecosystem, rooted in the Global South, capable of supporting the long arc of human transformation required during a time between worlds. We are particularly focused on serving a new generation of emerging leaders — post-activists artists, educators, thinkers, organizers, change-makers and world-builders — who feel called to participate in the civilizational challenges of this moment.
                </p>
                <p className="mt-4">
                  Our work begins at the root. The metacrisis is fundamentally a crisis of how human beings perceive, understand, relate to, and act within reality. Which means our response begins at the level of ontology: how reality becomes intelligible, relational, and livable. At the center of our work is a relational-ontological pedagogy, an approach to education focused not only on what people know, but on transforming the ways they see, relate to, and participate in life. This transformation unfolds through embodied practice, experiential training, communal formation, rites of passage, rituals and long-term relational culture. These dimensions are mutually reinforcing aspects of a living developmental ecology.
                </p>
                <p className="mt-4">
                  A central aspect of our work is mapping and weaving together the fragmented ecosystem of initiatives, practices, frameworks, and communities already responding to the metacrisis across the Global South and the world. We believe many essential developmental initiatives for this moment already exist across fields such as contemplative practice, systems thinking, regenerative culture, complexity, trauma healing, metamodern thought, relational work, ecological learning, and wisdom traditions. Yet these efforts often remain isolated, inaccessible, or disconnected from coherent developmental pathways. Our aim is not simply to create another isolated initiative, but to help integrate them into our wisdom-centered educational architecture capable of supporting deeper individual and collective transformation within five streams: The Sacred, Soul, Systems, Soil and Society.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">Where We Are Rooted - A Confluence of Lineages</h3>
                <p className="mb-8">
                  We are rooted in Brazil and Latin America, shaped by this territory, this language, this soil. Our work emerges at the intersection of three lineages that rarely meet:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="p-5 bg-background border-t-2 border-[#D9A01B] shadow-sm">
                    <strong className="text-foreground block font-serif text-base mb-2">I. Intellectual & Philosophical</strong>
                    <p className="text-xs">The intellectual and philosophical rigor of the scientific community, especially from the systems and complexity sciences, the regenerative movement, and the metacrisis and metamodern conversation, developed largely in the Global North.</p>
                  </div>
                  <div className="p-5 bg-background border-t-2 border-cyan shadow-sm">
                    <strong className="text-foreground block font-serif text-base mb-2">II. Contemplative Depth</strong>
                    <p className="text-xs">The contemplative depth of wisdom traditions from around the world — especially the Buddhist lineage — which has shaped our ontologies, practices, and understanding of long-arc educational architecture for the cultivation of wisdom, compassion and ethical life.</p>
                  </div>
                  <div className="p-5 bg-background border-t-2 border-olive shadow-sm">
                    <strong className="text-foreground block font-serif text-base mb-2">III. Living, Relational Wisdom</strong>
                    <p className="text-xs">The embodied, relational wisdom carried by indigenous, quilombola, Afro-diasporic and marginalized communities, that despite centuries of erasure and forced collapse, have carried and protected ways of seeing, being and relating that the rest of the world is only now beginning to value.</p>
                  </div>
                </div>

                <p className="mb-8">
                  We do not claim to live inside all these traditions. We come to them with respect, curiosity, and the recognition that what they carry is not background context for our work, but the core medicine at the center of it.
                  </p>
                <p className="mb-8">
                    What we are attempting is difficult, necessary, and (we believe) genuinely new. We are not simply importing Global North frameworks southward, nor treating wisdom traditions as timeless solutions immune to their own historical limitations and cultural context, or romanticizing the wisdom of historically marginalized communities.
                </p>
                 <p>
                 Instead, we are exploring what becomes possible when rigorous systems inquiry, contemplative wisdom, and the living ontological intelligence of this territory are brought into genuine relationship with one another. From this encounter, a new pedagogical and developmental culture can emerge, one that could only take root here, where these lineages have a reason to meet, and where the urgency of this moment makes their separation no longer affordable.
                </p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-border max-w-4xl mx-auto text-center">
              <h4 className="font-serif text-2xl font-medium text-foreground mb-6">Our Aspiration</h4>
              <p className="text-muted-foreground leading-relaxed">
                With humility, we see this work as an early experiment in what new forms of education and culture might become during a time between worlds. Not educational systems adapted to the logic of modernity, but developmental architectures attempting to respond to the full depth of the metacrisis: its ontological roots, relational wounds and civilizational demands. We don't fully know how to do all of this. But we believe there is a real need to start somewhere, to begin radical and honest experiments with the evolution of educational forms, trusting that what we tend carefully to now will matter to those who come after us. This is what we are trying to build. With everything we have.
              </p>
              <p className="mt-6 text-muted-foreground font-medium font-serif italic text-foreground">
                In Portuguese, rooted in this soil, e com a alegria que só essa terra conhece.
              </p>
            </div>
          </div>
        </section>

        {/* 5. The Civilizational Horizon */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#D9A01B] font-medium text-sm tracking-wide uppercase">5. The Civilizational Horizon</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Cultivating Wisdom in Service of All Life
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Our aspiration is not merely the development of wise individuals, but the emergence of wisdom-centered cultures: communities, educational spaces, organizations, practices, and institutions designed to cultivate the conditions for wisdom to emerge and be transmitted across generations. In such a future, wisdom cultivation becomes a shared cultural function rather than a marginal pursuit — held by a growing ecosystem of wisdom-centered institutions capable of nourishing the conditions for life-affirming civilizations to emerge.
              </p>
              <p>
                We believe wisdom-centered institutions represent a new paradigm for individual and collective development. Unlike many modern institutions designed primarily around efficiency, growth, and productivity, these institutions are organized around cultivating mature human beings, resilient communities, and wiser ways of participating in the web of life.
              </p>
              <p>
                They are not separate from society, but woven into the fabric of everyday life. They can take the form of businesses, schools, communities, cultural spaces, technologies, spiritual centers, social movements, and new organizational models that recognize that every environment shapes the kinds of human beings we become. Therefore, every institution carries a responsibility to consider what forms of consciousness, relationship, and culture it is helping cultivate.
              </p>
              <p>
                Over the coming decades, we hope to contribute to the emergence of an ecosystem of wisdom-centered institutions across Brazil and beyond: bioregional organizations strengthening local communities and ecological resilience; residential communities prototyping new ways of being, relating, and organizing together; educational spaces integrating wisdom traditions and contemporary knowledge; communities supporting initiation, rites of passage, and elderhood; philanthropic institutions redistributing resources toward cultural renewal; political movements capable of holding complexity beyond polarization; artistic movements restoring our sense of belonging with life; and technologies designed to deepen rather than diminish our humanity.
              </p>
              <p>
                Together, these emerging institutions can become the foundation of a new wisdom-centered civilizational infrastructure: a distributed ecology of people, communities, and institutions connected through enough ontological coherence, relational trust, and shared devotion to the flourishing of all life leading to deeper collective coordination in response to the biggest challenges of our times.
              </p>
            </div>
          </div>

          {/* Full-Width Horizontal Framework: The Architecture of Becoming */}
          <div className="mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="p-6 md:p-10 bg-cream rounded-xl border border-border w-full">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground">The Architecture of Becoming</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
                  Underneath our work lives a simple understanding that the future of civilization depends not only on what we create, but on who we become. And who we become depends on the worlds that shape us.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-2 items-center justify-center w-full">
                {[
                  "Life-Affirming Futures",
                  "Wisdom-Centered Civilizational Infrastructures",
                  "Wisdom-Centered Cultures",
                  "Wise, Mature & Responsible Human Beings and Communities",
                  "Developmental Ecologies",
                  "Wisdom-Centered Educational Architectures"
                ].map((title, index, array) => (
                  <div key={index} className="flex flex-col md:flex-row items-center w-full h-full">
                    <div className="w-full p-3 text-center bg-background border border-border rounded shadow-sm text-xs text-muted-foreground font-medium min-h-[80px] md:min-h-[110px] flex items-center justify-center flex-grow">
                      {title}
                    </div>
                    {index < array.length - 1 && (
                      <div className="text-muted-foreground/40 my-1 md:my-0 md:mx-1 font-mono text-xs font-bold transform rotate-90 md:rotate-0 flex-shrink-0">
                        ↔
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-yellow">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Towards Collective Coordination in Service of Life
            </h2>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              All of this is in service of a single horizon: nurturing the transformation of individuals and community towards a genuinely different kind of collective response to the crises of our time.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/fellowship"
                className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                Join the Fellowship
              </Link>
              <Link
                href="/learn-more"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-foreground text-foreground font-medium text-sm tracking-wide hover:bg-foreground/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}