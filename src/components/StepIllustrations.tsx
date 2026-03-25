/* ─── Keyframes ──────────────────────────────────────────────────────────── */
const KEYFRAMES = `
  @keyframes sk-float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
  @keyframes sk-float-sm { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
  @keyframes sk-float-md { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
  @keyframes sk-glow {
    0%,100%{box-shadow:0 4px 16px -4px rgba(74,111,165,.28)}
    50%{box-shadow:0 6px 30px -2px rgba(74,111,165,.62),0 0 0 4px rgba(111,169,214,.12)}
  }
  @keyframes sk-cursor-bob {
    0%,100%{transform:translateX(-50%) translateY(0)}
    50%{transform:translateX(-50%) translateY(-4px)}
  }
  @keyframes sk-w1{0%,100%{height:2px}28%{height:10px}58%{height:4px}}
  @keyframes sk-w2{0%,100%{height:5px}18%{height:3px}52%{height:14px}}
  @keyframes sk-w3{0%,100%{height:8px}38%{height:2px}68%{height:12px}}
  @keyframes sk-w4{0%,100%{height:3px}24%{height:13px}62%{height:5px}}
  @keyframes sk-w5{0%,100%{height:2px}44%{height:8px}78%{height:3px}}
  @keyframes sk-shimmer{0%,100%{opacity:.18}50%{opacity:.7}}
  @keyframes sk-err-pulse{
    0%,100%{background-color:#fef2f2}
    50%{background-color:#fecaca}
  }
  @keyframes sk-progress{0%,4%{width:0%}48%,84%{width:38%}98%,100%{width:0%}}
  @keyframes sk-score{0%,4%{width:0%}50%,84%{width:72%}98%,100%{width:0%}}
  @keyframes sk-toast{
    0%,5%{opacity:0;transform:translateX(-50%) translateY(-8px) scale(.94)}
    18%,78%{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}
    92%,100%{opacity:0;transform:translateX(-50%) translateY(-8px) scale(.94)}
  }
  @keyframes sk-slot-pulse{0%,100%{opacity:1}50%{opacity:.5}}
  @keyframes sk-chip1{
    0%,5%{opacity:0;transform:scale(.6)}
    18%,82%{opacity:1;transform:scale(1)}
    94%,100%{opacity:0;transform:scale(.6)}
  }
  @keyframes sk-chip2{
    0%,16%{opacity:0;transform:scale(.6)}
    28%,82%{opacity:1;transform:scale(1)}
    94%,100%{opacity:0;transform:scale(.6)}
  }
  @keyframes sk-chip3{
    0%,27%{opacity:0;transform:scale(.6)}
    40%,82%{opacity:1;transform:scale(1)}
    94%,100%{opacity:0;transform:scale(.6)}
  }
  @keyframes sk-line1{
    0%,8%{opacity:0;transform:translateX(-6px)}
    22%,80%{opacity:1;transform:translateX(0)}
    94%,100%{opacity:0;transform:translateX(-6px)}
  }
  @keyframes sk-line2{
    0%,20%{opacity:0;transform:translateX(-6px)}
    36%,80%{opacity:1;transform:translateX(0)}
    94%,100%{opacity:0;transform:translateX(-6px)}
  }
  @keyframes sk-line3{
    0%,34%{opacity:0;transform:translateX(-6px)}
    50%,80%{opacity:1;transform:translateX(0)}
    94%,100%{opacity:0;transform:translateX(-6px)}
  }
  @keyframes sk-peer1{
    0%,4%{opacity:0;transform:scale(.88)}
    16%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.88)}
  }
  @keyframes sk-peer2{
    0%,16%{opacity:0;transform:scale(.88)}
    28%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.88)}
  }
  @keyframes sk-peer3{
    0%,28%{opacity:0;transform:scale(.88)}
    40%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.88)}
  }
  @keyframes sk-peer4{
    0%,40%{opacity:0;transform:scale(.88)}
    52%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.88)}
  }
  @keyframes sk-active-glow{
    0%,100%{box-shadow:0 0 0 0 rgba(111,169,214,0)}
    50%{box-shadow:0 0 0 3px rgba(111,169,214,.45)}
  }
`;

