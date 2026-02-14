import { Users } from "lucide-react";
import { motion } from "framer-motion";
import topicImg from "@/assets/topic-wellness.jpg";

const topics = [
  { name: "Entrepreneurship", count: 126 },
  { name: "Wellness", count: 24 },
  { name: "Food & Beverage", count: 65 },
  { name: "Sustainability", count: 73 },
  { name: "Technology", count: 98 },
];

const BrowseByTopic = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-gradient leading-[1.05] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Or browse<br />by topic
        </motion.h2>

        <div className="relative">
          {/* Floating image */}
          <motion.div
            className="hidden md:block absolute right-0 top-8 w-56 h-56 rounded-2xl overflow-hidden shadow-card z-10 -rotate-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img src={topicImg} alt="Wellness topic" className="w-full h-full object-cover" />
          </motion.div>

          {/* Topic rows */}
          <div className="flex flex-col">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.name}
                className="flex items-center gap-4 md:gap-6 py-5 md:py-6 border-b border-border group cursor-pointer hover:bg-secondary/50 transition-colors px-2 md:px-4 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <span className="text-xs md:text-sm font-medium text-muted-foreground border border-border rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                  0{i + 1}/
                </span>
                <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground/20 group-hover:text-foreground transition-colors flex-1">
                  {topic.name}
                </span>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{topic.count} Podcasts</span>
                <Users className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByTopic;
