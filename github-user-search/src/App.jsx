import './index.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    if (!username) return;
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      alert('User not found!');
      setUserData(null);
    }
  };

  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: '0.6em',
          width: '100%',
          marginBottom: '1rem',
          borderRadius: '6px',
          border: '1px solid #444',
          backgroundColor: '#3a3a3a',
          color: 'white',
        }}
      />
      <button onClick={handleSearch} style={{
        backgroundColor: '#007bff',
        border: 'none',
        color: 'white',
        padding: '0.6em 1.2em',
        borderRadius: '6px',
        width: '100%',
        cursor: 'pointer',
      }}>
        Search
      </button>

      {userData && (
        <div style={{ marginTop: '2rem', color: 'white' }}>
          <img src={userData.avatar_url} alt="avatar" width="100" style={{ borderRadius: '50%' }} />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <p>Followers: {userData.followers}</p>
        </div>
      )}
    </div>
  );
}

export default App;
