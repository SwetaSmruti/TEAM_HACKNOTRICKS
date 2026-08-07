import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { fetchDay } from '@/services/api';
import type { ChallengeDay } from '@/types';
import { ChallengeHeader, ChallengeDescription } from '@/components/challenge/ChallengeContent';
import { SubmissionForm } from '@/components/challenge/SubmissionForm';
import { ChallengeSkeleton } from '@/components/challenge/ChallengeSkeleton';
import { ErrorState } from '@/components/ui/States';

export function ChallengeDay() {
  const { day } = useParams<{ day: string }>();
  const dayNum = parseInt(day || '13', 10);
  const navigate = useNavigate();

  const [challenge, setChallenge] = useState<ChallengeDay | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    setError(null);
    fetchDay(dayNum)
      .then((d) => {
        setChallenge(d);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message || 'Failed to load challenge');
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, [dayNum]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="px-4 py-6 space-y-4 max-w-md mx-auto"
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {loading ? (
        <ChallengeSkeleton />
      ) : error || !challenge ? (
        <ErrorState message={error || 'Challenge not found'} onRetry={load} />
      ) : (
        <>
          <ChallengeHeader challenge={challenge} />
          <ChallengeDescription challenge={challenge} />
          <SubmissionForm
            day={challenge.day}
            xpReward={challenge.xpReward}
            alreadySubmitted={challenge.submitted}
          />
        </>
      )}
    </motion.div>
  );
}
