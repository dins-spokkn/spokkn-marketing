import { motion } from "framer-motion";

const items = [
  "Speak more. Worry less.",
  "✦",
  "50K+ learners worldwide",
  "✦",
  "Real conversations",
  "✦",
  "Live sessions daily",
  "✦",
  "Build confidence",
  "✦",
  "Practice with peers",
  "✦",
];

const MarqueeTicker = () => {
  return (
    <div className="py-4 md:py-5 bg-foreground text-primary-foreground overflow-hidden select-none">
      <div className="flex whitespace-nowrap">
        {[0, 1].map((loop) => (
          <motion.div
            key={loop}
            className="flex items-center gap-6 md:gap-10 shrink-0"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
            }}
          >
            {items.map((item, i) => (
              <span
                key={`${loop}-${i}`}
                className={`text-sm md:text-base font-semibold tracking-wide uppercase ${
                  item === "✦" ? "text-accent text-lg" : "text-primary-foreground/80"
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
