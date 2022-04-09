const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter user name'],
    unique: [true, "Username already used, please choose another one."],
    lowercase: true
  },
  firstname: {
    type: String,
    required: [true, 'Please enter first name'],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, 'Please enter last name'],
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
  type: {
    type: String,
    required: [true, 'Please enter type'],
    enum: ['admin', 'customer'],
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Please enter password, password should be 8 characters, at least one letter, one number and one special character'],
    trim: true,
    // password validation 8 characters, at least one letter, one number and one special character:
    validate: function (value) {
      var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      return passwordRegex.test(value);
    }
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;