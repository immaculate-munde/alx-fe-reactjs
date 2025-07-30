import { useState } from "react";
import { fetchUserData, fetchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setResults([]);
    setError(null);
    setLoading(true);

    try {
      if (location || minRepos) {
        // Advanced Search
        const users = await fetchUsers({ username, location, minRepos });
        setResults(users);
      } else {
        // Basic Search
        const user = await fetchUserData(username);
        setResults([user]); // Wrap in array for consistent mapping
      }
    } catch (err) {
      setError("User not found or an error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub User Search</h1>

      <form onSubmit={handleSearch} className="space-y-4 bg-gray-800 p-4 rounded-lg shadow">
        <div>
          <label className="block text-sm mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
            placeholder="e.g. octocat"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Location (optional)</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
              placeholder="e.g. Nairobi"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Minimum Repos (optional)</label>
            <input
              type="number"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
              placeholder="e.g. 10"
              min="0"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center text-yellow-400">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="bg-gray-700 p-4 rounded shadow flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full border border-gray-500"
            />
            <div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-400 hover:underline"
              >
                {user.login}
              </a>
              {user.location && <p className="text-sm text-gray-300">📍 {user.location}</p>}
              {user.public_repos !== undefined && (
                <p className="text-sm text-gray-300">📦 {user.public_repos} repositories</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
