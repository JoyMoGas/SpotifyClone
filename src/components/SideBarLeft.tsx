import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook } from '@fortawesome/free-solid-svg-icons';

export default function SideBarLeft() {
  return (
    <aside className="sidebar">
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FontAwesomeIcon icon={faHome} /> Inicio</h3>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FontAwesomeIcon icon={faSearch} /> Buscar</h3>
      </div>
      
      <div style={{ flex: 1 }}>
        <h4 style={{ color: '#b3b3b3', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}><FontAwesomeIcon icon={faBook} /> Tu Biblioteca</h4>
        <ul>
            <li style={{ listStyle: 'none', padding: '5px 0' }}>Playlist Rock</li>
            <li style={{ listStyle: 'none', padding: '5px 0' }}>Favoritos 2024</li>
            <li style={{ listStyle: 'none', padding: '5px 0' }}>Podcast Tech</li>
        </ul>
      </div>
    </aside>
  );
}