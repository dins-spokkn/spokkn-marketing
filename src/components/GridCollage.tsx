import { Mic, MessageCircle, AudioLines } from "lucide-react";
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

const GridCollage = () => {
  return (
    <section className="py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="container">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl p-4 flex flex-col justify-between aspect-square sm:aspect-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="relative z-10">
              <div className="absolute top-0 right-0 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Live</span>
              </div>
              <div className="flex flex-col gap-2 mt-8">
                <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium w-fit">
                  Storytelling
                </span>
                <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium w-fit">
                  Role Play
                </span>
                <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium w-fit">
                  Debates
                </span>
              </div>
            </div>
            <MessageCircle className="w-10 h-10 text-white/80 mt-2 relative z-10" />
          </div>

          <div className="rounded-2xl overflow-hidden row-span-2 sm:row-span-1 relative group">
            <img
              src={heroPerson}
              alt="English learner practicing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white">S</div>
              <div>
                <p className="text-[10px] font-bold text-foreground leading-tight">Sarah K.</p>
                <p className="text-[9px] text-muted-foreground">Speaking now...</p>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-2xl flex flex-col items-center justify-center aspect-square sm:aspect-auto p-4 gap-3">
            <AudioLines className="w-10 h-10 text-accent" />
            <div className="bg-white/80 backdrop-blur rounded-lg px-3 py-2 w-full border border-accent/10">
              <TypingText />
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-4 flex flex-col justify-between aspect-square sm:aspect-auto relative">
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Mic className="w-4 h-4 text-primary" />
            </div>
            <p className="text-xs md:text-sm font-semibold leading-snug mt-6 text-foreground">
              Activity-based learning. Real conversations. Build confidence one session at a time.
            </p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                ))}
              </div>
              <span className="text-xs font-bold text-primary">5 Activities</span>
            </div>
          </div>

          <div className="hidden sm:flex bg-primary/5 border border-primary/10 rounded-2xl items-end justify-center pb-6 pt-4 gap-1">
            {[40, 60, 30, 70, 45, 55, 35].map((h, i) => (
              <motion.div
                key={i}
                className="w-1.5 bg-primary/60 rounded-full"
                animate={{ height: [`${h}%`, `${20 + Math.random() * 60}%`, `${h}%`] }}
                transition={{ duration: 1.5 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <div className="hidden sm:flex bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl items-center justify-center col-span-2 gap-4 px-6">
            <div className="flex -space-x-3">
              {["🧑💼", "👩🎓", "🧑🏫", "👨💻", "👩🔬", "🧑🎨"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border-2 border-accent/20 flex items-center justify-center text-base md:text-lg shadow-sm"
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

export default GridCollage;
