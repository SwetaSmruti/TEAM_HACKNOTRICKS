type Tone = 'primary' | 'success' | 'warning' | 'danger' | 'accent' | 'muted';

const tones: Record<Tone, string> = {
  primary: 'bg-primary/15 text-primary-300 border-primary/30',
  success: 'bg-success/15 text-success border-success/30',
  warning: 'bg-warning/15 text-warning border-warning/30',
  danger: 'bg-danger/15 text-danger border-danger/30',
  accent: 'bg-accent/15 text-accent-400 border-accent/30',
  muted: 'bg-white/5 text-muted border-white/10',
};

export function Badge({
  children,
  tone = 'muted',
  className = '',
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}
