import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

export default function SideBarRight() {
  return (
    <aside className="sidebar" style={{ width: '250px' }}>
      <h3 style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><FontAwesomeIcon icon={faUserFriends} /> Actividad de amigos</h3>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <div style={{ width: '40px', height: '40px', background: '#555', borderRadius: '50%' }}></div>
        <div>
            <p style={{ fontWeight: 'bold', fontSize: '14px' }}>Ana García</p>
            <p style={{ fontSize: '12px', color: '#b3b3b3' }}>Escuchando • Queen</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ width: '40px', height: '40px', background: '#555', borderRadius: '50%' }}></div>
        <div>
            <p style={{ fontWeight: 'bold', fontSize: '14px' }}>Carlos Dev</p>
            <p style={{ fontSize: '12px', color: '#b3b3b3' }}>Escuchando • Podcast React</p>
        </div>
      </div>
    </aside>
  );
}