import Image from "next/image"
import Link from "next/link"
import { images } from "@/lib/images"

export function HeroSection() {
  return (    
<section className="relative min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-start overflow-hidden bg-cream"> 
  
  {/* =========================================================================
      BACKGROUND & PATTERN LAYERS
     ========================================================================= */}

  {/* MOBILE PATTERN (From Code 2) - Hidden on Desktop */}
  <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 opacity-[0.08] pointer-events-none overflow-hidden mask-gradient lg:hidden">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="woven-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 L20 40 L40 20 L20 0 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground" />
          <path d="M10 20 L20 30 L30 20 L20 10 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground" />
          <circle cx="20" cy="20" r="2" className="fill-foreground" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#woven-pattern)" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-cream/50 to-cream" />
  </div>

  {/* DESKTOP BACKGROUND IMAGE LAYER (From Code 1) - Hidden on Mobile */}
  <div className="hidden lg:block absolute inset-0 lg:left-1/3"> 
    <Image 
      src="https://i.postimg.cc/7LVZy16j/designretrospace.jpg" 
      alt="Metta Tropical Collective Hero Image" 
      fill 
      className="object-cover object-center" 
      priority 
    /> 
    {/* Desktop: keep the left fade */} 
    <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent" /> 
  </div> 

  {/* =========================================================================
      CONTENT PANEL
     ========================================================================= */}
  <div className="relative z-10 w-full lg:w-1/2 max-w-3xl px-6 pt-18 pb-12 lg:py-32 lg:pl-16 lg:pr-12 flex flex-col justify-center">
    
    <span className="text-xs font-semibold tracking-[0.2em] text-[#D9A01B] uppercase mb-4">
      Welcome to the
    </span>

    <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
    Metta Tropical Collective
    </h1>

    <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/90 italic">
    Cultivating the leadership, community, and cultural foundations required for a{" "}
    <strong>radically wiser civilizations</strong> to emerge and take root in
    service of the flourishing of all life.
    </p>

    <div className="mt-22 flex flex-col sm:flex-row items-center justify-start gap-4"> 
      <Link 
        href="/about" 
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-[#111827] text-background font-medium text-sm tracking-wide hover:bg-[#111827]/90 transition-colors" 
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

  {/* =========================================================================
      MOBILE IMAGE LAYER
     ========================================================================= */}

  {/* MOBILE ONLY IMAGE (From Code 2) - Appears underneath content on mobile, hidden on desktop */}
  <div className="mt-6 relative w-full h-[60vh] lg:hidden">
    <Image
      src="https://i.postimg.cc/7LVZy16j/designretrospace.jpg"
      alt="Metta Tropical Collective Hero Image"
      fill
      className="object-cover object-center"
      priority
    />
  </div>

</section>
  )
}

const lineages = [
  {
    numeral: "I.",
    title: "Contemplative Traditions",
    description:
      "The spiritual traditions of the world — especially the Buddhist lineage — which have shaped our understanding of reality and who we are within it. Each offers distinct teachings and practices for grounding a life in the spiritual dimension and aligning action with love, compassion, and truth.",
    inspirations: [
      {
        name: "Plum Village",
        logo: "/logos/plum-village.png",
      },
      {
        name: "CCARE — Center for Compassion and Altruism Research and Education",
        logo: "/logos/ccare.png",
      },
      {
        name: "Vipassana — Goenka Tradition",
        logo: "/logos/vipassana-goenka.png",
      },
      {
        name: "The Center for World Philosophy & Religion",
        logo: "/logos/center-world-philosophy-religion.png",
      },
      {
        name: "Great Vow Zen Monastery",
        logo: "/logos/great-vow-zen-monastery.png",
      },
    ],
  },
  {
    numeral: "II.",
    title: "Systemic Inquiry",
    description:
      "The rigor of systems and complexity science, the regenerative movement, decolonial thought, metamodernism, and the metacrisis conversation — which have helped us perceive the historical, ecological, and civilizational patterns producing this moment, rather than reacting to its symptoms.",
    inspirations: [
      {
        name: "Schumacher College",
        logo: "/logos/schumacher-college.png",
      },
      {
        name: "Warm Data Lab",
        logo: "/logos/warm-data-lab.png",
      },
      {
        name: "The Civilization Research Institute",
        logo: "/logos/civilization-research-institute.png",
      },
      {
        name: "Gesturing Towards Decolonial Futures",
        logo: "/logos/gtdf.png",
      },
      {
        name: "Perspectiva",
        logo: "/logos/perspectiva.png",
      },
    ],
  },
  {
    numeral: "III.",
    title: "Developmental Practice",
    description:
      "The fields of human development, depth psychology, parts work, trauma integration, emotional regulation, and relational practice — which help us understand how human beings actually grow up, mature, and come to embody responsible ways of relating to all life.",
    inspirations: [
      {
        name: "Aletheia Coaching",
        logo: "/logos/aletheia-coaching.png",
      },
      {
        name: "Internal Family Systems",
        logo: "/logos/internal-family-systems.png",
      },
      {
        name: "Transformational Connection",
        logo: "/logos/transformational-connection.png",
      },
      {
        name: "ART International — Authentic Relating Training",
        logo: "/logos/art-international.png",
      },
      {
        name: "Animas Valley Institute",
        logo: "/logos/animas-valley-institute.png",
      },
    ],
  },
  {
    numeral: "IV.",
    title: "Ancestral Ways of Being",
    description:
      "The embodied, ecological, and land-based wisdom carried by Indigenous, quilombola, and Afro-diasporic communities, who, despite centuries of erasure and forced collapse, have nurtured, carried, and protected ways of seeing, being, and relating that the rest of the world is only now beginning to understand it needs.",
    icon: "https://i.postimg.cc/rFFDN4hp/Cocar-INdigena.jpg",
    inspirations: [
      {
        name: "Kilombo Tenondé",
        logo: "/logos/kilombo-tenonde.png",
      },
      {
        name: "Tenondé Porã",
        logo: "/logos/tenonde-pora.png",
      },
      {
        name: "Ciclo Selvagem",
        logo: "/logos/ciclo-selvagem.png",
      },
      {
        name: "Teia dos Povos",
        logo: "/logos/teia-dos-povos.png",
      },
      {
        name: "Instituto Favela da Paz",
        logo: "/logos/instituto-favela-da-paz.png",
      },
    ],
  },
]

export function IntroductionSection() {
  return (
    <>
      {/* Introduction */}
      <section className="bg-background pt-12 pb-12 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="mt-2 font-serif text-3xl font-medium text-foreground md:text-4xl">
                  We are living through the unraveling of a world whose stories of success are starting to collapse.
                </h2>
              </div>

              <p className="leading-relaxed text-muted-foreground">
                And many of our attempts to respond to our predicament have only deepened it—reproducing the very logic of separation, extraction and control that created it.
              </p>

              <p className="leading-relaxed text-muted-foreground">
                Metta Tropical Collective is an experimental, place-based
                community of transformation, inquiry and practice, calling
                together postactivist educators, thinkers, artists, leaders and
                change-makers who refuse to look away from the crisis of our
                times. Those convinced that any meaningful response to this
                moment must be rooted in a fundamentally different relationship
                with all life —{" "}
                <strong className="text-foreground">
                  self, other, world, and the sacred.
                </strong>
              </p>

              <p className="leading-relaxed text-muted-foreground">
                We come together not to optimize a broken system or try to make it work for a greater number of humans and species, but to question and transform its foundations. Through
                transformative developmental spaces, intimate community,
                radical inquiry and collective practices, we explore the
                conditions required to shift the ways we see, know, relate, and
                respond to the challenges of the metacrisis.
              </p>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:sticky lg:top-24">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmos_1234029733-WbYYUpcs7i7gZeQt8QQtmpceC9jLXP.jpeg"
                alt="Tropical Collage"
                fill
                className="bg-foreground object-contain"
              />
            </div>
          </div>
        </div>
      </section>

{/* Why We Exist */}
<section className="isolate bg-[#F8F6F1] py-16 lg:py-24">
  <div className="mx-auto max-w-6xl px-6 lg:px-8">
    {/* Header */}
    <div className="mb-10">
      <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
        Why We Exist
      </h2>
    </div>

    {/* Opening Text, Historical Examples, and Image */}
    <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
      {/* Left Column */}
      <div className="space-y-8">
        <p className="leading-relaxed text-muted-foreground">
          Throughout history, in times of societal collapse, oppression, and
          rupture, the failures and contradictions of our dominant ways of
          seeing, being, and relating in the world become impossible to ignore.
          It is during these moments that new forms of education and community
          have always emerged to take on the responsibility of envisioning a
          radically different future and carrying forward what would otherwise
          be lost.
        </p>

        {/* Historical Examples */}
        <div className="space-y-4">
          <p className="leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">
              Mystery Schools
            </strong>{" "}
            — initiating seekers into hidden wisdom
          </p>

          <p className="leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">
              Monasteries
            </strong>{" "}
            — sustaining contemplative life and learning across centuries
          </p>

          <p className="leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">
              Terreiros
            </strong>{" "}
            — carrying cosmology and initiation through centuries of erasure
          </p>

          <p className="leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">
              Folk Schools
            </strong>{" "}
            — educating for life rather than for credentials
          </p>

          <p className="leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">
              Quilombos
            </strong>{" "}
            — building free life outside a system designed to deny it
          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="relative min-h-[460px] overflow-hidden bg-[#F8F6F1] lg:min-h-0">
        <Image
          src="https://i.postimg.cc/598p7R5B/image-from-rawpixel-id-6605610-jpeg-(1).jpg"
          alt="Historical illustration representing ancestral, contemplative, and initiatory traditions"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain object-center mix-blend-darken"
        />
      </div>
    </div>

    {/* Full-Width Continuation */}
    <div className="mt-10 space-y-8">
      <p className="leading-relaxed text-muted-foreground">
        Each created the structures, practices, relational life, pedagogies,
        and rites of passage needed to orient human beings toward what is most
        meaningful, and to develop the capacities their moment required. They
        were not schools in the modern sense. They were{" "}
        <strong className="font-semibold text-foreground">
          architectures of transformation
        </strong>{" "}
        — places where new ways of being could be practiced until they became
        real.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        We are living through such a moment again, and our commitment is to build
        the architectures of transformation this time is asking for.
      </p>

{/* Wisdom-Centered Educational Architecture Highlight */}
<div className="space-y-6 rounded-r-xl border-l-4 border-[#D9A01B] bg-[#FFF9E9] px-6 py-7 md:px-8 md:py-8">
  <p className="leading-relaxed text-muted-foreground">
    We call them{" "}
    <strong className="font-semibold text-foreground">
      wisdom-centered educational architectures
    </strong>
    : developmental ecologies of practice, training, ritual, inquiry, and
    relationship, built to hold the long arc of human formation this moment
    demands — not preparing people to succeed in the world as it is, but
    supporting them to question its foundations and develop the spiritual
    depth, relational maturity, systemic understanding, and reverence for life
    required to hospice a world that is ending while cultivating the
    foundations of what comes next.
  </p>

  <p className="leading-relaxed text-muted-foreground">
    These architectures exist to hold the magnitude of aspiration and devotion
    of those who feel the depth of our crisis in their bones, long to give their
    lives to something worthy of this moment, yet struggle to find communities
    capable of recognizing, accompanying, and nurturing such commitment.
  </p>

  <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
    <p className="font-medium leading-relaxed text-foreground">
      This is what we are building.
    </p>

    <Link
      href="/educational-architecture"
      className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#D9A01B] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#B88610]"
    >
      Learn about our Educational Architecture
    </Link>
  </div>
</div>
    </div>
  </div>
</section>

{/* Confluence of Lineages */}
<section className="relative overflow-hidden bg-white py-16 lg:py-24">
  <div className="mx-auto max-w-6xl px-6 lg:px-8">
    {/* Header and Introduction */}
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-6 text-left">
        <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
          A Confluence of Lineages
        </h2>
      </div>

      {/* Introduction */}
      <div className="mb-8 space-y-6 text-left">
        <p className="text-lg font-medium leading-relaxed text-[#D9A01B]">
          We are rooted in Brazil and Latin America — shaped by this territory,
          this language, and its histories.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          Across the world, remarkable individuals, communities, and initiatives
          are already carrying the seeds of a new cultural paradigm. Spiritual
          practitioners, educators, artists, systems thinkers, regenerative
          projects, and Indigenous communities have been creating and protecting
          essential cosmologies, practices, ideas, wisdom, and forms of social
          organization for navigating the metacrisis.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          Yet most remain at the edges of our culture, isolated within their own
          communities, languages, geographies, or fields of practice. They rarely
          meet each other, and almost never within a container that could hold
          them over time, around a shared purpose, in service of forming a
          different kind of leadership. Without that, each remains an offering
          someone might encounter, rather than a path someone could walk.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          This is what our educational architecture is for: to offer a home where
          these ways of seeing, being, and knowing can come back into relationship
          — and where the depth of understanding, practice, and transformation
          this moment asks of us becomes possible.
        </p>

        <p className="font-medium leading-relaxed text-foreground">
          Our work emerges from the confluence of four main lineages:
        </p>
      </div>
    </div>

    {/* Lineages and Decorative Forms */}
    <div className="relative mx-auto max-w-4xl">
      {/* Upper-left decorative form */}
      <div
        className="pointer-events-none absolute -left-44 top-4 hidden h-48 w-48 xl:block"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M120 13C157 13 190 34 210 65C230 96 235 137 216 169C197 201 155 222 118 225C81 228 42 211 23 180C4 149 6 104 25 72C44 40 83 13 120 13Z"
            fill="#DDE8C7"
            fillOpacity="0.5"
          />

          <path
            d="M120 39C150 39 177 55 192 80C207 105 209 137 194 162C179 187 149 202 119 202C89 202 58 188 43 163C28 138 30 104 46 79C62 54 90 39 120 39Z"
            fill="#F2D989"
            fillOpacity="0.55"
          />

          <path
            d="M119 67C141 67 161 78 172 96C183 114 183 137 172 155C161 173 141 184 119 184C97 184 77 173 66 155C55 137 55 114 66 96C77 78 97 67 119 67Z"
            fill="#BFD7A7"
            fillOpacity="0.65"
          />

          <path
            d="M120 94C135 94 148 102 155 114C162 126 162 141 155 153C148 165 135 172 120 172C105 172 92 165 85 153C78 141 78 126 85 114C92 102 105 94 120 94Z"
            fill="#E5B93F"
            fillOpacity="0.65"
          />
        </svg>
      </div>

      {/* Lower-right decorative form */}
      <div
        className="pointer-events-none absolute -right-48 bottom-0 hidden h-56 w-56 xl:block"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 260 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M130 12C169 12 207 33 228 67C249 101 249 145 229 180C209 215 169 241 128 244C87 247 47 228 24 194C1 160 3 113 25 78C47 43 91 12 130 12Z"
            fill="#E4EDCF"
            fillOpacity="0.55"
          />

          <path
            d="M130 42C161 42 191 59 207 85C223 111 223 144 207 170C191 196 161 216 129 216C97 216 67 198 51 172C35 146 35 111 52 85C69 59 99 42 130 42Z"
            fill="#EBCB64"
            fillOpacity="0.5"
          />

          <path
            d="M130 72C154 72 176 85 188 105C200 125 200 149 188 169C176 189 154 202 130 202C106 202 84 189 72 169C60 149 60 125 72 105C84 85 106 72 130 72Z"
            fill="#BCD39C"
            fillOpacity="0.68"
          />

          <path
            d="M130 103C146 103 160 111 168 124C176 137 176 153 168 166C160 179 146 187 130 187C114 187 100 179 92 166C84 153 84 137 92 124C100 111 114 103 130 103Z"
            fill="#F2D989"
            fillOpacity="0.75"
          />
        </svg>
      </div>

      {/* Interactive Lineages */}
      <div className="relative z-10 mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {lineages.map((lineage) => (
          <article
            key={lineage.title}
            className="group relative flex h-full flex-col rounded-xl border border-gray-200 bg-[#FFFDF6] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D9A01B]/50 hover:shadow-[0_18px_45px_rgba(17,24,39,0.08)]"
          >
            <div>
              {/* Optional lineage icon */}
              {lineage.icon && (
                <div className="absolute right-5 top-5 h-14 w-14 overflow-hidden rounded-full border border-[#D9A01B]/30 bg-white shadow-sm">
                  <Image
                    src={lineage.icon}
                    alt={`${lineage.title} lineage symbol`}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
              )}

              <div className={lineage.icon ? "pr-16" : ""}>
                <span className="mb-2 block font-mono text-sm font-bold text-[#D9A01B]">
                  {lineage.numeral}
                </span>

                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                  {lineage.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {lineage.description}
              </p>
            </div>

            {/* Expandable Sources of Inspiration */}
            <details className="group/details mt-auto pt-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 border-t border-[#D9A01B]/20 pt-4 text-left text-sm font-medium text-foreground opacity-100 outline-none transition-all duration-300 hover:text-[#B88610] focus-visible:ring-2 focus-visible:ring-[#D9A01B] focus-visible:ring-offset-4 md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100 group-open/details:translate-y-0 group-open/details:opacity-100 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="group-open/details:hidden">
                    Explore sources of inspiration
                  </span>

                  <span className="hidden group-open/details:inline">
                    Close sources of inspiration
                  </span>
                </span>

                <svg
                  className="h-4 w-4 shrink-0 text-[#D9A01B] transition-transform duration-300 group-open/details:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </summary>

              <div className="pt-5">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-[#B88610]">
                  Selected sources of inspiration
                </p>

                <ul className="space-y-3">
                  {lineage.inspirations.map((institution) => (
                    <li
                      key={institution.name}
                      className="group/institution flex items-center gap-4 rounded-lg border border-gray-200/80 bg-white/80 p-3 transition-all duration-200 hover:border-[#D9A01B]/40 hover:bg-white"
                    >
                      <div className="relative flex h-12 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white">
                        <Image
                          src={institution.logo}
                          alt={`${institution.name} logo`}
                          fill
                          sizes="64px"
                          className="object-contain p-1.5 opacity-80 grayscale transition-all duration-300 group-hover/institution:opacity-100 group-hover/institution:grayscale-0"
                        />
                      </div>

                      <span className="text-sm font-medium leading-snug text-foreground">
                        {institution.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">
                  These references indicate sources of learning and inspiration,
                  not necessarily formal partnerships or affiliations.
                </p>
              </div>
            </details>
          </article>
        ))}
      </div>
    </div>

    {/* Conclusion */}
    <div className="mx-auto max-w-4xl space-y-6 text-left">
      <p className="leading-relaxed text-muted-foreground">
        We have been informed and transformed by these lineages over many years,
        and we come to them with humility, curiosity, and gratitude, not
        claiming to live fully within any of them and recognizing that each
        carries both profound gifts and real limitations.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        What we are attempting is neither the importing of Global North
        frameworks nor the romanticization of ancestral wisdom. It is something
        more demanding: holding them in genuine relationship, and letting each
        challenge, deepen, and transform the others — and us. We are interested
        in what becomes possible when systemic rigor, contemplative depth,
        developmental practice, and the living intelligence of this territory
        meet, and in how such a convergence can transform the ways we see,
        relate, and act in the world.
      </p>

      <p className="font-medium leading-relaxed text-foreground">
        From this encounter, new forms of pedagogy, community, and culture can
        emerge — forms this century requires, and that could only take root
        here, where these lineages have a reason to meet, and where the urgency
        of this moment makes their separation no longer affordable.
      </p>
    </div>
  </div>
</section>

      {/* Zak Stein Quote */}
      <figure className="relative left-1/2 my-12 w-screen -translate-x-1/2 overflow-hidden bg-[#111827] px-4 py-12 text-center md:py-16">
        <div className="relative mx-auto max-w-4xl px-8 md:px-16">
          {/* Left Background Quote */}
          <span className="pointer-events-none absolute left-0 top-[-20px] select-none font-serif text-7xl text-gray-800 md:top-[-40px] md:text-9xl">
            “
          </span>

          <blockquote className="relative z-10 font-serif text-3xl leading-tight tracking-tight text-gray-100 md:text-4xl">
            Education is the Metacrisis:
            <span className="mt-3 block font-sans text-base font-normal tracking-normal text-gray-400 italic md:text-lg">
              It’s time to see our planetary crises as a species-wide learning
              opportunity.
            </span>
          </blockquote>

          {/* Right Background Quote */}
          <span className="pointer-events-none absolute right-0 bottom-[-20px] select-none font-serif text-7xl text-gray-800 md:bottom-[-40px] md:text-9xl">
            ”
          </span>

          <figcaption className="relative z-10 mt-6 text-sm font-semibold tracking-wider text-[#D9A01B] uppercase">
            — Zak Stein
          </figcaption>
        </div>
      </figure>
    </>
  )
}

export function FieldsOfWorkSection() {
  const fields = [
    {
      title: "1. Transformative Educational Lab",
      subtitle: "Education for the end of the world as we know it",
      description:
        "The living laboratory where our educational architecture is continuously tested, refined, and deepened. Through retreats, residencies, courses, and immersive programs — developed in-house and in collaboration with fellow educators — we keep experimenting with what it actually takes to form human beings prepared for this moment.",
      color: "border-olive",
      textColor: "text-olive",
      image:
        "https://images.squarespace-cdn.com/content/v1/58b0f6a89f7456906a310ee2/1587855330806-W292FV9W3Q7YLABBVW2A/CeremonyOne.jpg",
      link: "/about#educational-lab",
      stroke: "#3d4a3e",
    },
    {
      title: "2. Research & Inquiry",
      subtitle: "Investigating the questions shaping our world",
      description:
        "Deep investigation into what has brought us here, what is happening now, and what is trying to emerge. Through transdisciplinary research, original essays, collaborative thinking, social cartographies, and curated collections, we contribute to the narrative-building and cultural sensemaking that can orient wise action in a time of uncertainty.",
      color: "border-cyan",
      textColor: "text-cyan-800",
      image: "https://i.postimg.cc/63CqR1MW/cosmos-830055812.jpg",
      link: "/about#research",
      stroke: "#155e75",
    },
    {
      title: "3. Ecosystem Integration",
      subtitle: "Tending to the emerging fabric of a wisdom-centered culture",
      description:
        "Mapping, connecting, and weaving the scattered efforts already underway — cultivating the relationships, developmental pathways, and collective intelligence that a fragmented field cannot generate on its own.",
      color: "border-[#D9A01B]",
      textColor: "text-[#B88610]",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/floral%20pattern%20-%20Jung%20Suk%20hyun-czCaN7g7GO3CRtehxfEpBhtmMcYqnh.jpeg",
      link: "/about#ecosystem",
      stroke: "#D9A01B",
    },
  ]

  return (
    <section className="bg-cream py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header and Introduction */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
            Our Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-serif text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            Building wisdom-centered educational architectures in a time
            between worlds
          </p>

          <p className="mx-auto mt-8 max-w-3xl leading-relaxed text-muted-foreground">
            No one yet knows how to build these architectures. There is no
            established field, no proven blueprint or model to rely on. What
            exists are fragments of an answer — scattered across traditions,
            communities, and experiments. Which is precisely why the work is
            focusing on three things at once: experimental, prototyping the
            containers this moment needs; investigative, reflecting in public
            about what we are learning; and connective, weaving a trustworthy
            ecosystem to help us build this.
          </p>

          <p className="mt-8 font-medium leading-relaxed text-foreground">
            Our work focuses on three main pillars:
          </p>
        </div>

        {/* Pillars Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fields.map((field) => (
            <article
              key={field.title}
              className={`flex flex-col border-t-4 bg-background p-8 ${field.color}`}
            >
              <div className="relative mb-6 h-48 overflow-hidden">
                <Image
                  src={field.image}
                  alt={field.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <h3 className="font-serif text-2xl font-medium text-foreground">
                {field.title}
              </h3>

              <p className={`mt-2 text-sm font-medium ${field.textColor}`}>
                {field.subtitle}
              </p>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {field.description}
              </p>

              <Link
                href={field.link}
                className="mt-6 inline-flex items-center text-sm font-medium text-foreground transition-opacity hover:opacity-70"
              >
                Learn More

                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={field.stroke}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

{/* Why Wisdom? Section Content */}
<section className="relative left-1/2 right-1/2 -mx-[50vw] w-full bg-white pt-0 pb-16 lg:pt-0 lg:pb-20 xl:w-screen">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">
    <div className="space-y-8">
      <div className="mb-16 text-center">
        <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
          Why Wisdom?
        </h2>
      </div>

      <p className="leading-relaxed text-muted-foreground">
        Within our work, we often draw from a{" "}
        <a
          href="https://decolonialfutures.net/wp-content/uploads/2024/05/gtdf-depth-education-wireframe-may-2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 underline transition-opacity hover:opacity-80"
        >
          framework
        </a>{" "}
        developed by Daniel Schmachtenberger and Nate Hagens, and later evolved
        by Vanessa Machado de Oliveira that distinguishes between narrow boundary
        intelligence, wide boundary intelligence, and wisdom—sometimes called
        whole-shebang wisdom.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        We find this framework helpful not only for understanding how humans
        relate to complexity and systemic challenges, but for clarifying the
        direction our collective efforts must ultimately move toward: wisdom.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        The Center for Humane Technology describes one of the defining
        challenges of our time as{" "}
        <a
          href="https://secondrenaissance.net/glossary/Wisdom+Gap"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 underline transition-opacity hover:opacity-80"
        >
          the wisdom gap
        </a>
        : the growing divide between rising global complexity and
        humanity&apos;s capacity to respond with sufficient coherence,
        discernment, and care. We live in a world overflowing with information,
        intelligence, and technological power, yet increasingly unable to
        navigate wisely the complexity we have created.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        In this sense, the metacrisis is fundamentally a wisdom crisis.
      </p>

      {/* Wisdom Definition Callout */}
      <div className="my-6 rounded-r-xl border-l-4 border-[#D9A01B] bg-[#FFFDF6] p-6">
        <p className="font-serif text-lg leading-relaxed text-foreground italic md:text-xl">
          By wisdom, we do not mean expertise, intelligence, or the accumulation
          of knowledge. We mean the capacity to perceive reality accurately, to
          discern what truly matters in a given context, and to participate in
          life in ways that serve the flourishing of the larger whole — a
          capacity grounded in a deep understanding of the central existential
          questions of life.
        </p>
      </div>

      <p className="leading-relaxed text-muted-foreground">
        Wisdom is deepened by engaging with reality and the world through{" "}
        <a
          href="https://people-shift.com/articles/the-4-ps-of-knowing-per-john-vervaeke/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 underline transition-opacity hover:opacity-80"
        >
          multiple ways of knowing
        </a>{" "}
        and depths of relationality, expanding our capacity to sense what is
        needed in a given moment and respond accordingly.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        It allows us to hold complexity with humility and care, and to move
        beyond fragmented grasps for certainty or control. It shifts our
        relationship with the world from subject-object to subject-subject: from
        managing reality to participating within it. To speak of wisdom,
        ultimately, is to speak of integration — reuniting what modernity has
        fragmented.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        As we face the consequences of the metacrisis, the cost of continuing to
        incentivize narrow-boundary intelligence becomes increasingly
        catastrophic. What this moment requires is a societal movement from
        narrow boundary, to wide boundary, and eventually toward wisdom. Yet the
        infrastructures capable of cultivating such transition remain largely
        absent from modern society.
      </p>

      <p className="font-medium leading-relaxed text-foreground">
        Our work is an attempt to help create them.
      </p>
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
      description:
        "The living laboratory where our educational architecture is continuously tested, refined, and deepened. Through retreats, residencies, courses, and immersive programs — developed in-house and in collaboration with fellow educators — we keep experimenting with what it actually takes to form human beings prepared for this moment.",
      color: "border-olive",
      textColor: "text-olive",
      image:
        "https://images.squarespace-cdn.com/content/v1/58b0f6a89f7456906a310ee2/1587855330806-W292FV9W3Q7YLABBVW2A/CeremonyOne.jpg",
      link: "/about#educational-lab",
      stroke: "#3d4a3e",
    },
    {
      title: "2. Research & Inquiry",
      subtitle: "Investigating the questions shaping our world",
      description:
        "Deep investigation into what has brought us here, what is happening now, and what is trying to emerge. Through transdisciplinary research, original essays, collaborative thinking, social cartographies, and curated collections, we contribute to the narrative-building and cultural sensemaking that can orient wise action in a time of uncertainty.",
      color: "border-cyan",
      textColor: "text-cyan-800",
      image: "https://i.postimg.cc/63CqR1MW/cosmos-830055812.jpg",
      link: "/about#research",
      stroke: "#155e75",
    },
    {
      title: "3. Ecosystem Integration",
      subtitle: "Tending to the emerging fabric of a wisdom-centered culture",
      description:
        "Mapping, connecting, and weaving the scattered efforts already underway — cultivating the relationships, developmental pathways, and collective intelligence that a fragmented field cannot generate on its own.",
      color: "border-[#D9A01B]",
      textColor: "text-[#B88610]",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/floral%20pattern%20-%20Jung%20Suk%20hyun-czCaN7g7GO3CRtehxfEpBhtmMcYqnh.jpeg",
      link: "/about#ecosystem",
      stroke: "#D9A01B",
    },
  ]

  return (
    <section className="bg-cream py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header and Introduction */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
            Our Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-serif text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            Building wisdom-centered educational architectures in a time
            between worlds
          </p>

          <p className="mx-auto mt-8 max-w-3xl leading-relaxed text-muted-foreground">
            No one yet knows how to build these architectures. There is no
            established field, no proven blueprint or model to rely on. What
            exists are fragments of an answer — scattered across traditions,
            communities, and experiments. Which is precisely why the work is
            focusing on three things at once: experimental, prototyping the
            containers this moment needs; investigative, reflecting in public
            about what we are learning; and connective, weaving a trustworthy
            ecosystem to help us build this.
          </p>

          <p className="mt-8 font-medium leading-relaxed text-foreground">
            Our work focuses on three main pillars:
          </p>
        </div>

        {/* Pillars Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fields.map((field) => (
            <article
              key={field.title}
              className={`flex flex-col border-t-4 bg-background p-8 ${field.color}`}
            >
              <div className="relative mb-6 h-48 overflow-hidden">
                <Image
                  src={field.image}
                  alt={field.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <h3 className="font-serif text-2xl font-medium text-foreground">
                {field.title}
              </h3>

              <p className={`mt-2 text-sm font-medium ${field.textColor}`}>
                {field.subtitle}
              </p>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {field.description}
              </p>

              <Link
                href={field.link}
                className="mt-6 inline-flex items-center text-sm font-medium text-foreground transition-opacity hover:opacity-70"
              >
                Learn More

                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={field.stroke}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
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

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-medium leading-tight text-background md:text-4xl lg:text-5xl">
          Ready to go deeper?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-background/80">
          If you want to discover our work in more depth, we invite you to
          explore our Fellowship and Theory of Change.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/fellowship"
            className="inline-flex items-center justify-center bg-[#D9A01B] px-8 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-[#B88610]"
          >
            Explore the Fellowship
          </Link>

          <Link
            href="/theory-of-change"
            className="inline-flex items-center justify-center border border-background bg-transparent px-8 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-background/10"
          >
            Theory of Change
          </Link>
        </div>
      </div>
    </section>
  )
}
