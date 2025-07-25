// src/components/FavoriteButton.jsx
import React from "react";
import useRecipeStore from "./recipeStore"; // adjust path as needed

export default function FavoriteButton({ recipeId }) {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "6px 12px",
        borderRadius: "5px",
        backgroundColor: isFavorite ? "#f87171" : "#d1d5db",
        color: isFavorite ? "white" : "black",
        fontWeight: "bold",
        cursor: "pointer",
        border: "none",
      }}
    >
      {isFavorite ? "★ Unfavorite" : "☆ Favorite"}
    </button>
  );
}
