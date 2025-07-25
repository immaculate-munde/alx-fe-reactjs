// RecipeDetail.jsx
import React from 'react';
import FavoriteButton from './FavoriteButton';
import { useParams } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

function RecipeDetail() {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === id)
  );

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      <p className="mb-4">{recipe.description}</p>
      
      {/* Add Favorite Button here */}
      <FavoriteButton recipeId={recipe.id} />
    </div>
  );
}

export default RecipeDetail;
