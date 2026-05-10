import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%20image%20homepage-e4nkY3dhesHRgz8n24BoGOK9q8iwRw.png"
          alt="A woman tending to flowers in a lush tropical landscape with mountains and golden sun"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight tracking-tight text-balance">
          Metta Tropical Collective
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed text-pretty">
          Nurturing a community of transformation, inquiry and practice by supporting the development and collective coherence of thinkers, artists, leaders and educators committed to spiritual growth, systemic transformation and cultural renewal in a time of societal collapse.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors"
          >
            Discover Our Work
          </Link>
          <Link
            href="/fellowship"
            className="inline-flex items-center justify-center px-8 py-3 bg-yellow text-foreground font-medium text-sm tracking-wide hover:bg-yellow/90 transition-colors"
          >
            Join the Fellowship
          </Link>
        </div>
      </div>
    </section>
  )
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

export function FieldsOfWorkSection() {
  const fields = [
    {
      title: "Transformative Educational Lab",
      subtitle: "Education for the end of the world as we know it",
      description: "A living laboratory where our Educational Architecture is continuously tested, refined, and deepened through retreats, residencies, courses, and immersive programs.",
      color: "border-olive",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmos-MkJd4aqeKlMPCnfUcQt9O83ESh9O6Y.webp",
    },
    {
      title: "Research & Inquiry",
      subtitle: "Investigating the most pressing questions shaping our world",
      description: "Deep investigation into what has brought us here, what is happening now, and what is trying to emerge through articles, essays, and collaborative thinking.",
      color: "border-cyan",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rosette%20Bearing%20the%20Names%20and%20Titles%20of%20Shah%20Jahan%2C%20vintage%20illustration.%20Image%20by%20rawpixel-xIf2OhkvtW6WrGpOH53bXXaPFg2kKR.jpg",
    },
    {
      title: "Ecosystem Integration",
      subtitle: "Tending to the emerging fabric of a wisdom-centered culture",
      description: "Mapping, connecting, and weaving remarkable initiatives into a coherent, multi-decade developmental pathway accessible to those in the Global South.",
      color: "border-yellow",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/floral%20pattern%20-%20Jung%20Suk%20hyun-czCaN7g7GO3CRtehxfEpBhtmMcYqnh.jpeg",
    },
    {
      title: "Collective Practice",
      subtitle: "Transforming worldview into embodied action",
      description: "Where worldview becomes embodied, where consistent, intentional practice reshapes not just what we think, but how we perceive, relate, and act.",
      color: "border-crimson",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/designretrospace-Lej4ROEDLMRjlkDkkYE8wc5yFqra7s.jpeg",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-olive font-medium text-sm tracking-wide uppercase">Our Fields</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Fields of Work
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Within our Collective, we serve five main areas of exploration that we consider crucial for responding to our time of crisis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fields.map((field) => (
            <div key={field.title} className={`bg-background p-8 border-t-4 ${field.color}`}>
              <div className="relative h-48 mb-6 overflow-hidden">
                <Image
                  src={field.image}
                  alt={field.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground">{field.title}</h3>
              <p className="mt-2 text-olive text-sm font-medium">{field.subtitle}</p>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{field.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center text-foreground font-medium hover:text-olive transition-colors"
          >
            Learn more about our approach
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flower%20phase-Phoy1ja2ApHEVtJJLu5B2Ty3AnhO9E.jpeg"
          alt="Stylized mountain landscape with moon"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background leading-tight">
          Are you feeling the call?
        </h2>
        
        <p className="mt-8 text-background/80 max-w-2xl mx-auto leading-relaxed">
          If something in you recognizes this work, if you sense that the responses available to us within the existing order are no longer enough, we invite you to explore our fellowship and community.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/fellowship"
            className="inline-flex items-center justify-center px-8 py-3 bg-yellow text-foreground font-medium text-sm tracking-wide hover:bg-yellow/90 transition-colors"
          >
            Explore the Fellowship
          </Link>
          <Link
            href="/learn-more"
            className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-background text-background font-medium text-sm tracking-wide hover:bg-background/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
