import { motion } from 'framer-motion';
import { Trophy, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { DashboardData } from '@/types';

export function LeaderboardPreview({ data }: { data: DashboardData }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="bg-surface border border-border rounded-[24px] p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy size={18} className="text-warning" />
          <h3 className="text-base font-bold text-text font-display">Leaderboard</h3>
        </div>
        <button
          onClick={() => navigate('/leaderboard')}
          className="text-xs text-primary-400 font-medium flex items-center gap-0.5"
        >
          See all <ChevronRight size={14} />
        </button>
      </div>

      <div className="space-y-2">
        {data.leaderboard.map((entry, i) => (
          <div
            key={entry.rank}
            className={`flex items-center gap-3 p-2.5 rounded-xl ${
              entry.isYou ? 'bg-primary/10 border border-primary/30' : 'bg-white/[0.02]'
            }`}
          >
            <span className={`w-7 text-center text-sm font-bold font-display ${
              entry.rank === 1 ? 'text-warning' : entry.rank === 2 ? 'text-muted' : entry.rank === 3 ? 'text-accent-400' : 'text-muted-2'
            }`}>
              {entry.rank <= 3 ? ['🥇', '🥈', '🥉'][entry.rank - 1] : `#${entry.rank}`}
            </span>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-white">
              {entry.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-semibold truncate ${entry.isYou ? 'text-primary-300' : 'text-text'}`}>
                {entry.name} {entry.isYou && <span className="text-xs text-primary-400">(You)</span>}
              </p>
              <p className="text-xs text-muted-2 truncate">@{entry.username}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-text font-display">{entry.xp.toLocaleString()}</p>
              <p className="text-[10px] text-muted-2">XP</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
