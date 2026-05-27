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
          A community of transformation, inquiry and practice nurturing the emergence of a new generation of wisdom-centered leaders—postactivist thinkers, artists, educators, changemakers—who are wrestling with the world's biggest challenges and committed to cultural regeneration and the flourishing of all life.
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
                And many of our attempts to respond have only been deepening the crisis—reproducing the very logic of separation, extraction and control that created it.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Metta Tropical Collective is an experimental, place-based community of transformation, inquiry and practice, calling together postactivist educators, thinkers, artists, leaders and change-makers who refuse to look away. Those convinced that any meaningful response to this moment must be rooted in a fundamentally different relationship with all life — <strong className="text-foreground">self, other, world, and the sacred.</strong>
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We come together not to optimize or fix a broken system in order for it to work for a greater number of humans and species, but to question and transform its foundations. Through  transformative developmental spaces, intimate community, radical inquiry and collective practices, we explore how to shift the ways we see, know, relate, and respond to the challenges of the metacrisis.
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
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                Our work is fundamentally educational.
              </h2>
            </div>

<figure className="my-12 py-12 px-8 md:px-12 bg-foreground text-background relative overflow-hidden rounded-sm">
  {/* Large decorative quote mark */}
  <div className="absolute top-2 left-6 font-serif text-7xl text-yellow/20 leading-none select-none" aria-hidden="true">
    {"\u201C"}
  </div>
  
  <blockquote className="relative z-10 text-center space-y-6">
    {/* Title Line: Bold and prominent */}
    <p className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-yellow block">
      Education is the Metacrisis
    </p>
    
    {/* Visual separator line */}
    <div className="w-12 h-[2px] bg-yellow/30 mx-auto" />
    
    {/* Subtitle Line: Stepped up on mobile and desktop for better presence */}
    <p className="font-serif text-2xl md:text-2xl leading-relaxed text-background/90 italic max-w-2xl mx-auto block">
      It&apos;s time to see planetary crises as a species-wide learning opportunity.
    </p>
  </blockquote>
  
  <figcaption className="mt-8 text-center relative z-10">
    {/* Author Line: Tiny on mobile to balance uppercase/tracking, larger on desktop */}
    <span className="text-yellow/80 font-medium text-xs md:text-sm tracking-widest uppercase">
      — Zak Stein
    </span>
  </figcaption>
</figure>

            <p className="text-muted-foreground leading-relaxed">
              We recognize the escalating nature of the complex and entangled challenges of the moment we’re living in—social, ecological, political, and spiritual breakdowns—not as isolated problems, but as symptoms of deeper cultural patterns: <strong className="text-foreground">ways of perceiving, valuing, and participating in the world that are no longer serving life.</strong>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Enfants%2C%20a%201930s%20photograph%20by%20Andr%C3%A8%20Kert%C3%A8sz-V6EI2vvR62GjAJ9EngLwInOfHDJ5nO.jpeg"
                alt="Native children dancing in circle"
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
      bgAccent: "bg-olive/5",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmos-MkJd4aqeKlMPCnfUcQt9O83ESh9O6Y.webp",
      link: "/about#educational-lab",
    },
    {
      title: "Research & Inquiry",
      subtitle: "Investigating the most pressing questions shaping our world",
      description: "The space of deep investigation into what has brought us here, what is happening now, and what is trying to emerge. Through articles, essays, and collaborative thinking, we contribute to narrative-building and cultural sensemaking.",
      color: "border-cyan",
      bgAccent: "bg-cyan/5",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rosette%20Bearing%20the%20Names%20and%20Titles%20of%20Shah%20Jahan%2C%20vintage%20illustration.%20Image%20by%20rawpixel-xIf2OhkvtW6WrGpOH53bXXaPFg2kKR.jpg",
      link: "/about#research",
    },
    {
      title: "Ecosystem Integration",
      subtitle: "Tending to the emerging fabric of a wisdom-centered culture",
      description: "We map, connect, and weave initiatives into a coherent, multi-decade developmental pathway\u2014making accessible what has until now been scattered, expensive, and out of reach for most people, especially in the Global South.",
      color: "border-yellow",
      bgAccent: "bg-yellow/10",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/floral%20pattern%20-%20Jung%20Suk%20hyun-czCaN7g7GO3CRtehxfEpBhtmMcYqnh.jpeg",
      link: "/about#ecosystem",
    },
    {
      title: "Collective Practice",
      subtitle: "Transforming worldview into embodied action",
      description: "The space where worldview becomes embodied, where consistent, intentional practice reshapes not just what we think, but how we perceive, relate, and act. We practice together: sitting in silence, grieving, listening deeply, working with our bodies.",
      color: "border-crimson",
      bgAccent: "bg-crimson/5",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/designretrospace-Lej4ROEDLMRjlkDkkYE8wc5yFqra7s.jpeg",
      link: "/about#practice",
    },
    {
      title: "Intergenerational Transmission",
      subtitle: "Bridging ancestral wisdom and future generations",
      description: "The recognition that wisdom is not invented but received and passed on. We create spaces where elders, mentors, and emerging leaders meet\u2014where indigenous knowledge, contemplative traditions, and lived experience are honored as essential resources for navigating collapse.",
      color: "border-olive",
      bgAccent: "bg-olive/5",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ind%C3%ADgena%20statue-UEeF4odSMX5yLGlAC6txxib6JBR6dX.jpg",
      link: "/about#intergenerational",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Our Work
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong className="text-foreground">Building Wisdom-Centered Educational Architectures in a Time Between Worlds</strong>
            Supporting individual and collective transformation in response to systemic collapse and in service of a mature, wholesome and life-affirming civilization.
          </p>
        </div>

        {/* Top row - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fields.slice(0, 4).map((field) => (
            <div key={field.title} className={`bg-background p-8 border-t-4 ${field.color} flex flex-col`}>
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
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed flex-1">{field.description}</p>
              <Link
                href={field.link}
                className="mt-6 inline-flex items-center text-sm font-medium text-foreground hover:text-olive transition-colors"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom row - 5th field, full width */}
        <div className="mt-8">
          <div className={`bg-background border-t-4 ${fields[4].color} grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden`}>
            <div className="relative h-64 md:h-auto">
              <Image
                src={fields[4].image}
                alt={fields[4].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-serif text-2xl font-medium text-foreground">{fields[4].title}</h3>
              <p className="mt-2 text-olive text-sm font-medium">{fields[4].subtitle}</p>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{fields[4].description}</p>
              <Link
                href={fields[4].link}
                className="mt-6 inline-flex items-center text-sm font-medium text-foreground hover:text-olive transition-colors"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
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
          If something in you senses that the responses available to us within the existing order are no longer enough, we invite you to explore our fellowship and community.
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
