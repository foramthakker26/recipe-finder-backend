const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 Recipe Data
let recipes = [
  { id: 1, recipeName: "Pasta" },
  { id: 2, recipeName: "Pizza" }
];

// ✅ GET Recipes
app.get("/recipes", (req, res) => {
  console.log("GET recipes");
  res.json(recipes);
});

// ✅ POST Recipe
app.post("/recipes", (req, res) => {
  console.log("POST recipe");
  const newRecipe = {
    id: Date.now(),
    recipeName: req.body.recipeName
  };
  recipes.push(newRecipe);
  res.json({ message: "Recipe added successfully", recipe: newRecipe });
});

// ✅ PUT Recipe
app.put("/recipes/:id", (req, res) => {
  console.log("PUT recipe");
  const id = Number(req.params.id);
  recipes = recipes.map(r =>
    r.id === id ? { ...r, recipeName: req.body.recipeName } : r
  );
  res.json({ message: "Recipe updated successfully" });
});

// ✅ DELETE Recipe
app.delete("/recipes/:id", (req, res) => {
  console.log("DELETE recipe");
  const id = Number(req.params.id);
  recipes = recipes.filter(r => r.id !== id);
  res.json({ message: "Recipe deleted successfully" });
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
