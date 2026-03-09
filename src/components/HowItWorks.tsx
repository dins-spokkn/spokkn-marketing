import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Book Session",
      description: "Schedule your speaking practice session at your preferred time",
    },
    {
      number: "02",
      title: "Prepare Session",
      description: "Get ready with materials and topics for your upcoming session",
    },
    {
      number: "03",
      title: "Join Session",
      description: "Connect with peers in real-time speaking practice",
    },
    {
      number: "04",
      title: "Review & Improve",
      description: "Go through recorded session and transcript to analyze and improve your performance",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(79,195,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,195,247,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <div className="container relative">
        <motion.h1
          className="text-5xl sm:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Practice with Peers
        </motion.h1>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Start Speaking in 4 Simple Steps
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex gap-6 md:gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
