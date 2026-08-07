import { Router } from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = join(__dirname, '../data/leaderboard.json');

const router = Router();

router.get('/', (_req, res) => {
  try {
    const data = JSON.parse(readFileSync(dataPath, 'utf-8'));
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load leaderboard data' });
  }
});

export default router;
