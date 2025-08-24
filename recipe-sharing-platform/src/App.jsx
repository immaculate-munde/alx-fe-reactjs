import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";

import data from "./data.json";
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("recipes");
    return saved ? JSON.parse(saved) : data;
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const navigate = useNavigate();

  const addRecipe = (newRecipe) => {
    setRecipes((prev) => [newRecipe, ...prev]);
    navigate("/");
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipes((prev) =>
      prev.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r))
    );
    navigate("/");
  };

  const deleteRecipe = (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      setRecipes((prev) => prev.filter((r) => r.id !== id));
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            recipes={recipes}
            onDeleteRecipe={deleteRecipe}
            // onEditRecipe navigates to edit form route
          />
        }
      />
      <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={addRecipe} />} />
      <Route
        path="/edit-recipe/:id"
        element={<EditRecipe recipes={recipes} onUpdateRecipe={updateRecipe} />}
      />
      <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
    </Routes>
  );
}

// EditRecipe wrapper
function EditRecipe({ recipes, onUpdateRecipe }) {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id.toString() === id);

  if (!recipe) {
    return <p className="text-center mt-10">Recipe not found</p>;
  }

  return <AddRecipeForm existingRecipe={recipe} onAddRecipe={onUpdateRecipe} />;
}

export default App;
