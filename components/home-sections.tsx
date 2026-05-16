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
          Nurturing a community of transformation, inquiry and practice by supporting the emergence of a new generation of wisdom-centered leaders—postactivist thinkers, artists, educators, changemakers who are wrestling with the world's biggest challenges and committed to cultural regeneration and the flourishing of all life.
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

export function IntroductionSection() {
  return (
    <>
      {/* Introduction */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
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

      {/* Educational Work */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                Our work is fundamentally educational.
              </h2>
            </div>

            <blockquote className="border-l-4 border-yellow pl-6 py-2 italic text-foreground/80">
              {'"Education is the Metacrisis: Why it\'s time to see planetary crises as a species-wide learning opportunity." — Zak Stein'}
            </blockquote>

            <p className="text-muted-foreground leading-relaxed">
              We recognize the escalating nature of the complex and entangled challenges of the moment we’re living in—social, ecological, political, and spiritual breakdowns—not as isolated problems, but as symptoms of deeper cultural patterns — ways of perceiving, valuing, and participating in the world that are no longer serving life.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              If the crises of our time are rooted in the ways we have learned to see, relate, and participate in the world, then responding to them requires more than new solutions. It requires new forms of human development.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We are living through a moment that asks something profound of us. Not only technological or political change, but a deeper transformation in human consciousness and the ways we relate to life.
            </p>

           <p className="text-muted-foreground leading-relaxed">
              This moment could become a rite of passage for our species — an opening toward greater wisdom, maturity, and reverence for life. But there is no guarantee it will.
            </p>           

           <p className="text-muted-foreground leading-relaxed">
              Without spaces capable of holding grief, uncertainty, conflict, and transformation, crisis can just as easily intensify polarization, nihilism, tribalism, and collapse into simplistic answers.
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
    </>
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
            In response to this scenario, we are exploring how to build new forms of Relational & Educational Architecture: structures for learning, transformation, practice, and relationships designed to support deeper human transformation, collective sensemaking, community building and wiser forms of participation in the web of life. Structures capable of holding the magnitude of the vow, devotion and surrender of those who feel the depth of our crisis and are committed to reclaiming leadership as a sacred responsibility towards the flourishing of all life.
          </p>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our work is ultimately an inquiry into who we must become and what kind of containers must emerge in this time between worlds in order for us to develop the capacities to imagine, embody and steward a new cultural paradigm rooted in wisdom, relational sensibility, and in service of the flourishing of all life.
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
