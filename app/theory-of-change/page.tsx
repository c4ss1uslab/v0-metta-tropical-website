import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Theory of Change | Metta Tropical Collective",
  description: "Understanding the metacrisis and our approach to building the educational architectures needed for genuine transformation and cultural renewal.",
}

export default function TheoryOfChangePage() {
  return (
    <>
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

        {/* The Predicament */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-crimson font-medium text-sm tracking-wide uppercase">The Predicament</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                The Metacrisis
              </h2>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The crises shaping our time are not isolated problems. They arise from deeper conditions and patterns.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Meta-Systemic Dysfunctions */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-medium text-foreground border-b border-border pb-4">
                  Meta-Systemic Dysfunctions
                </h3>
                
                <div className="space-y-6">
                  <div className="p-6 bg-cream border-l-4 border-crimson">
                    <h4 className="font-serif text-lg font-medium text-foreground">Crisis of Incentives</h4>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      Systems optimizing for short-term, rivalrous, and extractive behavior.
                    </p>
                  </div>

                  <div className="p-6 bg-cream border-l-4 border-crimson">
                    <h4 className="font-serif text-lg font-medium text-foreground">Crisis of Power</h4>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      People and institutions with the most power, even with good intentions, feel captured and often incapable of affecting transformative change alone.
                    </p>
                  </div>

                  <div className="p-6 bg-cream border-l-4 border-crimson">
                    <h4 className="font-serif text-lg font-medium text-foreground">Crisis of Trust</h4>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      Incapacity for sensemaking, truth, and legitimacy breaks down collaboration and coordination.
                    </p>
                  </div>

                  <div className="p-6 bg-cream border-l-4 border-crimson">
                    <h4 className="font-serif text-lg font-medium text-foreground">Complicated Over Complex</h4>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      Complicated systems subsuming their complex substrate.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-foreground text-background text-sm">
                  <p className="font-medium">Rivalrous dynamics + Exponential tech = Death of humanity (self-terminates)</p>
                </div>
              </div>

              {/* Cultural Foundation Dysfunctions */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-medium text-foreground border-b border-border pb-4">
                  Cultural Foundation Dysfunctions
                </h3>
                
                <div className="space-y-6">
                  <div className="p-6 bg-cream border-l-4 border-olive">
                    <h4 className="font-serif text-lg font-medium text-foreground">Crisis of Perception</h4>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      Delusion of separation, persistent misvaluing, misunderstanding, and misapprehending of reality.
                    </p>
                  </div>

                  <div className="p-6 bg-cream border-l-4 border-olive">
                    <h4 className="font-serif text-lg font-medium text-foreground">Crisis of Value</h4>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      Spiritual collapse and rupture with the sacred. Lost contact with and reverence for the sacred. Loss of meaning—inability to find our place in the universe.
                    </p>
                  </div>

                  <div className="p-6 bg-cream border-l-4 border-olive">
                    <h4 className="font-serif text-lg font-medium text-foreground">Capacity Crisis</h4>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      Unexamined human tendencies and unfulfilled potentials, exponentialized by systems of separation. We&apos;re creating a society with problems so complex we don&apos;t have the capacity to respond.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-foreground text-background text-sm">
                  <p className="font-medium">Global Intimacy Disorder + Exponential tech = Death of our humanity</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-crimson font-medium text-sm tracking-wide uppercase">The Problem</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                A Large-Scale Educational Crisis
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                A society that is incapable of creating educational structures that can prepare individuals with the capacities required to handle the increasing complexity of our world, while serving the flourishing of all life. <strong className="text-foreground">The task demands of society outstrip the capabilities available to handle it.</strong>
              </p>

              <blockquote className="p-8 bg-background border-l-4 border-olive">
                <p className="font-serif text-lg text-foreground italic leading-relaxed">
                  &ldquo;The basic idea is that societies require each new generation to be in a position to inherit the requisite capabilities, legitimacy, and meaning-making to continue the project of cooperative social life. Failing this, the intergenerational fabric of the social world begins to fray. At some point inadequate education results in an inability to fill essential institutional roles, provide motivating meanings, and secure political legitimacy.&rdquo;
                </p>
                <cite className="mt-4 block text-muted-foreground text-sm not-italic">— Zak Stein</cite>
              </blockquote>

              <p className="text-muted-foreground leading-relaxed">
                Current educational systems are fragmented, developing fragmented individuals who create fragmented systems. Our educational system has been one of the main contributors to the metacrisis. The metacrisis is an opportunity for evolving our understanding of what education should be.
              </p>
            </div>
          </div>
        </section>

        {/* Our Hypothesis */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow font-medium text-sm tracking-wide uppercase">Our Hypothesis</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background">
                Educational Architecture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-background/10 border border-background/20">
                <h3 className="font-serif text-xl font-medium text-yellow">The Architecture</h3>
                <p className="mt-4 text-background/80 text-sm leading-relaxed">
                  Lasting systemic change or responses to the metacrisis cannot occur without human maturation and evolution, held by an ecosystem and community with shared views, practices and vision. An ecosystem that can weave and support individuals along the long arc of human transformation has the best chance of building trust, capacity and collaboration, affecting transformative change in multiple sectors.
                </p>
              </div>

              <div className="p-8 bg-background/10 border border-background/20">
                <h3 className="font-serif text-xl font-medium text-cyan">The Institute</h3>
                <p className="mt-4 text-background/80 text-sm leading-relaxed">
                  We need a network of responses—initiatives, communities, people—that can ground the process of self-recognition, unfoldment, transformation and regeneration in cosmo-local, personal and bioregional contexts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Response */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-olive font-medium text-sm tracking-wide uppercase">Our Response</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                What Leads to Wisdom-Centered Human Maturation?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  number: "1",
                  title: "Holistic Education",
                  desc: "Education focused on spiritual, emotional, relational, intellectual and ecological development—Body, Mind, Heart and Soul.",
                },
                {
                  number: "2",
                  title: "Soul Initiation",
                  desc: "Supporting individuals to go through the tragedy and come out on the other side, transformed.",
                },
                {
                  number: "3",
                  title: "Ecosystem Integration",
                  desc: "Integrating a fragmented ecosystem of the best developmental initiatives, organizations, communities and leaders representing wisdom-centered culture.",
                },
                {
                  number: "4",
                  title: "Long-term Architecture",
                  desc: "Offering an educational architecture for long-term development that holds the full arc of human transformation.",
                },
                {
                  number: "5",
                  title: "Sangha Building",
                  desc: "Building a community of support and accountability with shared views, practices and vision—creating ecosystems for trustworthy relationships.",
                },
                {
                  number: "6",
                  title: "Bioregional Rootedness",
                  desc: "Grounding transformation in shared cultural context, territory, and place-based wisdom.",
                },
              ].map((item) => (
                <div key={item.number} className="p-6 bg-cream">
                  <div className="w-10 h-10 bg-olive text-background rounded-full flex items-center justify-center mb-4">
                    <span className="font-serif font-medium">{item.number}</span>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <span className="text-olive font-medium text-sm tracking-wide uppercase">Our Approach</span>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                    Four Foundational Elements
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Most educational responses to the metacrisis continue to offer a program. A six-week journey. A year-long fellowship. We are building something different—an Educational Architecture for a time between worlds.
                </p>

                <div className="space-y-6">
                  <div className="border-b border-border pb-6">
                    <h3 className="font-serif text-xl font-medium text-foreground">I. Re-centering the Sacred</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      The sacred is not peripheral—it is a way of perceiving reality that recognizes the transcendent worth and radical interdependence of all life.
                    </p>
                  </div>

                  <div className="border-b border-border pb-6">
                    <h3 className="font-serif text-xl font-medium text-foreground">II. Integrating a Fragmented Ecosystem</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      Mapping, weaving, and adapting wisdom-centered initiatives into a coherent path of transformation accessible to those in the Global South.
                    </p>
                  </div>

                  <div className="border-b border-border pb-6">
                    <h3 className="font-serif text-xl font-medium text-foreground">III. Four Streams of Transformation</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      Soul, Systems, Soil, and Society—interwoven dimensions of a transformational path, not sequential stages.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-medium text-foreground">IV. A Relational Field</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      Tending community where trust, intimacy, and accountability create the conditions for transformation to go deeper.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[3/4] rounded-sm overflow-hidden lg:sticky lg:top-24">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jendaya%20Conure%20%28Aratinga%20jandaya%29%20colored%20wood-engraved%20plate%20by%20Alexander%20Francis%20Lydon.%20Digitally%20enhanced%20from%20our%20own%201884%20edition%20plates%20of%20Pa-ktqMroU1Qzm3YkOz5ZaCams3s54pdP.jpg"
                  alt="Jendaya Conure - a Brazilian bird representing natural wisdom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Expected Outcomes */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-olive font-medium text-sm tracking-wide uppercase">The Vision</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Expected Outcomes
              </h2>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-cream border-l-4 border-yellow">
                <h3 className="font-serif text-xl font-medium text-foreground">Short Term</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Participants are eager to keep engaging with developmental opportunities, building the community and being in space together. Strengthening agreements, alignment and coherence between everyone.
                </p>
              </div>

              <div className="p-8 bg-cream border-l-4 border-olive">
                <h3 className="font-serif text-xl font-medium text-foreground">Medium Term</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Participants start working together, prototyping new systems, gatherings, initiatives and communities, entering positions of power.
                </p>
              </div>

              <div className="p-8 bg-cream border-l-4 border-cyan">
                <h3 className="font-serif text-xl font-medium text-foreground">Long Term</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  A wisdom-centered network of mature communities, people and organizations working together for cultural renewal—creating structures that are shifting narratives and consciousness of society, influencing policy, creating new practices, new communities emerging, deliberate developmental organizations.
                </p>
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
