import { motion } from "framer-motion";

/* ─── Keyframes ────────────────────────────────────────────────────────────── */
const KEYFRAMES = `
  @keyframes ft-glow {
    0%,100%{box-shadow:0 4px 16px -4px rgba(74,111,165,.28)}
    50%{box-shadow:0 6px 30px -2px rgba(74,111,165,.62),0 0 0 4px rgba(111,169,214,.12)}
  }
  @keyframes ft-cursor-bob {
    0%,100%{transform:translateX(-50%) translateY(0)}
    50%{transform:translateX(-50%) translateY(-4px)}
  }
  @keyframes ft-blink{0%,100%{opacity:1}45%,55%{opacity:0}}
  @keyframes ft-shimmer{0%,100%{opacity:.18}50%{opacity:.7}}
  @keyframes ft-type{0%,5%{width:0%}50%,90%{width:100%}95%,100%{width:0%}}
  @keyframes ft-card1{
    0%,8%{opacity:0;transform:translateY(6px)}
    24%,85%{opacity:1;transform:translateY(0)}
    96%,100%{opacity:0;transform:translateY(6px)}
  }
  @keyframes ft-card2{
    0%,22%{opacity:0;transform:translateY(6px)}
    38%,85%{opacity:1;transform:translateY(0)}
    96%,100%{opacity:0;transform:translateY(6px)}
  }
  @keyframes ft-slot-pulse{0%,100%{opacity:1}50%{opacity:.4}}
  @keyframes ft-live{
    0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,0)}
    50%{box-shadow:0 0 0 3px rgba(239,68,68,.22)}
  }
  @keyframes ft-progress{0%,4%{width:0%}48%,84%{width:55%}98%,100%{width:0%}}
  @keyframes ft-score{0%,4%{width:0%}50%,84%{width:68%}98%,100%{width:0%}}
  @keyframes ft-vocab{0%,4%{width:0%}50%,84%{width:82%}98%,100%{width:0%}}
  @keyframes ft-grammar{0%,4%{width:0%}50%,84%{width:54%}98%,100%{width:0%}}
  @keyframes ft-line1{
    0%,8%{opacity:0;transform:translateX(-6px)}
    22%,80%{opacity:1;transform:translateX(0)}
    94%,100%{opacity:0;transform:translateX(-6px)}
  }
  @keyframes ft-line2{
    0%,20%{opacity:0;transform:translateX(-6px)}
    36%,80%{opacity:1;transform:translateX(0)}
    94%,100%{opacity:0;transform:translateX(-6px)}
  }
  @keyframes ft-line3{
    0%,34%{opacity:0;transform:translateX(-6px)}
    50%,80%{opacity:1;transform:translateX(0)}
    94%,100%{opacity:0;transform:translateX(-6px)}
  }
  @keyframes ft-w1{0%,100%{height:2px}28%{height:10px}58%{height:4px}}
  @keyframes ft-w2{0%,100%{height:5px}18%{height:3px}52%{height:14px}}
  @keyframes ft-w3{0%,100%{height:8px}38%{height:2px}68%{height:12px}}
  @keyframes ft-w4{0%,100%{height:3px}24%{height:13px}62%{height:5px}}
  @keyframes ft-w5{0%,100%{height:2px}44%{height:8px}78%{height:3px}}
  @keyframes ft-peer1{
    0%,4%{opacity:0;transform:scale(.88)}
    16%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.88)}
  }
  @keyframes ft-peer2{
    0%,16%{opacity:0;transform:scale(.88)}
    28%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.88)}
  }
  @keyframes ft-peer3{
    0%,28%{opacity:0;transform:scale(.88)}
    40%,84%{opacity:1;transform:scale(1)}
    96%,100%{opacity:0;transform:scale(.88)}
  }
  @keyframes ft-host-glow{
    0%,100%{box-shadow:0 0 0 0 rgba(74,111,165,0)}
    50%{box-shadow:0 0 0 3px rgba(74,111,165,.4)}
  }
  @keyframes ft-chip1{
    0%,5%{opacity:0;transform:scale(.6)}
    18%,82%{opacity:1;transform:scale(1)}
    94%,100%{opacity:0;transform:scale(.6)}
  }
  @keyframes ft-chip2{
    0%,16%{opacity:0;transform:scale(.6)}
    28%,82%{opacity:1;transform:scale(1)}
    94%,100%{opacity:0;transform:scale(.6)}
  }
  @keyframes ft-chip3{
    0%,27%{opacity:0;transform:scale(.6)}
    40%,82%{opacity:1;transform:scale(1)}
    94%,100%{opacity:0;transform:scale(.6)}
  }
  @keyframes ft-err-pulse{0%,100%{background-color:transparent}50%{background-color:#fecaca}}
`;

