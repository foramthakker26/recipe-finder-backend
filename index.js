const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes (MATCHING reciperoutes.js)
const recipeRoutes = require("./routes/reciperoutes");
app.use("/api/recipes", recipeRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("RecipeFinder Backend is running");
});

const PORT = process.env.PORT || 5000; // use Render's PORT or fallback to 5000 for local
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
  })
  .catch((error) => {
    console.error(error);
  });
