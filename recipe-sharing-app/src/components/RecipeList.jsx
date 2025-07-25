// src/components/RecipeList.jsx
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes || []);

  return (
    <div>
      <h2 style={{ color: 'silver' }}>Recipes</h2>
      {recipes.length === 0 ? (
        <p style={{ color: 'white' }}>No matching recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid silver',
              padding: '1rem',
              borderRadius: '10px',
              marginBottom: '1rem',
              backgroundColor: '#001F3F', // deep blue
              color: 'white',
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} style={{ color: 'silver' }}>
              View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
