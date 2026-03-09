import { motion, AnimatePresence } from "framer-motion";
import episode1 from "@/assets/episode-1.jpg";
import episode2 from "@/assets/episode-2.jpg";
import episode3 from "@/assets/episode-3.jpg";
import episode4 from "@/assets/episode-4.jpg";
import episode5 from "@/assets/episode-5.jpg";
import { useState, useEffect } from "react";

const activities = [
  { 
    img: episode1, 
    title: "Storytelling",
    description: "Share and listen to personal stories. Improve narrative skills and vocabulary in a relaxed setting."
  },
  { 
    img: episode2, 
    title: "Role Play",
    description: "Act out real-life scenarios. Practice conversational English in practical, everyday situations."
  },
  { 
    img: episode3, 
    title: "Improv",
    description: "Think on your feet with spontaneous scenarios. No scripts — just real-time English practice."
  },
  { 
    img: episode4, 
    title: "Debate",
    description: "Pick a side and argue your case. Build critical thinking and persuasion skills in English."
  },
  { 
    img: episode5, 
    title: "Topic of Discussion",
    description: "Dive deep into interesting topics. Express opinions and engage in meaningful conversations."
  },
];

const ActivityTypes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-accent font-semibold mb-1">ACTIVITY TYPES</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight mb-10">
            Explore the 5<br />Activity Types
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Circles */}
          <div className="relative flex items-center justify-center flex-1 h-[200px] md:h-[250px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {activities.map((activity, i) => {
                const isActive = i === activeIndex;
                const offset = (i - activeIndex) * 140;
                return (
                  <motion.div
                    key={activity.title}
                    className="absolute rounded-full overflow-hidden cursor-pointer shadow-lg"
                    style={{
                      width: isActive ? '192px' : '96px',
                      height: isActive ? '192px' : '96px',
                    }}
                    onClick={() => setActiveIndex(i)}
                    animate={{
                      x: offset,
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.5,
                      zIndex: isActive ? 10 : 1,
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <div className={`absolute inset-0 rounded-full ${
                      isActive ? 'ring-4 ring-primary' : 'ring-2 ring-primary/20'
                    }`} />
                    <img
                      src={activity.img}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 max-w-md min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-center"
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4 w-fit">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Activity Type</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 min-h-[2.5rem]">
                  {activities[activeIndex].title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed min-h-[4.5rem]">
                  {activities[activeIndex].description}
                </p>
                <div className="flex items-center gap-2 mt-6">
                  {activities.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === activeIndex ? 'w-8 bg-primary' : 'w-1.5 bg-primary/20 hover:bg-primary/40'
                      }`}
                      aria-label={`View ${activities[i].title}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityTypes;
