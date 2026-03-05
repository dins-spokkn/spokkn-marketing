import { ArrowUpRight, Mic, MessageCircle, AudioLines } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroPerson from "@/assets/hero-person.jpg";

const TypingText = () => {
  const phrases = ["Hello, how are you?", "I'd love to practice!", "Let's discuss this topic.", "Great point, I agree."];
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const phrase = phrases[index];
    if (typing) {
      if (displayed.length < phrase.length) {
        const t = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1500);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setIndex((i) => (i + 1) % phrases.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, index]);

  return (
    <span className="text-xs md:text-sm font-medium">
      {displayed}<span className="animate-pulse text-accent">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center overflow-hidden relative py-20">
      {/* Scattered decorative dots */}
      <div className="absolute top-40 right-10 w-2 h-2 rounded-full bg-accent/30 hidden md:block" />
      <div className="absolute top-60 right-32 w-3 h-3 rounded-full bg-primary/20 hidden md:block" />
      <div className="absolute top-52 left-20 w-1.5 h-1.5 rounded-full bg-accent/40 hidden md:block" />

      {/* Hand-drawn squiggle SVG */}
      <svg className="absolute top-32 right-16 w-24 h-12 text-accent/20 hidden lg:block" viewBox="0 0 100 40" fill="none">
        <path d="M5 20 Q 15 5, 25 20 Q 35 35, 45 20 Q 55 5, 65 20 Q 75 35, 85 20 Q 95 5, 100 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>

      <div className="container">
        {/* Top nav links */}
        <div className="flex items-start gap-8 mb-8">
          <div className="hidden md:flex flex-col gap-1 text-sm">
            <span className="text-accent text-lg">✦</span>
            <a href="#" className="font-semibold text-foreground hover:text-primary transition-colors">Activities</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sessions</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Become a Host</a>
          </div>

          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-4">
              {/* Left - Headline */}
              <div className="flex-1 max-w-2xl">
                {/* <motion.div
                  className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-5 border border-accent/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  CREATE ACTIVITIES · JOIN SESSIONS
                </motion.div> */}

                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  Speak English like you mean it
                  <span className="inline-flex items-center gap-2">
                    <ArrowUpRight className="w-16 h-16  text-accent" />
                  </span>
                  {/* <br /> */}
                  <span className="text-gradient relative">
                    Practice
                    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                      <path d="M2 8 Q 40 2, 80 8 Q 120 14, 160 6 Q 180 3, 198 7" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    </svg>
                  </span>{" "}with real people.
                </motion.h1>

                <motion.div
                  className="mt-6 flex items-center gap-2 text-base md:text-lg text-muted-foreground font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span>No more awkward silences. Join live sessions with learners worldwide and speak confidently through <strong className="text-foreground">real conversations</strong>.</span>
                </motion.div>

                <motion.div
                  className="mt-8 flex items-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <button className="bg-gradient-brand text-primary-foreground font-semibold px-7 py-3.5 rounded-full hover:shadow-card-hover transition-all hover:-translate-y-0.5 flex items-center gap-2 group">
                    Create Activity
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </button>
                  <button className="border border-border text-foreground font-semibold px-7 py-3.5 rounded-full hover:bg-secondary transition-all flex items-center gap-2">
                    Browse Sessions
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Grid Collage */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {/* Tile 1 - Live chat simulation */}
          <div className="bg-foreground text-primary-foreground rounded-2xl p-4 flex flex-col justify-between aspect-square sm:aspect-auto relative overflow-hidden">
            {/* Pulsing live dot */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">Live</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-1 bg-card/20 backdrop-blur rounded-full px-3 py-1 text-xs font-medium w-fit">
                Storytelling <span className="text-accent">✦</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-card/20 backdrop-blur rounded-full px-3 py-1 text-xs font-medium w-fit">
                Role Play <span className="text-accent">✦</span>
              </span>
              <span className="inline-flex bg-accent/20 text-accent rounded-full px-3 py-1 text-xs font-semibold w-fit">
                5 Activity Types
              </span>
            </div>
            <MessageCircle className="w-10 h-10 text-accent mt-2" />
          </div>

          {/* Tile 2 - Person */}
          <div className="rounded-2xl overflow-hidden row-span-2 sm:row-span-1 relative group">
            <img
              src={heroPerson}
              alt="English learner practicing"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay name tag */}
            <div className="absolute bottom-3 left-3 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[10px] font-bold text-accent-foreground">S</div>
              <div>
                <p className="text-[10px] font-bold text-foreground leading-tight">Sarah K.</p>
                <p className="text-[9px] text-muted-foreground">Speaking now...</p>
              </div>
            </div>
          </div>

          {/* Tile 3 - Typing animation */}
          <div className="bg-sky-brand-light rounded-2xl flex flex-col items-center justify-center aspect-square sm:aspect-auto p-4 gap-3">
            <AudioLines className="w-10 h-10 text-accent" />
            <div className="bg-card/80 backdrop-blur rounded-lg px-3 py-2 w-full">
              <TypingText />
            </div>
          </div>

          {/* Tile 4 - Statement Card with quote mark */}
          <div className="bg-accent rounded-2xl p-4 flex flex-col justify-between text-accent-foreground aspect-square sm:aspect-auto relative">
            <span className="text-4xl md:text-5xl font-serif leading-none opacity-20 absolute top-2 left-3">"</span>
            <p className="text-xs md:text-sm font-semibold leading-snug mt-6">
              Create activities. Hosts run sessions. You join, practice, and grow your English.
            </p>
            <div className="flex items-center justify-between mt-3">
              <Mic className="w-8 h-8 opacity-60" />
              <div className="flex -space-x-1.5">
                {["🇧🇷", "🇯🇵", "🇫🇷", "🇰🇷"].map((flag, i) => (
                  <span key={i} className="text-sm">{flag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Tile 5 - Animated equalizer bars */}
          <div className="hidden sm:flex bg-blue-light rounded-2xl items-end justify-center pb-6 pt-4 gap-1">
            {[40, 60, 30, 70, 45, 55, 35].map((h, i) => (
              <motion.div
                key={i}
                className="w-1.5 bg-primary/60 rounded-full"
                animate={{ height: [`${h}%`, `${20 + Math.random() * 60}%`, `${h}%`] }}
                transition={{ duration: 1.2 + i * 0.15, repeat: Infinity, ease: "easeInOut" }}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          {/* Tile 6 - Stacked avatars with counter */}
          <div className="hidden sm:flex bg-lavender rounded-2xl items-center justify-center col-span-2 gap-4 px-6">
            <div className="flex -space-x-3">
              {["🧑‍💼", "👩‍🎓", "🧑‍🏫", "👨‍💻", "👩‍🔬", "🧑‍🎨"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-card border-2 border-lavender flex items-center justify-center text-base md:text-lg"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-lg md:text-xl font-extrabold text-foreground">50K+</p>
              <p className="text-[10px] md:text-xs text-muted-foreground font-medium">learners speaking daily</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
