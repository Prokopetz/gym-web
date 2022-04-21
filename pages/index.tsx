import type { NextPage } from "next";
import Head from "next/head";
import PlaylistTile, { PlaylistTileProps } from "../components/PlaylistTile";

const playlists: Array<PlaylistTileProps> = [
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
  return (
    <div className="p-4 bg-dark h-screen">
      <Head>
        <title>Your Gym Friend</title>
        <meta
          name="description"
          content="A website to help you build your gym playlists"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full flex-col items-center">
        <div className="w-full flex justify-start mb-4 mt-4">
          <h1 className="text-xl font-bold text-white">
            {getTitleForCurrentTime()}
          </h1>
        </div>

        <div className="w-full grid grid-cols-2 gap-y-2 gap-x-2 sm:grid-cols-3 xl:grid-cols-4">
          {playlists.map((playlistProp, index) => {
            return <PlaylistTile key={index} {...playlistProp}></PlaylistTile>;
          })}
        </div>

        <div className="mt-8 mb-4 w-full ">
          <button className="bg-card w-full h-12 rounded text-white font-bold hover:opacity-80 hover:bg-warmGray-700 lg:h-20 duration-300">
            Create new Training
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
