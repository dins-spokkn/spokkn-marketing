import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookSessionIllustration,
  PrepareSessionIllustration,
  JoinSessionIllustration,
  ReviewIllustration,
} from "./StepIllustrations";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "1",
    title: "Book Session",
    description: "Schedule your speaking practice session at your preferred time",
    Illustration: BookSessionIllustration,
  },
  {
    number: "2",
    title: "Prepare Session",
    description: "Get ready with materials and topics for your upcoming session",
    Illustration: PrepareSessionIllustration,
  },
  {
    number: "3",
    title: "Join Session",
    description: "Connect with peers in real-time speaking practice",
    Illustration: JoinSessionIllustration,
  },
  {
    number: "4",
    title: "Review & Improve",
    description:
      "Go through your recorded session and transcript to analyse and improve your performance",
    Illustration: ReviewIllustration,
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger:    sectionRef.current,
        start:      "top top",
        end:        "bottom bottom",
        pin:        leftRef.current,
        pinSpacing: false,
      });

      gsap.utils.toArray<HTMLElement>(".step-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 80%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-12">

          {/* ── LEFT — sticky ───────────────────────────────────────── */}
          <div
            ref={leftRef}
            className="hidden md:flex w-[35%] shrink-0 h-screen items-center justify-center"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#4A6FA5] mb-4">
                How it works
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-gray-900">
                Start Speaking in 4 Simple Steps
              </h2>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                Everything you need to practise, improve, and track your progress.
              </p>
            </div>
          </div>

          {/* ── RIGHT — scrolling cards ──────────────────────────────── */}
          <div className="flex-1 pt-[20vh] pb-32 flex flex-col">

            {/* Mobile header */}
            <div className="md:hidden mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#4A6FA5] mb-3">
                How it works
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                Start Speaking in 4 Simple Steps
              </h2>
            </div>

            {steps.map((step, i) => (
              <div
                key={step.number}
                /* Only add bottom margin between cards, not after the last */
                className={`flex gap-5 ${i < steps.length - 1 ? "mb-16" : ""}`}
              >

                {/* Timeline column */}
                <div className="flex flex-col items-center">
                  {/* Step number bubble */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 z-10"
                    style={{ background: "linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)" }}
                        

                  >

                    {step.number}
                  </div>
                  {/* Connector — only between steps */}
                  {/* {i < steps.length - 1 && (
                    <div className="w-px flex-1 my-2 bg-gradient-to-b from-[#6FA9D6]/50 to-transparent" />
                  )} */}
                </div>

                {/* ── Card ──────────────────────────────────────────── */}
                {/*
                  No mb-16 here — spacing is handled by the outer row div above.
                  The card itself is max-w-md so it doesn't stretch too wide.
                */}
                <div className="step-card flex-1 max-w-md">
                  <div
                    className="rounded-2xl overflow-hidden relative  bg-white border border-gray-200"
                  >
                    {/* Text block */}
                    <div className="px-6 pt-6 pb-4 relative z-10">
                      <h3 className="text-xl font-semibold text-black mb-1">
                        {step.title}
                      </h3>
                      <p className="text-black/65 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/*
                      Illustration panel.
                      FIX: replaced the broken `w-full mx-6 mb-6` pattern
                      (which overflowed the card's right edge) with a proper
                      px-6 pb-6 wrapper + w-full child.  Now the illustration
                      is inset 24px on ALL four sides, with rounded corners
                      visible on every edge.
                    */}
                    <div className="px-6 pb-6 relative z-10">
                      <div className="w-full h-48 sm:h-56 md:h-64 relative overflow-hidden rounded-2xl border border-gray-200">
                        <step.Illustration />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;