"use client";

import React, { useMemo, useState } from "react";

/**
 * Metta Tropical — Educational Landscape Map
 * -------------------------------------------------------------
 * Fixed Theme Scoping: CSS custom properties are now strictly 
 * bound to `.theme-wrapper` so toggling light/dark mode instantly 
 * overrides system OS preferences across all sections.
 */

// ----------------------------------------------------------------
// Content data
// ----------------------------------------------------------------

type EntryKind = "essay" | "note" | "diagram" | "reference";

interface LibraryEntry {
  kind: EntryKind;
  title: string;
  dek: string;
  body: React.ReactNode;
}

const entries: LibraryEntry[] = [
  {
    kind: "essay",
    title: "The emergence of developmental initiatives",
    dek: "How a generation of practices grew outside formal institutions, and became lineages.",
    body: (
      <>
        <p>
          Within the past decades, many new types of developmental and
          transformational initiatives started to emerge around the world, as
          part of alternative educational spaces exploring dimensions of
          human development not available within formal institutions. They
          covered a wide range of domains: systems thinking, rites of passage,
          soul initiation, nature-based immersion, deep ecology, regeneration,
          spiritual development, men's work, relationality, social change.
        </p>
        <p>
          Many evolved into lineages in themselves. A lot of them developed
          robust frameworks, methodologies and practices that have been
          tested over time and proven to support individual and collective
          transformation, with communities built around them.
        </p>
        <div className="callout">
          <p className="font-serif text-lg">
            This is exciting news. The problem is that they remain fragmented
            and siloed, often concentrated in the Global North and largely
            inaccessible to most communities in the Global South.
          </p>
        </div>
      </>
    ),
  },
  {
    kind: "essay",
    title: "Education and transformation remain fragmented",
    dek: "Each domain offers depth. None of them, alone, forms an integrated human being.",
    body: (
      <>
        <p>
          Even the best known educational and transformational institutions
          still offer a type of development that is deeply fragmented. These
          spaces cultivate important capacities, yet rarely bring them
          together into a coherent path of maturation.
        </p>
        <p>
          Formal education prepares individuals for professional success
          without cultivating systemic understanding, spiritual depth,
          emotional maturity, or a sense of vocation and service.
          Universities remain essential in many domains, yet they were not
          designed to hold the long arc of human transformation our times
          require. Retreats and immersions offer powerful breakthroughs, but
          without long-term community and integration, much of their impact
          fades once life's pressures return.
        </p>
        <p>
          The result is people who are lopsided in their development:
          intellectually rigorous but ethically hollow, technically skilled
          but disembodied, ecologically aware but politically absent,
          spiritual attuned but strategically blind, emotionally balanced
          but systemically naive.
        </p>
        <p>
          Integrative development then stays available mainly to those with
          enough privilege, time and resources to navigate multiple programs
          and stitch them together on their own. For most people, especially
          in Brazil and across the Global South, that access is rare or
          nonexistent.
        </p>
      </>
    ),
  },
  {
    kind: "essay",
    title: "Integrating a fragmented ecosystem",
    dek: "What is missing is not more programs, but an architecture that holds them together.",
    body: (
      <>
        <div className="callout">
          <p className="font-serif text-lg">
            What is missing is not necessarily more programs, but
            architectures capable of integrating these developmental
            initiatives into a sustained ecosystem of formation.
          </p>
        </div>
        <p>
          Imagine people able to access diverse developmental experiences
          affordably, within their own cultural context, supported by a
          long-term community and guided through a coherent pathway of
          maturation. Our work seeks to do exactly that: to map, connect and
          weave these lineages into a coherent educational journey, held
          within a long-term, locally based community.
        </p>
        <p>
          By doing so we aim not only to make transformative practices more
          accessible, but to gradually nurture a culture where personal and
          collective development become part of everyday life. Over time,
          this ecosystem can also give rise to new, locally rooted practices
          and lineages adapted to our cultural realities.
        </p>
      </>
    ),
  },
  {
    kind: "note",
    title: "Theory of change, in short",
    dek: "The root cause, the hypothesis, and what follows from it.",
    body: (
      <>
        <p>
          <strong className="text-primary">Root cause.</strong> How do we heal the disease of
          separation? How do we change the way we relate to life — self,
          others, world, divine — towards wise, life-affirming ways of
          living?
        </p>
        <p>
          <strong className="text-primary">Hypothesis.</strong> No shortcuts. Evolution of mind, body
          and spirit. Human development and maturation.
        </p>
        <p>
          Which means two things: we need to develop in a certain way in
          order to respond, and we need a shared base worldview and a
          stronger sense of <em className="text-primary">we</em>.
        </p>
        <p>
          <strong className="text-primary">What we are attempting.</strong> To build educational
          architecture for continuous long-term development; to integrate an
          ecosystem of developmental initiatives; to evidence and connect
          people with real work on the world's most pressing problems; and
          to cultivate a network of support and community.
        </p>
        <p>
          <strong className="text-primary">Action.</strong> Bring together the ones who are already
          doing it.
        </p>
      </>
    ),
  },
  {
    kind: "note",
    title: "Who decides what stays visible",
    dek: "On the power and responsibility of the ones holding the pen.",
    body: (
      <>
        <p>
          We know that the act of mapping holds immense power and
          responsibility, echoing a lot of historical precedents and
          prejudices.
        </p>
        <p>
          Who gets to be the mappers? Where are the voices of the ones being
          mapped? What are the incentive landscapes, values and power
          structures underscoring the act of mapping itself?
        </p>
        <p>
          We, the ones doing this mapping, are constantly choosing what to
          emphasise and what to make invisible. This entry stays open, and
          it is the one we most want to be corrected on.
        </p>
      </>
    ),
  },
  {
    kind: "diagram",
    title: "Four core capacities: Soul, Systems, Soil, Society",
    dek: "How the initiatives are distributed, and why these four.",
    body: (
      <>
        <p className="narrow">
          At its core, this integration explores how wisdom-centered
          education can cultivate human beings capable of navigating and
          responding to the metacrisis. If the root of our crisis is
          separation, fragmented development cannot offer a response.
        </p>
        <p className="narrow">
          The goal is not to substitute formal institutions, but to offer a
          soul-centric, systemic and sacred view of reality: who you are
          (Soul), where you are (Systems), and how you might respond (Soil
          and Society).
        </p>
        <div className="caps">
          <div className="cap c1">
            <h4>Soul</h4>
            <ul>
              <li>Metta-Relationality</li>
              <li>Soulcraft</li>
              <li>Ecological belonging</li>
              <li>Wisdom lineages</li>
              <li>Contemplative sciences</li>
            </ul>
          </div>
          <div className="cap c2">
            <h4>Systems</h4>
            <ul>
              <li>Complexity</li>
              <li>Civic &amp; regenerative innovation</li>
              <li>Indigenous &amp; decolonial thinking</li>
            </ul>
          </div>
          <div className="cap c3">
            <h4>Soil</h4>
            <ul>
              <li>Traditional ecological knowledge</li>
              <li>Grassroots &amp; movement building</li>
            </ul>
          </div>
          <div className="cap c4">
            <h4>Society</h4>
            <ul>
              <li>Metacrisis research</li>
              <li>Activism &amp; public education</li>
              <li>Economic alternatives</li>
              <li>Philanthropy &amp; systemic investing</li>
            </ul>
          </div>
        </div>
        <p className="ui tertiary" style={{ marginTop: "var(--space-4)" }}>
          Over 120 initiatives mapped and counting · the entities live in the
          map
        </p>
      </>
    ),
  },
  {
    kind: "note",
    title: "Roadmap",
    dek: "Where the mapping is now, and what comes next.",
    body: (
      <>
        <div className="phases">
          <div className="phase done">
            <span className="n">Phase 1 · done</span>
            <p>Initial launch.</p>
          </div>
          <div className="phase">
            <span className="n">Phase 2</span>
            <p>
              Working group and wisdom council; expanding the mapping with a
              fellowship of youth, teachers, mentors and network.
            </p>
          </div>
          <div className="phase">
            <span className="n">Phase 3</span>
            <p>Integrating partners across the ecosystem.</p>
          </div>
          <div className="phase">
            <span className="n">Phase 4</span>
            <p>Deepening the research.</p>
          </div>
        </div>
        <p className="ui tertiary" style={{ marginTop: "var(--space-4)" }}>
          Last updated · September 2026
        </p>
      </>
    ),
  },
  {
    kind: "reference",
    title: "Glossary",
    dek: "Every term, defined once. Search covers the terms and the definitions.",
    body: (
      <>
        <p>
          The full glossary lives further down this page, and will move to
          its own page as it grows.
        </p>
        <p>
          <a className="btn quiet" href="#glossary">
            Go to the glossary
          </a>
        </p>
      </>
    ),
  },
];

