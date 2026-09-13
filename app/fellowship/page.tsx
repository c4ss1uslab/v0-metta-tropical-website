import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fellowship | Metta Tropical Collective",
  description:
    "Tending the Soul of an Emergent Culture — an eight-month initiatory journey for a generation coming of age in a time between worlds.",
}

const architecture = [
  {
    title: "Aspiration",
    question: "Who are we longing to become?",
  },
  {
    title: "Streams",
    question: "What dimensions of life do we engage with?",
  },
  {
    title: "Pedagogy",
    question: "How does transformation happen?",
  },
  {
    title: "Structures",
    question: "What sustains transformation across time?",
  },
  {
    title: "Orientation",
    question: "What is our becoming ultimately in service of?",
  },
]

const streams = [
  {
    number: "I",
    title: "The Sacred",
    subtitle: "Remembering What Ultimately Matters",
    question:
      "What is intrinsically valuable? What is the ground we are standing on? What makes a life meaningful? What is worthy of our devotion? What is the true nature of reality we participate in?",
    paragraphs: [
      "We begin here because every path of transformation is oriented by what we ultimately value. We approach the sacred not as a realm above or outside of ordinary life, but as a depth dimension of life itself—one that becomes available through particular qualities of attention, perception and participation that modernity has largely taught us to close. Rather than prescribing a single metaphysical belief, we engage multiple wisdom traditions and lineages that can help reawaken our capacity to encounter this dimension of life more wholeheartedly.",
      "To encounter the sacred is to experience the world as radically interdependent, intrinsically valuable, alive with meaning and worthy of reverence. We will explore how modernity's desacralization of the world may be one of the deeper conditions underlying the metacrisis: what we cease to experience as intrinsically valuable becomes easier to instrumentalize, commodify, and destroy.",
      "The Sacred is therefore not simply one stream among others. It is the orienting horizon within which the other streams acquire meaning, significance, and continually return us to the question of what our lives and our transformation are ultimately in service of.",
      "This stream brings contemplative and wisdom traditions into dialogue with philosophy, theology, and contemporary attempts to recover the sacred within a disenchanted world. We engage the practices and forms of perception through which different traditions have cultivated relationships with mystery, meaning, devotion, and the intrinsic worth of life.",
    ],
    voices:
      "Brother Phap Huu · Adam Bucko · Zak Stein · Henrique Vieira · David Dias · Ilia Delio",
    resourceText:
      "Explore some of the teachings, traditions, and resources informing this stream →",
    accent: "border-[#D9A01B]",
    numberColor: "text-[#B88610]",
    soft: "bg-[#FFF9E9]",
  },
  {
    number: "II",
    title: "Soul",
    subtitle: "Remembering Who We Are",
    question:
      "Who are we? What is a human being for? What does it mean to meet ourselves and each other more truthfully? What prevents me from meeting life more fully? How might we recover our capacity to sense the world with soul? How can relationships become a doorway into the sacred?",
    paragraphs: [
      "Grounded in the sacred, we turn toward the depths of human experience, because the quality of our actions emerges from the quality of our being, and who we are becoming is always shaped in relationship.",
      "This stream explores the emotional, psychological, relational, embodied and spiritual work of becoming more whole. A process of encountering our conditioning and protective patterns, tending to fragmentation and wounds, learning to discern the desires that shape us, questioning the stories through which we understand ourselves, and opening space for the totality of our being to come to life.",
      "We not only explore our inner worlds, but the spaces between us: how we listen, attune, navigate differences, communicate lovingly, build intimacy, meet another more fully, and participate in relationships where more of our humanity can become available.",
      "Without this dimension of formation, our attempts to transform the world can easily reproduce the patterns of separation, domination, projection and fragmentation we hope to heal.",
      "This stream draws from contemplative practice, depth and developmental psychology, relational and somatic practices, trauma-informed approaches, nature-based initiation, and traditions of human formation concerned with wholeness, maturation, eros, intimacy, and soul.",
    ],
    voices:
      "Bill Plotkin · Steffi Bednarek · Vanessa Ferreira · Francis Weller · Sean Wilkinson",
    resourceText:
      "Explore some of the practices, lineages, and resources informing this stream →",
    accent: "border-crimson",
    numberColor: "text-crimson",
    soft: "bg-[#FFF4F2]",
  },
  {
    number: "III",
    title: "Systems",
    subtitle: "Remembering Where We Are",
    question:
      "What does it mean to be in a time between worlds? What are the deeper dynamics generating the metacrisis? How does change happen? How is this system learning and changing through its relationships? What needs to be hospiced rather than improved? How deeply have the logics of modernity colonized our minds, desires and imagination?",
    paragraphs: [
      "With a deeper sense of who we are, we turn toward the complexity of the systems we participate in. This stream cultivates the capacity to perceive patterns beneath events, trace the historical and structural roots of the metacrisis, and understand the cultural, political, technological, economic, and ecological forces shaping the world around us.",
      "We investigate how dominant worldviews, colonial histories, incentive structures, institutions, and economic systems have shaped not only society, but also our desires, identities, relationships, and imagination. This means learning to recognize how deeply the logics of the systems we inhabit—mechanistic, linear, transactional, extractive—are deeply embedded within us, guiding our ways of perceiving, being and acting in the world.",
      "The more clearly we can perceive the patterns and dynamics generating our crises, within and outside ourselves, the greater our capacity to respond at the depth from which they are being produced.",
      "This stream brings systems thinking and complexity science into conversation with metacrisis research, political economy, decolonial thought, historical analysis, post-capitalist experimentation, and metamodernism—cultivating both a clearer diagnosis of the world we inhabit and a wider imagination of what might come next.",
    ],
    voices:
      "Alnoor Ladha · Zak Stein · Vanessa Andreotti · Indy Johar · Nora Bateson · Kate Raworth · Nate Hagens",
    resourceText:
      "Explore some of the maps, ideas, and resources informing this stream →",
    accent: "border-cyan-800",
    numberColor: "text-cyan-800",
    soft: "bg-[#EFF8F8]",
  },
  {
    number: "IV",
    title: "Soil",
    subtitle: "Remembering Our Place In The Web of Life",
    question:
      "What does the more-than-human world know that we have forgotten? How might we organize life through reciprocity rather than ownership? What would it mean to encounter another world without colonizing it? How might we live in a world that holds multiple worlds? What changes when a river becomes a relative?",
    paragraphs: [
      "Having explored the systems of the human world, we return to the larger living world to which we have always belonged. This stream tends our relationship with land, place, ancestry, and the more-than-human world. It investigates what becomes possible when Earth is no longer encountered primarily as a resource, but as kin, teacher, community, and living participant in our becoming.",
      "This stream moves beyond abstractions and intellectual study. Through relationships with Indigenous, Quilombola, land-based, and territorial communities and movements in Brazil and Latin America, we seek to learn by experiencing forms of life grounded in reciprocity, ancestry, autonomy, collective memory, and relationship with land. The invitation is not simply to experience another way of living, but to allow these encounters to unsettle us, to reveal assumptions about life, land, progress and relationships that modernity has taught us to treat as normal, and open us to other ways of seeing, being, and relating to life that are essential for the survival of our species and all life on earth.",
      "This stream draws from Indigenous and Quilombola wisdom, agroecology, land-based movements, bioregional thought, nature-based practice, and communities across Latin America that have preserved and regenerated forms of relationship with life despite centuries of dispossession and erasure.",
    ],
    voices:
      "Cristine Takuá · Kaká Werá · Tainá Marajoara · Jera Guarani · Ailton Krenak · Mestre Cobra Mansa · Joelson Ferreira",
    resourceText:
      "Explore some of the communities, teachings, and resources informing this stream →",
    accent: "border-olive",
    numberColor: "text-olive",
    soft: "bg-[#F3F7EC]",
  },
  {
    number: "V",
    title: "Society",
    subtitle: "Remembering How to Respond to This Moment",
    question:
      "What does this moment ask of us — together? What is uniquely ours to offer? What is our responsibility at this time? How have people in history dealt with moments of collapse, and what are people doing now? What matters most in a time of civilizational transition? How do movements emerge, grow, and reshape society?",
    paragraphs: [
      "Having explored what is sacred, deepened our relationship with ourselves and one another, investigated the systems shaping our world, and remembered our belonging within the living Earth, we ask: How might we live in response?",
      "This stream brings us into direct contact with people, communities, movements and initiatives at the living edge of cultural and societal renewal—those experimenting with how to organize their lives and work in response to the metacrisis.",
      "Through these encounters, we explore movement-building, community organizing, institution-building, peacebuilding, ethical uses of power, and the many ways people have responded to moments of profound historical rupture. Their lives and stories become invitations to discern more deeply where our own gifts, responsibilities, and commitments might belong.",
      "This stream also asks us to move beyond the mythology of the solitary hero, leader, or changemaker. We explore what it means to act collectively as one body—to cultivate the trust, coherence, relational capacity, and coordination required to respond to this moment in ways that no individual could possibly hold alone.",
      "This is where wisdom, power, and love learn to walk together towards building the life-enhancing futures we most long for.",
      "In this stream, we draw inspiration from social movements, organizers, peacebuilders, institution-builders, cultural leaders, and communities that have been attempting to respond to moments of civilizational rupture with devotion, courage and imagination.",
    ],
    voices:
      "John Paul Lederach · Rachel Donald · Lourenço Bustani · Cristiane Figueiras · Bruno Torturra · Thiago Ávila",
    resourceText:
      "Explore some of the movements, practices, and resources informing this stream →",
    accent: "border-[#D9A01B]",
    numberColor: "text-[#B88610]",
    soft: "bg-[#FFF8EA]",
  },
]

