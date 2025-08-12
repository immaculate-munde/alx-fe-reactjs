import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulate data fetching from local JSON
    const found = data.find((r) => r.id.toString() === id);
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold text-red-500">Recipe not found</h2>
        <Link to="/" className="mt-4 text-green-600 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        {/* Image */}
        <div className="w-full h-72 rounded-2xl overflow-hidden mb-6">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          {recipe.title}
        </h1>

        {/* Summary */}
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
