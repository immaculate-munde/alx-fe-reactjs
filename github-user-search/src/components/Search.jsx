import React from "react";

export default function Search() {
  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}
