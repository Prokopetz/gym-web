import axios, { AxiosError } from "axios";
import { createContext, ReactElement, useState } from "react";
import { Playlist } from "../types/Playlist";

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
}

const playlistsInitial: Array<Playlist> = [
  {
    id: "AdjfcXaKKDXAsfnI",
    icon: "💪",
    name: "Monday",
    exercises: []
  },
  {
    id: "KdnfamqYYdSvvasd",
    icon: "💪",
    name: "Thuesday",
    exercises: []
  },
];

export const PlaylistContext = createContext({
  playlists: playlistsInitial,
  addPlaylist: () => {},
  setAllPlaylists: (playlists: Playlist[]) => {}
});

const PlaylistContextProvider = ({ children }: { children: ReactElement }) => {
  const [playlists, setPlaylists] = useState(playlistsInitial);
  
  const addPlaylist = async () => {
    const response = await axios.get("/api/createPlaylist").catch((error: AxiosError) => console.log(error.toJSON()));
    const playlist: Playlist = response?.data;
    if (playlist) {
      setPlaylists([...playlists, playlist]);
    }
  };

  const setAllPlaylists = (playlists: Playlist[]) => {
    setPlaylists(playlists);
  }
  
  return (
    <PlaylistContext.Provider value={{ playlists, addPlaylist, setAllPlaylists }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistContextProvider;
