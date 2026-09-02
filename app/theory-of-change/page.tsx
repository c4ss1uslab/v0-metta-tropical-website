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
  <section className="relative overflow-hidden py-24 text-background lg:py-32">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/C5m58hp3/cosmos-505503782.jpg')",
      }}
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-foreground/75" />

    {/* Content */}
    <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
      <span className="text-sm font-medium uppercase tracking-wide text-yellow">
        Theory of Change
      </span>

      <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-background md:text-5xl lg:text-6xl">
        Making Sanctuaries in a
        <br />
        Time Between Worlds
      </h1>
    </div>
  </section>

{/* Theory of Change — At a Glance */}
<section className="bg-cream py-14 lg:py-16">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">
    {/* Header */}
    <div className="mb-8">
      <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
        Theory of Change — At a Glance
      </h2>

      <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
        Our theory of change unfolds through five interconnected movements —
        from understanding the predicament we are in, to the educational
        response it requires, and the larger civilizational horizon we hope to
        serve.
      </p>
    </div>

    {/* Five-Part Theory of Change */}
    <div className="border-t border-border">
      {/* 1. The Predicament */}
      <a
        href="#predicament"
        className="group block border-b border-border py-5 transition-opacity hover:opacity-70"
      >
        <div className="flex items-start justify-between gap-5">
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm font-medium uppercase tracking-wide text-crimson">
                1. The Predicament
              </span>

              <span className="text-sm text-muted-foreground">—</span>

              <span className="text-sm italic text-muted-foreground">
                Where are we?
              </span>
            </div>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              The metacrisis is not a collection of isolated problems, but a
              deeper civilizational predicament rooted in the systems,
              relationships, and ways of understanding reality that shape
              modern life.
            </p>
          </div>

          <span className="mt-0.5 shrink-0 text-base text-muted-foreground/50 transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </div>
      </a>

      {/* 2. The Problem */}
      <a
        href="#problem"
        className="group block border-b border-border py-5 transition-opacity hover:opacity-70"
      >
        <div className="flex items-start justify-between gap-5">
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm font-medium uppercase tracking-wide text-olive">
                2. The Problem
              </span>

              <span className="text-sm text-muted-foreground">—</span>

              <span className="text-sm italic text-muted-foreground">
                What are we responding to?
              </span>
            </div>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Beneath it lies a crisis of human formation: we lack the
              orientation, aspiration, developmental pathways, communal
              capacities, and formative environments capable of preparing us
              to appropriately navigate and respond to these times.
            </p>
          </div>

          <span className="mt-0.5 shrink-0 text-base text-muted-foreground/50 transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </div>
      </a>

      {/* 3. The Developmental Hypothesis */}
      <a
        href="#developmental-hypothesis"
        className="group block border-b border-border py-5 transition-opacity hover:opacity-70"
      >
        <div className="flex items-start justify-between gap-5">
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm font-medium uppercase tracking-wide text-[#B88610]">
                3. The Developmental Hypothesis
              </span>

              <span className="text-sm text-muted-foreground">—</span>

              <span className="text-sm italic text-muted-foreground">
                What does this moment require?
              </span>
            </div>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Transformation of this depth requires long-term human and communal
              formation, bringing spiritual depth, relational maturity,
              systemic intelligence, developmental practice, decolonial
              thought, and ecological belonging into a coherent developmental
              path.
            </p>
          </div>

          <span className="mt-0.5 shrink-0 text-base text-muted-foreground/50 transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </div>
      </a>

      {/* 4. The Response */}
      <a
        href="#response"
        className="group block border-b border-border py-5 transition-opacity hover:opacity-70"
      >
        <div className="flex items-start justify-between gap-5">
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm font-medium uppercase tracking-wide text-cyan-800">
                4. The Response
              </span>

              <span className="text-sm text-muted-foreground">—</span>

              <span className="text-sm italic text-muted-foreground">
                What are we building?
              </span>
            </div>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              A wisdom-centered educational architecture, rooted in the Global
              South, bringing transformative education, transdisciplinary
              research, ecosystem weaving, and cultural imagination into a
              coherent developmental ecology serving a new generation of
              post-activist leaders and world-builders seeking to organize
              their lives toward meaningful participation in what comes next.
            </p>
          </div>

          <span className="mt-0.5 shrink-0 text-base text-muted-foreground/50 transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </div>
      </a>

      {/* 5. A Civilizational Horizon */}
      <a
        href="#civilizational-horizon"
        className="group block border-b border-border py-5 transition-opacity hover:opacity-70"
      >
        <div className="flex items-start justify-between gap-5">
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm font-medium uppercase tracking-wide text-[#B88610]">
                5. A Civilizational Horizon
              </span>

              <span className="text-sm text-muted-foreground">—</span>

              <span className="text-sm italic text-muted-foreground">
                What larger possibility are we serving?
              </span>
            </div>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We hope to contribute to the emergence of cultures, institutions
              and communities where wisdom becomes a central organizing
              function and collective life is increasingly oriented toward the
              flourishing of all life.
            </p>
          </div>

          <span className="mt-0.5 shrink-0 text-base text-muted-foreground/50 transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </div>
      </a>
    </div>

    {/* Navigation Hint */}
    <p className="mt-6 text-sm italic text-muted-foreground/60">
      Select any section to explore it in greater depth.
    </p>
  </div>
</section>

        {/* The Predicament */}
        <section
  id="predicament"
  className="scroll-mt-24 py-18 lg:py-18 bg-background"
>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-20">
              <span className="text-crimson font-medium text-sm tracking-wide uppercase">1. The Predicament</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Understanding The Metacrisis
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
                The <strong>metacrisis</strong> understands the interconnectedness of our global collective crises—ecological collapse, social fragmentation, institutional breakdown, technological risk, and meaning crisis—as symptoms of deeper, underlying conditions and patterns generating them. The metacrisis is a crisis at the “meta” layers of civilization, it's a dysfunction in the underlying ways of perceiving, relating, and understanding reality that modern civilization has been built upon. These patterns have become embedded in our institutions and systems - creating self-destructive feedback loops driving a set of new, unique and escalating existential and catastrophic risks³ - and also in our perception, shaping how reality becomes intelligible to us: what we value, how we relate, and what kinds of futures we are capable of imagining.
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
                • <em>beyond</em> ourselves, in the worldviews, ontologies and civilizational narratives that shape how reality becomes meaningful and intelligible to us.⁴
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                In the same way that a symptom points to an underlying disease that is causing it, the <em>polycrisis</em> is pointing to the <em>metacrisis</em> as the deeper civilizational patterns and dysfunctions driving our global challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand the metacrisis as unfolding across three interconnected layers₅:
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
          { 
            title: 'Crisis of Power', 
            desc: 'Increasing concentration of power within individuals and institutions serving their personal agendas.',
            references: [
              { name: 'Open Society Foundations', logo: '/logos/opensociety.png' },
              { name: 'Institute for Local Self-Reliance', logo: '/logos/ilsr.png' }
            ]
          },
          { 
            title: 'Crisis of Incentives', 
            desc: 'Systems optimizing for short-term, rivalrous, and extractive behaviors.',
            references: [
              { name: 'Center for Humane Technology', logo: '/logos/cht.png' }
            ]
          },
          { 
            title: 'Crisis of Trust', 
            desc: 'Fragmented information ecology undermining collective sensemaking and discernment of truth, breaking down coordination.',
            references: [
              { name: 'Sensemaking Networks', logo: '/logos/sensemaking.png' },
              { name: 'Wikidata Foundation', logo: '/logos/wikidata.png' }
            ]
          },
          { 
            title: 'Crisis of Complexity', 
            desc: 'Systematic optimization of simplistic metrics extracting from a complex living ecosystem and web of relationships.', 
            sup: '5',
            references: [
              { name: 'Santa Fe Institute', logo: '/logos/sfi.png' },
              { name: 'Stockholm Resilience Centre', logo: '/logos/stockholm.png' }
            ]
          }
        ].map((item, i) => {
          const verticalPos = (sweep - 38) / 24 * 100;
          const targetY = [12, 37, 62, 87][i];
          const isGlowing = animationState === 'looping' && inLayer2 && Math.abs(verticalPos - targetY) < 15;
          const hasReferences = item.references && item.references.length > 0;

          return (
            <div 
              key={i} 
              className={`group w-full p-4 rounded-xl border-l-4 border-crimson bg-cream transition-all duration-300
                ${isGlowing ? 'shadow-[0_0_15px_rgba(220,20,60,0.5)] scale-[1.03]' : 'shadow-sm hover:shadow-[0_0_15px_rgba(220,20,60,0.2)]'}`}
            >
              <details className="group/details w-full">
                <summary className={`list-none outline-none [&::-webkit-details-marker]:hidden ${hasReferences ? 'cursor-pointer' : 'cursor-default'}`}>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif font-medium text-foreground">
                      {item.title}{item.sup && <sub className="text-[9px] font-sans font-normal opacity-60 ml-0.5">{item.sup}</sub>}
                    </h4>

                    {/* Inline Expand Arrow */}
                    {hasReferences && (
                      <svg
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-crimson transition-transform duration-300 group-open/details:rotate-180 hover:text-crimson/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </div>

                  <p className="mt-1 text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </summary>

                {/* Hidden references block - expands downward when opened */}
                {hasReferences && (
                  <div className="mt-3 border-t border-crimson/20 pt-3">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-crimson/80">
                      Selected references
                    </p>

                    <ul className="space-y-2">
                      {item.references.map((ref) => (
                        <li
                          key={ref.name}
                          className="group/ref flex items-center gap-3 rounded-lg border border-gray-200/80 bg-white/70 p-2 transition-all duration-200 hover:border-crimson/40 hover:bg-white"
                        >
                          <div className="relative flex h-8 w-10 shrink-0 items-center justify-center overflow-hidden rounded bg-white">
                            <Image
                              src={ref.logo}
                              alt={`${ref.name} logo`}
                              fill
                              sizes="40px"
                              className="object-contain p-1 opacity-80 grayscale transition-all duration-300 group-hover/ref:opacity-100 group-hover/ref:grayscale-0"
                            />
                          </div>

                          <span className="text-xs font-medium leading-snug text-foreground">
                            {ref.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground/70">
                      These references indicate sources of learning and inspiration.
                    </p>
                  </div>
                )}
              </details>
            </div>
          )
        })}
      </div>
    </div>
    
    <div className="pt-6 border-t border-border text-center relative z-10 -mt-6">
      <p className="text-xs font-mono bg-foreground text-background py-2 px-3 rounded shadow-inner relative z-20">
        Rivalrous dynamics x Exponential tech = <span className="text-crimson font-semibold">Death of humanity</span><sub className="text-[8px] opacity-60 ml-0.5">4</sub>
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
        Foundational Dysfunctions<sub className="text-[9px] font-sans font-bold opacity-80 ml-0.5">1</sub>
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
          { 
            title: 'Crisis of Perception', 
            desc: 'Persistent delusions of separation, misapprehending nature and reality.',
            references: [
              { name: 'Schumacher College', logo: '/logos/schumacher.png' },
              { name: 'Center for Ecoliteracy', logo: '/logos/ecoliteracy.png' }
            ]
          },
          { 
            title: 'Crisis of Relationship', 
            desc: 'The prevalence of rilvarous dynamics and the loss of our intimate relationships with all life: ourselves, others, the world and the sacred.',
            references: [
              { name: 'Deep Ecology Institute', logo: '/logos/deepecology.png' }
            ]
          },
          { 
            title: 'Crisis of Value', 
            desc: 'The erosion of meaning, connection to the sacred and orientation towards the good, truth and beautiful.', 
            sup: '2',
            references: [
              { name: 'Perspectiva', logo: '/logos/perspectiva.png' },
              { name: 'The Meta-Crisis Institute', logo: '/logos/metacrisis.png' }
            ]
          },
          { 
            title: 'Crisis of Capacity', 
            desc: 'Individuals are not developing the emotional, relational, spiritual and intellectual maturity at the same rate that our technologies are increasing in power and consequence.',
            references: [
              { name: 'Consilience Project', logo: '/logos/consilience.png' },
              { name: 'Santa Fe Institute', logo: '/logos/sfi.png' }
            ]
          }
        ].map((item, i) => {
          const verticalPos = (sweep - 0) / 22 * 100;
          const targetY = [12, 37, 62, 87][i];
          const isGlowing = animationState === 'looping' && inLayer3 && Math.abs(verticalPos - targetY) < 15;
          const hasReferences = item.references && item.references.length > 0;

          return (
            <div 
              key={i} 
              className={`group w-full p-4 rounded-xl border-l-4 bg-cream transition-all duration-300
                ${isGlowing ? 'border-crimson shadow-[0_0_15px_rgba(220,20,60,0.5)] scale-[1.03]' : 'border-olive shadow-sm hover:shadow-[0_0_15px_rgba(107,142,35,0.2)]'}`}
            >
              <details className="group/details w-full">
                <summary className={`list-none outline-none [&::-webkit-details-marker]:hidden ${hasReferences ? 'cursor-pointer' : 'cursor-default'}`}>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif font-medium text-foreground">
                      {item.title}{item.sup && <sub className="text-[9px] font-sans font-normal opacity-60 ml-0.5">{item.sup}</sub>}
                    </h4>

                    {/* Inline Expand Arrow */}
                    {hasReferences && (
                      <svg
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-olive transition-transform duration-300 group-open/details:rotate-180 hover:text-olive/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </div>

                  <p className="mt-1 text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </summary>

                {/* Hidden references block - expands downward when opened */}
                {hasReferences && (
                  <div className="mt-3 border-t border-olive/20 pt-3">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-olive/80">
                      Selected references
                    </p>

                    <ul className="space-y-2">
                      {item.references.map((ref) => (
                        <li
                          key={ref.name}
                          className="group/ref flex items-center gap-3 rounded-lg border border-gray-200/80 bg-white/70 p-2 transition-all duration-200 hover:border-olive/40 hover:bg-white"
                        >
                          <div className="relative flex h-8 w-10 shrink-0 items-center justify-center overflow-hidden rounded bg-white">
                            <Image
                              src={ref.logo}
                              alt={`${ref.name} logo`}
                              fill
                              sizes="40px"
                              className="object-contain p-1 opacity-80 grayscale transition-all duration-300 group-hover/ref:opacity-100 group-hover/ref:grayscale-0"
                            />
                          </div>

                          <span className="text-xs font-medium leading-snug text-foreground">
                            {ref.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground/70">
                      These references indicate sources of learning and inspiration.
                    </p>
                  </div>
                )}
              </details>
            </div>
          )
        })}
      </div>
    </div>

    <div className="pt-6 border-t border-border text-center relative z-10 -mt-6">
      <p className="text-xs font-mono bg-foreground text-background py-2 px-3 rounded shadow-inner relative z-20">
        Global Intimacy Disorder x Exponential tech = <span className="text-orange-400 font-semibold">Death of our humanity</span><sub className="text-[8px] opacity-60 ml-0.5">3</sub>
      </p>
    </div>
  </div>

</div>

            <div className="mt-8 space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                So, if one were to summarize the dynamics underlying the metacrisis, as articulated by Stephen Reid and adapted by us, we could say:
              </p>
            </div>

<div className="relative my-8 w-full p-6 rounded-xl border border-border bg-card/30">
  {/* Horizontal Connecting Solid Line (Desktop) */}
  <div className="hidden md:block absolute top-1/2 left-8 right-8 h-[2px] -translate-y-1/2 bg-crimson/30 z-0 rounded-full" />

  <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
    {/* Box 1 */}
    <div className="relative flex flex-col items-center justify-center text-center">
      <div className="w-full py-2.5 px-4 rounded bg-foreground text-background text-l font-serif font-medium shadow-inner border border-border">
        Rivalrous dynamics x Exponential technology
      </div>
      {/* Desktop Operator Badge centered in the gap after Box 1 */}
      <div className="hidden md:flex absolute left-[calc(100%+0.75rem)] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-bold text-foreground shadow-sm">
          ×
        </span>
      </div>
    </div>

    {/* Box 2 */}
    <div className="relative flex flex-col items-center justify-center text-center">
      {/* Mobile Vertical Connector with X */}
      <div className="relative my-2 flex h-8 w-full items-center justify-center md:hidden">
        <div className="h-full w-[2px] bg-crimson/30" />
        <span className="absolute flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background font-mono text-[10px] font-bold text-foreground shadow-sm">
          ×
        </span>
      </div>
      <div className="w-full py-2.5 px-4 rounded bg-foreground text-background text-l font-serif font-medium shadow-inner border border-border">
        Systems that reward externalizing harm onto the commons and the future
      </div>
      {/* Desktop Operator Badge centered in the gap after Box 2 */}
      <div className="hidden md:flex absolute left-[calc(100%+0.75rem)] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-bold text-foreground shadow-sm">
          ×
        </span>
      </div>
    </div>

    {/* Box 3 */}
    <div className="relative flex flex-col items-center justify-center text-center">
      {/* Mobile Vertical Connector with X */}
      <div className="relative my-2 flex h-8 w-full items-center justify-center md:hidden">
        <div className="h-full w-[2px] bg-crimson/30" />
        <span className="absolute flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background font-mono text-[10px] font-bold text-foreground shadow-sm">
          ×
        </span>
      </div>
      <div className="w-full py-2.5 px-4 rounded bg-foreground text-background text-l font-serif font-medium shadow-inner border border-border">
        A collapse in our shared capacity to make sense of the world well enough to choose well within it
      </div>
      {/* Desktop Operator Badge centered in the gap after Box 3 */}
      <div className="hidden md:flex absolute left-[calc(100%+0.75rem)] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-bold text-foreground shadow-sm">
          =
        </span>
      </div>
    </div>

    {/* 4th Box - Result (White Background with Black Border) */}
    <div className="relative flex flex-col items-center justify-center text-center">
      {/* Mobile Vertical Connector with = */}
      <div className="relative my-2 flex h-8 w-full items-center justify-center md:hidden">
        <div className="h-full w-[2px] bg-crimson/30" />
        <span className="absolute flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background font-mono text-[10px] font-bold text-foreground shadow-sm">
          =
        </span>
      </div>
      <div className="w-full py-3 px-4 rounded-lg bg-white text-foreground text-l font-serif font-bold shadow-md border-2 border-black">
        The Metacrisis
      </div>
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
<section
  id="problem"
  className="scroll-mt-24 py-24 lg:py-32 bg-cream">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">
    {/* Header */}
    <div className="mb-12 text-center">
      <span className="text-sm font-medium uppercase tracking-wide text-olive">
        2. The Problem We&apos;re Tackling
      </span>

      <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
        A Crisis of Education, Formation, and Communal Development
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
              <span className="inline-flex items-center gap-3 whitespace-nowrap text-sm font-medium uppercase tracking-[0.12em] text-olive">
                1. The Orientation Gap
                <svg
  className="h-4 w-4 shrink-0 opacity-75 text-olive"
  viewBox="-3 -3 26 26"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.5"
  strokeLinecap="round"
>
  <g transform="rotate(22.5 10 10)">
    {/* Semi-transparent filled water channel */}
    <path
      d="M11 2C8 2 5.5 5.5 5.5 10C5.5 14.5 3 18 1 18 L9 18 C12 18 14.5 14.5 14.5 10 C14.5 5.5 17 2 19 2 Z"
      fill="currentColor"
      fillOpacity="0.12"
      stroke="none"
    />

    {/* Outer banks */}
    <path d="M11 2C8 2 5.5 5.5 5.5 10C5.5 14.5 3 18 1 18" />
    <path d="M19 2C17 2 14.5 5.5 14.5 10C14.5 14.5 12 18 9 18" />

    {/* Inner current dash */}
    <path
      d="M14 6C12.5 7.5 11 9 10 12"
      strokeWidth="1"
      strokeDasharray="1.5 2.5"
      opacity="0.8"
    />
  </g>
</svg>
              </span>

              <p className="mt-2 font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
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
              <span className="inline-flex items-center gap-3 whitespace-nowrap text-sm font-medium uppercase tracking-[0.12em] text-olive">
                2. The Aspiration Gap
                <svg className="h-4 w-4 shrink-0 opacity-75 text-olive" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
                <path d="M12 3V5M12 19V21M3 12H5M19 12H21M5.64 5.64L7.05 7.05M16.95 16.95L18.36 18.36M5.64 18.36L7.05 16.95M16.95 7.05L18.36 5.64" />
                </svg>
              </span>

              <p className="mt-2 font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
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
    <span className="inline-flex items-center gap-3 whitespace-nowrap text-sm font-medium uppercase tracking-[0.12em] text-olive">
      <span>3. The Formation Gap</span>

      <svg
        className="h-3.5 w-3.5 shrink-0 text-olive opacity-70"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
      >
        <path d="M16 2 L30 16 L16 30 L2 16 Z" strokeWidth="2.5" />
        <path d="M16 8 L24 16 L16 24 L8 16 Z" fill="currentColor" />
      </svg>
    </span>

              <p className="mt-2 font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
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
              <span className="inline-flex items-center gap-3 whitespace-nowrap text-sm font-medium uppercase tracking-[0.12em] text-olive">
                4. The Integration Gap
                <svg className="h-4 w-4 shrink-0 opacity-75 text-olive" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
  {/* Layered Outer Vault */}
  <path d="M2 18C2 9 6 3 10 2C14 3 18 9 18 18" />
  {/* Second Tier Arch */}
  <path d="M5 18C5 11 7.5 6 10 5C12.5 6 15 11 15 18" strokeWidth="1.25" fill="currentColor" fillOpacity="0.1" />
  {/* Third Tier Arch */}
  <path d="M8 18C8 13 9 9 10 8C11 9 12 13 12 18" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
  {/* Base Tie-Beam Line */}
  <line x1="2" y1="18" x2="18" y2="18" strokeWidth="1" opacity="0.5" />
</svg>
              </span>

              <p className="mt-2 font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
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
              <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium uppercase tracking-[0.12em] text-olive">
                5. The Communal Development Gap
                <svg className="h-3.5 w-7 shrink-0 opacity-75 text-olive" viewBox="0 0 16 12" fill="none" stroke="currentColor">
  <path d="M8 1 L14.5 6 L8 11 L1.5 6 Z" strokeWidth="1" /> 
  <path d="M8 3.5 L11.5 6 L8 8.5 L4.5 6 Z" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
  <circle cx="1.5" cy="6" r="0.75" fill="currentColor" />  
  <circle cx="14.5" cy="6" r="0.75" fill="currentColor" />
</svg>
              </span>

              <p className="mt-2 font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
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
            but bodies capable of perceiving, sensing and acting as one - without suppressing individuality, difference and uniqueness.
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
              <span className="inline-flex items-center gap-3 whitespace-nowrap text-sm font-medium uppercase tracking-[0.12em] text-olive">
                6. The Civilizational Gap
                <svg className="h-4 w-5 shrink-0 opacity-75 text-olive" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 2C10 6 9 10 12 14C15 10 14 6 12 2Z" fill="currentColor" fillOpacity="0.2" />
  <path d="M12 14C8 13 4 9 3 6C6 6 10 8 12 14Z" fill="currentColor" fillOpacity="0.15" />
  <path d="M12 14C16 13 20 9 21 6C18 6 14 8 12 14Z" fill="currentColor" fillOpacity="0.15" />
  <path d="M2 14C6 14 9 12.5 12 14C15 12.5 18 14 22 14" strokeWidth="1" />
</svg>
              </span>

              <p className="mt-2 font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
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
<section
  id="developmental-hypothesis"
  className="scroll-mt-24 bg-foreground py-24 text-background lg:py-32">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">
    {/* Header */}
    <div className="mb-12 text-center">
      <span className="text-sm font-medium uppercase tracking-wide text-yellow">
        3. The Developmental Hypothesis
      </span>

      <h2 className="mt-4 font-serif text-3xl font-medium text-background md:text-4xl lg:text-5xl">
        What This Moment Requires
      </h2>
    </div>

    {/* Quote */}
    <blockquote className="mt-8 border-l-4 border-yellow pl-6 text-left font-serif text-xl italic leading-relaxed text-background/80 md:text-2xl">
      &ldquo;The way we respond to the crisis is part of the crisis.&rdquo;
    </blockquote>

    <cite className="mt-4 block text-left text-sm font-medium not-italic text-background/60">
      — Bayo Akomolafe
    </cite>

    {/* Main Content */}
    <div className="mt-10 space-y-8 leading-relaxed text-background/90">
      <p>
        The metacrisis cannot be adequately responded to with new
        technologies, policies, or institutions alone. The underlying ways of
        seeing, being, knowing, and relating that continue to generate and
        reproduce the metacrisis cannot, by themselves, create the conditions
        for a life-enhancing civilization to emerge.
      </p>

      <p>
        Every crisis holds the potential to become a chrysalis. A fertile environment that holds the nutrients required for a process of deep transfiguration. We believe this moment calls for profound human and civilizational transformation
        in how we understand ourselves, reality, and our relationship with all
        life. </p>

        <p> Many of the dominant structures of modern civilization —
        educational systems, media environments, economies, technologies, and
        cultural norms — continually shape our desires, identities, ambitions,
        and behaviors in ways that reinforce fragmentation, extraction,
        hyper-individualism, disconnection from life, and an inability to fully
        perceive our interdependence with living systems.
      </p>

      {/* Civilizational Rite of Passage */}
      <div className="border-l-4 border-yellow bg-background/5 px-6 py-6 md:px-8 md:py-7">
        <p className="leading-relaxed text-background/90">
          We understand this moment as a{" "}
          <strong className="font-medium text-yellow">
            civilizational rite of passage
          </strong>
          : a threshold asking humanity to mature beyond many of the ways of
          being that modernity has normalized. This means cultivating forms of
          wisdom, relational maturity, ethical depth, strategic capacity,
          ontological grounding, and collective coordination capable of opening
          new possibilities for how we live, relate, and act together —
          reducing the existential risks before us while helping create the
          conditions for a radically more life-affirming civilization to emerge.
        </p>
      </div>

      <p>
        This level of civilizational maturity may be something unprecedented
        for us — not because these capacities themselves are new, but because
        of how broadly they are now needed, how deeply they must be integrated,
        and the scale of complexity and power they are being asked to hold.
      </p>

      <p>
        Wisdom traditions have cultivated compassion, ethical discernment,
        spiritual depth, and relational maturity for millennia, often through
        long-term pathways of practice, community, discipline, and devotion.
        Our time asks that such capacities are now brought into relationship
        with other forms of intelligence needed to navigate planetary
        complexity: systemic intelligence alongside spiritual depth;
        technological capability alongside ethical discernment; individual
        agency alongside relational maturity; strategic thinking alongside
        ecological belonging; and human flourishing understood as inseparable
        from the flourishing of the wider living world.
      </p>

      {/* Developmental Hypothesis */}
      <div className="rounded-r-xl border-l-4 border-yellow bg-background/5 px-6 py-7 md:px-8 md:py-8">
        <p className="leading-relaxed text-background/90">
          Our{" "}
          <strong className="font-medium text-yellow">
            developmental hypothesis
          </strong>{" "}
          is that capacities of this depth cannot be cultivated through
          information transfer, isolated workshops, or short-term
          transformative experiences alone. They require long-term formation:
          sustained practice and training, mentorship, relationship, community,
          meaningful responsibility, reflection, and opportunities to
          participate directly in the challenges of our time. Over years, these
          conditions can help cultivate the kinds of human beings and
          communities capable of navigating this moment with greater wisdom,
          maturity, and responsibility.
        </p>
      </div>

      <p>
        And this formation cannot remain individual. Our current challenges are
        too complex for a single person to make sense of it. We need to gain the
        capacity for collective discernment, shared attention, trust,
        distributed intelligence, and coordinated action that only emerge
        between people and through communities. Our developmental environments
        must be capable of cultivating not only wiser individuals, but
        communities that can learn, mature, discern, and act together in
        service of something larger than themselves.
      </p>

      <p>
        We call these environments{" "}
        <strong className="font-medium text-yellow">
          developmental ecologies
        </strong>
        : interconnected constellations of practices, relationships, training,
        communities, mentors, experiences, rituals, forms of inquiry, and
        pathways of responsibility capable of supporting the long arc of human
        and communal maturation.
      </p>

      <p>
        Over time, developmental ecologies can become{" "}
        <strong className="font-medium text-yellow">
          developmental cultures
        </strong>{" "}
        — ways of living in which wisdom, responsibility, relationship, and
        maturation become embedded in the norms and practices of collective
        life.
      </p>

      <p>
        We call this a developmental hypothesis because it remains an inquiry
        to be tested, challenged, and refined through practice. We do not
        presume to know exactly what forms of human and collective development
        will be adequate to the transformations ahead. But we see growing
        evidence that better solutions alone are insufficient when the people,
        relationships, and environments implementing them continue to reproduce
        the patterns they seek to transform.
      </p>
    </div>
  </div>
</section>

{/* 4. The Response */}
{/* 4. The Response */}
<section
  id="response"
  className="scroll-mt-24 bg-cream py-24 lg:py-32">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">
    {/* Header */}
    <div className="mb-12 text-center">
      <span className="text-sm font-medium uppercase tracking-wide text-cyan-800">
        4. The Response
      </span>

      <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
        Building Wisdom-Centered Educational Architectures
      </h2>
    </div>

    {/* Daniel Schmachtenberger Quote */}
    <blockquote className="mt-8 border-l-4 border-cyan-800 pl-6 font-serif text-lg italic leading-relaxed text-muted-foreground md:text-xl">
      &ldquo;That&apos;s what being an imaginal cell in the transition from
      caterpillar to butterfly really means. It means taking some empowered
      responsibility for being someone who recognizes that you can&apos;t just
      run the instruction manual that was given historically, and the new
      instruction manual doesn&apos;t exist yet. It&apos;s actually the time of
      people in that liminal phase to work on developing what are these new
      structures.&rdquo;
    </blockquote>

    <cite className="mt-4 block text-sm font-medium not-italic text-muted-foreground/70">
      — Daniel Schmachtenberger
    </cite>

    {/* Main Content */}
    <div className="mt-16 space-y-16">
      {/* A Lineage */}
      <div>
        <h3 className="mb-6 font-serif text-2xl font-medium text-foreground md:text-3xl">
          A Lineage
        </h3>

        <div className="space-y-6 text-muted-foreground">
          <p className="leading-relaxed">
            Historically, at moments of civilizational rupture, oppression and
            cultural transition, new forms of education and communities have
            emerged at the edges of society to help individuals navigate
            transition, protect different ways of being, and envision radically
            different futures. Monasteries, folk schools, mystery schools,
            Terreiros, quilombos and the Zapatistas created developmental
            environments capable of cultivating the ontologies, capacities,
            relationships, and cultural coherence required for their time, and
            not fully supported by the dominant world around them.
          </p>

          <p className="font-medium leading-relaxed text-foreground">
            We understand our work as part of this longer lineage of
            experimentation, and we are drawing inspiration from them to build
            something our moment highly needs and largely lacks.
          </p>
        </div>
      </div>

      {/* What We Are Building */}
      <div>
        <h3 className="mb-6 font-serif text-2xl font-medium text-foreground md:text-3xl">
          What We Are Building
        </h3>

        <div className="space-y-6 text-muted-foreground">
          <div className="rounded-r-xl border-l-4 border-[#D9A01B] bg-[#FFF9E9] px-6 py-6 md:px-8 md:py-7">
            <p className="font-serif text-lg font-medium leading-relaxed text-foreground md:text-xl">
              A wisdom-centered educational architecture and developmental
              ecosystem, rooted in the Global South, capable of supporting the
              long arc of human and communal transformation required during a
              time between worlds.
            </p>
          </div>

          <p className="leading-relaxed">
            We are initially focused on serving a new generation of emerging
            leaders — post-activists artists, educators, thinkers, organizers,
            researchers, change-makers and world-builders — who feel the crises
            of our time deeply in their souls, long to organize their lives
            around meaningful participation in what comes next, yet struggle to
            find communities and developmental pathways capable of holding the
            magnitude of their aspiration, grief, and devotion.
          </p>

          <p className="leading-relaxed">
            In this sense, our work is not only a response to the metacrisis,
            but also to the many young people who experience themselves as
            living without a world at this moment. Not fully belonging to the
            world that is ending, while not completely inhabiting the one trying
            to be born.
          </p>

          <p className="leading-relaxed">
            Rather than creating another isolated program, we are experimenting
            with a multi-decade developmental pathway capable of meeting the
            depth of transformation this moment requires. We are bringing
            together spiritual practice, systems understanding, relational
            formation, ecological belonging, decolonial thought, mentorship,
            community, and meaningful opportunities to contribute to
            life-enhancing futures into a coherent ecology of becoming.
          </p>

          <p className="leading-relaxed">
            In doing so, we seek to address deeper crises of perception,
            relationship, value, and capacity while bringing metacrisis
            awareness into generative relationships with wisdom traditions,
            contemporary developmental approaches, and the lived knowledge of
            historically marginalized communities in the Global South.
          </p>

          <p className="font-medium leading-relaxed text-foreground">
            Our work supports the construction of wisdom-centered educational
            architectures capable of shifting our ways of perceiving, being,
            knowing and doing, through four mutually reinforcing dimensions:
          </p>
        </div>
      </div>

      {/* Four Dimensions */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Transformative Educational Lab */}
        <article className="flex h-full flex-col border-t-4 border-olive bg-background p-7 shadow-sm">
          <h4 className="font-serif text-xl font-medium text-foreground md:text-2xl">
            Transformative Educational Lab
          </h4>

          <p className="mt-2 text-sm font-medium italic text-olive">
            Education for the end of the world as we know it
          </p>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            The living laboratory where our educational architecture is tested,
            refined, and deepened. Through retreats, residencies, courses,
            immersive programs, rituals and transformational practice —
            developed in-house and with fellow educators — we prototype the
            containers, cultures, and pedagogies capable of forming people and
            communities with the ontologies, aspirations, and capacities this
            moment asks for.
          </p>
        </article>

        {/* Research & Inquiry */}
        <article className="flex h-full flex-col border-t-4 border-cyan-800 bg-background p-7 shadow-sm">
          <h4 className="font-serif text-xl font-medium text-foreground md:text-2xl">
            Research &amp; Inquiry
          </h4>

          <p className="mt-2 text-sm font-medium italic text-cyan-800">
            Investigating the questions shaping our world
          </p>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Through transdisciplinary research, original essays, collaborative
            thinking, social cartographies, and curated collections, we
            investigate civilizational questions shaping our time: what brought
            us here, what is happening now, who we must become, and what is
            trying to emerge.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            These inquiries not only contribute to the wider cultural narrative
            building, sensemaking and collective coherence that can better
            orient wiser action in a time of uncertainty, but they directly
            inform the ideas, curriculum, and practices of our own educational
            architecture.
          </p>
        </article>

        {/* Ecosystem Integration */}
        <article className="flex h-full flex-col border-t-4 border-[#D9A01B] bg-background p-7 shadow-sm">
          <h4 className="font-serif text-xl font-medium text-foreground md:text-2xl">
            Ecosystem Integration
          </h4>

          <p className="mt-2 text-sm font-medium italic text-[#B88610]">
            Tending to the emerging fabric of a wisdom-centered culture
          </p>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            We map, integrate and connect initiatives, practices, communities,
            and institutions responding to different dimensions of the
            metacrisis. By making this ecosystem more visible, comprehensive
            and relational:
          </p>

          <ol className="mt-4 space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">1.</span> We help
              isolated communities, initiatives and institutions to find one
              another.
            </li>

            <li>
              <span className="font-medium text-foreground">2.</span> We connect
              members of our community with new pathways for their life and
              organizations doing meaningful work in the world.
            </li>

            <li>
              <span className="font-medium text-foreground">3.</span> We
              integrate multiple educational initiatives, practices and forms
              of formation into our educational architecture, supporting more
              robust and coherent developmental journeys.
            </li>
          </ol>
        </article>

        {/* Artistic Interventions */}
        <article className="flex h-full flex-col border-t-4 border-crimson bg-background p-7 shadow-sm">
          <h4 className="font-serif text-xl font-medium text-foreground md:text-2xl">
            Artistic Interventions
          </h4>

          <p className="mt-2 text-sm font-medium italic text-crimson">
            Expanding what our culture can perceive and imagine
          </p>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            We collaborate with artists and cultural practitioners to give form
            to emerging ways of seeing, being, and imagining life beyond the
            dominant paradigm. Through stories, images, music, rituals, and
            cultural artifacts, we seek to convey the depth of this crisis, the
            transformation it asks of us, and the horizons worth orienting
            towards, in ways that touch the heart and soul of our culture.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Making life-enhancing futures not only intellectually
            understandable, but emotionally and imaginatively available.
          </p>
        </article>
      </div>

      {/* Four Dimensions as a Single Ecology */}
      <div className="space-y-5">
        <p className="leading-relaxed text-muted-foreground">
          We see these four dimensions as mutually reinforcing parts of a
          single ecology. Research and inquiry deepen the hypothesis and ideas
          of our educational architecture and pedagogy; educational
          experimentation generates new insights, questions and practices;
          ecosystem relationships expand the teachers, mentors, training and
          pathways available to our community; and artistic work carries
          emerging ideas and imaginaries into the wider culture.
        </p>

        <p className="font-medium leading-relaxed text-foreground">
          Together, they form the foundation for an ongoing experiment in what
          wisdom-centered education and human formation might become.
        </p>
      </div>

      {/* Experimental by Design */}
      <div className="border-t border-border pt-12">
        <h3 className="mb-6 font-serif text-2xl font-medium text-foreground md:text-3xl">
          Experimental by Design
        </h3>

        <div className="space-y-6 text-muted-foreground">
          <p className="leading-relaxed">
            While our work emerges in response to a global metacrisis, it is
            intentionally contextual and place-based — rooted in Brazil and the
            Global South, and initially focused on the formation of younger
            generations in the region. Over time, we hope to deepen the
            intergenerational dimension of this work, bringing younger and older
            generations into closer relationships and restoring forms of
            intergenerational responsibility, mentorship, and care that our
            culture has forgotten.
          </p>

          <p className="leading-relaxed">
            We are fundamentally trying to cultivate some of the conditions from
            which a wiser civilization might emerge: developmental
            environments, pedagogies, relationships, communities, resources,
            and pathways of responsibility capable of forming people and
            communities who can perceive more deeply, make sense of complexity,
            coordinate across difference, and act together with greater wisdom.
          </p>

          <p className="leading-relaxed">
            People committed to helping reduce the existential risks before us,
            hospice what can no longer serve life, and participate in building
            the institutions, cultures, and infrastructures from which more
            life-affirming futures might take root.
          </p>

          <p className="leading-relaxed">
            Our work is therefore experimental by design, and we understand
            ourselves as one node within a much larger constellation of
            communities around the world engaged in related inquiries. We do
            not presume to know what forms of education will be adequate for
            the century ahead, nor what the future itself will demand of us.
          </p>

          <p className="font-medium leading-relaxed text-foreground">
            But this moment is calling for bold experimentation in education,
            community, governance, economics, and collective action —
            experiments that can help us learn our way toward what comes next.
            And this is our attempt to contribute to that.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 5. The Civilizational Horizon */}
<section
  id="civilizational-horizon"
  className="scroll-mt-24 bg-background py-24 lg:py-32">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">
    {/* Header */}
    <div className="mb-12 text-center">
      <span className="text-sm font-medium uppercase tracking-wide text-[#D9A01B]">
        5. A Civilizational Horizon
      </span>

      <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
        Cultivating Wisdom-Centered Civilizations in Service of Life
      </h2>
    </div>

    {/* Buckminster Fuller Quote */}
    <blockquote className="mt-8 border-l-4 border-[#D9A01B] pl-6 font-serif text-xl italic leading-relaxed text-muted-foreground md:text-2xl">
      &ldquo;You never change things by fighting the existing reality. To change
      something, build a new model that makes the existing model
      obsolete.&rdquo;
    </blockquote>

    <cite className="mt-4 block text-sm font-medium not-italic text-muted-foreground/70">
      — Buckminster Fuller
    </cite>

    {/* Opening */}
    <div className="mt-12 space-y-6 text-muted-foreground">
      <p className="leading-relaxed">
        Our larger aspiration extends beyond the formation of wiser individuals
        and communities. We are interested in what might become possible if
        wisdom cultivation itself became a more central function of culture,
        supported not only by spiritual, religious or educational spaces, but
        by a growing ecology of institutions capable of cultivating relational
        maturity, responsibility, and care for life across generations and
        species.
      </p>

      <p className="leading-relaxed">
        We use the language{" "}
        <strong className="font-medium text-foreground">
          wisdom-centered civilization
        </strong>{" "}
        not as a blueprint for what the future should become, nor as a single
        worldview to be imposed upon it, but as a horizon we are orienting
        toward. Forms of collective life in which growing human power is
        accompanied by growing wisdom; human flourishing is understood as
        inseparable from the flourishing of all life; and institutions take
        seriously their responsibility in shaping the desires, aspirations,
        attention, relationships, and ways of living of our culture.
      </p>

      <p className="leading-relaxed">
        Over time, we hope to contribute to the emergence of a wisdom-centered
        civilizational ecology of initiatives and communities across Brazil and
        beyond, experimenting with radically different ways of organizing
        collective life, including:
      </p>
    </div>

    {/* Civilizational Ecology */}
    <div className="mt-8 rounded-xl bg-cream px-6 py-7 md:px-8 md:py-8">
      <ul className="space-y-5 text-muted-foreground">
        <li className="flex items-start gap-4">
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#D9A01B]" />
          <p className="leading-relaxed">
            <strong className="font-medium text-foreground">
              Modern monasteries, wisdom schools, and intentional communities
            </strong>{" "}
            devoted to long-term human formation, rites of passage,
            intergenerational learning, and service to life.
          </p>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#D9A01B]" />
          <p className="leading-relaxed">
            <strong className="font-medium text-foreground">
              Autonomous and bioregional communities
            </strong>{" "}
            preserving ancestral ways of being while experimenting with
            collective ownership, commons, ecological stewardship, and new
            forms of governance.
          </p>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#D9A01B]" />
          <p className="leading-relaxed">
            <strong className="font-medium text-foreground">
              Transformational and developmental institutions
            </strong>{" "}
            cultivating new practices for shifts in consciousness, desire,
            relationship, and capacity in service of building different
            systems, not merely adapting people to the existing one.
          </p>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#D9A01B]" />
          <p className="leading-relaxed">
            <strong className="font-medium text-foreground">
              Research institutes, cultural laboratories, and artistic movements
            </strong>{" "}
            generating paradigm-shifting ideas, narratives, and imaginaries
            capable of expanding what societies perceive as possible.
          </p>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#D9A01B]" />
          <p className="leading-relaxed">
            <strong className="font-medium text-foreground">
              Post-capitalist economic experiments
            </strong>{" "}
            organized around sufficiency, reciprocity, gifting, regeneration,
            and shared flourishing rather than accumulation and shareholder
            return.
          </p>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#D9A01B]" />
          <p className="leading-relaxed">
            <strong className="font-medium text-foreground">
              New forms of governance and justice
            </strong>{" "}
            designed to distribute power, repair harm, and include future
            generations and the more-than-human world in collective
            decision-making.
          </p>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#D9A01B]" />
          <p className="leading-relaxed">
            <strong className="font-medium text-foreground">
              Life-affirming technologies and infrastructures
            </strong>{" "}
            designed to deepen attention, relationship, collective agency, and
            human flourishing rather than extraction, addiction, and control.
          </p>
        </li>
      </ul>
    </div>

    {/* Shared Orientation */}
    <div className="mt-12 space-y-6 text-muted-foreground">
      <p className="leading-relaxed">
        What connects these initiatives and communities is a different
        civilizational orientation, where they place the deepest questions of
        existence related to meaning, value, reality, and ultimate concern back
        at the heart of collective life.
      </p>

      {/* Existential Questions */}
      <div className="border-l-4 border-[#D9A01B] pl-6">
        <p className="font-serif text-lg italic leading-relaxed text-foreground md:text-xl">
          What is a human life for? What is worth committing a life to? What
          should we protect? What does it mean to live a meaningful life? What
          is the nature of reality we participate in? What does it mean to love?
        </p>
      </div>

      <p className="leading-relaxed">
        These questions are not left as optional concerns, but become central
        for how we organize power, resources, relationships, technology, and
        our participation in the living world.
      </p>

      <p className="leading-relaxed">
        We do not know what future civilization will look like, nor do we
        believe any single organization, tradition, or culture has the answer
        for our predicament. What we hope to help cultivate are the human,
        communal, cultural, and institutional conditions from which a mature,
        wise, and life-affirming form of civilization becomes possible.
      </p>
    </div>
  </div>
</section>

 {/* CTA */}
<section className="py-24 lg:py-32 bg-yellow">
  <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
    <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
      Towards Collective Coordination in Service of the Flourishing of All Life
    </h2>

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
