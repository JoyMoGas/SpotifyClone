import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div style={{ display: 'flex', gap: '10px' }}>
        <button style={{ borderRadius: '50%', width: '30px', height: '30px', border: 'none', background: '#000', color: 'white' }}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button style={{ borderRadius: '50%', width: '30px', height: '30px', border: 'none', background: '#000', color: 'white' }}><FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
      
      <div style={{ marginLeft: 'auto' }}>
        <button style={{ padding: '8px 16px', borderRadius: '20px', border: 'none', fontWeight: 'bold' }}>
            Explorar Premium
        </button>
      </div>
    </nav>
  );
}