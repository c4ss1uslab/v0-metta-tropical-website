import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Metta Tropical Collective",
  description: "An experimental, place-based community of transformation, inquiry and practice, calling together postactivist educators, thinkers, artists, spiritual practitioners and leaders who refuse to look away.",
}

export default function AboutPage() {
  return (
    <>
      {/* 1. Ensure your Navigation component is either fixed or absolute with a transparent/semi-transparent background */}
      <Navigation />
      
      {/* 2. Removed the top padding entirely here so the section starts at the absolute top of the viewport */}
      <main className="w-full">
        {/* 3. Added pt-32 to this section instead, giving the text breathing room while letting the background image fill the top */}
        <section className="relative min-h-[75vh] flex items-center bg-cream overflow-visible pt-32 pb-16 lg:pb-24">
          
          {/* Background Image Container - now stretching to the true top */}
          <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full opacity-90 z-0 pointer-events-none">
            <Image 
              src="https://i.postimg.cc/tJQjdqYk/cosmos-956257560.jpg" 
              alt="Cosmos background" 
              fill 
              className="object-cover object-top"
              priority
            />
            {/* Made the light gradient overlay stronger on mobile viewports */}
            <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/50 to-transparent/30 lg:via-cream/50 lg:to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-center lg:text-left">
<h1 className="font-serif text-4xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 [-webkit-text-stroke:_0.5px_rgba(0,0,0,0.2)] lg:[-webkit-text-stroke:none]">
  Why Metta Tropical Collective?
</h1>
              <blockquote className="translate-y-12 space-y-4 max-w-2xl mx-auto lg:mx-0">
<p
  className="
    font-serif text-lg md:text-xl lg:text-2xl
    leading-relaxed text-foreground italic
    py-1 pl-3
    bg-cream/30 lg:bg-transparent lg:p-0
    bg-[linear-gradient(to_bottom,theme(colors.olive)_0%,theme(colors.olive)_33.333%,#D9A01B_33.333%,#D9A01B_66.666%,theme(colors.crimson)_66.666%,theme(colors.crimson)_100%)]
    bg-[length:2px_100%]
    bg-no-repeat
    bg-left
    lg:bg-none
  "
>
  "A genuinely different future depends far less on the images we create in our minds than on our ability to repair and weave relationships in the present."
</p>
                <figcaption className="text-[#5C4033] lg:text-olive font-semibold text-xs tracking-widest uppercase">
                  — Ninawa Huni Kuin
                </figcaption>
              </blockquote>
            </div>
          </div>
        </section>

{/* Architectures of Transformation */}
<section className="bg-background py-16 lg:py-24">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
          Why We Exist
        </h2>
      </div>

      {/* Opening Text, Lineages List, and Image */}
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: Opening Paragraph and List */}
        <div className="space-y-8">
          <p className="leading-relaxed text-muted-foreground">
            Throughout history, in times of societal collapse, oppression, and
            rupture, the failures and contradictions of our dominant ways of
            seeing, being, and relating in the world become impossible to
            ignore. It is during these moments that new forms of education and
            community have always emerged to take on the responsibility of
            envisioning a radically different future and carrying forward what
            would otherwise be lost.
          </p>

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

        {/* Right: Image */}
        <div className="relative min-h-[420px] self-stretch overflow-hidden">
          <Image
            src="https://i.postimg.cc/598p7R5B/image-from-rawpixel-id-6605610-jpeg-(1).jpg"
            alt="Black-and-white illustration representing ancestral and initiatory traditions"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* Full-Width Text */}
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
        We are living through such a moment again, and we are committed to
        building the architectures of transformation this time requires.
      </p>

      {/* Educational Architecture Highlight */}
      <div className="rounded-r-xl border-l-4 border-[#D9A01B] bg-[#FFF9E9] px-6 py-6 md:px-8 md:py-7">
        <p className="leading-relaxed text-muted-foreground">
          We call them{" "}
          <strong className="font-semibold text-foreground">
            wisdom-centered educational architectures
          </strong>
          : long-term developmental ecologies of practice, ritual, inquiry, and
          relationship, where those who feel the weight of this moment can find
          the community and formation to become the kinds of humans capable of
          tending the ending of one world, and of building what will come after
          it.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Why Metta? */}
        <section className="py-12 pt-12 lg:py-24 lg:pt-16 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="https://i.postimg.cc/YC4mzsXH/Water-Lily-(1920)-a-woodblock-print-by-Japanese-artist-Ohara-Koson.jpg"
                  alt="A lotus flower, symbolizing metta."
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                    Why Metta?
                  </h2>
                  <br />
                  <span className="text-olive font-medium text-sm tracking-wide uppercase">The Orientation</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  At its heart, <em className="text-foreground">Metta</em>, from the Pali language, means a kind of boundless and self-giving love towards all living beings. For us, it holds three energies embedded in our work:
                </p>

                <div className="space-y-6">
                  <div className="pl-6 border-l-2 border-crimson">
                    <h3 className="font-serif text-xl font-medium text-foreground">Loving-kindness</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      A fierce, boundless and all embracing love towards the liberation and flourishing of all life. It evokes the heart of the Bodhisattva in a time of societal collapse.
                    </p>
                  </div>

                  <div className="pl-6 border-l-2 border-[#D9A01B]">
                    <h3 className="font-serif text-xl font-medium text-foreground">Meta-awareness</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      The capacity to step back, to sense into the deeper patterns shaping our world, systems and crises. Meta as within (interiority), meta as between (relationality), and meta as beyond (different ways of seeing and being).
                    </p>
                  </div>

                  <div className="pl-6 border-l-2 border-olive">
                    <h3 className="font-serif text-xl font-medium text-foreground">Metamorphosis</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      The recognition that these times are demanding us to be transformed, to have our Ego be shape-shifted, to become mature and wise adults in order to fully embody our soul&apos;s work.
                    </p>
                  </div>
                </div>

                <p className="text-foreground font-medium italic">
                  Metta is the orientation that allows us to face the metacrisis with the kind of wisdom that prevents us from collapsing into despair, simplistic solutions or domination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Tropical? */}
        <section className="py-12 pt-12 lg:py-24 lg:pt-16 bg-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <div>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                    Why Tropical?
                  </h2>
                  <br />
                  <span className="text-olive font-medium text-sm tracking-wide uppercase">The Territory</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  <em className="text-foreground">Tropical</em> is an invocation. It calls in the warmth, the pulse, the wild intelligence of life. The eros, aliveness and creative force that lives in Brazil and across the Global South.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  It&apos;s a call to not be stuck in abstraction, but to return to the body, the land, the rhythm, and the relationships. Tropical honors the wisdom that has long lived in this territory—indigenous, quilombola, Afro-diasporic, and marginalized communities—which despite being ignored, silenced and erased, has endured, holding the keys for how to live through collapse.
                </p>

                <div className="py-6 border-y border-border">
                  <p className="font-serif text-xl text-foreground italic leading-relaxed">
                    To be tropical is to sense from soul,<br />
                    to be rooted in territory,<br />
                    to celebrate life,<br />
                    to follow our eros.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  It reminds us that what has survived erasure still holds something essential. And that any honest reckoning with collapse must find its way back to it.
                </p>
              </div>

              {/* Image */}
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden order-1 lg:order-2">
                <Image
                  src="https://i.postimg.cc/dVg3NTN6/main-mulata.png"
                  alt="Tropical woman enlightened by surreal sun rays"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