/* ─── Cursor ─────────────────────────────────────────────────────────────── */
// Always anchored at bottom:0 left:50% inside a `relative pb-5` wrapper.
// Only Y-axis moves — never escapes overflow:hidden.
const Cursor = ({ delay = "0s" }: { delay?: string }) => (
  <svg
    style={{
      position: "absolute", bottom: 0, left: "50%",
      animation: `sk-cursor-bob 2.4s ease-in-out ${delay} infinite`,
      willChange: "transform", pointerEvents: "none", userSelect: "none",
    }}
    width="11" height="13" viewBox="0 0 16 18" fill="none"
  >
    <path d="M1 1L1 15L5.5 11L13 11L1 1Z"
      fill="#1F2A37" stroke="white" strokeWidth="1.5"
      strokeLinejoin="round" strokeLinecap="round"/>
  </svg>
);

/* ─── Wave bars (used in JoinSession) ───────────────────────────────────── */
const WAVE_ANIMS = ["sk-w1","sk-w2","sk-w3","sk-w4","sk-w5"] as const;
const WAVE_DURS  = ["0.95s","1.1s","0.82s","1.25s","1.0s"]   as const;
const PEER_ANIMS = ["sk-peer1","sk-peer2","sk-peer3","sk-peer4"] as const;

/* ══════════════════════════════════════════════════════════════════════════
   STEP 1 — Book Session
   Layout (flex-col, absolute inset-0):
   ┌──────────────────────────────┐
   │ [toast centered at top]      │  ← absolute, z-20
   │  [Free]        [Affordable]  │  ← absolute pills, top ~20%
   │                              │
   │  ┌── session card ─────────┐ │  ← flex-shrink-0
   │  └─────────────────────────┘ │
   │        (flex-1 spacer)       │
   │  [Limited Slots] [Book btn]  │  ← pb-5 for cursor
   └──────────────────────────────┘
══════════════════════════════════════════════════════════════════════════════ */
export const BookSessionIllustration = () => (
  <div className="absolute inset-0 bg-white overflow-hidden flex flex-col p-3 gap-2">
    <style>{KEYFRAMES}</style>

    {/* Toast — absolute, top-center, above everything */}
    <div
      className="absolute top-2.5 left-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 shadow-sm"
      style={{ animation: "sk-toast 6s ease-in-out infinite", willChange: "opacity,transform" }}
    >
      <span className="text-[10px]">🔥</span>
      <span className="text-[8px] font-semibold text-orange-500 whitespace-nowrap">Trending today</span>
    </div>

    {/* Floating corner pills */}
    <span
      className="absolute top-[22%] left-[5%] text-[8px] font-semibold px-2 py-0.5 rounded-full border bg-[#6FA9D6]/15 text-[#4A6FA5] border-[#6FA9D6]/30"
      style={{ animation: "sk-float-sm 3.2s ease-in-out 0.3s infinite", willChange: "transform" }}
    >Free</span>
    <span
      className="absolute top-[22%] right-[5%] text-[8px] font-semibold px-2 py-0.5 rounded-full border bg-[#6FA9D6]/10 text-[#4A6FA5] border-[#6FA9D6]/25"
      style={{ animation: "sk-float-sm 3.6s ease-in-out 0.9s infinite", willChange: "transform" }}
    >Affordable</span>

    {/* Push content below the badges zone */}
    <div className="flex-shrink-0 h-[38%]" />

    {/* Session card */}
    <div
      className="flex-shrink-0 w-full rounded-2xl border border-[#6FA9D6]/30 bg-[#6FA9D6]/5 p-2.5 flex items-center justify-between gap-2"
      style={{ animation: "sk-float-sm 3.8s ease-in-out infinite", willChange: "transform" }}
    >
      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-semibold text-[#1F2A37] truncate">Stepping Out: Skill Up!</p>
        <p className="text-[7px] text-[#1F2A37]/50 mt-0.5 truncate">Choose a session best suited to your time</p>
      </div>
      <p className="text-[7px] text-[#4A6FA5] font-medium flex-shrink-0">7:00 – 8:00 PM</p>
    </div>

    {/* Spacer */}
    <div className="flex-1"/>

    {/* Bottom row: urgency pill + CTA */}
    <div className="flex-shrink-0 flex items-center justify-between pb-5">
      <span
        className="text-[8px] font-semibold px-2 py-0.5 rounded-full border bg-[#4A6FA5]/10 text-[#4A6FA5] border-[#4A6FA5]/20"
        style={{ animation: "sk-slot-pulse 1.6s ease-in-out infinite", willChange: "opacity" }}
      >Limited Slots</span>
      <div className="relative">
        <button
          className="px-4 py-1.5 rounded-full text-white text-[9px] font-semibold pointer-events-none select-none whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)",
            animation: "sk-glow 2.5s ease-in-out infinite",
            willChange: "box-shadow",
          }}
        >Add to Session</button>
        <Cursor />
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════
   STEP 2 — Prepare Session
   Layout (flex-col, absolute inset-0):
   ┌──────────────────────────────┐
   │  [Key Points]   [Vocabulary] │  ← absolute pills
   │  [Practice Ready]            │  ← absolute pill
   │  ┌── content card ─────────┐ │  ← flex-1, fills middle
   │  │  chips + shimmer lines  │ │
   │  └─────────────────────────┘ │
   │        [Start Preparing]     │  ← pb-5 for cursor
   └──────────────────────────────┘
