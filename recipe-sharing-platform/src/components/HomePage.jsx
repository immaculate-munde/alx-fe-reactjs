import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import recipes from "../data.json";

const HomePage = ({ onDeleteRecipe }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen py-10 px-5">
      {/* Heading */}
      <div className="text-center mb-10">
        <div className="bg-white shadow-md rounded-2xl inline-block px-6 py-3">
          <h1 className="text-2xl font-bold text-green-800">
            Healthy <span className="text-green-600">Lifestyle</span> Recipes
          </h1>
        </div>
      </div>

      {/* Add Recipe Button */}
      <div className="text-center mb-6">
        <Link
          to="/add-recipe"
          className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          ➕ Add a Recipe
        </Link>
      </div>

      {/* Responsive Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <div
              key={recipe.id}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 p-6 ${
                index % 2 === 0 ? "mt-0" : "mt-10"
              }`}
            >
              {/* Circular Image */}
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-green-900 text-center">
                {recipe.title}
              </h2>

              {/* Summary */}
              <p className="text-gray-600 text-sm mt-2 text-center">
                {recipe.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 mt-4 mb-4">
                <button
                  onClick={() => navigate(`/edit-recipe/${recipe.id}`)}
                  className="px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500 text-white transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteRecipe(recipe.id)}
                  className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-white transition"
                >
                  Delete
                </button>
              </div>

              {/* View Button */}
              <div className="text-center">
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="mt-4 inline-block px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No recipes available.
          </p>
        )}
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mt-14">
        <a
          href="#"
          className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition"
        >
          <FaYoutube className="text-green-700 text-xl" />
        </a>
        <a
          href="#"
          className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition"
        >
          <FaInstagram className="text-green-700 text-xl" />
        </a>
        <a
          href="#"
          className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition"
        >
          <FaTwitter className="text-green-700 text-xl" />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
