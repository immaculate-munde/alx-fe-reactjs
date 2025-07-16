import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import ProfilePage from "./components/ProfilePage";
import UserContext from './UserContext';
import './App.css';

function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };

  return (
    <div className="app-container">
      <UserContext.Provider value={userData}>
        <WelcomeMessage />
        <Header />
        <MainContent />

        {/* These are unrelated to the context — you keep them */}
        <UserProfile
          name="Alice"
          age="25"
          bio="Loves hiking and photography"
        />
        <UserProfile
          name="Brian"
          age="30"
          bio="Tech enthusiast and mountain biker"
        />
        <UserProfile
          name="Clara"
          age="28"
          bio="Enjoys reading, and visiting art galleries"
        />

        {/* This is where we render the component tree that uses context */}
        <ProfilePage />

        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App; 