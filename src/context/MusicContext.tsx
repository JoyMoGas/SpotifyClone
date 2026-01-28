import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Song } from '../data/songs';

type ViewType = 'home' | 'liked';

interface MusicContextType {
  likedSongs: number[];
  toggleLike: (songId: number) => void;
  currentView: ViewType;
  setView: (view: ViewType) => void;
  currentSong: Song | null;
  playSong: (song: Song) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [likedSongs, setLikedSongs] = useState<number[]>(() => {
    const saved = localStorage.getItem('likedSongs');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(() => {
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
  }, [likedSongs]);

  const toggleLike = (songId: number) => {
    setLikedSongs(prev => 
      prev.includes(songId) 
        ? prev.filter(id => id !== songId) 
        : [...prev, songId]
    );
  };

  const setView = (view: ViewType) => {
    setCurrentView(view);
  }

  const playSong = (song: Song) => {
    setCurrentSong(song);
  }

  return (
    <MusicContext.Provider value={{ likedSongs, toggleLike, currentView, setView, currentSong, playSong }}>
      {children}
    </MusicContext.Provider>
  );
}


export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}
