import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Experience from './models/Experience.js';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bookit';

const data = [
  {
    title: "Bali Beach Sunrise",
    location: "Bali, Indonesia",
    price: 120,
    duration: "4 hours",
    description: "Sunrise yoga and beach walk with a local guide.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    slots: [
      { date: "2025-11-01", time: "06:00", seats: 8 },
      { date: "2025-11-02", time: "06:00", seats: 8 }
    ]
  },
  {
    title: "Desert Safari Adventure",
    location: "Rajasthan, India",
    price: 80,
    duration: "6 hours",
    description: "Dune bashing, camel ride, and cultural evening.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    slots: [
      { date: "2025-11-03", time: "15:00", seats: 10 },
      { date: "2025-11-04", time: "15:00", seats: 10 }
    ]
  },
  {
    title: "City Food Crawl",
    location: "Bangkok, Thailand",
    price: 60,
    duration: "3 hours",
    description: "Street food tasting across the city's best stalls.",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
    slots: [
      { date: "2025-11-05", time: "18:00", seats: 6 },
      { date: "2025-11-06", time: "18:00", seats: 6 }
    ]
  },
  {
    title: "Mountain Trek",
    location: "Himalayas, India",
    price: 200,
    duration: "8 hours",
    description: "Guided trek with packed lunch and safety gear.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    slots: [
      { date: "2025-11-07", time: "07:00", seats: 5 },
      { date: "2025-11-08", time: "07:00", seats: 5 }
    ]
  },
  {
    title: "Venice Canal Tour",
    location: "Venice, Italy",
    price: 150,
    duration: "2 hours",
    description: "Romantic gondola ride through the canals of Venice.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    slots: [
      { date: "2025-11-09", time: "10:00", seats: 4 },
      { date: "2025-11-10", time: "12:00", seats: 6 }
    ]
  },
  {
    title: "Tokyo Night Lights",
    location: "Tokyo, Japan",
    price: 90,
    duration: "3 hours",
    description: "Explore Tokyo's neon streets and late-night food spots.",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
    slots: [
      { date: "2025-11-11", time: "19:00", seats: 8 },
      { date: "2025-11-12", time: "19:00", seats: 8 }
    ]
  },
  {
    title: "Santorini Sunset Cruise",
    location: "Santorini, Greece",
    price: 180,
    duration: "5 hours",
    description: "Luxury catamaran cruise with dinner and sunset view.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    slots: [
      { date: "2025-11-13", time: "17:00", seats: 7 },
      { date: "2025-11-14", time: "17:00", seats: 7 }
    ]
  },
  {
    title: "Amazon Rainforest Expedition",
    location: "Brazil, South America",
    price: 250,
    duration: "2 days",
    description: "Experience the wild Amazon with expert guides and canoe rides.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    slots: [
      { date: "2025-11-15", time: "08:00", seats: 6 },
      { date: "2025-11-16", time: "08:00", seats: 6 }
    ]
  },
  {
    title: "Paris City Highlights",
    location: "Paris, France",
    price: 130,
    duration: "5 hours",
    description: "A tour of Eiffel Tower, Louvre, and Seine River cruise.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    slots: [
      { date: "2025-11-17", time: "09:00", seats: 10 },
      { date: "2025-11-18", time: "09:00", seats: 10 }
    ]
  }
];

mongoose.connect(MONGO_URI).then(async () => {
  await Experience.deleteMany({});
  await Experience.insertMany(data);
  console.log('✅ Seeded 9 experiences successfully!');
  mongoose.disconnect();
}).catch(console.error);
