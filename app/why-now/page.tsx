import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Why Now | Metta Tropical Collective",
  description: "We are living through a moment of systemic collapse. What we face is not simply a cluster of interconnected crises—it is a crisis of perception, values, and worldview.",
}

export default function WhyNowPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
            <span className="text-yellow font-medium text-sm tracking-wide uppercase">Why Now</span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-background leading-tight">
              A Time Between Worlds
            </h1>
            <blockquote className="mt-8 font-serif text-xl md:text-2xl text-background/80 italic leading-relaxed border-l-4 border-yellow pl-6">
              &ldquo;During times between worlds there emerge ideas and thinkers that are, properly speaking, without a world. Their work is liminal — not within the old world or the world to come, but serving as the bridge between them. The focus of work in the liminal is on foundations: metaphysics, religion, and the deeper codes of culture — education in its broadest sense.&rdquo;
            </blockquote>
            <cite className="mt-4 block text-background/60 text-sm not-italic">— Zak Stein</cite>
          </div>
        </section>

{/* The Moment - REMOVED BOTTOM PADDING TO ELIMINATE WHITE SPACE BELOW IMAGE */}
        <section className="pt-12 lg:pt-16 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                We are living through such a threshold.
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                And the urgency of this work emerges from the ever greater magnitude of ecological collapse, social fragmentation, institutional breakdown, technological destabilization, and widespread crises of meaning and belonging.
              </p>

              <p className="text-muted-foreground leading-relaxed">These crises are not separate. They are symptoms of a deeper civilizational disease, what some have called the <em>meta-crisis</em>¹: a crisis of perception, values, and separation from the web of life. A fundamental breakdown in how we intimately relate with all life—to ourselves, to each other, to the world, and to what is sacred.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                This crisis we are facing did not happen overnight. It is the culmination of centuries shaped by worldviews that desacralized life, separated human beings from the web of existence, and reduced reality into something to dominate, extract from, and control. It destroyed our sense of meaning, other living beings and our capacity to respond to complexity. The result is a civilization generating problems that exceed the wisdom, maturity, and capacities available to respond to them.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Increasingly, it has become clear that the very structures that produced this crisis cannot guide us beyond it. We are living through a time between worlds. The old stories are breaking apart, yet the new ones have not fully arrived. There is no clear map for how to move through this threshold.² We are being invited to actively participate in the creation of what comes next.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We recognize this moment as a possible civilizational rite of passage: a collective initiation requiring humanity to shed old ways of seeing, being, and relating in order to grow into more mature, wise, and life-enhancing human beings. But rites of passage require guidance, community, practice, and structures capable of holding such profound transformation.
              </p>
            </div>
          </div>

          {/* Adjusted margins so the image sits flush against the bottom of this section */}
