import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-cream">
      {/* Absolute Full Background Image (Shifted Right on Desktop) */}
      <div className="absolute inset-0 lg:left-1/3">
        <Image
          src="https://i.postimg.cc/7LVZy16j/designretrospace.jpg"
          alt="Metta Tropical Collective Hero Image"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Mobile Gradient (Top/Bottom) and Desktop Gradient (Left/Right Fade) */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent lg:bg-gradient-to-r lg:from-cream lg:via-cream/80 lg:to-transparent" />
      </div>

      {/* Content Container Panel */}
      <div className="relative z-10 w-full max-w-3xl px-6 py-32 lg:pl-16 lg:pr-12 bg-cream/90 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none min-h-screen lg:min-h-0 flex flex-col justify-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight tracking-tight text-balance">
          Metta Tropical Collective
        </h1>
        
        <p className="mt-8 text-lg text-foreground/90 max-w-xl leading-relaxed text-pretty">
          Nurturing the emergence of a new generation of wisdom-centered leaders wrestling with the world's biggest challenges and committed to cultural regeneration and the flourishing of all life.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-start gap-4">
          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors"
          >
            Discover Our Work
          </Link>
          <Link
            href="/fellowship"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-[#D9A01B] text-background font-medium text-sm tracking-wide hover:bg-[#B88610] transition-colors"
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
                We come together not to optimize or fix a broken system, in order for it to work for a greater number of humans and species, but to question and transform its foundations. Through  transformative developmental spaces, intimate community, radical inquiry and collective practices, we explore how to shift the ways we see, know, relate, and respond to the challenges of the metacrisis.
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

<figure className="w-screen relative left-1/2 -translate-x-1/2 my-12 py-12 md:py-16 bg-[#111827] text-center px-4 overflow-hidden"> 
  <div className="max-w-4xl mx-auto relative px-8 md:px-16">
    {/* Left Background Quote */}
    <span className="absolute left-0 top-[-20px] md:top-[-40px] font-serif text-7xl md:text-9xl text-gray-800 pointer-events-none select-none">
      “
    </span>

    <blockquote className="font-serif text-3xl md:text-4xl text-gray-100 tracking-tight leading-tight z-10 relative"> 
      Education is the Metacrisis 
      <span className="block text-base md:text-lg font-sans mt-3 text-gray-400 tracking-normal italic"> 
        It’s time to see planetary crises as a species-wide learning opportunity. 
      </span> 
    </blockquote> 

    {/* Right Background Quote */}
    <span className="absolute right-0 bottom-[-20px] md:bottom-[-40px] font-serif text-7xl md:text-9xl text-gray-800 pointer-events-none select-none">
      ”
    </span>

    <figcaption className="mt-6 text-[#D9A01B] font-semibold text-sm tracking-wider uppercase z-10 relative"> 
      — Zak Stein 
    </figcaption> 
  </div>
</figure>

      {/* Educational Work */}
      <section className="pt-0 pb-16 lg:pt-0 lg:pb-20bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                Our response is fundamentally educational.
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              We recognize the escalating nature of the complex and entangled challenges of the moment we’re living in—social, ecological, political, and spiritual breakdowns—not as isolated problems, but as symptoms of deeper cultural patterns: ways of perceiving, valuing, and participating in the world that are no longer serving life.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">If the crises of our time are rooted in the ways we have learned to see, relate, and participate in the world, then responding to them requires more than new solutions.</strong> It requires new forms of being — and becoming — human in this world. We are living through a moment that asks something profound of us. Not only technological or political change, but a deeper transformation in human consciousness and the ways we relate to life.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              This moment could become a rite of passage for our species — an opening toward greater wisdom, maturity, and reverence for life. But there is no guarantee it will. Without spaces capable of holding grief, uncertainty, conflict, and transformation, crisis can just as easily intensify polarization, nihilism, tribalism, and collapse into simplistic answers.
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
            <strong className="text-foreground text-lg">Building Wisdom-Centered Educational Architectures in a Time Between Worlds</strong>
            <br />
            <em className="italic block mt-2">Supporting individual and collective transformation in response to systemic collapse and in service of a mature, wholesome and life-affirming civilization.</em>
            <span className="block mt-6 text-muted-foreground leading-relaxed">
              The 3 main pillars of our work are:
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
          Ready to go deeper?
        </h2>
        
        <p className="mt-8 text-background/80 max-w-2xl mx-auto leading-relaxed">
           If you want to discover our work in more depth, we invite you to explore our fellowship and theory of change.
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