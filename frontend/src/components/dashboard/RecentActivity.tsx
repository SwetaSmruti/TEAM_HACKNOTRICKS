import { motion } from 'framer-motion';
import { GitCommit, Flame, Trophy, Star } from 'lucide-react';
import type { DashboardData } from '@/types';

const typeConfig = {
  submit: { icon: GitCommit, tone: 'text-primary-400', bg: 'bg-primary/10' },
  streak: { icon: Flame, tone: 'text-warning', bg: 'bg-warning/10' },
  achievement: { icon: Trophy, tone: 'text-accent-400', bg: 'bg-accent/10' },
  level: { icon: Star, tone: 'text-success', bg: 'bg-success/10' },
} as const;

export function RecentActivity({ data }: { data: DashboardData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-surface border border-border rounded-[24px] p-5"
    >
      <h3 className="text-base font-bold text-text font-display mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {data.recentActivity.map((activity) => {
          const cfg = typeConfig[activity.type];
          const Icon = cfg.icon;
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={`flex-shrink-0 w-9 h-9 rounded-xl ${cfg.bg} flex items-center justify-center`}>
                <Icon size={16} className={cfg.tone} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text">{activity.title}</p>
                <p className="text-xs text-muted truncate">{activity.detail}</p>
                <p className="text-[10px] text-muted-2 mt-0.5">{activity.timestamp}</p>
              </div>
              {activity.xp && (
                <span className="text-xs font-bold text-success flex-shrink-0">+{activity.xp} XP</span>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
