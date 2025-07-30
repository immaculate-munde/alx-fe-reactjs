import { useState } from 'react';
import axios from 'axios';

export default function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // NEW loading state

  const fetchUserData = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError('');
    } catch (err) {
      setUserData(null);
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

      {loading && <p style={{ marginTop: '1rem' }}>Loading...</p>}
      {error && !loading && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

      {userData && !loading && (
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
