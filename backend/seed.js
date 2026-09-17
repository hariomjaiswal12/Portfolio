const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    const adminExists = await User.findOne({ username: process.env.ADMIN_USERNAME });
    if (adminExists) {
      console.log('Admin already exists');
      process.exit(0);
    }

    const admin = new User({
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD, // Pass plain text, let pre-save hook handle hashing
      role: 'admin',
    });

    await admin.save();

    console.log('Admin user created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();
