import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <WelcomeMessage />
      <Header />
      <MainContent />
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
      <Footer />
    </div>
  );
}


export default App;
