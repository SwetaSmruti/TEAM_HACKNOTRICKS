import type {
  DashboardData,
  ChallengeDay,
  LeaderboardData,
} from '@/types';

export const dashboardData: DashboardData = {
  student: {
    id: 'u_001',
    name: 'Arjun Sharma',
    username: 'arjun_codes',
    avatar: 'AS',
    college: 'IIT Bombay',
    year: '3rd Year',
    branch: 'Computer Science',
    joinedDate: '2025-06-01',
    bio: 'Aspiring full-stack developer. Building consistency one day at a time.',
    github: 'github.com/arjun_codes',
    linkedin: 'linkedin.com/in/arjun_codes',
  },
  streak: 12,
  longestStreak: 15,
  xp: 2840,
  level: 7,
  xpToNextLevel: 360,
  rank: 47,
  totalParticipants: 3200,
  completionPct: 20,
  daysCompleted: 12,
  totalDays: 60,
  currentDay: 13,
  todayChallenge: {
    day: 13,
    title: 'Build a REST API with CRUD Operations',
    difficulty: 'Medium',
    estimatedTime: '2-3 hrs',
    deadline: 'Today, 11:59 PM IST',
    submitted: false,
  },
  leaderboard: [
    { rank: 1, name: 'Priya Patel', username: 'priya_dev', avatar: 'PP', xp: 7200, streak: 60, isYou: false },
    { rank: 2, name: 'Rahul Verma', username: 'rahul_v', avatar: 'RV', xp: 7050, streak: 58, isYou: false },
    { rank: 3, name: 'Sneha Reddy', username: 'sneha_r', avatar: 'SR', xp: 6900, streak: 55, isYou: false },
    { rank: 47, name: 'Arjun Sharma', username: 'arjun_codes', avatar: 'AS', xp: 2840, streak: 12, isYou: true },
  ],
  recentActivity: [
    { id: 'a1', type: 'submit', title: 'Day 12 Completed', detail: 'Built a Todo App with React', timestamp: '2 hours ago', xp: 120 },
    { id: 'a2', type: 'streak', title: '12 Day Streak!', detail: 'You are on fire. Keep going!', timestamp: '2 hours ago' },
    { id: 'a3', type: 'achievement', title: 'Achievement Unlocked', detail: 'Consistency King — 10 day streak', timestamp: '1 day ago' },
    { id: 'a4', type: 'submit', title: 'Day 11 Completed', detail: 'Built a Weather App', timestamp: '1 day ago', xp: 120 },
    { id: 'a5', type: 'level', title: 'Reached Level 7', detail: '2,840 XP earned', timestamp: '2 days ago' },
  ],
  achievements: [
    { id: 'ach1', name: 'First Commit', description: 'Complete your first day', icon: 'GitCommit', unlocked: true, date: 'Day 1', rarity: 'common' },
    { id: 'ach2', name: 'Consistency King', description: 'Maintain a 10-day streak', icon: 'Flame', unlocked: true, date: 'Day 10', rarity: 'rare' },
    { id: 'ach3', name: 'Week Warrior', description: 'Complete 7 days in a row', icon: 'Shield', unlocked: true, date: 'Day 7', rarity: 'rare' },
    { id: 'ach4', name: 'Open Source Hero', description: 'Make your repo public for 15 days', icon: 'GitBranch', unlocked: true, date: 'Day 15', rarity: 'epic' },
    { id: 'ach5', name: 'Half Century', description: 'Reach a 30-day streak', icon: 'Trophy', unlocked: false, rarity: 'epic' },
    { id: 'ach6', name: 'Legend', description: 'Complete all 60 days', icon: 'Crown', unlocked: false, rarity: 'legendary' },
  ],
  heatmap: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  motivation: {
    quote: 'Consistency is what transforms average into excellence. Show up today.',
    author: 'ABTalks Challenge',
  },
  recruiterScore: 72,
  consistencyPrediction: 88,
};

