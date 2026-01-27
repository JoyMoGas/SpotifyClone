import './App.css';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import SideBarLeft from './components/SideBarLeft';
import SideBarRight from './components/SideBarRight';

function App() {
  return (
    <div className="app-container">
      
      <div className="main-body">
        <SideBarLeft />
        
        <div className="center-wrapper">
            <Navbar />
            <MainContent />
        </div>

        <SideBarRight />
      </div>

      <Footer />
      
    </div>
  );
}

export default App;