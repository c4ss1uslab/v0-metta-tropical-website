import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  HeroSection,
  IntroductionSection,
  FieldsOfWorkSection,
  CTASection,
} from "@/components/home-sections"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <IntroductionSection />
        <FieldsOfWorkSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
