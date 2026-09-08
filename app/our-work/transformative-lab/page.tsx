import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Transformative Educational Lab | Metta Tropical Collective",
  description:
    "Investigating enduring educational architectures designed to support deep human formation and cultivate wisdom in response to the metacrisis.",
}

export default function TransformativeEducationalLabPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-16 lg:py-20 overflow-hidden text-background">
          {/* Background overlay / media styling */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/LXQLBYcz/phase-space.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
            <span className="text-yellow font-medium text-sm tracking-wide uppercase">
              Pillar I
            </span>

            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              Transformative Educational Lab
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-background/90 leading-relaxed font-light">
              We call this pillar a <em>Lab</em> because our work is inherently experimental. We are continuously testing, refining, and learning from the conditions that genuinely support the construction of legitimate Wisdom-Centered Educational Architectures.
            </p>

            <blockquote className="mt-10 font-serif text-lg md:text-xl text-background/80 italic leading-relaxed border-l-4 border-yellow pl-6">
              &ldquo;Video from our first retreat, Creating Sanctuaries in a Time Between Worlds, in August 2025.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Foundations & The 5 Dimensions */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-10">
            <p className="text-muted-foreground leading-relaxed text-lg">
              We investigate the structures, practices, relationships, experiences, developmental pathways, and pedagogies that help individuals and collectives radically shift their ways of relating to all life—self, other, world, and the sacred—to cultivate the capacities required to wisely navigate and respond to the metacrisis.
            </p>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
                Five Interconnected Dimensions of Transformation
              </h2>
              <div className="overflow-x-auto border border-border rounded-sm">
                <table className="w-full text-left text-sm text-muted-foreground">
                  <thead className="bg-muted text-foreground uppercase tracking-wider text-xs font-semibold">
                    <tr>
                      <th className="px-6 py-3 border-b border-border">Architecture of Transformation</th>
                      <th className="px-6 py-3 border-b border-border">Function</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-4 font-medium text-foreground">Motivation</td>
                      <td className="px-6 py-4">Why I want to be transformed</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-foreground">Structures</td>
                      <td className="px-6 py-4">What holds transformation over time</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-foreground">Streams</td>
                      <td className="px-6 py-4">What transformation engages with</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-foreground">Pedagogy</td>
                      <td className="px-6 py-4">How transformation happens</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-foreground">Orientation</td>
                      <td className="px-6 py-4">What transformation is in service of</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Together, these dimensions form the foundation of a <strong className="text-foreground">Wisdom-Centered Educational Architecture</strong>: a living ecology of practices, relationships, developmental pathways, experiences, and shared inquiry designed to support the emergence of wiser forms of seeing, being, knowing, and responding to our times.
            </p>
          </div>
        </section>

        {/* Structures of Transformation */}
        <section className="py-16 lg:py-20 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <div>
                  <span className="text-olive font-medium text-sm tracking-wide uppercase">Architectures</span>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                    Structures of Transformation
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Many responses to the metacrisis take the form of temporary programs like short workshops or cohorts. We are investigating enduring educational architectures capable of supporting transformation across decades rather than moments.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Human transformation does not have an ending. Throughout history—during times between worlds—lineages like monasteries, wisdom traditions, mystery schools, Indigenous communities, quilombos, and folk schools created containers for deep human formation. Our work draws inspiration from these lineages to reimagine them for today.
                </p>

                <ul className="space-y-4 text-muted-foreground border-t border-border/50 pt-6">
                  <li>
                    <strong className="text-foreground block">Ontology</strong>
                    Transforms the underlying stories and structures through which we perceive reality, restoring interdependence, meaning, and belonging.
                  </li>
                  <li>
                    <strong className="text-foreground block">Community of Practice</strong>
                    Inspired by the sangha, cultivating true friendship, shared practice, accountability, and mutual care.
                  </li>
                  <li>
                    <strong className="text-foreground block">Ecology of Practices</strong>
                    Contemplative, relational, somatic, artistic, ecological, and psychological practices that embody insight into daily life.
                  </li>
                  <li>
                    <strong className="text-foreground block">Ecology of Training</strong>
                    Retreats, residencies, and immersive containers for deeper dives into soul, systems, soil, society, and the sacred.
                  </li>
                  <li>
                    <strong className="text-foreground block">Ancestrality</strong>
                    Intergenerational guidance from elders, mentors, and lineage holders to ground the work against cultural amnesia.
                  </li>
                  <li>
                    <strong className="text-foreground block">Ethics</strong>
                    Relational orientation and principles aligning human life toward integrity, reciprocity, and service to life.
                  </li>
                  <li>
                    <strong className="text-foreground block">Ritual</strong>
                    Creating shared meaning, marking thresholds of transformation, and reconnecting us to collective memory.
                  </li>
                </ul>
              </div>

              <div className="sticky top-24 space-y-6">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/bw8XLYpx/Mandala-of-Jnanadakini-Tibet.jpg"
                    alt="Mandala representing ancestral wisdom and structures of transformation"
                    fill
                    className="object-contain bg-cream"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Streams of Transformation */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-12">
            <div className="text-center">
              <span className="text-crimson font-medium text-sm tracking-wide uppercase">Inquiry</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Streams of Transformation
              </h2>
              <p className="mt-4 text-muted-foreground">Ways of understanding and participating in reality</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-border rounded-sm space-y-3 bg-muted/20">
                <span className="text-xs font-semibold uppercase tracking-wider text-crimson">01. The Sacred</span>
                <h3 className="font-serif text-xl font-medium text-foreground">The Nature of Reality</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Relegitimizing the sacred at the heart of education. Exploring spiritual traditions, contemplative practice, and the intrinsic value and entanglement of all life.
                </p>
              </div>

              <div className="p-6 border border-border rounded-sm space-y-3 bg-muted/20">
                <span className="text-xs font-semibold uppercase tracking-wider text-crimson">02. Soul</span>
                <h3 className="font-serif text-xl font-medium text-foreground">Inner Transformation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Focusing on psychological, emotional, relational, and spiritual formation—integrating trauma healing, emotional maturation, and human development.
                </p>
              </div>

              <div className="p-6 border border-border rounded-sm space-y-3 bg-muted/20">
                <span className="text-xs font-semibold uppercase tracking-wider text-crimson">03. Systems</span>
                <h3 className="font-serif text-xl font-medium text-foreground">Understanding the Metacrisis</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cultivating perception to engage complexity, modernity, technology, and governance without collapsing into reductionism or simplistic solutions.
                </p>
              </div>

              <div className="p-6 border border-border rounded-sm space-y-3 bg-muted/20">
                <span className="text-xs font-semibold uppercase tracking-wider text-crimson">04. Soil</span>
                <h3 className="font-serif text-xl font-medium text-foreground">Reconnecting with the Living World</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tending our relationship with Earth through Indigenous wisdom, land-based learning, regenerative cultures, and ecological kinship.
                </p>
              </div>
            </div>

            <div className="p-6 border border-border rounded-sm space-y-3 bg-muted/20">
              <span className="text-xs font-semibold uppercase tracking-wider text-crimson">05. Society</span>
              <h3 className="font-serif text-xl font-medium text-foreground">Culture, Leadership, and Collective Action</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Exploring how transformed individuals and communities participate through leadership, culture-building, collective intelligence, and social action in service of life.
              </p>
            </div>
          </div>
        </section>

        {/* Pedagogy of Transformation */}
        <section className="py-16 lg:py-20 bg-cream">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-10">
            <div>
              <span className="text-olive font-medium text-sm tracking-wide uppercase">Participatory Learning</span>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                Depth Ontological Pedagogy
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Most modern educational systems train us to engage reality primarily through abstraction and analysis. Wisdom-centered education seeks to expand our capacity to move fluidly across six relational depths.
              </p>
            </div>

            <div className="overflow-x-auto border border-border rounded-sm bg-background">
              <table className="w-full text-left text-sm text-muted-foreground">
                <thead className="bg-muted text-foreground uppercase tracking-wider text-xs font-semibold">
                  <tr>
                    <th className="px-4 py-3 border-b border-border">Relational Depth</th>
                    <th className="px-4 py-3 border-b border-border">Mode of Participation</th>
                    <th className="px-4 py-3 border-b border-border">What is Engaged</th>
                    <th className="px-4 py-3 border-b border-border">Primary Capacity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Conceptual</td>
                    <td className="px-4 py-3">Thinking about reality</td>
                    <td className="px-4 py-3">ideas, frameworks, analysis</td>
                    <td className="px-4 py-3">cognition</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Personal</td>
                    <td className="px-4 py-3">Narrating reality</td>
                    <td className="px-4 py-3">identity, biography, meaning, stories</td>
                    <td className="px-4 py-3">self-reflection</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Interiority</td>
                    <td className="px-4 py-3">Sensing reality</td>
                    <td className="px-4 py-3">emotions, sensations, desires</td>
                    <td className="px-4 py-3">presence</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Relational</td>
                    <td className="px-4 py-3">Co-sensing reality</td>
                    <td className="px-4 py-3">intimacy, resonance, mutual presence</td>
                    <td className="px-4 py-3">attunement</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Ontological</td>
                    <td className="px-4 py-3">Being reality</td>
                    <td className="px-4 py-3">awareness, essence, embodiment</td>
                    <td className="px-4 py-3">grounded presence</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Transpersonal</td>
                    <td className="px-4 py-3">Sourcing reality</td>
                    <td className="px-4 py-3">mystery, sacredness, living intelligence</td>
                    <td className="px-4 py-3">surrender / moral obligation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              The kind of leaders needed during a time between worlds are human beings capable of integrating multiple ways of knowing at once: people who can understand systems, remain emotionally present with grief, navigate conflict relationally, perceive cultural patterns, stay grounded in ethical responsibility, and remain open to mystery.
            </p>
          </div>
        </section>

        {/* Orientation & Past Experiments */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-12">
            <div>
              <span className="text-yellow font-medium text-sm tracking-wide uppercase">Orientation</span>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                What Transformation is in Service Of
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Transformation is not oriented toward personal achievement or self-optimization alone. Our work is oriented toward the formation of human beings who can participate in the long transition between worlds with greater maturity, discernment, courage, humility, and devotion to the flourishing of the whole.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border">
              <div>
                <strong className="text-foreground block text-lg font-serif">Developmental</strong>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Human beings maturing in their capacity to perceive, relate, and participate in reality.
                </p>
              </div>
              <div>
                <strong className="text-foreground block text-lg font-serif">Relational</strong>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Increasing the quality of relationships across all living systems.
                </p>
              </div>
              <div>
                <strong className="text-foreground block text-lg font-serif">Civilizational</strong>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Cultivating conditions for higher forms of collective coordination to respond wisely to our times.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-border space-y-6">
              <h3 className="font-serif text-2xl font-medium text-foreground">Past Educational Experiments</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://vimeo.com/1132652455"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:underline flex items-center gap-2"
                  >
                    <span>Leading in The Metacrisis — Making Sanctuary in a Time Between Worlds</span>
                    <span className="text-xs text-muted-foreground">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://understood-fireplant-7cd.notion.site/CCT-Treinamento-do-Cultivo-de-Compaix-o-Em-Tempos-de-Colapso-29d2afee6fb0802bad5fdab916f3c420?pvs=74"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:underline flex items-center gap-2"
                  >
                    <span>Compassion Cultivation Training In Collapsing Times (CCT)</span>
                    <span className="text-xs text-muted-foreground">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-yellow">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Ready to explore our educational architecture?
            </h2>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Discover how our theory of change guides this experimental work or explore joining our fellowship.
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