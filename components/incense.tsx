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
    let targetProgress = 0;
    let currentProgress = 0;
    let animationFrame: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      /*
       * 1. FIND THE INCENSE ON THE SCREEN
       * The track wrapper is 64px from the section top (top-16 class).
       * The incense starts 180px down that track (startY).
       * Therefore, its natural position is 244px below the top of the section.
       */
      const incenseStaticY = rect.top;

      /*
       * 2. DEFINE THE TRIGGER LINE
       * We place an invisible line on the screen. 
       * 0.3 = 30% from the top of the screen ("somewhat in the middle, going near the top").
       * Increase to 0.4 or 0.5 if you want it to trigger lower on the screen.
       */
      const triggerY = windowHeight * 0.12;

      if (incenseStaticY > triggerY) {
        /*
         * 3A. BEFORE TRIGGER
         * The incense is currently below the trigger line.
         * Keep progress at 0. As you scroll down, the section moves up,
         * so the incense moves UP the screen naturally.
         */
        targetProgress = 0;
      } else {
        /*
         * 3B. AFTER TRIGGER
         * The incense has hit the trigger line.
         * We calculate how far past the line it has scrolled, and map that 
         * to a 0-1 progress value based on the remaining height of the section.
         */
        const maxScroll = rect.height - windowHeight;
        const scrolledPast = triggerY - incenseStaticY;

        if (maxScroll <= 0) {
          targetProgress = 0;
        } else {
          const movementMultiplier = 2;
          targetProgress = Math.max(
            0,
            Math.min(1, scrolledPast / (maxScroll * movementMultiplier))
          );
        }
      }
    };

    /*
     * SMOOTH ANIMATION LOOP
     */
    const animate = () => {
      const smoothing = 0.035;

      currentProgress +=
        (targetProgress - currentProgress) * smoothing;

      if (incenseRef.current) {
        const startY = 140;
        const travelDistance = 970;

        const y = startY + travelDistance * currentProgress;

        incenseRef.current.style.transform =
          `translate3d(0, ${y}px, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Run once on mount to set initial position
    handleScroll();

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip pb-16 bg-cream min-h-[200vh]"
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
          }, it is much more reliable to change the initial placement using CSS and the final placement by adjusting the section's scroll height. Here is exactly how to do both:
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
          className="absolute left-6 z-10 w-max pointer-events-auto will-change-transform sm:left-8 md:left-10 lg:left-14 xl:left-16"
          style={{
            top: 0,
          }}
        >
          {/* Responsive Layout & Scale Wrapper */}
          <div className="scale-75 sm:scale-90 xl:scale-100 origin-top-left">
            <div className="scale-[0.7] origin-top-left">

              <div className="relative drop-shadow-[0_10px_20px_rgba(0,0,0,0.55)]">

                {/* Main incense holder */}
                <div className="relative rounded-t-[3rem] rounded-b-sm p-2.5 bg-gradient-to-br from-[#492015] via-[#2d1109] to-[#1b0703] shadow-[inset_0_0_14px_rgba(0,0,0,0.8)] border border-[#241008]">

                  <div className="relative rounded-t-[2.25rem] rounded-b-sm p-[1px] bg-[#0f0502] border-t border-[#160702] shadow-[inset_0_4px_15px_rgba(0,0,0,0.95)]">

                    <div className="relative h-56 w-32 overflow-hidden rounded-t-[2rem] rounded-b-sm bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-950/80 via-neutral-950/50 to-neutral-950/20">

                      <div className="relative flex h-full w-full flex-col items-center justify-end">

                        <div className="relative flex flex-col items-center">

                          {/* Incense stick */}
                          <div className="relative flex h-24 w-10 origin-bottom transform justify-center rotate-[12deg]">

                            <div
                              className="absolute bottom-0 w-0.5 bg-stone-700"
                              style={{
                                animation:
                                  "burnDown 300s linear infinite",
                              }}
                            >

                              {/* Ember */}
                              <div
                                className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full"
                                style={{
                                  animation:
                                    "emberBreath 12s ease-in-out infinite",
                                }}
                              />

                              {/* Smoke */}
                              <div
                                className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-2 mix-blend-screen"
                                style={{
                                  animation:
                                    "smokeFade 6s ease-in-out infinite",
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
                                    <linearGradient id="smokeGlow" x1="0" y1="1" x2="0" y2="0">
                                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                                      <stop offset="50%" stopColor="#ffffff" stopOpacity="0.7" />
                                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>

                          {/* Incense base */}
                          <div className="relative h-4 w-16 rounded-b-xl border-t border-neutral-700/30 bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                            <div className="absolute inset-x-2 top-0 h-1 rounded-b-sm bg-neutral-950" />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom trim */}
                <div className="relative z-20 -mt-1 -ml-4 w-[calc(100%+2rem)]">
                  <div className="h-2 w-full rounded-t-[2px] bg-gradient-to-b from-[#4a1b0e] to-[#2b0e07] border-t border-[#5a2110]" />
                  <div className="h-3 w-full rounded-b-md bg-gradient-to-b from-[#241007] to-[#100401] border-b border-[#070201] shadow-[0_8px_15px_rgba(0,0,0,0.7)]" />
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