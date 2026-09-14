"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const navItems = [
  { href: "/about", label: "About" },
  { href: "/why-now", label: "Why Now" },
  {
    label: "Our Work",
    children: [
      {
        href: "/our-work/transformative-lab",
        label: "Transformative Educational Lab",
      },
      {
        href: "/our-work/ecosystem-map",
        label: "Ecosystem Map",
      },
    ],
  },
  { href: "/fellowship", label: "Fellowship" },
  { href: "/theory-of-change", label: "Theory of Change" },
  { href: "/learn-more", label: "Learn More" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [ourWorkOpen, setOurWorkOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-medium tracking-tight text-foreground">
              Metta Tropical Collective
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => {
              if (item.children) {
                const isActive = item.children.some(
                  (child) => pathname === child.href
                )

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOurWorkOpen(true)}
                    onMouseLeave={() => setOurWorkOpen(false)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-olive ${
                        isActive
                          ? "text-olive"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setOurWorkOpen(!ourWorkOpen)}
                      aria-expanded={ourWorkOpen}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {ourWorkOpen && (
                      <div className="absolute left-0 top-full pt-2">
                        <div className="w-64 rounded-md border border-border bg-background p-2 shadow-lg">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block rounded-sm px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-olive ${
                                pathname === child.href
                                  ? "text-olive"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-olive ${
                    pathname === item.href
                      ? "text-olive"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                if (item.children) {
                  const isActive = item.children.some(
                    (child) => pathname === child.href
                  )

                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        className={`flex w-full items-center justify-between text-base font-medium transition-colors hover:text-olive ${
                          isActive
                            ? "text-olive"
                            : "text-muted-foreground"
                        }`}
                        onClick={() => setOurWorkOpen(!ourWorkOpen)}
                        aria-expanded={ourWorkOpen}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            ourWorkOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {ourWorkOpen && (
                        <div className="mt-3 ml-4 flex flex-col gap-3 border-l border-border pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`text-sm font-medium transition-colors hover:text-olive ${
                                pathname === child.href
                                  ? "text-olive"
                                  : "text-muted-foreground"
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base font-medium transition-colors hover:text-olive ${
                      pathname === item.href
                        ? "text-olive"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
