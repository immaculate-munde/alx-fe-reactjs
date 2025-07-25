import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useRecipeStore from './recipeStore';

export default function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const recipe = recipes.find((r) => r.id === id);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id, title, description });
    navigate(`/recipe/${id}`);
  };

  if (!recipe) return <p style={{ color: 'white' }}>Recipe not found</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ color: 'silver' }}>Edit Recipe</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <br />
      <button type="submit">Save</button>
    </form>
  );
}
