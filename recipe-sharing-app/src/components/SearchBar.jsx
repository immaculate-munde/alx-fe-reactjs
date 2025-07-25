// src/components/SearchBar.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes by name..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
      style={{
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        marginBottom: '1rem',
        borderRadius: '5px',
        border: '1px solid silver',
      }}
    />
  );
}
