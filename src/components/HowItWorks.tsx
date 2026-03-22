import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import episode1 from "@/assets/episode-1.jpg";
import episode2 from "@/assets/episode-2.jpg";
import episode3 from "@/assets/episode-3.jpg";
import episode4 from "@/assets/episode-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "1",
    title: "Book Session",
    description: "Schedule your speaking practice session at your preferred time",
    img: episode1,
  },
  {
    number: "2",
    title: "Prepare Session",
    description: "Get ready with materials and topics for your upcoming session",
    img: episode2,
  },
  {
    number: "3",
    title: "Join Session",
    description: "Connect with peers in real-time speaking practice",
    img: episode3,
  },
  {
    number: "4",
    title: "Review & Improve",
    description: "Go through recorded session and transcript to analyze and improve your performance",
    img: episode4,
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftRef.current,
        pinSpacing: false,
      });

      // Fade-in each card on scroll
      gsap.utils.toArray<HTMLElement>(".step-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-20">

          {/* LEFT — sticky */}
          <div ref={leftRef} className="hidden md:flex w-[35%] shrink-0 h-screen items-center justify-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-black mb-4">
                Practice with Peers
              </p>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
                Start Speaking in 4 Simple Steps
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Explore the features designed to keep you organized and on track.
              </p>
            </div>
          </div>

          {/* RIGHT — scrolling steps */}
          <div className="flex-1 pt-[20vh] pb-32 flex flex-col">

            {/* Mobile header */}
            <div className="md:hidden mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">How it works</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Start Speaking in 4 Simple Steps
              </h2>
            </div>

            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-5 mb-16 last:mb-0">

                {/* Timeline column */}
                <div className="flex flex-col items-center">
                  {/* Number bubble */}
                  <div className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center text-white text-sm font-semibold shrink-0 z-10">
                    {step.number}
                  </div>
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 my-2 bg-gradient-to-b from-foreground/30 to-transparent" />
                  )}
                </div>

                {/* Card */}
                <div className="step-card flex-1 mb-16 last:mb-0">
                  <div className="rounded-3xl overflow-hidden bg-[#EEEFF0]">
                    {/* Image */}
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
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
