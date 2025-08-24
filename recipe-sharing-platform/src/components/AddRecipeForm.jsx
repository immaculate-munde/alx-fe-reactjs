import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [imageData, setImageData] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!title.trim()) formErrors.title = "Recipe title is required";
    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientsList = ingredients.split(",").map(i => i.trim());
      if (ingredientsList.length < 2) {
        formErrors.ingredients = "Please list at least 2 ingredients";
      }
    }
    if (!steps.trim()) formErrors.steps = "Preparation steps are required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map(i => i.trim()),
      instructions: steps.split(".").map(s => s.trim()).filter(Boolean),
      summary: steps.slice(0, 100) + "...",
      image: imageData || "https://via.placeholder.com/150",
    };

    onAddRecipe(newRecipe);
    alert("Recipe submitted successfully!");

    setTitle("");
    setIngredients("");
    setSteps("");
    setImageData(null);
    setErrors({});
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl"
      >
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          Add a New Recipe
        </h2>

        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-green-900 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-green-900 font-medium mb-2">
            Ingredients (separated by commas)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full border ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } rounded-lg p-3 h-24 focus:outline-none focus:ring-2 focus:ring-green-400`}
            placeholder="e.g., Tomato, Onion, Garlic"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label className="block text-green-900 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full border ${
              errors.steps ? "border-red-500" : "border-gray-300"
            } rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-green-400`}
            placeholder="Describe how to prepare the recipe..."
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-green-900 font-medium mb-2">
            Upload Recipe Image
          </label>

          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={handleImageChange}
            className="hidden"
          />

          {/* Styled label as button */}
          <label
            htmlFor="fileInput"
            className="inline-block cursor-pointer bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 font-medium"
          >
            Choose File
          </label>

          {/* Image preview */}
          {imageData && (
            <img
              src={imageData}
              alt="Recipe preview"
              className="mt-4 mx-auto w-40 h-40 object-cover rounded-xl shadow-md"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 font-medium"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
