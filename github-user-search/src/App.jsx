import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const fetchGitHubUser = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError('');
    } catch (err) {
      setUserData(null);
      setError('User not found. Please try a valid GitHub username.');
    }
  };

  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchGitHubUser}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt="User avatar" />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || 'No bio available'}</p>
          <p>Followers: {userData.followers}</p>
        </div>
      )}
    </div>
  );
}
