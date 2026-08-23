const StarsBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0A0A0A] overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    </div>
  );
};

export default StarsBackground;
