import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-medium text-background">
              Metta Tropical Collective
            </h3>
            <p className="text-sm text-background/70 max-w-xs leading-relaxed">
              An experimental, place-based community of transformation, inquiry and practice, rooted in Brazil and weaving a wisdom-centered culture.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-background">Explore</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-background/70 hover:text-yellow transition-colors">
                About
              </Link>
              <Link href="/why-now" className="text-sm text-background/70 hover:text-yellow transition-colors">
                Why Now
              </Link>
              <Link href="/fellowship" className="text-sm text-background/70 hover:text-yellow transition-colors">
                Fellowship
              </Link>
              <Link href="/theory-of-change" className="text-sm text-background/70 hover:text-yellow transition-colors">
                Theory of Change
              </Link>
              <Link href="/learn-more" className="text-sm text-background/70 hover:text-yellow transition-colors">
                Learn More
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-background">Connect</h4>
            <p className="text-sm text-background/70 leading-relaxed">
              If anything has stirred in you while engaging with our work, please don&apos;t hesitate to reach out. We would love to connect.
            </p>
            <a 
              href="mailto:hello@mettatropical.org" 
              className="inline-block text-sm text-yellow hover:underline transition-colors"
            >
              hello@mettatropical.org
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/20">
          <p className="text-sm text-background/50 text-center">
            &copy; {new Date().getFullYear()} Metta Tropical Collective. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
