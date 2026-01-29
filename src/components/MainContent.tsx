import { songs, playlists } from '../data/songs';
import { useMusic } from '../context/MusicContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function MainContent() {
  const { likedSongs, toggleLike, playSong } = useMusic();
  const [sortOption, setSortOption] = useState<'title' | 'artist' | 'date'>('date');

  const sortedSongs = [...songs].sort((a, b) => {
    if (sortOption === 'title') return a.title.localeCompare(b.title);
    if (sortOption === 'artist') return a.artist.localeCompare(b.artist);
    return a.id - b.id; 
  });

  return (
    <main className="main-content-scroll-area">
      
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 'bold' }}>Listas recomendadas</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '24px' }}>
            {playlists.map(playlist => (
                <article key={playlist.id} style={{ background: '#181818', padding: '16px', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s ease' }} className="playlist-card">
                    <div style={{ width: '100%', aspectRatio: '1/1', background: '#333', marginBottom: '16px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
                        <img src={playlist.cover} alt={playlist.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h4 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '700', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{playlist.title}</h4>
                    <p style={{ fontSize: '14px', color: '#b3b3b3', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{playlist.description}</p>
                </article>
            ))}
        </div>
      </section>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
           <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Tendencias</h2>
           <select 
                style={{ background: '#2a2a2a', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
            >
                <option value="date">Relevancia</option>
                <option value="title">Título</option>
                <option value="artist">Artista</option>
            </select>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '16px 4fr 3fr 3fr 50px', padding: '0 16px', color: '#b3b3b3', borderBottom: '1px solid #2a2a2a', paddingBottom: '12px', marginBottom: '16px', fontSize: '14px' }}>
            <span>#</span>
            <span>Título</span>
            <span>Álbum</span>
            <span>Agregado</span>
            <span style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faClock} /></span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {sortedSongs.map((song, index) => (
                <div 
                    key={song.id} 
                    className="song-row" 
                    style={{ display: 'grid', gridTemplateColumns: '16px 4fr 3fr 3fr 50px', padding: '12px 16px', alignItems: 'center', borderRadius: '4px', cursor: 'pointer' }}
                    onClick={() => playSong(song)} 
                >
                    <span style={{ color: '#b3b3b3', fontSize: '14px' }}>{index + 1}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <img src={song.cover} alt={song.title} style={{ width: '40px', height: '40px', borderRadius: '4px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'white', fontSize: '16px', fontWeight: 'normal' }}>{song.title}</span>
                            <span style={{ color: '#b3b3b3', fontSize: '14px' }}>{song.artist}</span>
                        </div>
                    </div>
                    <span style={{ color: '#b3b3b3', fontSize: '14px' }}>{song.album || 'Single'}</span>
                    <span style={{ color: '#b3b3b3', fontSize: '14px' }}>2 days ago</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
                         <FontAwesomeIcon 
                            icon={faHeart} 
                            style={{ 
                                color: likedSongs.includes(song.id) ? '#1db954' : '#b3b3b3', 
                                fontSize: '16px', 
                                cursor: 'pointer', 
                                opacity: 1
                            }}
                            className="heart-icon"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleLike(song.id);
                            }}
                        />
                        <span style={{ color: '#b3b3b3', fontSize: '14px' }}>{song.duration}</span>
                    </div>
                </div>
            ))}
        </div>
      </section>
      
      <div style={{ height: '20px' }}></div>
    </main>
  );
}

