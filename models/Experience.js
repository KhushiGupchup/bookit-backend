import mongoose from 'mongoose';
const SlotSchema = new mongoose.Schema({
  date: String,
  time: String,
  seats: Number
});
const ExperienceSchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  duration: String,
  description: String,
  image: String,
  slots: [SlotSchema]
});
export default mongoose.model('Experience', ExperienceSchema);