interface GlossaryTerm {
  term: string;
  definition: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Metacrisis",
    definition:
      "The interlocking set of crises whose common root is separation: from self, from others, from world, from the sacred. Responding to it requires more than technical fixes, because fragmented development cannot answer a crisis of fragmentation.",
  },
  {
    term: "Developmental initiative",
    definition:
      "A practice, program or institution whose purpose is human development rather than credentialing or professional training. Most of the entities on this map are developmental initiatives.",
  },
  {
    term: "Lineage",
    definition:
      "An initiative that has developed a framework, a methodology and a community durable enough to be transmitted beyond its founders and tested over time.",
  },
  {
    term: "Soul",
    definition:
      "The capacity concerned with who you are. Covers relationality, soulcraft, ecological belonging, wisdom lineages, and the contemplative sciences.",
  },
  {
    term: "Systems",
    definition:
      "The capacity concerned with where you are. Covers complexity, regenerative and civic innovation, and Indigenous and decolonial thinking.",
  },
  {
    term: "Soil",
    definition:
      "The capacity concerned with the ground you stand on. Traditional ecological knowledge, grassroots organising and movement building.",
  },
  {
    term: "Society",
    definition:
      "The capacity concerned with how you respond. Metacrisis research, public education, economic alternatives and systemic investing.",
  },
  {
    term: "Wisdom-centered education",
    definition:
      "Education oriented towards a soul-centric, systemic and sacred view of reality, intended to guide action towards the flourishing of all life regardless of the field a person works in.",
  },
  {
    term: "Fragmentation",
    definition:
      "The condition in which each domain of development is cultivated in isolation. A fragmented education produces fragmented humans, and fragmented humans reproduce fragmented systems.",
  },
  {
    term: "Response orientation",
    definition:
      "A lens describing what an initiative understands itself to be responding to: the metacrisis, systems change, regeneration, decolonisation, or wisdom.",
  },
  {
    term: "Layer of response",
    definition:
      "A lens locating an initiative's work at the level of culture and inner life (superstructure), social organisation (social structure), systems and infrastructure, or living systems (ecostructure).",
  },
  {
    term: "Countercolonial",
    definition:
      "Distinguished from decolonial: not the undoing of colonial structures from within their terms, but the continuation of ways of living that were never surrendered to them.",
  },
];

const filterKinds: { key: "all" | EntryKind; label: string }[] = [
  { key: "all", label: "All" },
  { key: "essay", label: "Essay" },
  { key: "note", label: "Note" },
  { key: "diagram", label: "Diagram" },
  { key: "reference", label: "Reference" },
];

// ----------------------------------------------------------------
// Hero diagram coordinates
// ----------------------------------------------------------------
const CAPACITY_ORDER: (null | "soul" | "systems" | "soil" | "society")[] = [
  null, "soul", "systems", "soil", "society", null,
];

const STAGE_LABELS = [
  "Click the diagram to unfold",
  "Soul — the first branches light",
  "Systems — the canopy completes",
  "Soil — the rhizome answers",
  "Society — the underground completes",
  "Everything connects. Click to begin again.",
];

const PERCHES: [number, number][][] = [
  [[118, 150], [152, 206], [92, 252], [196, 112]],
  [[268, 58], [330, 34], [212, 96], [392, 28]],
  [[604, 102], [672, 132], [540, 66], [740, 158]],
  [[128, 452], [246, 512], [70, 398], [330, 534]],
  [[628, 462], [700, 404], [556, 520], [772, 432]],
  [[430, 44], [530, 60], [330, 40], [620, 88]],
];

const BIRD_PATHS = [
  "M0 0 c 16 -12, 27 -12, 35 -3 c 8 -9, 19 -9, 35 3 c -16 -3, -27 3, -35 9 c -8 -6, -19 -12, -35 -9 z",
  "M0 0 c 12 -9, 20 -9, 26 -2 c 6 -7, 14 -7, 26 2 c -12 -2, -20 2, -26 7 c -6 -5, -14 -9, -26 -7 z",
  "M0 0 c 10 -7, 17 -7, 22 -2 c 5 -5, 12 -5, 22 2 c -10 -2, -17 2, -22 6 c -5 -4, -12 -8, -22 -6 z",
  "M0 0 c 8 -6, 13 -6, 17 -1 c 4 -5, 9 -5, 17 1 c -8 -1, -13 1, -17 5 c -4 -3, -9 -6, -17 -5 z",
];

