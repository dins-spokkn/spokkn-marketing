import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Activity",
      description: "Browse storytelling, debates, role-play, improv, or discussions",
    },
    {
      number: "02",
      title: "Join Live Session",
      description: "Connect with peers in real-time speaking practice",
    },
    {
      number: "03",
      title: "Build Confidence",
      description: "Improve communication skills one conversation at a time",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(79,195,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,195,247,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Start Speaking in 3 Simple Steps
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

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-foreground">No credit card required</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
