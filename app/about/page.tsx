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

{/* About Us */}
<section className="bg-background py-16 lg:py-24">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
          About Us
        </h2>

        <p className="mt-2 font-serif text-sm italic leading-relaxed text-muted-foreground md:text-base">
          An invitation into the spirit of our work
        </p>
      </div>

      {/* Opening */}
      <div className="space-y-8">
        <p className="font-serif text-xl font-medium leading-relaxed text-foreground md:text-2xl">
          Metta Tropical begins with a longing to reawaken the soul of our
          collective life.
        </p>

        {/* Longings */}
        <div className="space-y-2">
          <p className="leading-relaxed text-muted-foreground">
            To restore our intimacy with all life.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            To fall deeply in love with the living world.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            To expand our capacity to experience the sacred.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            To deepen our attunement to life&apos;s beauty, mystery, suffering,
            and truth.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            To follow the Eros that draws us towards what life is asking of us.
          </p>
        </div>
      </div>

      {/* Main Text */}
      <div className="space-y-6">
        <p className="leading-relaxed text-muted-foreground">
          The dominant paradigm of modernity has given parts of humanity
          extraordinary knowledge, material prosperity, and technological
          capacity. Yet it has also contributed to the disenchantment and
          desacralization of life, making dimensions of meaning, belonging, and
          aliveness increasingly difficult to touch. Our connection to the
          living world has grown more distant. Our inner lives have become
          harder to inhabit amid the constant pull of outward distraction. Our
          relationships are more instrumental. And the spiritual dimension of
          existence is not only more difficult to access, but has become
          something we are almost embarrassed to name.
        </p>

        <p className="font-medium leading-relaxed text-foreground">
          This is precisely the dimension of life we are committed to reclaiming
          — to name it without hesitation, to inhabit more fully, to meet with
          reverence, and to keep being guided by it.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          For us, the spiritual begins in our capacity to become deeply present
          and attuned to existence — to experience our interbeing with all
          life, to encounter life as intrinsically valuable, to recover a sense
          of belonging to this earth, to meet suffering with compassion, and to
          allow this intimacy with reality to transform how we live.
        </p>

        {/* Sacred Highlight */}
        <div className="rounded-r-xl border-l-4 border-[#D9A01B] bg-[#FFF9E9] px-6 py-6 md:px-8 md:py-7">
          <p className="leading-relaxed text-muted-foreground">
            The sacred, then, is not another realm we must escape into. It is
            the ground and depth of life itself — always here, yet becoming more
            available to us as we learn to perceive, sense, feel, and
            participate in reality more deeply.
          </p>
        </div>

        <p className="leading-relaxed text-muted-foreground">
          In times of profound rupture, these ways of being in relationship
          with life become especially important. When inherited stories can no
          longer orient us, and the structures upon which we have built our
          lives begin to reveal their limits, deeper existential questions rise
          to the surface:{" "}
          <span className="font-medium text-foreground">
            What is truly worth living for? What does this moment ask of me?
            What am I willing to give my life to? Where does meaning come from?
          </span>
        </p>

        <p className="leading-relaxed text-muted-foreground">
          Such moments can awaken dimensions of soul and spirit that ordinary
          life often keeps quiet. Our deeper longings can become more clear —
          revealing not only who we are, but the deep callings, and unique part
          we can play in the service of life.
        </p>

        <p className="font-medium leading-relaxed text-foreground">
          It is from this ground of sacredness, soulfulness, and intimacy with
          life that our work begins. This is the ground that helps us hold the
          grief and rupture of the metacrisis without turning away — allowing
          what might otherwise become numbness or despair to be metabolized
          into deeper responsibility, devotion, and service to the world trying
          to be born.
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

    {/* Introduction */}
    <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center sm:text-left">
      <p className="leading-relaxed text-muted-foreground">
        We see vows not as promises, nor as rules. They serve as an orientation.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        The work before us is larger than any person, institution, or generation
        can complete. What we long for will not arrive through strategy or good
        intentions alone. It asks for devotion — for something we are willing
        to give our lives to, knowing we will not see it finished.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        These vows are a small, but essential part of this work. A way of
        reminding ourselves, again and again, what we are here for.
      </p>
    </div>

    {/* Vows */}
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
      {/* Left Column: The Soul Vows */}
      <div className="space-y-8">
        <h3 className="font-serif text-lg font-bold text-foreground md:text-xl">
          The Soul Vows
        </h3>

        <div className="min-h-[78px] border-l-2 border-crimson pl-3 sm:pl-4">
          <p className="font-serif text-base leading-relaxed text-foreground italic">
            Living beings are numberless,
            <br />
            <span className="mt-1 block text-base font-normal text-[#D9A01B] not-italic">
              I vow to free them.
            </span>
          </p>
        </div>

        <div className="min-h-[78px] border-l-2 border-crimson pl-3 sm:pl-4">
          <p className="font-serif text-base leading-relaxed text-foreground italic">
            Delusions of separation without limit,
            <br />
            <span className="mt-1 block text-base font-normal text-[#D9A01B] not-italic">
              I vow to transform them.
            </span>
          </p>
        </div>

        <div className="min-h-[78px] border-l-2 border-crimson pl-3 sm:pl-4">
          <p className="font-serif text-base leading-relaxed text-foreground italic">
            Gates of truth and love are immeasurable,
            <br />
            <span className="mt-1 block text-base font-normal text-[#D9A01B] not-italic">
              I vow to enter them.
            </span>
          </p>
        </div>

        <div className="min-h-[78px] border-l-2 border-crimson pl-3 sm:pl-4">
          <p className="font-serif text-base leading-relaxed text-foreground italic">
            The path of awakening and healing is unsurpassable,
            <br />
            <span className="mt-1 block text-base font-normal text-[#D9A01B] not-italic">
              I vow to embody it.
            </span>
          </p>
        </div>
      </div>

      {/* Right Column: The Earth Vows */}
      <div className="space-y-8">
        <h3 className="font-serif text-lg font-bold text-foreground md:text-xl">
          The Earth Vows
        </h3>

        <div className="min-h-[78px] border-l-2 border-olive pl-3 sm:pl-4">
          <p className="font-serif text-base leading-relaxed text-foreground italic">
            The roots of the metacrisis are interconnected,
            <br />
            <span className="mt-1 block text-base font-normal text-[#D9A01B] not-italic">
              I vow to understand them.
            </span>
          </p>
        </div>

        <div className="min-h-[78px] border-l-2 border-olive pl-3 sm:pl-4">
          <p className="font-serif text-base leading-relaxed text-foreground italic">
            Delusions of capitalist modernity are inexhaustible,
            <br />
            <span className="mt-1 block text-base font-normal text-[#D9A01B] not-italic">
              I vow to transform them.
            </span>
          </p>
        </div>

        <div className="min-h-[78px] border-l-2 border-olive pl-3 sm:pl-4">
          <p className="font-serif text-base leading-relaxed text-foreground italic">
            Life-affirming futures are boundless,
            <br />
            <span className="mt-1 block text-base font-normal text-[#D9A01B] not-italic">
              I vow to perceive, create and amplify them.
            </span>
          </p>
        </div>

        <div className="min-h-[78px] border-l-2 border-olive pl-3 sm:pl-4">
          <p className="font-serif text-base leading-relaxed text-foreground italic">
            Planetary flourishing is not inevitable,
            <br />
            <span className="mt-1 block text-base font-normal text-[#D9A01B] not-italic">
              I vow to offer my life to it.
            </span>
          </p>
        </div>
      </div>
    </div>

    {/* Sources and Acknowledgment */}
    <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-8">
      <p className="text-sm leading-relaxed text-muted-foreground italic md:text-base">
        These vows are inspired by the four great bodhisattva vows of the
        Buddhist traditions, and by the post-capitalist vows articulated by
        Alnoor Ladha and Lynn Murphy. We offer ours as part of our own surrender
        to what this moment is asking of us.
      </p>
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
