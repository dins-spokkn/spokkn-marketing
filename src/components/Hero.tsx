import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroSpeaking from "@/assets/hero-speaking.jpg";

const Hero = () => {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Left - Content */}
          <div className="flex-1 max-w-xl">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Speak with{" "}
              <span className="text-gradient">confidence.</span>
            </motion.h1>

            <motion.p
              className="mt-2 text-lg sm:text-xl md:text-2xl font-bold text-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              Real practice. Real progress.<br className="hidden sm:block" /> Real conversations.
            </motion.p>

            <motion.p
              className="mt-5 text-base text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Live activities, debates, role-plays and guided speaking sessions to boost your spoken English. Progress together with peers and coaches.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button className="bg-gradient-brand text-primary-foreground font-semibold px-7 py-3.5 rounded-full hover:shadow-card-hover transition-all hover:-translate-y-0.5 flex items-center gap-2 text-sm md:text-base">
                Book Your First Session
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
              >
                Learn how Spokkn works
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right - Visual */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroSpeaking}
                alt="People in a speaking session"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -bottom-4 -left-4 md:-left-6 bg-card rounded-xl shadow-card p-3 md:p-4 border border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground text-xs font-bold">🎤</div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Live Now</p>
                  <p className="text-[10px] text-muted-foreground">12 participants</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 md:-right-5 bg-card rounded-xl shadow-card p-3 border border-border">
              <p className="text-xs font-bold text-foreground">50K+</p>
              <p className="text-[10px] text-muted-foreground">Learners</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
