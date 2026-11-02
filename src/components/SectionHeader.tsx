import React from "react";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  deck?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  label,
  title,
  deck,
}) => (
  <header>
    <div className="flex items-baseline gap-4 border-b border-rule pb-3">
      <span className="font-mono text-xs text-ink-soft">{index}</span>
      <span className="text-[11px] uppercase tracking-[0.18em] text-ink-soft font-medium">
        {label}
      </span>
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-tighter leading-[1.05] mt-6">
      {title}
    </h2>
    {deck && (
      <p className="text-sm leading-relaxed text-ink-soft max-w-[58ch] mt-4">
        {deck}
      </p>
    )}
  </header>
);

export default SectionHeader;
