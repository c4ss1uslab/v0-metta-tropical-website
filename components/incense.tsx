"use client";

import React, { useRef, useEffect } from "react";

export default function ParallaxIncenseSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const incenseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  let animationFrame = 0;

  const updatePosition = () => {
    animationFrame = 0;

    const section = sectionRef.current;
    const incense = incenseRef.current;
    if (!section || !incense) return;

    const sectionRect = section.getBoundingClientRect();
    const trackTop = 4; // Matches top-1 on the track
    const startY = 380;
    const screenY = window.innerHeight * 0.16;

    // Keep the incense at screenY once its natural position reaches it.
    const followY = screenY - (sectionRect.top + trackTop);

    // Stop movement at the bottom of the track (bottom-24 = 96px).
    const maxY = Math.max(
      0,
      sectionRect.height - trackTop - 96 - incense.offsetHeight
    );

    const y = Math.min(maxY, Math.max(startY, followY));

    incense.style.transform = `translate3d(0, ${y}px, 0)`;
  };

  const scheduleUpdate = () => {
    if (!animationFrame) {
      animationFrame = requestAnimationFrame(updatePosition);
    }
  };

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  scheduleUpdate();

  return () => {
    window.removeEventListener("scroll", scheduleUpdate);
    window.removeEventListener("resize", scheduleUpdate);
    cancelAnimationFrame(animationFrame);
  };
}, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip min-h-[200vh]"
    >
      <style>{`
        @keyframes burnDown {
          0% { height: 96px; }
          100% { height: 14.4px; }
        }

        @keyframes smokeFade {
          0%, 100% { opacity: 0.35; }
          30% { opacity: 0.35; }
          50% { opacity: 0; }
          75% { opacity: 0; }
        }

        @keyframes emberBreath {
          0%, 100% {
            transform: scale(0.9) translate(-1px, -2px);
            background-color: #9a3412;
            box-shadow: 0 0 3px #7c2d12;
          }
          50% {
            transform: scale(1.1) translate(-1px, -2px);
            background-color: #ea580c;
            box-shadow: 0 0 5px #ea580c, 0 0 2px #f97316;
          }
        }
      `}</style>

{/* Absolute Track */}

<div className="absolute top-1 bottom-24 left-0 w-full pointer-events-none">

  {/* Incense movement wrapper */}

  <div
    ref={incenseRef}
    className="absolute left-6 z-10 w-max pointer-events-auto
      will-change-transform sm:left-8 md:left-10 lg:left-14 xl:left-16"
    style={{
      top: 0,
    }}
  >

    {/* Responsive Layout & Scale Wrapper */}

    <div className="scale-75 sm:scale-90 xl:scale-100 origin-top-left">

      <div className="scale-[0.7] origin-top-left">

        {/* Incense */}

        <div className="relative">

          <div className="relative flex flex-col items-center">

            {/* Incense stick */}

            <div
              className="relative flex h-24 w-10
                origin-bottom transform justify-center rotate-[12deg]"
            >

              <div
                className="absolute bottom-0 w-0.5 bg-stone-700"
                style={{
                  animation: "burnDown 300s linear infinite",
                }}
              >

                {/* Ember */}

                <div
                  className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full"
                  style={{
                    animation: "emberBreath 12s ease-in-out infinite",
                  }}
                />

                {/* Smoke */}

                <div
                  className="pointer-events-none absolute
                    bottom-full left-1/2 -translate-x-1/2 -translate-y-2
                    mix-blend-screen"
                  style={{
                    animation: "smokeFade 6s ease-in-out infinite",
                  }}
                >
                  <svg
                    width="30"
                    height="80"
                    viewBox="0 0 30 80"
                    fill="none"
                    className="overflow-visible"
                  >
                    <path
                      d="M15 80 C 25 60, 5 40, 15 20 C 22 8, 10 2, 15 0"
                      stroke="url(#smokeGlow)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeDasharray="140"
                    />

                    <defs>
                      <linearGradient
                        id="smokeGlow"
                        x1="0"
                        y1="1"
                        x2="0"
                        y2="0"
                      >
                        <stop
                          offset="0%"
                          stopColor="#ffffff"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="50%"
                          stopColor="#ffffff"
                          stopOpacity="0.7"
                        />
                        <stop
                          offset="100%"
                          stopColor="#ffffff"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

              </div>
            </div>

            {/* Incense base */}

            <div
              className="relative h-4 w-16
                rounded-b-xl border-t border-neutral-700/30
                bg-gradient-to-b from-neutral-800 to-neutral-900
                shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-x-2 top-0 h-1 rounded-b-sm bg-neutral-950" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
    </section>
  );
}