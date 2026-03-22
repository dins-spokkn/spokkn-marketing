import { ArrowUpRight, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Session {
  id: string;
  activityTitle: string;
  activityType: string;
  activityLevel: string;
  activityTheme: string;
  mentorName: string;
  startDateTime: string;
  endDateTime: string;
  durationMinutes: number;
  price: number;
  maxParticipants: number;
  slotsLeft: number;
  bookedUsers: string[];
}

const activityTypeColors: Record<string, string> = {
  topicofdiscussion: "bg-accent text-accent-foreground",
  debate: "bg-primary text-primary-foreground",
  storytelling: "bg-foreground text-background",
};

const SessionsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/sessions/explore-session-list?timezone=Asia/Calcutta')
      .then(res => res.json())
      .then(data => {
        setSessions(data.sessions?.slice(0, 5) || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

  const formatTime = (dateStr: string) =>
    new Date(dateStr).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  const formatActivityType = (type: string) =>
    type.replace(/([A-Z])/g, ' $1').trim();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              POPULAR <span className="text-xs ml-1">↓</span>
            </Button>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Sessions</h2>
          </div>
          <Button variant="outline" size="sm">FEATURED</Button>
        </div>

        {/* Section heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">Live Sessions</p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
              Join Upcoming Sessions<br />with Peers
            </h3>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Browse live sessions, join conversations, and practice English through structured activities.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Button
            onClick={() => scroll('left')}
            variant="outline"
            size="icon"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            onClick={() => scroll('right')}
            variant="outline"
            size="icon"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {loading ? (
              <p className="text-muted-foreground text-sm">Loading sessions...</p>
            ) : sessions.length === 0 ? (
              <p className="text-muted-foreground text-sm">No sessions available</p>
            ) : (
              <>
                {sessions.map((session, i) => {
                  const tagColor = activityTypeColors[session.activityType] ?? activityTypeColors.topicofdiscussion;

                  return (
                    <motion.div
                      key={session.id}
                      className="min-w-[320px] md:min-w-[360px] snap-start rounded-3xl bg-card border border-border shadow-md hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col group overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {/* Card body */}
                      <div className="p-6 flex flex-col gap-4 flex-1">
                        {/* Level + Date */}
                        <div className="flex items-start justify-between">
                          <span className={`${tagColor} text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                            {session.activityLevel}
                          </span>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">{formatDate(session.startDateTime)}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{formatTime(session.startDateTime)}</p>
                          </div>
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-bold text-foreground line-clamp-2 min-h-[3.5rem]">
                          {session.activityTitle}
                        </h4>

                        {/* Mentor */}
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-white shrink-0">
                            {session.mentorName[0]}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-foreground">{session.mentorName}</p>
                            <p className="text-xs text-muted-foreground">Host</p>
                          </div>
                        </div>

                        {/* Meta pills */}
                        <div className="flex items-center gap-4 py-3 px-4 bg-secondary/50 rounded-xl">
                          <div className="flex items-center gap-1.5 text-xs text-foreground">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="font-medium">{session.durationMinutes} min</span>
                          </div>
                          <div className="w-px h-4 bg-border" />
                          <div className="flex items-center gap-1.5 text-xs text-foreground">
                            <Users className="w-4 h-4 text-accent" />
                            <span className="font-medium">{session.slotsLeft} spots left</span>
                          </div>
                        </div>

                        {/* Theme & type */}
                        <p className="text-xs text-muted-foreground capitalize">
                          {session.activityTheme} • {formatActivityType(session.activityType)}
                        </p>
                      </div>

                      {/* Card footer */}
                      <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground mb-0.5">Price</p>
                            <p className="text-2xl font-bold text-primary">₹{session.price}</p>
                          </div>
                          <Button size="sm" className="gap-1 group-hover:gap-3 group-hover:pr-5 transition-all">
                            Book Now
                            <ArrowUpRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* View All card */}
                <motion.div
                  className="min-w-[320px] md:min-w-[360px] snap-start rounded-3xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all flex flex-col items-center justify-center gap-6 p-12 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: sessions.length * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => window.open('https://spokkn.com/session', '_blank', 'noopener,noreferrer')}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                    <ArrowUpRight className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground mb-2">View All Sessions</p>
                    <p className="text-sm text-muted-foreground">Explore 50+ more activities</p>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SessionsCarousel;