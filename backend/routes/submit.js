import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  const { day, githubRepo, githubCommit, linkedinPost, reflection } = req.body;

  if (!githubRepo || !linkedinPost || !reflection) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields',
    });
  }

  res.json({
    success: true,
    xpEarned: 120,
    newStreak: 13,
    message: `Congratulations! Day ${day || 13} completed successfully.`,
  });
});

export default router;