interface BranchDef {
  capacity: "soul" | "systems" | "soil" | "society";
  d: string;
  len: number;
  delay: number;
  layer: "canopy" | "rhizo";
}

const BRANCHES: BranchDef[] = [
  { capacity: "soul", layer: "canopy", len: 420, delay: 0, d: "M450 310 C 450 258, 432 232, 396 204" },
  { capacity: "systems", layer: "canopy", len: 420, delay: 100, d: "M450 310 C 450 262, 470 236, 508 208" },
  { capacity: "soul", layer: "canopy", len: 300, delay: 340, d: "M396 204 C 372 184, 348 182, 320 166" },
  { capacity: "soul", layer: "canopy", len: 280, delay: 400, d: "M396 204 C 390 176, 400 156, 388 130" },
  { capacity: "systems", layer: "canopy", len: 300, delay: 460, d: "M508 208 C 534 190, 556 190, 586 172" },
  { capacity: "systems", layer: "canopy", len: 270, delay: 520, d: "M508 208 C 514 180, 506 160, 518 134" },
  { capacity: "soul", layer: "canopy", len: 210, delay: 780, d: "M320 166 C 302 152, 284 152, 266 142" },
  { capacity: "soul", layer: "canopy", len: 200, delay: 820, d: "M388 130 C 378 112, 362 104, 348 92" },
  { capacity: "systems", layer: "canopy", len: 200, delay: 860, d: "M586 172 C 606 158, 622 160, 638 148" },
  { capacity: "systems", layer: "canopy", len: 195, delay: 900, d: "M518 134 C 528 116, 544 108, 558 96" },
  { capacity: "soul", layer: "canopy", len: 150, delay: 1080, d: "M266 142 C 252 132, 240 130, 228 122" },
  { capacity: "soul", layer: "canopy", len: 150, delay: 1120, d: "M348 92 C 340 78, 330 72, 320 62" },
  { capacity: "systems", layer: "canopy", len: 150, delay: 1160, d: "M638 148 C 652 138, 664 136, 676 128" },
  { capacity: "systems", layer: "canopy", len: 150, delay: 1200, d: "M558 96 C 566 82, 576 76, 586 66" },

  { capacity: "soil", layer: "rhizo", len: 400, delay: 200, d: "M450 310 C 444 352, 418 368, 378 384" },
  { capacity: "society", layer: "rhizo", len: 400, delay: 260, d: "M450 310 C 456 354, 484 370, 524 386" },
  { capacity: "soil", layer: "rhizo", len: 260, delay: 320, d: "M450 310 C 450 348, 448 372, 452 408" },
  { capacity: "soil", layer: "rhizo", len: 290, delay: 600, d: "M378 384 C 338 398, 312 392, 274 406" },
  { capacity: "soil", layer: "rhizo", len: 270, delay: 660, d: "M378 384 C 364 412, 370 432, 350 456" },
  { capacity: "society", layer: "rhizo", len: 290, delay: 720, d: "M524 386 C 564 400, 590 394, 628 408" },
  { capacity: "society", layer: "rhizo", len: 270, delay: 780, d: "M524 386 C 538 414, 532 434, 552 458" },
  { capacity: "soil", layer: "rhizo", len: 240, delay: 840, d: "M452 408 C 448 436, 458 454, 450 482" },
  { capacity: "soil", layer: "rhizo", len: 200, delay: 1020, d: "M274 406 C 246 416, 230 412, 204 422" },
  { capacity: "soil", layer: "rhizo", len: 190, delay: 1060, d: "M350 456 C 338 474, 324 480, 310 496" },
  { capacity: "society", layer: "rhizo", len: 200, delay: 1100, d: "M628 408 C 656 418, 672 414, 698 424" },
  { capacity: "society", layer: "rhizo", len: 190, delay: 1140, d: "M552 458 C 564 476, 578 482, 592 498" },
  { capacity: "soil", layer: "rhizo", len: 170, delay: 1180, d: "M450 482 C 442 502, 452 516, 446 534" },
  { capacity: "soil", layer: "rhizo", len: 150, delay: 1320, d: "M204 422 C 188 430, 178 428, 166 434" },
  { capacity: "society", layer: "rhizo", len: 150, delay: 1360, d: "M698 424 C 714 432, 724 430, 736 436" },
];

interface NodeDef {
  capacity: "soul" | "systems" | "soil" | "society";
  cx: number;
  cy: number;
  r: number;
  delay: number;
}

const NODES: NodeDef[] = [
  { capacity: "soul", cx: 228, cy: 122, r: 6, delay: 1300 },
  { capacity: "soul", cx: 320, cy: 62, r: 5.5, delay: 1340 },
  { capacity: "soul", cx: 348, cy: 92, r: 4.5, delay: 1360 },
  { capacity: "systems", cx: 676, cy: 128, r: 6, delay: 1380 },
  { capacity: "systems", cx: 586, cy: 66, r: 5.5, delay: 1420 },
  { capacity: "systems", cx: 558, cy: 96, r: 4.5, delay: 1440 },
  { capacity: "soil", cx: 166, cy: 434, r: 6, delay: 1460 },
  { capacity: "soil", cx: 310, cy: 496, r: 5.5, delay: 1500 },
  { capacity: "soil", cx: 446, cy: 534, r: 5, delay: 1540 },
  { capacity: "society", cx: 592, cy: 498, r: 5.5, delay: 1580 },
  { capacity: "society", cx: 736, cy: 436, r: 6, delay: 1620 },
];

interface ConnDef {
  group: 1 | 2 | 3 | 4 | 5;
  color: string;
  d: string;
}

const CONNECTIONS: ConnDef[] = [
  { group: 1, color: "var(--soul)", d: "M228 122 C 258 66, 292 50, 320 62" },
  { group: 1, color: "var(--soul)", d: "M266 142 C 300 104, 330 92, 348 92" },
  { group: 2, color: "var(--systems)", d: "M676 128 C 646 72, 612 56, 586 66" },
  { group: 2, color: "var(--systems)", d: "M638 148 C 604 110, 576 98, 558 96" },
  { group: 3, color: "var(--soil)", d: "M166 434 C 210 486, 268 508, 310 496" },
  { group: 3, color: "var(--soil)", d: "M310 496 C 356 528, 410 540, 446 534" },
  { group: 4, color: "var(--society)", d: "M736 436 C 692 488, 634 510, 592 498" },
  { group: 4, color: "var(--society)", d: "M592 498 C 546 530, 492 542, 446 534" },
  { group: 5, color: "var(--text-primary)", d: "M266 142 C 176 212, 168 342, 204 422" },
  { group: 5, color: "var(--text-primary)", d: "M638 148 C 728 218, 736 348, 698 424" },
  { group: 5, color: "var(--text-primary)", d: "M320 62 C 404 22, 502 22, 586 66" },
];

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

