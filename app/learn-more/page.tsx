import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Learn More | Metta Tropical Collective",
  description: "Explore cornerstone articles, key references, our glossary, and the story behind Metta Tropical Collective.",
}

export default function LearnMorePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <span className="text-olive font-medium text-sm tracking-wide uppercase">Learn More</span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
              Go Deeper
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              Explore the ideas, thinkers, and stories that have shaped our work and continue to orient our journey.
            </p>
          </div>
        </section>

        {/* Key Articles */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mb-16">
              <span className="text-olive font-medium text-sm tracking-wide uppercase">Reading</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl font-medium text-foreground">
                Cornerstone Articles
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
                Essential readings that inform and get into the spirit of our work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Love in a Time Between Worlds",
                subtitle: "On the Metamodern \“Return\” to a Metaphysics of Eros",
                author: "Zak Stein",
                authorColor: "text-olive",
                desc: "On the nature of educational crises during civilizational transitions and what new forms of learning might emerge.",
                color: "border-olive",
                url: "https://integral-review.org/issues/vol_14_no_1_stein_love_in_a_time_between_worlds.pdf",
              },
              {
                title: "Making Sanctuary",
                author: "Bayo Akomolafe",
                authorColor: "text-crimson",
                desc: "What does \"making sanctuary\" mean in our current day and era? In Bayo's use of the word, sanctuaries are not places where we are set straight; they're invitations to be broken down.",
                color: "border-crimson",
                url: "https://www.bayoakomolafe.net/post/making-sanctuary-hope-companionship-race-and-emergence-in-the-anthropocene",
              },
              {
                title: "Deep Adaptation",
                subtitle: "A Map for Navigating Climate Tragedy",
                author: "Jem Bendell",
                authorColor: "text-olive",
                desc: "Understanding the interconnected web of crises facing humanity and the planet.",
                color: "border-olive",
                url: "https://lifeworth.com/deepadaptation.pdf",
              },
              {
                title: "Beyond Colonial Futurities in Climate Education",
                author: "Gesturing Towards Decolonial Futures Collective",
                authorColor: "text-[#D9A01B]",
                desc: "Many pedagogies that seek to address the climate and nature emergency (CNE) promise hope and solutions for an idealized future. In this article, they suggest these pedagogies are rooted in the same modern/colonial system that created the CNE and other ‘wicked’ socio-ecological challenges in the first place, and thus they are not well-suited for preparing students to navigate these challenges. They also ask what kind of climate education could invite students to interrupt the reproduction of colonial futures, and deepen their sense of social and ecological responsibility in the present.",
                color: "border-[#D9A01B]",
                url: "https://www.researchgate.net/publication/372237601_Beyond_colonial_futurities_in_climate_education",
              },
              {
                title: "Relevance, Meaning and the Cognitive Science of Wisdom",
                author: "John Vervaeke & Leo Ferraro",
                authorColor: "text-cyan-600",
                desc: "A new story of value, meaning, and our place in the cosmos.",
                color: "border-cyan",
                url: "https://www.researchgate.net/profile/John-Vervaeke/publication/286508333_Relevance_Meaning_and_the_Cognitive_Science_of_Wisdom/links/58f529df458515ff23b56743/Relevance-Meaning-and-the-Cognitive-Science-of-Wisdom.pdf",
              },
              {
                title: "What is the Educational Task?",
                subtitle: "Arousing the Desire for Wanting to Exist in the World in a Grown-up Way",
                author: "Gert Biesta",
                authorColor: "text-[#D9A01B]",
                desc: "On metamodern politics and the development of listening capacities for a more beautiful society.",
                color: "border-[#D9A01B]",
                url: "https://www.researchgate.net/publication/332807835_What_is_the_Educational_Task_Arousing_the_Desire_for_Wanting_to_Exist_in_the_World_in_a_Grown-up_Way",
              },
              {
                title: "Education Beyond Green Growth",
                subtitle: "Regenerative Inquiry for Intergenerational Responsibility",
                author: "Gesturing Towards Decolonial Futures Collective",
                authorColor: "text-olive",
                desc: "On metamodern politics and the development of listening capacities for a more beautiful society.",
                color: "border-olive",
                url: "https://www.researchgate.net/publication/380869283_Education_Beyond_Green_Growth_Regenerative_Inquiry_for_Intergenerational_Responsibility",
              },
              {
                title: "The Universe: A Love Story",
                author: "Marc Gafni, Barbara Marx Hubbard, Daniel Schmachtenberger",
                authorColor: "text-crimson",
                desc: "On metamodern politics and the development of listening capacities for a more beautiful society.",
                color: "border-crimson",
                url: "https://worldphilosophyandreligion.org/wp-content/uploads/2020/05/The-Universe-A-Love-Story_Academia.pdf",
              },
              {
                title: "From “Education to Sustainable Development” to “Education for the End of the World As We Know It”",
                author: "Gesturing Towards Decolonial Futures Collective",
                authorColor: "text-olive",
                desc: "On metamodern politics and the development of listening capacities for a more beautiful society.",
                color: "border-olive",
                url: "https://www.researchgate.net/publication/344287447_From_education_for_sustainable_development_to_education_for_the_end_of_the_world_as_we_know_it",
              },
            ].map((article) => (
              <article
                key={article.title}
                className={`p-6 bg-cream border-t-4 ${article.color}`}
              >
                <h3 className="font-serif text-xl font-medium text-foreground">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground italic">
                  {article.subtitle}
                </p>
                <p className={`mt-1 text-sm ${article.authorColor}`}>{article.author}</p>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  {article.desc}
                </p>
              </article>
            ))}
          </div>
          </div>
        </section>

        {/* References */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow font-medium text-sm tracking-wide uppercase">References</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background">
                Our Inspirations
              </h2>
              <p className="mt-6 text-background/70 max-w-2xl mx-auto leading-relaxed">
                Communities and initiatives that have inspired and informed our work.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Life Itself",
                "Second Renaissance",
                "Pacific Integral",
                "RegenIntel",
                "The Systems Sanctuary",
                "Bodhi Sangha",
                "Culture Hack",
                "Emergence Network",
                "Animas Valley Institute",
                "The Consilience Project",
                "GTDF",
                "Perspectiva",
              ].map((org) => (
                <div key={org} className="p-4 bg-background/10 border border-background/20 text-center">
                  <p className="text-background/90 text-sm font-medium">{org}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Glossary */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mb-16">
              <span className="text-olive font-medium text-sm tracking-wide uppercase">Language</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl font-medium text-foreground">
                Glossary of Key Terms
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Language shapes perception. Here are some of the key terms and concepts that inform our work.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-b border-border pb-8">
                <h3 className="font-serif text-xl font-medium text-foreground">Metacrisis</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  The interconnected web of global crises—ecological, social, political, spiritual—that share common root causes in our worldview, values, and ways of relating to reality. Not simply a cluster of problems, but a crisis of perception and meaning at the civilizational level.
                </p>
              </div>

              <div className="border-b border-border pb-8">
                <h3 className="font-serif text-xl font-medium text-foreground">Time Between Worlds</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  A liminal period in history when the old cultural paradigm is dying but the new one has not yet been born. A time of disorientation but also profound creative potential, where the focus of work is on foundations: metaphysics, religion, and the deeper codes of culture.
                </p>
              </div>

              <div className="border-b border-border pb-8">
                <h3 className="font-serif text-xl font-medium text-foreground">Making Sanctuary</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Bayo Akomolafe&apos;s theory of emancipation that takes bodies, flows, fields, assemblages, networks, intensities, forces, maps, apparatuses, principalities, powers, territories, and terrains into consideration. A recognition that we are not &ldquo;in charge&rdquo; and not ahead of the curve.
                </p>
              </div>

              <div className="border-b border-border pb-8">
                <h3 className="font-serif text-xl font-medium text-foreground">Three Wisdom Questions</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  The foundational inquiries that orient our work: <em>Who are we?</em> (the nature of the human), <em>Where are we?</em> (the nature of reality and our historical moment), and <em>What is being asked of us?</em> (our response and responsibility). Inspired by Cosmo-Erotic Humanism.
                </p>
              </div>

              <div className="border-b border-border pb-8">
                <h3 className="font-serif text-xl font-medium text-foreground">Postactivism</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  A concept developed by Bayo Akomolafe describing the need to move beyond traditional activism, which often reproduces the logic it seeks to transform. Postactivism invites collaborative, creative processes as translocal interventions and cultural practice.
                </p>
              </div>

              <div className="border-b border-border pb-8">
                <h3 className="font-serif text-xl font-medium text-foreground">Educational Architecture</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Long-term structures for human transformation that go beyond individual programs or courses. Like monasteries, mystery schools, or quilombos, they provide depth, progression, and duration—sophisticated enough to hold a human being across the full arc of their development.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-medium text-foreground">Sangha</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  From Buddhist tradition, a community of practitioners walking together on a shared path. We evoke this spirit: not just a group of individuals, but a &ldquo;body&rdquo; or &ldquo;river&rdquo; that flows together, sharing practices, worldviews, and vision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-sm overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/designretrospace-Lej4ROEDLMRjlkDkkYE8wc5yFqra7s.jpeg"
                  alt="Figures gathered before a rising sun - representing our collective journey"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <span className="text-olive font-medium text-sm tracking-wide uppercase">Our Story</span>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                    How We Got Here
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Many of us sourcing this work have been walking this path without proper containers—stumbling through, finding pieces of the map in scattered places, carrying the weight of this work in relative isolation.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We built this because we needed it ourselves. Because we believe that the wisdom, power, and coordination required to respond to this moment cannot be unleashed through a single program, but only through a multi-decade commitment to individual and collective transformation.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Metta Tropical Collective emerged from the conviction that what is most urgently missing is not more information or better policy, but new structures for human development, transformation and belonging—held within a coherent and trustworthy community of people relentlessly accompanying each other across time.
                </p>

                <div className="p-6 bg-cream border-l-4 border-olive">
                  <p className="font-serif text-lg text-foreground italic">
                    If anything has stirred in you while engaging with our work, please don&apos;t hesitate to reach out. We would love to connect and sense what kinds of exchanges can be possible between us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <span className="text-yellow font-medium text-sm tracking-wide uppercase">The Vision</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background leading-tight">
              Our Vision for the Future
            </h2>
            
            <p className="mt-8 text-background/80 leading-relaxed">
              Our vision is to ignite a wisdom-centered movement in Latin America towards the emergence of an interdependent network of communities, initiatives and individuals who are committed to individual and collective transformation, by building the foundations of a new cultural paradigm.
            </p>

            <p className="mt-6 text-background/80 leading-relaxed">
              Grounded in sacred, ecological, intimate and coherent ontologies, practices and mobilization towards the flourishing of all life in perpetuity.
            </p>

            <div className="mt-12 p-8 bg-background/10 border border-background/20">
              <p className="font-serif text-xl text-yellow italic">
                We hope to evoke the sacred duty that lives in each individual&apos;s and community&apos;s heart to serve the sacredness of all life.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-yellow">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Ready to Begin?
            </h2>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              If something has stirred in you, we invite you to explore our fellowship or reach out to connect.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/fellowship"
                className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                Explore the Fellowship
              </Link>
              <a
                href="mailto:hello@mettatropical.org"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-foreground text-foreground font-medium text-sm tracking-wide hover:bg-foreground/10 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
