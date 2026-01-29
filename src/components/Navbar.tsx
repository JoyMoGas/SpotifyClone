import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSearch, faHome, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './styles/Navbar.css';
import { useMusic } from '../context/MusicContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { setView } = useMusic();
  const { currentUser, logout } = useAuth();
  return (
    <nav className="navbar">
      <div className="arrows">
        <button><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button><FontAwesomeIcon icon={faChevronRight} /></button>
      </div>

      <div className="home-icon" onClick={() => setView('home')}>
        
        <FontAwesomeIcon icon={faHome} />
      </div>

      <div className="search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="¿Qué quieres escuchar?">
        </input>
      </div>
      
      <div className="actions">
        <div className="user-info">
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
          <span>{currentUser}</span>
        </div>
        <button 
          onClick={logout}
          className="logout-btn"
          title="Cerrar sesión"
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </nav>
  );
}