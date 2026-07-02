import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Metta Tropical Collective",
  description: "An experimental, place-based community of transformation, inquiry and practice, calling together postactivist educators, thinkers, artists, spiritual practitioners and leaders who refuse to look away.",
}

export default function AboutPage() {
  return (
    <>
      {/* 1. Ensure your Navigation component is either fixed or absolute with a transparent/semi-transparent background */}
      <Navigation />
      
      {/* 2. Removed the top padding entirely here so the section starts at the absolute top of the viewport */}
      <main className="w-full">
        {/* 3. Added pt-32 to this section instead, giving the text breathing room while letting the background image fill the top */}
        <section className="relative min-h-[75vh] flex items-center bg-cream overflow-visible pt-32 pb-16 lg:pb-24">
          
          {/* Background Image Container - now stretching to the true top */}
          <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full opacity-90 z-0 pointer-events-none">
            <Image 
              src="https://i.postimg.cc/tJQjdqYk/cosmos-956257560.jpg" 
              alt="Cosmos background" 
              fill 
              className="object-cover object-top"
              priority
            />
            {/* Made the light gradient overlay stronger on mobile viewports */}
            <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/50 to-transparent/30 lg:via-cream/50 lg:to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-center lg:text-left">
<h1 className="font-serif text-4xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 [-webkit-text-stroke:_0.5px_rgba(0,0,0,0.2)] lg:[-webkit-text-stroke:none]">
  Why Metta Tropical Collective?
</h1>
              <blockquote className="translate-y-12 space-y-4 max-w-2xl mx-auto lg:mx-0">
<p
  className="
    font-serif text-lg md:text-xl lg:text-2xl
    leading-relaxed text-foreground italic
    py-1 pl-3
    bg-cream/20 lg:bg-transparent lg:p-0
    bg-[linear-gradient(to_bottom,theme(colors.olive)_0%,theme(colors.olive)_33.333%,#D9A01B_33.333%,#D9A01B_66.666%,theme(colors.crimson)_66.666%,theme(colors.crimson)_100%)]
    bg-[length:2px_100%]
    bg-no-repeat
    bg-left
    lg:bg-none
  "
>
  "A genuinely different future depends far less on the images we create in our minds than on our ability to repair and weave relationships in the present."
</p>
                {/* Changed text color to a readable brown on mobile, returning to olive on desktop */}
                <figcaption className="text-[#5C4033] lg:text-olive font-semibold text-xs tracking-widest uppercase">
                  — Ninawa Huni Kuin
                </figcaption>
              </blockquote>
            </div>
          </div>
        </section>


        {/* Why Metta? */}
        <section className="py-24 pt-12 lg:py-32 lg:pt-16 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="https://i.postimg.cc/YC4mzsXH/Water-Lily-(1920)-a-woodblock-print-by-Japanese-artist-Ohara-Koson.jpg"
                  alt="A lotus flower, symbolizing metta."
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                    Why Metta?
                  </h2>
                  <br />
                  <span className="text-olive font-medium text-sm tracking-wide uppercase">The Orientation</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  At its heart, <em className="text-foreground">Metta</em>, from the Pali language, means a kind of boundless and self-giving love towards all living beings. For us, it holds three energies embedded in our work:
                </p>

                <div className="space-y-6">
                  <div className="pl-6 border-l-2 border-crimson">
                    <h3 className="font-serif text-xl font-medium text-foreground">Loving-kindness</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      A fierce, boundless and all embracing love towards the liberation and flourishing of all life. It evokes the heart of the Bodhisattva in a time of societal collapse.
                    </p>
                  </div>

                  <div className="pl-6 border-l-2 border-[#D9A01B]">
                    <h3 className="font-serif text-xl font-medium text-foreground">Meta-awareness</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      The capacity to step back, to sense into the deeper patterns shaping our world, systems and crises. Meta as within (interiority), meta as between (relationality), and meta as beyond (different ways of seeing and being).
                    </p>
                  </div>

                  <div className="pl-6 border-l-2 border-olive">
                    <h3 className="font-serif text-xl font-medium text-foreground">Metamorphosis</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      The recognition that these times are demanding us to be transformed, to have our Ego be shape-shifted, to become mature and wise adults in order to fully embody our soul&apos;s work.
                    </p>
                  </div>
                </div>

                <p className="text-foreground font-medium italic">
                  Metta is the orientation that allows us to face the metacrisis with the kind of wisdom that prevents us from collapsing into despair, simplistic solutions or domination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Tropical? */}
        <section className="py-24 pt-12 lg:py-32 lg:pt-16 bg-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <div>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                    Why Tropical?
                  </h2>
                  <br />
                  <span className="text-olive font-medium text-sm tracking-wide uppercase">The Territory</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  <em className="text-foreground">Tropical</em> is an invocation. It calls in the warmth, the pulse, the wild intelligence of life. The eros, aliveness and creative force that lives in Brazil and across the Global South.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  It&apos;s a call to not be stuck in abstraction, but to return to the body, the land, the rhythm, and the relationships. Tropical honors the wisdom that has long lived in this territory—indigenous, quilombola, Afro-diasporic, and marginalized communities—which despite being ignored, silenced and erased, has endured, holding the keys for how to live through collapse.
                </p>

                <div className="py-6 border-y border-border">
                  <p className="font-serif text-xl text-foreground italic leading-relaxed">
                    To be tropical is to sense from soul,<br />
                    to be rooted in territory,<br />
                    to celebrate life,<br />
                    to follow our eros.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  It reminds us that what has survived erasure still holds something essential. And that any honest reckoning with collapse must find its way back to it.
                </p>
              </div>

              {/* Image */}
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden order-1 lg:order-2">
                <Image
                  src="https://i.postimg.cc/dVg3NTN6/main-mulata.png"
                  alt="Tropical woman enlightened by surreal sun rays"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

{/* Why Collective? */}
<section className="py-12 pt-12 lg:py-24 lg:pt-16 bg-cream text-foreground">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch"> {/* added items-stretch */}
      
      {/* Left Column: Fixed sticky modifier here so it behaves normally on mobile */}
      <div className="w-full aspect-[3/4] max-h-[600px] md:max-h-[650px] lg:sticky lg:top-8">
        <img 
          src="https://i.postimg.cc/ZYDV4PPW/Young-women-dance-during-the-Ashenda-Festival-in-Lalibela-Ethiopia.jpg" 
          alt="Two women dancing, ritualizing in a community gathering in a traditional village"
          className="w-full h-full object-cover object-top rounded-lg shadow-md"
        />
      </div>

      {/* Right Column: Content */}
      <div className="space-y-8 text-left flex flex-col justify-center">
        <div>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Why Collective?
          </h2>
          <br />
          <span className="text-olive font-medium text-sm tracking-wide uppercase">The Community</span>
        </div>

        <p className="text-foreground font-medium leading-relaxed">
          Because you cannot wake up alone.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Collective names the movement from separation to inter-being, from individualism to interdependence, from a gathering of individuals with shared values to a living field of relationships bound to each other and to something larger than ourselves.
        </p>

        {/* Callout / Bordered Box */}
          <p className="font-serif text-xl text-foreground italic leading-relaxed">
            We are evoking the spirit of Sangha. Not a network, but a community of trust, a group of friends who practice together, grieve together, think together, listen together and find — in the space between us — the wisdom none of us carries alone.
          </p>

        <p className="text-muted-foreground leading-relaxed">
          This is where we can be truly transformed. Where our ways of seeing, being, knowing and doing are cracked open and rebuilt in deeper alignment with life. Where we remember, slowly, imperfectly and together, how to care, love and support each other.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          We are inviting the ones who feel the weight of this moment and have chosen to offer their lives in response to join us. And as we do so, we do the work of building trust, intimacy, shared language, shared vision, and shared understanding of who we are, where we are, and what is being asked of us.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          So that when things get harder — and they will — we are not starting from scratch. We already know how to move as one body.
        </p>

        <p className="text-foreground font-medium italic">
          It is in times of collapse that small islands of coherence have the capacity to shift the entire system to a higher order.
        </p>
      </div>

    </div>
  </div>
</section>

{/* Vision & Mission */}
<section className="py-16 lg:py-20 bg-background">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-12">
      <span className="text-cyan-800 font-medium text-sm tracking-wide uppercase">
        Vision & Mission
      </span>
      <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
        Why We Exist
      </h2>
    </div>

    {/* Content */}
    <div className="space-y-8">
      <p className="text-muted-foreground leading-relaxed">
        Two questions orient our vision:
      </p>

<div className="space-y-4">
  <div className="pl-6 border-l-2 border-cyan">
    <p className="font-serif text-xl font-medium text-foreground italic leading-relaxed">
      Who are we being called to become in a time between worlds, to help steward
      civilization toward life-enhancing futures?
    </p>
  </div>

  <div className="pl-6 border-l-2 border-cyan">
    <p className="font-serif text-xl font-medium text-foreground italic leading-relaxed">
      And what kinds of educational structures, communities, and developmental
      containers must emerge to support such becoming?
    </p>
  </div>
</div>

      <p className="text-muted-foreground leading-relaxed">
        We envision a world where human beings are supported in the lifelong unfolding
        toward wisdom, relational maturity, and soulful participation in life—where
        each person is able to manifest their unique soul calling in response to the
        crisis of the world.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        We believe the metacrisis is not only a civilizational breakdown, but also a
        rite of passage: a threshold calling humanity to evolve beyond habits of
        fragmentation, separation, and extraction toward more mature, integrated, and
        life-affirming ways of being together.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Our mission is to help design wisdom-centered educational architectures capable
        of supporting the depth of human transformation this moment requires.
      </p>
        
              <p className="text-muted-foreground leading-relaxed">
                We seek
        to create structures that can hold the magnitude of devotion and responsibility
        of those committed to offering their lives in response to this time between
        worlds. We aim to support them as they move through this threshold and develop
        the capacities, relationships, and ways of being needed to navigate collapse,
        embody new cultural possibilities, and participate in the emergence of a
        wisdom-centered civilization.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        At the heart of our vision is the belief that humanity must radically transform
        its ways of relating to all life—self, other, world, and the sacred—if we are
        to move through this time of rupture with wisdom and discernment. This
        transformation will require a long process of shedding ways of being that no
        longer serve life while cultivating new forms of presence, relationships, and
        participation in reality.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        We believe such transformation cannot happen in isolation. It requires robust
        communities and developmental spaces capable of weaving together practices,
        rites of passage, rituals, training, and communion that can hold the long arc
        of human becoming.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        We hope to help cultivate a new generation of visionary leaders, artists,
        educators, activists, thinkers, and community builders who can contribute to
        the emergence of a living ecosystem of wisdom-centered educational spaces,
        communities, and institutions—a new societal infrastructure and cultural fabric
        capable of supporting profound individual and collective transformation in
        service of the sacredness of all life.
      </p>
    </div>
  </div>
</section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-olive">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Through these explorations, we hope to continuously learn how to build educational spaces, sanctuaries of transformation and thriving communities.
            </h2>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/why-now"
                className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                Understand What's At Stake Now
              </Link>
              <Link
                href="/fellowship"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#D9A01B] text-background font-medium text-sm tracking-wide hover:bg-[#B88610] transition-colors"
              >
                Explore the Fellowship
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}