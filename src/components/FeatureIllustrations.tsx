import { motion } from "framer-motion";

/* ─── Keyframes injected once ────────────────────────────────────────────── */
const KEYFRAMES = `
  @keyframes ft-float      { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-4px)} }
  @keyframes ft-float-sm   { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-3px)} }
  @keyframes ft-glow {
    0%,100%{box-shadow:0 4px 16px -4px rgba(74,111,165,0.28)}
    50%    {box-shadow:0 6px 30px -2px rgba(74,111,165,0.62),0 0 0 4px rgba(111,169,214,0.12)}
  }
  @keyframes ft-cursor-bob {
    0%,100%{transform:translateX(8px) translateY(0px)}
    50%    {transform:translateX(8px) translateY(-4px)}
  }
  @keyframes ft-blink      { 0%,100%{opacity:1} 45%,55%{opacity:0} }
  @keyframes ft-shimmer    { 0%,100%{opacity:.18} 50%{opacity:.7} }
  @keyframes ft-type       { 0%,5%{width:0%} 50%,90%{width:100%} 95%,100%{width:0%} }
  @keyframes ft-card1 {
    0%,8%  {opacity:0;transform:translateY(8px)} 24%,85%{opacity:1;transform:translateY(0)}
    96%,100%{opacity:0;transform:translateY(8px)}
  }
  @keyframes ft-card2 {
    0%,22%  {opacity:0;transform:translateY(8px)} 38%,85%{opacity:1;transform:translateY(0)}
    96%,100%{opacity:0;transform:translateY(8px)}
  }
  @keyframes ft-slot-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
  @keyframes ft-live {
    0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,0)}
    50%{box-shadow:0 0 0 3px rgba(239,68,68,0.22)}
  }
  @keyframes ft-progress   { 0%,4%{width:0%} 48%,84%{width:55%} 98%,100%{width:0%} }
  @keyframes ft-score      { 0%,4%{width:0%} 50%,84%{width:68%} 98%,100%{width:0%} }
  @keyframes ft-line1 {
    0%,8%  {opacity:0;transform:translateX(-8px)} 22%,80%{opacity:1;transform:translateX(0)}
    94%,100%{opacity:0;transform:translateX(-8px)}
  }
  @keyframes ft-line2 {
    0%,20%  {opacity:0;transform:translateX(-8px)} 36%,80%{opacity:1;transform:translateX(0)}
    94%,100%{opacity:0;transform:translateX(-8px)}
  }
  @keyframes ft-line3 {
    0%,34%  {opacity:0;transform:translateX(-8px)} 50%,80%{opacity:1;transform:translateX(0)}
    94%,100%{opacity:0;transform:translateX(-8px)}
  }
  @keyframes ft-w1 { 0%,100%{height:2px}  28%{height:10px} 58%{height:4px}  }
  @keyframes ft-w2 { 0%,100%{height:5px}  18%{height:3px}  52%{height:14px} }
  @keyframes ft-w3 { 0%,100%{height:8px}  38%{height:2px}  68%{height:12px} }
  @keyframes ft-w4 { 0%,100%{height:3px}  24%{height:13px} 62%{height:5px}  }
  @keyframes ft-w5 { 0%,100%{height:2px}  44%{height:8px}  78%{height:3px}  }
  @keyframes ft-peer1 {
    0%,4%  {opacity:0;transform:scale(.85)} 16%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.85)}
  }
  @keyframes ft-peer2 {
    0%,16%  {opacity:0;transform:scale(.85)} 28%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.85)}
  }
  @keyframes ft-peer3 {
    0%,28%  {opacity:0;transform:scale(.85)} 40%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.85)}
  }
  @keyframes ft-host-glow {
    0%,100%{box-shadow:0 0 0 0 rgba(74,111,165,0)}
    50%{box-shadow:0 0 0 3px rgba(74,111,165,0.4)}
  }
  @keyframes ft-chip1 {
    0%,5%  {opacity:0;transform:scale(.6)}  18%,82%{opacity:1;transform:scale(1)}
    94%,100%{opacity:0;transform:scale(.6)}
  }
  @keyframes ft-chip2 {
    0%,16%  {opacity:0;transform:scale(.6)} 28%,82%{opacity:1;transform:scale(1)}
    94%,100%{opacity:0;transform:scale(.6)}
  }
  @keyframes ft-chip3 {
    0%,27%  {opacity:0;transform:scale(.6)} 40%,82%{opacity:1;transform:scale(1)}
    94%,100%{opacity:0;transform:scale(.6)}
  }
  @keyframes ft-err-pulse { 0%,100%{background-color:transparent} 50%{background-color:#fecaca} }
`;

