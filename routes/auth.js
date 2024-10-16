const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@(ufl\.edu|gmail\.com|hotmail\.com)$/;

// User registration
router.post('/register', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Check email format
  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid email format. Allowed domains: @ufl.edu, @gmail.com, @hotmail.com');
  }

  // Check if the user already exists
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).send('User already exists');
  }

  // Password validation
  if (password.length < 6) {
    return res.status(400).send('Password must be at least 6 characters long');
  }

  // Check for password complexity 
  const passwordComplexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!passwordComplexityRegex.test(password)) {
    return res.status(400).send('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
  }

  // Confirm password matches
  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match');
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