{/* Why Collective? */}
<section className="py-12 pt-12 lg:py-24 lg:pt-16 bg-cream text-foreground">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch"> {/* added items-stretch */}
      
      {/* Left Column: Fixed sticky modifier here so it behaves normally on mobile */}
      <div className="w-full aspect-[3/4] max-h-[600px] md:max-h-[650px] lg:sticky lg:top-8">
        <img 
          src="https://i.postimg.cc/ZYDV4PPW/Young-women-dance-during-the-Ashenda-Festival-in-Lalibela-Ethiopia.jpg" 
          alt="Two women dancing, ritualizing in a community gathering in a traditional village"
          className="w-full h-full object-cover object-top rounded-lg shadow-md"
        />
      </div>

      {/* Right Column: Content */}
      <div className="space-y-8 text-left flex flex-col justify-center">
        <div>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Why Collective?
          </h2>
          <br />
          <span className="text-olive font-medium text-sm tracking-wide uppercase">The Community</span>
        </div>

        <p className="text-foreground font-medium leading-relaxed">
          Because you cannot wake up alone.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Collective names the movement from separation to inter-being, from individualism to interdependence, from a gathering of individuals with shared values to a living field of relationships bound to each other and to something larger than ourselves.
        </p>

        {/* Callout / Bordered Box */}
          <p className="font-serif text-xl text-foreground italic leading-relaxed">
            We are evoking the spirit of Sangha. Not a network, but a community of trust, a group of friends who practice together, grieve together, think together, listen together and find — in the space between us — the wisdom none of us carries alone.
          </p>

        <p className="text-muted-foreground leading-relaxed">
          This is where we can be truly transformed. Where our ways of seeing, being, knowing and doing are cracked open and rebuilt in deeper alignment with life. Where we remember, slowly, imperfectly and together, how to care, love and support each other.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          We are inviting the ones who feel the weight of this moment and have chosen to offer their lives in response to join us. And as we do so, we do the work of building trust, intimacy, shared language, shared vision, and shared understanding of who we are, where we are, and what is being asked of us.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          So that when things get harder — and they will — we are not starting from scratch. We already know how to move as one body.
        </p>

        <p className="text-foreground font-medium italic">
          It is in times of collapse that small islands of coherence have the capacity to shift the entire system to a higher order.
        </p>
      </div>

    </div>
  </div>
