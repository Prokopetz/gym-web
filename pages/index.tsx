import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Page from "../components/Page";
import PlaylistTile, { PlaylistTileProps } from "../components/PlaylistTile";
import SideBar from "../components/SideBar";

const playlistsInitial: Array<PlaylistTileProps> = [
  { id: "AdjfcXaKKDXAsfnI", icon: "💪", name: "Monday" },
  { id: "KKaAsunFFMADISUn", icon: "🦵", name: "My Training" },
  { id: "ASDAVAklquddSDFF", icon: "🏋", name: "Lets GOO" },
  { id: "NJVKDIqsdfifamsf", icon: "🏋", name: "Leg day" },
  { id: "UUDsdfiaSVVAXSFg", icon: "🏋", name: "Chest Day" },
  { id: "ASDFkjfuasnvmXIA", icon: "🏋", name: "Back Day" },
];

const getTitleForCurrentTime = () => {
  const hours = new Date().getHours();
  if (hours < 12) return "Good Morning";
  else if (hours < 17) return "Good Afternoon";
  else if (hours < 21) return "Good Evening";
  else return "Good Night";
};

const Home: NextPage = () => {
  const [playlists, setPlaylists] = useState(playlistsInitial);

  return (
    <Page>
      <Head>
        <title>Your Gym Friend</title>
        <meta
          name="description"
          content="A website to help you build your gym playlists"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page.Header className="w-full flex justify-start p-4 lg:hidden">
        <h1 className="text-xl font-bold text-white">
          {getTitleForCurrentTime()}
        </h1>
      </Page.Header>
      <Page.Body className="flex h-full flex-col items-center">
        <div className="w-full flex h-full">
          <div className="w-full">
            <div className="w-full grid gap-y-2 gap-x-2 grid-cols-2 xl:grid-cols-4">
              {playlists.map((playlistProp, index) => {
                return (
                  <PlaylistTile key={index} {...playlistProp}></PlaylistTile>
                );
              })}
            </div>

            <button
              className="mt-8 mb-4 lg:hidden bg-card w-full h-12 rounded text-white font-bold hover:opacity-80 hover:bg-warmGray-700 lg:h-20 duration-300"
              onClick={() =>
                setPlaylists([
                  ...playlists,
                  {
                    id: "AdjfcXxDDDSSQQsfnI",
                    icon: "💪",
                    name: "New training",
                  },
                ])
              }
            >
              Create new Training
            </button>
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};

export default Home;