/* ─── Shared ────────────────────────────────────────────────────────────── */
const WAVE_ANIMS = ["ft-w1","ft-w2","ft-w3","ft-w4","ft-w5"] as const;
const WAVE_DURS  = ["0.95s","1.1s","0.82s","1.25s","1.0s"]   as const;

// Cursor always anchored at bottom:0 left:50% inside a relative pb-5 wrapper.
// Only Y-axis animates so it never escapes overflow:hidden.
const Cursor = ({ delay = "0s" }: { delay?: string }) => (
  <svg
    style={{
      position:"absolute", bottom:0, left:"50%",
      animation:`ft-cursor-bob 2.4s ease-in-out ${delay} infinite`,
      willChange:"transform", pointerEvents:"none", userSelect:"none",
    }}
    width="11" height="13" viewBox="0 0 16 18" fill="none"
  >
    <path d="M1 1L1 15L5.5 11L13 11L1 1Z"
      fill="#1F2A37" stroke="white" strokeWidth="1.5"
      strokeLinejoin="round" strokeLinecap="round"/>
  </svg>
);

/* ─── Shared sub-components used by RecordingsIllustration ─────────────── */
const TranscriptLines = () => (
  <>
    <p className="text-[7px] font-bold text-[#1F2A37]/40 uppercase tracking-widest flex-shrink-0">Transcript</p>
    <p className="text-[8px] text-[#1F2A37]/70 leading-relaxed"
      style={{animation:"ft-line1 9s ease-in-out infinite",willChange:"opacity,transform"}}>
      I spoke clearly this session.
    </p>
    <p className="text-[8px] leading-relaxed"
      style={{animation:"ft-line2 9s ease-in-out infinite",willChange:"opacity,transform"}}>
      <span style={{
        textDecoration:"underline",textDecorationColor:"#DC2626",
        textDecorationStyle:"wavy",textUnderlineOffset:"2px",
        color:"#DC2626",padding:"0 2px",borderRadius:"2px",
        animation:"ft-err-pulse 1.8s ease-in-out infinite",
        willChange:"background-color",
      }}>She go to office yesterday.</span>
    </p>
    <p className="text-[8px] text-[#1F2A37]/70 leading-relaxed"
      style={{animation:"ft-line3 9s ease-in-out infinite",willChange:"opacity,transform"}}>
      Great vocabulary overall!
    </p>
  </>
);

