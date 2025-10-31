import express from 'express';
const router = express.Router();

// Simple in-memory promo list
const promos = {
  SAVE10: { type: 'percent', value: 10 },
  FLAT100: { type: 'flat', value: 100 },
  WELCOME50: { type: 'flat', value: 50 }, // optional extra
};

router.post('/validate', (req, res) => {
  const { code } = req.body;
  const p = promos[code?.toUpperCase()];
  if (!p) return res.json({ valid: false });
  res.json({ valid: true, promo: p });
});

export default router;
