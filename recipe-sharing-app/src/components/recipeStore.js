// src/store/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  setRecipes: (recipes) => set({ recipes }),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () => {
    const { favorites, recipes } = get();
    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;
