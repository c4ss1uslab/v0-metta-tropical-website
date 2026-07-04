"use client"

import React, { useState } from "react"
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

  const startAnimation = () => {
    if (animationState !== 'idle') return;
    
    setAnimationState('looping');

    // 1. Loop for 12 seconds (Doubled timing)
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
    }, 12000);
  };

  return (
    <>
      <style>{`
        /* Traveling Line Animations */
        @keyframes slideRight {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        @keyframes slideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(600%); opacity: 0; }
        }
        
        /* Card Glow Loop (Slower, softer crimson glow) */
        @keyframes cardGlow {
          0%, 100% { border-color: inherit; box-shadow: none; }
          40%, 60% { border-color: rgba(220, 20, 60, 0.7); box-shadow: 0 0 15px rgba(220, 20, 60, 0.3); }
        }

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
        .travel-x { animation: slideRight 1.5s linear infinite; }
        .travel-y { animation: slideDown 2.5s linear infinite; }
        .is-glowing { animation: cardGlow 4s ease-in-out infinite; } /* Slower pulse */
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
              Articulating the Metacrisis
            </h1>
            <p className="mt-8 text-xl text-background/80 leading-relaxed">
              Understanding the deep roots of our predicament and the educational response it requires.
            </p>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-18 lg:py-18 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-crimson font-medium text-sm tracking-wide uppercase">The Symptoms</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Our world is showing symptoms of life-threatening diseases
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Ecological Degradation", desc: "The destruction of the living systems that sustain all life" },
                { title: "Political Polarization", desc: "The fragmentation of our capacity for collective action" },
                { title: "Meaning Crisis", desc: "The loss of shared stories, values, and purpose" },
                { title: "Technological Risk", desc: "AI and exponential technologies outpacing wisdom" },
              ].map((symptom) => (
                <div key={symptom.title} className="p-6 bg-background border-t-4 border-crimson">
                  <h3 className="font-serif text-lg font-medium text-foreground">{symptom.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{symptom.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                These diseases must be diagnosed with diligence and precision. Only proper diagnosis can lead to adequate responses. Any serious response must be tackling the root causes of our disease.
              </p>
            </div>
          </div>
        </section>

        {/* The Predicament */}
        <section className="py-18 lg:py-18 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-20">
              <span className="text-crimson font-medium text-sm tracking-wide uppercase">The Predicament</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                The Metacrisis
              </h2>

              <blockquote className="mt-8 font-serif text-xl md:text-2xl text-muted-foreground italic leading-relaxed border-l-4 border-crimson pl-6">
                &ldquo;The metacrisis is the historically specific threat to truth, beauty, and goodness caused by our persistent misunderstanding, misvaluing, and misappropriating of reality.&rdquo;
              </blockquote>
              <cite className="mt-4 block text-muted-foreground/70 text-sm not-italic font-medium">— Jonathan Rowson</cite>
            </div>

            {/* Introductory Text Blocks Omitted for Brevity in Display - Keeping original intact */}
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
                  {/* Vertical axis line with thicker traveling beam */}
                  <div className="absolute left-1/2 top-4 bottom-2 w-[2px] bg-crimson/20 -translate-x-1/2 z-0 overflow-hidden">
                    {animationState === 'looping' && (
                      <div className="w-[4px] h-16 bg-crimson shadow-[0_0_10px_rgba(220,20,60,0.8)] rounded-full absolute left-1/2 -translate-x-1/2 travel-y" />
                    )}
                  </div>

                  <div className="w-full flex flex-col gap-3 relative z-10">
                    {polycrisisItems.map((item, idx) => {
                      const isBrokenTarget = brokenItem === idx;
                      const isShattered = animationState === 'shattering' && isBrokenTarget;
                      const isReconstructing = animationState === 'reconstructing' && isBrokenTarget;

                      return (
                        <div key={idx} className="relative w-full cursor-pointer" onClick={startAnimation}>
                          {/* The main card - Now with slower, softer crimson glow */}
                          <div
                            className={`p-2.5 rounded-xl border border-crimson/30 bg-cream text-center text-xs font-medium text-foreground shadow-sm transition-all duration-500 hover:border-crimson hover:shadow-[0_0_12px_rgba(220,20,60,0.4)] 
                              ${isBrokenTarget && animationState === 'looping' ? 'is-critical' : ''}
                              ${isReconstructing ? 'is-reconstructing' : ''}
                              ${isShattered ? 'opacity-0' : 'opacity-100'}`}
                          >
                            {item}
                          </div>

                          {/* The Shards (Only visible when shattered) */}
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
                    
                    {/* "Etc..." Card incorporated back into the mapped structure flex gap so the line properly connects it */}
                    <div 
                      className="w-full p-2.5 rounded-xl border border-crimson/30 bg-cream text-center text-xs font-medium text-foreground shadow-sm transition-all duration-500 hover:border-crimson hover:shadow-[0_0_12px_rgba(220,20,60,0.4)] cursor-pointer"
                      onClick={startAnimation}
                    >
                      Etc...
                    </div>
                  </div>
                </div>
                <div className="pt-6 mt-8 invisible text-xs">Spacer</div>
              </div>

              {/* 2. THE STRUCTURAL LAYER */}
              <div className="flex flex-col h-full border border-dashed border-border p-6 rounded-xl bg-card/30 relative">
                
                {/* Rails with thicker, visible horizontal traveling beams */}
                <div className="hidden lg:block absolute -left-8 top-0 bottom-[96px] w-8 z-0">
                  {[24, 44, 64, 84].map((topPos, i) => (
                    <div key={i} className="absolute w-full border-t-2 border-dashed border-crimson/30 overflow-visible" style={{ top: `${topPos}%` }}>
                      {animationState === 'looping' && (
                        <div 
                          className="absolute -top-[3px] left-0 h-[4px] w-[24px] bg-crimson shadow-[0_0_10px_rgba(220,20,60,0.8)] rounded-full travel-x" 
                          style={{ animationDelay: `${i * 0.3}s` }} 
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

                <div className="text-center mb-8 border-b border-border pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Layer 2</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">The Structural Layer</h3>
                  <p className="text-sm font-medium text-crimson mt-2">Meta-Systemic Dysfunctions</p>
                </div>

                <div className="flex-grow flex flex-col items-center justify-center my-auto relative w-full pb-6">
                  {/* Vertical axis line with thicker traveling beam */}
                  <div className="absolute left-1/2 top-4 bottom-0 w-[2px] bg-crimson/20 -translate-x-1/2 z-0 overflow-hidden">
                     {animationState === 'looping' && (
                      <div className="w-[4px] h-16 bg-crimson shadow-[0_0_10px_rgba(220,20,60,0.8)] rounded-full absolute left-1/2 -translate-x-1/2 travel-y" style={{ animationDelay: '0.5s' }} />
                    )}
                  </div>

                  <div className="w-full flex flex-col gap-4 relative z-10">
                    {[
                      { title: 'Crisis of Power', desc: 'Captured actors and systems incapable of coordinating transformative change alone.' },
                      { title: 'Crisis of Incentives', desc: 'Systems optimizing purely for short-term, rivalrous, and extractive behaviors.' },
                      { title: 'Crisis of Trust', desc: 'Breakdown of shared sensemaking, truth verification, and institutional legitimacy.' },
                      { title: 'Crisis of Complexity', desc: 'Complicated structures fragilely layered over highly complex substrates.', sup: '5' }
                    ].map((item, i) => (
                      <div 
                        key={i} 
                        className={`w-full p-4 rounded-xl border-l-4 border-crimson bg-cream shadow-sm transition-all duration-500 hover:shadow-[0_0_15px_rgba(220,20,60,0.2)] ${animationState === 'looping' ? 'is-glowing' : ''}`}
                        style={{ animationDelay: `${i * 0.4}s` }}
                      >
                        <h4 className="font-serif font-medium text-foreground">
                          {item.title}{item.sup && <sub className="text-[9px] font-sans font-normal opacity-60 ml-0.5">{item.sup}</sub>}
                        </h4>
                        <p className="mt-1 text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
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
                
                {/* Rails with thicker, visible horizontal traveling beams */}
                <div className="hidden lg:block absolute -left-8 top-0 bottom-[96px] w-8 z-0">
                  {[24, 44, 64, 84].map((topPos, i) => (
                    <div key={i} className="absolute w-full border-t-2 border-dashed border-olive/30 overflow-visible" style={{ top: `${topPos}%` }}>
                      {animationState === 'looping' && (
                        <div 
                          className="absolute -top-[3px] left-0 h-[4px] w-[24px] bg-crimson shadow-[0_0_10px_rgba(220,20,60,0.8)] rounded-full travel-x" 
                          style={{ animationDelay: `${(i * 0.3) + 0.6}s` }} 
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

                <div className="text-center mb-8 border-b border-border pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Layer 3</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">The Ontological-Cultural Layer</h3>
                  <p className="text-sm font-medium text-olive mt-2">
                    Foundational Dysfunctions<sub className="text-[9px] font-sans font-normal opacity-60 ml-0.5">1</sub>
                  </p>
                </div>

                <div className="flex-grow flex flex-col items-center justify-center my-auto relative w-full pb-6">
                  {/* Vertical axis line with thicker traveling beam */}
                  <div className="absolute left-1/2 top-4 bottom-0 w-[2px] bg-olive/20 -translate-x-1/2 z-0 overflow-hidden">
                     {animationState === 'looping' && (
                      <div className="w-[4px] h-16 bg-crimson shadow-[0_0_10px_rgba(220,20,60,0.8)] rounded-full absolute left-1/2 -translate-x-1/2 travel-y" style={{ animationDelay: '1s' }} />
                    )}
                  </div>

                  <div className="w-full flex flex-col gap-4 relative z-10">
                    {[
                      { title: 'Crisis of Perception', desc: 'Persistent delusions of total separation, misapprehending nature and reality.' },
                      { title: 'Crisis of Relationship', desc: 'Alienation from self, other human life, and the non-human world.' },
                      { title: 'Crisis of Value', desc: 'Spiritual crisis, loss of existential meaning, and broken ties to the sacred.', sup: '2' },
                      { title: 'Crisis of Capacity', desc: 'Unfulfilled potential scaled up by global systems, making problems outpace our capacity to process.' }
                    ].map((item, i) => (
                      <div 
                        key={i} 
                        className={`w-full p-4 rounded-xl border-l-4 border-olive bg-cream shadow-sm transition-all duration-500 hover:shadow-[0_0_15px_rgba(220,20,60,0.2)] ${animationState === 'looping' ? 'is-glowing' : ''}`}
                        style={{ animationDelay: `${(i * 0.4) + 0.8}s` }}
                      >
                        <h4 className="font-serif font-medium text-foreground">
                          {item.title}{item.sup && <sub className="text-[9px] font-sans font-normal opacity-60 ml-0.5">{item.sup}</sub>}
                        </h4>
                        <p className="mt-1 text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
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
                At its core, the metacrisis reveals a widening gap between the complexity and power of the world humanity has created and the depth of wisdom required to navigate it responsibly. This is known as the growing <strong><em>wisdom gap</em></strong>.⁵ We believe understanding these metacrisis dynamics is essential because the depth of our response must correspond to the depth of the predicament itself.
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

        {/* ... The rest of the page (The Problem, The Developmental Hypothesis, Our Response, etc.) remains perfectly intact ... */}
        
        {/* The Problem */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-olive font-medium text-sm tracking-wide uppercase">The Problem We're Tackling</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                A Crisis of Education, Formation, and Human Development
              </h2>
            </div>

            <blockquote className="mt-8 font-serif text-xl md:text-2xl text-muted-foreground italic leading-relaxed border-l-4 border-olive pl-6">
              &ldquo;If education is not the answer, you are asking the wrong question: why it's time to see planetary crises as a species-wide learning opportunity.&rdquo;
            </blockquote>
            <cite className="mt-4 block text-muted-foreground/70 text-sm not-italic font-medium">— Zak Stein</cite>

            <div className="mt-8 space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                The three layers of the metacrisis outlined above illuminate a deeper educational and developmental crisis unfolding beneath our global challenges. If the metacrisis is simultaneously systemic, ontological, relational, developmental, and civilizational, then our educational responses must also be capable of engaging these multiple layers of reality.</p>
              <p className="text-muted-foreground leading-relaxed">
                One of the deepest failures of modern education is that it has become extraordinarily effective at cultivating information, specialization, and technical capability, while remaining largely incapable of cultivating wisdom, relational maturity, and ethical depth.</p>
              <p className="text-muted-foreground leading-relaxed">We believe this educational crisis exists across three interconnected dimensions:</p>
            </div>
            <div className="space-y-1 py-6">
              <p className="text-muted-foreground leading-relaxed">• <strong>Conventional education</strong> often reproduces the fragmentation underlying the metacrisis.</p>
              <p className="text-muted-foreground leading-relaxed">• <strong>Alternative educational</strong> movements, while valuable, remain too fragmented to meet the scale and complexity of civilizational transition.</p>
              <p className="text-muted-foreground leading-relaxed">• <strong>Civilization</strong> itself functions as an educational environment, shaping desires, identities, perceptions, and behaviors that perpetuate the metacrisis.</p>
            </div>
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">Much of today’s educational landscape — conventional, alternative, and civilizational — remains insufficient for the magnitude of the transition we are entering.</p>
              <p className="text-muted-foreground leading-relaxed">At one level, <strong>conventional educational</strong> systems continue to shape millions of people through fragmented industrial-age models of learning centered around standardization, information transfer, testing, and economic productivity. While these systems generated extraordinary scientific, technological, and economic capacities, they often did so within cultural and economic paradigms, unable to adequately orient those powers toward the flourishing of life as a whole. In this sense, more education is not necessarily better. Forms of education that reinforce fragmentation, competition, extraction, hyper-individualism, and disconnection from life may deepen the very conditions generating the metacrisis itself.</p>
              <p className="text-muted-foreground leading-relaxed">At the same time, many <strong>alternative educational</strong> approaches and transformational initiatives have emerged in response to the limitations of conventional education. Ecological education, holistic education, contemplative practice, systems thinking, developmental frameworks, community-based learning, and social impact movements have all contributed important insights toward reimagining human development and cultural renewal. Many of these efforts represent essential and beautiful responses to a world in crisis.</p>
              <p className="text-muted-foreground leading-relaxed">Yet the depth and complexity of the metacrisis reveal that isolated approaches alone are not enough. Many remain fragmented, siloed, or structurally dependent upon the same civilizational logics they seek to transform. Few are capable of engaging the multiple layers of the metacrisis simultaneously: the systemic, relational, ontological, developmental, and civilizational dimensions of our predicament.</p>
              <p className="text-muted-foreground leading-relaxed">At the deepest layer, we cannot respond to the metacrisis if education is reduced merely to schools, universities, or alternative institutions. Education, in its deepest sense, is the intergenerational process through which societies reproduce ways of perceiving, relating, knowing, valuing, and being across time.</p>
             <p className="text-muted-foreground leading-relaxed">  Human beings are always being educated through culture, media,
    technology, economics, architecture, religion, family systems,
    institutions, and the wider social worlds they inhabit.
  </p>

  <div>
    <p className="text-muted-foreground leading-relaxed">
      Civilization itself is an educational environment:
    </p>
    <ul className="mt-2 text-muted-foreground leading-relaxed list-disc pl-6 space-y-1">
      <li>Systems shape consciousness.</li>
      <li>Cultures shape perception.</li>
      <li>The media shapes desire.</li>
      <li>Institutions shape identity.</li>
      <li>Economies shape relationships.</li>
      <li>Technologies shape attention.</li>
    </ul>
  </div>

<p className="text-muted-foreground leading-relaxed">
    Civilization shapes the kinds of human beings we become. The question is not whether civilization is educating us, but what
    kinds of human beings it is cultivating.
  </p>
              <p className="text-muted-foreground leading-relaxed">We believe many of the dominant systems shaping modern life are reinforcing fragmentation, extraction, acceleration and disconnection from life. Consequently, fragmented systems cultivate fragmented human beings, who then recreate fragmented systems. This recursive cycle has become one of the central dynamics perpetuating the metacrisis itself.</p>
              <p className="text-muted-foreground leading-relaxed">Therefore, the challenge before us is not merely educational reform, but a profound expansion of what education itself means.</p>
              <p className="text-muted-foreground leading-relaxed">The task is not simply to create better schools, programs, or institutions — though this is indeed necessary — but to cultivate living developmental ecosystems: relational ecologies of communities, practices, workplaces, educational spaces, and cultures capable of supporting the long arc of human maturation required during a civilizational transition.</p>
              <p className="text-muted-foreground leading-relaxed">Over time, such developmental ecosystems may help give rise to new civilizational infrastructures: new forms of institutions, businesses, cultural spaces, educational architectures, and public life capable of sustaining wiser forms of human participation across generations.</p>
              <p className="text-muted-foreground leading-relaxed">The question before us is no longer only: <em>how do we improve education?</em></p>
              <p className="text-muted-foreground leading-relaxed">But more fundamentally: <em>what kinds of educational architectures, developmental cultures, and civilizational infrastructures must now emerge to cultivate the forms of wisdom, maturity, and human participation required for humanity to navigate this time between worlds?</em></p>
            </div>
          </div>
        </section>

        {/* 1. The Developmental Hypothesis */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow font-medium text-sm tracking-wide uppercase">The Developmental Hypothesis</span>
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

        {/* 2. Our Response */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-olive font-medium text-sm tracking-wide uppercase">The Response</span>
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

        {/* 3. The Civilizational Horizon */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-crimson font-medium text-sm tracking-wide uppercase">The Civilizational Horizon</span>
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