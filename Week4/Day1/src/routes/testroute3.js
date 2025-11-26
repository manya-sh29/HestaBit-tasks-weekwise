import express from "express";
const router = express.Router();

// 1. Dummy GET route
router.get('/test3', (req, res) => {
  res.json({ message: 'Hello from GET /test3' });
});

// 2. Dummy POST route
router.post('/test3', (req, res) => {
  res.json({ message: 'Hello from POST /test3' });
});

// 3. Dummy PUT route
router.put('/test3', (req, res) => {
  res.json({ message: 'Hello from PUT /test3' });
});

// 4. Dummy DELETE route
router.delete('/test3', (req, res) => {
  res.json({ message: 'Hello from DELETE /test3' });
});



export default router;