const ScorePanel = ({ className = "" }: { className?: string }) => (
  <div className={`bg-white rounded-xl border border-[#6FA9D6]/20 p-2.5 flex flex-col gap-1.5 overflow-hidden ${className}`}>
    <div className="flex items-center justify-between flex-shrink-0">
      <span className="text-[6.5px] font-bold text-[#1F2A37]/40 uppercase tracking-widest">Fluency</span>
      <span className="text-[9px] font-bold text-[#4A6FA5]">68%</span>
    </div>
    <div className="h-1.5 rounded-full bg-[#6FA9D6]/12 overflow-hidden flex-shrink-0">
      <div className="h-full rounded-full"
        style={{background:"linear-gradient(90deg,#6FA9D6,#4A6FA5)",animation:"ft-score 7s ease-in-out 0.5s infinite",willChange:"width"}}/>
    </div>
    <div className="flex flex-col gap-1 flex-shrink-0">
      {([["Vocab","82%","#10b981","ft-vocab"],["Grammar","54%","#f59e0b","ft-grammar"]] as const).map(([label,val,color,anim])=>(
        <div key={label} className="flex items-center gap-1">
          <span className="text-[5.5px] text-[#1F2A37]/40 w-7 flex-shrink-0">{label}</span>
          <div className="flex-1 h-1 rounded-full bg-[#1F2A37]/8 overflow-hidden">
            <div className="h-full rounded-full"
              style={{background:color,animation:`${anim} 7s ease-in-out 0.3s infinite`,willChange:"width"}}/>
          </div>
          <span className="text-[5.5px] font-bold flex-shrink-0" style={{color}}>{val}</span>
        </div>
      ))}
    </div>
  </div>
);

