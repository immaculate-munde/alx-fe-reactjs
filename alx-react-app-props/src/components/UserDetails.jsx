import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ padding: '10px', border: '1px solid gray' }}>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
