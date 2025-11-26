import express from 'express';
const router = express.Router();

// Dummy GET route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Day 1 route!' });
});

export default router;
