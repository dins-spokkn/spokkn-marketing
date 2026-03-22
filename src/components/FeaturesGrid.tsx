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
  gradient: "bg-gradient-to-br from-primary to-accent text-primary-foreground",
  accent:   "bg-accent/10 border border-accent/20",
  primary:  "bg-primary/10 border border-primary/20",
  subtle:   "bg-gradient-to-br from-accent/10 to-primary/10 border border-border",
};

const iconClass: Record<FeatureStyle, string> = {
  gradient: "text-white/90",
  accent:   "text-accent",
  primary:  "text-primary",
  subtle:   "text-accent",
};

const titleClass: Record<FeatureStyle, string> = {
  gradient: "text-white",
  accent:   "text-foreground",
  primary:  "text-foreground",
  subtle:   "text-foreground",
};

const descClass: Record<FeatureStyle, string> = {
  gradient: "text-white/75",
  accent:   "text-muted-foreground",
  primary:  "text-muted-foreground",
  subtle:   "text-muted-foreground",
};

const FeaturesGrid = () => (
  <section className="py-16 md:py-24 bg-background overflow-hidden">
    <div className="container">

      {/* Heading */}
      <motion.div
        className="mb-10 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
          Features
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
          Everything You Need<br />to Speak Better
        </h2>
        <p className="text-muted-foreground text-sm mt-2 max-w-sm">
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
              {/* Subtle grid texture on hero card only */}
              {isHero && (
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              )}

              {/* Icon */}
              <div className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center
                ${isHero ? "bg-white/15" : "bg-background/60"}`}
              >
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