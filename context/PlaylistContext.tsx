import axios, { AxiosError } from "axios";
import React, { createContext, ReactElement, useEffect, useState } from "react";
import { Exercise } from "../types/Exercise";
import { Playlist } from "../types/Playlist";

export const PlaylistContext = createContext({
  playlists: [] as Playlist[],
  addPlaylist: () => {},
  addExercise: (exercise: Exercise) => {},
  editPlaylist: (id: string, name: string, icon: string) => {}
});

const PlaylistContextProvider = ({ children }: { children: ReactElement }) => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  
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

  const addExercise = async (exercise: Exercise) => {
    await axios.post("/api/addExercise", exercise).catch((error: AxiosError) => console.log(error.toJSON()));
    await setAllPlaylists();
  }

  const editPlaylist = async (id: string, name: string, icon: string) => {
    await axios.post("/api/editPlaylist", {id, name, icon}).catch((error: AxiosError) => console.log(error.toJSON()));
    await setAllPlaylists();
  }

  useEffect(() => {
    setAllPlaylists();
  }, []);

  return (
    <PlaylistContext.Provider value={{ playlists, addPlaylist, addExercise, editPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default React.memo(PlaylistContextProvider);
