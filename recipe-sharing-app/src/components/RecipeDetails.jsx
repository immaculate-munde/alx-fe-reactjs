import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) return <p style={{ color: 'white' }}>Recipe not found</p>;

  return (
    <div style={{ color: 'white' }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <Link to={`/edit/${recipe.id}`} style={{ marginRight: '10px' }}>
        Edit
      </Link>
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
}
