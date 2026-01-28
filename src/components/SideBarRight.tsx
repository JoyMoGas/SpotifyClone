import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useMusic } from '../context/MusicContext';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default function SideBarRight() {
  const { currentSong } = useMusic();

  if (!currentSong) return null;

  return (
    <aside className="sidebar-right">
      <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>{currentSong.title}</h3>
      
      <div style={{ width: '100%', aspectRatio: '1/1', background: '#333', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px', boxShadow: '0 8px 16px rgba(0,0,0,0.5)' }}>
         <img src={currentSong.cover} alt={currentSong.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
         <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, marginBottom: '4px' }}>{currentSong.title}</h2>
            <p style={{ color: '#b3b3b3', fontSize: '16px', margin: 0 }}>{currentSong.artist}</p>
         </div>
         <div style={{ display: 'flex', gap: '16px' }}>
            <FontAwesomeIcon icon={faHeart} style={{ color: '#1ed760', fontSize: '20px', cursor: 'pointer' }} />
            <FontAwesomeIcon icon={faEllipsisH} style={{ color: '#b3b3b3', fontSize: '20px', cursor: 'pointer' }} />
         </div>
      </div>

      <div style={{ background: '#242424', borderRadius: '8px', padding: '16px' }}>
         <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Acerca del artista</h4>
         <div style={{ width: '100%', height: '160px', background: '#333', borderRadius: '8px', marginBottom: '12px', backgroundSize: 'cover', backgroundImage: `url(${currentSong.cover})`, backgroundPosition: 'center' }}></div>
         <h4 style={{ fontWeight: 'bold', marginBottom: '4px' }}>{currentSong.artist}</h4>
         <p style={{ color: '#b3b3b3', fontSize: '14px', lineHeight: '1.5' }}>
            Artista verificado. escuchando mensualmente...
         </p>
      </div>

    </aside>
  );
}
