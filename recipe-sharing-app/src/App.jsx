import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList"; // Assume you have this

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <AddRecipeForm />
          <RecipeList />
          <RecipeDetail />
        </>} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}
