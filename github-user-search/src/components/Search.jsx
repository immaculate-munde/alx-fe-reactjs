import React from "react";

export default function Search() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <form>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          className="w-full px-4 py-2 rounded-md text-black"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  );
}
