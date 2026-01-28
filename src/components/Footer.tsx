import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faPlayCircle, faStepForward, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { useMusic } from '../context/MusicContext';

export default function Footer() {
  const { currentSong } = useMusic();

  return (
    <footer className="footer-player">
      
      <div style={{ width: '30%', display: 'flex', alignItems: 'center', gap: '14px' }}>
        {currentSong && (
            <>
                <div style={{ width: '56px', height: '56px', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src={currentSong.cover} alt="cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                    <div style={{ fontSize: '14px', color: 'white', fontWeight: 'bold' }}>{currentSong.title}</div>
                    <div style={{ fontSize: '11px', color: '#b3b3b3' }}>{currentSong.artist}</div>
                </div>
            </>
        )}
      </div>

      <div style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '8px', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faStepBackward} style={{ color: '#b3b3b3', fontSize: '20px' }} />
            <FontAwesomeIcon icon={faPlayCircle} style={{ color: 'white', fontSize: '32px' }} />
            <FontAwesomeIcon icon={faStepForward} style={{ color: '#b3b3b3', fontSize: '20px' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#b3b3b3' }}>
            <span>0:00</span>
            <div style={{ flex: 1, height: '4px', background: '#555', borderRadius: '2px' }}>
                <div style={{ width: '0%', height: '100%', background: 'white', borderRadius: '2px' }}></div>
            </div>
            <span>{currentSong?.duration || '-:-'}</span>
        </div>
      </div>

      <div style={{ width: '30%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faVolumeHigh} style={{ color: '#b3b3b3' }} />
        <div style={{ width: '100px', height: '4px', background: '#555', borderRadius: '2px', marginLeft: '10px' }}>
             <div style={{ width: '70%', height: '100%', background: 'white', borderRadius: '2px' }}></div>
        </div>
      </div>

    </footer>
  );
}
