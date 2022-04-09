const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  listingId: {
    type: String,
    required: [true, 'Please enter Listing ID'],
    trim: true,
    lowercase: true
  },
  bookingId: {
    type: String,
    required: [true, 'Please enter Booking ID'],
    trim: true,
    lowercase: true
  },

  bookingDate: {
    type: Date,
    default: Date.now,
  },
  bookingStart: {
    type: Date,
  },
  bookingEnd: {
    type: Date,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;