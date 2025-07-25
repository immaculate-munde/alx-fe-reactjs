import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList"; 
import SearchBar from "./components/SearchBar";   

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <AddRecipeForm />
          <RecipeList />
          <RecipeDetails />
          <SearchBar />
        </>} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}
