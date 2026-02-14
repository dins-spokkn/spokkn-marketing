import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import show1 from "@/assets/show-1.jpg";
import show2 from "@/assets/show-2.jpg";
import show3 from "@/assets/show-3.jpg";
import { useRef } from "react";

const shows = [
  {
    image: show1,
    title: "Open Conversations",
    description: "Join free-flowing discussions on everyday topics. Build confidence speaking naturally with peers.",
    author: "Coach Sarah",
    bg: "bg-card",
  },
  {
    image: show2,
    title: "Debate Practice",
    description: "Argue perspectives, sharpen critical thinking, and learn to express opinions fluently.",
    author: "Coach Amir",
    bg: "bg-lavender",
  },
  {
    image: show3,
    title: "Role-Play Sessions",
    description: "Simulate real-life scenarios — job interviews, travel situations, and business meetings.",
    author: "Coach Maya",
    bg: "bg-card",
  },
];

const ShowsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
              POPULAR <span className="text-xs">↓</span>
            </button>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Sessions</h2>
          </div>
          <button className="flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
            FEATURED
          </button>
        </div>

        {/* Section title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-sm text-muted-foreground font-medium mb-1">02</p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
              Get started with<br />our featured sessions
            </h3>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Our goal is to build sessions with <span className="text-accent font-medium">three</span> key characteristics — they have purpose, they are consistent, and they help cultivate real spoken English fluency.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible"
        >
          {shows.map((show, i) => (
            <motion.div
              key={show.title}
              className={`${show.bg} rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 min-w-[280px] snap-start flex flex-col`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-lavender flex items-center justify-center text-xs font-bold text-primary">
                    {show.author[0]}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Coach</p>
                    <p className="text-xs font-semibold text-foreground">{show.author}</p>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{show.title}</h4>
                <p className="text-sm text-muted-foreground flex-1">{show.description}</p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <span className="text-sm font-medium text-foreground">Join Session</span>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowsCarousel;