const VideoPanel = ({ className = "" }: { className?: string }) => (
  <div className={`rounded-xl bg-[#e8f0f8] relative overflow-hidden flex items-center justify-center ${className}`}>
    <div className="absolute inset-0 flex items-end p-2 gap-1">
      {(["#6FA9D6","#4A6FA5","#6FA9D6"] as const).map((c,i)=>(
        <div key={i} className="flex-1 rounded" style={{height:`${28+i*14}%`,background:c,opacity:0.22}}/>
      ))}
    </div>
    <div className="w-7 h-7 rounded-full bg-white/90 shadow-sm flex items-center justify-center z-10">
      <svg width="7" height="9" viewBox="0 0 8 10" fill="none">
        <path d="M1 1L7 5L1 9V1Z" fill="#4A6FA5"/>
      </svg>
    </div>
    <span className="absolute top-1.5 right-1.5 text-[6px] font-mono font-bold text-white bg-black/30 px-1.5 py-0.5 rounded">24:18</span>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════
   ILLUSTRATION 1 — Generate & Save
   Desktop (wide, ~3.5:1): flex-row  → prompt panel | saved cards
   Mobile  (full-width):   flex-col  → prompt panel stacked above saved cards
══════════════════════════════════════════════════════════════════════════════ */
const GenerateSaveIllustration = () => (
  <div className="absolute inset-0 bg-[#f4f8fc] flex flex-col md:flex-row gap-2.5 p-3 overflow-hidden">

    {/* Prompt panel */}
    <div className="flex-1 min-w-0 min-h-0 bg-white rounded-xl border border-[#6FA9D6]/20 shadow-sm p-3 flex flex-col gap-2 overflow-hidden">
      <div className="flex items-center justify-between gap-1 flex-shrink-0">
        <p className="text-[8px] font-bold text-[#1F2A37]">Generate Activity</p>
        <span className="text-[7px] font-semibold px-1.5 py-0.5 rounded-full bg-violet-50 text-violet-500 border border-violet-200">✦ AI</span>
      </div>
      <div className="flex-shrink-0 rounded-lg bg-[#f4f8fc] border border-[#6FA9D6]/15 px-2.5 py-1.5 flex items-center gap-1.5 overflow-hidden">
        <div className="flex-1 h-1.5 rounded-full bg-[#1F2A37]/10 overflow-hidden">
          <div className="h-full rounded-full bg-[#4A6FA5]/40"
            style={{animation:"ft-type 5s ease-in-out infinite",willChange:"width"}}/>
        </div>
        <div className="w-px h-3 bg-[#4A6FA5] flex-shrink-0"
          style={{animation:"ft-blink 1s ease-in-out infinite",willChange:"opacity"}}/>
      </div>
      <div className="flex flex-wrap gap-1 flex-shrink-0">
        {(["Vocabulary","Grammar","Advanced"] as const).map((label,i)=>(
          <span key={label}
            className="text-[7px] font-medium px-1.5 py-0.5 rounded-full bg-[#6FA9D6]/10 text-[#4A6FA5] border border-[#6FA9D6]/20"
            style={{animation:`ft-chip${i+1} 8s ease-in-out infinite`,willChange:"opacity,transform"}}>
            {label}
          </span>
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-1.5 justify-center min-h-0 overflow-hidden">
        {([["80%","0"],["60%","0.3"],["70%","0.6"]] as const).map(([w,d],i)=>(
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-[#6FA9D6]/40 flex-shrink-0"/>
            <div className="h-1.5 rounded-full bg-[#1F2A37]/10"
              style={{width:w,animation:`ft-shimmer 1.8s ease-in-out ${d}s infinite`,willChange:"opacity"}}/>
          </div>
        ))}
      </div>
    </div>

    {/* Saved cards */}
    <div className="flex-1 min-w-0 min-h-0 flex flex-col gap-1.5 overflow-hidden">
      <p className="text-[7px] font-semibold text-[#1F2A37]/40 uppercase tracking-widest flex-shrink-0">Saved</p>
      {([
        {title:"Climate Discussion",tag:"Advanced",    anim:"ft-card1"},
        {title:"Job Interview Prep", tag:"Intermediate",anim:"ft-card2"},
      ] as const).map(({title,tag,anim})=>(
        <div key={title}
          className="flex-shrink-0 flex items-center justify-between rounded-xl border border-[#6FA9D6]/20 bg-white px-2.5 py-2 shadow-sm"
          style={{animation:`${anim} 8s ease-in-out infinite`,willChange:"opacity,transform"}}>
          <div className="min-w-0 flex-1">
            <p className="text-[8px] font-semibold text-[#1F2A37] truncate">{title}</p>
            <p className="text-[7px] text-[#1F2A37]/40">{tag}</p>
          </div>
          <div className="w-5 h-5 rounded-full bg-[#6FA9D6]/15 flex items-center justify-center flex-shrink-0 ml-2">
            <svg width="8" height="10" viewBox="0 0 10 12" fill="none">
              <path d="M2 1h6a1 1 0 011 1v9l-4-2.5L1 11V2a1 1 0 011-1z"
                stroke="#4A6FA5" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-1.5 mt-auto flex-shrink-0">
        <div className="flex-1 h-px bg-[#6FA9D6]/20"/>
        <span className="text-[6.5px] text-[#4A6FA5]/50 font-medium whitespace-nowrap">+ generate more</span>
        <div className="flex-1 h-px bg-[#6FA9D6]/20"/>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════
   ILLUSTRATION 2 — Join Sessions
   Always flex-col. Session list is flex-1 so it fills all available space.
   Works for both desktop (~1:1 portrait) and mobile (wide landscape).
══════════════════════════════════════════════════════════════════════════════ */
const JoinSessionsIllustration = () => (
  <div className="absolute inset-0 bg-white flex flex-col gap-2 p-3 overflow-hidden">
    <div className="flex items-center justify-between flex-shrink-0">
      <span
        className="flex items-center gap-1 text-[7.5px] font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded-full border border-rose-200"
        style={{animation:"ft-live 2s ease-in-out infinite",willChange:"box-shadow"}}>
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0"
          style={{animation:"ft-slot-pulse 1.2s ease-in-out infinite",willChange:"opacity"}}/>
        Live Now
      </span>
      <span className="text-[7.5px] font-semibold text-[#4A6FA5] bg-[#6FA9D6]/10 px-2 py-1 rounded-full border border-[#6FA9D6]/20">
        4 Open
      </span>
    </div>

    {/* Session rows – flex-1 fills all middle space */}
    <div className="flex-1 flex flex-col gap-1.5 min-h-0 overflow-hidden">
      {([
        {title:"Climate Change Debate",  time:"7:00 PM",live:true, peers:3,anim:"ft-peer1"},
        {title:"Job Interview Practice", time:"7:30 PM",live:false,peers:1,anim:"ft-peer2"},
        {title:"Storytelling Circle",    time:"8:00 PM",live:false,peers:2,anim:"ft-peer3"},
      ] as const).map(({title,time,live,peers,anim})=>(
        <div key={title}
          className={`flex-shrink-0 flex items-center justify-between rounded-xl border px-2.5 py-1.5 ${
            live ? "border-rose-200 bg-rose-50/40" : "border-[#6FA9D6]/20 bg-[#f4f8fc]"
          }`}
          style={{animation:`${anim} 10s ease-in-out infinite`,willChange:"opacity,transform"}}>
          <div className="min-w-0 flex-1">
            <p className="text-[8px] font-semibold text-[#1F2A37] truncate">{title}</p>
            <p className="text-[7px] text-[#1F2A37]/40">{time} · {peers} {peers===1?"peer":"peers"}</p>
          </div>
          {live&&(
            <span className="flex-shrink-0 text-[6.5px] font-bold text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded-full border border-rose-200 ml-1">
              LIVE
            </span>
          )}
        </div>
      ))}
    </div>

    {/* CTA – pb-5 gives the cursor 20px clearance inside overflow:hidden */}
    <div className="relative flex justify-center pb-5 flex-shrink-0">
      <button
        className="px-4 py-1.5 rounded-full text-white text-[9px] font-semibold pointer-events-none select-none"
        style={{background:"linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)",animation:"ft-glow 2.5s ease-in-out 0.5s infinite",willChange:"box-shadow"}}>
        Join Session
      </button>
      <Cursor delay="0.5s"/>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════
   ILLUSTRATION 3 — Host a Session
   Always flex-col. Video grid is flex-1 so it stretches to fill space.
   grid-rows-2 on the 2×2 cells ensures equal row heights regardless of
   the container's actual pixel height.
══════════════════════════════════════════════════════════════════════════════ */
const HostSessionIllustration = () => (
  <div className="absolute inset-0 bg-white flex flex-col gap-2 p-3 overflow-hidden">
    <div className="flex items-center justify-between flex-shrink-0">
      <span className="text-[7.5px] font-bold text-[#4A6FA5] bg-[#4A6FA5]/10 px-2 py-1 rounded-full border border-[#4A6FA5]/20">
        You're Host
      </span>
      <span className="flex items-center gap-1 text-[7.5px] font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded-full border border-rose-200">
        <span className="w-1 h-1 rounded-full bg-rose-500 flex-shrink-0"
          style={{animation:"ft-slot-pulse 1.2s ease-in-out infinite",willChange:"opacity"}}/>
        Rec
      </span>
    </div>

    {/* Video grid – flex-1 takes all middle space */}
    <div className="flex-1 min-h-0 overflow-hidden">
      <div className="w-full h-full rounded-xl border-2 border-[#1F2A37]/10 bg-[#f4f8fc] overflow-hidden flex flex-col">
        {/* macOS-style window bar */}
        <div className="h-3 bg-[#1F2A37]/6 flex items-center px-2 gap-1 flex-shrink-0">
          {([0.18,0.12,0.08] as const).map((o,i)=>(
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1F2A37]" style={{opacity:o}}/>
          ))}
        </div>
        {/* 2×2 grid — grid-rows-2 divides height equally */}
        <div className="grid grid-cols-2 grid-rows-2 gap-1 p-1.5 flex-1 min-h-0">
          {([true,false,false,false] as const).map((isHost,i)=>(
            <div key={i}
              className="rounded-lg relative overflow-hidden flex flex-col items-center justify-center"
              style={{
                background: isHost ? "linear-gradient(135deg,#4A6FA5,#6FA9D6)" : "#e8f0f8",
                animation:  isHost ? "ft-host-glow 2.2s ease-in-out infinite" : `ft-peer${i} 10s ease-in-out infinite`,
                willChange:"box-shadow,opacity,transform",
              }}>
              <svg width="14" height="18" viewBox="0 0 28 32" fill="none">
                <ellipse cx="14" cy="11" rx="7"  ry="8" fill={isHost?"rgba(255,255,255,0.35)":"#6FA9D6"} opacity="0.7"/>
                <ellipse cx="14" cy="28" rx="11" ry="7" fill={isHost?"rgba(255,255,255,0.2)":"#6FA9D6"}  opacity="0.4"/>
              </svg>
              {isHost ? (
                <>
                  <span className="absolute top-1 left-1 text-[5px] font-bold text-white/90 bg-white/20 px-1 py-0.5 rounded-full">HOST</span>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5 items-end h-3">
                    {WAVE_ANIMS.map((anim,j)=>(
                      <div key={j} className="w-0.5 rounded-full bg-white/75"
                        style={{height:"2px",animation:`${anim} ${WAVE_DURS[j]} ease-in-out ${j*0.08}s infinite`,willChange:"height"}}/>
                    ))}
                  </div>
                </>
              ):(
                <span className="absolute bottom-1 text-[5px] text-[#6FA9D6]/70 font-medium">⊙ Ready</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between flex-shrink-0">
      <span className="text-[7.5px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
        3 Joined
      </span>
      <div className="relative pb-5">
        <button
          className="px-4 py-1.5 rounded-full text-white text-[9px] font-semibold pointer-events-none select-none"
          style={{background:"linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)",animation:"ft-glow 2.5s ease-in-out 0.8s infinite",willChange:"box-shadow"}}>
          Start Hosting
        </button>
        <Cursor delay="0.8s"/>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════
   ILLUSTRATION 4 — Recordings
   Two completely separate layouts rendered via md:hidden / hidden md:flex
   because the arrangements are fundamentally different:

   Mobile  (flex-col): video thumb (fixed h) → progress → transcript (flex-1)
                       → score + button side-by-side
   Desktop (flex-row): video column (flex-1) | transcript (flex-1)
                       | score + button column (fixed w)
══════════════════════════════════════════════════════════════════════════════ */
const RecordingsIllustration = () => (
  <div className="absolute inset-0 bg-[#f4f8fc] overflow-hidden">

    {/* ── MOBILE layout ── */}
    <div className="md:hidden h-full flex flex-col gap-2 p-3">
      <VideoPanel className="flex-shrink-0 h-16"/>
      <div className="flex-shrink-0 h-1.5 rounded-full bg-[#6FA9D6]/15 overflow-hidden">
        <div className="h-full rounded-full"
          style={{background:"linear-gradient(90deg,#6FA9D6,#4A6FA5)",animation:"ft-progress 7s ease-in-out infinite",willChange:"width"}}/>
      </div>
      <div className="flex-1 min-h-0 bg-white rounded-xl border border-[#6FA9D6]/20 p-2.5 flex flex-col gap-1 overflow-hidden">
        <TranscriptLines/>
      </div>
      <div className="flex-shrink-0 flex items-start gap-2">
        <ScorePanel className="flex-1 min-w-0"/>
        <div className="relative flex-shrink-0 pb-5 pt-0.5">
          <button
            className="px-3 py-1.5 rounded-full text-white text-[9px] font-semibold pointer-events-none select-none whitespace-nowrap"
            style={{background:"linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)",animation:"ft-glow 2.5s ease-in-out 1.2s infinite",willChange:"box-shadow"}}>
            Review
          </button>
          <Cursor delay="1.2s"/>
        </div>
      </div>
    </div>

    {/* ── DESKTOP layout ── */}
    <div className="hidden md:flex h-full flex-row gap-2.5 p-3">
      {/* Video column */}
      <div className="flex-1 min-w-0 min-h-0 flex flex-col gap-1.5">
        <VideoPanel className="flex-1 min-h-0"/>
        <div className="flex-shrink-0 h-1.5 rounded-full bg-[#6FA9D6]/15 overflow-hidden">
          <div className="h-full rounded-full"
            style={{background:"linear-gradient(90deg,#6FA9D6,#4A6FA5)",animation:"ft-progress 7s ease-in-out infinite",willChange:"width"}}/>
        </div>
      </div>
      {/* Transcript column */}
      <div className="flex-1 min-w-0 min-h-0 bg-white rounded-xl border border-[#6FA9D6]/20 p-3 flex flex-col gap-1.5 overflow-hidden">
        <TranscriptLines/>
      </div>
      {/* Score + Button column */}
      <div className="flex-shrink-0 w-[104px] flex flex-col gap-2">
        <ScorePanel className="flex-1 min-h-0"/>
        <div className="relative flex-shrink-0 pb-5 flex justify-center">
          <button
            className="px-3 py-1.5 rounded-full text-white text-[9px] font-semibold pointer-events-none select-none whitespace-nowrap"
            style={{background:"linear-gradient(135deg,#6FA9D6 0%,#4A6FA5 100%)",animation:"ft-glow 2.5s ease-in-out 1.2s infinite",willChange:"box-shadow"}}>
            Review
          </button>
          <Cursor delay="1.2s"/>
        </div>
      </div>
    </div>

  </div>
);

/* ─── Feature metadata ─────────────────────────────────────────────────── */
const features = [
  {title:"Generate & Save", description:"Create custom activities tailored to your goals and save them for later."},
  {title:"Join Sessions",   description:"Explore and join live peer sessions happening right now."},
  {title:"Host a Session",  description:"Create and lead your own sessions for any topic or level."},
  {title:"Recordings",      description:"Review transcripts and recordings to track your improvement."},
] as const;

/* ══════════════════════════════════════════════════════════════════════════
   BENTO GRID

   How sizing works
   ─────────────────
   Desktop (md+):
   • Grid height locked at 720px → each row = (720 - 16px gap) / 2 = 352px.
   • `style={{ minHeight: 0 }}` on every card overrides CSS Grid's default
     `min-height: auto`, which would otherwise let cards grow past their row.
   • Text block: `flex-shrink-0` — never compresses.
   • Illustration wrapper: `flex-1 md:min-h-0` — takes leftover height;
     md:min-h-0 lets it shrink below its content size (needed for flex-1 in grid).
   • Illustration root: `absolute inset-0` — fills wrapper exactly.

   Mobile (single col, auto height):
   • `min-h-[220px]` on illustration wrappers prevents collapse.
   • Card height is auto, determined by content + illustration min-height.
══════════════════════════════════════════════════════════════════════════════ */
const FeatureIllustrations = () => (
  <>
    <style>{KEYFRAMES}</style>
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[720px]">

      {/* Generate & Save — col-span-2, row 1 */}
      <motion.div
        className="md:col-span-2 rounded-2xl p-6 md:p-8 flex flex-col gap-4 md:gap-5 group hover:shadow-lg transition-shadow overflow-hidden relative"
        style={{minHeight:0, backgroundColor: "rgb(208, 233, 251)"}}
        initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
        viewport={{once:true}} transition={{duration:0.35}}
      >
        {/* Gradient orb */}
                                  <div
        className="absolute -top-64 left-1/2 -translate-x-1/2 w-[min(700px,200vw)] h-[900px] rounded-full opacity-70 pointer-events-none"
        style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(120px)", zIndex: 0 }}
      />
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-80 pointer-events-none"
        style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(100px)", zIndex: 0 }}
      />        <div className="flex-shrink-0 relative z-10">
          <h3 className="text-xl font-bold text-white mb-2">{features[0].title}</h3>
          <p className="text-white/90 leading-relaxed">{features[0].description}</p>
        </div>
        <div className="flex-1 relative overflow-hidden rounded-xl border border-white/20 min-h-[220px] md:min-h-0 z-10">
          <GenerateSaveIllustration/>
        </div>
      </motion.div>

      {/* Join Sessions — col 3, row 1 */}
      <motion.div
        className="rounded-2xl p-5 md:p-6 flex flex-col gap-3 md:gap-4 group hover:shadow-lg transition-shadow overflow-hidden relative"
        style={{minHeight:0, backgroundColor: "rgb(208, 233, 251)"}}
        initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
        viewport={{once:true}} transition={{duration:0.35,delay:0.08}}
      >
        {/* Gradient orb */}
                                  <div
        className="absolute -top-64 left-1/2 -translate-x-1/2 w-[min(150px,200vw)] h-[900px] rounded-full opacity-70 pointer-events-none"
        style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(120px)", zIndex: 0 }}
      />
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-80 pointer-events-none"
        style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(100px)", zIndex: 0 }}
      />        <div className="flex-shrink-0 relative z-10">
          <h3 className="text-base font-bold text-white mb-1">{features[1].title}</h3>
          <p className="text-sm text-white/90 leading-relaxed">{features[1].description}</p>
        </div>
        <div className="flex-1 relative overflow-hidden rounded-xl border border-white/20 min-h-[220px] md:min-h-0 z-10">
          <JoinSessionsIllustration/>
        </div>
      </motion.div>

      {/* Host a Session — col 1, row 2 */}
      <motion.div
        className="rounded-2xl p-5 md:p-6 flex flex-col gap-3 md:gap-4 group hover:shadow-lg transition-shadow overflow-hidden relative"
        style={{minHeight:0, backgroundColor: "rgb(208, 233, 251)"}}
        initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
        viewport={{once:true}} transition={{duration:0.35,delay:0.16}}
      >
        {/* Gradient orb */}
                                  <div
        className="absolute -top-64 left-1/2 -translate-x-1/2 w-[min(150px,200vw)] h-[900px] rounded-full opacity-70 pointer-events-none"
        style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(120px)", zIndex: 0 }}
      />
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-80 pointer-events-none"
        style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(100px)", zIndex: 0 }}
      />        <div className="flex-shrink-0 relative z-10">
          <h3 className="text-base font-bold text-white mb-1">{features[2].title}</h3>
          <p className="text-sm text-white/90 leading-relaxed">{features[2].description}</p>
        </div>
        <div className="flex-1 relative overflow-hidden rounded-xl border border-white/20 min-h-[220px] md:min-h-0 z-10">
          <HostSessionIllustration/>
        </div>
      </motion.div>

      {/* Recordings — col-span-2, row 2 */}
      <motion.div
        className="md:col-span-2 rounded-2xl p-6 md:p-8 flex flex-col gap-4 md:gap-5 group hover:shadow-lg transition-shadow overflow-hidden relative"
        style={{minHeight:0, backgroundColor: "rgb(208, 233, 251)"}}
        initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
        viewport={{once:true}} transition={{duration:0.35,delay:0.24}}
      >
        {/* Gradient orb */}
                                  <div
        className="absolute -top-64 left-1/2 -translate-x-1/2 w-[min(700px,200vw)] h-[900px] rounded-full opacity-70 pointer-events-none"
        style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(120px)", zIndex: 0 }}
      />
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-80 pointer-events-none"
        style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(100px)", zIndex: 0 }}
      />
        <div className="flex-shrink-0 relative z-10">
          <h3 className="text-xl font-bold text-white mb-2">{features[3].title}</h3>
          <p className="text-white/90 leading-relaxed">{features[3].description}</p>
        </div>
        <div className="flex-1 relative overflow-hidden rounded-xl border border-white/20 min-h-[220px] md:min-h-0 z-10">
          <RecordingsIllustration/>
        </div>
      </motion.div>

    </div>
  </>
);

export default FeatureIllustrations;