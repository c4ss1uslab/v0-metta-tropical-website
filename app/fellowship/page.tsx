import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fellowship | Metta Tropical Collective",
  description: "A 6-month initiatory journey for those who sense that something fundamental must change in how we relate to all life. Applications open for September 2026.",
}

export function EarthGrain() {
  return (
    <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.15] mix-blend-overlay">
      <filter id="earth-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves={3}
          stitchTiles="stitch"
        />
        <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#earth-grain)" />
    </svg>
  )
}

export function HeroOptionA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden border-b border-olive/20 bg-background">
      {/* Background Indigenous Geometries Weave */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="indigenous-weave" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z M20 0 L20 40 M0 20 L40 20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#indigenous-weave)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 border border-yellow text-yellow text-xs tracking-widest uppercase bg-yellow/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-yellow rounded-full animate-pulse" />
            Applications Open — September 2026
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.15]">
            Wisdom-Centered Leadership <br />
            <span className="italic text-olive font-normal">in a Time Between Worlds</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            A 6-month journey inviting participants into an initiatory process of transforming ourselves to become the types of beings who can embody a way of relating to all life that this time is asking for.
          </p>
          <div className="pt-4">
            <Link href="#apply" className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-foreground text-background font-medium text-sm tracking-wide transition-transform hover:-translate-y-0.5">
              <span className="absolute inset-0 border border-foreground translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
              <span className="relative z-10">Begin the Journey</span>
            </Link>
          </div>
        </div>

        {/* Decorative Object Frame instead of a basic rectangle */}
        <div className="lg:col-span-5 relative aspect-square max-w-md mx-auto w-full p-4 border border-olive/30 bg-cream/30 backdrop-blur-sm rounded-[2rem] shadow-inner">
          <div className="absolute inset-0 m-4 border border-dashed border-olive/40 rounded-[1.7rem]" />
          <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden opacity-90 contrast-105 mix-blend-multiply">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunflower%2012-rYeVrLQePMq900vde9yBvm9cwrm3Hj.jpeg"
              alt="Sunflowers against a golden wall"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Spiritual Accent: Minimalist Mandala Ornament overlaying the frame corner */}
          <div className="absolute -bottom-4 -left-4 w-12 h-12 text-olive bg-background rounded-full p-2 border border-olive/30 shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <path d="M12 2v20M2 12h20M5 5l14 14M5 19L14 5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export function StreamsOptionB() {
  const streams = [
    { num: "1", name: "The Sacred", color: "text-yellow", border: "border-yellow/30", bg: "bg-yellow/5", sub: "The Nature of Reality — 4 weeks", desc: "We begin here because everything else depends on it. The sacred is not a separate realm above or outside of ordinary life. It is the depth dimension of reality itself." },
    { num: "2", name: "Soul", color: "text-cyan", border: "border-cyan/30", bg: "bg-cyan/5", sub: "The Inner Work — 6 weeks", desc: "Grounded in the sacred, we turn inward. This stream is a process of clarification: learning to see more clearly who we actually are beneath the accumulated layers of conditioning." },
    { num: "3", name: "Systems", color: "text-olive", border: "border-olive/30", bg: "bg-olive/5", sub: "The Complexity of Our Moment — 6 weeks", desc: "With a clearer sense of who we are, we turn to meet the world as it actually is. This stream develops the capacity to see clearly within complexity—tracing the roots of the metacrisis." },
    { num: "4", name: "Soil", color: "text-olive", border: "border-olive/30", bg: "bg-olive/5", sub: "Returning to the Living World — 6 weeks", desc: "We will be immersed in indigenous and quilombola communities, not only hearing from their leaders but living alongside them, encountering what it actually feels like to inhabit a radically different relationship with the world." },
    { num: "5", name: "Society", color: "text-crimson", border: "border-crimson/30", bg: "bg-crimson/5", sub: "From Formation to Action — 6 weeks", desc: "The journey culminates here—where inner formation meets outer responsibility. Having been grounded in the sacred, formed in soul, clear in understanding of systems, and rooted in the living world, we ask: how do we act?" }
  ]

  return (
    <section className="py-24 lg:py-32 bg-cream/40 border-y border-olive/10 relative">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <span className="text-olive font-medium text-xs tracking-widest uppercase">The Map of the Crucible</span>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
            Five Streams of Deep Transformation
          </h2>
          <div className="w-24 h-px bg-olive/30 my-4" />
          <p className="text-muted-foreground text-sm">
            Three wisdom questions serve as our orienting guides: <em>Who are we? Where are we? What is being asked of us?</em>
          </p>
        </div>

        <div className="relative border-l border-dashed border-olive/30 ml-4 md:ml-8 space-y-12">
          {streams.map((stream) => (
            <div key={stream.num} className="relative pl-8 md:pl-12 group">
              {/* Stitched Node Counter */}
              <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full ${stream.bg} border border-dashed border-olive/60 flex items-center justify-center text-xs font-serif font-bold text-foreground backdrop-blur-sm group-hover:scale-110 transition-transform`}>
                {stream.num}
              </div>
              
              <div className={`p-8 bg-background border ${stream.border} relative rounded-sm shadow-sm`}>
                {/* Visual Accent: Tiny Cross-Stitch Embroidery Symbol in top-right */}
                <div className="absolute top-4 right-4 text-olive/20 font-mono text-xs select-none">
                  ✧ ╳ ✧
                </div>
                
                <span className={`font-serif text-xs font-medium tracking-wider uppercase ${stream.color}`}>
                  {stream.sub}
                </span>
                <h3 className="font-serif text-2xl font-medium text-foreground mt-1 mb-4">
                  {stream.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
                  {stream.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FormatOptionC() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Abstract Concentric Circles (Zen/Buddhist Lotus motif inspiration) */}
      <div className="absolute -right-48 -bottom-48 w-96 h-96 opacity-[0.04] text-background pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="10" />
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="40" />
          <path d="M50 0v100M0 50h100" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-4">
            <span className="text-yellow font-medium text-xs tracking-widest uppercase">The Container</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-background leading-tight">
              The Structure Holding Transformation
            </h2>
            <p className="text-background/60 text-sm leading-relaxed">
              An ecosystemic lifecycle framework built to balance immersive physical presence in nature with integrated remote dialogue.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Retreat card */}
            <div className="p-6 bg-background/5 border border-background/10 rounded-sm hover:border-yellow/30 transition-colors">
              <div className="flex items-center gap-2 text-yellow mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <h3 className="font-serif text-xl font-medium">Three In-Person Retreats</h3>
              </div>
              <p className="text-background/70 text-xs leading-relaxed mb-6">
                Sanctuaries anchoring the arc of eight months. Where we grieve, listen deeply, hold paradoxes, and tend the relational field together.
              </p>
              <div className="space-y-3 pt-4 border-t border-background/10 text-xs text-background/80">
                <div className="flex justify-between"><span className="text-background/40">Opening:</span><span>Sept 12-18, 2026 — São Paulo</span></div>
                <div className="flex justify-between"><span className="text-background/40">Midpoint:</span><span>Jan 15-21, 2027 — Bahia</span></div>
                <div className="flex justify-between"><span className="text-background/40">Closing:</span><span>May 1-7, 2027 — São Paulo</span></div>
              </div>
            </div>

            {/* Online card */}
            <div className="p-6 bg-background/5 border border-background/10 rounded-sm hover:border-cyan/30 transition-colors">
              <div className="flex items-center gap-2 text-cyan mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.015 9.015 0 010 18.03" />
                </svg>
                <h3 className="font-serif text-xl font-medium">Weekly Synchronous Work</h3>
              </div>
              <p className="text-background/70 text-xs leading-relaxed mb-6">
                Two digital interactive blocks each week weaving ideas, systemic maps, collective therapeutic practices, and ancestral frameworks.
              </p>
              <div className="space-y-3 pt-4 border-t border-background/10 text-xs text-background/80">
                <div className="flex justify-between"><span>Tuesdays:</span><span className="text-background/60">7-9pm BRT — Exploration</span></div>
                <div className="flex justify-between"><span>Wednesdays:</span><span className="text-background/60">7-8:30pm BRT — Practice</span></div>
                <div className="flex justify-between"><span>Thursdays:</span><span className="text-background/60">7-9pm BRT — Guest Masters</span></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// page

export default function FellowshipPage() {
  return (
    <>
      <EarthGrain />
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <HeroOptionA />

        {/* What This Is */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-8">
              <div>
                <span className="text-olive font-medium text-sm tracking-wide uppercase">The Essence</span>
                <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                  An Initiation, Not a Program
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                In times between worlds—when the predominant structures of a civilization begin to decay before new ones have been built—certain individuals are called to a particular kind of soul journey. Not a career pivot. Not a personal growth program. <strong className="text-foreground">An initiation</strong>: a genuine crossing from one way of being into another.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                These are the ones who feel the rupture in society as a certain kind of rite of passage that leads them into a personal crisis of meaning, vocation, and identity. They are being shape-shifted by the world itself, whether they chose it or not. They sense that the usual paths no longer hold, that something in them must fundamentally change before they can offer what this moment actually needs.
              </p>

              <div className="p-8 bg-cream border-l-4 border-olive">
                <p className="font-serif text-xl text-foreground italic leading-relaxed">
                  This fellowship is our attempt to build that container. A sanctuary where the wild roar of grief, the depth of longing, and the wholehearted devotion to a more beautiful world can be met with seriousness, care and love.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Over six months, we will create a transformative journey for postactivist thinkers, artists, leaders, educators, and change-makers who cannot look away—and who have grown skeptical not just of specific solutions, but of the underlying logic from which those solutions emerge.
              </p>
            </div>
          </div>
        </section>

        {/* The Journey */}
        <StreamsOptionB />
 
         {/* Format */}
        <FormatOptionC />
        <section className="py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-olive font-medium text-sm tracking-wide uppercase">The Format</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                The Structure Holding Transformation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-background border-t-4 border-olive">
                <h3 className="font-serif text-xl font-medium text-foreground">Three In-Person Retreats</h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Sanctuaries anchoring the arc of eight months—opening, midpoint, and close. Where we grieve, listen deeply, make art, hold paradoxes, go through rites of passage, and tend the relational field together.
                </p>
                <div className="mt-6 space-y-2 text-sm">
                  <p className="text-foreground"><strong>Opening:</strong> Sept 12-18, 2026 — Sao Paulo</p>
                  <p className="text-foreground"><strong>Mid:</strong> Jan 15-21, 2027 — Cosmo Angola, Bahia</p>
                  <p className="text-foreground"><strong>Closing:</strong> May 1-7, 2027 — Sao Paulo</p>
                </div>
              </div>

              <div className="p-8 bg-background border-t-4 border-cyan">
                <h3 className="font-serif text-xl font-medium text-foreground">Weekly Online Sessions</h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Two content sessions per week weaving ideas, maps, practices, and collective inquiry. Guest teachers from the leading edge of culture bring their wisdom and presence.
                </p>
                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Tuesdays:</strong> 7-9pm BRT — Facilitated exploration</p>
                  <p><strong className="text-foreground">Thursdays:</strong> 7-9pm BRT — Guest teacher session</p>
                  <p><strong className="text-foreground">Wednesdays:</strong> 7-8:30pm BRT — Practice session</p>
                </div>
              </div>

              <div className="p-8 bg-background border-t-4 border-yellow">
                <h3 className="font-serif text-xl font-medium text-foreground">1:1 Coaching & Therapeutic Calls</h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Every participant is assigned a professional to ensure that your personal unfolding is tended and integrated throughout the journey. Bi-monthly sessions provide individual support.
                </p>
              </div>

              <div className="p-8 bg-background border-t-4 border-crimson">
                <h3 className="font-serif text-xl font-medium text-foreground">Soul Group Calls</h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Smaller intimate groups meeting monthly to deepen relationships, share struggles, and support each other through the transformative process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <span className="text-olive font-medium text-sm tracking-wide uppercase">Who This Is For</span>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                    Is This Journey For You?
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  This fellowship is for Brazilian young adults between 18 and 29 who sense that something fundamental is broken—and feel called to be part of what comes next. Not as passive observers, but as a new kind of leader: one who understands leadership not as power or position, but as a sacred act of responsibility toward all life.
                </p>

                <div className="space-y-4">
                  {[
                    "For those who feel the weight of this crisis as a personal calling—and are committed to understanding it at its roots.",
                    "For those skeptical of how our institutions have been responding, who sense that genuine solutions must question the very foundations.",
                    "For those willing to do the spiritual, emotional, and relational work required to become more whole.",
                    "For those longing to discover their unique soul calling—the particular gift only they can offer.",
                    "For those not looking for simplistic answers, but willing to stay with living questions and hold paradox.",
                    "For those who long to belong to a community devoted to cultural renewal and the flourishing of all life.",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-2 bg-olive rounded-full shrink-0" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-foreground font-medium italic">
                  This is for you if you are ready to be changed, not just informed.
                </p>
              </div>

              <div className="relative aspect-[3/4] rounded-sm overflow-hidden lg:sticky lg:top-24">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Psittacus%20cyanogaste%2C%20Prittacus%20accipitrinus%20and%20Prittacus%20vinaceus%20from%20History%20of%20the%20birds%20of%20Brazil%20%281854-1856%29%20by%20Jean-Th%C3%A9odore%20Descourtilz.-1nEOVb5alorN1rGUdtnwUX5xKwgR3a.jpg"
                  alt="Brazilian parrots - representing diversity and transformation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* More Than A Fellowship */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <span className="text-yellow font-medium text-sm tracking-wide uppercase">Beyond The Fellowship</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background">
              More Than a Fellowship
            </h2>
            
            <p className="mt-8 text-background/80 leading-relaxed">
              We will be honest with you: six months cannot hold the full magnitude of what that becoming requires. We know this. The fellowship is not the destination—it is the gate. An initiatory portal into our community, our culture, our practices, and our shared vision for navigating this time between worlds.
            </p>

            <p className="mt-6 text-background/80 leading-relaxed">
              After the fellowship, you become part of that architecture. Within this community, you will have access to leading-edge practices, training, mentors, elders, and initiatives that are part of a wider wisdom-centered ecosystem.
            </p>

            <div className="mt-12 p-8 bg-background/10 border border-background/20">
              <p className="font-serif text-xl text-yellow italic leading-relaxed">
                This is our founding cohort, the first time we are opening this door. Those who enter will not simply receive this culture. They will forge it.
              </p>
            </div>
          </div>
        </section>

        {/* Generations */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-olive font-medium text-sm tracking-wide uppercase">Intergenerational</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Called Together Across Generations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-background">
                <h3 className="font-serif text-xl font-medium text-foreground">Youth Leaders</h3>
                <p className="text-olive text-sm">Ages 15-18</p>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Those with fire in their hearts and longing to serve, arriving at the threshold of life before the world has had a chance to diminish them.
                </p>
              </div>

              <div className="p-6 bg-background">
                <h3 className="font-serif text-xl font-medium text-foreground">Young Adults</h3>
                <p className="text-cyan text-sm">Ages 18-35</p>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Moving toward service, influence, and systems-change, seeking the integrative worldviews and capacities to act with wisdom, efficacy and discernment.
                </p>
              </div>

              <div className="p-6 bg-background">
                <h3 className="font-serif text-xl font-medium text-foreground">Adult Leaders</h3>
                <p className="text-olive text-sm">Ages 35-60</p>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  In positions of influence, wrestling with how to shift systems from within, ready for more honest, relational, and life-affirming alternatives.
                </p>
              </div>

              <div className="p-6 bg-background">
                <h3 className="font-serif text-xl font-medium text-foreground">Wise Elders</h3>
                <p className="text-crimson text-sm">Ages 60+</p>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Those who have lived enough to know what truly matters—committed to intergenerational transmission, and to walking alongside younger ones with care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="apply" className="py-24 lg:py-32 bg-yellow">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              If something in you recognizes this call, you are who this fellowship is for.
            </h2>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Applications are now open for the September 2026 cohort. We are looking for those whose hearts pulse with precisely this kind of responsibility, and who recognize it as the most meaningful work they have been searching for.
            </p>
            <div className="mt-12">
              <a
                href="mailto:fellowship@mettatropical.org"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                Begin Your Application
              </a>
            </div>
            <p className="mt-6 text-foreground/60 text-sm">
              Questions? Reach out to fellowship@mettatropical.org
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
