import type {
  DashboardData,
  ChallengeDay,
  LeaderboardData,
  SubmitResponse,
} from '@/types';
import { dashboardData, allChallenges, leaderboardData } from './mockData';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

const shouldFail = () => Math.random() < 0.02;

export async function fetchDashboard(): Promise<DashboardData> {
  await delay(650);
  if (shouldFail()) throw new Error('Network error');
  return dashboardData;
}

export async function fetchDay(day: number): Promise<ChallengeDay> {
  await delay(500);
  if (shouldFail()) throw new Error('Network error');
  const found = allChallenges.find((c) => c.day === day);
  if (!found) throw new Error('Day not found');
  return found;
}

export async function fetchLeaderboard(): Promise<LeaderboardData> {
  await delay(550);
  if (shouldFail()) throw new Error('Network error');
  return leaderboardData;
}

export async function submitChallenge(payload: {
  day: number;
  githubRepo: string;
  githubCommit: string;
  linkedinPost: string;
  reflection: string;
}): Promise<SubmitResponse> {
  await delay(1100);
  return {
    success: true,
    xpEarned: 120,
    newStreak: 13,
    message: 'Congratulations! Day 12 completed successfully.',
  };
}
