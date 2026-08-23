const StarsBackground = () => {
  return (
    <div
      className="fixed inset-0 z-0 bg-[#0A0A0A] overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Primary box grid — 40px, now at 8% opacity for clear visibility */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 70%, transparent 110%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 70%, transparent 110%)",
        }}
      />
      {/* Secondary large grid — 160px at 3.5% for blueprint depth */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:160px_160px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 70%, transparent 110%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 70%, transparent 110%)",
        }}
      />
      {/* Subtle accent wash — ties grid to brand (#FF5A36 at 7%) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_70%_0%,rgba(255,90,54,0.07),transparent_65%)]" />
      {/* Bottom dissolve */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />
    </div>
  );
};

export default StarsBackground;
