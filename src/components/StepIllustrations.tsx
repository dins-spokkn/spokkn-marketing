/* ─── Keyframes injected once via BookSessionIllustration ─────────────── */
const KEYFRAMES = `
  @keyframes sk-float      { 0%,100%{transform:translateY(0)}    50%{transform:translateY(-5px)} }
  @keyframes sk-float-sm   { 0%,100%{transform:translateY(0)}    50%{transform:translateY(-3px)} }
  @keyframes sk-float-md   { 0%,100%{transform:translateY(0)}    50%{transform:translateY(-4px)} }
  @keyframes sk-glow {
    0%,100%{box-shadow:0 4px 16px -4px rgba(74,111,165,0.28)}
    50%    {box-shadow:0 6px 30px -2px rgba(74,111,165,0.62),0 0 0 4px rgba(111,169,214,0.12)}
  }
  @keyframes sk-cursor-bob {
    0%,100%{transform:translateX(8px) translateY(0px)}
    50%    {transform:translateX(8px) translateY(-4px)}
  }
  @keyframes sk-w1 { 0%,100%{height:2px}  28%{height:10px} 58%{height:4px}  }
  @keyframes sk-w2 { 0%,100%{height:5px}  18%{height:3px}  52%{height:14px} }
  @keyframes sk-w3 { 0%,100%{height:8px}  38%{height:2px}  68%{height:12px} }
  @keyframes sk-w4 { 0%,100%{height:3px}  24%{height:13px} 62%{height:5px}  }
  @keyframes sk-w5 { 0%,100%{height:2px}  44%{height:8px}  78%{height:3px}  }
  @keyframes sk-shimmer  { 0%,100%{opacity:.18} 50%{opacity:.7}  }
  @keyframes sk-err-pulse{ 0%,100%{background-color:#fef2f2} 50%{background-color:#fecaca} }
  @keyframes sk-progress {
    0%,4%  {width:0%}   48%,84%{width:38%}  98%,100%{width:0%}
  }
  @keyframes sk-score {
    0%,4%  {width:0%}   50%,84%{width:72%}  98%,100%{width:0%}
  }
  @keyframes sk-toast {
    0%,5%  {opacity:0;transform:translateX(-50%) translateY(-10px) scale(.92)}
    18%,78%{opacity:1;transform:translateX(-50%) translateY(0)     scale(1)}
    92%,100%{opacity:0;transform:translateX(-50%) translateY(-10px) scale(.92)}
  }
  @keyframes sk-slot-pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
  @keyframes sk-chip1 {
    0%,5%  {opacity:0;transform:scale(.6)}  18%,82%{opacity:1;transform:scale(1)}
    94%,100%{opacity:0;transform:scale(.6)}
  }
  @keyframes sk-chip2 {
    0%,16%  {opacity:0;transform:scale(.6)} 28%,82%{opacity:1;transform:scale(1)}
    94%,100%{opacity:0;transform:scale(.6)}
  }
  @keyframes sk-chip3 {
    0%,27%  {opacity:0;transform:scale(.6)} 40%,82%{opacity:1;transform:scale(1)}
    94%,100%{opacity:0;transform:scale(.6)}
  }
  @keyframes sk-line1 {
    0%,8%  {opacity:0;transform:translateX(-8px)} 22%,80%{opacity:1;transform:translateX(0)}
    94%,100%{opacity:0;transform:translateX(-8px)}
  }
  @keyframes sk-line2 {
    0%,20%  {opacity:0;transform:translateX(-8px)} 36%,80%{opacity:1;transform:translateX(0)}
    94%,100%{opacity:0;transform:translateX(-8px)}
  }
  @keyframes sk-line3 {
    0%,34%  {opacity:0;transform:translateX(-8px)} 50%,80%{opacity:1;transform:translateX(0)}
    94%,100%{opacity:0;transform:translateX(-8px)}
  }
  @keyframes sk-peer1 {
    0%,4%  {opacity:0;transform:scale(.85)} 16%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.85)}
  }
  @keyframes sk-peer2 {
    0%,16%  {opacity:0;transform:scale(.85)} 28%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.85)}
  }
  @keyframes sk-peer3 {
    0%,28%  {opacity:0;transform:scale(.85)} 40%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.85)}
  }
  @keyframes sk-peer4 {
    0%,40%  {opacity:0;transform:scale(.85)} 52%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.85)}
  }
  @keyframes sk-active-glow {
    0%,100%{box-shadow:0 0 0 0 rgba(111,169,214,0)}
    50%    {box-shadow:0 0 0 3px rgba(111,169,214,0.45)}
  }
`;

