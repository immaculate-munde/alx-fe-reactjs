// src/components/Search.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const query = [];
      if (username) query.push(`${username} in:login`);
      if (location) query.push(`location:${location}`);
      if (minRepos) query.push(`repos:>=${minRepos}`);

      const searchQuery = query.join(' ');
      const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}`);
      setUsers(response.data.items);
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <form onSubmit={fetchUsers} className="bg-white shadow-md rounded p-6 mb-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">GitHub User Search</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />
          <input
            type="number"
            placeholder="Min Repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </form>

      {loading && <p className="text-center">Loading...</p>}

      {users.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="bg-white shadow rounded p-4 text-center">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h2 className="mt-2 text-lg font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-1 inline-block"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
