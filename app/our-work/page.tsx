import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FieldsOfWorkSection } from "@/components/home-sections"

export const metadata: Metadata = {
  title: "Our Work | Metta Tropical Collective",
  description:
    "Explore the fields of work through which Metta Tropical Collective supports transformation, inquiry, and practice.",
}

export default function OurWorkPage() {
  return (
    <>
      <Navigation />
      <main>
        <FieldsOfWorkSection />
      </main>
      <Footer />
    </>
  )
}