══════════════════════════════════════════════════════════════════════════════ */
export const PrepareSessionIllustration = () => (
  <div className="absolute inset-0 bg-white overflow-hidden flex flex-col gap-2 p-3">

    {/* Floating pills */}
    <span
      className="absolute top-[7%] left-[4%] text-[8px] font-semibold px-2 py-0.5 rounded-full border bg-[#6FA9D6]/12 text-[#4A6FA5] border-[#6FA9D6]/25"
      style={{ animation: "sk-float-sm 3.4s ease-in-out 0.2s infinite", willChange: "transform" }}
    >Key Points</span>
    <span
      className="absolute top-[7%] right-[4%] text-[8px] font-semibold px-2 py-0.5 rounded-full border bg-[#6FA9D6]/10 text-[#4A6FA5] border-[#6FA9D6]/20"
      style={{ animation: "sk-float-sm 3.8s ease-in-out 0.7s infinite", willChange: "transform" }}
    >Vocabulary</span>
    <span
      className="absolute bottom-[7%] left-[4%] text-[8px] font-semibold px-2 py-0.5 rounded-full border bg-[#4A6FA5]/10 text-[#4A6FA5] border-[#4A6FA5]/20"
      style={{ animation: "sk-float 3.5s ease-in-out 1.1s infinite", willChange: "transform" }}
    >Practice Ready</span>

    {/* Spacer to clear top badges */}
    <div className="flex-shrink-0 h-[12%]" />

    {/* Content card — flex-1 fills all middle space */}
    <div
      className="flex-1 min-h-0 w-full rounded-2xl border border-[#6FA9D6]/25 bg-white shadow-sm p-2.5 flex flex-col gap-2 overflow-hidden"
      style={{ animation: "sk-float-sm 4s ease-in-out infinite", willChange: "transform" }}
    >
      <div className="flex items-start justify-between gap-1 flex-shrink-0">
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-bold text-[#1F2A37] truncate">Understanding Gender Equality</p>
          <p className="text-[7px] text-[#1F2A37]/45 mt-0.5 truncate">Key points, vocabulary, and examples</p>
        </div>
        <span className="flex-shrink-0 text-[7px] font-semibold px-1.5 py-0.5 rounded-full bg-violet-50 text-violet-500 border border-violet-200">
          ✦ AI
        </span>
      </div>

      <div className="flex flex-wrap gap-1 flex-shrink-0">
        {(["Vocabulary","Idioms","Grammar Tips"] as const).map((label, i) => (
          <span
            key={label}
            className="text-[7px] font-semibold px-1.5 py-0.5 rounded-full bg-[#6FA9D6]/10 text-[#4A6FA5] border border-[#6FA9D6]/20"
            style={{ animation: `sk-chip${i+1} 8s ease-in-out infinite`, willChange: "opacity,transform" }}
          >{label}</span>
        ))}
      </div>

      {/* Shimmer preview lines — flex-1 fills remaining card space */}
      <div className="flex-1 flex flex-col gap-1.5 justify-center min-h-0 overflow-hidden">
        {(["60%","80%","45%"] as const).map((w, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-[#6FA9D6]/50 flex-shrink-0"/>
            <div
              className="h-1.5 rounded-full bg-[#1F2A37]/10"
              style={{ width: w, animation: `sk-shimmer 1.8s ease-in-out ${i*0.35}s infinite`, willChange: "opacity" }}
            />
          </div>
        ))}
      </div>
    </div>

    {/* CTA — pb-5 gives cursor 20px clearance inside overflow:hidden */}
    <div className="relative flex justify-center pb-5 flex-shrink-0">
      <button
        className="px-4 py-1.5 rounded-full text-white text-[9px] font-semibold pointer-events-none select-none whitespace-nowrap"
        style={{
          background: "linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)",
          animation: "sk-glow 2.5s ease-in-out 0.4s infinite",
          willChange: "box-shadow",
        }}
      >Start Preparing</button>
      <Cursor delay="0.4s"/>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════
   STEP 3 — Join Session
   Layout (flex-col, absolute inset-0):
   ┌──────────────────────────────┐
   │  [Live]         [Real-time]  │  ← absolute pills top
   │  [Peers Connected]           │  ← absolute pill bottom
   │        (top spacer)          │
   │  ┌── laptop frame ─────────┐ │  ← flex-1, fills middle
   │  │  2×2 peer video grid    │ │
   │  └─────────────────────────┘ │
   │     [Join Session btn]       │  ← pb-5 for cursor
   └──────────────────────────────┘
══════════════════════════════════════════════════════════════════════════════ */
export const JoinSessionIllustration = () => (
  <div className="absolute inset-0 bg-white overflow-hidden flex flex-col gap-2 p-3">

    {/* Floating pills */}
    <span
      className="absolute top-[7%] left-[5%] flex items-center gap-1 text-[8px] font-semibold px-2 py-0.5 rounded-full border bg-rose-50 text-rose-500 border-rose-200"
      style={{ animation: "sk-float-sm 3.2s ease-in-out infinite", willChange: "transform" }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" style={{ animation: "sk-slot-pulse 1.2s ease-in-out infinite", willChange: "opacity" }}/>
      Live
    </span>
    <span
      className="absolute top-[7%] right-[5%] text-[8px] font-semibold px-2 py-0.5 rounded-full border bg-[#6FA9D6]/10 text-[#4A6FA5] border-[#6FA9D6]/20"
      style={{ animation: "sk-float-sm 3.7s ease-in-out 0.5s infinite", willChange: "transform" }}
    >Real-time</span>
    <span
      className="absolute bottom-[7%] left-[5%] text-[8px] font-semibold px-2 py-0.5 rounded-full border bg-[#4A6FA5]/10 text-[#4A6FA5] border-[#4A6FA5]/20"
      style={{ animation: "sk-float-md 4s ease-in-out 0.9s infinite", willChange: "transform" }}
    >Peers Connected</span>

    {/* Spacer to clear top badge zone */}
    <div className="flex-shrink-0 h-[12%]"/>

    {/* Laptop — flex-1 fills all available height */}
    <div className="flex-1 min-h-0 overflow-hidden">
      <div className="w-full h-full rounded-xl border-2 border-[#1F2A37]/12 bg-[#f4f8fc] overflow-hidden flex flex-col shadow-sm">
        {/* macOS-style window bar */}
        <div className="h-3 bg-[#1F2A37]/7 flex items-center px-2 gap-1 flex-shrink-0">
          {([0.2,0.15,0.1] as const).map((o,i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1F2A37]" style={{ opacity: o }}/>
          ))}
        </div>
        {/* 2×2 peer grid — grid-rows-2 splits height equally */}
        <div className="grid grid-cols-2 grid-rows-2 gap-1 p-1.5 flex-1 min-h-0">
          {([true,false,false,false] as const).map((active, i) => (
            <div
              key={i}
              className="rounded-lg relative overflow-hidden flex flex-col items-center justify-center"
              style={{
                background: active ? "linear-gradient(135deg,#6FA9D6,#4A6FA5)" : "#e8f0f8",
                animation: `${PEER_ANIMS[i]} 10s ease-in-out infinite${active ? ", sk-active-glow 2.2s ease-in-out infinite" : ""}`,
                willChange: "opacity,transform,box-shadow",
              }}
            >
              <svg width="14" height="18" viewBox="0 0 28 32" fill="none">
                <ellipse cx="14" cy="11" rx="7" ry="8"
                  fill={active ? "rgba(255,255,255,0.35)" : "#6FA9D6"} opacity="0.7"/>
                <ellipse cx="14" cy="28" rx="11" ry="7"
                  fill={active ? "rgba(255,255,255,0.2)"  : "#6FA9D6"} opacity="0.4"/>
              </svg>
              {active ? (
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5 items-end h-3">
                  {WAVE_ANIMS.map((anim, j) => (
                    <div key={j} className="w-0.5 rounded-full bg-white/75"
                      style={{ height:"2px", animation:`${anim} ${WAVE_DURS[j]} ease-in-out ${j*0.08}s infinite`, willChange:"height" }}/>
                  ))}
                </div>
              ) : (
                <span className="absolute bottom-1 text-[5px] text-[#6FA9D6]/70 font-medium">⊙ Ready</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Laptop stand decorations */}
    {/*<div className="flex-shrink-0 mx-auto w-[60%] h-1.5 rounded-b bg-[#1F2A37]/10"/>
    <div className="flex-shrink-0 mx-auto w-[80%] h-0.5 rounded-b bg-[#1F2A37]/6"/>*/}

    {/* CTA */}
    <div className="relative flex justify-center pb-5 flex-shrink-0">
      <button
        className="px-4 py-1.5 rounded-full text-white text-[9px] font-semibold pointer-events-none select-none whitespace-nowrap"
        style={{
          background: "linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)",
          animation: "sk-glow 2.5s ease-in-out 0.8s infinite",
          willChange: "box-shadow",
        }}
      >Join Session</button>
      <Cursor delay="0.8s"/>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════
   STEP 4 — Review & Improve
   Layout (flex-col, absolute inset-0):
   ┌──────────────────────────────┐
   │  [Playback]   [Transcript]   │  ← absolute pills
   │              [Insights]      │  ← absolute pill bottom
   │  ┌── recording panel ──────┐ │  ← flex-1 fills middle
   │  │  [video] │ [transcript] │ │
   │  └─────────────────────────┘ │
   │  ── Fluency Score bar ──────  │  ← flex-shrink-0
   │        [Review Session]      │  ← pb-5 for cursor
   └──────────────────────────────┘
══════════════════════════════════════════════════════════════════════════════ */
export const ReviewIllustration = () => (
  <div className="absolute inset-0 bg-white overflow-hidden flex flex-col gap-2 p-3">

    {/* Floating pills */}
    <span
      className="absolute top-[7%] left-[4%] text-[8px] font-semibold px-2 py-0.5 rounded-full border bg-[#6FA9D6]/12 text-[#4A6FA5] border-[#6FA9D6]/25"
      style={{ animation: "sk-float-sm 3.3s ease-in-out 0.1s infinite", willChange: "transform" }}
    >Playback</span>
    <span
      className="absolute top-[7%] right-[4%] text-[8px] font-semibold px-2 py-0.5 rounded-full border bg-[#6FA9D6]/10 text-[#4A6FA5] border-[#6FA9D6]/20"
      style={{ animation: "sk-float-sm 3.8s ease-in-out 0.6s infinite", willChange: "transform" }}
    >Transcript</span>
    <span
      className="absolute bottom-[7%] right-[4%] text-[8px] font-semibold px-2 py-0.5 rounded-full border bg-[#4A6FA5]/10 text-[#4A6FA5] border-[#4A6FA5]/20"
      style={{ animation: "sk-float 3.5s ease-in-out 1s infinite", willChange: "transform" }}
    >Insights</span>

    {/* Spacer to clear top badge zone */}
    <div className="flex-shrink-0 h-[12%]"/>

    {/* Recording panel — flex-1 fills middle */}
    <div className="flex-1 min-h-0 w-full rounded-2xl border border-[#6FA9D6]/25 bg-white shadow-sm overflow-hidden flex flex-col">
      {/* Panel header */}
      <div className="flex-shrink-0 px-2.5 py-1 border-b border-[#6FA9D6]/15 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#6FA9D6] flex-shrink-0"/>
        <p className="text-[6.5px] font-bold uppercase tracking-widest text-[#1F2A37]/45 truncate">
          Session Recording & Transcript
        </p>
      </div>
      {/* Two-column body */}
      <div className="flex flex-1 min-h-0 divide-x divide-[#6FA9D6]/15">
        {/* Video + progress */}
        <div className="flex-1 p-1.5 flex flex-col gap-1.5 min-w-0 min-h-0">
          <div className="flex-1 rounded-lg bg-[#e8f0f8] relative overflow-hidden flex items-center justify-center min-h-0">
            <div className="absolute inset-0 flex items-end p-1.5 gap-1">
              {(["#6FA9D6","#4A6FA5","#6FA9D6"] as const).map((c, i) => (
                <div key={i} className="flex-1 rounded" style={{ height:`${28+i*14}%`, background:c, opacity:0.22 }}/>
              ))}
            </div>
            <div className="w-6 h-6 rounded-full bg-white/90 shadow flex items-center justify-center z-10">
              <svg width="7" height="9" viewBox="0 0 8 10" fill="none">
                <path d="M1 1L7 5L1 9V1Z" fill="#4A6FA5"/>
              </svg>
            </div>
            <span className="absolute top-1.5 right-1.5 text-[5.5px] font-mono font-bold text-white bg-black/30 px-1 py-0.5 rounded">24:18</span>
          </div>
          <div className="flex-shrink-0 h-1 rounded-full bg-[#6FA9D6]/15 overflow-hidden">
            <div className="h-full rounded-full"
              style={{ background:"linear-gradient(90deg,#6FA9D6,#4A6FA5)", animation:"sk-progress 7s ease-in-out infinite", willChange:"width" }}/>
          </div>
        </div>

        {/* Transcript */}
        <div className="flex-1 p-1.5 flex flex-col gap-1 min-w-0 overflow-hidden">
          <p className="text-[6.5px] font-bold text-[#1F2A37]/40 uppercase tracking-widest flex-shrink-0">Transcript</p>
          <p className="text-[7.5px] text-[#1F2A37]/70 leading-relaxed"
            style={{ animation:"sk-line1 9s ease-in-out infinite", willChange:"opacity,transform" }}>
            I have always enjoyed public speaking.
          </p>
          <p className="text-[7.5px] leading-relaxed"
            style={{ animation:"sk-line2 9s ease-in-out infinite", willChange:"opacity,transform" }}>
            <span style={{
              textDecoration:"underline", textDecorationColor:"#DC2626",
              textDecorationStyle:"wavy", textUnderlineOffset:"2px",
              color:"#DC2626", padding:"0 2px", borderRadius:"2px",
              animation:"sk-err-pulse 1.8s ease-in-out infinite",
              willChange:"background-color",
            }}>She go to office yesterday.</span>
          </p>
          <p className="text-[7.5px] text-[#1F2A37]/70 leading-relaxed"
            style={{ animation:"sk-line3 9s ease-in-out infinite", willChange:"opacity,transform" }}>
            It helped me build confidence.
          </p>
        </div>
      </div>
    </div>

    {/* Fluency score bar */}
    <div className="flex-shrink-0">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[7px] font-semibold text-[#1F2A37]/45 uppercase tracking-widest">Fluency Score</span>
        <span className="text-[7px] font-bold text-[#4A6FA5]">72%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#6FA9D6]/12 overflow-hidden">
        <div className="h-full rounded-full"
          style={{ background:"linear-gradient(90deg,#6FA9D6,#4A6FA5)", animation:"sk-score 7s ease-in-out 0.5s infinite", willChange:"width" }}/>
      </div>
    </div>

    {/* CTA */}
    <div className="relative flex justify-center pb-5 flex-shrink-0">
      <button
        className="px-4 py-1.5 rounded-full text-white text-[9px] font-semibold pointer-events-none select-none whitespace-nowrap"
        style={{
          background: "linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)",
          animation: "sk-glow 2.5s ease-in-out 1.2s infinite",
          willChange: "box-shadow",
        }}
      >Review Session</button>
      <Cursor delay="1.2s"/>
    </div>
  </div>
);