export const allChallenges: ChallengeDay[] = [
  {
    day: 1,
    title: 'Build a Personal Portfolio Page',
    difficulty: 'Easy',
    estimatedTime: '1-2 hrs',
    category: 'Frontend',
    description: 'Create a single-page personal portfolio using HTML, CSS, and JavaScript. This is your first step — make it count. Your portfolio should showcase who you are, what you are learning, and what you aspire to build.',
    objectives: [
      'Learn basic HTML structure and semantic tags',
      'Practice CSS layout with Flexbox or Grid',
      'Add interactivity with vanilla JavaScript',
    ],
    deliverables: [
      'A responsive portfolio page hosted on GitHub Pages or Netlify',
      'At least 3 sections: About, Skills, Projects',
      'A contact form (non-functional is okay)',
    ],
    requirements: [
      'Must be mobile responsive',
      'Use a CSS reset or normalize.css',
      'Push code to a public GitHub repository',
    ],
    resources: [
      { title: 'MDN HTML Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', type: 'docs' },
      { title: 'CSS Flexbox Complete Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', type: 'guide' },
      { title: 'Git & GitHub Crash Course', url: 'https://www.youtube.com/results?search_query=git+crash+course', type: 'video' },
    ],
    tips: [
      'Keep the design simple and clean. Less is more.',
      'Commit early and often — each commit tells a story.',
      'Write a clear README.md so others understand your project.',
    ],
    submitted: true,
    xpReward: 100,
  },
  {
    day: 13,
    title: 'Build a REST API with CRUD Operations',
    difficulty: 'Medium',
    estimatedTime: '2-3 hrs',
    category: 'Backend',
    description: 'Build a RESTful API that supports full CRUD operations (Create, Read, Update, Delete) for a resource of your choice — a task manager, a notes app, or a product catalog. This challenge bridges the gap between frontend and backend and is one of the most asked skills in interviews.',
    objectives: [
      'Understand REST principles and HTTP methods',
      'Implement CRUD operations with proper status codes',
      'Structure an Express.js application with routes and controllers',
      'Handle errors gracefully with middleware',
    ],
    deliverables: [
      'A working Express.js API with at least one resource',
      'All 5 CRUD endpoints: GET (all), GET (one), POST, PUT/PATCH, DELETE',
      'Input validation for request bodies',
      'A Postman collection or .http file for testing',
    ],
    requirements: [
      'Use Express.js (or your preferred Node framework)',
      'Store data in-memory or in a JSON file — no database needed',
      'Return proper HTTP status codes (200, 201, 400, 404, 500)',
      'Write a README with setup instructions and endpoint documentation',
    ],
    resources: [
      { title: 'Express.js Official Docs', url: 'https://expressjs.com/', type: 'docs' },
      { title: 'REST API Best Practices', url: 'https://restfulapi.net/', type: 'guide' },
      { title: 'HTTP Status Codes Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status', type: 'docs' },
    ],
    tips: [
      'Start with a simple in-memory array before adding any persistence.',
      'Use Postman or Thunder Client to test each endpoint as you build it.',
      'Separate your routes, controllers, and models for clean architecture.',
      'Write meaningful commit messages — recruiters read your GitHub history.',
    ],
    submitted: false,
    xpReward: 120,
  },
  {
    day: 30,
    title: 'Build a Real-Time Chat with WebSockets',
    difficulty: 'Hard',
    estimatedTime: '3-4 hrs',
    category: 'Full Stack',
    description: 'Build a real-time chat application using WebSockets. Users should be able to join a room, send messages, and see messages from others instantly. This challenge pushes you into real-time communication — a skill that sets you apart.',
    objectives: [
      'Understand the WebSocket protocol and when to use it',
      'Implement a WebSocket server with Socket.io',
      'Broadcast messages to connected clients in real time',
    ],
    deliverables: [
      'A chat server using Socket.io',
      'A simple frontend that connects and displays messages',
      'User join/leave notifications',
    ],
    requirements: [
      'Use Socket.io or the native ws package',
      'Handle disconnections gracefully',
      'Push to a public GitHub repo with a working README',
    ],
    resources: [
      { title: 'Socket.io Get Started', url: 'https://socket.io/get-started/chat/', type: 'guide' },
      { title: 'WebSocket API — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API', type: 'docs' },
    ],
    tips: [
      'Test with multiple browser tabs to simulate multiple users.',
      'Add a typing indicator for extra polish.',
    ],
    submitted: false,
    xpReward: 150,
  },
  {
    day: 60,
    title: 'Ship a Full-Stack Mini Project',
    difficulty: 'Hard',
    estimatedTime: '4-6 hrs',
    category: 'Full Stack',
    description: 'For your final challenge, ship a complete full-stack mini project that combines everything you have learned over 60 days. This is your capstone — make it something you are proud to show recruiters.',
    objectives: [
      'Combine frontend, backend, and deployment skills',
      'Build a project worthy of your portfolio',
      'Deploy to a public URL',
    ],
    deliverables: [
      'A full-stack application with frontend and backend',
      'Deployed to a public URL (Vercel, Netlify, Render, etc.)',
      'A polished README with screenshots and setup instructions',
    ],
    requirements: [
      'Must have a working frontend and backend',
      'Must be deployed and accessible',
      'Write a LinkedIn post reflecting on your 60-day journey',
    ],
    resources: [
      { title: 'Vercel Deployment Guide', url: 'https://vercel.com/docs', type: 'docs' },
      { title: 'How to Write a Great README', url: 'https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project', type: 'guide' },
    ],
    tips: [
      'Pick a project you are genuinely excited about — it shows in the final product.',
      'Document your journey in your LinkedIn post. Authenticity wins.',
    ],
    submitted: false,
    xpReward: 300,
  },
];