/* ─── Shared helpers ─────────────────────────────────────────────────────── */
const pill = "text-[9px] font-semibold px-2.5 py-1 rounded-full border";

const Cursor = ({ delay = "0s" }: { delay?: string }) => (
  <svg
    className="absolute -bottom-4 left-1/2"
    style={{ animation: `ft-cursor-bob 2.4s ease-in-out ${delay} infinite`, willChange: "transform" }}
    width="16" height="18" viewBox="0 0 16 18" fill="none"
  >
    <path
      d="M1 1L1 15L5.5 11L13 11L1 1Z"
      fill="#1F2A37" stroke="white" strokeWidth="1.5"
      strokeLinejoin="round" strokeLinecap="round"
    />
  </svg>
);

const waveAnims = ["ft-w1", "ft-w2", "ft-w3", "ft-w4", "ft-w5"];
const waveDurs  = ["0.95s", "1.1s", "0.82s", "1.25s", "1.0s"];

/* ═══════════════════════════════════════════════════════════════════════════
   Feature 1 — Generate & Save
══════════════════════════════════════════════════════════════════════════════ */
const GenerateSaveIllustration = () => (
  <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden px-5">
    <span
      className={`${pill} absolute top-[8%] left-[4%] bg-[#6FA9D6]/15 text-[#4A6FA5] border-[#6FA9D6]/30`}
      style={{ animation: "ft-float-sm 3.2s ease-in-out 0.3s infinite", willChange: "transform" }}
    >AI-Powered</span>
    <span
      className={`${pill} absolute top-[8%] right-[4%] bg-violet-50 text-violet-500 border-violet-200`}
      style={{ animation: "ft-float-sm 3.6s ease-in-out 0.9s infinite", willChange: "transform" }}
    >✦ Custom</span>
    <span
      className={`${pill} absolute bottom-[8%] right-[4%] bg-emerald-50 text-emerald-600 border-emerald-200`}
      style={{ animation: "ft-float 3.5s ease-in-out 1.1s infinite", willChange: "transform" }}
    >Saved ✓</span>

    <div className="flex flex-col gap-2.5 z-10 w-full max-w-[72%]">
      {/* Prompt panel */}
      <div
        className="w-full rounded-2xl border border-[#6FA9D6]/25 bg-white shadow-sm p-3"
        style={{ animation: "ft-float-sm 4s ease-in-out infinite", willChange: "transform" }}
      >
        <div className="flex items-center justify-between gap-1 mb-2">
          <p className="text-[8px] font-bold text-[#1F2A37] leading-none">Generate Activity</p>
          <span className="text-[7px] font-semibold px-1.5 py-0.5 rounded-full bg-violet-50 text-violet-500 border border-violet-200">✦ AI</span>
        </div>

        {/* Typing input */}
        <div className="rounded-xl bg-[#f4f8fc] border border-[#6FA9D6]/15 px-2.5 py-2 mb-2 flex items-center gap-1.5 overflow-hidden">
          <div className="flex-1 h-1.5 rounded-full bg-[#1F2A37]/12 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#4A6FA5]/40"
              style={{ animation: "ft-type 5s ease-in-out infinite", willChange: "width" }}
            />
          </div>
          <div
            className="w-px h-3 bg-[#4A6FA5]"
            style={{ animation: "ft-blink 1s ease-in-out infinite", willChange: "opacity" }}
          />
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-1 mb-2">
          {["Vocabulary", "Grammar", "Advanced"].map((label, i) => (
            <span
              key={label}
              className="text-[7.5px] font-semibold px-2 py-0.5 rounded-full bg-[#6FA9D6]/10 text-[#4A6FA5] border border-[#6FA9D6]/20"
              style={{ animation: `ft-chip${i + 1} 8s ease-in-out infinite`, willChange: "opacity, transform" }}
            >{label}</span>
          ))}
        </div>

        {/* Shimmer preview lines */}
        <div className="space-y-1.5">
          {[["w-4/5", 0], ["w-3/5", 0.3], ["w-2/3", 0.6]].map(([w, delay], i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#6FA9D6]/40 shrink-0" />
              <div
                className={`h-1.5 ${w} rounded-full bg-[#1F2A37]/10`}
                style={{ animation: `ft-shimmer 1.8s ease-in-out ${delay}s infinite`, willChange: "opacity" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Saved activity cards */}
      {[
        { title: "Climate Discussion", tag: "Advanced", anim: "ft-card1" },
        { title: "Job Interview Prep",  tag: "Intermediate", anim: "ft-card2" },
      ].map(({ title, tag, anim }) => (
        <div
          key={title}
          className="w-full flex items-center justify-between rounded-xl border border-[#6FA9D6]/20 bg-[#f4f8fc] px-3 py-1.5"
          style={{ animation: `${anim} 8s ease-in-out infinite`, willChange: "opacity, transform" }}
        >
          <div>
            <p className="text-[8.5px] font-semibold text-[#1F2A37]">{title}</p>
            <p className="text-[7px] text-[#1F2A37]/40">{tag}</p>
          </div>
          <div className="w-5 h-5 rounded-full bg-[#6FA9D6]/15 flex items-center justify-center shrink-0">
            <svg width="9" height="11" viewBox="0 0 10 12" fill="none">
              <path d="M2 1h6a1 1 0 0 1 1 1v9l-4-2.5L1 11V2a1 1 0 0 1 1-1z"
                stroke="#4A6FA5" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   Feature 2 — Join Sessions
══════════════════════════════════════════════════════════════════════════════ */
const JoinSessionsIllustration = () => (
  <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden px-4">
    <span
      className={`${pill} absolute top-[7%] left-[5%] flex items-center gap-1.5 bg-rose-50 text-rose-500 border-rose-200`}
      style={{ animation: "ft-live 2s ease-in-out infinite, ft-float-sm 3.2s ease-in-out infinite", willChange: "transform, box-shadow" }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" style={{ animation: "ft-slot-pulse 1.2s ease-in-out infinite", willChange: "opacity" }} />
      Live Now
    </span>
    <span
      className={`${pill} absolute bottom-[7%] right-[4%] bg-[#6FA9D6]/10 text-[#4A6FA5] border-[#6FA9D6]/20`}
      style={{ animation: "ft-float 3.5s ease-in-out 0.8s infinite", willChange: "transform" }}
    >4 Open</span>

    <div
      className="flex flex-col gap-1.5 z-10 w-full"
      style={{ animation: "ft-float-sm 4.5s ease-in-out 0.2s infinite", willChange: "transform" }}
    >
      {[
        { title: "Climate Change Debate",   time: "7:00 PM", live: true,  peers: 3, anim: "ft-peer1" },
        { title: "Job Interview Practice",  time: "7:30 PM", live: false, peers: 1, anim: "ft-peer2" },
        { title: "Storytelling Circle",     time: "8:00 PM", live: false, peers: 2, anim: "ft-peer3" },
      ].map(({ title, time, live, peers, anim }) => (
        <div
          key={title}
          className={`w-full flex items-center justify-between rounded-xl border px-2.5 py-2 ${
            live ? "border-rose-200 bg-rose-50/50" : "border-[#6FA9D6]/20 bg-[#f4f8fc]"
          }`}
          style={{ animation: `${anim} 10s ease-in-out infinite`, willChange: "opacity, transform" }}
        >
          <div className="min-w-0">
            <p className="text-[8px] font-semibold text-[#1F2A37] truncate">{title}</p>
            <p className="text-[7px] text-[#1F2A37]/40">{time} · {peers} peers</p>
          </div>
          {live && (
            <span className="shrink-0 text-[7px] font-bold text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded-full border border-rose-200 ml-1">LIVE</span>
          )}
        </div>
      ))}

      <div className="relative flex justify-center mt-1.5">
        <button
          className="px-5 py-2 rounded-full text-white text-xs font-semibold pointer-events-none select-none whitespace-nowrap"
          style={{ background: "linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)", animation: "ft-glow 2.5s ease-in-out 0.5s infinite", willChange: "box-shadow" }}
        >Join Session</button>
        <Cursor delay="0.5s" />
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   Feature 3 — Host a Session
══════════════════════════════════════════════════════════════════════════════ */
const HostSessionIllustration = () => (
  <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden px-4">
    <span
      className={`${pill} absolute top-[7%] left-[4%] bg-[#4A6FA5]/10 text-[#4A6FA5] border-[#4A6FA5]/20`}
      style={{ animation: "ft-float-sm 3.3s ease-in-out infinite", willChange: "transform" }}
    >You're Host</span>
    <span
      className={`${pill} absolute top-[7%] right-[4%] bg-rose-50 text-rose-500 border-rose-200`}
      style={{ animation: "ft-float-sm 3.7s ease-in-out 0.5s infinite", willChange: "transform" }}
    >● Rec</span>
    <span
      className={`${pill} absolute bottom-[7%] left-[4%] bg-emerald-50 text-emerald-600 border-emerald-200`}
      style={{ animation: "ft-float 3.6s ease-in-out 1.1s infinite", willChange: "transform" }}
    >3 Joined</span>

    <div
      className="flex flex-col items-center gap-2.5 z-10 w-full max-w-[88%]"
      style={{ animation: "ft-float-sm 4.5s ease-in-out 0.2s infinite", willChange: "transform" }}
    >
      {/* Laptop / video grid */}
      <div className="relative w-full">
        <div className="w-full rounded-t-xl border-[2.5px] border-[#1F2A37]/12 bg-[#f4f8fc] overflow-hidden shadow-sm">
          <div className="h-3 bg-[#1F2A37]/8 flex items-center px-2 gap-1">
            {[0.2, 0.15, 0.1].map((o, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1F2A37]" style={{ opacity: o }} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-1 p-1.5">
            {[true, false, false, false].map((isHost, i) => (
              <div
                key={i}
                className="rounded-lg aspect-video flex flex-col items-center justify-center relative overflow-hidden"
                style={{
                  background: isHost ? "linear-gradient(135deg,#4A6FA5,#6FA9D6)" : "#e8f0f8",
                  animation: isHost
                    ? "ft-host-glow 2.2s ease-in-out infinite"
                    : `ft-peer${i} 10s ease-in-out infinite`,
                  willChange: "box-shadow, opacity, transform",
                }}
              >
                <svg width="20" height="24" viewBox="0 0 28 32" fill="none">
                  <ellipse cx="14" cy="11" rx="7" ry="8" fill={isHost ? "rgba(255,255,255,0.35)" : "#6FA9D6"} opacity="0.7" />
                  <ellipse cx="14" cy="28" rx="11" ry="7" fill={isHost ? "rgba(255,255,255,0.2)"  : "#6FA9D6"} opacity="0.4" />
                </svg>
                {isHost ? (
                  <>
                    <span className="absolute top-1 left-1 text-[5px] font-bold text-white/90 bg-white/15 px-1 py-0.5 rounded-full">HOST</span>
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5 items-end h-3">
                      {waveAnims.map((anim, j) => (
                        <div
                          key={j}
                          className="w-0.5 rounded-full bg-white/75"
                          style={{ height: "2px", animation: `${anim} ${waveDurs[j]} ease-in-out ${j * 0.08}s infinite`, willChange: "height" }}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                    <span className="text-[5px] text-[#6FA9D6]/70 font-medium whitespace-nowrap">⊙ Ready</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[calc(100%+8px)]  -mx-1 h-2 rounded-b-xl bg-[#1F2A37]/12 shadow-md" />
        <div className="w-[calc(100%+16px)] -mx-2 h-1 rounded-b-xl bg-[#1F2A37]/6" />
      </div>

      <div className="relative">
        <button
          className="px-5 py-2 rounded-full text-white text-xs font-semibold pointer-events-none select-none whitespace-nowrap"
          style={{ background: "linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)", animation: "ft-glow 2.5s ease-in-out 0.8s infinite", willChange: "box-shadow" }}
        >Start Hosting</button>
        <Cursor delay="0.8s" />
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   Feature 4 — Recordings
══════════════════════════════════════════════════════════════════════════════ */
const RecordingsIllustration = () => (
  <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden px-5">
    <span
      className={`${pill} absolute top-[6%] left-[4%] bg-[#6FA9D6]/12 text-[#4A6FA5] border-[#6FA9D6]/25`}
      style={{ animation: "ft-float-sm 3.3s ease-in-out 0.1s infinite", willChange: "transform" }}
    >Playback</span>
    <span
      className={`${pill} absolute top-[6%] right-[4%] bg-[#6FA9D6]/10 text-[#4A6FA5] border-[#6FA9D6]/20`}
      style={{ animation: "ft-float-sm 3.8s ease-in-out 0.6s infinite", willChange: "transform" }}
    >Transcript</span>
    <span
      className={`${pill} absolute bottom-[6%] right-[4%] bg-[#4A6FA5]/10 text-[#4A6FA5] border-[#4A6FA5]/20`}
      style={{ animation: "ft-float 3.5s ease-in-out 1s infinite", willChange: "transform" }}
    >Insights</span>

    <div className="flex flex-col items-center gap-2 z-10 w-full max-w-[88%]">
      {/* Recording panel */}
      <div className="w-full rounded-2xl border border-[#6FA9D6]/25 bg-white shadow-sm overflow-hidden">
        <div className="px-3 py-1.5 border-b border-[#6FA9D6]/15 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#6FA9D6] shrink-0" />
          <p className="text-[7.5px] font-semibold uppercase tracking-widest text-[#1F2A37]/50 truncate">
            Session Recording & Transcript
          </p>
        </div>

        <div className="flex min-h-0 divide-x divide-[#6FA9D6]/15">
          {/* Left — video + progress */}
          <div className="flex-1 p-2 flex flex-col gap-1.5 min-w-0">
            <div className="rounded-lg bg-[#e8f0f8] aspect-video relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex items-end p-1.5 gap-1">
                {(["#6FA9D6", "#4A6FA5", "#6FA9D6"] as const).map((c, i) => (
                  <div key={i} className="flex-1 rounded" style={{ height: `${30 + i * 10}%`, background: c, opacity: 0.25 }} />
                ))}
              </div>
              <div className="w-6 h-6 rounded-full bg-white/90 shadow flex items-center justify-center z-10">
                <svg width="7" height="9" viewBox="0 0 8 10" fill="none">
                  <path d="M1 1L7 5L1 9V1Z" fill="#4A6FA5" />
                </svg>
              </div>
            </div>
            <div className="h-1 rounded-full bg-[#6FA9D6]/15 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg,#6FA9D6,#4A6FA5)", animation: "ft-progress 7s ease-in-out infinite", willChange: "width" }}
              />
            </div>
          </div>

          {/* Right — transcript */}
          <div className="flex-1 p-2 flex flex-col gap-1 min-w-0">
            <p className="text-[7px] text-[#1F2A37]/40 uppercase tracking-widest mb-0.5">Transcript</p>
            <p
              className="text-[8px] text-[#1F2A37]/70 leading-relaxed"
              style={{ animation: "ft-line1 9s ease-in-out infinite", willChange: "opacity, transform" }}
            >I spoke clearly this session.</p>
            <p
              className="text-[8px] leading-relaxed"
              style={{ animation: "ft-line2 9s ease-in-out infinite", willChange: "opacity, transform" }}
            >
              <span style={{
                textDecoration: "underline", textDecorationColor: "#DC2626",
                textDecorationStyle: "wavy", textUnderlineOffset: "2px",
                borderRadius: "2px", padding: "0 2px",
                animation: "ft-err-pulse 1.8s ease-in-out infinite",
                willChange: "background-color", display: "inline", color: "#DC2626",
              }}>She go to office yesterday.</span>
            </p>
            <p
              className="text-[8px] text-[#1F2A37]/70 leading-relaxed"
              style={{ animation: "ft-line3 9s ease-in-out infinite", willChange: "opacity, transform" }}
            >Great vocabulary overall!</p>
          </div>
        </div>
      </div>

      {/* Fluency Score */}
      <div className="w-full px-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[7.5px] font-semibold text-[#1F2A37]/50 uppercase tracking-widest">Fluency Score</span>
          <span className="text-[7.5px] font-bold text-[#4A6FA5]">68%</span>
        </div>
        <div className="h-1.5 rounded-full bg-[#6FA9D6]/12 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg,#6FA9D6,#4A6FA5)", animation: "ft-score 7s ease-in-out 0.5s infinite", willChange: "width" }}
          />
        </div>
      </div>

      {/* Button */}
      <div className="relative">
        <button
          className="px-5 py-2.5 rounded-full text-white text-xs font-semibold pointer-events-none select-none whitespace-nowrap"
          style={{ background: "linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)", animation: "ft-glow 2.5s ease-in-out 1.2s infinite", willChange: "box-shadow" }}
        >Review Session</button>
        <Cursor delay="1.2s" />
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   Feature data
══════════════════════════════════════════════════════════════════════════════ */
const features = [
  { title: "Generate & Save",  description: "Create custom activities tailored to your goals and save them for later." },
  { title: "Join Sessions",    description: "Explore and join live peer sessions happening right now." },
  { title: "Host a Session",   description: "Create and lead your own sessions for any topic or level." },
  { title: "Recordings",       description: "Review transcripts and recordings to track your improvement." },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Grid layout
══════════════════════════════════════════════════════════════════════════════ */


const FeatureIllustrations = () => {
  return (
    <>
      <style>{KEYFRAMES}</style>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[680px]">

        {/* Generate & Save — large */}
        <motion.div
          className="md:col-span-2 bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-6 group hover:shadow-lg transition-shadow overflow-hidden min-h-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{features[0].title}</h3>
            <p className="text-gray-600 leading-relaxed">{features[0].description}</p>
          </div>
          <div className="flex-1 relative overflow-hidden rounded-xl border border-gray-100">
            <GenerateSaveIllustration />
          </div>
        </motion.div>

        {/* Join Sessions — small */}
        <motion.div
          className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 group hover:shadow-lg transition-shadow overflow-hidden min-h-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.08 }}
        >
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-1">{features[1].title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{features[1].description}</p>
          </div>
          <div className="flex-1 relative overflow-hidden rounded-xl border border-gray-100">
            <JoinSessionsIllustration />
          </div>
        </motion.div>

        {/* Host a Session — small */}
        <motion.div
          className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 group hover:shadow-lg transition-shadow overflow-hidden min-h-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.16 }}
        >
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-1">{features[2].title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{features[2].description}</p>
          </div>
          <div className="flex-1 relative overflow-hidden rounded-xl border border-gray-100">
            <HostSessionIllustration />
          </div>
        </motion.div>

        {/* Recordings — large */}
        <motion.div
          className="md:col-span-2 bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-6 group hover:shadow-lg transition-shadow overflow-hidden min-h-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.24 }}
        >
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{features[3].title}</h3>
            <p className="text-gray-600 leading-relaxed">{features[3].description}</p>
          </div>
          <div className="flex-1 relative overflow-hidden rounded-xl border border-gray-100">
            <RecordingsIllustration />
          </div>
        </motion.div>

      </div>
    </>
  );
};

export default FeatureIllustrations;
