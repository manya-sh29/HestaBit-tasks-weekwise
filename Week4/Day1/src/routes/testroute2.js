import express from "express";
const router = express.Router();

// 1. Dummy GET route
router.get('/test', (req, res) => {
  res.json({ message: 'Hello from GET /test' });
});

// 2. Dummy POST route
router.post('/test', (req, res) => {
  res.json({ message: 'Hello from POST /test' });
});

// 3. Dummy PUT route
router.put('/test', (req, res) => {
  res.json({ message: 'Hello from PUT /test' });
});

// 4. Dummy DELETE route
router.delete('/test', (req, res) => {
  res.json({ message: 'Hello from DELETE /test' });
});

// 5. Dummy route with URL param
router.get('/user/:id', (req, res) => {
  res.json({ message: `You fetched user with ID: ${req.params.id}` });
});

//6 Dummy GET route
router.get('/test2', (req, res) => {
  res.json({ message: 'Hello from GET /test2' });
});


export default router ;