export const leaderboardData: LeaderboardData = {
  leaderboard: [
    { rank: 1, name: 'Priya Patel', username: 'priya_dev', avatar: 'PP', xp: 7200, streak: 60, college: 'IIT Delhi', isYou: false },
    { rank: 2, name: 'Rahul Verma', username: 'rahul_v', avatar: 'RV', xp: 7050, streak: 58, college: 'NIT Trichy', isYou: false },
    { rank: 3, name: 'Sneha Reddy', username: 'sneha_r', avatar: 'SR', xp: 6900, streak: 55, college: 'BITS Pilani', isYou: false },
    { rank: 4, name: 'Karthik Iyer', username: 'karthik_i', avatar: 'KI', xp: 6700, streak: 52, college: 'IIT Madras', isYou: false },
    { rank: 5, name: 'Ananya Gupta', username: 'ananya_g', avatar: 'AG', xp: 6500, streak: 50, college: 'IIIT Hyderabad', isYou: false },
    { rank: 6, name: 'Vikram Singh', username: 'vikram_s', avatar: 'VS', xp: 6300, streak: 48, college: 'IIT Kanpur', isYou: false },
    { rank: 7, name: 'Divya Nair', username: 'divya_n', avatar: 'DN', xp: 6100, streak: 45, college: 'NIT Surathkal', isYou: false },
    { rank: 8, name: 'Arnav Joshi', username: 'arnav_j', avatar: 'AJ', xp: 5900, streak: 43, college: 'BITS Goa', isYou: false },
    { rank: 9, name: 'Ishita Bose', username: 'ishita_b', avatar: 'IB', xp: 5700, streak: 40, college: 'IIT Roorkee', isYou: false },
    { rank: 10, name: 'Rohan Das', username: 'rohan_d', avatar: 'RD', xp: 5500, streak: 38, college: 'VIT Vellore', isYou: false },
    { rank: 47, name: 'Arjun Sharma', username: 'arjun_codes', avatar: 'AS', xp: 2840, streak: 12, college: 'IIT Bombay', isYou: true },
  ],
  yourRank: 47,
  totalParticipants: 3200,
};

export const landingStats = [
  { label: 'Students Enrolled', value: '12,000+' },
  { label: 'Days of Coding', value: '60' },
  { label: 'Colleges', value: '180+' },
  { label: 'Projects Built', value: '36,000+' },
];

