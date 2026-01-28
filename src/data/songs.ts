export interface Song {
  id: number;
  title: string;
  artist: string;
  cover: string;
  album?: string;
  duration?: string;
  dateAdded?: string;
}

export interface Playlist {
  id: number;
  title: string;
  description: string;
  cover: string;
}

export const playlists: Playlist[] = [
  {
    id: 1,
    title: "Daily Mix 1",
    description: "Dua Lipa, The Weeknd, Ariana Grande...",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png"
  },
  {
    id: 2,
    title: "Descubrimiento Semanal",
    description: "Tu mix semanal de música nueva. Actualizado cada lunes.",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png"
  },
  {
    id: 3,
    title: "Rock Classics",
    description: "Queen, AC/DC, Nirvana, Guns N' Roses...",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png"
  },
  {
    id: 4,
    title: "Éxitos España",
    description: "Lo más escuchado en España ahora mismo.",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png"
  },
  {
    id: 5,
    title: "Mood Booster",
    description: "Ponte de buen humor con estos temazos.",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png"
  }
];

export const songs: Song[] = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png" 
  },
  {
    id: 2,
    title: "Don't Start Now",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:03",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png"
  },
  {
    id: 3,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    duration: "5:55",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png"
  },
  {
    id: 4,
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:23",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png"
  },
  {
    id: 5,
    title: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:35",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png"
  },
  {
    id: 6,
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    duration: "2:47",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png"
  },
  {
    id: 7,
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    album: "Nevermind",
    duration: "5:01",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png"
  },
  {
    id: 8,
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "Divide",
    duration: "3:53",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png"
  },
  {
    id: 9,
    title: "Dance Monkey",
    artist: "Tones and I",
    album: "The Kids Are Coming",
    duration: "3:29",
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.png"
  }
];
