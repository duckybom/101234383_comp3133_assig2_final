const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    listingId: {
        type: String,
        required: [true, 'Please enter Listing ID'],
        trim: true,
        lowercase: true
      },
    listingTitle: {
    type: String,
    required: [true, 'Please enter Listing title'],
    trim: true,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, " Please enter a description of your listing"],
    trim: true,
    lowercase: true
  },
  city: {
    type: String,
    required: [true, " Please enter city"],
    trim: true,
    lowercase: true
  },
  street: {
    type: String,
    required: [true, " Please enter street"],
    trim: true,
  },
  postalCode: {
    type: String,
    required: [true, " Please enter postalCode"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, " Please enter price"],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already used, please choose another one."],
    trim: true,
    // email validation
    validate: function (value) {
      var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(value);
    }
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;