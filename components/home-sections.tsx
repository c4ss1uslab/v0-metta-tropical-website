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
            className="inline-flex items-center justify-center px-8 py-3 bg-[#D9A01B] text-background font-medium text-sm tracking-wide hover:bg-[#B88610] transition-colors"
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
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-background">
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmos_1234029733-WbYYUpcs7i7gZeQt8QQtmpceC9jLXP.jpeg"
                alt="Tropical Collage"
                fill
                className="object-contain bg-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transition Element */}
      <div className="relative h-16 w-full bg-background">
        <svg className="absolute bottom-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 54">
          <path fill="#F5F5F0" d="M0 54L1440 0V54H0Z"></path>
        </svg>
      </div>

      {/* Educational Work */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                Our response is fundamentally educational.
              </h2>
            </div>

            {/* --- QUOTE OPTION 2: The "Inset Box" (Structured) --- */}
            <figure className="relative my-8 p-8 bg-foreground text-background rounded-sm flex flex-col items-center text-center">
              <span className="absolute top-4 left-4 text-4xl font-serif text-background opacity-40 select-none">
                &ldquo;
              </span>
              <blockquote className="max-w-2xl">
                <p className="font-serif text-lg md:text-xl leading-relaxed">
                  <span className="text-[#D9A01B]">Education is the Metacrisis:</span>
                </p>
                <p className="font-serif text-lg md:text-xl leading-relaxed">
                  It’s time to see planetary crises as a species-wide learning opportunity.
                </p>
              </blockquote>
              <span className="absolute bottom-4 right-4 text-4xl font-serif text-background opacity-40 select-none">
                &rdquo;
              </span>
              <div className="mt-6 w-8 h-px bg-[#D9A01B]/40" />
              <figcaption className="mt-4 text-background/70 font-medium text-xs tracking-widest uppercase">
                Zak Stein
              </figcaption>
            </figure>

            {/* --- QUOTE OPTION 2 --- */}
            <figure className="relative my-8 py-6 border-y border-foreground/10 px-12">
              <span className="absolute top-4 left-4 text-4xl font-serif text-foreground opacity-40 select-none">
                &ldquo;
              </span>
              <blockquote className="text-center">
                <p className="font-serif text-xl md:text-2xl text-foreground leading-snug">
                  Education is the Metacrisis:
                </p>
                <p className="font-serif text-xl md:text-2xl text-foreground leading-snug italic">
                  It’s time to see planetary crises as a species-wide learning opportunity.
                </p>
              </blockquote>
              <span className="absolute bottom-4 right-4 text-4xl font-serif text-foreground opacity-40 select-none">
                &rdquo;
              </span>
              <figcaption className="mt-4 text-center text-[#D9A01B] font-medium text-xs tracking-[0.2em] uppercase">
                — Zak Stein
              </figcaption>
            </figure>

            {/* --- QUOTE OPTION 3: Modern Serif (High Elegance) --- */}
            <figure className="my-10 relative pl-8 border-l-2 border-[#D9A01B]">
              <blockquote className="font-serif text-2xl md:text-3xl text-foreground/90 tracking-tight leading-tight">
                Education is the Metacrisis
                <span className="block text-lg md:text-xl font-sans mt-2 text-muted-foreground tracking-normal italic">
                  It’s time to see planetary crises as a species-wide learning opportunity.
                </span>
              </blockquote>
              <figcaption className="mt-4 text-[#D9A01B] font-semibold text-sm">
                — Zak Stein
              </figcaption>
            </figure>

            <p className="text-muted-foreground leading-relaxed">
              We recognize the escalating nature of the complex and entangled challenges of the moment we’re living in—social, ecological, political, and spiritual breakdowns—not as isolated problems, but as symptoms of deeper cultural patterns: <strong className="text-foreground">ways of perceiving, valuing, and participating in the world that are no longer serving life.</strong>
            </p>

            <p className="text-muted-foreground leading-relaxed">
              If the crises of our time are rooted in the ways we have learned to see, relate, and participate in the world, then responding to them requires more than new solutions. It requires new forms of being — and becoming — human in this world.
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

            <div className="relative aspect-[21/9] overflow-hidden mt-12 mb-0">
              <Image
                src="https://i.postimg.cc/XYvW3DFW/cosmos-1656632365.jpg"
                alt="Community gathering and dancing in circle"
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
      title: "1. Transformative Educational Lab",
      subtitle: "Education for the end of the world as we know it",
      description: "The living laboratory where our Educational Architecture is continuously tested, refined, and deepened. Through retreats, residencies, courses, and immersive programs—developed in-house and in collaboration with fellow educators—we keep experimenting with what it takes to build the foundations for a wisdom-centered education.",
      color: "border-olive",
      textColor: "text-olive",
      image: "https://images.squarespace-cdn.com/content/v1/58b0f6a89f7456906a310ee2/1587855330806-W292FV9W3Q7YLABBVW2A/CeremonyOne.jpg",
      link: "/about#educational-lab",
      stroke: "#3d4a3e" // Dark Olive
    },
    {
      title: "2. Research & Inquiry",
      subtitle: "Investigating the most pressing questions shaping our world",
      description: "The space of deep investigation into what has brought us here, what is happening now, and what is trying to emerge. Through original essays, collaborative thinking, social cartographies and curated collections, we contribute to the kind of narrative-building and cultural sensemaking that can orient wise action in a time of uncertainty.",
      color: "border-cyan",
      textColor: "text-cyan-800",
      image: "https://i.postimg.cc/63CqR1MW/cosmos-830055812.jpg",
      link: "/about#research",
      stroke: "#155e75" // Dark Cyan
    },
    {
      title: "3. Ecosystem Integration",
      subtitle: "Tending to the emerging fabric of a wisdom-centered culture",
      description: "Across the world, countless individuals, initiatives and communities are already shaping more life affirming futures. We map, connect, and weave these fragmented efforts into a more coherent ecosystem of cultural transformation, cultivating the relationships, developmental pathways, and collective intelligence needed for a time between worlds.",
      color: "border-[#D9A01B]", // Amber border
      textColor: "text-[#B88610]", // Readable Amber
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/floral%20pattern%20-%20Jung%20Suk%20hyun-czCaN7g7GO3CRtehxfEpBhtmMcYqnh.jpeg",
      link: "/about#ecosystem",
      stroke: "#D9A01B"
    },
  ]

  return (
    <section className="py-12 lg:py-20 bg-cream">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Our Work
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong className="text-foreground">Building Wisdom-Centered Educational Architectures in a Time Between Worlds</strong>
            <br />
            <em className="italic block mt-2">We work to support individual and collective transformation in response to systemic collapse and in service of a mature, wholesome and life-affirming civilization.</em>
            <span className="block mt-6 text-muted-foreground leading-relaxed">
              Our focus is on 3 main pillars:
            </span>
          </p>
        </div>

        {/* Pillars Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fields.map((field) => (
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
              <p className={`mt-2 ${field.textColor} text-sm font-medium`}>{field.subtitle}</p>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed flex-1">{field.description}</p>
              <Link
                href={field.link}
                className="mt-6 inline-flex items-center text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={field.stroke}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
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
          If something in you senses that most of our world and institutions are not responding adequately to our moment anymore, we invite you to explore our fellowship and community.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/fellowship"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#D9A01B] text-background font-medium text-sm tracking-wide hover:bg-[#B88610] transition-colors"
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