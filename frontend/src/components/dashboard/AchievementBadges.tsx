import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { DashboardData } from '@/types';

const rarityStyles = {
  common: 'border-muted/30 from-muted/10',
  rare: 'border-primary/40 from-primary/15',
  epic: 'border-accent/40 from-accent/15',
  legendary: 'border-warning/50 from-warning/15',
} as const;

const rarityIconColor = {
  common: 'text-muted',
  rare: 'text-primary-400',
  epic: 'text-accent-400',
  legendary: 'text-warning',
} as const;

export function AchievementBadges({ data }: { data: DashboardData }) {
  const unlocked = data.achievements.filter((a) => a.unlocked);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="bg-surface border border-border rounded-[24px] p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-text font-display">Achievements</h3>
        <span className="text-xs text-muted">{unlocked.length}/{data.achievements.length}</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {data.achievements.map((achievement, i) => {
          const Icon = Icons[achievement.icon as keyof typeof Icons] as Icons.LucideIcon;
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className={`relative aspect-square rounded-2xl border bg-gradient-to-br ${rarityStyles[achievement.rarity]} to-surface flex flex-col items-center justify-center p-2 text-center ${
                achievement.unlocked ? '' : 'opacity-40'
              }`}
            >
              {achievement.unlocked ? (
                <Icon size={24} className={rarityIconColor[achievement.rarity]} />
              ) : (
                <Lock size={20} className="text-muted-2" />
              )}
              <p className="text-[10px] font-semibold text-text mt-1.5 leading-tight">{achievement.name}</p>
              {achievement.unlocked && achievement.date && (
                <p className="text-[9px] text-muted-2 mt-0.5">{achievement.date}</p>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
