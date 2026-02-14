import { Search, Mic2, MessageSquare, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Search, step: "01", title: "Join a Topic", desc: "Browse activities based on your level and interests." },
  { icon: Mic2, step: "02", title: "Join a Live Session", desc: "Speak, listen, and engage in real conversation." },
  { icon: MessageSquare, step: "03", title: "Get Feedback", desc: "Our community and trainers help you grow." },
  { icon: BarChart3, step: "04", title: "Improve & Repeat", desc: "Track progress and unlock new practice modes." },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            How it <span className="text-gradient">works</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-5 shadow-soft">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-accent mb-2 block">{s.step}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 border-t-2 border-dashed border-accent/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