const pedagogyMovements = [
  {
    title: "Ontological",
    subtitle: "Refine Perception",
    question:
      "What kind of world becomes visible through the way we learn to perceive?",
    text:
      "We seek to cultivate forms of perception that make us more sensitive to fundamental dimensions of reality which modernity has often dismissed: interdependence, intrinsic value, eros, meaning, sacredness, and the transcendental worth of a life.",
    accent: "border-[#D9A01B]",
  },
  {
    title: "Relational",
    subtitle: "Deepen Participation",
    question:
      "How deeply can we enter into relationship with what we perceive?",
    text:
      "As our perception deepens, we learn to engage with reality through multiple depths of participation: through abstraction, story, feeling, sensation, intimacy, imagination, collective sensing, and transpersonal experience.",
    accent: "border-crimson",
  },
  {
    title: "Collective",
    subtitle: "Sense From the Whole",
    question:
      "What becomes possible when knowing is no longer located only within the individual?",
    text:
      "As trust, attention, and relational coherence deepen, the locus from which we perceive can begin to widen. We practice sensing not only from ourselves or one another, but the larger collective field of relationships we are part of—learning to access forms of intelligence and wisdom that no individual may be able to perceive alone.",
    accent: "border-cyan-800",
  },
  {
    title: "Transformational",
    subtitle: "Embody What We Know",
    question:
      "How does what we perceive, participate in, and sense together begin to reorganize the way we live?",
    text:
      "Here, we investigate how deeper perception, participation, and collective discernment actually begin to transform our desires, relationships, choices, work, use of power, and ways of organizing our lives, while strengthening our capacity to respond more wisely to the complexity of the crisis within and around us.",
    accent: "border-olive",
  },
]

const becomingQualities = [
  "Allow the deepest questions of meaning, value, belonging, sacredness, and devotion to orient what they live for and what they choose to serve.",
  "Understand their own flourishing as inseparable from the flourishing of the larger whole.",
  "Can perceive complexity, systems, history, incentives, and power without losing contact with the life within them.",
  "Can remain in relationship across difference without collapsing into tribalism or dehumanization.",
  "Can hold influence without being consumed by it, and exercise power in ways that expand the agency of others.",
  "Cultivate the spiritual and relational maturity to recognize how fear, ego, desire, and projection shape their participation in the world.",
  "Remain rooted in relationship with the sacred and the living Earth.",
  "Are willing to place their gifts and lives in service of what they understand to be worthy of devotion.",
]

const fitSignals = [
  "You feel the pain and beauty of the world deeply and feel called to care for it.",
  "You sense that inherited definitions of success, progress, and impact no longer fully answer the questions your life is asking.",
  "You have grown skeptical of the underlying assumptions and ways of seeing that shape many of our responses to the crises we face.",
  "You feel called to place your unique gifts in service of a life-affirming future, even if you cannot yet fully name what your contribution is.",
  "You are exploring the relationship between spiritual transformation and systems change, sensing that neither is sufficient without the other.",
  "You long for a community where deep questions of meaning, value, vocation, and existence can be held seriously.",
  "You sense that responding wisely to this moment requires deeper emotional, relational, spiritual, and intellectual formation.",
  "You are willing to look honestly at how your own desires, habits, identities, and ways of life may participate in the patterns you hope to transform.",
  "You are longing to be part of a community that will care for your becoming while asking you to grow in maturity, responsibility, and service.",
]

const possiblePaths = [
  "An artist using music, media, writing, or storytelling to shape how we imagine the world.",
  "A community-builder cultivating belonging, trust, and social transformation.",
  "An educator exploring new forms of learning and formation for a world in transition.",
  "A researcher investigating the underlying causes of our predicament.",
  "An entrepreneur building organizations, economies, or institutions in service of life.",
  "An activist exploring the relationship between spirituality, nonviolence, and social transformation.",
  "A technologist wrestling with how emerging technologies might serve human and planetary flourishing.",
  "A climate organizer carrying the grief, urgency, and responsibility of accelerating ecological breakdown.",
]

const giftIncludes = [
  "All online sessions and facilitation",
  "All in-person retreat experiences",
  "Accommodation and food during retreats",
  "Coaching/therapy and developmental support",
  "All resources and materials for sessions",
]

