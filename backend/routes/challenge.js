import { Router } from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = join(__dirname, '../data/challenge.json');

const router = Router();

router.get('/:day', (req, res) => {
  try {
    const day = parseInt(req.params.day, 10);
    const allChallenges = JSON.parse(readFileSync(dataPath, 'utf-8'));
    const challenge = allChallenges.find((c) => c.day === day);

    if (!challenge) {
      return res.status(404).json({ error: `Challenge for day ${day} not found` });
    }
    res.json(challenge);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load challenge data' });
  }
});

export default router;
