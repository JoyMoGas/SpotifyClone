import './App.css';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import SideBarLeft from './components/SideBarLeft';
import SideBarRight from './components/SideBarRight';
import LikedSongs from './components/LikedSongs';
import Login from './components/Login';
import { MusicProvider, useMusic } from './context/MusicContext';
import { AuthProvider, useAuth } from './context/AuthContext';

function AppContent() {
  const { currentView, currentSong } = useMusic();
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Login />;
  }

  const gridTemplateColumns = currentSong 
    ? "280px 1fr 280px" 
    : "280px 1fr 0px";

  return (
    <div className="app-container" style={{ gridTemplateColumns }}>
      
      <div className="main-body">
        <SideBarLeft />
        
        <div className="center-wrapper">
            <Navbar />
            {currentView === 'home' ? <MainContent /> : <LikedSongs />}
        </div>

        <SideBarRight />
      </div>

      <Footer />
      
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <MusicProvider>
        <AppContent />
      </MusicProvider>
    </AuthProvider>
  );
}

export default App;