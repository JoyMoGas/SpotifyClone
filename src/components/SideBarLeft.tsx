import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useMusic } from '../context/MusicContext';
import './styles/SideBarLeft.css';

export default function SideBarLeft() {
  const { setView } = useMusic();

  return (
    <aside className="sidebar">
      
      <div style={{ flex: 1 }}>
        <h4 style={{ color: '#b3b3b3', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}><FontAwesomeIcon icon={faBook} /> Tu Biblioteca</h4>
        <ul>
            <li 
                style={{ listStyle: 'none', padding: '5px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                onClick={() => setView('liked')}
            >
               <span style={{ background: 'linear-gradient(135deg, #450af5, #c4efd9)', padding: '4px', borderRadius: '2px', display: 'flex' }}>
                 <FontAwesomeIcon icon={faHeart} style={{ width: '12px', height: '12px' }} /> 
               </span>
               Tus Me Gusta
            </li>
            <li style={{ listStyle: 'none', padding: '5px 0' }}>Playlist Rock</li>
            <li style={{ listStyle: 'none', padding: '5px 0' }}>Favoritos 2025</li>
            <li style={{ listStyle: 'none', padding: '5px 0' }}>Podcast Tech</li>
        </ul>
      </div>
    </aside>
  );
}
