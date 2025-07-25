// src/components/SearchBar.jsx
import useRecipeStore from './recipeStore';

export default function SearchBar() {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '0.5rem',
        marginBottom: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '100%',
      }}
    />
  );
}
