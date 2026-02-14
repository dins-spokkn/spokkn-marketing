import { Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import topicImg from "@/assets/topic-wellness.jpg";

const topics = [
  { name: "Storytelling", count: 126, emoji: "📖" },
  { name: "Role Play", count: 84, emoji: "🎭" },
  { name: "Improv", count: 65, emoji: "⚡" },
  { name: "Debate", count: 73, emoji: "⚔️" },
  { name: "Topic of Discussion", count: 98, emoji: "💬" },
];

const BrowseByTopic = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative cross-hatch pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)`,
      }} />

      <div className="container">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-gradient leading-[1.05] mb-12 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Browse by<br />activity type
          {/* Decorative star */}
          <span className="absolute -top-4 -right-2 md:right-20 text-accent text-2xl md:text-3xl animate-pulse">✦</span>
        </motion.h2>

        <div className="relative">
          {/* Floating image */}
          <motion.div
            className="hidden md:block absolute right-0 top-8 w-56 h-56 rounded-2xl overflow-hidden shadow-card z-10 -rotate-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
          >
            <img src={topicImg} alt="Speaking practice" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <span className="absolute bottom-3 left-3 text-primary-foreground text-xs font-bold">📸 Live session</span>
          </motion.div>

          {/* Topic rows */}
          <div className="flex flex-col">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.name}
                className="flex items-center gap-4 md:gap-6 py-5 md:py-6 border-b border-border group cursor-pointer hover:bg-secondary/50 transition-all px-2 md:px-4 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <span className="text-lg md:text-xl shrink-0">{topic.emoji}</span>
                <span className="text-xs md:text-sm font-medium text-muted-foreground border border-border rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                  0{i + 1}/
                </span>
                <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground/20 group-hover:text-foreground transition-colors flex-1">
                  {topic.name}
                </span>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{topic.count} Activities</span>
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                  <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  <Users className="w-4 h-4 absolute group-hover:opacity-0 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByTopic;
