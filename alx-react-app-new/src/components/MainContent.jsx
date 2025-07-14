import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#e8f0fe' }}>
      <p style={{ color: 'black', fontStyle: 'italic', fontSize: '16px', marginBottom: '15px' }}>I love to visit New York, Paris, and Tokyo.</p>
      <UserProfile name="Jane Doe" age={28} bio="Loves hiking and photography." />
      <UserProfile name="John Smith" age={32} bio="Enjoys architecture and food." />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>
      <UserProfile name="Brian" age="30" bio="Tech enthusiast and mountain biker"/>
      <UserProfile name="Clara" age="28"bio="Enjoys reading, and visiting art galleries"/>
      <UserProfile name="David" age="35" bio="Avid traveler and foodie"/>
    </main>
  );
}

export default MainContent;
