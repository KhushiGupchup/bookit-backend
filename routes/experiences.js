import express from 'express';
import Experience from '../models/Experience.js';
const router = express.Router();

// GET all experiences
router.get('/', async (req, res) => {
  try {
    const exps = await Experience.find();
    res.json(exps);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET single experience
router.get('/:id', async (req, res) => {
  try {
    const exp = await Experience.findById(req.params.id);
    if(!exp) return res.status(404).json({ error: 'Not found' });
    res.json(exp);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