export default function MettaTropical() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [step, setStep] = useState(0);
  const [filterKind, setFilterKind] = useState<"all" | EntryKind>("all");
  const [view, setView] = useState<"list" | "cards">("list");
  const [query, setQuery] = useState("");

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  const advance = () => setStep((s) => (s >= 5 ? 0 : s + 1));

  const litCapacities = useMemo(
    () => (step === 0 ? [] : CAPACITY_ORDER.slice(1, step + 1).filter(Boolean)),
    [step]
  ) as string[];

  const isGroupOn = (g: number) => step >= g;

  const filteredEntries = useMemo(
    () =>
      filterKind === "all" ? entries : entries.filter((e) => e.kind === filterKind),
    [filterKind]
  );

  const filteredTerms = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossaryTerms;
    return glossaryTerms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="theme-wrapper" data-theme={theme}>
      <GlobalStyles />

      <button
        className="btn quiet themebtn"
        onClick={toggleTheme}
        aria-label="Toggle colour scheme"
      >
        Theme
      </button>

      <nav>
        <div className="row">
          <a className="brand" href="#top">
            Metta Tropical
          </a>
          <ul>
            <li>
              <a className="navlink" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="navlink" href="#library">
                Library
              </a>
            </li>
            <li>
              <a className="navlink" href="#filters">
                Filters
              </a>
            </li>
            <li>
              <a className="navlink" href="#glossary">
                Glossary
              </a>
            </li>
            <li>
              <a
                className="navlink"
                href="https://metta-tropical-ecosystem-map.ai.studio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Map ↗
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header className="hero bg-cream" id="top">
        <div className="hero-inner max-w-6xl">
          <h1>METTA TROPICAL</h1>
          <p className="tagline">Educational Landscape Map</p>

          <div
            className="stage"
            role="button"
            tabIndex={0}
            aria-label="Unfold the diagram. Press Enter to advance."
            onClick={advance}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                advance();
              }
            }}
          >
            <svg
              viewBox="0 0 900 620"
              role="img"
              aria-label="A canopy above and a rhizome below, joined at a horizon, with swallows"
            >
              <line className="horizon" x1={30} y1={310} x2={870} y2={310} />

              <g className="canopy">
                {BRANCHES.filter((b) => b.layer === "canopy").map((b, i) => (
                  <path
                    key={`c-${i}`}
                    className={`branch${litCapacities.includes(b.capacity) ? " lit" : ""}`}
                    d={b.d}
                    style={
                      {
                        "--len": b.len,
                        "--c": `var(--${b.capacity})`,
                        animationDelay: `${b.delay}ms`,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </g>

              <g className="rhizo">
                {BRANCHES.filter((b) => b.layer === "rhizo").map((b, i) => (
                  <path
                    key={`r-${i}`}
                    className={`branch${litCapacities.includes(b.capacity) ? " lit" : ""}`}
                    d={b.d}
                    style={
                      {
                        "--len": b.len,
                        "--c": `var(--${b.capacity})`,
                        animationDelay: `${b.delay}ms`,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </g>

              <g>
                {CONNECTIONS.map((c, i) => (
                  <path
                    key={i}
                    className={`conn${isGroupOn(c.group) ? " on" : ""}`}
                    d={c.d}
                    style={{ "--c": c.color } as React.CSSProperties}
                  />
                ))}
              </g>

              <g>
                {NODES.map((n, i) => (
                  <circle
                    key={i}
                    className={`node${litCapacities.includes(n.capacity) ? " lit" : ""}`}
                    cx={n.cx}
                    cy={n.cy}
                    r={n.r}
                    fill="currentColor"
                    style={
                      {
                        "--c": `var(--${n.capacity})`,
                        animationDelay: `${n.delay}ms`,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </g>

              <g>
                {BIRD_PATHS.map((path, i) => {
                  const [x, y] = PERCHES[step][i];
                  return (
                    <g
                      key={i}
                      className="bird"
                      style={
                        {
                          animationDelay: `${1100 + i * 200}ms`,
                          transform: `translate(${x}px, ${y}px)`,
                        } as React.CSSProperties
                      }
                    >
                      <path d={path} />
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>

          <div className="hint">
            <span className="ui tertiary">{STAGE_LABELS[step]}</span>
            <div
              className="steps"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={5}
              aria-valuenow={step}
              aria-label="Diagram stage"
            >
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <i key={i} className={i <= step ? "on" : ""} />
              ))}
            </div>
          </div>

          <div className="cta">
            <a
              className="btn"
              href="https://metta-tropical-ecosystem-map.ai.studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enter the map
            </a>
            <a className="btn quiet bg-[#111827] hover:bg-[#111827]/90" href="#about">
              About
            </a>
            <a className="btn quiet bg-[#111827] hover:bg-[#111827]/90" href="#library">
              Library
            </a>
          </div>
        </div>
      </header>

      {/* ===== ABOUT ===== */}
      <section id="about" className="bg-background py-24">
        <div className="max-w-6xl">
          <span className="eyebrow">01 — About the map</span>
          <div className="cols">
            <div className="figure">
              <span className="ui tertiary" style={{ textAlign: "center", lineHeight: 2 }}>
                map
                <br />
                graphic
                <br />
                loop
                <br />
                <br />[ to be added ]
              </span>
            </div>
            <div>
              <h2 className="!text-[43px] font-semibold">Integrating a fragmented ecosystem of educational responses to the metacrisis
              </h2>
              <br></br>
              <p className="body-lg">
                Over the past decades, many new developmental and
                transformational practices have emerged around the world. They
                grew inside alternative educational spaces, exploring
                dimensions of human development that formal institutions were
                never designed to hold.
              </p>
              <p className="body-lg">
                Systems thinking, rites of passage, soul initiation,
                nature-based immersion, deep ecology, regeneration, spiritual
                development, relationality, social change. Many have become
                lineages in their own right, with frameworks tested over time
                and communities built around them. The list keeps expanding.
              </p>
              <p className="body-lg">
                  Yet they remain{" "}
                  <span className="bg-[#FBBF24]">fragmented and siloed</span>, often
                  concentrated in the Global North and largely inaccessible to
                  most communities in the Global South.
                </p>

              <p style={{ marginTop: "var(--space-5)" }}>
                <a className="btn quiet bg-[#111827] hover:bg-[#111827]/90" href="#library">
                  Read the full argument
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POSITION ===== */}
      <section className="bg-cream py-24" style={{ paddingTop: "var(--space-4)", paddingBottom: "var(--space-6)" }}>
        <div className="max-w-4xl">
          <details className="pull">
            <summary>
              <span className="label">Where we stand</span>
              <span className="tri" style={{ marginLeft: "var(--space-3)" }} />
            </summary>
            <div className="pull-body callout">
              <p className="font-serif text-2xl text-primary leading-relaxed mb-4">
                The act of mapping holds immense power and responsibility,
                echoing a long history of precedents and prejudices.
              </p>
              <p className="text-secondary leading-relaxed max-w-2xl">
                Who gets to be the mappers? Where are the voices of the ones
                being mapped? What incentive landscapes, values and power
                structures underscore the act of mapping itself? We, the ones
                doing this mapping, are constantly choosing what to emphasise and
                what to make invisible.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* ===== LIBRARY ===== */}
      <section id="library" className="bg-background py-24">
        <div className="max-w-6xl">
          <span className="eyebrow">02 — Library</span>
          <h2>Evergreen contents</h2>
          <p className="lede narrow secondary">
            Essays, notes, diagrams and definitions that accompany the map.
            This section grows. Nothing here expires.
          </p>

          <div className="libbar" style={{ marginTop: "var(--space-5)" }}>
            <div className="filters" role="group" aria-label="Filter by kind">
              {filterKinds.map((f) => (
                <button
                  key={f.key}
                  className="chip"
                  aria-pressed={filterKind === f.key}
                  onClick={() => setFilterKind(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="views" role="group" aria-label="View">
              <button
                className="chip"
                aria-pressed={view === "list"}
                onClick={() => setView("list")}
              >
                List
              </button>
              <button
                className="chip"
                aria-pressed={view === "cards"}
                onClick={() => setView("cards")}
              >
                Cards
              </button>
            </div>
          </div>

          <div className={`entries ${view}`}>
            {filteredEntries.map((entry, i) => (
              <details className="entry" key={i}>
                <summary>
                  <span className="tri" />
                  <span className="head">
                    <span className="ttl">{entry.title}</span>
                    <span className="dek">{entry.dek}</span>
                  </span>
                  <span className={`tag ${entry.kind}`}>
                    {entry.kind[0].toUpperCase() + entry.kind.slice(1)}
                  </span>
                </summary>
                <div className="body" style={entry.kind === "diagram" || entry.kind === "note" ? { maxWidth: "none" } : undefined}>
                  {entry.body}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FILTERS ===== */}
      <section id="filters" className="bg-cream py-24">
        <div className="max-w-4xl">
          <span className="eyebrow">03 — Ecosystem filters</span>
          <h2>The lenses we read the ecosystem through</h2>
          <p className="body-lg">
            Filters are not neutral. Each lens decides what becomes comparable
            and what disappears. We're increasingly adding lenses for a multiperspectival view.
          </p>
          <div style={{ marginTop: "var(--space-5)" }}>
            <p className="ui">Response orientation</p>
            <div className="lenses">
              {[
                "Metacrisis",
                "Wisdom-centered",
                "Systems change",
                "Regeneration",
                "Decolonial",
                "Countercolonial",
              ].map((l) => (
                <span className="lens" key={l}>
                  {l}
                </span>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "var(--space-5)" }}>
            <p className="ui">Layer of response · advanced</p>
            <div className="lenses">
              {[
                "Superstructure · culture, inner",
                "Social structure",
                "Infrastructure",
                "Ecostructure",
              ].map((l) => (
                <span className="lens" key={l}>
                  {l}
                </span>
              ))}
            </div>
          </div>
          <p className="ui tertiary" style={{ marginTop: "var(--space-5)" }}>
            Further lenses in development
          </p>
        </div>
      </section>

      {/* ===== GLOSSARY ===== */}
      <section id="glossary" className="bg-background py-24">
        <div className="max-w-4xl">
          <span className="eyebrow">04 — Glossary</span>
          <h2>Every term, defined once</h2>
          <p className="body-lg">
            From metacrisis to wisdom lineage. Search covers both the terms and
            their definitions, so the concept works even when the name does
            not come to mind.
          </p>
          <label
            className="ui tertiary"
            htmlFor="glossary-search"
            style={{
              display: "block",
              marginTop: "var(--space-5)",
              marginBottom: "var(--space-2)",
            }}
          >
            Search the glossary
          </label>
          <input
            id="glossary-search"
            className="gsearch"
            type="search"
            placeholder="Try “separation” or “lens”"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <p className="ui tertiary" style={{ marginTop: "var(--space-3)" }}>
            {query
              ? `${filteredTerms.length} of ${glossaryTerms.length} terms`
              : `${glossaryTerms.length} terms`}
          </p>
          <dl style={{ margin: "var(--space-4) 0 0" }}>
            {filteredTerms.map((t) => (
              <div className="gterm" key={t.term}>
                <dt>{t.term}</dt>
                <dd>{t.definition}</dd>
              </div>
            ))}
          </dl>
          {filteredTerms.length === 0 && (
            <p className="empty">No term matches that search. Try a broader word.</p>
          )}
        </div>
      </section>

      <footer className="bg-cream">
        <div className="max-w-4xl pt-24 pb-16 text-center">
          <h3 style={{ maxWidth: "40rem", margin: "0 auto var(--space-4)" }}>
            Bring together the ones who are already doing it.
          </h3>
          <p
            className="lede secondary"
            style={{ maxWidth: "38rem", margin: "0 auto var(--space-5)" }}
          >
            Metta Tropical is an open mapping. If an initiative is missing,
            described wrongly, or should not be here at all, we want to hear
            it.
          </p>
          <div
            style={{
              display: "flex",
              gap: "var(--space-3)",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              className="btn"
              href="https://metta-tropical-ecosystem-map.ai.studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enter the map
            </a>
            <a className="btn quiet" href="#library">
              Library
            </a>
            <a className="btn quiet" href="#top">
              Back to top
            </a>
          </div>
          <p className="ui tertiary" style={{ marginTop: "var(--space-7)" }}>
            Metta Tropical collective · September 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

// ----------------------------------------------------------------
// Styles — The CSS variable scoping is completely fixed here
// ----------------------------------------------------------------

function GlobalStyles() {
  return (
    <style>{`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

:root{
  /* Base typography and sizing available everywhere */
  --font-primary:"Cormorant Garamond",ui-serif,Georgia,serif;
  --font-secondary:"IBM Plex Sans",ui-sans-serif,system-ui,sans-serif;
  
  --size-xs:12px; --size-sm:14px; --size-md:16px; --size-lg:18px;
  --size-xl:20px; --size-2xl:28px; --size-3xl:40px; --size-4xl:56px;

  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px;
  --space-5:24px; --space-6:32px; --space-7:48px; --space-8:80px;

  --radius-xs:0px; --radius-sm:2px; --radius-md:4px;

  --motion-instant:150ms; --motion-fast:250ms; --motion-base:400ms;
  --ease:cubic-bezier(.22,.61,.36,1);

  --measure:42rem;
  --navh:64px;
}

/* 
 * 1. Default Light Theme (Bound to .theme-wrapper)
 */
.theme-wrapper {
  --surface-base: #FFFDF6; 
  --surface-sunk: #F7F5E9; 
  --surface-accent: #D9A01B; /* Gold */
  --text-primary: #2C2A25; /* Foreground */
  --text-secondary: #5E5B55; 
  --text-tertiary: #87837E;
  --border-default: #E6E3D8;
  --border-muted: #2C2A25; 
  --btn-primary: #D9A01B; 
  --btn-text: #FFFDF6;
  --btn-quiet-bg: #2C2A25; 
  --btn-quiet-text: #FFFDF6;
  --soul: #8B0000;    /* Crimson */
  --systems: #008B8B; /* Cyan */
  --soil: #556B2F;    /* Olive */
  --society: #D9A01B; /* Gold */

  /* Ensure the full wrapper adapts colors cleanly */
  background-color: var(--surface-base);
  color: var(--text-primary);
  min-height: 100vh;
  padding-top: var(--navh);
  font-family: var(--font-primary);
  font-size: var(--size-md);
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

/* 
 * 2. OS-Level Dark Theme 
 */
@media (prefers-color-scheme: dark) {
  .theme-wrapper[data-theme="system"] {
    --surface-base: #1F1D1A; 
    --surface-sunk: #282622;
    --text-primary: #EBE8E1; 
    --text-secondary: #A8A49D; 
    --text-tertiary: #7A7771;
    --border-default: #3D3A36; 
    --border-muted: #EBE8E1;
    --btn-primary: #D9A01B; 
    --btn-text: #1F1D1A;
    --btn-quiet-bg: #EBE8E1;
    --btn-quiet-text: #1F1D1A;
    --soul:#FF4D4D; --systems:#00FFFF; --soil:#9ACD32; --society:#FCD34D;
  }
}

/* 
 * 3. Forced Dark Theme 
 */
.theme-wrapper[data-theme="dark"] {
  --surface-base: #1F1D1A; 
  --surface-sunk: #282622;
  --text-primary: #EBE8E1; 
  --text-secondary: #A8A49D; 
  --text-tertiary: #7A7771;
  --border-default: #3D3A36; 
  --border-muted: #EBE8E1;
  --btn-primary: #D9A01B; 
  --btn-text: #1F1D1A;
  --btn-quiet-bg: #EBE8E1;
  --btn-quiet-text: #1F1D1A;
  --soul:#FF4D4D; --systems:#00FFFF; --soil:#9ACD32; --society:#FCD34D;
}

/* 
 * 4. Forced Light Theme (overrides OS Dark)
 */
.theme-wrapper[data-theme="light"] {
  --surface-base: #FFFDF6; 
  --surface-sunk: #F7F5E9; 
  --text-primary: #2C2A25; 
  --text-secondary: #5E5B55; 
  --text-tertiary: #87837E;
  --border-default: #E6E3D8;
  --border-muted: #111827; 
  --btn-primary: #D9A01B; 
  --btn-text: #FFFDF6;
  --btn-quiet-bg: #111827; 
  --btn-quiet-text: #FFFDF6;
  --soul: #8B0000;    
  --systems: #008B8B; 
  --soil: #556B2F;    
  --society: #D9A01B; 
}


*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:calc(var(--navh) + var(--space-3))}
body{margin:0; background: #FFFDF6;} /* Safety fallback */

p{margin:0 0 var(--space-4); line-height: 1.625; color: var(--text-secondary);}
.text-primary { color: var(--text-primary); }
.text-secondary { color: var(--text-secondary); }
.narrow{max-width:var(--measure)}

/* Structural layout utility classes */
.bg-cream { background-color: var(--surface-base); }
.bg-background { background-color: var(--surface-sunk); }
.py-24 { padding: var(--space-8) 0; }
.pt-24 { padding-top: var(--space-8); }
.pb-16 { padding-bottom: var(--space-6); }
.max-w-6xl { max-width: 72rem; margin: 0 auto; padding: 0 var(--space-4); }
.max-w-4xl { max-width: 56rem; margin: 0 auto; padding: 0 var(--space-4); }

a:focus-visible,button:focus-visible,summary:focus-visible,input:focus-visible,[tabindex]:focus-visible{
  outline:3px solid var(--surface-accent);outline-offset:3px;border-radius:var(--radius-xs)
}

h1,h2,h3,h4{margin:0;font-family:var(--font-primary);font-weight:500;line-height:1.12; color:var(--text-primary)}
h2{font-size:clamp(32px,5vw,48px);letter-spacing:-.01em;margin-bottom:var(--space-4)}
h3{font-size:var(--size-2xl)}
.ui{font-family:var(--font-secondary);font-size:var(--size-xs);font-weight:500;
  text-transform:uppercase;letter-spacing:.12em;line-height:1.4}
.secondary{color:var(--text-secondary)} .tertiary{color:var(--text-tertiary)}
.lede{font-size:var(--size-xl);line-height:1.45}
.body-lg{font-size:var(--size-lg)}

/* Emulated the visual accents from About */
.eyebrow{display:inline-block;font-family:var(--font-secondary);font-size:var(--size-sm);
  font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--surface-accent);
  background:transparent;padding:0;
  border-radius:0;margin-bottom:var(--space-5)}
  
.callout{border-left:2px solid var(--surface-accent);padding-left:var(--space-4);margin:var(--space-4) 0}
.callout p{color:var(--text-primary)}

.mark{background:rgba(217, 160, 27, 0.15);color:var(--text-primary);padding:0 .22em;border-radius:var(--radius-xs);
  box-decoration-break:clone;-webkit-box-decoration-break:clone}

a{color:inherit}
a.inline{text-decoration:underline;text-underline-offset:.18em;text-decoration-thickness:1px}

/* Nav dynamically pulls from wrapper variables */
nav{position:fixed;inset:0 0 auto 0;z-index:60;height:var(--navh);
  background:var(--surface-base); /* Failsafe */
  border-bottom:1px solid var(--border-default)}

/* Re-apply the glass effect properly within scope */
.theme-wrapper[data-theme="light"] nav,
.theme-wrapper[data-theme="system"] nav {
  background:rgba(255, 253, 246, 0.95);
  backdrop-filter:blur(8px);
}
.theme-wrapper[data-theme="dark"] nav {
  background:rgba(31, 29, 26, 0.95);
  backdrop-filter:blur(8px);
}
@media (prefers-color-scheme: dark) {
  .theme-wrapper[data-theme="system"] nav {
    background:rgba(31, 29, 26, 0.95);
  }
}

nav .row{display:flex;align-items:center;justify-content:space-between;gap:var(--space-4);
  max-width:72rem;margin:0 auto;padding:0 var(--space-4);height:var(--navh)}
nav .brand{font-family:var(--font-secondary);font-size:var(--size-xs);font-weight:600;
  text-transform:uppercase;letter-spacing:.16em;text-decoration:none;white-space:nowrap;color:var(--text-primary)}
nav ul{display:flex;gap:var(--space-4);list-style:none;margin:0;padding:0;overflow-x:auto;scrollbar-width:none}
nav ul::-webkit-scrollbar{display:none}
nav a.navlink{font-family:var(--font-secondary);font-size:var(--size-xs);font-weight:500;
  text-transform:uppercase;letter-spacing:.1em;color:var(--text-secondary);text-decoration:none;
  white-space:nowrap;padding:var(--space-2) 0;border-bottom:2px solid transparent;
  transition:color var(--motion-fast) var(--ease),border-color var(--motion-fast) var(--ease)}
nav a.navlink:hover{color:var(--text-primary);border-bottom-color:var(--surface-accent)}
@media(max-width:720px){nav ul{gap:var(--space-3)}}

/* Adjusted buttons to match solid blocks on About page */
.btn{display:inline-flex; align-items:center; justify-content:center;
  font-family:var(--font-secondary);font-size:var(--size-sm);font-weight:500;
  text-transform:none;letter-spacing:0.02em;text-decoration:none;cursor:pointer;
  padding:var(--space-3) var(--space-6);border-radius:0;
  border:none;background:var(--btn-primary);color:var(--btn-text);
  transition:background var(--motion-fast) var(--ease)}
.btn:hover{background:#B88610}
.btn.quiet{background:var(--btn-quiet-bg);color:var(--btn-quiet-text);border:none}
.btn.quiet:hover{background:rgba(44, 42, 37, 0.9)}

.hero{border-bottom:1px solid var(--border-default)}
.hero-inner{padding:var(--space-5) var(--space-4) var(--space-7)}
.stage{cursor:pointer;-webkit-tap-highlight-color:transparent}
.stage svg{display:block;width:100%;height:auto;max-width:900px;margin:0 auto}
.branch{fill:none;stroke:var(--text-primary);stroke-linecap:round;
  stroke-dasharray:var(--len);stroke-dashoffset:var(--len);
  animation:grow 1800ms var(--ease) forwards;
  transition:stroke var(--motion-base) var(--ease),stroke-width var(--motion-base) var(--ease)}
.canopy .branch{stroke-width:2.4}
.rhizo .branch{stroke-width:1.6}
.branch.lit{stroke:var(--c);stroke-width:3.6}
.rhizo .branch.lit{stroke-width:2.6}
@keyframes grow{to{stroke-dashoffset:0}}
.node{opacity:0;animation:appear var(--motion-base) var(--ease) forwards;
  transition:fill var(--motion-base) var(--ease)}
.node.lit{fill:var(--c)}
@keyframes appear{to{opacity:1}}
.conn{fill:none;stroke:var(--c,var(--text-primary));stroke-width:1.6;stroke-dasharray:4 7;
  opacity:0;transition:opacity var(--motion-base) var(--ease)}
.conn.on{opacity:1}
.horizon{stroke:var(--border-muted);stroke-width:1.2;stroke-dasharray:2 6}
.bird{fill:var(--text-primary);opacity:.92;
  transition:transform 1200ms var(--ease)}
.hero h1{font-size:clamp(36px,8vw,var(--size-4xl));font-weight:500;letter-spacing:.02em;text-align:center;
  margin-bottom:var(--space-3)}
.hero .tagline{font-family:var(--font-secondary);font-size:var(--size-xs);font-weight:500;
  text-transform:uppercase;letter-spacing:.2em;color:var(--text-secondary);text-align:center;
  margin-bottom:var(--space-6)}
.hero .cta{display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap;margin-top:var(--space-5)}
.hint{display:flex;justify-content:space-between;align-items:center;gap:var(--space-4);flex-wrap:wrap;
  max-width:900px;margin:var(--space-3) auto 0}
.steps{display:flex;gap:var(--space-1)}
.steps i{display:block;width:26px;height:4px;background:var(--border-default);border-radius:var(--radius-xs);
  transition:background var(--motion-fast) var(--ease);font-style:normal}
.steps i.on{background:var(--text-primary)}

.cols{display:grid;grid-template-columns:.8fr 1.3fr;gap:var(--space-7);align-items:start}
@media(max-width:860px){.cols{grid-template-columns:1fr;gap:var(--space-5)}}
.figure{border:1px solid var(--border-default);border-radius:var(--radius-sm);background:var(--surface-sunk);
  aspect-ratio:4/5;display:flex;align-items:center;justify-content:center;padding:var(--space-4)}

/* Pull Quote matching About section Callout */
.pull{background:transparent;border:none;margin:0;text-align:left}
.pull summary{cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:flex-start;
  padding:var(--space-4) 0;font-family:var(--font-secondary);font-size:var(--size-sm);font-weight:600;
  text-transform:uppercase;letter-spacing:.14em;color:var(--surface-accent);border-top:1px solid var(--border-default)}
.pull summary::-webkit-details-marker{display:none}
.pull .tri{color:currentColor;margin-top:0;
  flex:none;width:0;height:0;border-left:10px solid currentColor;border-top:7px solid transparent;border-bottom:7px solid transparent;
  transition:transform var(--motion-fast) var(--ease)}
.pull[open] .tri{transform:rotate(90deg)}
.pull-body{padding:0}

.libbar{display:flex;justify-content:space-between;align-items:center;gap:var(--space-4);flex-wrap:wrap;
  border-bottom:1px solid var(--border-default);padding-bottom:var(--space-3);margin-bottom:var(--space-5)}
.filters,.views{display:flex;gap:var(--space-2);flex-wrap:wrap}
.chip{font-family:var(--font-secondary);font-size:var(--size-xs);font-weight:500;text-transform:uppercase;
  letter-spacing:.1em;padding:var(--space-2) var(--space-3);border-radius:0;cursor:pointer;
  border:1px solid var(--border-default);background:var(--surface-base);color:var(--text-secondary);
  transition:border-color var(--motion-fast) var(--ease),background var(--motion-fast) var(--ease),color var(--motion-fast) var(--ease)}
.chip:hover{border-color:var(--text-primary);color:var(--text-primary)}
.chip[aria-pressed="true"]{background:var(--text-primary);color:var(--surface-base);border-color:var(--text-primary)}

.entries.list{display:flex;flex-direction:column;gap:var(--space-3)}
.entries.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:var(--space-4)}
.entry{border:1px solid var(--border-default);border-radius:var(--radius-sm);background:var(--surface-base);
  transition:border-color var(--motion-fast) var(--ease)}
.entry:hover,.entry[open]{border-color:var(--border-muted)}
.entry summary{cursor:pointer;list-style:none;display:flex;gap:var(--space-4);align-items:flex-start;
  padding:var(--space-4) var(--space-5)}
.entry summary::-webkit-details-marker{display:none}
.tri{flex:none;width:0;height:0;margin-top:.5em;color:var(--text-primary);
  border-left:10px solid currentColor;border-top:7px solid transparent;border-bottom:7px solid transparent;
  transition:transform var(--motion-fast) var(--ease)}
.entry[open] .tri{transform:rotate(90deg)}
.entry .head{flex:1;min-width:0}
.entry .ttl{display:block;font-size:var(--size-xl);font-weight:500;line-height:1.2;color:var(--text-primary)}
.entry .dek{display:block;font-family:var(--font-secondary);font-size:var(--size-sm);color:var(--text-secondary);
  max-height:0;opacity:0;overflow:hidden;
  transition:max-height var(--motion-base) var(--ease),opacity var(--motion-base) var(--ease),margin var(--motion-base) var(--ease)}
.entry:hover .dek,.entry[open] .dek,.entry:focus-within .dek{max-height:6rem;opacity:1;margin-top:var(--space-2)}
.tag{flex:none;font-family:var(--font-secondary);font-size:var(--size-xs);font-weight:500;
  text-transform:uppercase;letter-spacing:.1em;padding:var(--space-1) var(--space-2);
  border-radius:var(--radius-sm);border:1px solid currentColor;margin-top:var(--space-1)}
.tag.essay{color:var(--soul)}
.tag.note{color:var(--soil)}
.tag.diagram{color:var(--systems)}
.tag.reference{color:var(--society)}
.entry .body{padding:var(--space-4) var(--space-5) var(--space-5);max-width:var(--measure);
  border-top:1px solid var(--border-default)}
.entry .body p{font-family:var(--font-secondary);font-size:var(--size-md);line-height:1.625;color:var(--text-secondary)}
.entries.cards .entry .body{max-width:none}

.caps{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-3);margin-top:var(--space-5)}
@media(max-width:860px){.caps{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.caps{grid-template-columns:1fr}}
.cap{border:1px solid var(--border-default);border-radius:var(--radius-sm);padding:var(--space-4);
  border-top-width:4px}
.cap.c1{border-top-color:var(--soul)} .cap.c2{border-top-color:var(--systems)}
.cap.c3{border-top-color:var(--soil)} .cap.c4{border-top-color:var(--society)}
.cap h4{font-size:var(--size-xl);font-weight:500;margin-bottom:var(--space-3)}
.cap ul{margin:0;padding:0;list-style:none}
.cap li{font-family:var(--font-secondary);font-size:var(--size-sm);color:var(--text-secondary);
  padding:var(--space-2) 0;border-top:1px solid var(--border-default)}
.cap li:first-child{border-top:none}

/* Filters */
.lenses{display:flex;gap:var(--space-2);flex-wrap:wrap;margin-top:var(--space-3)}
.lens{font-family:var(--font-secondary);font-size:var(--size-sm);font-weight:500;
  background:var(--surface-sunk);color:var(--text-primary);
  border:1px solid var(--border-default);border-radius:var(--radius-xs);
  padding:var(--space-2) var(--space-3)}

/* Search glossary box */
.gsearch{width:100%;max-width:26rem;font-family:var(--font-secondary);font-size:var(--size-md);
  background:var(--surface-sunk);color:var(--text-primary);
  border:1px solid var(--border-default);border-radius:0;padding:var(--space-3) var(--space-4);
  transition:border-color var(--motion-fast) var(--ease), box-shadow var(--motion-fast) var(--ease)}
.gsearch::placeholder{color:var(--text-tertiary)}
.gsearch:focus{outline:none;border-color:var(--surface-accent);box-shadow:0 0 0 3px rgba(217,160,27,0.2)}

.gterm{border-top:1px solid var(--border-default);padding:var(--space-4) 0;max-width:48rem}
.gterm:first-of-type{border-top:2px solid var(--border-muted)}
.gterm dt{font-size:var(--size-xl);font-weight:500}
.gterm dd{margin:var(--space-2) 0 0;font-size:var(--size-lg);color:var(--text-secondary)}
.empty{padding:var(--space-6) 0;color:var(--text-tertiary);font-family:var(--font-secondary);font-size:var(--size-sm)}

.phases{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-4);margin-top:var(--space-4)}
@media(max-width:860px){.phases{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.phases{grid-template-columns:1fr}}
.phase{border-top:4px solid var(--border-default);padding-top:var(--space-3)}
.phase.done{border-top-color:var(--soil)}
.phase .n{font-family:var(--font-secondary);font-size:var(--size-xs);font-weight:500;
  text-transform:uppercase;letter-spacing:.1em}
.phase p{font-family:var(--font-secondary);font-size:var(--size-sm);color:var(--text-secondary);margin:var(--space-2) 0 0}

footer{border-top:1px solid var(--border-default);
  padding:var(--space-8) 0 var(--space-7);text-align:center}
.themebtn{position:fixed;bottom:20px;right:20px;z-index:70}

@media (prefers-reduced-motion: reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{animation-duration:1ms!important;animation-delay:0ms!important;transition-duration:1ms!important}
  .branch{stroke-dashoffset:0}
}
@media(max-width:620px){
  .entry summary{padding:var(--space-4)}
  .entry .body{padding-left:var(--space-4);padding-right:var(--space-4)}
}
`}</style>
  );
}