// src/components/FavoritesList.jsx
import useRecipeStore from './recipeStore';

export default function FavoritesList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800">My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <ul>
          {favoriteRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3 className="text-lg font-semibold">{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
