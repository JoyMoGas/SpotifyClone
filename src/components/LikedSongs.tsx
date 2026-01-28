import { useMusic } from '../context/MusicContext';
import { songs } from '../data/songs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function LikedSongs() {
  const { likedSongs, toggleLike, playSong } = useMusic();
  const [sortOption, setSortOption] = useState<'title' | 'artist' | 'date'>('date');

  const likedSongsList = songs.filter(song => likedSongs.includes(song.id));

  const sortedSongs = [...likedSongsList].sort((a, b) => {
    if (sortOption === 'title') {
      return a.title.localeCompare(b.title);
    }
    if (sortOption === 'artist') {
      return a.artist.localeCompare(b.artist);
    }
    // 'date' is effectively 'id' sort for now since we don't have date added
    return a.id - b.id; 
  });

  return (
    <div className="main-content-scroll-area">
      <div style={{ background: 'linear-gradient(to bottom, #5038a0, #121212 300px)', padding: '24px 0', minHeight: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'end', gap: '24px', marginBottom: '24px' }}>
        <div style={{ width: '232px', height: '232px', background: 'linear-gradient(135deg, #450af5, #c4efd9)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 60px rgba(0,0,0,0.5)' }}>
             <FontAwesomeIcon icon={faHeart} style={{ fontSize: '80px', color: 'white' }} />
        </div>
        <div>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>LISTA</p>
            <h1 style={{ fontSize: '80px', margin: '10px 0', fontWeight: '900' }}>Tus Me Gusta</h1>
            <p style={{ fontSize: '14px', color: '#ccc' }}>{likedSongsList.length} canciones</p>
        </div>
      </div>

        <div style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
            <button className="play-button-big" style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#1ed760', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faPlay} style={{ color: 'black', fontSize: '24px' }} />
            </button>
            
            <select 
                style={{ background: 'transparent', color: 'white', border: 'none', fontSize: '14px', fontWeight: 'bold' }}
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
            >
                <option value="date" style={{color: 'black'}}>Orden personalizado</option>
                <option value="title" style={{color: 'black'}}>Título</option>
                <option value="artist" style={{color: 'black'}}>Artista</option>
            </select>
        </div>

      <div style={{ display: 'grid', gridTemplateColumns: '50px 4fr 3fr 50px', padding: '0 16px', color: '#b3b3b3', borderBottom: '1px solid #333', paddingBottom: '8px', marginBottom: '16px' }}>
        <span>#</span>
        <span>Título</span>
        <span>Álbum</span>
        <span style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faClock} /></span>
      </div>

      <div>
        {sortedSongs.map((song, index) => (
          <div 
            key={song.id} 
            className="song-row" 
            style={{ display: 'grid', gridTemplateColumns: '50px 4fr 3fr 50px', padding: '8px 16px', alignItems: 'center', borderRadius: '4px', cursor: 'pointer' }}
            onClick={() => playSong(song)}
          >
            <span style={{ color: '#b3b3b3' }}>{index + 1}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src={song.cover} alt={song.title} style={{ width: '40px', height: '40px' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ color: 'white', fontSize: '16px' }}>{song.title}</span>
                    <span style={{ color: '#b3b3b3', fontSize: '14px' }}>{song.artist}</span>
                </div>
            </div>
            <span style={{ color: '#b3b3b3', fontSize: '14px' }}>Album Example</span>
            <div style={{ textAlign: 'center' }}>
                 <FontAwesomeIcon 
                    icon={faHeart} 
                    style={{ color: '#1ed760', cursor: 'pointer' }} 
                    onClick={() => toggleLike(song.id)}
                 />
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
