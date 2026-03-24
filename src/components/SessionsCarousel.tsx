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

const activityColors: Record<string, string> = {
  'storytelling': '#6B3FA0',
  'roleplay': '#1E6F64',
  'improv': '#4B5FD3',
  'debate': '#B1122D',
  'topicofdiscussion': '#3F6FA1',
};

const SessionsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/sessions?timezone=Asia/Calcutta')
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
        left: direction === 'left' ? -380 : 380,
        behavior: 'smooth',
      });
    }
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

  const formatTime = (dateStr: string) =>
    new Date(dateStr).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  const formatActivityType = (type: string) =>
    type === 'topicofdiscussion' ? 'Topic Discussion'
    : type === 'roleplay' ? 'Role Play'
    : type.replace(/([A-Z])/g, ' $1').trim();

  const getActivityColor = (type: string) => 
    activityColors[type.toLowerCase()] || '#3F6FA1';

  return (
    <section
      className="py-12 md:py-20 overflow-hidden relative rounded-2xl m-4"
      style={{ backgroundColor: "rgb(208, 233, 251)" }}
    >
      {/* Background orbs */}
      <div
        className="absolute -top-64 left-1/2 -translate-x-1/2 w-[min(1600px,200vw)] h-[900px] rounded-full opacity-60 pointer-events-none"
        style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(120px)", zIndex: 0 }}
      />
      <div
        className="absolute -bottom-32 right-0 w-[400px] h-[400px] rounded-full opacity-50 pointer-events-none"
        style={{ backgroundColor: "rgb(50, 140, 210)", filter: "blur(90px)", zIndex: 0 }}
      />

      <div className="container relative z-10">

        {/* Section heading */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs text-white/80 font-semibold uppercase tracking-wider mb-2">
              Live Sessions
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Join Upcoming Sessions<br />with Peers
            </h2>
            <p className="text-white/70 text-sm mt-2 max-w-sm">
              Browse live sessions, join conversations, and practice English through structured activities.
            </p>
          </div>

          {/* Nav arrows (desktop) */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/35 border border-white/30 flex items-center justify-center text-white transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/35 border border-white/30 flex items-center justify-center text-white transition-all backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide overflow-y-hidden "
        >
          {loading ? (
            <p className="text-white/70 text-sm py-8">Loading sessions…</p>
          ) : sessions.length === 0 ? (
            <p className="text-white/70 text-sm py-8">No sessions available</p>
          ) : (
            <>
              {sessions.map((session, i) => {
                const activityColor = getActivityColor(session.activityType);

                return (
                  <motion.div
                    key={session.id}
                    className="w-[280px] md:w-[300px] h-[320px] snap-start flex-shrink-0 rounded-2xl flex flex-col group overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${activityColor}dd, ${activityColor}77)`,
                      backdropFilter: "blur(16px)",
                      border: `1px solid ${activityColor}`,
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    viewport={{ once: true }}
                  >
                    {/* Card top: activity type, level + date */}
                    <div className="px-5 pt-5 pb-4 flex items-start justify-between gap-3">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-semibold uppercase tracking-wide text-white/90">
                          {formatActivityType(session.activityType)}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-white/20 text-white border border-white/30 w-fit">
                          {session.activityLevel}
                        </span>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-lg font-bold text-white leading-none">{formatDate(session.startDateTime)}</p>
                        <p className="text-xs text-white/60 mt-0.5">{formatTime(session.startDateTime)}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mx-5 h-px bg-white/15" />

                    {/* Card body */}
                    <div className="px-5 py-4 flex flex-col gap-3 flex-1">
                      <h4 className="text-base font-bold text-white leading-snug truncate" title={session.activityTitle}>
                        {session.activityTitle}
                      </h4>

                      {/* Mentor */}
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center text-xs font-bold text-white shrink-0">
                          {session.mentorName[0]}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white/90 leading-none">{session.mentorName}</p>
                          <p className="text-xs text-white/50 mt-0.5">Host</p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-white/80">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-white/60" />
                          <span>{session.durationMinutes} min</span>
                        </div>
                        <div className="w-px h-3 bg-white/25" />
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-white/60" />
                          <span>{session.slotsLeft} spots left</span>
                        </div>
                      </div>

                      <p className="text-xs text-white/50 capitalize">
                        {session.activityTheme}
                      </p>
                    </div>

                    {/* Card footer */}
                    <div className="px-5 py-4 bg-black/10 border-t border-white/15 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-white/50 mb-0.5">Price</p>
                        <p className="text-xl font-bold text-white">₹{session.price}</p>
                      </div>
                      <button className="flex items-center gap-1.5 bg-white text-xs font-bold px-4 py-2 rounded-full hover:bg-white/90 transition-all group-hover:gap-2.5 group-hover:pr-5" style={{ color: activityColor }}>
                        Book Now
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}

              {/* View All card */}
              <motion.div
                className="w-[280px] md:w-[300px] h-[320px] snap-start flex-shrink-0 rounded-2xl flex flex-col items-center justify-center gap-5 p-10 group cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(16px)",
                  border: "1.5px dashed rgba(255,255,255,0.35)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sessions.length * 0.08, duration: 0.45 }}
                viewport={{ once: true }}
                onClick={() => window.open('https://spokkn.com/session', '_blank', 'noopener,noreferrer')}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <ArrowUpRight className="w-7 h-7 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-base font-bold text-white mb-1">View All Sessions</p>
                  <p className="text-xs text-white/60">Explore 50+ more activities</p>
                </div>
              </motion.div>
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default SessionsCarousel;
