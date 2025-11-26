import express from 'express';
const router = express.Router();

// 1. Dummy GET route
router.get('/hyy', (req, res) => {
  res.json({ message: 'Hello from GET /hyy!' });
});

// 2. Dummy POST route
router.post('/hyy', (req, res) => {
  res.json({ message: 'Hello from POST /hyy!' });
});

// 3. Dummy PUT route
router.put('/hyy', (req, res) => {
  res.json({ message: 'Hello from PUT /hyy!' });
});

// 4. Dummy DELETE route
router.delete('/hyy', (req, res) => {
  res.json({ message: 'Hello from DELETE /hyy!' });
});

// 5. Dummy route with URL param
router.get('/user/:id', (req, res) => {
  res.json({ message: `You fetched user with ID: ${req.params.id}` });
});

//6 Dummy GET route
router.get('/star', (req, res) => {
  res.json({ message: 'Hello from GET /star' });
});

// 7. Dummy POST route
router.post('/star', (req, res) => {
  res.json({ message: 'Hello from POST /star' });
});

// 8. Dummy PUT route
router.put('/star', (req, res) => {
  res.json({ message: 'Hello from PUT /star' });
});



export default router;
