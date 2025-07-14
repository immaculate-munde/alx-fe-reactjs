function UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}
    >
      <h2 style={{ color: 'blue', fontSize: '20px' }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
