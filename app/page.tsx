import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  HeroSection,
  EssenceSection,
  MettaExplanation,
  TropicalSection,
  CollectiveSection,
  FieldsOfWorkSection,
  CTASection,
} from "@/components/home-sections"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <EssenceSection />
        <MettaExplanation />
        <TropicalSection />
        <CollectiveSection />
        <FieldsOfWorkSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
