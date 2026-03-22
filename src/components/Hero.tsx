import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

interface PhoneConfig {
  startOffsetY: number;
  initialMb: number;
  height: number;
  visibleFrom: string;
  ariaLabel: string;
  screenshot?: string; // optional per-phone image; falls back to defaultScreenshot
}

const PHONES: PhoneConfig[] = [
  { startOffsetY: 220, initialMb: 0,  height: 600, visibleFrom: "hidden xl:block", ariaLabel: "App screenshot 1" , screenshot: "/app-ss4.png"},
  { startOffsetY: 60,  initialMb: 30, height: 600, visibleFrom: "hidden md:block", ariaLabel: "App screenshot 2", screenshot: "/app-ss2.png" },
  { startOffsetY: 0,   initialMb: 0,  height: 666, visibleFrom: "block",           ariaLabel: "App screenshot - main", screenshot: "/app-ss1.png" },
  { startOffsetY: 60,  initialMb: 30, height: 600, visibleFrom: "hidden md:block", ariaLabel: "App screenshot 4", screenshot: "/app-ss3.png" },
  { startOffsetY: 220, initialMb: 0,  height: 600, visibleFrom: "hidden xl:block", ariaLabel: "App screenshot 5", screenshot: "/app-ss5.png" },
];

// Default screenshot used for any phone that doesn't specify its own
const DEFAULT_SCREENSHOT = "/app.png";

interface HeroProps {
  /**
   * Per-phone screenshot overrides. Index matches PHONES order (0–4).
   * Any index you omit falls back to DEFAULT_SCREENSHOT.
   *
   * Example:
   *   screenshots={["/screen-a.png", undefined, "/screen-main.png"]}
   */
  screenshots?: (string | undefined)[];
}

const Hero = ({ screenshots = [] }: HeroProps) => {
  const phonesRef = useRef<(HTMLDivElement | null)[]>([]);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Resolve screenshot for a given phone index
  const getScreenshot = (i: number): string =>
    PHONES[i].screenshot          // static config override (design-time)
    ?? screenshots[i]              // runtime prop override
    ?? DEFAULT_SCREENSHOT;         // fallback

  useEffect(() => {
    triggersRef.current = [];

    phonesRef.current.forEach((el, i) => {
      if (!el || i === 2) return;

      gsap.set(el, { y: PHONES[i].startOffsetY });

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "center center",
        scrub: 1,
        animation: gsap.to(el, { y: 0, ease: "none" }),
      });

      triggersRef.current.push(trigger);
    });

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center relative overflow-hidden rounded-2xl m-4 pb-20"
      style={{ backgroundColor: "rgb(208, 233, 251)" }}
    >
      <Navbar />

      {/* Gradient orbs */}
      <div
        className="absolute -top-64 left-1/2 -translate-x-1/2 w-[min(1600px,200vw)] h-[900px] rounded-full opacity-70 pointer-events-none"
        style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(120px)", zIndex: 0 }}
      />
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-80 pointer-events-none"
        style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(100px)", zIndex: 0 }}
      />

      {/* Hero text */}
      <div className="container flex flex-col items-center text-center relative z-10 px-6 sm:px-10 pt-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-white max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Practice with Peers
          <br />
          <span>One Activity at a Time</span>
        </motion.h1>

        <motion.p
          className="mt-5 text-base sm:text-lg md:text-xl text-white/90 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Improve your spoken English through real conversations with peers
          worldwide. Join live sessions and practice through storytelling,
          debates, role-play, and more.
        </motion.p>

        <motion.div
          className="mt-7"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Button variant="white" size="lg">
            Download App
            <Download className="w-4 h-4 ml-1.5" />
          </Button>
        </motion.div>
      </div>

      {/* Phone mockups */}
      <motion.div
        className="w-full flex items-end justify-center mt-12 md:mt-16 gap-4 md:gap-6 lg:gap-8 xl:gap-10 px-4 pb-0 relative z-10"
        style={{ overflow: "visible" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {PHONES.map((phone, i) => {
          const isCenter = i === 2;
          return (
            <div
              key={i}
              ref={(el) => { phonesRef.current[i] = el; }}
              className={`relative flex-shrink-0 ${phone.visibleFrom}`}
              style={{ height: phone.height, marginBottom: phone.initialMb }}
            >
              {/* App screen inset */}
              <div
                className="absolute select-none overflow-hidden rounded-[10%] bg-[#151515]"
                style={{ top: "1.5%", right: "2%", bottom: "1.6%", left: "2%" }}
              >
                <img
                  src={getScreenshot(i)}
                  draggable="false"
                  className="select-none pointer-events-none h-full w-full object-contain"
                  alt=""
                />
              </div>

              {/* iPhone frame */}
              <img
                src="/iphone-fullscreen-portrait.png"
                className="relative select-none h-full"
                draggable="false"
                alt={phone.ariaLabel}
              />

              {/* Drop shadow */}
              <img
                src="/iphone-shadow.png"
                draggable="false"
                className="absolute bottom-0 h-[115%] w-[115%] left-1/2 -translate-x-[15%] translate-y-[12%] pointer-events-none select-none"
                style={{ zIndex: -1 }}
                alt=""
              />

              {/* Center phone glow ring */}
              {isCenter && (
                <div
                  className="absolute inset-0 rounded-[10%] pointer-events-none"
                  style={{ boxShadow: "0 0 60px 10px rgba(80,167,227,0.35)", zIndex: 2 }}
                />
              )}
            </div>
          );
        })}
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, white, transparent)",
          zIndex: 20
        }}
      />
    </section>
  );
};

export default Hero;
