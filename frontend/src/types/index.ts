export interface Student {
  id: string;
  name: string;
  username: string;
  avatar: string;
  college: string;
  year: string;
  branch: string;
  joinedDate: string;
  bio: string;
  github: string;
  linkedin: string;
}

export interface DashboardData {
  student: Student;
  streak: number;
  longestStreak: number;
  xp: number;
  level: number;
  xpToNextLevel: number;
  rank: number;
  totalParticipants: number;
  completionPct: number;
  daysCompleted: number;
  totalDays: number;
  currentDay: number;
  todayChallenge: {
    day: number;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    estimatedTime: string;
    deadline: string;
    submitted: boolean;
  };
  leaderboard: Array<{
    rank: number;
    name: string;
    username: string;
    avatar: string;
    xp: number;
    streak: number;
    isYou: boolean;
  }>;
  recentActivity: Array<{
    id: string;
    type: 'submit' | 'achievement' | 'streak' | 'level';
    title: string;
    detail: string;
    timestamp: string;
    xp?: number;
  }>;
  achievements: Array<{
    id: string;
    name: string;
    description: string;
    icon: string;
    unlocked: boolean;
    date?: string;
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
  }>;
  heatmap: number[];
  motivation: {
    quote: string;
    author: string;
  };
  recruiterScore: number;
  consistencyPrediction: number;
}

export interface ChallengeDay {
  day: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedTime: string;
  category: string;
  description: string;
  objectives: string[];
  deliverables: string[];
  requirements: string[];
  resources: Array<{ title: string; url: string; type: string }>;
  tips: string[];
  submitted: boolean;
  xpReward: number;
}

export interface LeaderboardData {
  leaderboard: Array<{
    rank: number;
    name: string;
    username: string;
    avatar: string;
    xp: number;
    streak: number;
    college: string;
    isYou: boolean;
  }>;
  yourRank: number;
  totalParticipants: number;
}

export interface SubmitResponse {
  success: boolean;
  xpEarned: number;
  newStreak: number;
  message: string;
}
