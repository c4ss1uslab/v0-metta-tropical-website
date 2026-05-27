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
                Our work is fundamentally educational.
              </h2>
            </div>

            {/* --- QUOTE OPTION 2: The "Inset Box" (Structured) --- */}

<figure className="relative my-8 p-8 bg-foreground text-background rounded-sm flex flex-col items-center text-center">
  
  {/* Opening quote: changed text-foreground to text-background so it's visible on the dark box */}
  <span className="absolute top-4 left-4 text-4xl font-serif text-background opacity-40 select-none">
    &ldquo;
  </span>

  <blockquote className="max-w-2xl">
    <p className="font-serif text-lg md:text-xl leading-relaxed">
      <span className="text-[#D9A01B]">Education is the Metacrisis:</span>
    </p>
    <p className="font-serif text-lg md:text-xl leading-relaxed">
      Why it’s time to see planetary crises as a species-wide learning opportunity.
    </p>
  </blockquote>

  {/* Closing quote: changed text-foreground to text-background */}
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
  {/* Opening quote at the top-left */}
  <span className="absolute top-4 left-4 text-4xl font-serif text-foreground opacity-40 select-none">
    &ldquo;
  </span>

  <blockquote className="text-center">
    <p className="font-serif text-xl md:text-2xl text-foreground leading-snug">
      Education is the Metacrisis:
    </p>
    <p className="font-serif text-xl md:text-2xl text-foreground leading-snug italic">
      Why it’s time to see planetary crises as a species-wide learning opportunity.
    </p>
  </blockquote>

  {/* Closing quote at the bottom-right */}
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
                  Why it’s time to see planetary crises as a species-wide learning opportunity.
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
      description: "A living laboratory where our Educational Architecture is continuously tested, refined, and deepened through retreats, residencies, courses, and immersive programs.",
      color: "border-olive",
      textColor: "text-olive",
      image: "https://images.squarespace-cdn.com/content/v1/58b0f6a89f7456906a310ee2/1587855330806-W292FV9W3Q7YLABBVW2A/CeremonyOne.jpg",
      link: "/about#educational-lab",
      stroke: "#3d4a3e" // Dark Olive
    },
    {
      title: "2. Research & Inquiry",
      subtitle: "Investigating the most pressing questions shaping our world",
      description: "The space of deep investigation into what has brought us here, what is happening now, and what is trying to emerge. Through articles, essays, and collaborative thinking, we contribute to narrative-building and cultural sensemaking.",
      color: "border-cyan",
      textColor: "text-cyan-800",
      image: "https://i.postimg.cc/63CqR1MW/cosmos-830055812.jpg",
      link: "/about#research",
      stroke: "#155e75" // Dark Cyan
    },
    {
      title: "3. Ecosystem Integration",
      subtitle: "Tending to the emerging fabric of a wisdom-centered culture",
      description: "We map, connect, and weave initiatives into a coherent, multi-decade developmental pathway\u2014making accessible what has until now been scattered, expensive, and out of reach for most people, especially in the Global South.",
      color: "border-[#D9A01B]", // Amber border
      textColor: "text-[#B88610]", // Readable Amber
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/floral%20pattern%20-%20Jung%20Suk%20hyun-czCaN7g7GO3CRtehxfEpBhtmMcYqnh.jpeg",
      link: "/about#ecosystem",
      stroke: "#D9A01B"
    },
    {
      title: "4. Collective Practice",
      subtitle: "Transforming worldview into embodied action",
      description: "The space where worldview becomes embodied, where consistent, intentional practice reshapes not just what we think, but how we perceive, relate, and act. We practice together: sitting in silence, grieving, listening deeply, working with our bodies.",
      color: "border-crimson",
      textColor: "text-crimson",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/designretrospace-Lej4ROEDLMRjlkDkkYE8wc5yFqra7s.jpeg",
      link: "/about#practice",
      stroke: "#991b1b" // Dark Crimson
    },
    {
      title: "5. Intergenerational Transmission",
      subtitle: "Bridging ancestral wisdom and future generations",
      description: "The recognition that wisdom is not invented but received and passed on. We create spaces where elders, mentors, and emerging leaders meet\u2014where indigenous knowledge, contemplative traditions, and lived experience are honored as essential resources for navigating collapse.",
      color: "border-indigo-800", // New distinct color
      textColor: "text-indigo-900",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ind%C3%ADgena%20statue-UEeF4odSMX5yLGlAC6txxib6JBR6dX.jpg",
      link: "/about#intergenerational",
      stroke: "#3730a3" // Dark Indigo
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
  {/* Changed to a block span with a top margin */}
  <span className="block mt-6 text-muted-foreground leading-relaxed">
    Our focus is on 5 pillars:
  </span>
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
              <p className={`mt-2 ${fields[4].textColor} text-sm font-medium`}>{fields[4].subtitle}</p>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{fields[4].description}</p>
              <Link
                href={fields[4].link}
                className="mt-6 inline-flex items-center text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={fields[4].stroke}>
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