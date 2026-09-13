import type { CSSProperties } from "react";

type SymbolSpec = {
  char: string;
  left: string;
  top: string;
  size: number;
  opacity: number;
  dx: string;
  dy: string;
  duration: string;
  delay: string;
  color: string;
};

// Floating code symbols — slow drift + rotation like confetti, clearly "developer"
const SYMBOLS: SymbolSpec[] = [
  { char: "</>", left: "4%", top: "12%", size: 28, opacity: 0.1, dx: "40px", dy: "-60px", duration: "22s", delay: "-4s", color: "#FF5A36" },
  { char: "{ }", left: "12%", top: "68%", size: 24, opacity: 0.08, dx: "-50px", dy: "40px", duration: "26s", delay: "-12s", color: "#71717A" },
  { char: "( )", left: "20%", top: "28%", size: 20, opacity: 0.07, dx: "30px", dy: "50px", duration: "18s", delay: "-7s", color: "#71717A" },
  { char: "01", left: "28%", top: "82%", size: 18, opacity: 0.09, dx: "-30px", dy: "-50px", duration: "24s", delay: "-2s", color: "#71717A" },
  { char: "$", left: "36%", top: "8%", size: 22, opacity: 0.1, dx: "50px", dy: "40px", duration: "20s", delay: "-15s", color: "#71717A" },
  { char: "{ }", left: "44%", top: "55%", size: 30, opacity: 0.06, dx: "-40px", dy: "-40px", duration: "28s", delay: "-9s", color: "#71717A" },
  { char: "</>", left: "52%", top: "22%", size: 18, opacity: 0.08, dx: "35px", dy: "55px", duration: "19s", delay: "-5s", color: "#71717A" },
  { char: "( )", left: "60%", top: "75%", size: 26, opacity: 0.09, dx: "-45px", dy: "-55px", duration: "23s", delay: "-18s", color: "#71717A" },
  { char: "$", left: "68%", top: "15%", size: 26, opacity: 0.1, dx: "40px", dy: "-45px", duration: "21s", delay: "-11s", color: "#FF5A36" },
  { char: "01", left: "74%", top: "48%", size: 20, opacity: 0.07, dx: "-35px", dy: "45px", duration: "17s", delay: "-3s", color: "#71717A" },
  { char: "{ }", left: "82%", top: "80%", size: 22, opacity: 0.08, dx: "45px", dy: "-50px", duration: "25s", delay: "-14s", color: "#71717A" },
  { char: "</>", left: "88%", top: "30%", size: 24, opacity: 0.09, dx: "-40px", dy: "50px", duration: "20s", delay: "-8s", color: "#71717A" },
  { char: "( )", left: "93%", top: "62%", size: 18, opacity: 0.07, dx: "30px", dy: "-40px", duration: "18s", delay: "-20s", color: "#71717A" },
  { char: "$", left: "8%", top: "42%", size: 16, opacity: 0.08, dx: "-25px", dy: "-35px", duration: "16s", delay: "-10s", color: "#71717A" },
  { char: "01", left: "48%", top: "88%", size: 16, opacity: 0.07, dx: "30px", dy: "35px", duration: "19s", delay: "-6s", color: "#71717A" },
  { char: "{ }", left: "63%", top: "38%", size: 16, opacity: 0.06, dx: "-30px", dy: "-30px", duration: "22s", delay: "-16s", color: "#71717A" },
];

const StarsBackground = () => {
  return (
    <div
      className="fixed inset-0 z-0 bg-zinc-100 dark:bg-[#0A0A0A] overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Floating code symbols */}
      {SYMBOLS.map((s, i) => (
        <span
          key={i}
          className="animate-sym-drift absolute font-mono font-bold select-none"
          style={
            {
              left: s.left,
              top: s.top,
              fontSize: `${s.size}px`,
              opacity: s.opacity,
              color: s.color,
              "--dx": s.dx,
              "--dy": s.dy,
              animationDuration: s.duration,
              animationDelay: s.delay,
            } as CSSProperties
          }
        >
          {s.char}
        </span>
      ))}
      {/* Bottom dissolve */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-100 dark:to-[#0A0A0A]" />
    </div>
  );
};

export default StarsBackground;
