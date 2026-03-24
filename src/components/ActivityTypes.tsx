import { motion, AnimatePresence } from "framer-motion";
import episode1 from "@/assets/activity1.webp";
import episode2 from "@/assets/activity2.webp";
import episode3 from "@/assets/activity3.webp";
import episode4 from "@/assets/activity4.webp";
import episode5 from "@/assets/activity5.webp";
import { useState, useEffect, useCallback } from "react";

type ActivityType = 'Storytelling' | 'Role Play' | 'Improv' | 'Debate' | 'Topic Of Discussion';

const activityColors: Record<ActivityType, string> = {
  'Storytelling': '#6B3FA0',
  'Role Play': '#1E6F64',
  'Improv': '#4B5FD3',
  'Debate': '#B1122D',
  'Topic Of Discussion': '#3F6FA1',
};

const activityTints: Record<ActivityType, string> = {
  'Storytelling': '#fcf9ff',
  'Role Play': '#f7fffdfc',
  'Improv': '#f9f9ff',
  'Debate': '#fffafa',
  'Topic Of Discussion': '#f5f9ff',
};

const activities: Array<{
  img: string;
  title: ActivityType;
  tag: string;
  description: string;
  skills: string[];
  bestFor: string;
}> = [
  {
    img: episode1,
    title: "Storytelling",
    tag: "01",
    description:
      "Share personal stories and listen to others in a warm, supportive space. Storytelling sessions help you build narrative structure, expand vocabulary, and grow comfortable expressing yourself naturally in English — no pressure, just conversation.",
    skills: ["Narrative flow", "Vocabulary building", "Active listening", "Emotional expression"],
    bestFor: "Beginners & intermediate learners who want to speak more naturally",
  },
  {
    img: episode2,
    title: "Role Play",
    tag: "02",
    description:
      "Step into real-world scenarios — job interviews, travel, shopping, negotiations — and practice the English you actually need. Role play builds confidence by letting you rehearse situations before you face them in real life.",
    skills: ["Situational vocabulary", "Confidence under pressure", "Quick thinking", "Politeness & tone"],
    bestFor: "Learners preparing for work, travel, or everyday social situations",
  },
  {
    img: episode3,
    title: "Improv",
    tag: "03",
    description:
      "No scripts, no preparation — just you and the moment. Improv pushes you to think and speak in English simultaneously, breaking the habit of mentally translating. It's the fastest way to develop fluency and spontaneity.",
    skills: ["Spontaneous speech", "Fluency over accuracy", "Creativity", "Listening & reacting"],
    bestFor: "Intermediate+ learners who want to stop overthinking and just speak",
  },
  {
    img: episode4,
    title: "Debate",
    tag: "04",
    description:
      "Pick a side, build your argument, and defend it. Debate sessions sharpen your ability to structure ideas clearly, use persuasive language, and respond to counterpoints — all essential skills for professional and academic English.",
    skills: ["Argumentation", "Persuasive language", "Critical thinking", "Formal vocabulary"],
    bestFor: "Advanced learners aiming for professional or academic fluency",
  },
  {
    img: episode5,
    title: "Topic Of Discussion",
    tag: "05",
    description:
      "Dive into a topic that matters — culture, technology, society, lifestyle — and exchange perspectives with others. These open-ended conversations develop your ability to express nuanced opinions and engage in meaningful dialogue.",
    skills: ["Opinion expression", "Discussion etiquette", "Nuanced vocabulary", "Turn-taking"],
    bestFor: "All levels who want to explore ideas and broaden their worldview",
  },
];

const INTERVAL_MS = 3500;

const ActivityTypes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % activities.length);
    }, INTERVAL_MS);
    return () => clearInterval(interval);
  }, [resetKey]);

  const handleSelect = useCallback(
    (i: number) => {
      setDirection(i > activeIndex ? 1 : -1);
      setActiveIndex(i);
      setResetKey((k) => k + 1);
    },
    [activeIndex]
  );

  const activity = activities[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
            Activity Types
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Explore the 5 Activity Types
          </h2>
        </motion.div>

        {/* Activity switcher buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {activities.map((a, i) => (
           
           <div className="relative">
              <button
                key={a.title}
                onClick={() => handleSelect(i)}
                className="px-5 py-2 rounded-xs text-sm font-btn font-semibold transition-colors duration-200"
                style={{
                  backgroundColor: i === activeIndex ? activityColors[a.title] : 'white',
                  color: i === activeIndex ? 'white' : activityColors[a.title],
                  border: i === activeIndex ? 'none' : `1px solid ${activityColors[a.title]}40`,
                }}
              >
                {a.title}
              </button>
              {/* Active progress underline */}
              {i === activeIndex && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full overflow-hidden"
                  style={{ backgroundColor: `${activityColors[a.title]}20` }}
                >
                  <motion.span
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ backgroundColor: activityColors[a.title] }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
                    key={resetKey}
                  />
                </motion.span>
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="rounded-3xl overflow-hidden border bg-white grid md:grid-cols-2"
            style={{ 
              boxShadow: "var(--shadow-card-hover)",
              borderColor: `${activityColors[activity.title]}40`,
              backgroundColor: activityTints[activity.title],
            }}
          >
            {/* Left — image */}
            <div className="relative aspect-[4/3] md:aspect-auto bg-secondary/30 overflow-hidden">
              <img
                src={activity.img}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-muted-foreground tabular-nums tracking-widest uppercase px-2.5 py-1 rounded-full">
                {activity.tag} / 05
              </span>
            </div>

            {/* Right — content */}
            <div className="flex flex-col justify-between p-7 md:p-10">
              <div>
                <span 
                  className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: activityColors[activity.title] }}
                >
                  Activity Type
                </span>
                <h3 
                  className="text-2xl md:text-3xl font-extrabold mt-1 mb-3 leading-tight"
                  style={{ color: activityColors[activity.title] }}
                >
                  {activity.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {activity.description}
                </p>

                <div className="mb-6">
                  <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mb-2.5">
                    Skills you'll practice
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-semibold bg-secondary text-foreground px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-5">
                <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mb-1">
                  Best for
                </p>
                <p className="text-sm text-foreground font-medium">{activity.bestFor}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ActivityTypes;
