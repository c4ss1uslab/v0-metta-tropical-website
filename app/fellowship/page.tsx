import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import BuddhistDecorations from "@/components/buddhist-elements"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fellowship | Metta Tropical Collective",
  description: "Wisdom-Centered Leadership in a Time Between Worlds. An 8-month initiatory journey, rooted in Brazil.",
}

// ---------------------------------------------------------
// 1. GLOBAL TEXTURES, CARTOGRAPHY & ORGANIC ASSETS
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

function IndigenousWeave({ className }: { className?: string }) {
  return (
    <div className={`w-full h-8 opacity-40 ${className}`}>
      <svg width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <pattern id="weave-pattern" width="40" height="32" patternUnits="userSpaceOnUse">
            <path d="M20 0 L40 16 L20 32 L0 16 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M20 8 L30 16 L20 24 L10 16 Z" fill="currentColor" />
            <line x1="0" y1="16" x2="40" y2="16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#weave-pattern)" />
      </svg>
    </div>
  )
}

function IndigenousPattern() {
  return (
    <div className="w-full overflow-hidden opacity-30 my-8">
      <svg className="w-full h-8 text-[#8b0000]" preserveAspectRatio="none" viewBox="0 0 100 20">
        <polyline points="0,20 5,0 10,20 15,0 20,20 25,0 30,20 35,0 40,20 45,0 50,20 55,0 60,20 65,0 70,20 75,0 80,20 85,0 90,20 95,0 100,20" fill="none" stroke="currentColor" strokeWidth="1" />
        <polyline points="0,18 5,2 10,18 15,2 20,18 25,2 30,18 35,2 40,18 45,2 50,18 55,2 60,18 65,2 70,18 75,2 80,18 85,2 90,18 95,2 100,18" fill="none" stroke="#b8860b" strokeWidth="0.5" />
      </svg>
    </div>
  )
}

function TopographyLines() {
  return (
    <svg className="absolute -right-48 -bottom-48 w-[800px] h-[800px] opacity-10 text-[#4a5d3c] pointer-events-none" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
      <path d="M20,100 Q60,120 100,100 T180,100 M40,110 Q80,130 120,110 T200,110 M60,120 Q100,140 140,120 T220,120" />
      <path d="M10,50 Q50,70 90,50 T170,50" stroke="#b8860b" strokeDasharray="4 2" />
      <circle cx="100" cy="100" r="40" />
      <circle cx="100" cy="100" r="60" />
      <circle cx="100" cy="100" r="80" stroke="#8b0000" strokeDasharray="1 3" />
      <path d="M100,20 L100,180 M20,100 L180,100" strokeWidth="0.2" opacity="0.5" />
    </svg>
  )
}

// ---------------------------------------------------------
// 2. HERO SECTION
// ---------------------------------------------------------

