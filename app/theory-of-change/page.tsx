import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Theory of Change | Metta Tropical Collective",
  description: "Understanding the metacrisis and our approach to building the educational architectures needed for genuine transformation and cultural renewal.",
}

  const polycrisisItems = [
    "Ecological Collapse",
    "Climate Destabilization",
    "Social Fragmentation",
    "Geopolitical Friction",
    "Meaning Crisis",
    "Economic Inequality",
    "Institutional Distrust",
    "Mental Health Pandemic",
  ];

export default function TheoryOfChangePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-foreground text-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <span className="text-yellow font-medium text-sm tracking-wide uppercase">Theory of Change</span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-background leading-tight">
              Articulating the Metacrisis
            </h1>
            <p className="mt-8 text-xl text-background/80 leading-relaxed">
              Understanding the deep roots of our predicament and the educational response it requires.
            </p>
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

        {/* The Predicament */}
<section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-crimson font-medium text-sm tracking-wide uppercase">The Predicament</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            The Metacrisis
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The crises shaping our time are not isolated problems. They arise from deeper conditions, structures, and existential layers.
          </p>
        </div>

        {/* Diagram Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* 1. THE SYMPTOMATIC LAYER */}
          <div className="flex flex-col h-full border border-dashed border-border p-6 rounded-xl bg-card/30 relative">
            <div className="text-center mb-8 border-b border-border pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Layer 1</span>
              <h3 className="font-serif text-xl font-semibold text-foreground">The Symptomatic Layer</h3>
              <p className="text-sm font-medium text-crimson mt-2">The Polycrisis</p>
            </div>

            {/* Polycrisis Items Container */}
            <div className="flex-grow flex flex-col items-center justify-center my-auto relative">
              {/* Vertical line running exactly behind elements */}
              <div className="absolute left-1/2 top-4 bottom-16 w-[1px] bg-crimson/20 -translate-x-1/2 z-0" />
              
              <div className="w-full flex flex-col gap-3 relative z-10">
                {polycrisisItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-2.5 rounded-xl border border-crimson/30 bg-cream text-center text-xs font-medium text-foreground shadow-sm hover:border-crimson transition-colors duration-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Etc Box sits completely below the vertical axis line */}
              <div className="w-full p-2.5 rounded-xl border border-crimson/30 bg-cream text-center text-xs font-medium text-foreground shadow-sm hover:border-crimson transition-colors duration-200 z-10 mt-4">
                Etc...
              </div>
            </div>
            
            {/* Invisible spacer to match footers */}
            <div className="pt-6 mt-8 invisible text-xs">Spacer</div>
          </div>


          {/* 2. THE STRUCTURAL LAYER */}
          <div className="flex flex-col h-full border border-dashed border-border p-6 rounded-xl bg-card/30 relative">
            {/* Left Relation Rails to Layer 1 (Perfect Height Matching) */}
            <div className="hidden lg:block absolute -left-8 top-0 bottom-[96px] w-8 z-0">
              <div className="absolute top-[24%] w-full border-t border-dashed border-crimson/20" />
              <div className="absolute top-[44%] w-full border-t border-dashed border-crimson/20" />
              <div className="absolute top-[64%] w-full border-t border-dashed border-crimson/20" />
              <div className="absolute top-[84%] w-full border-t border-dashed border-crimson/20" />
            </div>

            {/* Left Arrow Badge */}
            <div className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-background border border-border rounded-full p-1 text-muted-foreground shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>

            <div className="text-center mb-8 border-b border-border pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Layer 2</span>
              <h3 className="font-serif text-xl font-semibold text-foreground">The Structural Layer</h3>
              <p className="text-sm font-medium text-crimson mt-2">Meta-Systemic Dysfunctions</p>
            </div>

            {/* Structural Items Stack */}
            <div className="flex-grow flex flex-col items-center justify-center my-auto relative w-full pb-6">
              {/* Vertical line passing directly behind the layout cards and running all the way down */}
              <div className="absolute left-1/2 top-4 bottom-0 w-[1px] bg-crimson/20 -translate-x-1/2 z-0" />

              <div className="w-full flex flex-col gap-4 relative z-10">
                <div className="w-full p-4 rounded-xl border-l-4 border-crimson bg-cream shadow-sm">
                  <h4 className="font-serif font-medium text-foreground">Crisis of Power</h4>
                  <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                    Captured actors and systems incapable of coordinating transformative change alone.
                  </p>
                </div>

                <div className="w-full p-4 rounded-xl border-l-4 border-crimson bg-cream shadow-sm">
                  <h4 className="font-serif font-medium text-foreground">Crisis of Incentives</h4>
                  <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                    Systems optimizing purely for short-term, rivalrous, and extractive behaviors.
                  </p>
                </div>

                <div className="w-full p-4 rounded-xl border-l-4 border-crimson bg-cream shadow-sm">
                  <h4 className="font-serif font-medium text-foreground">Crisis of Trust</h4>
                  <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                    Breakdown of shared sensemaking, truth verification, and institutional legitimacy.
                  </p>
                </div>

                <div className="w-full p-4 rounded-xl border-l-4 border-crimson bg-cream shadow-sm">
                  <h4 className="font-serif font-medium text-foreground">
                    Crisis of Complexity<sub className="text-[9px] font-sans font-normal opacity-60 ml-0.5">5</sub>
                  </h4>
                  <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                    Complicated structures fragilely layered over highly complex substrates.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Equation Formula with clean alignment line integration */}
            <div className="pt-6 border-t border-border text-center relative z-10 -mt-6">
              <p className="text-xs font-mono bg-foreground text-background py-2 px-3 rounded shadow-inner relative z-20">
                Rivalrous dynamics + Exponential tech = <span className="text-red-400 font-semibold">Death of humanity</span><sub className="text-[8px] opacity-60 ml-0.5">4</sub>
              </p>
            </div>
          </div>


          {/* 3. THE ONTOLOGICAL-CULTURAL LAYER */}
          <div className="flex flex-col h-full border border-dashed border-border p-6 rounded-xl bg-card/30 relative md:col-span-2 lg:col-span-1">
            {/* Left Relation Rails to Layer 2 (Perfect Height Matching) */}
            <div className="hidden lg:block absolute -left-8 top-0 bottom-[96px] w-8 z-0">
              <div className="absolute top-[24%] w-full border-t border-dashed border-olive/20" />
              <div className="absolute top-[44%] w-full border-t border-dashed border-olive/20" />
              <div className="absolute top-[64%] w-full border-t border-dashed border-olive/20" />
              <div className="absolute top-[84%] w-full border-t border-dashed border-olive/20" />
            </div>

            {/* Left Arrow Badge */}
            <div className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-background border border-border rounded-full p-1 text-muted-foreground shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>

            <div className="text-center mb-8 border-b border-border pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Layer 3</span>
              <h3 className="font-serif text-xl font-semibold text-foreground">The Ontological-Cultural Layer</h3>
              <p className="text-sm font-medium text-olive mt-2">
                Foundational Dysfunctions<sub className="text-[9px] font-sans font-normal opacity-60 ml-0.5">1</sub>
              </p>
            </div>

            {/* Ontological Items Stack */}
            <div className="flex-grow flex flex-col items-center justify-center my-auto relative w-full pb-6">
              {/* Vertical line passing directly behind the layout cards and running all the way down */}
              <div className="absolute left-1/2 top-4 bottom-0 w-[1px] bg-olive/20 -translate-x-1/2 z-0" />

              <div className="w-full flex flex-col gap-4 relative z-10">
                <div className="w-full p-4 rounded-xl border-l-4 border-olive bg-cream shadow-sm">
                  <h4 className="font-serif font-medium text-foreground">Crisis of Perception</h4>
                  <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                    Persistent delusions of total separation, misapprehending nature and reality.
                  </p>
                </div>

                <div className="w-full p-4 rounded-xl border-l-4 border-olive bg-cream shadow-sm">
                  <h4 className="font-serif font-medium text-foreground">Crisis of Relationship</h4>
                  <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                    Alienation from self, other human life, and the non-human world.
                  </p>
                </div>

                <div className="w-full p-4 rounded-xl border-l-4 border-olive bg-cream shadow-sm">
                  <h4 className="font-serif font-medium text-foreground">
                    Crisis of Value<sub className="text-[9px] font-sans font-normal opacity-60 ml-0.5">2</sub>
                  </h4>
                  <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                    Spiritual crisis, loss of existential meaning, and broken ties to the sacred.
                  </p>
                </div>

                <div className="w-full p-4 rounded-xl border-l-4 border-olive bg-cream shadow-sm">
                  <h4 className="font-serif font-medium text-foreground">Crisis of Capacity</h4>
                  <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                    Unfulfilled potential scaled up by global systems, making problems outpace our capacity to process.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Equation Formula with clean alignment line integration */}
            <div className="pt-6 border-t border-border text-center relative z-10 -mt-6">
              <p className="text-xs font-mono bg-foreground text-background py-2 px-3 rounded shadow-inner relative z-20">
                Global Intimacy Disorder + Exponential tech = <span className="text-orange-400 font-semibold">Death of our humanity</span><sub className="text-[8px] opacity-60 ml-0.5">3</sub>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

        {/* The Problem */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-crimson font-medium text-sm tracking-wide uppercase">The Problem</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                A Large-Scale Educational Crisis
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                A society that is incapable of creating educational structures that can prepare individuals with the capacities required to handle the increasing complexity of our world, while serving the flourishing of all life. <strong className="text-foreground">The task demands of society outstrip the capabilities available to handle it.</strong>
              </p>

              <blockquote className="p-8 bg-background border-l-4 border-olive">
                <p className="font-serif text-lg text-foreground italic leading-relaxed">
                  &ldquo;The basic idea is that societies require each new generation to be in a position to inherit the requisite capabilities, legitimacy, and meaning-making to continue the project of cooperative social life. Failing this, the intergenerational fabric of the social world begins to fray. At some point inadequate education results in an inability to fill essential institutional roles, provide motivating meanings, and secure political legitimacy.&rdquo;
                </p>
                <cite className="mt-4 block text-muted-foreground text-sm not-italic">— Zak Stein</cite>
              </blockquote>

              <p className="text-muted-foreground leading-relaxed">
                Current educational systems are fragmented, developing fragmented individuals who create fragmented systems. Our educational system has been one of the main contributors to the metacrisis. The metacrisis is an opportunity for evolving our understanding of what education should be.
              </p>
            </div>
          </div>
        </section>

        {/* Our Hypothesis */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow font-medium text-sm tracking-wide uppercase">Our Hypothesis</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background">
                Educational Architecture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-background/10 border border-background/20">
                <h3 className="font-serif text-xl font-medium text-yellow">The Architecture</h3>
                <p className="mt-4 text-background/80 text-sm leading-relaxed">
                  Lasting systemic change or responses to the metacrisis cannot occur without human maturation and evolution, held by an ecosystem and community with shared views, practices and vision. An ecosystem that can weave and support individuals along the long arc of human transformation has the best chance of building trust, capacity and collaboration, affecting transformative change in multiple sectors.
                </p>
              </div>

              <div className="p-8 bg-background/10 border border-background/20">
                <h3 className="font-serif text-xl font-medium text-cyan">The Institute</h3>
                <p className="mt-4 text-background/80 text-sm leading-relaxed">
                  We need a network of responses—initiatives, communities, people—that can ground the process of self-recognition, unfoldment, transformation and regeneration in cosmo-local, personal and bioregional contexts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Response */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-olive font-medium text-sm tracking-wide uppercase">Our Response</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                What Leads to Wisdom-Centered Human Maturation?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  number: "1",
                  title: "Holistic Education",
                  desc: "Education focused on spiritual, emotional, relational, intellectual and ecological development—Body, Mind, Heart and Soul.",
                },
                {
                  number: "2",
                  title: "Soul Initiation",
                  desc: "Supporting individuals to go through the tragedy and come out on the other side, transformed.",
                },
                {
                  number: "3",
                  title: "Ecosystem Integration",
                  desc: "Integrating a fragmented ecosystem of the best developmental initiatives, organizations, communities and leaders representing wisdom-centered culture.",
                },
                {
                  number: "4",
                  title: "Long-term Architecture",
                  desc: "Offering an educational architecture for long-term development that holds the full arc of human transformation.",
                },
                {
                  number: "5",
                  title: "Sangha Building",
                  desc: "Building a community of support and accountability with shared views, practices and vision—creating ecosystems for trustworthy relationships.",
                },
                {
                  number: "6",
                  title: "Bioregional Rootedness",
                  desc: "Grounding transformation in shared cultural context, territory, and place-based wisdom.",
                },
              ].map((item) => (
                <div key={item.number} className="p-6 bg-cream">
                  <div className="w-10 h-10 bg-olive text-background rounded-full flex items-center justify-center mb-4">
                    <span className="font-serif font-medium">{item.number}</span>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <span className="text-olive font-medium text-sm tracking-wide uppercase">Our Approach</span>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
                    Four Foundational Elements
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Most educational responses to the metacrisis continue to offer a program. A six-week journey. A year-long fellowship. We are building something different—an Educational Architecture for a time between worlds.
                </p>

                <div className="space-y-6">
                  <div className="border-b border-border pb-6">
                    <h3 className="font-serif text-xl font-medium text-foreground">I. Re-centering the Sacred</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      The sacred is not peripheral—it is a way of perceiving reality that recognizes the transcendent worth and radical interdependence of all life.
                    </p>
                  </div>

                  <div className="border-b border-border pb-6">
                    <h3 className="font-serif text-xl font-medium text-foreground">II. Integrating a Fragmented Ecosystem</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      Mapping, weaving, and adapting wisdom-centered initiatives into a coherent path of transformation accessible to those in the Global South.
                    </p>
                  </div>

                  <div className="border-b border-border pb-6">
                    <h3 className="font-serif text-xl font-medium text-foreground">III. Four Streams of Transformation</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      Soul, Systems, Soil, and Society—interwoven dimensions of a transformational path, not sequential stages.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-medium text-foreground">IV. A Relational Field</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      Tending community where trust, intimacy, and accountability create the conditions for transformation to go deeper.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[3/4] rounded-sm overflow-hidden lg:sticky lg:top-24">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jendaya%20Conure%20%28Aratinga%20jandaya%29%20colored%20wood-engraved%20plate%20by%20Alexander%20Francis%20Lydon.%20Digitally%20enhanced%20from%20our%20own%201884%20edition%20plates%20of%20Pa-ktqMroU1Qzm3YkOz5ZaCams3s54pdP.jpg"
                  alt="Jendaya Conure - a Brazilian bird representing natural wisdom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Expected Outcomes */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-olive font-medium text-sm tracking-wide uppercase">The Vision</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Expected Outcomes
              </h2>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-cream border-l-4 border-yellow">
                <h3 className="font-serif text-xl font-medium text-foreground">Short Term</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Participants are eager to keep engaging with developmental opportunities, building the community and being in space together. Strengthening agreements, alignment and coherence between everyone.
                </p>
              </div>

              <div className="p-8 bg-cream border-l-4 border-olive">
                <h3 className="font-serif text-xl font-medium text-foreground">Medium Term</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Participants start working together, prototyping new systems, gatherings, initiatives and communities, entering positions of power.
                </p>
              </div>

              <div className="p-8 bg-cream border-l-4 border-cyan">
                <h3 className="font-serif text-xl font-medium text-foreground">Long Term</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  A wisdom-centered network of mature communities, people and organizations working together for cultural renewal—creating structures that are shifting narratives and consciousness of society, influencing policy, creating new practices, new communities emerging, deliberate developmental organizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-yellow">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Towards Collective Coordination in Service of Life
            </h2>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              All of this is in service of a single horizon: nurturing the transformation of individuals and community towards a genuinely different kind of collective response to the crises of our time.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/fellowship"
                className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                Join the Fellowship
              </Link>
              <Link
                href="/learn-more"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-foreground text-foreground font-medium text-sm tracking-wide hover:bg-foreground/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
