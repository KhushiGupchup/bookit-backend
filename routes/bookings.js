import express from "express";
import Booking from "../models/Booking.js";
import Experience from "../models/Experience.js";

const router = express.Router();

// POST /api/bookings
router.post("/", async (req, res) => {
  try {
    const { experienceId, name, email, phone, date, time, price, promoCode } = req.body;

    if (!experienceId || !name || !email || !date || !time) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // find experience
    const exp = await Experience.findById(experienceId);
    if (!exp) return res.status(400).json({ error: "Invalid experience" });

    // find slot
    const slot = exp.slots.find((s) => s.date === date && s.time === time);
    if (!slot) return res.status(400).json({ error: "Slot not found" });
    if (slot.seats <= 0) return res.status(400).json({ error: "Slot sold out" });

    // prevent duplicate booking
    const existing = await Booking.findOne({ experienceId, email, date, time });
    if (existing)
      return res.status(400).json({ error: "You already booked this slot" });

    // reduce available seats
    slot.seats -= 1;
    await exp.save();

    const booking = new Booking({
      experienceId,
      name,
      email,
      phone,
      date,
      time,
      price,
      promoCode,
    });
    await booking.save();

    res.json({ success: true, booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
