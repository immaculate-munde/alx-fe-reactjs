import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/recipeDetails";
import RecipeList from "./components/RecipeList"; // Assume you have this

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <AddRecipeForm />
          <RecipeList />
          <RecipeDetails />
        </>} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}
