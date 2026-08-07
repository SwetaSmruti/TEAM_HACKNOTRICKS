import { motion } from 'framer-motion';
import { Flame, Star, TrendingUp, Zap } from 'lucide-react';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { ProgressBar } from '@/components/ui/ProgressBar';
import type { DashboardData } from '@/types';

export function WelcomeCard({ data }: { data: DashboardData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-surface via-surface to-surface-2 border border-border p-5"
    >
      <div className="absolute -top-16 -right-16 w-44 h-44 bg-primary/20 rounded-full blur-[70px]" />
      <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-accent/15 rounded-full blur-[70px]" />

      <div className="relative">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold text-white font-display shadow-lg shadow-primary/30">
              {data.student.avatar}
            </div>
            <div>
              <p className="text-xs text-muted">Welcome back,</p>
              <h2 className="text-lg font-bold text-text font-display leading-tight">{data.student.name}</h2>
              <p className="text-xs text-muted-2">{data.student.college}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-muted">Level</span>
            <span className="text-2xl font-bold font-display bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              {data.level}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center my-4">
          <ProgressRing
            value={data.completionPct}
            size={130}
            label={`${data.completionPct}%`}
            sublabel="Complete"
          />
        </div>

        <div className="grid grid-cols-4 gap-2 mt-4">
          <Stat icon={<Flame size={16} className="text-warning" />} value={data.streak} label="Streak" tone="warning" />
          <Stat icon={<Zap size={16} className="text-primary-400" />} value={data.xp} label="XP" tone="primary" />
          <Stat icon={<TrendingUp size={16} className="text-success" />} value={data.rank} label="Rank" tone="success" />
          <Stat icon={<Star size={16} className="text-accent-400" />} value={data.daysCompleted} label="Days" tone="accent" />
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-xs text-muted mb-1.5">
            <span>Level {data.level}</span>
            <span>{data.xp} / {data.xp + data.xpToNextLevel} XP</span>
          </div>
          <ProgressBar value={data.xpToNextLevel} max={500} gradient />
        </div>
      </div>
    </motion.div>
  );
}

function Stat({
  icon,
  value,
  label,
  tone,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  tone: 'warning' | 'primary' | 'success' | 'accent';
}) {
  const bg = {
    warning: 'bg-warning/10',
    primary: 'bg-primary/10',
    success: 'bg-success/10',
    accent: 'bg-accent/10',
  }[tone];

  return (
    <div className={`flex flex-col items-center ${bg} rounded-xl py-2.5`}>
      {icon}
      <span className="text-base font-bold text-text mt-1 font-display">{value}</span>
      <span className="text-[10px] text-muted">{label}</span>
    </div>
  );
}
