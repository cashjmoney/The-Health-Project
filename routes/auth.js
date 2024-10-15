const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// User registration
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  
  // Check if the user already exists
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).send('User already exists');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  user = new User({
    username,
    email,
    password: hashedPassword,
  });

  await user.save();
  res.status(201).send('User registered successfully');
});

module.exports = router;