export function HeroOptionWild() {
  return (
    <section className="relative min-h-[90vh] py-24 lg:py-32 bg-[#1a110a] text-[#d4c3b3] overflow-hidden flex items-center border-b-4 border-[#4a5d3c]">
      <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full opacity-30 mix-blend-luminosity mask-image-radial from-black to-transparent">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunflower%2012-rYeVrLQePMq900vde9yBvm9cwrm3Hj.jpeg"
          alt="Sunflowers"
          fill
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a110a] via-[#1a110a]/80 to-transparent" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 w-full">
        <div className="inline-block px-4 py-2 border border-[#b8860b]/30 bg-[#2c1d13]/50 backdrop-blur-md text-[#b8860b] text-xs tracking-[0.2em] uppercase mb-8 shadow-2xl rotate-[-1deg]">
          From January to August 2027
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] text-[#e8e0d5] drop-shadow-xl">
          Wisdom-<br/>Centered <br/>
          <span className="text-[#4a5d3c] italic">Leadership</span>
        </h1>
        <p className="mt-6 text-xl text-[#b8860b] font-serif italic max-w-2xl">
          "Who must we become, in this time between worlds, to steward civilization towards culture renewal and the flourishing of all life?"
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
          <p className="text-lg text-[#d4c3b3]/90 leading-relaxed max-w-xl font-light border-l-2 border-[#8b0000]/60 pl-6 bg-[#21160e]/40 p-4">
            An 8-month initiatory journey, rooted in Brazil, for emerging leaders*—postactivist thinkers, educators, artists, organizers, world-builders and change-makers longing to cultivate the perspectives, capacities and ways of relating to life that this moment is asking of us.
          </p>
          <Link href="#apply" className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#4a5d3c] text-[#1a110a] font-bold text-sm tracking-widest uppercase overflow-hidden shadow-[5px_5px_0px_0px_rgba(184,134,11,0.4)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all">
            <span className="relative z-10">Apply Now</span>
          </Link>
        </div>
        <BuddhistDecorations />
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 3. INVITATION & CONTEXT
// ---------------------------------------------------------

export function ContextSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#21160e] text-[#d4c3b3]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
        
        {/* The Invitation */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#b8860b] mb-8">1. The Invitation</h2>
          <div className="space-y-6 text-lg font-light leading-relaxed">
            <p>In times between worlds—when the predominant structures and stories of a civilization begin to decay before new ones have been built—certain individuals find themselves without a world. Neither belonging to the old nor fully inhabiting what comes next. They are living in the liminal space between collapse and emergence, between what is dying and what has not yet been born.</p>
            <p>For these people, this is a lived reality. The rupture of this moment arrives personally — as questions of meaning, vocation, belonging, and identity. They are being shape-shifted by the world itself, whether they chose it or not. They sense that the usual paths they inherited can no longer hold the complexities of our time. They feel called to contribute to what is emerging, yet recognize that responding to this time requires more than new ideas, strategies, or solutions. It requires transformation.</p>
            <div className="relative p-8 my-8 border-l-4 border-[#4a5d3c] bg-[#1a110a] shadow-xl">
              <p className="font-serif text-xl italic text-[#e8e0d5]">
                Not a career pivot. Not a personal growth program. <strong>An initiation: a genuine crossing from one way of being into another.</strong> A process of becoming capable of carrying greater responsibility, deeper relationships, and wiser participation in the world.
              </p>
            </div>
            <p>For most people, this transformation can rarely happen alone and within the confines of the very structures that produced the crisis. It requires a different kind of container—one strong enough to hold the magnitude of this transformation. A sanctuary!* Not a place to escape the world, but to encounter it more deeply. A place where we can remember what it feels like to meet ourselves and each other more truthfully. Where old ways of being can be composted, and new possibilities can slowly take root. Where grief can be honored, longing can be followed, responsibility can be matured, imagination can be liberated, and our devotion to a more beautiful world can be held with openness, care, and love.</p>
            <p className="text-[#b8860b] font-serif text-2xl mt-4">This fellowship is our attempt to build such a container.</p>
          </div>
        </div>

        <IndigenousPattern />

        {/* Why This Exists Now */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#4a5d3c] mb-8">2. Why This Exists, Now</h2>
          <div className="space-y-6 text-lg font-light leading-relaxed">
            <p>We are living through a rupture. The old story—of separation, of endless growth, and desacralization of the world—is reaching its limits. What comes next has not yet been born. We are in the between: a time of profound disorientation, and of equally profound possibility.</p>
            <p>Beneath the visible crises of our time — ecological collapse, social fragmentation, institutional breakdown, technological risk, meaning crisis — lies a deeper crisis known as the metacrisis*. A dysfunction in the underlying ways of perceiving, relating to, and understanding reality that modern civilization has been built upon. These patterns are not only embedded in our institutions and systems. They shape our perception itself, what we value, what we notice, how we relate, and what futures we are capable of imagining.</p>
            <p>As the crisis accelerates, our collective capacity to respond is fragmenting. Many cling to broken systems, hoping that incremental improvements will be enough. Others escape into techno-utopian fantasies, outsourcing the future to algorithms and billionaires. And others genuinely long to respond wisely, but feel a profound uncertainty about how to do so without reproducing the very logic that created the crisis.</p>
            <p>If the roots of the crisis are ontological, relational, developmental and spiritual, then responses focused solely at the level of symptoms or systems will remain insufficient.</p>
            <p className="text-xl text-[#e8e0d5] border-b border-[#8b0000] pb-4">The challenge before us is not only to redesign systems and institutions, but to transform the very ways of seeing, being, knowing and acting that gave rise to those systems in the first place. To become the kinds of humans this moment actually demands: capable of facing the depth of our crisis without collapsing into despair or grasping at simplistic solutions, of perceiving interdependence of all life, holding complexity, relating with maturity, and contributing to the conditions for life to flourish.</p>
            <p>This fellowship is a seed of that response. A transformation container in which the full scope of what it means to be human is taken seriously.</p>
          </div>
        </div>
        <IndigenousWeave />

        <IndigenousPattern />

        {/* Reclaiming Leadership */}
        <div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#b8860b] mb-8">3. Reclaiming Leadership</h2>
          <div className="space-y-6 text-lg font-light leading-relaxed">
            <p>We believe this moment is asking us to reimagine and reclaim what leadership means in a time of metacrisis.</p>
            <p>For too long, leadership has been associated with individual achievement, control, status, growth at all costs, and the capacity to shape the world according to one's will. Emerging from a worldview that often saw humans as separate from the rest of life, this paradigm has contributed to extraordinary technological and economic progress, while also reinforcing patterns of extraction, fragmentation, and disconnection from life that have caused enormous harm.</p>
            <p>More recently, leadership has evolved toward social change: challenging injustice, transforming systems, and creating solutions to our most urgent global challenges. These movements have expanded our collective sense of responsibility and deepened our understanding of what leadership can become.</p>
            <p className="font-serif text-2xl text-[#8b0000] italic">Yet the depth of the metacrisis is asking something deeper from us.</p>
            <p>The leadership paradigms of the past are no longer sufficient for the complexity, fragility, and interdependence of our time. Leadership in a time between worlds is not simply about changing the world, but transforming the ways we perceive, relate to, and participate within it.</p>
            <p>Across history, many of the people we now remember as transformative leaders did not influence culture only through strategies, ideas, or achievements. Their actions emerged from the depth of who they became. They embodied possibilities of being human that their cultures had not yet learned to imagine — grounded in deeper sources of wisdom, animated by a profound sense of responsibility, and devoted to the service of something beyond themselves.</p>
            <div className="p-6 bg-[#2c1d13] border border-[#b8860b] rounded-sm">
              <p className="text-[#e8e0d5]">Following this lineage, <strong>we are reclaiming leadership as a sacred responsibility toward the flourishing of all life</strong>: a lifelong practice of cultivating the wisdom, maturity, and capacities required to participate in cultural renewal and the emergence of more life-affirming ways of being together.</p>
            </div>
            <p>This understanding of leadership — rooted in the sacred, formed through community, guided by an understanding of complexity, and oriented toward service to all life — is at the heart of our work and pedagogy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 4. THE JOURNEY & CARTOGRAPHY (THE 5 STREAMS)
// ---------------------------------------------------------

export function StreamsOptionCartography() {
  const streams = [
    { 
      num: "I", 
      name: "The Sacred", 
      color: "#b8860b", 
      sub: "Remembering What is of Ultimate Meaning and Value", 
      desc: "What is intrinsic to reality? What is the ground we are standing on? We begin here because everything else depends on it. The sacred is not a realm above or outside of ordinary life — it is the depth dimension of reality itself, accessible through a quality of perception that modernity has largely taught us to close. The sacred is not simply one stream among others, it is the orienting horizon within which all other streams acquire significance, where we can organize around what we are in ultimate service of. To encounter the sacred is to begin to see the world as it actually is: radically interdependent, intrinsically valuable and alive with meaning. The failure to perceive the sacredness of life is one of the root causes of the metacrisis. We are dismissive and harmful towards what we cannot see as sacred. In this stream, we draw from philosophical traditions and wisdom traditions that have kept these inquiries and perceptions alive across history, while asking together what a living relationship with the sacred might look like in our own time and place.", 
      align: "ml-0" 
    },
    { 
      num: "II", 
      name: "Soul", 
      color: "#4a5d3c", 
      sub: "Remembering Who We Are", 
      desc: "Who are we? What is human being for? What does it mean to meet ourselves and each other more truthfully? Grounded in the sacred, we turn toward the depths of human experience, because the quality of our actions emerges from the quality of our being — and our being is always shaped in relationship. This stream explores the emotional, psychological, relational, and spiritual work required to mature into greater wholeness. A process of encountering ourselves beyond conditioning, healing fragmentation, cultivating relational depth, and accessing the totality of our being. We explore not only our inner worlds, but the spaces between us: how we listen, attune, communicate lovingly, create trust, build intimacy and participate in relationships where more of our humanity can become available. Without this stream, our attempts to transform the world can often reproduce the very patterns of separation we hope to heal.", 
      align: "ml-auto lg:mr-24" 
    },
    { 
      num: "III", 
      name: "Systems", 
      color: "#8b0000", 
      sub: "Remember Where We Are", 
      desc: "Where are we? How did we get here? What is actually happening? With a deeper sense of who we are, we turn toward the complexity of the systems we belong to. This stream cultivates the capacity to perceive patterns beneath events, trace the roots of the metacrisis, and understand the historical, cultural, economic, and ecological forces shaping our world. We explore how dominant worldviews, colonial histories, institutional structures, and economic systems have shaped our ways of living, while also encountering alternative possibilities for how humans might organize, relate, and participate in life. In this stream, we draw inspiration and guidance from systems thinking, complexity science, metacrisis research, decolonial thought, post-capitalist imaginaries, and emerging paradigms that help us perceive the waters we have been swimming in — and imagine new ways of being together. Because understanding the root causes of our crisis is the only way to respond to it at the appropriate depth.", 
      align: "mx-auto" 
    },
    { 
      num: "IV", 
      name: "Soil", 
      color: "#4a5d3c", 
      sub: "Remembering Our Place In The Web of Life", 
      desc: "What does the more-than-human world know that we have forgotten? Having mapped the human world, we return to the larger world we belong to. This stream tends our relationship with the living earth — drawing on indigenous and quilombola wisdom, on the intelligence of the land itself, on practices that reawaken our kinship with the rhythms of nature. This stream moves beyond the intellectual. We will be immersed in indigenous and quilombola communities across Brazil, not only hearing from their leaders but living alongside them, encountering what it actually feels like to inhabit a radically different relationship with the world, a form of counter colonial life, where the earth is not a resource but a relative and wise elder.", 
      align: "ml-12" 
    },
    { 
      num: "V", 
      name: "Society", 
      color: "#b8860b", 
      sub: "Responding to This Moment", 
      desc: "What does this moment ask of us — together? What is uniquely ours to offer? What is our responsibility at this time? The journey culminates here, where inner formation meets outer responsibility. Having been grounded in the sacred, formed in soul, clear in our understanding of systems, and rooted in the living world, we ask: how do we act? This stream brings us into direct contact with people and initiatives at the living edge of cultural and societal renewal — those who have integrated this work into their lives and given themselves fully in service of the flourishing of all life. Their presence and stories become an invitation to sense, from within, what is being asked of each of us during this time between worlds. It is where wisdom, power, and love learn to walk together towards building the wisdom-centered infrastructure required for cultural renewal.", 
      align: "ml-auto" 
    }
  ]

  return (
    <section className="relative py-32 bg-[#1a110a] text-[#d4c3b3] overflow-hidden border-t-2 border-b-2 border-[#4a5d3c]">
      <TopographyLines />
      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10 cartography-grid">
        <div className="mb-24 text-center bg-[#21160e]/80 p-8 border border-[#b8860b]/30">
          <h2 className="font-serif text-4xl lg:text-6xl text-[#e8e0d5]">The Journey</h2>
          <p className="mt-6 text-[#b8860b] text-lg max-w-3xl mx-auto">This fellowship is an eight-month initiatory journey through the ways of seeing, being, knowing, and acting that are most essential to help us respond to these challenging times.</p>
          <p className="mt-4 text-[#d4c3b3] max-w-3xl mx-auto">This journey takes place within a carefully designed Architecture of Transformation - the conditions we consider fundamental to transform the very ways human beings perceive, participate and relate with reality itself - such that wisdom, love, responsibility and life-affirming action can naturally emerge in response to the metacrisis. We focus on transformation, because our moment demands more than learning or development from us. Our times require us to fundamentally transform the ways we relate to all life in order to create a life-affirming civilization worth of inhabiting for our future generations. To hold the depth of such transformation, we are experimenting with an Architecture of Transformation that can offer the proper practices, collective inquiry, training, mentorship, immersive experiences and accompaniment to nurture the conditions in which transformation can take place. More than a learning experience, this is a process of formation: an invitation for the whole person — body, mind, heart, and soul — to be touched, challenged, and transformed through relationship with oneself, each other, the living world, and the sacred.</p>
          
          <div className="mt-12 overflow-x-auto border border-[#4a5d3c]">
            <table className="w-full text-left text-sm text-[#e8e0d5]">
              <thead className="bg-[#2c1d13] text-[#b8860b] font-serif uppercase tracking-wider">
                <tr>
                  <th className="p-4 border-b border-[#4a5d3c]">Architecture of Transformation</th>
                  <th className="p-4 border-b border-[#4a5d3c]">Function</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#4a5d3c]/50 bg-[#1a110a]">
                  <td className="p-4">Streams</td>
                  <td className="p-4 text-[#d4c3b3]">What transformation engages with</td>
                </tr>
                <tr className="border-b border-[#4a5d3c]/50 bg-[#21160e]">
                  <td className="p-4">Pedagogy</td>
                  <td className="p-4 text-[#d4c3b3]">How transformation happens</td>
                </tr>
                <tr className="border-b border-[#4a5d3c]/50 bg-[#1a110a]">
                  <td className="p-4">Structures</td>
                  <td className="p-4 text-[#d4c3b3]">What holds transformation over time</td>
                </tr>
                <tr className="bg-[#21160e]">
                  <td className="p-4">Orientation</td>
                  <td className="p-4 text-[#d4c3b3]">What transformation is in service of</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-sm italic text-[#b8860b]">Together, these dimensions form the foundation of what we are calling a <strong>Wisdom-Centered Educational Architecture</strong>: a living ecology of practices, relationships, developmental pathways, experiences and shared inquiry designed to transform the ways in which we relate with all life.</p>
        </div>

        <div className="text-center mb-16">
          <h3 className="font-serif text-3xl text-[#b8860b]">→ The Five Streams - what transformation engages with</h3>
          <p className="text-[#e8e0d5] mt-4 font-serif italic text-xl">Three wisdom questions serve as our orienting guides throughout our journey: Who are we? Where are we? What is being asked of us?</p>
          <p className="text-[#d4c3b3] mt-2 max-w-2xl mx-auto">These questions are living inquiries that deepen the more honestly we sit and engage with them. Over the eight months, we will hold these questions as we engage with <strong>the five streams of transformation</strong> (The Sacred, Soul, Systems, Soil and Society) that serve as portals into dimensions of reality we must deepen our relationship with in order to gain more insight into these questions.</p>
        </div>

        <div className="relative space-y-24">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block overflow-visible">
            <svg className="w-full h-full text-[#4a5d3c]" preserveAspectRatio="none" viewBox="0 0 10 1000">
              <path d="M5,0 Q-100,200 5,400 T5,800 T5,1000" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
            </svg>
          </div>

          {streams.map((stream) => (
            <div key={stream.num} className={`relative w-full lg:w-[50%] ${stream.align} group`}>
              <div className="absolute -inset-4 bg-[#2c1d13]/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative p-8 border border-[#b8860b]/40 bg-[#21160e]/90 backdrop-blur-sm shadow-[8px_8px_0px_0px_rgba(74,93,60,0.5)] z-10 hover:-translate-y-1 transition-transform">
                <span className="absolute -top-8 -left-8 text-7xl font-serif opacity-30 font-bold" style={{color: stream.color}}>
                  {stream.num}
                </span>
                <h3 className="font-serif text-2xl mb-2 text-[#e8e0d5] border-b border-[#4a5d3c] pb-4 uppercase tracking-wider">
                  {stream.name} <span className="block text-sm font-sans tracking-widest mt-2 normal-case" style={{color: stream.color}}>{stream.sub}</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#d4c3b3]">
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
// 5. PEDAGOGY SECTION
// ---------------------------------------------------------

export function PedagogySection() {
  return (
    <section className="py-24 lg:py-32 bg-[#2c1d13] text-[#d4c3b3] relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#4a5d3c] mb-6">→ The Pedagogy - how transformation happens</h2>
          <h3 className="font-serif text-2xl text-[#b8860b] mb-6">A Relational-Ontological Approach to Education - How we participate in reality shapes what reality becomes available to us</h3>
          <div className="space-y-4 font-light text-lg">
            <p>The <strong>streams of transformation</strong> represent the dimensions of reality and ideas we will engage with, but what ultimately differentiates our work is <em>how</em> we learn to relate with these realities and ideas. The metacrisis is not only a crisis of systems, but also a crisis of perception, participation, and relationship. Most modern educational systems train us to engage reality primarily through abstraction, analysis, and fragmentation. While these capacities matter, they are insufficient for navigating a world defined by complexity, interdependence, ecological breakdown, and existential uncertainty.</p>
            <p>To respond wisely to a complex world, we need to cultivate the capacity to participate and relate with reality across multiple depths of being as a way to increase our capacity for sense-making, understanding and insight.</p>
            <p>This is what we call <strong>Relational Ontological Pedagogy</strong>. It is a participatory approach to education that seeks not only to change <em>what</em> we think, but to transform the depth from which we perceive, relate, understand and act in life. Rather than merely teaching ideas about interdependence, embodiment, or systems thinking, we aim to cultivate the relational depth capacity required to sense and participate in these realities directly. We understand wisdom as emerging through increasingly integrated participation across six relational depths: conceptual, personal, relational, ontological, and transpersonal dimensions of life.</p>
          </div>
        </div>

        <div className="overflow-x-auto shadow-2xl mb-16 border-2 border-[#b8860b]/50">
          <table className="w-full text-left text-sm text-[#e8e0d5]">
            <thead className="bg-[#1a110a] text-[#b8860b] font-serif uppercase tracking-wider">
              <tr>
                <th className="p-4 border-b border-[#4a5d3c]">Relational Depth</th>
                <th className="p-4 border-b border-[#4a5d3c]">Mode of Participation</th>
                <th className="p-4 border-b border-[#4a5d3c]">What is Engaged</th>
                <th className="p-4 border-b border-[#4a5d3c]">Primary Capacity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#4a5d3c]/30 bg-[#21160e]">
                <td className="p-4 font-bold text-[#4a5d3c]">Conceptual</td>
                <td className="p-4">Thinking about reality</td>
                <td className="p-4">ideas, frameworks, analysis</td>
                <td className="p-4">cognition</td>
              </tr>
              <tr className="border-b border-[#4a5d3c]/30 bg-[#1a110a]">
                <td className="p-4 font-bold text-[#4a5d3c]">Personal</td>
                <td className="p-4">Narrating reality</td>
                <td className="p-4">identity, biography, meaning, stories</td>
                <td className="p-4">self-reflection</td>
              </tr>
              <tr className="border-b border-[#4a5d3c]/30 bg-[#21160e]">
                <td className="p-4 font-bold text-[#4a5d3c]">Interiority</td>
                <td className="p-4">Sensing reality</td>
                <td className="p-4">emotions, sensations, desires</td>
                <td className="p-4">presence</td>
              </tr>
              <tr className="border-b border-[#4a5d3c]/30 bg-[#1a110a]">
                <td className="p-4 font-bold text-[#4a5d3c]">Relational</td>
                <td className="p-4">Co-sensing reality</td>
                <td className="p-4">intimacy, resonance, mutual presence, coherence</td>
                <td className="p-4">attunement</td>
              </tr>
              <tr className="border-b border-[#4a5d3c]/30 bg-[#21160e]">
                <td className="p-4 font-bold text-[#4a5d3c]">Essential/Embodied</td>
                <td className="p-4">Being reality</td>
                <td className="p-4">awareness, essence, embodiment</td>
                <td className="p-4">grounded presence</td>
              </tr>
              <tr className="bg-[#1a110a]">
                <td className="p-4 font-bold text-[#4a5d3c]">Transpersonal</td>
                <td className="p-4">Sourcing reality</td>
                <td className="p-4">mystery, sacredness, living intelligence</td>
                <td className="p-4">surrender, moral obligation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm font-light leading-relaxed">
          <div>
            <p className="mb-4">These are dimensions of <strong>relational participation</strong> in life that can be cultivated over time. Most modern education develops only the conceptual and personal layer. Wisdom-centered education seeks to expand our capacity to move fluidly across all of them. As participation deepens, reality itself begins to appear differently. And this change in participation is the ground from which a new cultural paradigm can emerge.</p>
            <p className="mb-4">A person may intellectually understand ecological collapse at the conceptual level. At the personal level, they might be able to share stories about how they have been affected in their own lives by it. At the interior level, they may begin to feel grief, anxiety or despair about the state of ecological degradation. At the relational level, they may learn how to remain present with collective uncertainty without collapsing into reactivity or despair. At the ontological level, they may experience themselves interconnected with other individuals' experience, and are able to co-sense reality together. At the transpersonal level, action may begin to emerge from a deeper listening to what the earth and life itself is asking of them.</p>
            <p>This pedagogy is not only epistemological, concerned with knowledge, but ontological: concerned with who we become and how we influence society depending on the ways in which we participate in reality itself. At its core, this work is an attempt to respond to the crisis of separation that sits beneath the metacrisis. The more we expand and refine our capacity to relate with life from these relational depths, the more intimate we become with life itself, and the more care, discernment, and life-aligned forms of action can emerge.</p>
          </div>
          <div>
            <div className="bg-[#21160e] p-6 border border-[#8b0000] mb-8">
              <p className="mb-4">The kind of leaders needed during a time between worlds are not merely informed individuals, but human beings capable of integrating multiple ways of knowing and participating in reality at once: people who can understand systems, remain emotionally present with grief, navigate conflict relationally, perceive symbolic and cultural patterns, stay grounded in ethical responsibility, sense ecological interdependence, and remain open to mystery without collapsing into certainty, nihilism or simplistic solutions.</p>
              <p className="mb-4">At the heart of our pedagogy is an approach focused on creating the conditions where new ways of seeing, being, relating and acting can become embodied.</p>
              <p>The practices are not another component of the Fellowship. They are <strong>the foundation that allows the pedagogy to function.</strong> Because our pedagogy depends on a certain quality of relationship. Conceptual and Personal depth are the ones individuals are most used to; Interiority and Relational are the ones we will mostly focus on in terms of intentional practice, because most individuals are not properly trained in them and they are foundational for our pedagogy to emerge; and we hope that throughout the fellowship as we practice them, we will grow our sensitivity and capacity to engage with Ontological and Transpersonal depths.</p>
            </div>
            
            <div className="space-y-4">
              <p><strong>Modern education</strong> assumes that <em>more information</em> leads to <em>better understanding</em>, which leads to <em>better action.</em></p>
              <p><strong>Our pedagogy</strong> assumes that <em>transformed relationship/being</em> leads to <em>deeper participation</em>, which leads to <em>clearer perception</em>, which leads <em>wiser action</em>.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-[#1a110a] p-8 border-l-4 border-[#b8860b]">
          <h4 className="font-serif text-2xl text-[#b8860b] mb-4">Encountering the Streams</h4>
          <ul className="space-y-3 font-serif text-[#e8e0d5]">
            <li><strong>The Sacred asks →</strong> What becomes possible when life is experienced as sacred rather than valueless?</li>
            <li><strong>Soul asks →</strong> What becomes possible when we relate to ourselves and others from wholeness rather than fragmentation?</li>
            <li><strong>Systems asks →</strong> What becomes possible when we perceive relationships, patterns, and interdependence rather than isolated problems?</li>
            <li><strong>Soil asks →</strong> What becomes possible when the Earth is encountered as kin, alive and talking to us rather than resource?</li>
            <li><strong>Society asks →</strong> What becomes possible when action emerges from interbeing rather than separation?</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 6. STRUCTURE (ARCHITECTURE)
// ---------------------------------------------------------

export function StructureSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#1a110a] text-[#d4c3b3] relative border-t border-[#4a5d3c]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10 landscape-container">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#e8e0d5]">→ The Structure - what holds transformation</h2>
          <p className="mt-6 text-lg font-light max-w-3xl mx-auto">Human beings are shaped by the environments they inhabit, the relationships they participate in, the practices they repeat, and the stories they live inside. This fellowship has been designed to match the depth of what it asks of you. We understand this structure as a <strong>developmental ecology</strong>—a living architecture of ontologies, practices, training, rituals, initiations, collective inquiry, mentorship and coaching aiming to hold the depth of transformation this moment requires. It is intense, meaningful, and at times demanding, but we are here to walk alongside you through this process with great care and love.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="relative p-8 bg-[#21160e] border-t-4 border-[#4a5d3c] shadow-[10px_10px_0px_0px_rgba(74,93,60,0.3)] hover:-translate-y-2 transition-transform duration-500">
            <h3 className="font-serif text-2xl text-[#b8860b] mb-4">Three in-person immersive retreats</h3>
            <p className="text-sm leading-relaxed mb-6">
              Anchor the arc of the journey — one at the opening, one at the midpoint, one at the closing. These retreats are sanctuaries: intentional spaces where the noise and habitual patterns of everyday life can soften, allowing something deeper and more essential to emerge. They are where the cohort comes most fully alive together. Where we grieve, listen deeply, make art, hold paradoxes, undergo rites of passage, and tend the relational field we are building. For many participants, these retreats mark genuine thresholds in their lives.
            </p>
            <ul className="space-y-2 text-xs font-mono text-[#4a5d3c]">
              <li className="flex flex-col border-b border-[#2c1d13] pb-2">
                <span className="text-[#b8860b]">Opening Retreat:</span> 
                <span>January 9th–16th, 2027 — São Paulo</span>
              </li>
              <li className="flex flex-col border-b border-[#2c1d13] pb-2 mt-2">
                <span className="text-[#b8860b]">Mid Retreat:</span> 
                <span>June 13th–19th, 2027 — Salvador, Bahia ou Manaus, Amazonas</span>
              </li>
              <li className="flex flex-col border-b border-[#2c1d13] pb-2 mt-2">
                <span className="text-[#b8860b]">Closing Retreat:</span> 
                <span>Sep 11th-18th, 2027 — TBD (most likely in São Paulo)</span>
              </li>
            </ul>
          </div>

          <div className="relative p-8 bg-[#21160e] border-t-4 border-[#b8860b] shadow-[10px_10px_0px_0px_rgba(184,134,11,0.3)] hover:-translate-y-2 transition-transform duration-500">
            <h3 className="font-serif text-2xl text-[#e8e0d5] mb-4">Weekly Collective Inquiry Sessions (online)</h3>
            <p className="text-sm leading-relaxed mb-6">
              A space to encounter new ideas, expand our ways of seeing, and deepen the collective inquiry between retreats.
            </p>
            <div className="text-xs font-mono text-[#b8860b] border-b border-[#2c1d13] pb-2 mb-4">Tuesdays - from 7pm to 9:30pm</div>
            <p className="text-sm font-light">Facilitated by our core team, these sessions are where the cohort comes together each week to engage with the central inquiries of each stream: <strong>The Sacred, Soul, Systems, Soil, and Society.</strong> Through teachings, frameworks, readings, maps of reality, and collective dialogue, we explore the ideas and wisdom that help us make sense of ourselves, our world, and the transformations being asked of us. These sessions are not designed for intellectual understanding alone, but as spaces where ideas become alive. Where we engage with them through multiple relational depths—cognitively, emotionally, spiritually, relationally and transpersonally—in order for deeper sensemaking and understanding to emerge.</p>
          </div>

          <div className="relative p-8 bg-[#21160e] border-t-4 border-[#8b0000] shadow-[10px_10px_0px_0px_rgba(139,0,0,0.3)] hover:-translate-y-2 transition-transform duration-500">
            <h3 className="font-serif text-2xl text-[#e8e0d5] mb-4">Weekly Practice* Sessions (online)</h3>
            <p className="text-sm leading-relaxed mb-6">
              A space where ideas, values, and worldviews become embodied ways of being.
            </p>
            <div className="text-xs font-mono text-[#8b0000] border-b border-[#2c1d13] pb-2 mb-4">Thursdays - from 7:30pm to 9pm</div>
            <p className="text-sm font-light">Facilitated by our core team, these sessions are dedicated to cultivating the practices that allow transformation to move from understanding into embodiment. The ways we see, relate, and participate in life are shaped by what we repeatedly practice. For this reason, practice is at the center of our community. Throughout the Fellowship, we focus especially on <strong>contemplative and relational practices*</strong> — practices that cultivate our capacity for presence, awareness, attention, attunement, intimacy, and deeper contact with ourselves, each other, the world, and the sacred. These contemplative and relational capacities develop the human being as a more sensitive instrument of perception, which without them, certain dimensions of reality literally remain unavailable. These practices are the ground of our educational approach. They create the conditions that allow transformation to unfold: the quality of attention, presence, and attunement necessary for embodying new ways of seeing, being, knowing, and participating in life to become possible.</p>
          </div>

          <div className="relative p-8 bg-[#21160e] border-t-4 border-[#4a5d3c] shadow-[10px_10px_0px_0px_rgba(74,93,60,0.3)] hover:-translate-y-2 transition-transform duration-500">
            <h3 className="font-serif text-2xl text-[#e8e0d5] mb-4">Additional Architecture</h3>
            <div className="space-y-6 text-sm font-light">
              <div>
                <strong className="text-[#b8860b] block mb-1">Bi-monthly Wisdom Dialogues (online)</strong>
                <span className="text-xs font-mono text-[#4a5d3c] block mb-2">Wednesdays — 7:30pm to 9:30pm</span>
                <p>Encounters with the wisdom of global and local thinkers, leaders, artists, activists, practitioners, and elders at the living edge of culture. Twice a month, we invite guests connected to the streams and inquiries being explored to enter into deep dialogue with the cohort. These encounters are not traditional talks or webinars, but opportunities to learn from the lives, choices, practices, and lived wisdom of people who have spent decades devoted to systems change, transformation, spiritual practice, cultural renewal, and the flourishing of life. Before each dialogue, the cohort engages with the guest’s work — their writings, teachings, practices, and questions — allowing us to elevate the quality of shared inquiry with the guest. We are not just interested in their ideas, but the ways in which they perceive, relate, and participate in the world.</p>
              </div>
              <div className="border-t border-[#2c1d13] pt-4">
                <strong className="text-[#b8860b] block mb-1">Bi-monthly 1:1 Accompaniment</strong>
                <p>Individual support to help integrate your personal unfolding throughout the journey. Each participant is accompanied by a professional coach or therapist through 60–90 minute individual sessions. Participants may choose their own practitioner or connect with coaches and therapists we trust who understand the nature and depth of this work.</p>
              </div>
              <div className="border-t border-[#2c1d13] pt-4">
                <strong className="text-[#b8860b] block mb-1">Monthly Home Groups</strong>
                <p>Small circles of deep relationship and accompaniment. Groups of 3–4 participants and a mentor walk together throughout the eight months, creating a 90-minute monthly container for reflection, accountability, integration, and the kind of relational attunement that only emerges within more intimate spaces.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 relative p-8 bg-[#21160e] border-2 border-[#b8860b] border-dashed shadow-2xl">
            <h3 className="font-serif text-2xl text-[#b8860b] mb-4">Integration Weeks</h3>
            <p className="text-sm font-light mb-6">A pause to care for the soil of transformation. At the end of each Stream, we pause to tend to the conditions that make deep transformation possible: our relationships, our practices, our needs, our challenges, and the collective field we are growing together. At the end of each Stream Module (every six weeks), we pause the regular rhythm of the Fellowship to create space for integration. To listen deeply to what has been moving within each person and within the collective field.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-light">
               <div className="bg-[#1a110a] p-4 border-l-4 border-[#4a5d3c]">
                 <span className="text-[#4a5d3c] font-bold block mb-2">🌱 Tending the Soil</span>
                 <p>A space of relational care that supports the ongoing health of the relational field. Together, we practice appreciation, transparent communication, accountability, forgiveness, and the repair needed for deeper trust, harmony and belonging.</p>
               </div>
               <div className="bg-[#1a110a] p-4 border-l-4 border-[#b8860b]">
                 <span className="text-[#b8860b] font-bold block mb-2">🌱 Community Life</span>
                 <p>A space to learn how to support the conditions for a life well lived. Together, we explore and share resources around the everyday dimensions of life — physical health, technology use, finances, emotional wellbeing, family, work, and the practices that help us thrive as young adults.</p>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm font-light italic text-[#b8860b]">
          <p>A note about emergence: Since this is our first Fellowship, we will move through the journey with deep listening and responsiveness, continually sensing into the needs, desires, and emerging questions of the group. The rhythm, content, and structure may evolve throughout the process as we learn what best supports the transformation of everyone involved. Additional spaces for integration, practice, dialogue, or guest sessions may emerge depending on the life and needs of the cohort.</p>
        </div>

      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 7. WHO IS THIS FOR
// ---------------------------------------------------------

export function WhoIsThisForSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#2c1d13] text-[#d4c3b3]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[3/4] overflow-hidden shadow-[15px_15px_0px_0px_rgba(74,93,60,0.5)] border-4 border-[#1a110a] rotate-2 sticky top-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Psittacus%20cyanogaste%2C%20Prittacus%20accipitrinus%20and%20Prittacus%20vinaceus%20from%20History%20of%20the%20birds%20of%20Brazil%20%281854-1856%29%20by%20Jean-Th%C3%A9odore%20Descourtilz.-1nEOVb5alorN1rGUdtnwUX5xKwgR3a.jpg"
              alt="Brazilian parrots"
              fill
              className="object-cover sepia-[0.3] brightness-75 hover:sepia-0 hover:brightness-100 transition-all duration-1000"
            />
          </div>
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl text-[#b8860b] mb-6">Who This Is For</h2>
              <p className="text-lg font-light mb-6">Moments of civilizational transition require people prepared to hold the responsibility for stewarding our systems, communities, and institutions towards cultural renewal. We work with emerging leaders because we are seeking those already being called to step into such roles — those whose choices, relationships, life, and commitments can serve as a manifestation of the world to come.</p>
              <p className="text-lg font-light text-[#4a5d3c] font-bold">This fellowship is for Brazilian young adults between 18 and 29 sensing the limitation in current approaches to transformation and education, feeling called to a more meaningful life of service and longing to actively participate in the civilizational transition required during this time between the worlds.</p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl text-[#e8e0d5] mb-4 border-b border-[#4a5d3c] pb-2">This might be for you if:</h3>
              <ul className="space-y-4 text-sm font-light list-disc pl-5 text-[#d4c3b3] marker:text-[#b8860b]">
                <li>You feel the pain and beauty of the world deeply and are learning how to transform that sensitivity into wisdom and action.</li>
                <li>You sense that traditional paths of success no longer fully answer the questions your life is asking.</li>
                <li>You have grown skeptical of the underlying logic from which the apparent solutions to our crises have been emerging from.</li>
                <li>You are questioning inherited stories about progress, achievement, impact, and what it means to live a meaningful life.</li>
                <li>You feel called to contribute to cultural renewal and life-enhancing futures, even if you cannot yet fully name what that contribution looks like.</li>
                <li>You are exploring the relationship between inner transformation and systems change.</li>
                <li>You long for a community of people committed to deeper questions, honest conversations, and new ways of being together.</li>
                <li>You are longing for more support with your own development — emotionally, relationally, spiritually, and intellectually.</li>
                <li>You are trying to better understand who you are and how to best use your life during this time between worlds.</li>
                <li>You are ready to commit to practices, relationships, and a community that will challenge and support your becoming.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[#e8e0d5] mb-4 border-b border-[#4a5d3c] pb-2">You might identify as:</h3>
              <ul className="space-y-4 text-sm font-light list-disc pl-5 text-[#d4c3b3] marker:text-[#8b0000]">
                <li>An <strong>artist</strong> using music, media, storytelling, or culture to shape new narratives.</li>
                <li>A <strong>community builder</strong> cultivating spaces of belonging, trust, and collective transformation.</li>
                <li>An <strong>educator</strong> exploring how to create new pedagogies for the end of the world as we know it.</li>
                <li>A <strong>researcher or thinker</strong> trying to identify root causes rather than symptoms.</li>
                <li>A <strong>social innovator or entrepreneur</strong> experimenting with organizations, systems, and economies in service of life.</li>
                <li>A <strong>spiritual practitioner</strong> supporting emotional, relational, ecological, or spiritual transformation.</li>
                <li>A <strong>technologist</strong> questioning how emerging tools can serve human and planetary flourishing.</li>
                <li>A <strong>climate activist</strong> struggling to hold the weight and burden of increasing ecological collapse.</li>
                <li>A <strong>young person</strong> feeling the weight and disorientation to decide how to best serve the world.</li>
                <li>A <strong>recent graduate</strong> struggling to find meaningful work that is aligned with your values</li>
              </ul>
            </div>

            <div className="bg-[#1a110a] p-6 border-l-4 border-[#8b0000]">
              <p className="font-serif italic text-lg text-[#b8860b]">What matters most is not what your title or what you have done, but the sincerity of your inquiry, the depth of your commitment, and the longing to participate in such a community.</p>
              <p className="mt-4 text-sm">In case you are not fully certain if this fellowship is for you, if this is the right moment or any other doubts you might have, please feel free to schedule a conversation with us or send us an email.</p>
            </div>
            
            <div className="pt-6 border-t border-[#4a5d3c]">
              <h4 className="font-bold text-[#e8e0d5] mb-2">Not between 18–29 but feeling called to this work?</h4>
              <p className="text-sm font-light mb-4">We would still love to hear from you. While this first Fellowship is primarily designed for young adults, we are also weaving a broader intergenerational community of facilitators, mentors, partners, and collaborators who feel called to be part of this emerging ecosystem. Since this is our first cohort, we remain open to welcoming a small number of people outside this age range whose life moment, experience, and deeper questions strongly resonate with the essence of this journey. If you feel a genuine calling to be part of this work, please reach out.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 8. BEYOND & FINANCIAL MODEL
// ---------------------------------------------------------

export function BeyondSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#1a110a] text-[#d4c3b3] border-t border-[#4a5d3c]">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#e8e0d5] mb-6">Beyond the Fellowship</h2>
          <div className="space-y-6 text-lg font-light text-left">
            <p>We will be honest with you: eight months cannot hold the full magnitude of what genuine transformation for this time requires. We know this. And because of that, we do not see the fellowship as the final destination. We understand it as a form of threshold, an initiatory entry point into a community, a culture, a set of practices, and a shared commitment to navigating this time between worlds together.</p>
            <p>Those of us who are bringing this fellowship to life have been walking this path for decades without the kinds of containers we deeply longed for — searching for scattered pieces of wisdom across different traditions, communities, and transformational spaces, while often carrying the weight of this work in isolation. We built this because we needed it ourselves.</p>
            <p>Because we believe the wisdom, sense-making, transformation, coordination, and collective capacity required for this moment cannot emerge through a single program. It requires a multi-decade commitment to individual and collective transformation held within trustworthy communities of practice, where we continue accompanying, challenging, and supporting each other's becoming across time.</p>
            <p>Our aspiration is to cultivate a growing ecosystem of wisdom-centered leaders, communities, and initiatives that share enough ontological coherence, relational trust, and ethical orientation to coordinate toward life-enhancing futures. Over time, we hope this ecosystem contributes to the construction of new civilizational wisdom-centered infrastructures — education, culture, organizations, communities, and institutions — capable of supporting humanity’s movement toward greater wisdom, maturity, and responsibility to all life.</p>
            <p className="font-serif text-2xl text-[#b8860b] text-center my-10">After the fellowship, you do not simply join this ecosystem, but will help build it with us.</p>
          </div>
          
          <div className="bg-[#21160e] p-8 border border-[#4a5d3c] mt-10 text-left">
            <h3 className="font-serif text-3xl text-[#4a5d3c] mb-4">The Founding Cohort</h3>
            <p className="mb-4">This is the first time we are opening this door. Those who enter will not simply be participants, but active contributors to the culture, rituals, relationships, and ways of being that will shape this community. This is a unique opportunity not only to learn from something meaningful, but to help bring it into existence.</p>
            <p className="mb-4">Those accepted into this founding cohort carry a particular kind of responsibility. Every community is deeply shaped by those who arrive first. The patterns established at the beginning — the depth of relationship, quality of care, commitment to practice, and ways of being together — become the soil from which everything else grows. Your presence, questions, courage, aspirations, and quality of participation will shape what this community becomes for every person who walks through this door after you.</p>
            <p className="font-bold text-[#b8860b]">We are looking for those whose hearts pulse with precisely that kind of responsibility, and experience it not as a burden, but as the type of meaningful work they have been searching for.</p>
          </div>
        </div>

        <IndigenousPattern />

        <div className="mt-20">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#e8e0d5] mb-10 text-center">The Financial Model - A Gift-Based Approach</h2>
          <div className="grid md:grid-cols-2 gap-12 text-sm font-light">
            <div>
              <p className="mb-4">The Fellowship follows a different relationship with resources than most educational programs. This journey is being offered in the spirit of a Gift Economy.* It exists because a community of people believes this work matters and has chosen to offer their time, energy, wisdom, relationships, and financial resources so that a new generation of emerging leaders can receive this experience without money becoming the determining factor of who has access.</p>
              <p className="mb-4">Based on the depth of retreats, facilitation, mentorship, coaching, guest teachers, and support offered throughout the journey, the estimated cost of a Fellowship like this would normally be around R$35,000–50,000 per participant.</p>
              <p className="mb-6">Instead of asking participants to pay this amount, we are experimenting with a gift-based model inspired by the understanding that many of the most important things in life cannot be reduced to a transaction. Our invitation is not simply for you to receive this for free, but to enter the flow and connect with the spirit of gift and generosity: <em>How might your life allow this gift to continue?</em></p>
              
              <div className="bg-[#21160e] p-6 border-l-4 border-[#b8860b]">
                <h4 className="font-bold text-[#b8860b] mb-2">This Fellowship gift includes:</h4>
                <ul className="list-disc pl-5 space-y-1 text-[#e8e0d5]">
                  <li>all online sessions and facilitation</li>
                  <li>all in-person retreat experiences</li>
                  <li>accommodation and food during retreats</li>
                  <li>coaching/therapy and developmental support</li>
                  <li>all resources and materials for sessions</li>
                </ul>
                <p className="mt-4 italic text-xs">Participants are only responsible for transportation to and from the in-person retreats.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-[#4a5d3c] mb-2">Giving Forward</h3>
                <p className="mb-2">Throughout the journey, we will explore together what it means to receive a gift with gratitude, humility, and responsibility. This Fellowship exists because of those who chose to give before us. Our hope is to continue this cycle, where each generation receives from the generosity of others and contributes so that future generations may receive as well. Throughout the Fellowship and at the end of the journey, participants will have the opportunity to discern what form of giving feels meaningful and possible based on what they have received.</p>
                <p className="mb-2">Our hope with the program is to elicit each individual’s unique contribution to the world - in their immediate life, community, bioregion, etc. And part of this is to co-imagine what this community can look like and how it can serve the next cohorts and generations. How might each individual bring their unique contribution so that the next versions are possible and overflowing with their uniqueness and gifts.</p>
                <p>This contribution may be financial, supporting future cohorts to access this experience, but it may also take the form of skills, relationships, creativity, care, time, and commitment to keep supporting this community long-term.</p>
              </div>
              
              <div className="bg-[#2c1d13] p-6 border border-[#8b0000]">
                <h3 className="font-serif text-2xl text-[#8b0000] mb-2">Collective Resource Fund</h3>
                <p className="mb-4">Beyond making the Fellowship accessible, we are also experimenting with new ways of relating to resources as a community. Our hope is to create a <strong>Collective Resource Fund</strong> — a shared pool of resources that can support participants throughout the journey based on real needs and opportunities.</p>
                <p className="mb-2">These resources could support: transportation to retreats, complementary developmental experiences, seed funding for projects and initiatives, temporary financial support that help cover basic needs of participants.</p>
                <p className="mb-2">The distribution of these resources will happen through a transparent collective process involving participants and the team, inspired by practices of collective resource sharing and gift economies. This is all part of our practice to learn how resources can flow with greater trust, transparency, and care toward where they are most needed.</p>
                <p className="italic text-xs text-[#b8860b]">We are currently fundraising for this Collective Resource Fund and hope to have resources available throughout the Fellowship journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 9. FAQ & APPLY CTA
// ---------------------------------------------------------

export function FAQSection() {
  const faqs = [
    { q: "What is the time commitment per week?", a: "The expected commitment is approximately 8–10 hours per week during online periods, plus participation in the three immersive retreats throughout the eight-month journey. This includes weekly sessions, practices, readings, reflection, mentorship, and community engagement." },
    { q: "Is the Fellowship conducted in Portuguese?", a: "Yes. The Fellowship is primarily conducted in Portuguese and rooted in the Brazilian and Latin American context. Some guest teachers and resources may be in English. Translation and support will be offered whenever necessary." },
    { q: "Is financial support available?", a: "Yes. We are committed to making this Fellowship accessible beyond financial privilege. For this reason, the Fellowship is being offered through a gift-based model. Participants selected for the journey are not required to pay for the program, including retreats, accommodation, food, sessions, and developmental support. Participants are only responsible for transportation to and from the in-person retreats. We are also fundraising for a Collective Resource Fund to support additional needs that might emerge throughout the journey." },
    { q: "Can I participate from anywhere in the world?", a: "Yes. The online sessions can be accessed from anywhere. However, the three immersive retreats are an essential part of the Fellowship and require in-person participation in Brazil (São Paulo, Bahia, and Amazonas). All participants must be able to attend the three retreats to participate in the Fellowship." },
    { q: "Do I need previous experience and understanding of systems thinking, spiritual practice, metacrisis, wisdom etc?", a: "No. We are not looking for people who already have all the language, knowledge, or practices explored throughout the Fellowship. We are looking for people with deep curiosity, openness, commitment, humility, and a genuine longing to participate in the challenges of our time. The Fellowship brings together people with different backgrounds, experiences, and ways of knowing." },
    { q: "Is this Fellowship an accelerator or incubator for social impact projects?", a: "Not exactly. While we hope many meaningful initiatives, collaborations, and projects emerge from this community, the primary focus of the Fellowship is not project acceleration. Our focus is the formation of the human beings behind the work. We believe that responding wisely to the challenges of our time requires not only new ideas and solutions, but a deeper transformation in how we see, relate, collaborate, and participate in the world." },
    { q: "Why are you focusing on emerging leaders, and what kind of leadership is this Fellowship cultivating?", a: "We understand the complexity and baggage that the word leadership carries, and we are taking on the challenge of reclaiming leadership as a sacred responsibility toward the flourishing of life. We believe leadership emerges as a natural response to the needs and challenges around us — from the most intimate relationships to the most complex societal crises. Leadership, in this sense, is not defined by a position, title, or authority, but by our capacity to respond wisely to what life is asking of us. We focus on emerging leaders because this moment requires people willing to hold responsibility, influence culture, and participate in shaping the systems, communities, and institutions of the future. The greater the responsibility we carry, the deeper the transformation we must go through to hold that. This Fellowship is for emerging leaders — artists, educators, organizers, thinkers, and world-builders — who are sensing the depth of the crises we are facing and feel called to cultivate the capacities needed to serve cultural renewal and life-enhancing futures." },
    { q: "How will I know if this Fellowship is right for me?", a: "The best way to know is not only through intellectual understanding, but by noticing resonance — what feels alive, meaningful, and important as you encounter this work. We know this is a significant commitment, which is why we created a three-month Discernment Process before the Fellowship begins. This process is an opportunity for us to get to know each other — how we think, practice, relate, and understand transformation — so that both you and our team can sense whether this journey feels aligned. If you are unsure even whether to start the application, please don't hesitate to reach out. We would love to connect and answer any questions." },
    { q: "What if I cannot attend every online session?", a: "We understand that life is complex and unexpected situations happen. Sessions will be recorded for participants who occasionally cannot attend. At the same time, this Fellowship is a living community, not only a course. The depth of transformation depends on the presence, trust, and commitment we build together. For this reason, we ask participants to prioritize full participation in weekly sessions, practices, community spaces, and retreats. If you already know you have a recurring conflict with one of the main sessions, please reach out before applying so we can explore whether this is the right moment for you to participate." },
    { q: "What happens after the Fellowship?", a: "The Fellowship is not designed as a one-time experience, but as an entrance into a longer-term community and developmental ecosystem. After completing the eight-month journey, participants become part of the Metta Tropical community, with ongoing opportunities for practices, gatherings, mentorship, residencies, collaborations, and collective initiatives. Our hope is to cultivate a lifelong community of people supporting each other in becoming more capable of serving the flourishing of life." }
  ]

  return (
    <section className="py-24 bg-[#21160e] text-[#d4c3b3]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="font-serif text-4xl text-[#b8860b] mb-12 text-center">FAQ</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#4a5d3c] pb-6">
              <h3 className="font-bold text-[#e8e0d5] mb-2">{faq.q}</h3>
              <p className="text-sm font-light text-[#d4c3b3]/90">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DiscernmentSection() {
  return (
    <section id="apply" className="py-32 bg-[#1a110a] text-center relative overflow-hidden border-t-4 border-[#8b0000]">
      <TopographyLines />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-4xl md:text-5xl text-[#e8e0d5] mb-8">
          Apply: An Invitation Into Discernment
        </h2>
        <div className="text-left space-y-6 text-lg font-light mb-12 bg-[#2c1d13]/80 p-8 border border-[#b8860b]">
          <p>Applications are now open for the first cohort of the Metta Tropical Fellowship. We do not see the application process simply as a way for us to select participants. We see it as a mutual process of discernment — an opportunity for both of us to explore whether this is the right moment, the right community, and the right commitment for the next chapter of your life.</p>
          <p>We are not looking for perfect answers, impressive accomplishments, or people who already know exactly what they are here to do. We are looking for truth, honesty, and authenticity. We want to understand the questions you have been wrestling with, the experiences that have shaped you, the moment of life you find yourself in, and the deeper longings that may be seeking space to emerge.</p>
          <p className="text-[#b8860b] italic mt-6 border-t border-[#4a5d3c] pt-4">The discernment process is designed as a reflective process that already invites you to engage with the wisdom questions that guide our work - who are you? where are you? what is being asked of you at this moment?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#1a110a] p-4 border-l-2 border-[#4a5d3c]">
              <h4 className="font-bold text-[#e8e0d5]">1. Online Application</h4>
              <p className="text-xs text-[#b8860b] font-mono mb-2">From Aug 15th to Sept 27th</p>
              <p className="text-sm">Fill out our application where you will share more about your story, your questions, your relationship with this moment, and what is calling you toward this fellowship.</p>
            </div>
            <div className="bg-[#1a110a] p-4 border-l-2 border-[#4a5d3c]">
              <h4 className="font-bold text-[#e8e0d5]">2. Individual Conversation</h4>
              <p className="text-xs text-[#b8860b] font-mono mb-2">From Sept 14th to Oct 16th</p>
              <p className="text-sm">A conversation with our team to better understand who you are, explore resonance, clarify expectations, answer questions and sense whether this journey is aligned with what you are seeking.</p>
            </div>
            <div className="bg-[#1a110a] p-4 border-l-2 border-[#4a5d3c]">
              <h4 className="font-bold text-[#e8e0d5]">3. Community Engagement</h4>
              <p className="text-xs text-[#b8860b] font-mono mb-2">From Oct 5th to Nov 10th</p>
              <p className="text-sm">A month-long process of engaging with our community and other applicants through online sessions, practices, and conversations. This is an opportunity to experience our ways of learning, practicing, relating, and making sense of the world before making a deeper commitment to the fellowship.</p>
            </div>
            <div className="bg-[#1a110a] p-4 border-l-2 border-[#8b0000]">
              <h4 className="font-bold text-[#e8e0d5]">4. Final Selection</h4>
              <p className="text-sm mt-2">By <strong>Nov 15th</strong>, we will extend formal invitations to 15–20 participants to become part of the founding cohort of the Metta Tropical Fellowship.</p>
            </div>
          </div>
        </div>

        <a
          href="mailto:fellowship@mettatropical.org"
          className="inline-block px-12 py-5 bg-[#b8860b] text-[#1a110a] font-bold tracking-widest uppercase hover:bg-[#e8e0d5] transition-colors shadow-[8px_8px_0px_0px_rgba(74,93,60,0.8)]"
        >
          Begin Application
        </a>
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
        <ContextSection />
        <StreamsOptionCartography />
        <PedagogySection />
        <StructureSection />
        <WhoIsThisForSection />
        <BeyondSection />
        <FAQSection />
        <DiscernmentSection />

      </main>
      <Footer />
    </>
  )
}