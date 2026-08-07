import express from 'express';
import cors from 'cors';
import dashboardRoutes from './routes/dashboard.js';
import challengeRoutes from './routes/challenge.js';
import leaderboardRoutes from './routes/leaderboard.js';
import submitRoutes from './routes/submit.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/day', challengeRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/submit', submitRoutes);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'ABTalks Mock API is running' });
});

app.listen(PORT, () => {
  console.log(`ABTalks Mock API server running on http://localhost:${PORT}`);
});
