// src/store/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // trigger filtering when searchTerm updates
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe].filter((recipe) =>
        recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated.filter((recipe) =>
          recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
        ),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter((recipe) =>
          recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
        ),
      };
    }),
}));

export default useRecipeStore;
