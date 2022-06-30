import axios, { AxiosError } from "axios";
import React, { createContext, ReactElement, useEffect, useState } from "react";
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


  const setAllPlaylists = async () => {
    const response = await axios.get("/api/getAllPlaylists").catch((error: AxiosError) => console.log(error.toJSON()));
    const playlists: Playlist[] = response?.data;
    if (playlists) {
      setPlaylists(playlists);
    }
  }

  useEffect(() => {
    setAllPlaylists();
  }, []);

  return (
    <PlaylistContext.Provider value={{ playlists, addPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default React.memo(PlaylistContextProvider);
