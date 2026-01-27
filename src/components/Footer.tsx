import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faPlayCircle, faStepForward, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="footer-player">
      
      <div style={{ width: '30%', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '56px', height: '56px', background: 'gray' }}></div>
        <div>
            <div style={{ fontSize: '14px', color: 'white' }}>Canción de prueba</div>
            <div style={{ fontSize: '11px', color: '#b3b3b3' }}>Artista Desconocido</div>
        </div>
      </div>

      <div style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '8px' }}>
            <span><FontAwesomeIcon icon={faStepBackward} /></span>
            <span><FontAwesomeIcon icon={faPlayCircle} /></span>
            <span><FontAwesomeIcon icon={faStepForward} /></span>
        </div>
        <div style={{ width: '100%', height: '4px', background: '#555', borderRadius: '2px' }}>
            <div style={{ width: '30%', height: '100%', background: 'white' }}></div>
        </div>
      </div>

      <div style={{ width: '30%', display: 'flex', justifyContent: 'flex-end' }}>
        <span><FontAwesomeIcon icon={faVolumeHigh} /> Volumen</span>
      </div>

    </footer>
  );
}