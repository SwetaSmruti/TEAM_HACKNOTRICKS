import { motion } from 'framer-motion';
import { Quote, Eye, TrendingUp } from 'lucide-react';
import { ProgressBar } from '@/components/ui/ProgressBar';
import type { DashboardData } from '@/types';

export function MotivationCard({ data }: { data: DashboardData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-accent/15 via-surface to-primary/10 border border-accent/20 p-5"
    >
      <Quote size={32} className="absolute top-4 right-4 text-accent/20" />
      <div className="relative">
        <p className="text-xs font-semibold text-accent-400 uppercase tracking-wider mb-2">Daily Motivation</p>
        <p className="text-base font-medium text-text leading-relaxed font-display italic">
          "{data.motivation.quote}"
        </p>
        <p className="text-xs text-muted mt-3">— {data.motivation.author}</p>
      </div>
    </motion.div>
  );
}

export function RecruiterScoreCard({ data }: { data: DashboardData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="bg-surface border border-border rounded-[24px] p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <Eye size={18} className="text-primary-400" />
        <h3 className="text-base font-bold text-text font-display">Recruiter Visibility Score</h3>
      </div>

      <div className="flex items-end gap-2 mb-4">
        <span className="text-4xl font-bold font-display bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
          {data.recruiterScore}
        </span>
        <span className="text-sm text-muted mb-1.5">/ 100</span>
      </div>

      <ProgressBar value={data.recruiterScore} max={100} gradient />

      <div className="mt-4 space-y-2">
        <ScoreRow label="GitHub Activity" value={75} />
        <ScoreRow label="LinkedIn Presence" value={68} />
        <ScoreRow label="Consistency" value={88} />
      </div>

      <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
        <TrendingUp size={14} className="text-success" />
        <p className="text-xs text-muted">
          <span className="text-success font-semibold">+12</span> this week. Keep posting daily!
        </p>
      </div>
    </motion.div>
  );
}

function ScoreRow({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-muted">{label}</span>
        <span className="text-text font-medium">{value}</span>
      </div>
      <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </div>
  );
}
