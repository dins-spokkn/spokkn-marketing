import { ArrowUpRight, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

const activityTypeColors: Record<string, { tag: string; bg: string }> = {
  topicofdiscussion: { tag: "bg-accent text-accent-foreground", bg: "bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10" },
  debate: { tag: "bg-primary text-primary-foreground", bg: "bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10" },
  storytelling: { tag: "bg-foreground text-primary-foreground", bg: "bg-gradient-to-br from-primary/5 to-transparent border border-primary/10" },
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
      const scrollAmount = 300;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  };

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  return (
    <section className="py-16 md:py-24 relative bg-background">
      <div className="absolute inset-0 pointer-events-none" />
      
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
            <p className="text-sm text-accent font-semibold mb-1">LIVE SESSIONS</p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
              Join Upcoming Sessions<br />with Peers 
            </h3>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Browse live sessions, join conversations, and practice English through structured activities.
          </p>
        </div>

        {/* Cards Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 items-center justify-center rounded-full bg-white border border-border shadow-lg hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 items-center justify-center rounded-full bg-white border border-border shadow-lg hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {loading ? (
              <p className="text-muted-foreground">Loading sessions...</p>
            ) : sessions.length === 0 ? (
              <p className="text-muted-foreground">No sessions available</p>
            ) : (
              <>
                {sessions.map((session, i) => {
                  const colors = activityTypeColors[session.activityType] || activityTypeColors.topicofdiscussion;
                  return (
                    <motion.div
                      key={session.id}
                      className="min-w-[320px] md:min-w-[360px] snap-start rounded-3xl bg-white border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col group overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-6 pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <span className={`${colors.tag} text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                            {session.activityLevel}
                          </span>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">{formatDate(session.startDateTime)}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{formatTime(session.startDateTime)}</p>
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-bold text-foreground mb-3 line-clamp-2 min-h-[3.5rem]">{session.activityTitle}</h4>
                        
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-white">
                              {session.mentorName[0]}
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-foreground">{session.mentorName}</p>
                              <p className="text-[10px] text-muted-foreground">Host</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 py-3 px-4 bg-secondary/50 rounded-xl mb-4">
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

                        <p className="text-xs text-muted-foreground capitalize mb-4">{session.activityTheme} • {session.activityType.replace(/([A-Z])/g, ' $1').trim()}</p>
                      </div>

                      <div className="mt-auto p-6 pt-4 bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground mb-0.5">Price</p>
                            <p className="text-2xl font-bold text-primary">₹{session.price}</p>
                          </div>
                          <button className="px-6 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition-all flex items-center gap-2 group-hover:gap-3 group-hover:pr-5">
                            Book Now
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
                <motion.a
                  href="https://spokkn.com/session"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[320px] md:min-w-[360px] snap-start rounded-3xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all flex flex-col items-center justify-center gap-6 p-12 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: sessions.length * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                    <ArrowUpRight className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground mb-2">View All Sessions</p>
                    <p className="text-sm text-muted-foreground">Explore 50+ more activities</p>
                  </div>
                </motion.a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionsCarousel;
