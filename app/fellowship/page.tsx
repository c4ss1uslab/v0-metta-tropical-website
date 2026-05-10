import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fellowship | Metta Tropical Collective",
  description: "A 6-month initiatory journey for those who sense that something fundamental must change in how we relate to all life. Applications open for September 2026.",
}

export default function FellowshipPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunflower%2012-rYeVrLQePMq900vde9yBvm9cwrm3Hj.jpeg"
              alt="Sunflowers against a golden wall"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
            <span className="inline-block px-4 py-1 bg-yellow text-foreground text-sm font-medium mb-6">
              Applications Open — September 2026
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
              Wisdom-Centered Leadership in a Time Between Worlds
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              A 6-month journey inviting participants into an initiatory process of transforming ourselves to become the types of beings who can embody a way of relating to all life that this time is asking for.
            </p>
            <div className="mt-10">
              <Link
                href="#apply"
                className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>

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
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow font-medium text-sm tracking-wide uppercase">The Journey</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background">
                Five Streams of Transformation
              </h2>
              <p className="mt-6 text-background/70 max-w-2xl mx-auto leading-relaxed">
                Three wisdom questions serve as our orienting guides: <em>Who are we? Where are we? What is being asked of us?</em>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* The Sacred */}
              <div className="p-8 bg-background/10 border border-background/20">
                <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-xl font-medium text-foreground">1</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-yellow">The Sacred</h3>
                <p className="mt-2 text-background/60 text-sm">The Nature of Reality — 4 weeks</p>
                <p className="mt-4 text-background/80 text-sm leading-relaxed">
                  We begin here because everything else depends on it. The sacred is not a separate realm above or outside of ordinary life. It is the depth dimension of reality itself—accessible through a certain quality of perception that modernity has largely taught us to close.
                </p>
              </div>

              {/* Soul */}
              <div className="p-8 bg-background/10 border border-background/20">
                <div className="w-12 h-12 bg-cyan rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-xl font-medium text-foreground">2</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-cyan">Soul</h3>
                <p className="mt-2 text-background/60 text-sm">The Inner Work — 6 weeks</p>
                <p className="mt-4 text-background/80 text-sm leading-relaxed">
                  Grounded in the sacred, we turn inward. This stream is a process of clarification: learning to see more clearly who we actually are beneath the accumulated layers of conditioning, trauma, and adaptive self-protection.
                </p>
              </div>

              {/* Systems */}
              <div className="p-8 bg-background/10 border border-background/20">
                <div className="w-12 h-12 bg-olive rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-xl font-medium text-background">3</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-background">Systems</h3>
                <p className="mt-2 text-background/60 text-sm">The Complexity of Our Moment — 6 weeks</p>
                <p className="mt-4 text-background/80 text-sm leading-relaxed">
                  With a clearer sense of who we are, we turn to meet the world as it actually is. This stream develops the capacity to see clearly within complexity—tracing the roots of the metacrisis.
                </p>
              </div>

              {/* Soil */}
              <div className="p-8 bg-background/10 border border-background/20">
                <div className="w-12 h-12 bg-olive rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-xl font-medium text-background">4</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-background">Soil</h3>
                <p className="mt-2 text-background/60 text-sm">Returning to the Living World — 6 weeks</p>
                <p className="mt-4 text-background/80 text-sm leading-relaxed">
                  We will be immersed in indigenous and quilombola communities, not only hearing from their leaders but living alongside them, encountering what it actually feels like to inhabit a radically different relationship with the world.
                </p>
              </div>

              {/* Society */}
              <div className="p-8 bg-background/10 border border-background/20">
                <div className="w-12 h-12 bg-crimson rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-xl font-medium text-background">5</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-background">Society</h3>
                <p className="mt-2 text-background/60 text-sm">From Formation to Action — 6 weeks</p>
                <p className="mt-4 text-background/80 text-sm leading-relaxed">
                  The journey culminates here—where inner formation meets outer responsibility. Having been grounded in the sacred, formed in soul, clear in understanding of systems, and rooted in the living world, we ask: how do we act?
                </p>
              </div>

              {/* Note */}
              <div className="p-8 bg-yellow/20 border border-yellow/30">
                <p className="font-serif text-lg text-background italic leading-relaxed">
                  These five streams are not separate modules to be completed. They are dimensions of a single transformation—the process of becoming more whole, more mature, and more capable of responding to these times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Format */}
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