</section>

{/* Our Vows */}
<section className="bg-[#FFFDF6] py-16 lg:py-20">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="mb-12 text-center">
      <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
        Our Vows
      </h2>
    </div>

    {/* Intro */}
    <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center sm:text-left">
      <p className="leading-relaxed text-muted-foreground">
        The work before us is larger than any individual, institution, or
        generation can complete. The futures we long for will not emerge through
        intention or strategy alone. They ask for devotion, and a vow represents
        that by pointing to what we are willing to offer our lives to.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        These vows are a small, but essential part of this work. A way of
        orienting ourselves, again and again, toward the kinds of human beings
        this moment asks us to become.
      </p>
    </div>

    {/* Vows */}
    <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8">
      {/* Left Column: The Soul Vows */}
      <div className="space-y-8">
        <h3 className="font-serif text-lg font-bold text-foreground md:text-xl">
          The Soul Vows
        </h3>

        <div className="border-l-2 border-crimson pl-3 sm:pl-6">
          <p className="font-serif text-base leading-relaxed text-foreground italic md:text-lg">
            Living beings are numberless,
            <br />
            <span className="mt-1 block text-sm font-normal text-[#D9A01B] not-italic md:text-base">
              I vow to free them.
            </span>
          </p>
        </div>

        <div className="border-l-2 border-crimson pl-3 sm:pl-6">
          <p className="font-serif text-base leading-relaxed text-foreground italic md:text-lg">
            Greed and hate without limit,
            <br />
            <span className="mt-1 block text-sm font-normal text-[#D9A01B] not-italic md:text-base">
              I vow to end them.
            </span>
          </p>
        </div>

        <div className="border-l-2 border-crimson pl-3 sm:pl-6">
          <p className="font-serif text-base leading-relaxed text-foreground italic md:text-lg">
            Gates of goodness, truth, and beauty are immeasurable,
            <br />
            <span className="mt-1 block text-sm font-normal text-[#D9A01B] not-italic md:text-base">
              I vow to enter them.
            </span>
          </p>
        </div>

        <div className="border-l-2 border-crimson pl-3 sm:pl-6">
          <p className="font-serif text-base leading-relaxed text-foreground italic md:text-lg">
            The path of awakening and healing is endless,
            <br />
            <span className="mt-1 block text-sm font-normal text-[#D9A01B] not-italic md:text-base">
              I vow to offer my life to it.
            </span>
          </p>
        </div>
      </div>

      {/* Right Column: The Systemic Vows */}
      <div className="space-y-8 lg:pl-8">
        <h3 className="font-serif text-lg font-bold text-foreground md:text-xl">
          The Systemic Vows
        </h3>

        <div className="border-l-2 border-olive pl-3 sm:pl-6">
          <p className="font-serif text-base leading-relaxed text-foreground italic md:text-lg">
            The roots of the metacrisis are interconnected,
            <br />
            <span className="mt-1 block text-sm font-normal text-[#D9A01B] not-italic md:text-base">
              I vow to understand them.
            </span>
          </p>
        </div>

        <div className="border-l-2 border-olive pl-3 sm:pl-6">
          <p className="font-serif text-base leading-relaxed text-foreground italic md:text-lg">
            Delusions of separation are inexhaustible,
            <br />
            <span className="mt-1 block text-sm font-normal text-[#D9A01B] not-italic md:text-base">
              I vow to transform them.
            </span>
          </p>
        </div>

        <div className="border-l-2 border-olive pl-3 sm:pl-6">
          <p className="font-serif text-base leading-relaxed text-foreground italic md:text-lg">
            Life-affirming futures are boundless,
            <br />
            <span className="mt-1 block text-sm font-normal text-[#D9A01B] not-italic md:text-base">
              I vow to perceive, create and amplify them.
            </span>
          </p>
        </div>

        <div className="border-l-2 border-olive pl-3 sm:pl-6">
          <p className="font-serif text-base leading-relaxed text-foreground italic md:text-lg">
            Planetary flourishing is not inevitable,
            <br />
            <span className="mt-1 block text-sm font-normal text-[#D9A01B] not-italic md:text-base">
              I vow to offer my life to it.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="bg-olive py-14 lg:py-16">
  <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
    <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground">
      If you want to discover our work in more depth, we invite you to explore
      our Fellowship and Theory of Change.
    </p>

    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link
        href="/fellowship"
        className="inline-flex w-full items-center justify-center bg-[#D9A01B] px-8 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-[#B88610] sm:w-56"
      >
        Explore the Fellowship
      </Link>

      <Link
        href="/theory-of-change"
        className="inline-flex w-full items-center justify-center bg-foreground px-8 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-foreground/90 sm:w-56"
      >
        Theory of Change
      </Link>
    </div>
  </div>
</section>
</main>

<Footer />
</>
)
}
