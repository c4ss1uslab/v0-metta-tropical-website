import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Why Now | Metta Tropical Collective",
  description: "We are living through a moment of systemic collapse. What we face is not simply a cluster of interconnected crises—it is a crisis of perception, values, and worldview.",
}

export default function WhyNowPage() {
  return (
    <>
      <Navigation />
<main className="pt-16">
  {/* Hero */}
  <section className="relative py-16 lg:py-20 overflow-hidden text-background">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/LXQLBYcz/phase-space.jpg')",
      }}
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/85" />

    {/* Optional subtle gradient for better readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

    {/* Content */}
    <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
      <span className="text-yellow font-medium text-sm tracking-wide uppercase">
        Why Now
      </span>

      <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
        A Time Between Worlds¹
      </h1>

      <blockquote className="mt-12 md:mt-8 font-serif text-xl md:text-2xl text-background/80 italic leading-relaxed border-l-4 border-yellow pl-6">
        &ldquo;During times between worlds there emerge ideas and thinkers that
        are, properly speaking, without a world. Their work is liminal — not
        within the old world or the world to come, but serving as the bridge
        between them. The focus of work in the liminal is on foundations:
        metaphysics, religion, and the deeper codes of culture — education in
        its broadest sense.&rdquo;
      </blockquote>

      <cite className="mt-8 md:mt-8 block text-background/60 text-sm not-italic">
        — Zak Stein
      </cite>
    </div>
  </section>

        {/* The Moment */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                We are living through such a threshold.
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                And the urgency of this work emerges from the ever greater magnitude of ecological collapse, social fragmentation, institutional breakdown, technological destabilization, and widespread crises of meaning and belonging.
              </p>

              <p className="text-muted-foreground leading-relaxed">These crises are not separate. They are symptoms of a deeper civilizational disease, what some have called the <em>meta-crisis</em>: a crisis of perception, values, and separation from the web of life.² A fundamental breakdown in how we intimately relate with all life—to ourselves, to each other, to the world, and to what is sacred.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                This crisis we are facing did not happen overnight. It is the culmination of centuries shaped by worldviews that desacralized life, separated human beings from the web of existence, and reduced reality into something to dominate, extract from, and control. It destroyed our sense of meaning, other living beings and our capacity to respond to complexity. The result is a civilization generating problems that exceed the wisdom, maturity, and capacities available to respond to them.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                For the first time in recorded history, we are facing risks not only to the existence of humanity, but of the whole biosphere.³
              </p>


              <p className="text-muted-foreground leading-relaxed">
                And this scenario not only holds escalating challenges such as <em>ecological points of no return</em>, <em>AI-accelerated catastrophic risks</em> and more, but it also continues to perpetuate the consequences of systemic collapse - often upon those who are already suffering the most from the extractive dynamics of our dominant systems.⁴
              </p>


              <p className="text-muted-foreground leading-relaxed">
                Increasingly, it has become clear that the very structures that produced this crisis cannot guide us beyond it. We are living through a time between worlds. The old stories are breaking apart, yet the new ones have not fully arrived. There is no clear map for how to move through this threshold.⁵ We are being invited to actively participate in the creation of what comes next.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We recognize this moment as a possible civilizational rite of passage: a collective initiation requiring humanity to shed old ways of seeing, being, and relating in order to grow into more mature, wise, and life-enhancing human beings. But rites of passage require guidance, community, practice, and structures capable of holding such profound transformation.
              </p>
            </div>

            {/* Adjusted: Moved inside the max-w-4xl wrapper to match text size and reduced margin */}
            <div className="relative aspect-[21/9] overflow-hidden mt-8">
              <Image
                src="https://i.postimg.cc/XYvW3DFW/cosmos-1656632365.jpg" 
                alt="Community gathering and dancing in circle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

{/* A Generation Between Worlds */}
<section className="bg-cream py-16 lg:py-20">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
          A Generation Between Worlds
        </h2>
      </div>

      {/* Opening */}
      <div className="space-y-6">
        <p className="font-serif text-xl font-medium leading-relaxed text-foreground md:text-2xl">
          Many young people today are coming of age with the strange experience
          of living without a world they can fully belong to.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          The inherited promises of modern life — success, stability, endless
          progress, upward mobility — are losing their credibility at the same
          time that the worlds capable of replacing them have not yet fully
          taken form. The youth is being asked to individuate within a culture
          whose foundations they increasingly question, while somehow having to
          imagine and create forms of life they have never been shown how to
          inhabit.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          To come of age during a civilizational threshold can be profoundly
          meaningful. It is to live close to enormous possibilities, creativity,
          and transformation, but it can also be deeply disorienting.
        </p>
      </div>

      {/* Central Questions */}
      <div className="rounded-r-xl border-l-4 border-[#D9A01B] bg-[#FFF9E9] px-6 py-6 md:px-8 md:py-7">
        <p className="leading-relaxed text-muted-foreground">
          What happens when you can clearly sense that the world you inherited
          is failing, yet cannot see a viable path toward the one you long to
          live in? When conventional definitions of success no longer feel
          meaningful, but no legitimate alternatives have been built? When your
          grief, imagination, and desire to contribute are real, but there are
          few spaces capable of recognizing them or helping them mature into a
          life of responsibility and service?
        </p>
      </div>

      {/* Pathways */}
      <div className="space-y-6">
        <p className="font-medium leading-relaxed text-foreground">
          The task, then, is not simply to celebrate young people or offer them
          hope. It is to build credible pathways through which their deepest
          longings can meaningfully find a place to take root and be nourished
          to fully come to life.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          Pathways that allow them to develop the spiritual depth, relational
          maturity, systemic understanding, practical capacities, and
          communities of belonging required to participate fully in what comes
          next. Pathways where their soul, intelligence and ambition do not
          have to be absorbed entirely into systems organized around
          accumulation, status, and extraction, but can be directed toward
          societal healing, systemic work, community-building, and artistic
          forms of expression serving cultural renewal and the flourishing of
          all life.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          If we fail to create such pathways, we risk losing another generation
          to our modern dominant paradigm, because the pathways and structure
          available to them will continually pull most of them back toward the
          logic of the world they are trying to outgrow.
        </p>

        <p className="font-serif text-xl font-medium leading-relaxed text-foreground md:text-2xl">
          This is why the work feels urgent!
        </p>
      </div>

      {/* Intergenerational Transition */}
      <div className="space-y-6">
        <p className="font-medium leading-relaxed text-foreground">
          And it cannot be carried by the young alone.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          Times between worlds require generations and species to find one
          another. Older generations carry hard-won experience, resources,
          institutional knowledge, and lessons from lives already lived within
          the systems now revealing their limits. Younger generations carry a
          sensitivity to what no longer works, a refusal of inherited
          assumptions, and an imagination increasingly shaped by the futures
          they know they will have to inhabit. And the more-than-human world
          carries forms of intelligence and ecological memory that human
          civilization has too often forgotten how to listen to.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          Our task, then, is both{" "}
          <strong className="font-medium text-foreground">
            intergenerational and interspecies
          </strong>
          : to restore forms of responsibility that extend beyond our own
          lifetimes and beyond the human. To steward this passage wisely means
          learning to act in relationship with those who came before us, those
          who will come after us, and the living world whose flourishing is
          inseparable from our own.
        </p>

        <p className="font-medium leading-relaxed text-foreground">
          The young should not have to inherit this moment alone. And the future
          should not be shaped by any one generation or species alone.
        </p>
      </div>
    </div>
  </div>
</section>

{/* What This Moment Requires */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-crimson font-medium text-sm tracking-wide uppercase">The Threshold</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                What This Moment Requires
              </h2>
            </div>

            <div className="space-y-8">
              <blockquote className="font-serif text-xl md:text-2xl text-muted-foreground italic leading-relaxed border-l-4 border-crimson pl-6">
                &ldquo;The civilization in breakdown is a civilization whose affordances are failing — whose old possibilities for being human are becoming unavailable faster than new ones are being unfolded.&rdquo;
              </blockquote>
              <cite className="mt-2 block text-muted-foreground/70 text-sm not-italic font-medium">— Steve March</cite>

              <p className="text-muted-foreground leading-relaxed pt-4">
                During moments of collapse, despair, grief, and disorientation can become conditions for profound transformation, but only when held within structures strong enough to support the metamorphosis required of us. Without such containers, crisis often leads not toward maturation, but toward deeper fragmentation, numbness, polarization, and retreat into what is already dying.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Our wisdom-centered educational architecture is trying to offer another possibility.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                A structure where people can move through this civilizational rite of passage with greater support, guidance, practice, and community. Spaces where individuals can grieve, question, heal, remember their belonging within the web of life, and gradually embody more mature and life-affirming ways of being human together.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                At its heart, <strong className="text-foreground">this work is about cultivating the conditions for the long arc of transformation</strong> required for wiser humans, communities and cultures to emerge.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-yellow">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              The time between worlds asks for those who are committed to building a new cultural paradigm.
            </h2>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              There is a path, but it&apos;s not a given at all that we will take it. We are the ones who will have to figure out the appropriate responses for our time.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/theory-of-change"
                className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                Our Theory of Change
              </Link>
              <Link
                href="/fellowship"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-foreground text-foreground font-medium text-sm tracking-wide hover:bg-foreground/10 transition-colors"
              >
                Apply for the Fellowship
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}