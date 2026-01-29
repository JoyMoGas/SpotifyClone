import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Song } from '../data/songs';
import { useAuth } from './AuthContext';

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
  const auth = useAuth();
  const [likedSongs, setLikedSongs] = useState<number[]>(() => {
    if (auth.currentUser) {
      const userFavorites = auth.getUserFavorites();
      return userFavorites.map(id => parseInt(id));
    }
    return [];
  });
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(() => {
    if (auth.currentUser) {
      const userFavorites = auth.getUserFavorites();
      setLikedSongs(userFavorites.map(id => parseInt(id)));
    } else {
      setLikedSongs([]);
    }
  }, [auth.currentUser, auth]);

  useEffect(() => {
    if (auth.currentUser && likedSongs.length >= 0) {
      auth.setUserFavorites(likedSongs.map(id => id.toString()));
    }
  }, [likedSongs, auth]);

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