/* ─── Shared cursor ──────────────────────────────────────────────────────── */
const Cursor = ({ delay = "0s" }: { delay?: string }) => (
  <svg
    className="absolute -bottom-4 left-1/2"
    style={{ animation: `sk-cursor-bob 2.4s ease-in-out ${delay} infinite`, willChange: "transform" }}
    width="16" height="18" viewBox="0 0 16 18" fill="none"
  >
    <path
      d="M1 1L1 15L5.5 11L13 11L1 1Z"
      fill="#1F2A37"
      stroke="white"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const pill = "text-[9px] font-semibold px-2.5 py-1 rounded-full border";

/* ═══════════════════════════════════════════════════════════════════════════
   Step 1 — Book Session
   FIX: session card + button now in a single flex-col flow (no overlap).
        "Free" / "Affordable" at top-[18%] sit above the card.
        "Limited Slots" is inline with the button in the bottom row.
══════════════════════════════════════════════════════════════════════════════ */
export const BookSessionIllustration = () => (
  <div className="w-full h-full bg-white relative overflow-hidden">
    <style>{KEYFRAMES}</style>

    {/* Top-corner badges — above the card (card starts at ~35% after pt-10 + centering) */}
    <span
      className={`${pill} absolute top-[18%] left-[5%] bg-[#6FA9D6]/15 text-[#4A6FA5] border-[#6FA9D6]/30`}
      style={{ animation: "sk-float-sm 3.2s ease-in-out 0.3s infinite", willChange: "transform" }}
    >Free</span>
    <span
      className={`${pill} absolute top-[18%] right-[5%] bg-[#6FA9D6]/10 text-[#4A6FA5] border-[#6FA9D6]/25`}
      style={{ animation: "sk-float-sm 3.6s ease-in-out 0.9s infinite", willChange: "transform" }}
    >Affordable</span>

    {/* Toast — top-center, z-20 so it layers above corner badges if needed */}
    <div
      className="absolute top-2.5 left-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 shadow-sm"
      style={{ animation: "sk-toast 6s ease-in-out infinite", willChange: "opacity, transform" }}
    >
      <span className="text-[10px]">🔥</span>
      <span className="text-[8.5px] font-semibold text-orange-500 whitespace-nowrap">Trending today</span>
    </div>

    {/* ── Main column: flex-col centred, padded top so badges don't collide ── */}
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 pt-10">

      {/* Session card — blurred background element */}
      <div
        className="w-full h-14 rounded-2xl border border-[#6FA9D6]/30 bg-[#6FA9D6]/5 shrink-0"
        style={{ filter: "blur(1.5px)", animation: "sk-float-sm 3.8s ease-in-out infinite", willChange: "transform" }}
      >
        <div className="px-4 h-full flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold text-[#1F2A37] leading-none truncate">Stepping Out: Skill Up!</p>
            <p className="text-[8px] text-[#1F2A37]/50 mt-0.5 truncate">Choose a session best suited to your time</p>
          </div>
          <p className="text-[8px] text-[#4A6FA5] font-medium shrink-0">7:00 – 8:00 PM</p>
        </div>
      </div>

      {/* Bottom row: urgency badge left, CTA right — no vertical overlap */}
      <div className="w-full flex items-center justify-between">
        <span
          className={`${pill} bg-[#4A6FA5]/10 text-[#4A6FA5] border-[#4A6FA5]/20`}
          style={{ animation: "sk-slot-pulse 1.6s ease-in-out infinite", willChange: "opacity" }}
        >Limited Slots</span>

        <div className="relative">
          <button
            className="px-5 py-2.5 rounded-full text-white text-xs font-semibold pointer-events-none select-none whitespace-nowrap"
            style={{ background: "linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)", animation: "sk-glow 2.5s ease-in-out infinite" }}
          >Add to Session</button>
          <Cursor />
        </div>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   Step 2 — Prepare Session
   FIX: content card is now in the flex flow (was absolute).
        Removed the mt-20 hack on the button.
        Badges moved to top-[8%] / bottom-[8%] — clear of content.
══════════════════════════════════════════════════════════════════════════════ */
export const PrepareSessionIllustration = () => (
  <div className="w-full h-full bg-white relative overflow-hidden">

    {/* Corner badges — well above content column */}
    <span
      className={`${pill} absolute top-[8%] left-[4%] bg-[#6FA9D6]/12 text-[#4A6FA5] border-[#6FA9D6]/25`}
      style={{ animation: "sk-float-sm 3.4s ease-in-out 0.2s infinite", willChange: "transform" }}
    >Key Points</span>
    <span
      className={`${pill} absolute top-[8%] right-[4%] bg-[#6FA9D6]/10 text-[#4A6FA5] border-[#6FA9D6]/20`}
      style={{ animation: "sk-float-sm 3.8s ease-in-out 0.7s infinite", willChange: "transform" }}
    >Vocabulary</span>
    <span
      className={`${pill} absolute bottom-[8%] left-[4%] bg-[#4A6FA5]/10 text-[#4A6FA5] border-[#4A6FA5]/20`}
      style={{ animation: "sk-float 3.5s ease-in-out 1.1s infinite", willChange: "transform" }}
    >Practice Ready</span>

    {/* ── Main column ── */}
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 pt-8">

      {/* Content card — in flow, no absolute */}
      <div
        className="w-full rounded-2xl border border-[#6FA9D6]/25 bg-white shadow-sm p-2.5 shrink-0"
        style={{ animation: "sk-float-sm 4s ease-in-out infinite", willChange: "transform" }}
      >
        <div className="flex items-start justify-between gap-1 mb-1.5">
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-[#1F2A37] leading-none truncate">Understanding Gender Equality</p>
            <p className="text-[8px] text-[#1F2A37]/45 mt-0.5 truncate">Prepare with key points, vocabulary, and examples</p>
          </div>
          <span className="shrink-0 text-[7px] font-semibold px-1.5 py-0.5 rounded-full bg-violet-50 text-violet-500 border border-violet-200 whitespace-nowrap">
            ✦ AI
          </span>
        </div>

        {/* Chips stagger */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {(["Vocabulary", "Idioms", "Grammar Tips"] as const).map((label, i) => (
            <span
              key={label}
              className="text-[7.5px] font-semibold px-2 py-0.5 rounded-full bg-[#6FA9D6]/10 text-[#4A6FA5] border border-[#6FA9D6]/20"
              style={{ animation: `sk-chip${i + 1} 8s ease-in-out infinite`, willChange: "opacity, transform" }}
            >{label}</span>
          ))}
        </div>

        {/* Skeleton lines shimmer */}
        <div className="space-y-1.5">
          {(["w-3/5", "w-4/5", "w-2/5"] as const).map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#6FA9D6]/50 shrink-0" />
              <div
                className={`h-1.5 ${w} rounded-full bg-[#1F2A37]/10`}
                style={{ animation: `sk-shimmer 1.8s ease-in-out ${i * 0.35}s infinite`, willChange: "opacity" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button — natural position below card, no mt-20 */}
      <div className="relative">
        <button
          className="px-5 py-2.5 rounded-full text-white text-xs font-semibold pointer-events-none select-none whitespace-nowrap"
          style={{ background: "linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)", animation: "sk-glow 2.5s ease-in-out 0.4s infinite" }}
        >Start Preparing</button>
        <Cursor delay="0.4s" />
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   Step 3 — Join Session
   FIX: top badges moved from top-[12-14%] → top-[7%].
        Bottom badge moved from bottom-[16%] → bottom-[7%].
        Both now sit outside the laptop+button column vertical range.
══════════════════════════════════════════════════════════════════════════════ */
const waveAnims = ["sk-w1", "sk-w2", "sk-w3", "sk-w4", "sk-w5"];
const waveDurs  = ["0.95s", "1.1s", "0.82s", "1.25s", "1.0s"];
const peerAnims = ["sk-peer1", "sk-peer2", "sk-peer3", "sk-peer4"];

export const JoinSessionIllustration = () => (
  <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden px-5">

    <span
      className={`${pill} absolute top-[7%] left-[5%] flex items-center gap-1.5 bg-rose-50 text-rose-500 border-rose-200`}
      style={{ animation: "sk-float-sm 3.2s ease-in-out infinite", willChange: "transform" }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />Live
    </span>
    <span
      className={`${pill} absolute top-[7%] right-[5%] bg-[#6FA9D6]/10 text-[#4A6FA5] border-[#6FA9D6]/20`}
      style={{ animation: "sk-float-sm 3.7s ease-in-out 0.5s infinite", willChange: "transform" }}
    >Real-time</span>
    <span
      className={`${pill} absolute bottom-[7%] left-[5%] bg-[#4A6FA5]/10 text-[#4A6FA5] border-[#4A6FA5]/20`}
      style={{ animation: "sk-float-md 4s ease-in-out 0.9s infinite", willChange: "transform" }}
    >Peers Connected</span>

    <div
      className="flex flex-col items-center gap-3 z-10 w-full max-w-[55%]"
      style={{ animation: "sk-float-sm 4.5s ease-in-out 0.2s infinite", willChange: "transform" }}
    >
      {/* Laptop */}
      <div className="relative w-full">
        <div className="w-full rounded-t-xl border-[3px] border-[#1F2A37]/15 bg-[#f4f8fc] overflow-hidden shadow-sm">
          <div className="h-3.5 bg-[#1F2A37]/8 flex items-center px-2 gap-1">
            {[0.2, 0.15, 0.1].map((o, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1F2A37]" style={{ opacity: o }} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-1 p-1.5">
            {[true, false, false, false].map((active, i) => (
              <div
                key={i}
                className="rounded-lg aspect-video flex flex-col items-center justify-center relative overflow-hidden"
                style={{
                  background: active ? "linear-gradient(135deg,#6FA9D6,#4A6FA5)" : "#e8f0f8",
                  animation: `${peerAnims[i]} 10s ease-in-out infinite${active ? ", sk-active-glow 2.2s ease-in-out infinite" : ""}`,
                  willChange: "opacity, transform, box-shadow",
                }}
              >
                <svg width="24" height="28" viewBox="0 0 28 32" fill="none">
                  <ellipse cx="14" cy="11" rx="7" ry="8" fill={active ? "rgba(255,255,255,0.35)" : "#6FA9D6"} opacity="0.7" />
                  <ellipse cx="14" cy="28" rx="11" ry="7" fill={active ? "rgba(255,255,255,0.2)" : "#6FA9D6"} opacity="0.4" />
                </svg>
                {active ? (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5 items-end h-3.5">
                    {waveAnims.map((anim, j) => (
                      <div
                        key={j}
                        className="w-0.5 rounded-full bg-white/75"
                        style={{ height: "2px", animation: `${anim} ${waveDurs[j]} ease-in-out ${j * 0.08}s infinite`, willChange: "height" }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                    <span className="text-[5px] text-[#6FA9D6]/70 font-medium whitespace-nowrap">⊙ Ready</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[calc(100%+8px)] -mx-1 h-2 rounded-b-xl bg-[#1F2A37]/12 shadow-md" />
        <div className="w-[calc(100%+16px)] -mx-2 h-1 rounded-b-xl bg-[#1F2A37]/6" />
      </div>

      <div className="relative mt-1">
        <button
          className="px-5 py-2.5 rounded-full text-white text-xs font-semibold pointer-events-none select-none whitespace-nowrap"
          style={{ background: "linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)", animation: "sk-glow 2.5s ease-in-out 0.8s infinite" }}
        >Join Session</button>
        <Cursor delay="0.8s" />
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   Step 4 — Review & Improve
   FIX: badges moved to top-[5%] / bottom-[5%] so they sit in the blank
        band above/below the centred panel+fluency+button column.
        Panel padding reduced to p-2 to tighten the column and give badges
        more breathing room.
══════════════════════════════════════════════════════════════════════════════ */
export const ReviewIllustration = () => (
  <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden px-5">

    <span
      className={`${pill} absolute top-[5%] left-[4%] bg-[#6FA9D6]/12 text-[#4A6FA5] border-[#6FA9D6]/25`}
      style={{ animation: "sk-float-sm 3.3s ease-in-out 0.1s infinite", willChange: "transform" }}
    >Playback</span>
    <span
      className={`${pill} absolute top-[5%] right-[4%] bg-[#6FA9D6]/10 text-[#4A6FA5] border-[#6FA9D6]/20`}
      style={{ animation: "sk-float-sm 3.8s ease-in-out 0.6s infinite", willChange: "transform" }}
    >Transcript</span>
    <span
      className={`${pill} absolute bottom-[5%] right-[4%] bg-[#4A6FA5]/10 text-[#4A6FA5] border-[#4A6FA5]/20`}
      style={{ animation: "sk-float 3.5s ease-in-out 1s infinite", willChange: "transform" }}
    >Insights</span>

    <div className="flex flex-col items-center gap-2 z-10 w-full max-w-[88%]">

      {/* Review panel */}
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
                style={{ background: "linear-gradient(90deg,#6FA9D6,#4A6FA5)", animation: "sk-progress 7s ease-in-out infinite", willChange: "width" }}
              />
            </div>
          </div>

          {/* Right — transcript */}
          <div className="flex-1 p-2 flex flex-col gap-1 min-w-0">
            <p className="text-[7px] text-[#1F2A37]/40 uppercase tracking-widest mb-0.5">Transcript</p>
            <p
              className="text-[8px] text-[#1F2A37]/70 leading-relaxed"
              style={{ animation: "sk-line1 9s ease-in-out infinite", willChange: "opacity, transform" }}
            >I have always enjoyed public speaking.</p>
            <p
              className="text-[8px] leading-relaxed"
              style={{ animation: "sk-line2 9s ease-in-out infinite", willChange: "opacity, transform" }}
            >
              <span style={{
                textDecoration: "underline", textDecorationColor: "#DC2626",
                textDecorationStyle: "wavy", textUnderlineOffset: "2px",
                borderRadius: "2px", padding: "0 2px",
                animation: "sk-err-pulse 1.8s ease-in-out infinite",
                willChange: "background-color", display: "inline", color: "#DC2626",
              }}>She go to office yesterday.</span>
            </p>
            <p
              className="text-[8px] text-[#1F2A37]/70 leading-relaxed"
              style={{ animation: "sk-line3 9s ease-in-out infinite", willChange: "opacity, transform" }}
            >It helped me build confidence.</p>
          </div>
        </div>
      </div>

      {/* Fluency Score */}
      <div className="w-full px-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[7.5px] font-semibold text-[#1F2A37]/50 uppercase tracking-widest">Fluency Score</span>
          <span className="text-[7.5px] font-bold text-[#4A6FA5]">72%</span>
        </div>
        <div className="h-1.5 rounded-full bg-[#6FA9D6]/12 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg,#6FA9D6,#4A6FA5)", animation: "sk-score 7s ease-in-out 0.5s infinite", willChange: "width" }}
          />
        </div>
      </div>

      {/* Button */}
      <div className="relative">
        <button
          className="px-5 py-2.5 rounded-full text-white text-xs font-semibold pointer-events-none select-none whitespace-nowrap"
          style={{ background: "linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)", animation: "sk-glow 2.5s ease-in-out 1.2s infinite" }}
        >Review Session</button>
        <Cursor delay="1.2s" />
      </div>
    </div>
  </div>
);
