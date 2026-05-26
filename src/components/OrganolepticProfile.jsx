import { cn } from '../utils/cn';

export function OrganolepticProfile({ profile, title }) {
  const entries = Object.values(profile);

  return (
    <div className="space-y-6">
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold">{title}</p>
      {entries.map((item) => (
        <div key={item.label}>
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <span className="text-xs uppercase tracking-wider text-cream-muted">{item.label}</span>
            <span className="font-serif text-sm text-cream">{item.intensity}%</span>
          </div>
          <div className="h-px w-full bg-cream/10">
            <div
              className="h-px bg-gradient-to-r from-burgundy to-gold transition-all duration-1000"
              style={{ width: `${item.intensity}%` }}
            />
          </div>
          <p className={cn('mt-2 text-sm leading-relaxed text-cream/80')}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}
