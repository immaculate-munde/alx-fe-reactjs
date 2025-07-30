import { useState } from 'react';
import axios from 'axios';

export default function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError('');
    } catch (err) {
      setUserData(null);
      setError("Looks like we cant find the user");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    fetchUserData();
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Search
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

      {userData && (
        <div className="user-info" style={{ marginTop: '2rem' }}>
          <img src={userData.avatar_url} alt="User avatar" width="100" />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || 'No bio available'}</p>
          <p>Followers: {userData.followers}</p>
        </div>
      )}
    </div>
  );
}
