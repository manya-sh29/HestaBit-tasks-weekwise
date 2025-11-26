import express from 'express';
const router = express.Router();

// 1. Dummy GET route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from GET /hello!' });
});

// 2. Dummy POST route
router.post('/hello', (req, res) => {
  res.json({ message: 'Hello from POST /hello!' });
});

// 3. Dummy PUT route
router.put('/hello', (req, res) => {
  res.json({ message: 'Hello from PUT /hello!' });
});

// 4. Dummy DELETE route
router.delete('/hello', (req, res) => {
  res.json({ message: 'Hello from DELETE /hello!' });
});

// 5. Dummy route with URL param
router.get('/user/:id', (req, res) => {
  res.json({ message: `You fetched user with ID: ${req.params.id}` });
});

export default router;
