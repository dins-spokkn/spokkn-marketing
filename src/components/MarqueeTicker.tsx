import { motion } from "framer-motion";

const items = [
  "Practice with Peers",
  "✦",
  "Join Live Sessions",
  "✦",
  "5 Activity Types",
  "✦",
  "Real Conversations",
  "✦",
  "Storytelling · Role Play · Improv · Debate · Discussion",
  "✦",
  "Build Confidence",
  "✦",
];

const MarqueeTicker = () => {
  return (
    <div className="py-4 md:py-5 bg-primary text-primary-foreground overflow-hidden select-none">
      <div className="flex whitespace-nowrap">
        {[0, 1].map((loop) => (
          <motion.div
            key={loop}
            className="flex items-center gap-6 md:gap-10 shrink-0"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" },
            }}
          >
            {items.map((item, i) => (
              <span
                key={`${loop}-${i}`}
                className={`text-sm md:text-base font-semibold tracking-wide uppercase ${
                  item === "✦" ? "text-accent text-lg" : "text-primary-foreground/90"
                } px-2`}
              >
                {item}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