export default function FellowshipPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#FFFDF6] pt-16">
{/* HERO */}
<section className="relative overflow-hidden bg-[#FFFDF6]">
  {/* Main Hero */}
  <div className="relative py-20 lg:py-28">
    {/* Soft organic color fields */}
    <div className="pointer-events-none absolute -right-24 -top-20 h-96 w-96 rounded-full bg-[#D9A01B]/20 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-olive/15 blur-3xl" />
    <div className="pointer-events-none absolute left-[46%] top-12 h-52 w-52 rounded-full bg-crimson/10 blur-3xl" />

    <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
      <div className="max-w-4xl">
        {/* Welcome */}
        <span className="text-sm font-medium uppercase tracking-[0.14em] text-olive">
          Welcome to the
        </span>

        {/* Fellowship / Collective Name */}
        <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl lg:text-6xl">
          Metta Tropical Fellowship
        </h1>

        {/* Subtitle */}
        <p className="mt-3 font-serif text-xl italic leading-relaxed text-muted-foreground md:text-2xl">
          Tending The Soul of an Emergent Culture
        </p>

        {/* Central Question */}
        <div className="mt-8 max-w-3xl border-l-4 border-[#D9A01B] pl-6">
          <p className="font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
            What is this moment in history asking of your life?
          </p>
        </div>

        {/* Fellowship Description */}
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          An eight-month initiatory journey for a generation coming of age
          in a time between worlds—when inherited ways of living are reaching
          their limits and the forms of life capable of replacing them have
          not yet fully emerged.
        </p>

        {/* Key Information */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[#D9A01B] px-5 py-2 text-sm font-medium text-white">
            January — August 2027
          </span>

          <span className="rounded-full border border-olive/30 bg-white/70 px-5 py-2 text-sm text-foreground">
            Brazil
          </span>

          <span className="rounded-full border border-crimson/20 bg-white/70 px-5 py-2 text-sm text-foreground">
            15–20 participants
          </span>

          <span className="rounded-full border border-cyan-800/20 bg-white/70 px-5 py-2 text-sm text-foreground">
            Offered as a gift
          </span>
        </div>

        {/* Primary Actions */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#journey"
            className="inline-flex items-center justify-center rounded-md bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Explore the Journey
          </a>

          <a
            href="#apply"
            className="inline-flex items-center justify-center rounded-md border border-foreground/30 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            Begin Application
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Fellowship Section Navigation */}
  <div className="border-y border-border bg-background/95">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
        <span className="mr-3 hidden shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground/60 md:block">
          Explore
        </span>

        <a
          href="#invitation"
          className="group flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#FFF4F2]"
        >
          <span className="h-2 w-2 rounded-full bg-crimson" />
          The Invitation
        </a>

        <a
          href="#why-now"
          className="group flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#F3F7EC]"
        >
          <span className="h-2 w-2 rounded-full bg-olive" />
          Why Now
        </a>

        <a
          href="#journey"
          className="group flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#FFF9E9]"
        >
          <span className="h-2 w-2 rounded-full bg-[#D9A01B]" />
          The Journey
        </a>

        <a
          href="#streams"
          className="group flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#EFF8F8]"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-800" />
          Five Streams
        </a>

        <a
          href="#pedagogy"
          className="group flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#FFF4F2]"
        >
          <span className="h-2 w-2 rounded-full bg-crimson" />
          Pedagogy
        </a>

        <a
          href="#structure"
          className="group flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#F3F7EC]"
        >
          <span className="h-2 w-2 rounded-full bg-olive" />
          Curriculum
        </a>

        <a
          href="#who-this-is-for"
          className="group flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#FFF9E9]"
        >
          <span className="h-2 w-2 rounded-full bg-[#D9A01B]" />
          Who It&apos;s For
        </a>

        <a
          href="#gift"
          className="group flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#EFF8F8]"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-800" />
          The Gift
        </a>

        <a
          href="#apply"
          className="ml-2 shrink-0 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Apply
        </a>
      </div>
    </div>
  </div>
</section>

        {/* INVITATION */}
        <section className="bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <span className="text-sm font-medium uppercase tracking-wide text-crimson">
              The Invitation
            </span>

            <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl">
              You may already know what it feels like to live between worlds.
            </h2>

            <div className="mt-8 space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                To have lost faith in the underlying logic of the current
                system, while still being dependent on it. To feel that some of
                the paths you inherited can no longer hold the deep questions
                inside you. To care deeply about the crises of our time while
                struggling to know how to respond without reproducing the same
                patterns, becoming overwhelmed, or absorbed back into ways of
                life you no longer fully believe in.
              </p>

              <p className="leading-relaxed">
                We understand this as part of what it means to grow up in a time
                between worlds: when inherited ways of being are revealing
                their limits, while the forms of life capable of replacing them
                have not yet fully emerged.
              </p>
            </div>

            <details className="group mt-8 rounded-xl border border-border bg-cream">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 [&::-webkit-details-marker]:hidden md:px-8">
                <span className="font-medium text-foreground">
                  Read the full invitation
                </span>
                <span className="text-xl text-[#D9A01B]">+</span>
              </summary>

              <div className="space-y-6 border-t border-border px-6 py-7 text-muted-foreground md:px-8">
                <p className="leading-relaxed">
                  For some, this creates the strange experience of living
                  without a world—no longer finding a home in our dominant
                  culture, but not yet fully inhabiting what might come next.
                  This can be profoundly disorienting and stressful. But it can
                  also become a moment of unimaginable opportunity, meaning and
                  responsibility.
                </p>

                <p className="leading-relaxed">
                  It&apos;s the time of people in this liminal phase to
                  recognize that there is no inherent manual for crossing this
                  threshold. We will have to learn, practice and embody
                  capacities our existing institutions have not yet learned how
                  to cultivate—and begin experimenting with ways of seeing,
                  being, knowing, and acting from which different futures can
                  emerge.
                </p>

                <p className="leading-relaxed">
                  This is not solely a process of learning new ideas, skills or
                  capacities, but a deeper kind of formation in which the full
                  scope of what it means to be human is taken seriously:
                  allowing what we come to know and understand to fully reshape
                  how we live, what we value, how we relate, what we take
                  responsibility for, and what we ultimately give ourselves to.
                </p>

                <p className="leading-relaxed">
                  Transformations of this depth rarely happen alone. They
                  require sanctuaries of transformation—spaces where we can
                  encounter ourselves, one another, and the world more deeply;
                  where new ideas and experiences begin to reshape how we
                  perceive reality; where practices help us compost old ways of
                  being and allow new ones to take root; where grief, longing,
                  and responsibility can be held and matured in relationship
                  with others; and where community helps us remain faithful to
                  what we say truly matters and to what we are willing to devote
                  our lives to.
                </p>

                <p className="font-medium leading-relaxed text-foreground">
                  The Metta Tropical Fellowship is our attempt to create such a
                  place: an experimental community in which we can live inside
                  the deepest questions this moment is asking of us, and allow
                  our insights to radically reshape how we live in the world.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* WHY NOW */}
        <section className="bg-cream py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="text-sm font-medium uppercase tracking-wide text-olive">
                Why This Exists, Now
              </span>

              <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl">
                A generation is coming of age inside a civilizational threshold.
              </h2>

              <div className="mt-8 space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  Beneath the visible crises of our time—ecological breakdown,
                  social fragmentation, institutional instability, technological
                  risk, meaning crisis—lies a deeper predicament often described
                  as the metacrisis: a dysfunction in the underlying ways of
                  perceiving, relating to, and understanding reality that modern
                  civilization has been built upon.
                </p>

                <p className="leading-relaxed">
                  As this predicament deepens, we see at least three broad
                  attractors pulling at the future: greater fragmentation and
                  chaos; authoritarian forms of order; or the emergence of more
                  wisdom-informed and life-enhancing forms of civilization.
                </p>

                <p className="font-medium leading-relaxed text-foreground">
                  Moving toward the third attractor is not a given. It will
                  require profound changes not only in our systems and
                  institutions, but in how we understand ourselves, reality and
                  relate to all life.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              <article className="border-t-4 border-crimson bg-background p-6">
                <span className="text-xs font-medium uppercase tracking-wide text-crimson">
                  The challenge is
                </span>

                <h3 className="mt-2 font-serif text-xl font-medium text-foreground">
                  Civilizational
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  This moment is historically distinct due to the unprecedented
                  power humanity now holds to shape—and potentially
                  destabilize—the conditions of life itself. Our technological
                  power has grown much faster than the wisdom and maturity
                  required to orient them. This ethical discernment and
                  relational maturity requires decades, if not generations to
                  cultivate to the levels we need at this moment.
                </p>
              </article>

              <article className="border-t-4 border-[#D9A01B] bg-background p-6">
                <span className="text-xs font-medium uppercase tracking-wide text-[#B88610]">
                  The challenge is
                </span>

                <h3 className="mt-2 font-serif text-xl font-medium text-foreground">
                  Developmental
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  This period of civilizational breakdown can be understood as
                  a potential rite of passage for humanity—a threshold that
                  could invite us into greater wisdom and maturity. But rupture
                  does not guarantee transformation. Without the practices,
                  communities, elders, and developmental containers capable of
                  holding such a passage, crisis can just as easily deepen fear,
                  fragmentation, tribalism, and attachment to ways of life that
                  are part of the problem.
                </p>
              </article>

              <article className="border-t-4 border-cyan-800 bg-background p-6">
                <span className="text-xs font-medium uppercase tracking-wide text-cyan-800">
                  The challenge is
                </span>

                <h3 className="mt-2 font-serif text-xl font-medium text-foreground">
                  Generational
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A generation of young people feel the weight of this moment
                  and long to participate meaningfully in what comes next, yet
                  few institutions are helping them make consequential
                  choices—what to study, where to work, how to live, what to
                  value, and what to devote themselves to—in relation to the
                  depth of the transition underway.
                </p>
              </article>
            </div>

            <div className="mt-10 max-w-4xl">
              <p className="leading-relaxed text-muted-foreground">
                The Fellowship exists to support the becoming of those who are
                questioning not only our existing institutions and systems, but
                the deeper logic upon which our world has been built—and whose
                souls are longing to participate in bringing something
                radically different into being.
              </p>

              <Link
                href="/theory-of-change"
                className="mt-5 inline-flex text-sm font-medium text-foreground underline decoration-[#D9A01B] decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
              >
                Go deeper into our Theory of Change →
              </Link>
            </div>
          </div>
        </section>

        {/* WHO WE MUST BECOME */}
        <section className="bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <span className="text-sm font-medium uppercase tracking-wide text-crimson">
              Who We Must Become
            </span>

            <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl">
              Our images of human possibility feel too small for the
              transformation required.
            </h2>

            <div className="mt-8 space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Human beings grow toward the horizons of possibility they are
                able to imagine. We are formed not only by what we are taught,
                but by the images our cultures teach us to admire and aspire
                toward. Yet many of the dominant aspirations of modern life
                remain organized around individual achievement, status,
                productivity, recognition, and success. Even the figure of the
                “changemaker” can leave untouched the deeper forms of maturation
                and responsibility demanded by a civilizational crisis.
              </p>

              <p className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
                We need more integrated human beings—people whose spiritual
                life, relationships, understanding of systems, relationship to
                power, ecological belonging, and sense of responsibility are no
                longer fragmented from one another.
              </p>
            </div>

            <details className="mt-8 rounded-xl border border-border bg-[#FFF9E9]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 [&::-webkit-details-marker]:hidden md:px-8">
                <span className="font-medium text-foreground">
                  What might this way of being look like?
                </span>

                <span className="text-xl text-[#B88610]">+</span>
              </summary>

              <div className="border-t border-[#D9A01B]/20 px-6 py-7 md:px-8">
                <ul className="space-y-4">
                  {becomingQualities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A01B]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            <details className="mt-4 rounded-xl border border-border bg-cream">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 [&::-webkit-details-marker]:hidden md:px-8">
                <span className="font-medium text-foreground">
                  Why integration matters
                </span>

                <span className="text-xl text-crimson">+</span>
              </summary>

              <div className="space-y-6 border-t border-border px-6 py-7 text-muted-foreground md:px-8">
                <p className="leading-relaxed">
                  These are not simply capacities to accumulate, but dimensions
                  of a way of being that must mature together if we are to
                  navigate a time between worlds with greater wisdom and
                  responsibility. Spiritual depth without systemic understanding
                  can become naïve. Systems intelligence without inner and
                  relational maturity can reproduce domination. Power without
                  wisdom can amplify harm. The work is integration.
                </p>

                <p className="leading-relaxed">
                  Without a compelling horizon of who we must become, sacred
                  dimensions of human potential can remain dormant—and with
                  them, possibilities for the more beautiful worlds we might
                  help bring into being.
                </p>

                <p className="leading-relaxed">
                  Throughout history, humanity has carried images of such
                  possibility: the saint, the bodhisattva, the sacred activist,
                  the spiritual warrior—figures in whom spiritual and inner
                  transformation became inseparable from systems understanding,
                  responsibility, and service to something larger than the self.
                </p>

                <p className="font-medium leading-relaxed text-foreground">
                  This is how we seek to reclaim leadership for our time: as a
                  sacred responsibility toward the flourishing of all life. A
                  lifelong practice of becoming wiser, more trustworthy, mature,
                  and responsible—and increasingly capable of participating in
                  the emergence of more life-enhancing forms of civilization.
                </p>

                <p className="leading-relaxed">
                  The Fellowship is not only an attempt to reawaken this kind of
                  aspiration, but to create the conditions through which such
                  becoming can take root.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* THE JOURNEY */}
        <section
          id="journey"
          className="scroll-mt-24 bg-cream py-20 lg:py-24"
        >
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <span className="text-sm font-medium uppercase tracking-wide text-olive">
                The Journey
              </span>

              <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
                An eight-month Architecture of Transformation
              </h2>

              <div className="mt-8 space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  The kind of transformation we are seeking rarely happens
                  through a single retreat, course, or breakthrough experience.
                  It unfolds across time—through sustained practice,
                  relationship, guidance, reflection, challenge, and commitment.
                </p>

                <p className="leading-relaxed">
                  The previous section names the aspiration of who we must
                  become from which this journey begins. The Fellowship gives
                  that aspiration a path, a pedagogy, a container, and an
                  orientation.
                </p>

                <p className="leading-relaxed">
                  The Fellowship is an eight-month initiatory journey into the
                  ways of seeing, being, knowing, and acting that we consider
                  essential to help us navigate a time of metacrisis and
                  civilizational transition with greater wisdom and
                  responsibility.
                </p>

                <p className="leading-relaxed">
                  To hold a process of this depth, we are experimenting with
                  what we call an{" "}
                  <strong className="font-medium text-foreground">
                    Architecture of Transformation
                  </strong>
                  : a living developmental ecology of practices, inquiry,
                  training, mentorship, immersive experiences, community, and
                  accompaniment designed to create the conditions for deeper
                  human transformation to take root.
                </p>
              </div>
            </div>

            {/* Architecture */}
            <div className="mx-auto mt-10 max-w-4xl border-y border-border">
              {architecture.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid gap-2 py-4 md:grid-cols-[160px_1fr] md:gap-8 ${
                    index !== architecture.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  <span className="font-serif text-lg font-medium text-foreground">
                    {item.title}
                  </span>

                  <span className="italic text-muted-foreground">
                    {item.question}
                  </span>
                </div>
              ))}
            </div>

            {/* Living Questions */}
            <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-[#D9A01B] px-6 py-8 text-center md:px-10">
              <p className="text-sm font-medium uppercase tracking-wide text-white/80">
                Three living questions accompany the entire journey
              </p>

              <p className="mt-4 font-serif text-2xl font-medium text-white md:text-3xl">
                Who are we? &nbsp; Where are we? &nbsp; What is being asked of
                us?
              </p>

              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/90">
                These are not questions to be answered and set aside, but
                living inquiries we learn to be more intimate with. Over the
                eight months, we hold them as we move through five
                interconnected Streams of Transformation.
              </p>
            </div>
          </div>
        </section>

        {/* FIVE STREAMS */}
        <section className="bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-4xl">
              <span className="text-sm font-medium uppercase tracking-wide text-[#B88610]">
                The Five Streams of Transformation
              </span>

              <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl">
                What dimensions of life does our transformation engage?
              </h2>

              <p className="mt-5 leading-relaxed text-muted-foreground">
                Each stream is a portal into a dimension of life with which we
                seek to deepen our relationship. Open any stream to explore the
                questions, practices, lineages, and people informing it.
              </p>
            </div>

            <div className="space-y-4">
              {streams.map((stream) => (
                <details
                  key={stream.title}
                  className={`overflow-hidden rounded-2xl border border-border border-t-4 ${stream.accent} ${stream.soft}`}
                >
                  <summary className="cursor-pointer list-none px-6 py-6 [&::-webkit-details-marker]:hidden md:px-8">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span
                            className={`font-serif text-3xl font-medium ${stream.numberColor}`}
                          >
                            {stream.number}
                          </span>

                          <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
                            {stream.title}
                          </h3>

                          <span className="text-muted-foreground/40">—</span>

                          <span className="text-sm font-medium text-muted-foreground">
                            {stream.subtitle}
                          </span>
                        </div>

                        <p className="mt-3 max-w-3xl font-serif text-base italic leading-relaxed text-muted-foreground md:text-lg">
                          {stream.question}
                        </p>
                      </div>

                      <span
                        className={`mt-1 shrink-0 text-2xl ${stream.numberColor}`}
                      >
                        +
                      </span>
                    </div>
                  </summary>

                  <div className="border-t border-border/70 bg-background/60 px-6 py-7 md:px-8">
                    <div className="space-y-5 text-muted-foreground">
                      {stream.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-7 border-t border-border pt-5">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/60">
                        People we are learning with / voices informing this
                        stream
                      </p>

                      <p className="mt-2 font-serif text-base leading-relaxed text-foreground">
                        {stream.voices}
                      </p>

                      <p
                        className={`mt-4 text-sm font-medium ${stream.numberColor}`}
                      >
                        {stream.resourceText}
                      </p>
                    </div>
                  </div>
                </details>
              ))}
            </div>

            {/* Portal Questions */}
            <div className="mx-auto mt-12 max-w-4xl">
              <p className="mb-6 leading-relaxed text-muted-foreground">
                In this way, the five Streams of Transformation become portals
                for shifting our ways of relating to life:
              </p>

              <div className="space-y-3">
                {[
                  [
                    "The Sacred",
                    "What becomes possible when life is experienced as sacred rather than valueless?",
                  ],
                  [
                    "Soul",
                    "What becomes possible when we relate to ourselves and others from wholeness rather than fragmentation?",
                  ],
                  [
                    "Systems",
                    "What becomes possible when we perceive relationships, patterns, and interdependence rather than isolated problems?",
                  ],
                  [
                    "Soil",
                    "What becomes possible when the Earth is encountered as kin, alive and talking to us rather than resource?",
                  ],
                  [
                    "Service",
                    "What becomes possible when action emerges from interbeing rather than separation?",
                  ],
                ].map(([title, question]) => (
                  <div
                    key={title}
                    className="grid gap-1 border-b border-border pb-3 md:grid-cols-[120px_1fr] md:gap-6"
                  >
                    <span className="font-medium text-foreground">
                      {title} asks →
                    </span>

                    <span className="italic text-muted-foreground">
                      {question}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PEDAGOGY */}
        <section className="bg-[#F8F6F1] py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <span className="text-sm font-medium uppercase tracking-wide text-cyan-800">
                The Pedagogy
              </span>

              <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl">
                Learning to Perceive, Participate and Sense More Deeply in
                Reality
              </h2>

              <p className="mt-3 font-serif text-lg italic text-muted-foreground">
                How does transformation happen?
              </p>

              <div className="mt-8 space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  The Five Streams describe the dimensions of life we will
                  encounter. Our pedagogy asks a different question: How must we
                  encounter them for what we come to know to actually transform
                  how we live?
                </p>

                <p className="leading-relaxed">
                  We have developed extraordinary intellectual understanding of
                  ecological breakdown, technological risk, systemic incentives,
                  and the metacrisis, while continuing to organize our lives
                  around many of the same desires, habits, relationships, and
                  definitions of success that reproduce them.
                </p>

                <p className="font-serif text-xl font-medium text-foreground md:text-2xl">
                  Knowing something is not the same as being transformed by
                  what we know.
                </p>

                <p className="leading-relaxed">
                  Education in a time of metacrisis must therefore help bridge a
                  deeper knowing–becoming–doing gap: allowing what we encounter
                  to move beyond ideas we understand and begin reshaping how we
                  perceive, relate, choose, work, consume, and participate in
                  the world.
                </p>

                <p className="leading-relaxed">
                  Modern education has cultivated extraordinary capacities for
                  abstraction, analysis, and explanation. These capacities are
                  indispensable, but they are not the whole of human perception.
                  Reality exceeds what any single way of knowing can disclose.
                </p>

                <p className="leading-relaxed">
                  We call our approach{" "}
                  <strong className="font-medium text-foreground">
                    Relational Ontological Pedagogy
                  </strong>
                  : an education that seeks to refine how we perceive reality,
                  deepen how we participate in what we perceive, cultivate our
                  capacity to sense and discern together, and allow what we
                  encounter to reshape who we become and how we live.
                </p>
              </div>

              <p className="mt-8 font-serif text-xl italic text-[#B88610] md:text-2xl">
                Refine perception. Deepen participation. Sense together.
                Transform how we live.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {pedagogyMovements.map((movement) => (
                <article
                  key={movement.title}
                  className={`border-t-4 ${movement.accent} bg-background p-6`}
                >
                  <h3 className="font-serif text-xl font-medium text-foreground md:text-2xl">
                    {movement.title}{" "}
                    <span className="text-muted-foreground">—</span>{" "}
                    {movement.subtitle}
                  </h3>

                  <p className="mt-3 font-serif italic leading-relaxed text-muted-foreground">
                    {movement.question}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {movement.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-4xl rounded-r-xl border-l-4 border-[#D9A01B] bg-[#FFF9E9] px-6 py-7 md:px-8">
              <p className="text-sm uppercase tracking-wide text-[#B88610]">
                At the heart of our pedagogy
              </p>

              <p className="mt-3 font-serif text-xl leading-relaxed text-foreground md:text-2xl">
                Can we become the kind of people—and the kind of community—whose
                way of living becomes increasingly coherent with what we have
                learned to perceive as true, valuable, and sacred?
              </p>

              <p className="mt-5 leading-relaxed text-muted-foreground">
                Our aspiration is not simply to understand interdependence,
                sacredness, and the intrinsic worth of a life, but to become
                capable of living from them—individually and together.
              </p>

              <p className="mt-5 text-sm font-medium text-foreground">
                Go Deeper on Relational Ontological Pedagogy →
              </p>
            </div>
          </div>
        </section>

        {/* STRUCTURE */}
        <section className="bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <span className="text-sm font-medium uppercase tracking-wide text-olive">
                The Structure
              </span>

              <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl">
                What Sustains Transformation Over Time
              </h2>

              <div className="mt-8 space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  The Fellowship is held by a developmental ecology of immersive
                  experiences, sustained practice, collective inquiry, intimate
                  relationships, mentorship, accompaniment, and spaces for
                  integration.
                </p>

                <p className="leading-relaxed">
                  Rather than just moving through a sequence of courses or
                  isolated experiences, we invite participants into a shared
                  rhythm of immersion, practice, relationship, inquiry,
                  integration, and reflection, allowing what we encounter to be
                  tended with care, deepen over time, and gradually shift the
                  way we live. The curriculum we are designing definitely
                  matters, but we are even more interested in cultivating the
                  conditions of care, support, trust and accompaniment we
                  consider essential for the depth of transformation and
                  unfoldment required at this moment.
                </p>
              </div>

              <h3 className="mt-10 font-serif text-2xl font-medium text-foreground">
                The Ecology of Transformation Holding the Journey
              </h3>
            </div>

            <div className="mt-8 space-y-4">
              {/* 01 CORE RHYTHM */}
              <details className="overflow-hidden rounded-2xl border border-border bg-[#FFF9E9]">
                <summary className="cursor-pointer list-none px-6 py-6 [&::-webkit-details-marker]:hidden md:px-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="text-sm font-medium uppercase tracking-wide text-[#B88610]">
                        01 — The Core Rhythm
                      </span>

                      <h3 className="mt-2 font-serif text-xl font-medium text-foreground md:text-2xl">
                        The recurring experiences that carry the journey forward
                      </h3>
                    </div>

                    <span className="text-2xl text-[#B88610]">+</span>
                  </div>
                </summary>

                <div className="space-y-4 border-t border-[#D9A01B]/20 bg-background px-6 py-6 md:px-8">
                  {/* RETREATS */}
                  <details className="rounded-xl border border-border bg-cream">
                    <summary className="cursor-pointer list-none px-5 py-5 [&::-webkit-details-marker]:hidden">
                      <div className="flex justify-between gap-6">
                        <div>
                          <h4 className="font-serif text-xl font-medium text-foreground">
                            Immersive Retreats
                          </h4>
                          <p className="mt-1 text-sm italic text-muted-foreground">
                            Step outside ordinary life to encounter it more
                            deeply.
                          </p>
                        </div>

                        <span className="text-xl text-olive">+</span>
                      </div>
                    </summary>

                    <div className="space-y-6 border-t border-border px-5 py-6 text-muted-foreground">
                      <p className="leading-relaxed">
                        Three week-long retreats anchor the beginning, middle,
                        and completion of the Fellowship. They are our deepest
                        moments of immersion. Sanctuaries of transformation
                        where the rhythms of ordinary life loosen enough for
                        deeper practice, silence, relationship, ritual, inquiry,
                        and communal life to become possible.
                      </p>

                      <p className="leading-relaxed">
                        During these we slow down, listen deeply, practice
                        together, spend time with land and silence, tend the
                        relational field, grieve and celebrate, enter rites of
                        passage, come in contact with different guests, and
                        experiment with ways of being that we may want to carry
                        more fully into our lives.
                      </p>

                      <p className="leading-relaxed">
                        Each retreat is focused on exploring one or two of the
                        Streams of Transformation—The Sacred, Soul, Systems,
                        Soil and Society—into greater depth.
                      </p>

                      <p className="leading-relaxed">
                        The retreats are also experiments in communal life. The
                        participants do not simply attend the retreat, but help
                        care for conditions that make living together possible.
                        Participants carry shared responsibilities for spaces,
                        meals, transitions, and the many ordinary acts required
                        for healthy community life.
                      </p>

                      {/* Opening */}
                      <details className="rounded-lg border border-border bg-background">
                        <summary className="cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
                          <div className="flex justify-between gap-5">
                            <div>
                              <p className="font-medium text-foreground">
                                Opening Retreat — Inviting the Sacred
                              </p>
                              <p className="mt-1 text-sm italic">
                                Tending to the Soul of Our Community
                              </p>
                              <p className="mt-2 text-xs text-[#B88610]">
                                Feb 7th–14th, 2026 · São Paulo
                              </p>
                            </div>

                            <span className="text-lg text-[#B88610]">+</span>
                          </div>
                        </summary>

                        <div className="space-y-4 border-t border-border px-5 py-5">
                          <p className="leading-relaxed">
                            The first retreat is where we begin to come into
                            more intimate relationships with ourselves, each
                            other, and the sacred. Through contemplative and
                            relational practices of presencing, attunement, deep
                            listening, relationality, emergent dialogue,
                            awareness, story sharing and authentic communication,
                            we begin cultivating the relational soil from which
                            the rest of the Fellowship can grow.
                          </p>

                          <p className="leading-relaxed">
                            Alongside these practices, we will enter shared
                            rituals and ceremonies that mark our crossing into
                            the journey together, helping us step into a deeper
                            field of transformation and become more sensitive to
                            the sacred. Over time, we hope to experience the
                            community not simply as a collection of individuals,
                            but as a living collective body—learning to move as
                            one river, to care for the whole we are becoming
                            together, and to belong to something larger than
                            ourselves.
                          </p>

                          <p className="font-medium text-foreground">
                            This is where the soul and culture of our community
                            begin to take shape.
                          </p>
                        </div>
                      </details>

                      {/* Midpoint */}
                      <details className="rounded-lg border border-border bg-background">
                        <summary className="cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
                          <div className="flex justify-between gap-5">
                            <div>
                              <p className="font-medium text-foreground">
                                Midpoint Retreat — Feeling the Metacrisis
                              </p>
                              <p className="mt-1 text-sm italic">
                                Relating to the Systems &amp; Territories We Are
                                Embedded In
                              </p>
                              <p className="mt-2 text-xs text-cyan-800">
                                July 11th–18th, 2027 · TBD
                              </p>
                            </div>

                            <span className="text-lg text-cyan-800">+</span>
                          </div>
                        </summary>

                        <div className="space-y-4 border-t border-border px-5 py-5">
                          <p className="leading-relaxed">
                            Here we turn more directly toward the complexity of
                            the systems and histories we participate in, the
                            colonial habits of being still embedded in our
                            civilization, the possibility of systemic breakdown,
                            the underlying causes of the metacrisis, and the ways
                            of perceiving, understanding and organizing life
                            that have brought us here.
                          </p>

                          <p className="leading-relaxed">
                            We practice developing our capacity for collective
                            sensemaking, staying present with complexity without
                            collapsing into abstraction or simplistic solutions,
                            and becoming more capable of sensing patterns,
                            tensions, aliveness and emergent possibilities
                            together rather than only as isolated individuals.
                          </p>

                          <p className="leading-relaxed">
                            We are in conversation with Indigenous and Quilombola
                            communities with whom we already have relationships,
                            exploring the possibility of holding this retreat
                            within their territory. This is not yet confirmed,
                            but it is an intention we are tending with care. At
                            minimum, we will spend meaningful time learning with
                            these communities by encountering ways of seeing,
                            being, and relating to life that may unsettle some of
                            what our dominant culture has taught us to take for
                            granted.
                          </p>
                        </div>
                      </details>

                      {/* Closing */}
                      <details className="rounded-lg border border-border bg-background">
                        <summary className="cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
                          <div className="flex justify-between gap-5">
                            <div>
                              <p className="font-medium text-foreground">
                                Closing Retreat — Serving the Whole
                              </p>
                              <p className="mt-1 text-sm italic">
                                Contributing to the Emergence of Life-Enhancing
                                Futures
                              </p>
                              <p className="mt-2 text-xs text-crimson">
                                Dec 12th–19, 2027 · São Paulo
                              </p>
                            </div>

                            <span className="text-lg text-crimson">+</span>
                          </div>
                        </summary>

                        <div className="space-y-4 border-t border-border px-5 py-5">
                          <p className="leading-relaxed">
                            The final retreat creates space to metabolize and
                            integrate the journey. Transformation does not
                            happen only through what we experience, but through
                            the time and attention we give to understanding what
                            those experiences have revealed, what has actually
                            changed, and what we are now being asked to carry
                            forward.
                          </p>

                          <p className="leading-relaxed">
                            This is a space to discern what has become precious
                            enough that we want to reorganize our lives around
                            it.
                          </p>

                          <p className="leading-relaxed">
                            We will sit with questions such as: What has changed
                            in us? What remains unresolved? What do we now know
                            to be true that asks something of the way we live?
                            What support will we need to remain faithful to it?
                            What is asking to emerge through each of us—and
                            through this community?
                          </p>

                          <p className="leading-relaxed">
                            We close through reflection, celebration, personal
                            commitments, and forms of vow that help us carry what
                            has been touched into our own lives. The intention is
                            not to leave the Fellowship with a perfect plan, but
                            to sense into what we want to protect, deepen,
                            practice, and offer our lives in service of.
                          </p>

                          <p className="leading-relaxed">
                            The retreat is also a threshold into what this
                            community might become beyond the Fellowship. Our
                            aspiration is not simply to run cohorts and send
                            people on their way, but to cultivate a long-term
                            developmental community capable of continuing to
                            offer relationship, practice, mentorship,
                            experiences, care, and shared responsibility across
                            the years. We hope the Fellowship becomes the
                            beginning of a much longer journey.
                          </p>
                        </div>
                      </details>

                      <p className="font-medium text-foreground">
                        Attendance at all three retreats is required for
                        participation.
                      </p>
                    </div>
                  </details>

                  {/* COLLECTIVE INQUIRY */}
                  <details className="rounded-xl border border-border bg-cream">
                    <summary className="cursor-pointer list-none px-5 py-5 [&::-webkit-details-marker]:hidden">
                      <div className="flex justify-between gap-6">
                        <div>
                          <h4 className="font-serif text-xl font-medium text-foreground">
                            Collective Inquiry
                          </h4>
                          <p className="mt-1 text-sm italic text-muted-foreground">
                            Keep digging and holding questions alive between
                            immersions.
                          </p>
                        </div>

                        <span className="text-xl text-cyan-800">+</span>
                      </div>
                    </summary>

                    <div className="space-y-5 border-t border-border px-5 py-6 text-muted-foreground">
                      <p className="leading-relaxed">
                        Our regular online gatherings sustain the intellectual
                        and collective inquiry of the Fellowship. We encounter
                        new ideas, practices, ontologies, maps, frameworks and
                        wisdom while continuing to deepen what has been opened
                        through the retreats and Five Streams.
                      </p>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="bg-background p-5">
                          <p className="font-medium text-foreground">
                            Community Inquiry
                          </p>
                          <p className="mt-1 text-xs text-cyan-800">
                            Tuesday · 19h to 21h
                          </p>
                          <p className="mt-3 text-sm leading-relaxed">
                            Facilitated by our core team, these sessions
                            introduce new ideas, questions, frameworks, and
                            inquiries, while also deepening the ones that are
                            already alive within the Fellowship. At times, we
                            will study the work of an upcoming guest beforehand
                            so that our encounter with them can begin from a
                            deeper place.
                          </p>
                        </div>

                        <div className="bg-background p-5">
                          <p className="font-medium text-foreground">
                            Wisdom Dialogues
                          </p>
                          <p className="mt-1 text-xs text-[#B88610]">
                            Thursday · 19h to 21h
                          </p>
                          <p className="mt-3 text-sm leading-relaxed">
                            During these sessions, we welcome local and global
                            thinkers, artists, organizers, leaders,
                            contemplatives, elders, practitioners, and wisdom
                            holders whose lives and work are lived responses to
                            this moment of metacrisis.
                          </p>
                          <p className="mt-3 text-sm leading-relaxed">
                            We hope to use these moments, not only to know their
                            work in more depth, but to bring our living
                            questions, decisions, tensions, and paradoxes into
                            conversation with people who may have walked further
                            along particular paths.
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-foreground">
                        Meet some of the people we are learning with →
                      </p>
                    </div>
                  </details>

                  {/* COLLECTIVE PRACTICE */}
                  <details className="rounded-xl border border-border bg-cream">
                    <summary className="cursor-pointer list-none px-5 py-5 [&::-webkit-details-marker]:hidden">
                      <div className="flex justify-between gap-6">
                        <div>
                          <h4 className="font-serif text-xl font-medium text-foreground">
                            Collective Practice
                          </h4>
                          <p className="mt-1 text-sm italic text-muted-foreground">
                            Practice until another way of being becomes
                            available.
                          </p>
                        </div>

                        <span className="text-xl text-crimson">+</span>
                      </div>
                    </summary>

                    <div className="space-y-5 border-t border-border px-5 py-6 text-muted-foreground">
                      <p className="leading-relaxed">
                        Transformation requires more than knowing. During the
                        fellowship, we will enter a rhythm of weekly practice,
                        where we will be engaging with contemplative, relational,
                        and developmental practices long enough for them to begin
                        reshaping how we perceive and relate with life.
                      </p>

                      <p className="font-medium text-foreground">
                        Collective Practice — Wednesdays · 19h30–21h
                      </p>

                      <p className="leading-relaxed">
                        One of the things that differentiate our work is that we
                        understand ourselves as practitioners: people interested
                        not only in ideas, but in becoming increasingly capable
                        of living from what we come to know matters most.
                      </p>

                      <p className="leading-relaxed">
                        In this, we draw inspiration from wisdom traditions and
                        spiritual lineages that have long understood that
                        worldview alone is insufficient for transformation. A
                        way of seeing the world must be accompanied by practices
                        through which that way of seeing can gradually become a
                        way of being.
                      </p>

                      <p className="leading-relaxed">
                        Every six to eight weeks, we therefore enter a sustained
                        practice cycle around specific contemplative,
                        meditative, and relational practices that deepen our
                        capacity to be with and hold space for ourselves and
                        others with greater intimacy, attention, presence,
                        attunement, love, and compassion amid complexity.
                      </p>

                      <p className="leading-relaxed">
                        Our practice ecology draws inspiration from lineages and
                        approaches including Transformational Connection,
                        Authentic Relating, Insight Dialogue, Internal Family
                        Systems, Aletheia Unfoldment, Compassion Cultivation
                        Training, Insight Meditation, Zen Buddhism, Soulmaking
                        Dharma, Plum Village, and Vipassana.
                      </p>
                    </div>
                  </details>
                </div>
              </details>

              {/* 02 RELATIONAL WEB */}
              <details className="overflow-hidden rounded-2xl border border-border bg-[#FFF4F2]">
                <summary className="cursor-pointer list-none px-6 py-6 [&::-webkit-details-marker]:hidden md:px-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="text-sm font-medium uppercase tracking-wide text-crimson">
                        02 — The Relational Web
                      </span>

                      <h3 className="mt-2 font-serif text-xl font-medium text-foreground md:text-2xl">
                        The relationships that accompany who you are becoming
                      </h3>
                    </div>

                    <span className="text-2xl text-crimson">+</span>
                  </div>
                </summary>

                <div className="space-y-5 border-t border-crimson/15 bg-background px-6 py-7 md:px-8">
                  <p className="leading-relaxed text-muted-foreground">
                    This journey is not meant to be navigated alone. It can be
                    overwhelming, challenging and touch a lot of delicate places
                    within ourselves that will need tending, care and
                    attunement. Instead of relying on a single facilitator and
                    staff to carry everything, the Fellowship creates multiple
                    layers of accompaniment: intimate relationships with peers
                    who know us over time, individual therapeutic or coaching
                    support, relationships with mentors who have walked further
                    along particular paths, and small groups that can offer a
                    deeper sense of belonging.
                  </p>

                  <details className="rounded-xl border border-border bg-cream">
                    <summary className="cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
                      <div className="flex justify-between gap-6">
                        <div>
                          <p className="font-medium text-foreground">
                            Dharma Family
                          </p>
                          <p className="mt-1 text-sm italic text-muted-foreground">
                            Depth grows in small circles of trust.
                          </p>
                        </div>
                        <span className="text-lg text-crimson">+</span>
                      </div>
                    </summary>

                    <p className="border-t border-border px-5 py-5 leading-relaxed text-muted-foreground">
                      Intimate groups of three to four participants and a mentor
                      walk together across the full Fellowship. They become a
                      consistent place for reflection, truth, mutual care,
                      accountability, and the kind of precise form of love and
                      care that can best take place in smaller containers.
                    </p>
                  </details>

                  <details className="rounded-xl border border-border bg-cream">
                    <summary className="cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
                      <div className="flex justify-between gap-6">
                        <div>
                          <p className="font-medium text-foreground">
                            Mentorship
                          </p>
                          <p className="mt-1 text-sm italic text-muted-foreground">
                            Some thresholds cannot be crossed alone.
                          </p>
                        </div>
                        <span className="text-lg text-[#B88610]">+</span>
                      </div>
                    </summary>

                    <div className="space-y-4 border-t border-border px-5 py-5 text-muted-foreground">
                      <p className="leading-relaxed">
                        Throughout the journey, we help participants form
                        relationships with practitioners, teachers, leaders,
                        elders, and others whose experience may speak directly
                        to the questions they are living at this moment.
                      </p>

                      <p className="leading-relaxed">
                        We do not automatically assign every participant to a
                        predetermined mentor. We believe meaningful mentorship
                        grows through resonance, trust, and genuine relationships
                        built over time.
                      </p>

                      <p className="leading-relaxed">
                        Instead, we will incentivize participants to be
                        constantly looking for possible mentors in their life,
                        and will also create opportunities for them to meet the
                        wider constellation of people connected to our
                        community. As particular questions, fields of interest,
                        or life decisions emerge for each participant we can
                        help with specific connections from which deeper
                        mentorship relationships may grow.
                      </p>
                    </div>
                  </details>

                  <details className="rounded-xl border border-border bg-cream">
                    <summary className="cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
                      <div className="flex justify-between gap-6">
                        <div>
                          <p className="font-medium text-foreground">
                            Therapy &amp; Coaching
                          </p>
                          <p className="mt-1 text-sm italic text-muted-foreground">
                            Tend what the journey stirs.
                          </p>
                        </div>
                        <span className="text-lg text-olive">+</span>
                      </div>
                    </summary>

                    <div className="space-y-4 border-t border-border px-5 py-5 text-muted-foreground">
                      <p className="leading-relaxed">
                        Deep spaces of transformation can bring us into contact
                        with psychological patterns, wounds, desires, questions,
                        and decisions that deserve more individual attention
                        than the Fellowship community itself can, or should,
                        provide.
                      </p>

                      <p className="leading-relaxed">
                        Participants may therefore choose to receive individual
                        therapeutic or coaching accompaniment throughout the
                        journey.
                      </p>

                      <p className="leading-relaxed">
                        We aim to connect participants with therapists familiar
                        with approaches such as Internal Family Systems and with
                        coaches who understand the existential and systemic
                        questions at the heart of this Fellowship.
                      </p>

                      <p className="leading-relaxed">
                        Therapy can offer a dedicated space for tending
                        psychological and emotional material that arises.
                        Coaching can support sensing deeply into current desires
                        and longings, responsibility, choices, relationships,
                        and how one&apos;s inner transformation meets the
                        realities of everyday life.
                      </p>

                      <p className="leading-relaxed">
                        These spaces complement the Fellowship while remaining
                        distinct from the educational and communal container
                        itself. The Fellowship team does not receive the content
                        of therapeutic or coaching sessions unless a participant
                        chooses to share it.
                      </p>

                      <p className="text-sm italic leading-relaxed">
                        We are particularly drawn to Internal Family Systems
                        because it offers a compassionate way of meeting inner
                        complexity rather than fighting it. Learning to
                        recognize our different parts without being governed by
                        them can allow us to cultivate a quality of wholeness
                        and inner spaciousness needed to meet complexity outside
                        ourselves as well.
                      </p>
                    </div>
                  </details>
                </div>
              </details>

              {/* 03 INTEGRATION */}
              <details className="overflow-hidden rounded-2xl border border-border bg-[#EFF8F8]">
                <summary className="cursor-pointer list-none px-6 py-6 [&::-webkit-details-marker]:hidden md:px-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="text-sm font-medium uppercase tracking-wide text-cyan-800">
                        03 — The Integration Rhythm
                      </span>

                      <h3 className="mt-2 font-serif text-xl font-medium text-foreground md:text-2xl">
                        Transformation needs time to settle
                      </h3>
                    </div>

                    <span className="text-2xl text-cyan-800">+</span>
                  </div>
                </summary>

                <div className="space-y-5 border-t border-cyan-800/15 bg-background px-6 py-7 md:px-8">
                  <p className="leading-relaxed text-muted-foreground">
                    Not every week needs to bring something new. At the end of
                    each Stream, we interrupt the regular rhythm of the
                    Fellowship and create space to pause, metabolize, listen,
                    repair, and integrate.
                  </p>

                  <p className="leading-relaxed text-muted-foreground">
                    These weeks help us notice what has actually moved, not only
                    in our understanding, but within our relationships,
                    practices, lives, and collective field.
                  </p>

                  <details className="rounded-xl border border-border bg-cream">
                    <summary className="cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
                      <div className="flex justify-between gap-6">
                        <p className="font-medium text-foreground">
                          Tending the Field
                        </p>
                        <span className="text-lg text-cyan-800">+</span>
                      </div>
                    </summary>

                    <div className="space-y-4 border-t border-border px-5 py-5 text-muted-foreground">
                      <p className="leading-relaxed">
                        Inspired by the Plum Village practice of Beginning Anew,
                        we create a recurring space to tend the health of our
                        relationships before distance, hurt, or aversion harden.
                      </p>

                      <p className="leading-relaxed">
                        We nurture a space to practice appreciation, honest
                        communication, acknowledgement of regrets and hurts,
                        accountability, forgiveness, and repair. We learn to
                        become more sensitive to how our individual actions
                        affect the collective body, and that trust and intimacy
                        do not grow by avoiding rupture, but by developing the
                        capacity to meet rupture with truth, care, and
                        responsibility.
                      </p>

                      <p className="font-medium text-foreground">
                        The intention is not a community without conflict, but
                        one increasingly interested and capable of caring for
                        what happens between us.
                      </p>
                    </div>
                  </details>

                  <details className="rounded-xl border border-border bg-cream">
                    <summary className="cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
                      <div className="flex justify-between gap-6">
                        <p className="font-medium text-foreground">
                          Resourcing Together
                        </p>
                        <span className="text-lg text-olive">+</span>
                      </div>
                    </summary>

                    <div className="space-y-4 border-t border-border px-5 py-5 text-muted-foreground">
                      <p className="leading-relaxed">
                        This space is for us to engage with a simple and
                        important question: What does each of us actually need
                        in order to feel sufficiently resourced to live well and
                        offer what we are here to offer?
                      </p>

                      <p className="leading-relaxed">
                        We are inviting the community not to treat resources as
                        an entirely private problem each person must solve alone.
                        We want to explore what becomes possible when a
                        community begins to notice what it has in abundance,
                        what it needs, and what might be able to circulate
                        between us.
                      </p>

                      <p className="leading-relaxed">
                        Resources may take the form of money, but also time,
                        knowledge, introductions, opportunities, skills, places
                        to stay, work, food, attention, access, friendship, and
                        practical support. The aim is not to erase personal
                        responsibility or create dependency, but to loosen the
                        fantasy of complete self-sufficiency and experiment with
                        interdependence as something material and lived, not
                        merely something we believe.
                      </p>

                      <p className="leading-relaxed">
                        We hope to experiment with forms of mutual support that
                        make our lives less isolated, less precarious, and less
                        dependent on having every need mediated through the
                        market economy, while also strengthening our capacity to
                        share resources, carry risk together, and support one
                        another in living more fully in alignment with what
                        matters.
                      </p>
                    </div>
                  </details>
                </div>
              </details>

              {/* 04 EMERGENT */}
              <details className="overflow-hidden rounded-2xl border border-border bg-[#F3F7EC]">
                <summary className="cursor-pointer list-none px-6 py-6 [&::-webkit-details-marker]:hidden md:px-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="text-sm font-medium uppercase tracking-wide text-olive">
                        04 — Emergent Spaces
                      </span>

                      <h3 className="mt-2 font-serif text-xl font-medium text-foreground md:text-2xl">
                        Leave room for what the journey itself begins to ask for
                      </h3>
                    </div>

                    <span className="text-2xl text-olive">+</span>
                  </div>
                </summary>

                <div className="space-y-6 border-t border-olive/15 bg-background px-6 py-7 text-muted-foreground md:px-8">
                  <p className="leading-relaxed">
                    Even though this Fellowship has been carefully designed, not
                    everything can be planned in advance. As the questions,
                    relationships, challenges, and desires of the cohort become
                    clearer, we leave room to create additional spaces in
                    response to what is genuinely alive in the cohort.
                  </p>

                  <div>
                    <h4 className="font-serif text-xl font-medium text-foreground">
                      Philosophical Dinners
                    </h4>

                    <p className="mt-3 leading-relaxed">
                      Three to four times during the Fellowship, we plan to
                      gather in São Paulo for intimate dinners with thinkers,
                      elders, artists, organizers, practitioners, and friends of
                      our community.
                    </p>

                    <p className="mt-3 leading-relaxed">
                      These evenings are not a presentation or panel. They are
                      organized around a meaningful question the cohort has been
                      wrestling with, and worth spending a night with. We will
                      have an evening of food, conversations and relationships
                      with specific guests who care deeply about the state of
                      our world, have been thinking deeply about what needs to be
                      done, and are attempting to live in response.
                    </p>
                  </div>

                  <details className="rounded-xl border border-border bg-cream">
                    <summary className="cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
                      <div className="flex justify-between gap-6">
                        <div>
                          <p className="font-medium text-foreground">
                            Emergent Immersions
                          </p>
                          <p className="mt-1 text-sm italic">
                            Additional weekend experiences created in response
                            to what becomes alive.
                          </p>
                        </div>
                        <span className="text-lg text-olive">+</span>
                      </div>
                    </summary>

                    <div className="space-y-4 border-t border-border px-5 py-5">
                      <p className="leading-relaxed">
                        Across the eight months, additional weekend immersions
                        may emerge around questions, practices, or capacities
                        the cohort wants to explore more fully, but that
                        haven&apos;t necessarily been part of the “core
                        curriculum” of the Fellowship.
                      </p>

                      <p className="leading-relaxed">
                        These are not predetermined workshops delivered to the
                        cohort. They emerge from the cohort itself, by sensing
                        into the needs and desires most alive within the group.
                      </p>

                      <p className="leading-relaxed">
                        Participants will help out with this process by
                        discerning what feels most needed, identifying someone
                        or something we genuinely want to learn with, making
                        invitations, helping organize the experience, and where
                        necessary finding the resources required to bring it
                        into being.
                      </p>

                      <p className="leading-relaxed">
                        This might take the form of a weekend where we invite an
                        expert on Nonviolent Communication, Warm Data, Theory U,
                        Musica do Circulo, restorative practices, or relational
                        work. It could also become a time for serving a specific
                        community in need, travelling together to an important
                        gathering or event, or something none of us can yet
                        anticipate.
                      </p>

                      <p className="font-medium text-foreground">
                        Part of the learning here is not only participating in
                        what is offered, but becoming capable of bringing into
                        being what the community senses it needs.
                      </p>
                    </div>
                  </details>
                </div>
              </details>
            </div>

            {/* STRUCTURE AS PEDAGOGY */}
            <div className="mx-auto mt-12 max-w-4xl">
              <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
                The Structure Is Part of the Pedagogy
              </h3>

              <div className="mt-6 space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  The purpose of this developmental ecology is not to fill your
                  calendar. The entire structure of the Fellowship is part of
                  the learning itself.
                </p>

                <p className="leading-relaxed">
                  Many of us live inside rhythms organized by urgency,
                  fragmentation, constant input, individualized responsibility,
                  economic pressure, and too little protected space to ask the
                  questions that actually matter. These rhythms and habits
                  continually shape what we pay attention to, what we desire,
                  and what kinds of lives feel possible.
                </p>

                <p className="leading-relaxed">
                  The Fellowship attempts to create a temporary counter-rhythm:
                  enough continuity, relationship, practice, accountability,
                  care, and shared responsibility to interrupt some of those
                  patterns and experiment with different ones, until they
                  become more fully integrated in our lives.
                </p>

                <p className="font-medium leading-relaxed text-foreground">
                  The Fellowship itself becomes an experiment in creating the
                  structures, habits and commitments that best support ourselves
                  to align our lives with what we have come to recognize as true
                  and worthy, and learning how to do so together, as a
                  community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICAL COMMITMENT */}
        <section className="bg-cream py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <span className="text-sm font-medium uppercase tracking-wide text-cyan-800">
                Practical Commitment
              </span>

              <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl">
                What participation asks of you
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Duration", "8 months"],
                ["Cohort", "15–20 participants"],
                [
                  "Core format",
                  "Three residential immersions, weekly online gatherings, sustained practice, Family Groups, individual accompaniment, and Integration Weeks",
                ],
                [
                  "Location",
                  "Brazil, with most in-person gatherings in São Paulo and one immersion in Bahia",
                ],
                [
                  "Weekly commitment",
                  "Approximately 8–10 hours during regular Fellowship weeks",
                ],
                [
                  "Participation",
                  "Full participation in the core journey is expected.",
                ],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-olive">
                    {label}
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground">{value}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-4 max-w-4xl rounded-xl border border-[#D9A01B]/30 bg-[#FFF9E9] p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-[#B88610]">
                Key dates
              </p>
              <p className="mt-2 text-foreground">
                September 12, 2026 – May 6, 2027
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Detailed calendar →
              </p>
            </div>

            <details className="mx-auto mt-8 max-w-4xl rounded-xl border border-border bg-background">
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 [&::-webkit-details-marker]:hidden">
                <span className="font-medium text-foreground">
                  A Note About Emergence
                </span>
                <span className="text-xl text-[#B88610]">+</span>
              </summary>

              <div className="space-y-4 border-t border-border px-6 py-6 text-muted-foreground">
                <p className="leading-relaxed">
                  The structure of the Fellowship is intentional, but not rigid.
                </p>

                <p className="leading-relaxed">
                  Because this is our founding cohort, we will move through the
                  journey with deep listening and responsiveness, continually
                  sensing what the community needs, what questions are becoming
                  alive, and what forms of support might help the work deepen.
                </p>

                <p className="leading-relaxed">
                  Some content, practices, guest encounters, or additional
                  spaces may therefore emerge along the way.
                </p>

                <p className="font-medium text-foreground">
                  We want the structure to be strong enough to hold us, and
                  alive enough to respond to what is actually emerging.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <span className="text-sm font-medium uppercase tracking-wide text-crimson">
              Who This Is For
            </span>

            <blockquote className="mt-8 border-l-4 border-crimson pl-6 font-serif text-lg italic leading-relaxed text-muted-foreground md:text-xl">
              &ldquo;That&apos;s what being an imaginal cell in the transition
              from caterpillar to butterfly really means. It means taking some
              empowered responsibility for being someone who recognizes that
              you can&apos;t just run the instruction manual that was given
              historically, and the new instruction manual doesn&apos;t exist
              yet. It&apos;s actually the time of people in that liminal phase
              to work on developing what are these new structures.&rdquo;
            </blockquote>

            <cite className="mt-4 block text-sm font-medium not-italic text-muted-foreground/70">
              — Daniel Schmachtenberger
            </cite>

            <div className="mt-10 space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                We are calling together postactivist educators, thinkers,
                artists, leaders, and change-makers who refuse to look away from
                the crises of our time, who feel the complexity of this time
                between worlds, and who are searching for ways to better
                navigate and respond to it.
              </p>

              <p className="leading-relaxed">
                This first Fellowship is serving Brazilian young adults between
                18 and 29 who are questioning the limitations of conventional
                approaches to systems change, transformation, and education; who
                long to participate meaningfully in what comes next; and who
                sense that any meaningful response to this moment must begin in
                a fundamentally different relationship with all life: self,
                other, world, and the sacred.
              </p>
            </div>

            <details className="mt-8 rounded-xl border border-border bg-[#FFF9E9]">
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 [&::-webkit-details-marker]:hidden">
                <span className="font-medium text-foreground">
                  This might be for you if...
                </span>
                <span className="text-xl text-[#B88610]">+</span>
              </summary>

              <div className="border-t border-[#D9A01B]/20 px-6 py-6">
                <ul className="space-y-4">
                  {fitSignals.map((signal) => (
                    <li
                      key={signal}
                      className="flex items-start gap-3 leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A01B]" />
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            <details className="mt-4 rounded-xl border border-border bg-[#F3F7EC]">
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 [&::-webkit-details-marker]:hidden">
                <span className="font-medium text-foreground">
                  You might come from many different paths
                </span>
                <span className="text-xl text-olive">+</span>
              </summary>

              <div className="border-t border-olive/15 px-6 py-6">
                <ul className="space-y-4">
                  {possiblePaths.map((path) => (
                    <li
                      key={path}
                      className="flex items-start gap-3 leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
                      <span>{path}</span>
                    </li>
                  ))}

                  <li className="font-medium text-foreground">
                    Or perhaps none of these descriptions quite fit.
                  </li>
                </ul>
              </div>
            </details>

            <p className="mt-8 font-serif text-xl leading-relaxed text-foreground">
              What matters most to us is not your title or what you have already
              accomplished, but the sincerity of your inquiry, the depth of your
              commitment, and your willingness to let your life become part of
              the response.
            </p>

            {/* Still unsure */}
            <div className="mt-10 rounded-xl bg-cream p-6 md:p-8">
              <h3 className="font-serif text-2xl font-medium text-foreground">
                Still unsure?
              </h3>

              <p className="mt-3 leading-relaxed text-muted-foreground">
                If something here resonates but you are unsure whether this is
                the right moment—or whether this Fellowship is the right
                container for you—we would love to have a conversation.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:fellowship@mettatropical.org?subject=Fellowship%20Conversation"
                  className="inline-flex items-center justify-center rounded-md bg-olive px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  Schedule a conversation
                </a>

                <a
                  href="mailto:fellowship@mettatropical.org"
                  className="inline-flex items-center justify-center rounded-md border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background"
                >
                  Write to us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OFFERED AS A GIFT */}
        <section className="bg-[#FFF9E9] py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <span className="text-sm font-medium uppercase tracking-wide text-[#B88610]">
              Offered as a Gift
            </span>

            <blockquote className="mt-8 border-l-4 border-[#D9A01B] pl-6 font-serif text-lg italic leading-relaxed text-muted-foreground md:text-xl">
              &ldquo;In the Story of Separation, giving does not come naturally.
              If I&apos;m separate from you, then more for me is less for you.
              In the story of Interbeing, life is a gift. We did not earn the
              sun, the water, our breath, or the beating of our hearts. Life is
              a gift.&rdquo;
            </blockquote>

            <cite className="mt-4 block text-sm font-medium not-italic text-muted-foreground/70">
              — Charles Eisenstein
            </cite>

            <div className="mt-10 space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                We believe the practices, relationships, wisdom, and forms of
                community needed to navigate a time of metacrisis should not
                become privileges available only to those who can afford them.
                At a moment when so much is at stake, helping those who feel
                called to serve life wholeheartedly become more capable of
                doing so feels less like a product to sell and more like a
                sacred responsibility we must share.
              </p>

              <p className="leading-relaxed">
                This conviction is also personal. Many of us holding this work
                have spent decades seeking transformational, educational, and
                developmental spaces that deeply shaped our lives, yet access
                to them was often limited by cost. Coming from the Global South,
                opportunities created in the Global North could become
                prohibitively expensive. At times we found scholarships, made
                significant sacrifices to participate, or simply could not
                access experiences we deeply longed for.
              </p>

              <p className="font-serif text-xl font-medium text-foreground md:text-2xl">
                We want to practice something different.
              </p>

              <p className="leading-relaxed">
                For this reason, the Fellowship is offered as a gift, so that
                financial capacity does not determine who has access to the
                forms of formation we believe are increasingly important for
                this time.
              </p>
            </div>

            <details className="mt-8 rounded-xl border border-[#D9A01B]/30 bg-background">
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 [&::-webkit-details-marker]:hidden">
                <span className="font-medium text-foreground">
                  What does “offered as a gift” mean?
                </span>
                <span className="text-xl text-[#B88610]">+</span>
              </summary>

              <div className="space-y-5 border-t border-border px-6 py-6 text-muted-foreground">
                <p className="leading-relaxed">
                  A gift, for us, is not simply a financial model. It is an
                  experiment in loosening the logics of separation,
                  transaction, and scarcity so deeply embedded in us by
                  modernity, and remembering ourselves as interdependent
                  beings—part of the same living movement of giving and
                  receiving.
                </p>

                <p className="leading-relaxed">
                  Rather than reinforcing the familiar reflex that asks:
                </p>

                <p className="font-serif text-lg italic text-foreground">
                  Is this program worth this amount of money? What will I get in
                  return?
                </p>

                <p className="leading-relaxed">
                  We want to create enough space for different questions to
                  become possible:
                </p>

                <p className="font-serif text-lg italic leading-relaxed text-foreground">
                  Does this feel aligned with what this moment of my life is
                  asking of me? Can I fully commit to this wholeheartedly at
                  this moment? What is my heart and soul asking me to move
                  toward?
                </p>

                <p className="font-medium text-foreground">
                  If something in you comes alive in response to that question,
                  we invite you to listen to it.
                </p>

                <p className="leading-relaxed">
                  Offering the Fellowship as a gift does not mean it has no
                  material costs. Retreat spaces, food, facilitation, therapy,
                  teachers, travel support, and the labor of holding this
                  community all require real resources. Some are themselves
                  gifted; others are carried by supporters, practitioners, and
                  friends who believe this work matters and want to make it
                  possible for others. Their generosity allows the central
                  discernment to remain about readiness, resonance, and your
                  current moment rather than your financial situation.
                </p>
              </div>
            </details>

            {/* Gift includes */}
            <div className="mt-8 rounded-xl bg-background p-6 md:p-8">
              <h3 className="font-serif text-2xl font-medium text-foreground">
                This Fellowship gift includes
              </h3>

              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {giftIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A01B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm italic text-muted-foreground">
                Participants are only responsible for transportation to and from
                the in-person retreats.
              </p>
            </div>

            <p className="mt-8 leading-relaxed text-muted-foreground">
              In a culture organized so deeply around scarcity, transactionality,
              and extraction, we want to mess with this mentality, and
              experiment with what becomes possible when we begin to interrupt
              those patterns together.
            </p>

            {/* Collective Resource Fund */}
            <details className="mt-6 rounded-xl border border-olive/20 bg-[#F3F7EC]">
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 [&::-webkit-details-marker]:hidden">
                <span className="font-medium text-foreground">
                  Collective Resource Fund
                </span>
                <span className="text-xl text-olive">+</span>
              </summary>

              <div className="space-y-5 border-t border-olive/15 px-6 py-6 text-muted-foreground">
                <p className="leading-relaxed">
                  Beyond making the Fellowship accessible, we are also
                  experimenting with new ways of relating to resources as a
                  community. Our hope is to create a Collective Resource Fund—a
                  shared pool of resources that can support participants
                  throughout the journey based on real needs and opportunities.
                </p>

                <p className="leading-relaxed">
                  These resources could support: transportation to retreats,
                  complementary developmental experiences, seed funding for
                  projects and initiatives, temporary financial support that
                  help cover basic needs of participants.
                </p>

                <p className="leading-relaxed">
                  The distribution of these resources will happen through a
                  transparent collective process involving participants and the
                  team, inspired by practices of collective resource sharing and
                  gift economies. This is all part of our practice to learn how
                  resources can flow with greater trust, transparency, and care
                  toward where they are most needed.
                </p>

                <p className="font-medium text-foreground">
                  We are currently fundraising for this Collective Resource
                  Fund and hope to have resources available throughout the
                  Fellowship journey.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="apply" className="scroll-mt-24 bg-yellow py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-medium uppercase tracking-wide text-foreground/60">
              Metta Tropical Fellowship
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl lg:text-5xl">
              What is this moment in history asking of your life?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-foreground/80">
              If something in you comes alive in response to this journey, we
              invite you to listen to it.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:fellowship@mettatropical.org?subject=Metta%20Tropical%20Fellowship%20Application"
                className="inline-flex items-center justify-center bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Begin Application
              </a>

              <a
                href="mailto:fellowship@mettatropical.org?subject=Fellowship%20Question"
                className="inline-flex items-center justify-center border border-foreground px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}