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
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <span className="text-olive font-medium text-sm tracking-wide uppercase">About</span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
              What is Metta Tropical Collective?
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              Reclaiming Leadership as a Sacred Duty & Responsibility Towards the Flourishing of All Life
            </p>
          </div>
        </section>

        {/* Manifesto */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <span className="text-crimson font-medium text-sm tracking-wide uppercase">Manifesto</span>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                    We are living through the unraveling of a world that can no longer sustain its own promises.
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  And many of our attempts to respond have only been deepening the crisis—reproducing the very logic that created it.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Metta Tropical Collective</strong> is an experimental, place-based community of transformation, inquiry and practice, calling together postactivist educators, thinkers, artists, spiritual practitioners and leaders who refuse to look away. Those convinced that any serious response to this moment must be rooted in a fundamentally different relationship with all life — self, other, world, and the sacred.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We come together not to optimize and fix a broken system in order to work for a greater number of humans and species, but to hospice it. To question its own foundations and engage with intimate communities, sacred spaces, radical ideas and collective practices that shift the very ways we see, be, know and respond to the metacrisis we are facing.
                </p>
              </div>

              <div className="relative aspect-[4/5] rounded-sm overflow-hidden lg:sticky lg:top-24">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PNG%20Toucan%20Ariel%2C%20vintage%20Brazilian%20bird%20illustration%20on%20transparent%20background.%20Remixed%20by%20rawpixel.-8KQu3ICTu2kRiw9TlEOmcTvp8sSwWz.png"
                  alt="Toucan Ariel, vintage Brazilian bird illustration"
                  fill
                  className="object-contain bg-foreground"
                />
              </div>
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

        {/* Educational Work */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-8">
              <div>
                <span className="text-olive font-medium text-sm tracking-wide uppercase">Our Purpose</span>
                <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                  Our work is fundamentally educational.
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                We are building the educational and communal structures capable of holding the magnitude of the vow, devotion and surrender of those who feel the depth of our crisis and are committed to offering their lives in service of the liberation and flourishing of all life.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We are relentlessly cultivating the soil for the emergence of a different kind of human, a different kind of community, capable of stewarding culture and society in this time between worlds. One rooted in a shared story of value, wisdom, belonging, and intimate relationship with all life.
              </p>

              <div className="relative aspect-[21/9] overflow-hidden my-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Peaks%20And%20Plateaus%20-%20jesse%20treece-4b8b9o6GISsRjOsmCjAj5JCXJJFKzO.jpeg"
                  alt="Peaks and Plateaus collage by Jesse Treece - a surreal landscape representing layers of transformation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fields of Work */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-olive font-medium text-sm tracking-wide uppercase">Our Fields</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Fields of Work
              </h2>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Metta Tropical Collective is a living community, intentionally small and deeply relational. Within our Collective, we serve five main areas of exploration.
              </p>
            </div>

            <div className="space-y-16">
              {/* Transformative Educational Lab */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3 space-y-4">
                  <h3 className="font-serif text-2xl font-medium text-foreground">Transformative Educational Lab</h3>
                  <p className="text-olive text-sm font-medium">Education for the end of the world as we know it</p>
                  <p className="text-muted-foreground leading-relaxed">
                    This is the living laboratory where our Educational Architecture is continuously tested, refined, and deepened. Through retreats, residencies, courses, and immersive programs—developed in-house and in collaboration with fellow educators—we keep experimenting with what it actually takes to build the foundations for a wisdom-centered education.
                  </p>
                </div>
                <div className="lg:col-span-2 relative aspect-square rounded-sm overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmos-MkJd4aqeKlMPCnfUcQt9O83ESh9O6Y.webp"
                    alt="Traditional mandala pattern representing cosmic order and education"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Research & Inquiry */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2 relative aspect-square rounded-sm overflow-hidden order-2 lg:order-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rosette%20Bearing%20the%20Names%20and%20Titles%20of%20Shah%20Jahan%2C%20vintage%20illustration.%20Image%20by%20rawpixel-xIf2OhkvtW6WrGpOH53bXXaPFg2kKR.jpg"
                    alt="Ornate rosette pattern representing deep inquiry and research"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-3 space-y-4 order-1 lg:order-2">
                  <h3 className="font-serif text-2xl font-medium text-foreground">Research & Inquiry</h3>
                  <p className="text-cyan text-sm font-medium">Investigating the most pressing questions shaping our world today</p>
                  <p className="text-muted-foreground leading-relaxed">
                    This is the space of deep investigation into what has brought us here, what is happening now, and what is trying to emerge. Through articles, essays, and collaborative thinking, we contribute to the kind of narrative-building and cultural sensemaking that can orient action in a time of uncertainty.
                  </p>
                </div>
              </div>

              {/* Ecosystem Integration */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3 space-y-4">
                  <h3 className="font-serif text-2xl font-medium text-foreground">Ecosystem Integration</h3>
                  <p className="text-olive text-sm font-medium">Tending to the emerging fabric of a wisdom-centered culture</p>
                  <p className="text-muted-foreground leading-relaxed">
                    We map, connect, and weave initiatives into a coherent, multi-decade developmental pathway—making accessible what has until now been scattered, expensive, and out of reach for most people, especially in the Global South. Think of it as the educational space that doesn&apos;t yet exist.
                  </p>
                </div>
                <div className="lg:col-span-2 relative aspect-square rounded-sm overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/floral%20pattern%20-%20Jung%20Suk%20hyun-czCaN7g7GO3CRtehxfEpBhtmMcYqnh.jpeg"
                    alt="Vibrant floral pattern representing ecosystem diversity and integration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Collective Practice */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2 relative aspect-square rounded-sm overflow-hidden order-2 lg:order-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/designretrospace-Lej4ROEDLMRjlkDkkYE8wc5yFqra7s.jpeg"
                    alt="Figures gathered before a rising sun representing collective practice"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-3 space-y-4 order-1 lg:order-2">
                  <h3 className="font-serif text-2xl font-medium text-foreground">Collective Practice</h3>
                  <p className="text-crimson text-sm font-medium">Transforming worldview into embodied action</p>
                  <p className="text-muted-foreground leading-relaxed">
                    This is the space where worldview becomes embodied, where consistent, intentional practice reshapes not just what we think, but how we perceive, relate, and act. We practice together: sitting in silence, grieving together, listening deeply, working with our bodies, practicing being with the natural world.
                  </p>
                </div>
              </div>

              {/* Intergenerational Responsibility */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3 space-y-4">
                  <h3 className="font-serif text-2xl font-medium text-foreground">Intergenerational Responsibility</h3>
                  <p className="text-olive text-sm font-medium">Restoring the essence of what education has always been</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Education, at its deepest, is the sacred transmission of wisdom, values, cosmological orientation, and responsibility between generations. We are working to restore this—to create the conditions for a multigenerational community to fall back in love with each other—and with the shared responsibility of being alive at this time between worlds.
                  </p>
                </div>
                <div className="lg:col-span-2 relative aspect-square rounded-sm overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ind%C3%ADgena%20statue-UEeF4odSMX5yLGlAC6txxib6JBR6dX.jpg"
                    alt="Indigenous statue of mother and child representing intergenerational care"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-yellow">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Through these explorations, we hope to continuously learn how to build educational spaces, sanctuaries of transformation and thriving communities.
            </h2>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/why-now"
                className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                Understand Why Now
              </Link>
              <Link
                href="/fellowship"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-foreground text-foreground font-medium text-sm tracking-wide hover:bg-foreground/10 transition-colors"
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
