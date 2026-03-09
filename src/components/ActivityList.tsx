import { Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import episode1 from "@/assets/episode-1.jpg";
import episode2 from "@/assets/episode-2.jpg";
import episode3 from "@/assets/episode-3.jpg";
import episode4 from "@/assets/episode-4.jpg";
import episode5 from "@/assets/episode-5.jpg";

const topics = [
  { name: "Storytelling", count: 126, img: episode1 },
  { name: "Role Play", count: 84, img: episode2 },
  { name: "Improv", count: 65, img: episode3 },
  { name: "Debate", count: 73, img: episode4 },
  { name: "Topic of Discussion", count: 98, img: episode5 },
];

const ActivityList = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 pointer-events-none" />

      <div className="container">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-accent leading-[1.05] mb-12 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Browse by Activity Type
        </motion.h2>

        <div className="relative">
          {/* Cursor follower image */}
          {hoveredIndex !== null && (
            <motion.div
              className="hidden md:block fixed w-48 h-48 rounded-sm overflow-hidden shadow-2xl z-50 pointer-events-none"
              style={{
                left: mousePos.x,
                top: mousePos.y,
              }}
              animate={{
                x: -64,
                y: -64,
              }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <img 
                src={topics[hoveredIndex].img} 
                alt={topics[hoveredIndex].name} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <span className="absolute bottom-2 left-2 text-white text-xs font-bold">
                {topics[hoveredIndex].name}
              </span>
            </motion.div>
          )}

          {/* Topic rows */}
          <div className="flex flex-col">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.name}
                className="flex items-center gap-4 md:gap-6 py-5 md:py-6 border-b border-border cursor-none hover:bg-primary/5 transition-all px-2 md:px-4 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="text-xs md:text-sm font-medium text-muted-foreground border border-border rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                  0{i + 1}/
                </span>
                <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground/20 hover:text-foreground transition-colors flex-1">
                  {topic.name}
                </span>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{topic.count} Activities</span>
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all">
                  <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 hover:translate-x-0 hover:opacity-100 transition-all" />
                  <Users className="w-4 h-4 absolute hover:opacity-0 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityList;