<div className="mx-auto max-w-4xl px-6 lg:px-8 mt-12 mb-0">
            <div className="relative h-[320px] overflow-hidden rounded-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flower%20phase-Phoy1ja2ApHEVtJJLu5B2Ty3AnhO9E.jpeg"
                alt="Mountains and moon - representing the darkness before dawn"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Historical Response / Containers for Transformation */}
        <section className="pt-12 pb-24 lg:pt-16 lg:pb-32 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-olive font-medium text-sm tracking-wide uppercase">Historical Precedent</span>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                    Containers for Transformation
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Historically, at moments of systemic collapse, new forms of education and community have emerged to carry culture through challenging times and reconnect them with what truly matters:
                </p>

                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-olive rounded-full shrink-0" />
                    <span><strong className="text-foreground">Mystery Schools</strong> — initiating seekers into hidden wisdom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-olive rounded-full shrink-0" />
                    <span><strong className="text-foreground">Monasteries</strong> — preserving knowledge through dark ages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-olive rounded-full shrink-0" />
                    <span><strong className="text-foreground">Wisdom Traditions</strong> — transmitting perennial truths</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-olive rounded-full shrink-0" />
                    <span><strong className="text-foreground">Folk Schools</strong> — educating for life, not credentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-olive rounded-full shrink-0" />
                    <span><strong className="text-foreground">Quilombos</strong> — communities of resistance and renewal</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  Each built the structures, practices, relational life and rites of passage needed to orient human life toward what is most meaningful—and to develop the capacities required to face the challenges of their time.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                These architectures of transformation were embodying a new paradigm of seeing, being, and acting for their time. The ones required to steward civilization towards its evolution. <strong>We believe this is what our time most urgently needs now.</strong>
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Not simply new ideas, but new containers for human development and collective transformation. New educational architectures and communities capable of supporting individuals move through this threshold consciously, transforming societal rupture into initiation rather than collapse and despair alone.
                </p>
              </div>

              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="https://i.postimg.cc/bw8XLYpx/Mandala-of-Jnanadakini-Tibet.jpg"
                  alt="Mandala of Jnanadakini, Tibet, representing ancestral wisdom and containers for transformation"
                  fill
                  className="object-contain bg-cream"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What This Requires - REDUCED TOP AND BOTTOM MARGIN */}
        <section className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-crimson font-medium text-sm tracking-wide uppercase">The Threshold</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                What This Moment Requires
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                This is what this threshold moment requires of us. Despair can be the precondition for genuine transformation, but only within containers strong enough to hold the shape-shift and metamorphosis. Without them, crisis tends not toward transformation, but toward a tightening grip on what is already broken.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-cream border-l-4 border-olive">
                  <h3 className="font-serif text-xl font-medium text-foreground">Why Are We Needed Now?</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    The velocity of ecological, cultural, political, and spiritual unraveling has sharpened. Many are watching events unfold with heartbreak and uncertainty about how to respond.
                  </p>
                </div>

                <div className="p-6 bg-cream border-l-4 border-cyan">
                  <h3 className="font-serif text-xl font-medium text-foreground">What Exactly Is Needed Now?</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    New structures and architectures for human development, transformation and belonging—forms that can hold the long arc of human transformation.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                What we are building is, at its heart, an <strong className="text-foreground">educational sanctuary</strong>. A space where genuine transformation becomes possible, where the dying paradigm temporarily loses its grip, and where we are able to embody radically new ways of seeing, being, knowing and acting together.
              </p>
            </div>
          </div>
        </section>

        {/* Our Conviction - REDUCED TOP MARGIN */}
        <section className="pt-12 pb-24 lg:pt-16 lg:pb-32 bg-foreground text-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <span className="text-yellow font-medium text-sm tracking-wide uppercase">Our Conviction</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background leading-tight">
              Metta Tropical Collective was born from this conviction
            </h2>
            
            <p className="mt-8 text-background/80 leading-relaxed max-w-3xl mx-auto">
              That what is most urgently missing is not more information or better policy, but new structures and architectures for human development, transformation and belonging—new forms of educational architectures that can hold the long arc of human transformation, where we can unfold into the types of individuals who have the capacities to create the conditions for a new cultural paradigm to quietly, intimately, and relationally take root.
            </p>

            <div className="mt-12 inline-block p-8 bg-background/10 border border-background/20">
              <p className="font-serif text-xl text-background italic">
                Rooted in Brazil. Weaving a fragmented ecosystem.<br />
                A community of transformation, inquiry and practice.
              </p>
            </div>
          </div>
        </section>

        {/* Wisdom Questions */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow font-medium text-sm tracking-wide uppercase">The Ground</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background">
                Three Wisdom Questions
              </h2>
              <p className="mt-6 text-background/70 max-w-2xl mx-auto leading-relaxed">
                Before rushing into action, we wrestle with the questions that matter most for life. These are wisdom questions—inquiries into the nature of self, reality, and systems in a time between worlds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-background/20">
                <h3 className="font-serif text-2xl font-medium text-yellow">Who are we?</h3>
                <p className="mt-4 text-background/70 text-sm leading-relaxed">
                  What is the human for? What is my true nature? Who do we need to become to navigate this crisis—and what individual and collective capacities does that require?
                </p>
              </div>

              <div className="p-8 border border-background/20">
                <h3 className="font-serif text-2xl font-medium text-cyan">Where are we?</h3>
                <p className="mt-4 text-background/70 text-sm leading-relaxed">
                  What is the true nature of reality? What defines the current moment in history? What are the deep roots of modernity and capitalism, and what existential dangers do they now carry?
                </p>
              </div>

              <div className="p-8 border border-background/20">
                <h3 className="font-serif text-2xl font-medium text-background">What is being asked of us?</h3>
                <p className="mt-4 text-background/70 text-sm leading-relaxed">
                  What does this moment ask of me? What is trying to emerge through us? How do we create the conditions for collective coordination in genuine service of all life?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-yellow">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              The time between worlds asks for those who are committed to building a new cultural paradigm.
            </h2>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              There is a path, but it&apos;s not a given at all that we will take it. We are the ones who will have to build the new instructional manual.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/theory-of-change"
                className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                Our Theory of Change
              </Link>
              <Link
                href="/fellowship"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-foreground text-foreground font-medium text-sm tracking-wide hover:bg-foreground/10 transition-colors"
              >
                Join the Fellowship
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}