// src/components/RecipeDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );
  const [editing, setEditing] = useState(false);

  if (!recipe) return <p style={{ color: 'white' }}>Recipe not found</p>;

  return (
    <div style={{ color: 'white' }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {editing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setEditing(false)} />
      ) : (
        <>
          <button onClick={() => setEditing(true)}>Edit</button>
          <DeleteRecipeButton id={recipe.id} onDelete={() => navigate('/')} />
        </>
      )}
    </div>
  );
}
