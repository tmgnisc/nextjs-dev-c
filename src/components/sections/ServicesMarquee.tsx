export default function ServicesMarquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="border-y border-line bg-surface/40 py-5">
      <div className="flex overflow-hidden" aria-hidden="true">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {row.map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="font-display text-lg font-semibold text-muted">{item}</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {row.map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="font-display text-lg font-semibold text-muted">{item}</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
