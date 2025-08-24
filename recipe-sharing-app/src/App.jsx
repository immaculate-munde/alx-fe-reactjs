import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList"; 
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle"; // 👈 Add this
import "./theme.css"; // 👈 Import CSS

export default function App() {
  return (
    <Router>
      <div style={{ padding: "2rem", minHeight: "100vh" }}>
        <ThemeToggle />
        <h1 style={{ textAlign: "center" }}>Recipe Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
