import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fetchDashboard } from '@/services/api';
import type { DashboardData } from '@/types';
import { WelcomeCard } from '@/components/dashboard/WelcomeCard';
import { DailyChallengeCard } from '@/components/dashboard/DailyChallengeCard';
import { LeaderboardPreview } from '@/components/dashboard/LeaderboardPreview';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { AchievementBadges } from '@/components/dashboard/AchievementBadges';
import { ProgressHeatmap } from '@/components/dashboard/ProgressHeatmap';
import { AIReflectionCoach } from '@/components/dashboard/AIReflectionCoach';
import { MotivationCard, RecruiterScoreCard } from '@/components/dashboard/InsightCards';
import { DashboardSkeleton } from '@/components/dashboard/DashboardSkeleton';
import { ErrorState } from '@/components/ui/States';
import { Button } from '@/components/ui/Button';

export function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    setError(null);
    fetchDashboard()
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message || 'Failed to load dashboard');
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) return <DashboardSkeleton />;
  if (error || !data) return <ErrorState message={error || 'Unknown error'} onRetry={load} />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="px-4 py-6 space-y-4 max-w-md mx-auto"
    >
      <WelcomeCard data={data} />
      <DailyChallengeCard data={data} />
      <MotivationCard data={data} />
      <ProgressHeatmap data={data.heatmap} daysCompleted={data.daysCompleted} totalDays={data.totalDays} />
      <RecruiterScoreCard data={data} />
      <LeaderboardPreview data={data} />
      <AchievementBadges data={data} />
      <RecentActivity data={data} />
      <AIReflectionCoach />

      <div className="pt-2">
        <Button size="lg" fullWidth onClick={() => navigate(`/day/${data.currentDay}`)}>
          Continue Challenge — Day {data.currentDay}
        </Button>
      </div>
    </motion.div>
  );
}
