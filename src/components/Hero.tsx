import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

// how far below each phone starts (non-center phones start lower)
const START_OFFSET_Y = [220, 60, 0, 60, 220];
// initial mb stagger so 2&4 appear higher than 1&5 once settled
const INITIAL_MB = [0, 30, 0, 30, 0];
// phone heights
const HEIGHTS = [600, 600, 666, 600, 600];

const Hero = () => {
  const phonesRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    phonesRef.current.forEach((el, i) => {
      if (!el || i === 2) return;
      // set initial position below
      gsap.set(el, { y: START_OFFSET_Y[i] });
      // animate up to 0 (resting position) as section scrolls into center
      gsap.to(el, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
      });
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col items-center relative overflow-hidden" style={{ backgroundColor: "rgb(208, 233, 251)", borderRadius: 16, margin: 16 }}>
      <Navbar />
      {/* gradient orb top */}
      <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[1600px] h-[900px] rounded-full opacity-70" style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(120px)", zIndex: 0 }} />
      {/* gradient orb bottom */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-80" style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(100px)", zIndex: 0 }} />
      <div className="container flex flex-col items-center text-center relative z-10 px-6 sm:px-10">
        <motion.h1
          className="text-5xl sm:text-6xl font-semibold leading-[1.05] tracking-tight text-white max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Practice with Peers
          <br />
          <span className="text-white relative">
            One Activity at a Time
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-white/90 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Improve your spoken English through real conversations with peers worldwide. Join live sessions and practice through storytelling, debates, role-play, and more.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Button variant="white" size="lg">
            Download App
            <Download className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="w-full flex items-end justify-center mt-16 gap-10 px-4 overflow-hidden pb-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {[0, 1, 2, 3, 4].map((i) => {
          const isCenter = i === 2;
          return (
            <div
              key={i}
              ref={(el) => { phonesRef.current[i] = el; }}
              className="relative flex-shrink-0"
              style={{ height: HEIGHTS[i], marginBottom: INITIAL_MB[i] }}
            >
              <div
                className="absolute select-none overflow-hidden rounded-[10%] bg-[#151515]"
                style={{ top: "1.5%", right: "2%", bottom: "1.6%", left: "2%" }}
              >
                <img
                  src="/app.png"
                  draggable="false"
                  className="select-none pointer-events-none h-full w-full object-contain"
                  alt="App Screenshot"
                />
              </div>
              <img
                src="/iphone-fullscreen-portrait.png"
                className="relative select-none h-full"
                draggable="false"
                alt="iPhone Mockup"
              />
              <img
                src="/iphone-shadow.png"
                draggable="false"
                className="absolute bottom-0 h-[115%] w-[115%] left-1/2 -translate-x-[15%] translate-y-[12%] pointer-events-none select-none"
                style={{ zIndex: -1 }}
                alt=""
              />
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Hero;
