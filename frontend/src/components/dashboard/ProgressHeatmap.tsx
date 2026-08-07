import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

interface ProgressHeatmapProps {
  data: number[];
  daysCompleted: number;
  totalDays: number;
}

export function ProgressHeatmap({ data, daysCompleted, totalDays }: ProgressHeatmapProps) {
  const weeks = 9;
  const daysPerWeek = 7;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-surface border border-border rounded-[24px] p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity size={18} className="text-primary-400" />
          <h3 className="text-base font-bold text-text font-display">Consistency Heatmap</h3>
        </div>
        <span className="text-xs text-muted">{daysCompleted}/{totalDays} days</span>
      </div>

      <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
        {Array.from({ length: weeks }).map((_, weekIdx) => (
          <div key={weekIdx} className="flex flex-col gap-1.5">
            {Array.from({ length: daysPerWeek }).map((_, dayIdx) => {
              const dayNumber = weekIdx * daysPerWeek + dayIdx;
              const completed = dayNumber < daysCompleted;
              const isToday = dayNumber === daysCompleted;
              const isFuture = dayNumber > daysCompleted;
              return (
                <motion.div
                  key={dayIdx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + dayNumber * 0.01 }}
                  className={`w-7 h-7 rounded-md ${
                    isFuture
                      ? 'bg-white/[0.02] border border-white/5'
                      : isToday
                      ? 'bg-warning border-2 border-warning/50 shadow-[0_0_12px_-2px_rgba(245,158,11,0.6)]'
                      : completed
                      ? 'bg-gradient-to-br from-primary to-primary-600'
                      : 'bg-surface-3'
                  }`}
                  title={`Day ${dayNumber + 1}${completed ? ' — Completed' : isToday ? ' — Today' : ''}`}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-gradient-to-br from-primary to-primary-600" />
            <span className="text-[10px] text-muted">Done</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-warning" />
            <span className="text-[10px] text-muted">Today</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-surface-3" />
            <span className="text-[10px] text-muted">Missed</span>
          </div>
        </div>
        <span className="text-xs font-semibold text-primary-400">{Math.round((daysCompleted / totalDays) * 100)}%</span>
      </div>
    </motion.div>
  );
}
