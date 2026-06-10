import { cn } from '../utils/cn';

export function OrganolepticProfile({ profile, title }) {
  const entries = Object.values(profile);

  return (
    <div className="space-y-6">
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold">{title}</p>
      {entries.map((item) => (
        <div key={item.label}>
          <span className="text-xs uppercase tracking-wider text-cream-muted">{item.label}</span>
          <p className={cn('mt-2 text-sm leading-relaxed text-cream/80')}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}
