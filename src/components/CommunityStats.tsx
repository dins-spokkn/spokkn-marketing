import { Users, Calendar, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "50K+", label: "Learners worldwide" },
  { icon: Calendar, value: "10+", label: "Weekly live topics" },
  { icon: MessageCircle, value: "100%", label: "Real speaking practice" },
];

const CommunityStats = () => {
  return (
    <section className="py-14 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-4 justify-center sm:justify-start"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-sky-light flex items-center justify-center shrink-0">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