export const timeline = [
  { phase: 'Week 1-2', title: 'Foundations', desc: 'HTML, CSS, Git, and your first deployed project.', icon: 'Rocket' },
  { phase: 'Week 3-4', title: 'JavaScript Deep Dive', desc: 'DOM, APIs, async, and interactive apps.', icon: 'Code' },
  { phase: 'Week 5-6', title: 'Frontend Frameworks', desc: 'React, components, state, and routing.', icon: 'Layout' },
  { phase: 'Week 7-8', title: 'Backend & APIs', desc: 'Node, Express, REST, and databases.', icon: 'Server' },
  { phase: 'Week 9', title: 'Full Stack Capstone', desc: 'Ship a complete project and deploy it.', icon: 'Trophy' },
];

export const howItWorks = [
  { step: '01', title: 'Commit Daily', desc: 'Receive a new coding challenge every day for 60 days. Each one builds real skills.', icon: 'CalendarCheck' },
  { step: '02', title: 'Build & Ship', desc: 'Complete the challenge, push your code to GitHub, and share your progress.', icon: 'GitBranch' },
  { step: '03', title: 'Post on LinkedIn', desc: 'Write a daily LinkedIn post about what you learned. Build your public profile.', icon: 'Link2' },
  { step: '04', title: 'Level Up', desc: 'Earn XP, unlock achievements, climb the leaderboard, and become recruiter ready.', icon: 'TrendingUp' },
];

export const benefits = [
  { title: 'Build Real Consistency', desc: 'The #1 trait recruiters look for. 60 days of daily coding proves you can deliver.', icon: 'Flame' },
  { title: 'Grow Your GitHub', desc: '60 public commits and 60 projects. Your profile becomes a portfolio recruiters notice.', icon: 'GitBranch' },
  { title: 'LinkedIn Visibility', desc: 'Daily posts grow your network and put you on recruiter radars across India.', icon: 'Link2' },
  { title: 'Structured Learning', desc: 'No more confusion about what to learn. A clear 60-day path from zero to job-ready.', icon: 'Map' },
  { title: 'Community & Accountability', desc: 'Join thousands of students. Leaderboards, streaks, and peer motivation keep you going.', icon: 'Users' },
  { title: 'Recruiter Ready Portfolio', desc: 'Finish with a body of work that speaks for itself in interviews.', icon: 'Briefcase' },
];

export const testimonials = [
  { name: 'Priya Patel', role: 'Now at Google', avatar: 'PP', text: 'I went from zero confidence to landing a Google internship. The daily structure kept me accountable when motivation failed. This challenge changed my career trajectory.', xp: '60 day streak' },
  { name: 'Rahul Verma', role: 'Now at Razorpay', avatar: 'RV', text: 'The LinkedIn posting habit alone got me 3 recruiter DMs. By day 45 I had interview calls. Best decision of my college life.', xp: '58 day streak' },
  { name: 'Sneha Reddy', role: 'Now at Zoho', avatar: 'SR', text: 'I was lost in tutorial hell. ABTalks gave me a clear path. 60 projects later, my GitHub actually looks like a developer lives there.', xp: '55 day streak' },
  { name: 'Karthik Iyer', role: 'Now at Swiggy', avatar: 'KI', text: 'The streak system is addictive in the best way. Missing a day felt worse than any deadline. Finished all 60 days.', xp: '52 day streak' },
];

export const faqs = [
  { q: 'Who is this challenge for?', a: 'Indian college students who want to build real coding consistency and become recruiter ready. Whether you are in your 2nd year or final year, if you can commit 1-3 hours a day, this is for you.' },
  { q: 'Do I need prior experience?', a: 'Basic programming knowledge helps, but the first two weeks cover fundamentals. The challenges scale from easy to hard over 60 days, so you grow with the challenge.' },
  { q: 'What if I miss a day?', a: 'Life happens. You can catch up, but your streak resets. The community and streak system are designed to keep you motivated to show up every single day.' },
  { q: 'Is it really free?', a: 'Yes. The 60-day challenge is completely free. All you need is a GitHub account, a LinkedIn profile, and the will to show up.' },
  { q: 'How does the LinkedIn posting work?', a: 'Each day, write a short post about what you built and learned. Tag #ABTalksChallenge. This builds your public profile and gets you noticed by recruiters.' },
  { q: 'What will I have at the end?', a: '60 GitHub commits, 60 projects, a grown LinkedIn network, a portfolio recruiters respect, and the consistency habit that makes you stand out in any interview.' },
];
