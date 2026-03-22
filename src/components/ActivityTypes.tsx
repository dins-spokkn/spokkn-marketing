import { motion, AnimatePresence } from "framer-motion";
import episode1 from "@/assets/episode-1.jpg";
import episode2 from "@/assets/episode-2.jpg";
import episode3 from "@/assets/episode-3.jpg";
import episode4 from "@/assets/episode-4.jpg";
import episode5 from "@/assets/episode-5.jpg";
import { useState, useEffect, useCallback } from "react";

const activities = [
  {
    img: episode1,
    title: "Storytelling",
    description:
      "Share and listen to personal stories. Improve narrative skills and vocabulary in a relaxed setting.",
    tag: "01",
  },
  {
    img: episode2,
    title: "Role Play",
    description:
      "Act out real-life scenarios. Practice conversational English in practical, everyday situations.",
    tag: "02",
  },
  {
    img: episode3,
    title: "Improv",
    description:
      "Think on your feet with spontaneous scenarios. No scripts — just real-time English practice.",
    tag: "03",
  },
  {
    img: episode4,
    title: "Debate",
    description:
      "Pick a side and argue your case. Build critical thinking and persuasion skills in English.",
    tag: "04",
  },
  {
    img: episode5,
    title: "Topic of Discussion",
    description:
      "Dive deep into interesting topics. Express opinions and engage in meaningful conversations.",
    tag: "05",
  },
];

const INTERVAL_MS = 3500;

const ActivityTypes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % activities.length);
    }, INTERVAL_MS);
    return () => clearInterval(interval);
  }, [resetKey]);

  const handleSelect = useCallback((i: number) => {
    setActiveIndex(i);
    setResetKey((k) => k + 1);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
            Activity Types
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
            Explore the 5<br />Activity Types
          </h2>
        </motion.div>

        {/* Layout: stacked on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24">

          {/* ── Left: Activity list ── */}
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            {activities.map((activity, i) => {
              const isActive = i === activeIndex;
              return (
                <motion.button
                  key={activity.title}
                  onClick={() => handleSelect(i)}
                  className={`group relative flex items-center gap-4 rounded-2xl px-4 py-3 text-left transition-all duration-300
                    ${isActive
                      ? "bg-primary/8 border border-primary/20"
                      : "border border-transparent hover:bg-secondary/60"
                    }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Progress bar */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-primary rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
                      key={resetKey}
                    />
                  )}

                  {/* Image thumbnail */}
                  <div
                    className={`relative shrink-0 rounded-xl overflow-hidden transition-all duration-300
                      ${isActive ? "w-14 h-14" : "w-10 h-10 opacity-50 group-hover:opacity-75"}`}
                  >
                    <img
                      src={activity.img}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 ring-2 ring-primary/40 rounded-xl" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-muted-foreground/50 tabular-nums">
                        {activity.tag}
                      </span>
                      <p
                        className={`font-bold truncate transition-colors duration-200
                          ${isActive ? "text-foreground text-base" : "text-muted-foreground text-sm"}`}
                      >
                        {activity.title}
                      </p>
                    </div>
                    {isActive && (
                      <motion.p
                        className="text-xs text-muted-foreground mt-0.5 line-clamp-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {activity.description}
                      </motion.p>
                    )}
                  </div>

                  {/* Active dot */}
                  {isActive && (
                    <span className="shrink-0 w-2 h-2 rounded-full bg-primary animate-pulse" />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* ── Right: Featured card ── */}
          <div className="w-full md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3]"
              >
                {/* Full-bleed image */}
                <img
                  src={activities[activeIndex].img}
                  alt={activities[activeIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1 w-fit mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] font-semibold text-white uppercase tracking-wider">
                      Activity Type {activities[activeIndex].tag}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
                    {activities[activeIndex].title}
                  </h3>

                  <p className="text-sm text-white/75 leading-relaxed max-w-xs">
                    {activities[activeIndex].description}
                  </p>

                  {/* Dot indicators */}
                  <div className="flex items-center gap-1.5 mt-5">
                    {activities.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelect(i)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === activeIndex
                            ? "w-6 bg-white"
                            : "w-1.5 bg-white/30 hover:bg-white/50"
                        }`}
                        aria-label={`View ${activities[i].title}`}
                      />
                    ))}
                  </div>
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