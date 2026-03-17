import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden relative bg-white">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <motion.h1
              className="text-5xl sm:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Practice with Peers{" "}
              <span className="text-primary relative">
                One Activity at a Time
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-muted-foreground"
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
              <Button size="lg">
                Download App
                  <Download className="w-4 h-4" />
              </Button>
     
            </motion.div>
          </div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="relative w-[280px] h-[570px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-[2.5rem] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white text-sm font-medium">
                  App Screenshot
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
