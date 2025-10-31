import mongoose from 'mongoose';
const BookingSchema = new mongoose.Schema({
  experienceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Experience' },
  name: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  price: Number,
  promoCode: String,
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Booking', BookingSchema);
