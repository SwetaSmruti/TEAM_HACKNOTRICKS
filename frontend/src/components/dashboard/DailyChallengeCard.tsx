import { motion } from 'framer-motion';
import { Clock, ChevronRight, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/Badge';
import type { DashboardData } from '@/types';

const difficultyTone = {
  Easy: 'success',
  Medium: 'warning',
  Hard: 'danger',
} as const;

export function DailyChallengeCard({ data }: { data: DashboardData }) {
  const navigate = useNavigate();
  const challenge = data.todayChallenge;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      onClick={() => navigate(`/day/${challenge.day}`)}
      className="cursor-pointer relative overflow-hidden rounded-[24px] bg-gradient-to-br from-primary/10 via-surface to-surface border border-primary/30 p-5"
    >
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/20 rounded-full blur-[60px]" />

      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">
            Today's Challenge
          </span>
          <Badge tone="primary">
            <Flame size={12} /> +{120} XP
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-text font-display leading-tight mb-2">
          Day {challenge.day}: {challenge.title}
        </h3>

        <div className="flex items-center gap-2 flex-wrap mb-4">
          <Badge tone={difficultyTone[challenge.difficulty]}>{challenge.difficulty}</Badge>
          <span className="inline-flex items-center gap-1 text-xs text-muted">
            <Clock size={12} /> {challenge.estimatedTime}
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div>
            <p className="text-xs text-muted-2">Deadline</p>
            <p className="text-sm font-medium text-text">{challenge.deadline}</p>
          </div>
          <div className="flex items-center gap-1 text-primary-400 text-sm font-semibold">
            {challenge.submitted ? 'Review' : 'Start now'}
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
