import Image from "next/image"
import Link from "next/link"

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

    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight tracking-tight text-balance"> 
      Metta Tropical Collective 
    </h1> 
     
    <p className="mt-18 text-base text-foreground/90 max-w-xl leading-relaxed text-pretty italic"> 
      Nurturing the emergence of a new generation of <strong>wisdom-centered leaders</strong> wrestling with the world's biggest challenges and committed to cultural regeneration and the flourishing of all life. 
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
                  We are living through the unraveling of a world that can no
                  longer sustain its own promises.
                </h2>
              </div>

              <p className="leading-relaxed text-muted-foreground">
                And many of our attempts to respond have only been deepening the
                crisis—reproducing the very logic of separation, extraction and
                control that created it.
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
                We come together not to optimize or fix a broken system, in
                order for it to work for a greater number of humans and species,
                but to question and transform its own foundations. Through
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

      {/* Confluence of Lineages */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Header */}
          <div className="mb-6 max-w-5xl text-left">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              A Confluence of Lineages
            </h2>
          </div>

          {/* Introduction */}
          <div className="mb-8 max-w-4xl space-y-6 text-left">
            <p className="text-lg font-medium leading-relaxed text-[#D9A01B]">
              We are rooted in Brazil and Latin America — shaped by this
              territory, this language, this soil, and its histories.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Our collective is committed to bringing back into relationship
              ways of knowing that modernity has often separated from one
              another. We create spaces where a wide range of epistemologies,
              traditions, and forms of intelligence can meet in generative
              dialogue, offering the conditions for the depth of understanding,
              practice, and transformation this moment requires.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              At the heart of our work is the creation of what we call a{" "}
              <strong className="font-bold text-foreground">
                Wisdom-Centered Educational Architecture
              </strong>
              : a long-term developmental ecology of practices, inquiries,
              trainings, and relationships designed to hold the long arc of
              human formation needed for wiser collective sensemaking, communal
              life, and forms of participation in the web of life. It is within
              this architecture that multiple lineages come together to evolve
              one another and transform ourselves into the kinds of beings
              capable of serving the flourishing of all life in a time of
              metacrisis.
            </p>

            <p className="font-medium leading-relaxed text-foreground">
              Our work emerges at the intersection of four main lineages:
            </p>
          </div>

          {/* Four Lineages */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* I. Contemplative Traditions */}
            <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-[#FFFDF6] p-6">
              <div>
                <span className="mb-2 block font-mono text-sm font-bold text-[#D9A01B]">
                  I.
                </span>

                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                  Contemplative Traditions
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  The spiritual traditions of the world — especially the
                  Buddhist lineage — which have shaped our understanding of
                  reality and who we are within it, and which uniquely offer
                  teachings and practices for grounding a life in the spiritual
                  dimension and aligning action with love, compassion, and
                  truth.
                </p>
              </div>
            </div>

            {/* II. Systemic Inquiry */}
            <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-[#FFFDF6] p-6">
              <div>
                <span className="mb-2 block font-mono text-sm font-bold text-[#D9A01B]">
                  II.
                </span>

                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                  Systemic Inquiry
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  The rigor of systems and complexity science, the regenerative
                  movement, decolonial thought, metamodernism, and the
                  metacrisis conversation — which have helped us perceive the
                  historical, ecological, and civilizational patterns producing
                  this moment, rather than reacting to its symptoms.
                </p>
              </div>
            </div>

            {/* III. Developmental Practice */}
            <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-[#FFFDF6] p-6">
              <div>
                <span className="mb-2 block font-mono text-sm font-bold text-[#D9A01B]">
                  III.
                </span>

                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                  Developmental Practice
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  The fields of human development, depth psychology, parts work,
                  trauma integration, emotional regulation, and relational
                  practice — which help us understand how human beings actually
                  grow up, mature, and come to embody responsible ways of
                  relating to all life.
                </p>
              </div>
            </div>

            {/* IV. Ancestral Ways of Being */}
            <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-[#FFFDF6] p-6">
              <div>
                <span className="mb-2 block font-mono text-sm font-bold text-[#D9A01B]">
                  IV.
                </span>

                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                  Ancestral Ways of Being
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  The embodied, ecological, and land-based wisdom carried by
                  Indigenous, quilombola, and Afro-diasporic communities, who,
                  despite centuries of erasure and forced collapse, have
                  nurtured, carried, and protected ways of seeing, being, and
                  relating that the rest of the world is only now beginning to
                  value.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="max-w-4xl space-y-6 text-left">
            <p className="leading-relaxed text-muted-foreground">
              We have been informed and transformed by these lineages over many
              years, and we come to them with humility, curiosity, and
              gratitude, not claiming to live fully within any of them and
              recognizing that each carries both profound gifts and real
              limitations.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              What we are attempting is neither the importing of Global North
              frameworks nor the romanticization of ancestral wisdom. It is
              something more demanding: cultivating genuine dialogue between
              them and letting each challenge, deepen, and transform the others
              — and us. We are interested in what becomes possible when
              systemic rigor, contemplative depth, developmental practice, and
              the living intelligence of this territory are brought into real
              relationship, and in how such a convergence can transform the
              ways we see, relate, and act in the world.
            </p>

            <p className="font-medium leading-relaxed text-foreground">
              From this encounter, we believe that the new forms of pedagogy,
              community, and culture required in this century can emerge —
              forms that could only take root here, where these lineages have a
              reason to meet and where the urgency of this moment makes their
              separation no longer affordable.
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

{/* Educational Work */}
<section className="relative bg-white pt-12 pb-24 lg:pt-16 lg:pb-28">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">
    <div className="space-y-8">
      <div>
        <h2 className="mt-2 font-serif text-3xl font-medium text-foreground md:text-4xl">
          Our response is fundamentally educational.
        </h2>
      </div>

      <p className="leading-relaxed text-muted-foreground">
        We recognize the escalating nature of the complex and entangled
        challenges of this moment—social, ecological, political, and spiritual
        breakdowns—not as isolated problems, but as{" "}
        <strong className="font-medium text-foreground">
          symptoms of deeper cultural patterns: ways of perceiving, valuing, and
          participating in the world that are no longer serving life.
        </strong>
      </p>

      <p className="leading-relaxed text-muted-foreground">
        If the crises of our time are rooted in the ways we have learned to see,
        relate, and participate in the world, then responding to them requires
        more than new technological or political solutions. It requires new
        forms of being human in this world, a deeper transformation in human
        consciousness and the ways we relate to life.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        Education is where that becomes possible, because this is where a
        civilization transmits what it believes a human being is, the values we
        stand for, and what is worth offering our lives to. But not the
        education that prepares people to succeed within the promises of the
        current system. We mean education that forms people capable of
        questioning modernity&apos;s foundations and beginning to build what
        comes next.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        This time between worlds we are in could become a rite of passage for
        our species — an opening toward greater wisdom, maturity, and reverence
        for life. But there is actually no guarantee it will. Crisis does not
        mature us automatically. Without spaces capable of holding the grief,
        uncertainty, conflict, questioning, imagination, and possibility this
        moment demands, crisis can just as easily intensify polarization,
        nihilism, and collapse into simplistic answers.
      </p>

      {/* Highlighted Architecture Statement */}
      <div className="border-l-4 border-[#D9A01B] bg-[#FFF9E9] px-6 py-6 md:px-8">
        <p className="leading-relaxed text-muted-foreground">
          Aware of this, we are exploring how to build new forms of{" "}
          <strong className="font-bold text-foreground">
            Wisdom-Centered Educational Architecture:
          </strong>{" "}
          transformational structures capable of welcoming those who feel the
          depth of this crisis in their bones, of holding the magnitude of the
          devotion they carry, and of forming them into human beings capable of
          reclaiming leadership as sacred responsibility toward the flourishing
          of all life.
        </p>
      </div>

      <div className="relative left-1/2 mt-12 aspect-[21/9] w-screen -translate-x-1/2 overflow-hidden">
        <Image
          src="https://i.postimg.cc/cJXn0t4P/DSCF5531.jpg"
          alt="Gathering around the fire"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</section>

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
        by Vanessa Andreotti that distinguishes between narrow boundary
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

export function FieldsOfWorkSection() {
  const fields = [
    {
      title: "1. Transformative Educational Lab",
      subtitle: "Education for the end of the world as we know it",
      description: "The living laboratory where our Educational Architecture is continuously tested, refined, and deepened. Through retreats, residencies, courses, and immersive programs—developed in-house and in collaboration with fellow educators—we keep radically experimenting with what it takes to build the foundations for a wisdom-centered education.",
      color: "border-olive",
      textColor: "text-olive",
      image: "https://images.squarespace-cdn.com/content/v1/58b0f6a89f7456906a310ee2/1587855330806-W292FV9W3Q7YLABBVW2A/CeremonyOne.jpg",
      link: "/about#educational-lab",
      stroke: "#3d4a3e" // Dark Olive
    },
    {
      title: "2. Research & Inquiry",
      subtitle: "Investigating the most pressing questions shaping our world",
      description: "The space of deep investigation into what has brought us here, what is happening now, and what is trying to emerge. Through transdisciplinary research, original essays, collaborative thinking, social cartographies and curated collections, we contribute to the kind of narrative-building and cultural sensemaking that can orient wise action in a time of uncertainty.",
      color: "border-cyan",
      textColor: "text-cyan-800",
      image: "https://i.postimg.cc/63CqR1MW/cosmos-830055812.jpg",
      link: "/about#research",
      stroke: "#155e75" // Dark Cyan
    },
    {
      title: "3. Ecosystem Integration",
      subtitle: "Tending to the emerging fabric of a wisdom-centered culture",
      description: "Across the world, countless individuals, initiatives and communities are already shaping more life affirming futures. We help map, connect, and weave these fragmented efforts into a more coherent ecosystem of cultural transformation, cultivating the relationships, developmental pathways, and collective intelligence needed for a time between worlds.",
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
           If you want to discover our work in more depth, we invite you to explore our Fellowship and Theory of Change.
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
