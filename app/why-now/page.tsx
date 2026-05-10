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
        <section className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/phase%20space-kGHtKLISXDatryptSLcoqIun6t1Fsn.jpeg"
              alt="Abstract phase space pattern"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
            <span className="text-yellow font-medium text-sm tracking-wide uppercase">Why Now</span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-background leading-tight">
              A Time Between Worlds
            </h1>
            <blockquote className="mt-8 font-serif text-xl md:text-2xl text-background/80 italic leading-relaxed border-l-4 border-yellow pl-6">
              &ldquo;During times between worlds there emerge ideas and thinkers that are, properly speaking, without a world. Their work is liminal — not within the old world or the world to come, but serving as the bridge between them. The focus of work in the liminal is on foundations: metaphysics, religion, and the deeper codes of culture — education in its broadest sense.&rdquo;
            </blockquote>
            <cite className="mt-4 block text-background/60 text-sm not-italic">— Zak Stein</cite>
          </div>
        </section>

        {/* The Moment */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                We are living through such a moment.
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                What we face is not simply a cluster of interconnected crises—ecological collapse, social fragmentation, institutional failure, technological risk. These are symptoms. The root is what we call the <strong className="text-foreground">metacrisis</strong>: a crisis of perception, values, and worldview. A fundamental breakdown in how we relate to all life—to ourselves, to each other, to the world, and to what is sacred.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                It cannot be addressed without wrestling with foundational questions: <em>What is reality? What is a human life for? Why are we here? What does it mean to live a meaningful life?</em> Our collective failure to seriously engage questions like that—and to transform our being accordingly—lies at the root of everything.
              </p>

              <div className="relative aspect-[21/9] overflow-hidden my-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flower%20phase-Phoy1ja2ApHEVtJJLu5B2Ty3AnhO9E.jpeg"
                  alt="Mountains and moon - representing the darkness before dawn"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-muted-foreground leading-relaxed">
                This crisis we are facing did not happen overnight. It is the culmination of centuries shaped by a worldview that desacralized the world and placed the human as separate from all other living beings, hollowing out our institutions, our sense of meaning, and our capacity to respond to complexity. The result is a civilization generating problems it no longer has the wisdom to solve.
              </p>
            </div>
          </div>
        </section>

        {/* Historical Response */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-olive font-medium text-sm tracking-wide uppercase">Historical Precedent</span>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                    Containers for Transformation
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Historically, at moments of systemic collapse, new forms of education and community have emerged to carry culture through challenging times and reconnect them with what truly matters:
                </p>

                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-olive rounded-full shrink-0" />
                    <span><strong className="text-foreground">Mystery Schools</strong> — initiating seekers into hidden wisdom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-olive rounded-full shrink-0" />
                    <span><strong className="text-foreground">Monasteries</strong> — preserving knowledge through dark ages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-olive rounded-full shrink-0" />
                    <span><strong className="text-foreground">Wisdom Traditions</strong> — transmitting perennial truths</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-olive rounded-full shrink-0" />
                    <span><strong className="text-foreground">Folk Schools</strong> — educating for life, not credentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-olive rounded-full shrink-0" />
                    <span><strong className="text-foreground">Quilombos</strong> — communities of resistance and renewal</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  Each built the structures, practices, relational life and rites of passage needed to orient human life toward what is most meaningful—and to develop the capacities required to face the challenges of their time.
                </p>

                <p className="text-foreground font-medium italic">
                  We must urgently reimagine such architectures for this time between worlds. And this is why we are here.
                </p>
              </div>

              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-from-rawpixel-id-6605610-jpeg-EB7NqNkfVIwPesNkSnBfXQY1R1nCuq.jpg"
                  alt="African mask representing ancestral wisdom and containers for transformation"
                  fill
                  className="object-contain bg-cream"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What This Requires */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-crimson font-medium text-sm tracking-wide uppercase">The Threshold</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                What This Moment Requires
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                This is what this threshold moment requires of us. Despair can be the precondition for genuine transformation, but only within containers strong enough to hold the shape-shift and metamorphosis. Without them, crisis tends not toward transformation, but toward a tightening grip on what is already broken.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-cream border-l-4 border-olive">
                  <h3 className="font-serif text-xl font-medium text-foreground">Why Are We Needed Now?</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    The velocity of ecological, cultural, political, and spiritual unraveling has sharpened. Many are watching events unfold with heartbreak and uncertainty about how to respond.
                  </p>
                </div>

                <div className="p-6 bg-cream border-l-4 border-cyan">
                  <h3 className="font-serif text-xl font-medium text-foreground">What Exactly Is Needed Now?</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    New structures and architectures for human development, transformation and belonging—forms that can hold the long arc of human transformation.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                What we are building is, at its heart, an <strong className="text-foreground">educational sanctuary</strong>. A space where genuine transformation becomes possible, where the dying paradigm temporarily loses its grip, and where we are able to embody radically new ways of seeing, being, knowing and acting together.
              </p>
            </div>
          </div>
        </section>

        {/* Our Conviction */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <span className="text-yellow font-medium text-sm tracking-wide uppercase">Our Conviction</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background leading-tight">
              Metta Tropical Collective was born from this conviction
            </h2>
            
            <p className="mt-8 text-background/80 leading-relaxed max-w-3xl mx-auto">
              That what is most urgently missing is not more information or better policy, but new structures and architectures for human development, transformation and belonging—new forms of educational architectures that can hold the long arc of human transformation, where we can unfold into the types of individuals who have the capacities to create the conditions for a new cultural paradigm to quietly, intimately, and relationally take root.
            </p>

            <div className="mt-12 inline-block p-8 bg-background/10 border border-background/20">
              <p className="font-serif text-xl text-background italic">
                Rooted in Brazil. Weaving a fragmented ecosystem.<br />
                A community of transformation, inquiry and practice.
              </p>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-crimson font-medium text-sm tracking-wide uppercase">The Symptoms</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Our world is showing symptoms of life-threatening diseases
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Ecological Degradation", desc: "The destruction of the living systems that sustain all life" },
                { title: "Political Polarization", desc: "The fragmentation of our capacity for collective action" },
                { title: "Meaning Crisis", desc: "The loss of shared stories, values, and purpose" },
                { title: "Technological Risk", desc: "AI and exponential technologies outpacing wisdom" },
              ].map((symptom) => (
                <div key={symptom.title} className="p-6 bg-background border-t-4 border-crimson">
                  <h3 className="font-serif text-lg font-medium text-foreground">{symptom.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{symptom.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                These diseases must be diagnosed with diligence and precision. Only proper diagnosis can lead to adequate responses. Any serious response must be tackling the root causes of our disease.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-yellow">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              The time between worlds asks for those who are committed to building a new cultural paradigm.
            </h2>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              There is a path, but it&apos;s not a given at all that we will take it. We are the ones who will have to build the new instructional manual.
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
                Join the Fellowship
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
