import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import experiencesRouter from './routes/experiences.js';
import bookingsRouter from './routes/bookings.js';
import promoRouter from './routes/promo.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bookit';

mongoose.connect(MONGO_URI)
  .then(()=> console.log('✅ MongoDB connected'))
  .catch(err=> console.error(err));

app.use('/api/experiences', experiencesRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/promo', promoRouter);

app.get('/', (req, res) => res.send({ status: 'ok', env: process.env.NODE_ENV || 'dev' }));

app.listen(PORT, ()=> console.log('Server running on port', PORT));
