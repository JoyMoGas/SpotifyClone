import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
import './styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="arrows">
        <button><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button><FontAwesomeIcon icon={faChevronRight} /></button>
      </div>

      <div className="home-icon">
        <FontAwesomeIcon icon={faHome} />
      </div>

      <div className="search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="¿Qué quieres escuchar?">
        </input>
      </div>
      
      <div className="actions">
        <button style={{ padding: '8px 16px', width: '40px', height: '40px', borderRadius: '100%', border: 'none', fontWeight: 'bold' }}>
            
        </button>
      </div>
    </nav>
  );
}