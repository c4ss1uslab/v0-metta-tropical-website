import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Metta Tropical Collective",
  description: "An experimental, place-based community of transformation, inquiry and practice, calling together postactivist educators, thinkers, artists, spiritual practitioners and leaders who refuse to look away.",
}

export function EssenceSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block px-4 py-1 bg-yellow/30 text-sm font-medium text-foreground mb-8">
            A Time Between Worlds
          </span>
          
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground italic leading-relaxed text-pretty">
            &ldquo;During times between worlds there emerge ideas and thinkers that are, properly speaking, without a world. Their work is liminal — not within the old world or the world to come, but serving as the bridge between them.&rdquo;
          </blockquote>
          
          <cite className="block mt-6 text-muted-foreground text-sm not-italic">
            — Zak Stein
          </cite>
        </div>
      </div>
    </section>
  )
}

export function MettaExplanation() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ind%C3%ADgena%20statue-UEeF4odSMX5yLGlAC6txxib6JBR6dX.jpg"
              alt="Indigenous statue depicting a mother holding a child, representing loving-kindness and intergenerational care"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-olive font-medium text-sm tracking-wide uppercase">The Name</span>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Why Metta?
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              At its heart, <em className="text-foreground">Metta</em>, from the Pali language, means a kind of boundless and self-giving love. For us, it holds three energies embedded in our work:
            </p>

            <div className="space-y-6">
              <div className="pl-6 border-l-2 border-olive">
                <h3 className="font-serif text-xl font-medium text-foreground">Loving-kindness</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  A fierce, boundless and self-giving love towards all living beings, especially in a time of societal collapse.
                </p>
              </div>

              <div className="pl-6 border-l-2 border-cyan">
                <h3 className="font-serif text-xl font-medium text-foreground">Meta-awareness</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  The capacity to step back, to sense into the deeper patterns shaping our world, systems and crises. Meta as within (interiority), meta as between (relationality), and meta as beyond (different ways of seeing and being).
                </p>
              </div>

              <div className="pl-6 border-l-2 border-crimson">
                <h3 className="font-serif text-xl font-medium text-foreground">Metamorphosis</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  The recognition that these times are demanding us to be transformed, to have our Ego be shape-shifted, to become mature and wise adults in order to fully embody our soul&apos;s work.
                </p>
              </div>
            </div>

            <p className="text-foreground font-medium italic">
              Metta is the orientation that allows us to face the metacrisis without collapsing into despair, simplistic solutions or domination.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TropicalSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <span className="text-olive font-medium text-sm tracking-wide uppercase">The Territory</span>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Why Tropical?
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              <em className="text-foreground">Tropical</em> is an invocation. It calls in the heat, the pulse, the wild intelligence of life. The eros, aliveness and creative force that lives in Brazil and across the Global South.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              It&apos;s a call to not be stuck in abstraction, but to return to the body, the land, the rhythm, and the relationships. Tropical honors the wisdom that has long lived in this territory—indigenous, quilombola, Afro-diasporic, and marginalized communities—which despite being ignored, silenced and erased, has endured, holding the keys for how to live through collapse.
            </p>

            <div className="py-6 border-y border-border">
              <p className="font-serif text-xl text-foreground italic leading-relaxed">
                To be tropical is to sense from soul,<br />
                to be rooted in territory,<br />
                to act from eros.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              It reminds us that any response to the metacrisis and future worth building must weave global south wisdom.
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden order-1 lg:order-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landscape%20in%20Brazil%20%281652%29%20by%20Frans%20Jansz%20Post.%20Digitally%20enhanced%20by%20rawpixel.-jk3ISmZEus2gjG7NRkhVsctNqKZIiL.jpg"
              alt="Landscape in Brazil (1652) by Frans Jansz Post - a view through an arch of tropical vegetation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function CollectiveSection() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <span className="text-yellow font-medium text-sm tracking-wide uppercase">The Community</span>
        <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background">
          Why Collective?
        </h2>

        <p className="mt-8 text-background/80 leading-relaxed max-w-2xl mx-auto">
          From Latin, <em className="text-background">collectivus</em> means &ldquo;gathering together&rdquo;. We say yes to that, but go beyond. It&apos;s a commitment to become something larger than ourselves.
        </p>

        <p className="mt-6 text-background/80 leading-relaxed max-w-2xl mx-auto">
          Collective names the movement from separation to inter-being, from individuals with shared interests coming together to a living body and field of relationships that are bound to each other. It is the slow formation of trust, intimacy, mutual accountability, and devotion to walk together towards a shared vision.
        </p>

        <div className="mt-12 p-8 bg-background/10 border border-background/20">
          <p className="font-serif text-xl text-background italic leading-relaxed">
            We are evoking the spirit of a Sangha and friendship: not just a group of individuals, but a &ldquo;body&rdquo; or &ldquo;river&rdquo; that flows together, where individuals share collective practices, worldviews, visions and language that supports individual and collective unfolding.
          </p>
        </div>

        <p className="mt-8 text-background/80 leading-relaxed max-w-2xl mx-auto">
          It is a relational path, where we remember how to live, care and love as a single organism in service of life.
        </p>
      </div>
    </section>
  )
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
              Why Metta Tropical Collective?
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              “There is almost a sensual longing for communion with others who have a large vision. The immense fulfilment of the friendship between those engaged in furthering the evolution of consciousness has a quality impossible to describe.” — Pierre Teilhard de Chardin
            </p>
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
