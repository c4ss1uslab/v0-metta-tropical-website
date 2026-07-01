import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fellowship | Metta Tropical Collective",
  description: "A 6-month initiatory journey for those who sense that something fundamental must change in how we relate to all life.",
}

// ---------------------------------------------------------
// 1. GLOBAL TEXTURES & ORGANIC ASSETS
// ---------------------------------------------------------

function SoilTexture() {
  return (
    <svg className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.25] mix-blend-multiply">
      <filter id="heavy-dirt">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves={4} stitchTiles="stitch" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.1   0 0 0 0 0.05   0 0 0 0 0  0 0 0 1.5 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#heavy-dirt)" />
    </svg>
  )
}

function OrganicRoots() {
  return (
    <svg className="absolute -left-32 top-0 w-96 h-[120%] opacity-10 text-[#d4c3b3] pointer-events-none drop-shadow-2xl" viewBox="0 0 100 400" fill="none" stroke="currentColor">
      <path d="M10,0 Q30,100 10,200 T40,400 M30,50 Q60,150 20,250 M5,120 Q25,220 5,320" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function TopographyLines() {
  return (
    <svg className="absolute -right-48 -bottom-48 w-[800px] h-[800px] opacity-5 text-[#d9a05b] pointer-events-none" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
      <path d="M20,100 Q60,120 100,100 T180,100 M40,110 Q80,130 120,110 T200,110 M60,120 Q100,140 140,120 T220,120" />
      <circle cx="100" cy="100" r="40" />
      <circle cx="100" cy="100" r="60" />
      <circle cx="100" cy="100" r="80" />
    </svg>
  )
}

// ---------------------------------------------------------
// 2. HERO VARIATIONS
// ---------------------------------------------------------

export function HeroOptionWild() {
  return (
    <section className="relative min-h-[90vh] py-24 lg:py-32 bg-[#1a110a] text-[#d4c3b3] overflow-hidden flex items-center">
      <OrganicRoots />
      
      {/* Raw Earth Mask Image */}
      <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full opacity-40 mix-blend-luminosity mask-image-radial from-black to-transparent">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunflower%2012-rYeVrLQePMq900vde9yBvm9cwrm3Hj.jpeg"
          alt="Sunflowers"
          fill
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a110a] via-[#1a110a]/80 to-transparent" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 w-full">
        <div className="inline-block px-4 py-2 border border-[#d9a05b]/30 bg-[#3e271a]/50 backdrop-blur-md text-[#d9a05b] text-xs tracking-[0.2em] uppercase mb-8 shadow-2xl rotate-[-1deg]">
          Applications Open — September 2026
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] text-[#e8e0d5] drop-shadow-xl">
          Wisdom-<br/>Centered <br/>
          <span className="text-[#7a8c5c] italic">Leadership</span>
        </h1>
        <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
          <p className="text-xl text-[#d4c3b3]/80 leading-relaxed max-w-xl font-light border-l border-[#d9a05b]/40 pl-6">
            A 6-month journey inviting participants into an initiatory process of transforming ourselves to become the types of beings who can embody a way of relating to all life that this time is asking for.
          </p>
          <Link href="#apply" className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#7a8c5c] text-[#1a110a] font-bold text-sm tracking-widest uppercase overflow-hidden shadow-[5px_5px_0px_0px_rgba(217,160,91,0.3)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all">
            <span className="relative z-10">Apply Now</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 3. THE JOURNEY (MAP/STREAMS) VARIATIONS
// ---------------------------------------------------------

export function StreamsOptionCartography() {
  const streams = [
    { num: "I", name: "The Sacred", color: "#d9a05b", sub: "The Nature of Reality", desc: "The depth dimension of reality itself—accessible through a certain quality of perception that modernity has largely taught us to close.", align: "ml-0" },
    { num: "II", name: "Soul", color: "#5b9bd9", sub: "The Inner Work", desc: "Grounded in the sacred, we turn inward. Learning to see more clearly who we actually are beneath accumulated layers.", align: "ml-auto lg:mr-24" },
    { num: "III", name: "Systems", color: "#7a8c5c", sub: "The Complexity", desc: "With a clearer sense of who we are, we turn to meet the world as it actually is. Tracing the roots of the metacrisis.", align: "mx-auto" },
    { num: "IV", name: "Soil", color: "#7a8c5c", sub: "Returning", desc: "Living alongside indigenous and quilombola communities, encountering what it feels like to inhabit a radically different relationship with the world.", align: "ml-12" },
    { num: "V", name: "Society", color: "#d95b5b", sub: "Formation to Action", desc: "The journey culminates here. Having been grounded in the sacred, formed in soul, clear in systems, and rooted in soil, how do we act?", align: "ml-auto" }
  ]

  return (
    <section className="relative py-32 bg-[#21160e] text-[#d4c3b3] overflow-hidden border-t-2 border-b-2 border-[#3e271a]">
      <TopographyLines />
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center">
          <h2 className="font-serif text-4xl lg:text-6xl text-[#e8e0d5]">A Cartography of Transformation</h2>
          <p className="mt-6 text-[#d9a05b] uppercase tracking-[0.2em] text-sm">Who are we? Where are we? What is asked of us?</p>
        </div>

        <div className="relative space-y-24">
          {/* Abstract Winding Trail SVG connecting the nodes */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block overflow-visible">
            <svg className="w-full h-full text-[#3e271a]" preserveAspectRatio="none" viewBox="0 0 10 1000">
              <path d="M5,0 Q-50,200 5,400 T5,800 T5,1000" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
            </svg>
          </div>

          {streams.map((stream) => (
            <div key={stream.num} className={`relative w-full lg:w-[45%] ${stream.align} group`}>
              <div className="absolute -inset-4 bg-[#3e271a]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative p-8 border border-[#3e271a] bg-[#1a110a]/80 backdrop-blur-sm shadow-2xl z-10">
                <span className="absolute -top-6 -left-6 text-5xl font-serif opacity-20 font-bold" style={{color: stream.color}}>
                  {stream.num}
                </span>
                <h3 className="font-serif text-2xl mb-2 text-[#e8e0d5] border-b border-[#3e271a] pb-4">
                  {stream.name} <span className="block text-xs font-sans tracking-widest mt-2" style={{color: stream.color}}>{stream.sub}</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#d4c3b3]/80">
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

// ---------------------------------------------------------
// 4. ESSENCE & FORMAT SECTIONS
// ---------------------------------------------------------

export function EssenceSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#2c1d13] text-[#d4c3b3]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
        <h2 className="font-serif text-4xl lg:text-5xl text-[#e8e0d5] mb-12">
          An Initiation, <br/><span className="text-[#7a8c5c] italic">Not a Program</span>
        </h2>
        
        <div className="space-y-8 text-lg font-light leading-relaxed">
          <p>
            In times between worlds—when the predominant structures of a civilization begin to decay before new ones have been built—certain individuals are called to a particular kind of soul journey.
          </p>
          
          <div className="relative p-8 my-12 border-l-4 border-[#d9a05b] bg-[#1a110a] shadow-[10px_10px_30px_rgba(0,0,0,0.5)] transform -rotate-1">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d9a05b" strokeWidth="1"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20M5 5l14 14"/></svg>
             </div>
            <p className="font-serif text-xl italic text-[#e8e0d5] relative z-10">
              This fellowship is our attempt to build that container. A sanctuary where the wild roar of grief, the depth of longing, and the wholehearted devotion to a more beautiful world can be met with seriousness, care and love.
            </p>
          </div>
          
          <p>
            These are the ones who feel the rupture in society as a certain kind of rite of passage that leads them into a personal crisis of meaning, vocation, and identity. Over six months, we will create a transformative journey for postactivist thinkers, artists, leaders, educators, and change-makers who cannot look away.
          </p>
        </div>
      </div>
    </section>
  )
}

export function EarthyFormatSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#1a110a] text-[#d4c3b3] relative border-t border-[#3e271a]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#e8e0d5]">The Architecture of the Journey</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="relative p-8 bg-[#2c1d13] border-t-4 border-[#7a8c5c] shadow-2xl hover:-translate-y-2 transition-transform duration-500">
            <h3 className="font-serif text-2xl text-[#e8e0d5] mb-4">Three Sanctuaries (In-Person)</h3>
            <p className="text-sm leading-relaxed opacity-80 mb-6">
              Where we grieve, listen deeply, make art, hold paradoxes, go through rites of passage, and tend the relational field together.
            </p>
            <ul className="space-y-2 text-xs font-mono text-[#7a8c5c]">
              <li className="flex justify-between border-b border-[#3e271a] pb-1"><span>OPENING</span> <span>Sept '26 — SP</span></li>
              <li className="flex justify-between border-b border-[#3e271a] pb-1"><span>MIDPOINT</span> <span>Jan '27 — Bahia</span></li>
              <li className="flex justify-between border-b border-[#3e271a] pb-1"><span>CLOSING</span> <span>May '27 — SP</span></li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="relative p-8 bg-[#2c1d13] border-t-4 border-[#d9a05b] shadow-2xl hover:-translate-y-2 transition-transform duration-500">
            <h3 className="font-serif text-2xl text-[#e8e0d5] mb-4">The Digital Hearth (Weekly)</h3>
            <p className="text-sm leading-relaxed opacity-80 mb-6">
              Two sessions per week weaving ideas, systemic maps, practices, and collective inquiry.
            </p>
            <ul className="space-y-2 text-xs font-mono text-[#d9a05b]">
              <li className="flex justify-between border-b border-[#3e271a] pb-1"><span>TUESDAYS</span> <span>Facilitation</span></li>
              <li className="flex justify-between border-b border-[#3e271a] pb-1"><span>WEDNESDAYS</span> <span>Practice</span></li>
              <li className="flex justify-between border-b border-[#3e271a] pb-1"><span>THURSDAYS</span> <span>Guest Masters</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// MAIN PAGE ASSEMBLY
// ---------------------------------------------------------

export default function FellowshipPage() {
  return (
    <>
      <SoilTexture />
      <Navigation />
      <main className="min-h-screen bg-[#1a110a]">
        
        <HeroOptionWild />
        
        <EssenceSection />

        <StreamsOptionCartography />

        <EarthyFormatSection />

        {/* Parrots / Who is this for Section */}
        <section className="py-24 lg:py-32 bg-[#2c1d13] text-[#d4c3b3]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[3/4] overflow-hidden shadow-2xl border-4 border-[#1a110a] rotate-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Psittacus%20cyanogaste%2C%20Prittacus%20accipitrinus%20and%20Prittacus%20vinaceus%20from%20History%20of%20the%20birds%20of%20Brazil%20%281854-1856%29%20by%20Jean-Th%C3%A9odore%20Descourtilz.-1nEOVb5alorN1rGUdtnwUX5xKwgR3a.jpg"
                  alt="Brazilian parrots"
                  fill
                  className="object-cover sepia-[0.3] brightness-75 hover:sepia-0 hover:brightness-100 transition-all duration-1000"
                />
              </div>
              <div className="space-y-8">
                <h2 className="font-serif text-4xl lg:text-5xl text-[#e8e0d5]">Is This For You?</h2>
                <div className="space-y-6 text-sm leading-relaxed border-l-2 border-[#7a8c5c] pl-6">
                  <p>For Brazilian young adults (18-29) who sense that something fundamental is broken—and feel called to be part of what comes next.</p>
                  <p>For those who feel the weight of this crisis as a personal calling—and are committed to understanding it at its roots.</p>
                  <p>For those willing to do the spiritual, emotional, and relational work required to become more whole.</p>
                </div>
                <p className="text-xl font-serif italic text-[#d9a05b] pt-8">
                  This is for you if you are ready to be changed, not just informed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Footer CTA */}
        <section id="apply" className="py-32 bg-[#1a110a] text-center relative overflow-hidden">
          <TopographyLines />
          <div className="relative z-10 mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl md:text-5xl text-[#e8e0d5] mb-8">
              If something in you recognizes this call, you are who this fellowship is for.
            </h2>
            <a
              href="mailto:fellowship@mettatropical.org"
              className="inline-block px-12 py-5 bg-[#d9a05b] text-[#1a110a] font-bold tracking-widest uppercase hover:bg-[#e8e0d5] transition-colors shadow-2xl"
            >
              Begin Application
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}