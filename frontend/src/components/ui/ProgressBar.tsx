import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
  gradient?: boolean;
}

export function ProgressBar({
  value,
  max = 100,
  className = '',
  showLabel = false,
  gradient = true,
}: ProgressBarProps) {
  const pct = Math.min(100, (value / max) * 100);

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-xs text-muted mb-1.5">
          <span>{value} / {max}</span>
          <span>{Math.round(pct)}%</span>
        </div>
      )}
      <div className="h-2 bg-surface-3 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${gradient ? 'bg-gradient-to-r from-primary to-accent' : 'bg-primary'}`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
