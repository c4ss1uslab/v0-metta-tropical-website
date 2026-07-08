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
      Nurturing the emergence of a new generation of wisdom-centered leaders wrestling with the world's biggest challenges and committed to cultural regeneration and the flourishing of all life. 
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
      <section className="pt-12 pb-12 lg:pt-32 lg:pb-16 bg-background">
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
      <section className="pt-0 pb-16 lg:pt-0 lg:pb-20 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                Our response is fundamentally educational.
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              We recognize the escalating nature of the complex and entangled challenges of the moment we’re living in—social, ecological, political, and spiritual breakdowns—not as isolated problems, but as <strong className="text-foreground">symptoms of deeper cultural patterns: ways of perceiving, valuing, and participating in the world that are no longer serving life.</strong>
            </p>

            <p className="text-muted-foreground leading-relaxed">
              If the crises of our time are rooted in the ways we have learned to see, relate, and participate in the world, then responding to them requires more than new solutions. It requires new forms of being — and becoming — human in this world. We are living through a moment that asks something profound of us. Not only technological or political change, but a deeper transformation in human consciousness and the ways we relate to life.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              This moment could become a rite of passage for our species — an opening toward greater wisdom, maturity, and reverence for life. But there is no guarantee it will. Without spaces capable of holding grief, uncertainty, conflict, and transformation, crisis can just as easily intensify polarization, nihilism, tribalism, and collapse into simplistic answers.
            </p>           

            <p className="text-muted-foreground leading-relaxed">
            In response, we are exploring how to build new forms of Educational-Relational Architecture: structures for learning, transformation, practice, and relationships designed to support deeper human transformation, collective sensemaking, community building and wiser forms of participation in the web of life. 
            Structures capable of holding the magnitude of the vow, devotion and surrender of those who feel the depth of our crisis and are committed to reclaiming leadership as a sacred responsibility towards the flourishing of all life.
            </p>           

            <p className="text-muted-foreground leading-relaxed">
            Our work is ultimately an inquiry into <strong className="text-foreground">who we must become - and what kind of containers must emerge in this time between worlds</strong>, in order for us to develop the capacities to imagine, embody and steward a new cultural paradigm rooted in wisdom, relational sensibility and service to the flourishing of all beings.
            </p>           

            <div className="relative aspect-[21/9] overflow-hidden mt-12 mb-0">
              <Image
                src="https://i.postimg.cc/cJXn0t4P/DSCF5531.jpg"
                alt="Gathering around the fire"
                fill
                className="object-cover"
              />
            </div>

{/* Why Wisdom? Section Content */}
      <section className="w-full xl:w-screen left-1/2 right-1/2 -mx-[50vw] relative bg-white pt-0 pb-16 lg:pt-0 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-8">
            <div className="pt-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-12">
                Why Wisdom?
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Within our work, we often draw from a{" "}
              <a 
                href="https://www.google.com/search?sca_esv=01006499c0c391e8&sxsrf=APpeQnse4l_bHHLaKWzKJ_H8Vq-lfRHuVQ:1783476959652&udm=2&fbs=ABfTbFVGaQeaqnsRPI5sOMG32KszkLt6nAp8aiRKj5vMjqZApKYr2wv-EHakX1SS4JF8fY1_A0DfPLoyd61yD2Gjy0hF5xCGdMIu1T4OpsNqfBilMEIr_6ObOOmXLqxwsb2wWJ6rZczNqhX_BT8mvsKr4cPXW3rK1rrDm6UKuIOysx0ndrWiDL523hQULdDGKbotErH2kmguX5En4hjb48Li6KlkQenOzA&q=narrow+boundary+to+wide+boundary+to+wisdom+framework&sa=X&ved=2ahUKEwiqnJS1gcKVAxWjBLkGHT73MbUQtKgLegQIGBAB&biw=1410&bih=678&dpr=2#sv=CAMSURoyKhBlLU04M1YxZFpiLWlMTFlNMg5NODNWMWRaYi1pTExZTToOQzVZTHljNGJpUGRIc00gBCoXCgFzEhBlLU04M1YxZFpiLWlMTFlNGAEwARgHINrK0t4CSggQARgBIAEoAQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-900 underline hover:opacity-80 transition-opacity"
              >
                framework
              </a>{" "}
              developed by Daniel Schmachtenberger and Nate Hagens, and later evolved by Vanessa Andreotti that distinguishes between narrow boundary intelligence, wide boundary intelligence, and wisdom (sometimes called whole-shebang wisdom).
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We find this framework helpful not only for understanding how humans relate to complexity and systemic challenges, but for clarifying the direction our collective efforts must ultimately move toward: wisdom.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The Center for Humane Technology describes one of the defining challenges of our time as{" "}
              <a 
                href="https://secondrenaissance.net/glossary/Wisdom+Gap" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-900 underline hover:opacity-80 transition-opacity"
              >
                the wisdom gap
              </a>
              : the growing divide between rising global complexity and humanity's capacity to respond with sufficient coherence, discernment, and care.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We live in a world overflowing with information, intelligence, and technological power, yet increasingly unable to navigate wisely the complexity we have created.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              In this sense, the metacrisis is also a wisdom crisis.
            </p>

            {/* Elegant Wisdom Definition Callout */}
            <div className="border-l-4 border-[#D9A01B] bg-[#FFFDF6] p-6 rounded-r-xl my-6">
              <p className="text-foreground leading-relaxed font-serif text-lg md:text-xl italic">
                By wisdom, we do not mean expertise, intelligence, or the accumulation of knowledge. We mean the capacity to perceive reality accurately—deeply understanding the central existential issues of life—to discern what truly matters in context, and participate in life in ways that serve the flourishing of the larger whole.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Wisdom emerges through the integration of multiple ways of knowing and depths of relationality — cognitive, emotional, embodied, spiritual, and transpersonal — that expand our capacity to sense what is needed in a given moment and respond accordingly.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              It allows us to hold complexity with humility and care, move beyond fragmented grasps for certainty or control, and shifts our relationship with the world from subject-object to subject-subject: from managing reality to participating within it. To speak of wisdom is ultimately to speak of integration. To reunite what modernity has fragmented.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              As we face the consequences of the metacrisis, the cost of continuing to incentivize narrow-boundary intelligence becomes increasingly catastrophic. What this moment requires is a movement from narrow boundary, to wide boundary, and eventually toward wisdom. Yet the infrastructures capable of cultivating such transition remain largely absent from modern society.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our work is an attempt to help create them.
            </p>
          </div>
        </div>
      </section>
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

