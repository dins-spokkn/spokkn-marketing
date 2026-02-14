import { Mic, Globe, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Mic,
    title: "Interactive Live Sessions",
    description: "Practice speaking with real people and expert peers — not just automated drills.",
  },
  {
    icon: Globe,
    title: "Real-World Topics",
    description: "From debates to daily conversations, explore activities that build real communication skills.",
  },
  {
    icon: TrendingUp,
    title: "Confidence & Fluency",
    description: "Learn by speaking, not memorising. Track your improvement with every session.",
  },
];

const WhySpokkn = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            Practice that feels <span className="text-gradient">real.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Most English learning apps just show rules. Spokkn makes you speak. Interactive debates, topic discussions, role-plays and real speaking practice help you become fluent, not just studious.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="bg-background rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5">
                <b.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySpokkn;
