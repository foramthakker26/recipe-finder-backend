// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// ---- Middleware ----
app.use(cors());
app.use(express.json());

// ---- Routes ----
const recipeRoutes = require('./routes/reciperoutes'); // make sure filename matches exactly
app.use('/recipes', recipeRoutes);

// ---- MongoDB Connection ----
// Hardcoded MongoDB URI (replace with your own)
const MONGO_URI = 'mongodb://127.0.0.1:27017/recipeDB'; // local MongoDB
// For MongoDB Atlas you can use:
// const MONGO_URI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/recipeDB?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// ---- Start Server ----
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
