import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import episode1 from "@/assets/episode-1.jpg";
import episode2 from "@/assets/episode-2.jpg";
import episode3 from "@/assets/episode-3.jpg";
import episode4 from "@/assets/episode-4.jpg";
import episode5 from "@/assets/episode-5.jpg";
import { useRef } from "react";

const tags = ["Storytelling", "Role Play", "Improv", "Debate", "Topic of Discussion"];
const episodes = [
  { img: episode1, title: "Storytelling" },
  { img: episode2, title: "Role Play" },
  { img: episode3, title: "Improv" },
  { img: episode4, title: "Debate" },
  { img: episode5, title: "Topic of Discussion" },
];

const LatestEpisodes = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground font-medium mb-1">03</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight mb-10">
            Explore the 5<br />activity types
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tags */}
          <div className="flex flex-row md:flex-col gap-2 flex-wrap md:w-48 shrink-0">
            {tags.map((tag) => (
              <button
                key={tag}
                className="flex items-center gap-2 border border-border rounded-full px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors group"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                {tag}
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
              </button>
            ))}
          </div>

          {/* Episodes */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-accent rounded-full" />
                <span className="text-sm font-semibold text-foreground">Activity Types</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">See All (120+)</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => scroll("left")}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            >
              {episodes.map((ep, i) => (
                <motion.div
                  key={ep.title}
                  className="flex flex-col items-center gap-3 min-w-[120px] shrink-0 cursor-pointer group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-primary transition-all shadow-soft">
                    <img
                      src={ep.img}
                      alt={ep.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                    {ep.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestEpisodes;
