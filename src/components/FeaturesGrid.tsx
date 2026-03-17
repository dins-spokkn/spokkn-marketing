import { Mic, MessageCircle, AudioLines, Sparkles, Calendar, Video } from "lucide-react";
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

const FeaturesGrid = () => {
  return (
    <section className="py-20 overflow-hidden relative bg-white">
      <div className="absolute inset-0 pointer-events-none" />
      
      <div className="container">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-md p-6 md:p-8 flex flex-col justify-between aspect-square sm:aspect-auto relative overflow-hidden min-h-[400px]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 md:w-14 md:h-14 text-white/90 mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Generate & Save</h3>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">Create custom activities and save for later</p>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-md p-6 md:p-8 flex flex-col justify-between aspect-square sm:aspect-auto relative min-h-[400px]">
            <div className="relative z-10">
              <Calendar className="w-12 h-12 md:w-14 md:h-14 text-accent mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Join Sessions</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Explore and join live sessions</p>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-md p-6 md:p-8 flex flex-col justify-between aspect-square sm:aspect-auto relative min-h-[400px]">
            <div className="relative z-10">
              <Mic className="w-12 h-12 md:w-14 md:h-14 text-primary mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Host Session</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Create and lead your own sessions</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-md p-6 md:p-8 flex flex-col justify-between aspect-square sm:aspect-auto relative min-h-[400px]">
            <div className="relative z-10">
              <Video className="w-12 h-12 md:w-14 md:h-14 text-accent mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Recordings</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Access transcripts and recordings</p>
            </div>
          </div>

          {/* <div className="hidden sm:flex bg-primary/5 border border-primary/10 rounded-md items-end justify-center pb-6 pt-4 gap-1">
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

          <div className="hidden sm:flex bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-md items-center justify-center col-span-2 gap-4 px-6">
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
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
