import { Mic, AudioLines, Sparkles, Calendar, Video, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sparkles,
    title: "Generate & Save",
    description: "Create custom activities tailored to your goals and save them for later.",
    style: "gradient", // hero card
  },
  {
    icon: Calendar,
    title: "Join Sessions",
    description: "Explore and join live peer sessions happening right now.",
    style: "accent",
  },
  {
    icon: Mic,
    title: "Host a Session",
    description: "Create and lead your own sessions for any topic or level.",
    style: "primary",
  },
  {
    icon: Video,
    title: "Recordings",
    description: "Review transcripts and recordings to track your improvement.",
    style: "subtle",
  },
] as const;

type FeatureStyle = (typeof features)[number]["style"];

const cardClass: Record<FeatureStyle, string> = {
  gradient: "bg-white/25 border border-white/30 backdrop-blur-sm",
  accent:   "bg-white/15 border border-white/20 backdrop-blur-sm",
  primary:  "bg-white/15 border border-white/20 backdrop-blur-sm",
  subtle:   "bg-white/15 border border-white/20 backdrop-blur-sm",
};

const iconClass: Record<FeatureStyle, string> = {
  gradient: "text-white",
  accent:   "text-white",
  primary:  "text-white",
  subtle:   "text-white",
};

const titleClass: Record<FeatureStyle, string> = {
  gradient: "text-white",
  accent:   "text-white",
  primary:  "text-white",
  subtle:   "text-white",
};

const descClass: Record<FeatureStyle, string> = {
  gradient: "text-white/75",
  accent:   "text-white/75",
  primary:  "text-white/75",
  subtle:   "text-white/75",
};

const FeaturesGrid = () => (
  <section className="py-8 md:py-12 overflow-hidden rounded-2xl m-4 relative" style={{ backgroundColor: "rgb(208, 233, 251)" }}>
    {/* Gradient orbs */}
    <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[min(1600px,200vw)] h-[900px] rounded-full opacity-70 pointer-events-none" style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(120px)", zIndex: 0 }} />
    <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-80 pointer-events-none" style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(100px)", zIndex: 0 }} />

    <div className="container relative z-10">

      {/* Heading */}
      <motion.div
        className="mb-10 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-white/80 font-semibold uppercase tracking-wider mb-2">
          Features
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
          Everything You Need<br />to Speak Better
        </h2>
        <p className="text-white/75 text-sm mt-2 max-w-sm">
          Tools built around real practice — not just lessons.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          const isHero = feature.style === "gradient";

          return (
            <motion.div
              key={feature.title}
              className={`relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden group
                ${cardClass[feature.style]}
                ${isHero ? "lg:row-span-1" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              {/* Icon */}
              <div className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center bg-white/20">
                <Icon className={`w-5 h-5 ${iconClass[feature.style]}`} />
              </div>

              {/* Text */}
              <div className="relative z-10 flex flex-col gap-1 flex-1">
                <h3 className={`text-base font-bold ${titleClass[feature.style]}`}>
                  {feature.title}
                </h3>
                <p className={`text-xs leading-relaxed ${descClass[feature.style]}`}>
                  {feature.description}
                </p>
              </div>

              {/* Arrow hint on hover */}
              <div className={`relative z-10 self-end opacity-0 group-hover:opacity-100
                transition-opacity duration-200 -mt-2`}
              >
                <ArrowUpRight className={`w-4 h-4 ${iconClass[feature.style]}`} />
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  </section>
);

export default FeaturesGrid;