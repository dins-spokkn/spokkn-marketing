import { ArrowUpRight, Mic, MessageCircle, AudioLines } from "lucide-react";
import { motion } from "framer-motion";
import heroPerson from "@/assets/hero-person.jpg";

const Hero = () => {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="container">
        {/* Top nav links */}
        <div className="flex items-start gap-8 mb-8">
          <div className="hidden md:flex flex-col gap-1 text-sm">
            <span className="text-accent text-lg">✦</span>
            <a href="#" className="font-semibold text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
          </div>

          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-4">
              {/* Left - Headline */}
              <div className="flex-1 max-w-2xl">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  Speak with{" "}
                  <span className="inline-flex items-center gap-2">
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                  </span>
                  <br />
                  confidence that{" "}
                  <br className="hidden sm:block" />
                  <span className="text-gradient">transforms</span> your world
                </motion.h1>

                <motion.div
                  className="mt-6 flex items-center gap-2 text-sm text-accent font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span>We've hosted over <strong className="text-foreground">10,000</strong> live sessions, helping nearly <strong className="text-foreground">50,000 learners</strong> build real spoken English fluency.</span>
                </motion.div>

                <motion.div
                  className="mt-8 flex items-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <button className="bg-gradient-brand text-primary-foreground font-semibold px-7 py-3.5 rounded-full hover:shadow-card-hover transition-all hover:-translate-y-0.5 flex items-center gap-2">
                    Book Your First Session
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                    HOW IT WORKS
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
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
          {/* Tile 1 - Tags */}
          <div className="bg-foreground text-primary-foreground rounded-2xl p-4 flex flex-col justify-between aspect-square sm:aspect-auto">
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-1 bg-card/20 backdrop-blur rounded-full px-3 py-1 text-xs font-medium w-fit">
                New Topic <span className="text-accent">+</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-card/20 backdrop-blur rounded-full px-3 py-1 text-xs font-medium w-fit">
                + Live Session
              </span>
              <span className="inline-flex bg-accent/20 text-accent rounded-full px-3 py-1 text-xs font-semibold w-fit">
                +50K Learners
              </span>
            </div>
            <MessageCircle className="w-10 h-10 text-accent mt-2" />
          </div>

          {/* Tile 2 - Person */}
          <div className="rounded-2xl overflow-hidden row-span-2 sm:row-span-1">
            <img
              src={heroPerson}
              alt="English learner practicing"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tile 3 - Waveform */}
          <div className="bg-sky-brand-light rounded-2xl flex items-center justify-center aspect-square sm:aspect-auto">
            <AudioLines className="w-16 h-16 text-accent" />
          </div>

          {/* Tile 4 - Statement Card */}
          <div className="bg-accent rounded-2xl p-4 flex flex-col justify-between text-accent-foreground aspect-square sm:aspect-auto">
            <p className="text-xs md:text-sm font-semibold leading-snug">
              One of the most engaging live English speaking platforms for learners worldwide.
            </p>
            <Mic className="w-8 h-8 mt-3 opacity-60" />
          </div>

          {/* Tile 5 - Abstract / hidden on mobile */}
          <div className="hidden sm:flex bg-blue-light rounded-2xl items-center justify-center">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 bg-primary rounded-full" style={{ height: `${20 + Math.random() * 30}px` }} />
              ))}
            </div>
          </div>

          {/* Tile 6 */}
          <div className="hidden sm:flex bg-lavender rounded-2xl items-center justify-center col-span-2">
            <div className="flex items-center gap-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-primary/30" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