import React from 'react';

export function BridgeSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Header - Left-Aligned */}
        <div className="text-left mb-6 max-w-5xl">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            A Confluence of Lineages
          </h2>
        </div>

        {/* Intro Blocks */}
        <div className="max-w-4xl mb-16 space-y-6 text-left">
          <p className="text-[#D9A01B] font-medium text-lg leading-relaxed">
            We are rooted in Brazil and Latin America, shaped by this territory, this language, and this soil. 
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Embedded within all three pillars of our work is a commitment to bringing into relationship ways of knowing that modernity has often separated from one another. We seek to create spaces where different epistemologies, traditions, and forms of intelligence can meet in generative dialogue. Our work emerges at the intersection of four lineages that rarely meet:
          </p>
        </div>

        {/* The Four Lineages - Formatted into a balanced 2x2 quadrant layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          
          {/* Box I - Systemic & Philosophical */}
          <div className="border border-gray-200 rounded-xl p-6 bg-[#FFFDF6] flex flex-col justify-between">
            <div>
              <span className="text-[#D9A01B] font-mono text-sm font-bold block mb-2">I.</span>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                Systemic & Philosophical
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The systemic and philosophical rigor of the scientific community, especially from the systems and complexity sciences, the regenerative movement, and the metacrisis and metamodern conversation, developed largely in the Global North.
              </p>
            </div>
          </div>

          {/* Box II - Spiritual Traditions */}
          <div className="border border-gray-200 rounded-xl p-6 bg-[#FFFDF6] flex flex-col justify-between">
            <div>
              <span className="text-[#D9A01B] font-mono text-sm font-bold block mb-2">II.</span>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                Spiritual Traditions
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The wisdom of spiritual traditions from around the world — especially the Buddhist lineage — which has shaped our ontologies, practices, and understanding of long-arc educational architecture for the cultivation of wisdom, compassion and ethical life.
              </p>
            </div>
          </div>

          {/* Box III - Developmental Practice */}
          <div className="border border-gray-200 rounded-xl p-6 bg-[#FFFDF6] flex flex-col justify-between">
            <div>
              <span className="text-[#D9A01B] font-mono text-sm font-bold block mb-2">III.</span>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                Developmental Practice
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The fields of human development, depth psychology, relational practice, parts work, trauma integration, and transformational practices that help us understand how human beings actually change, mature, and embody responsible ways of relating to all life.
              </p>
            </div>
          </div>

          {/* Box IV - Living, Relational Wisdom */}
          <div className="border border-gray-200 rounded-xl p-6 bg-[#FFFDF6] flex flex-col justify-between">
            <div>
              <span className="text-[#D9A01B] font-mono text-sm font-bold block mb-2">IV.</span>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                Living, Relational Wisdom
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The embodied, relational wisdom carried by indigenous, quilombola, Afro-diasporic and historically marginalized communities, that despite centuries of erasure and forced collapse, have carried and protected ways of seeing, being and relating that the rest of the world is only now beginning to value.
              </p>
            </div>
          </div>

        </div>

        {/* Concluding Paragraphs */}
        <div className="max-w-4xl space-y-6 text-left">
          <p className="text-muted-foreground leading-relaxed">
            We do not claim to live fully within all these traditions. We come to them with humility, curiosity, and gratitude, recognizing that each carries both profound gifts and limitations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            What we are attempting is neither the importation of Global North frameworks nor the romanticization of ancestral wisdom. It is something more demanding: cultivating genuine dialogue between these lineages while allowing each to challenge, deepen, and transform the others. Rather than privileging a single worldview, we are interested in what becomes possible when different traditions genuinely encounter one another.
          </p>
          <p className="text-foreground font-medium leading-relaxed">
            We believe the wisdom required for this century will not emerge from any single discipline, culture, or worldview, but from learning how to hold them in relationship.
          </p>
        </div>

      </div>
    </section>
  );
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
