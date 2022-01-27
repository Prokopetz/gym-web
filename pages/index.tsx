import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import PlaylistTile, { PlaylistTileProps } from "../components/PlaylistTile";
import styles from "../styles/Home.module.css";

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
  const router = useRouter();

  return (
    <div className="px-4 bg-dark">
      <Head>
        <title>Your Gym Friend</title>
        <meta
          name="description"
          content="A website to help you build your gym playlists"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full flex-col items-center justify-center">
        <div className="w-full flex justify-start mb-4 mt-10">
          <h1 className="text-xl font-bold text-white">
            {getTitleForCurrentTime()}
          </h1>
        </div>

        <div className="w-full grid grid-cols-2 gap-y-2 gap-x-2 sm:grid-cols-3 xl:grid-cols-4">
          {playlists.map((playlistProp, index) => {
            return <PlaylistTile key={index} {...playlistProp}></PlaylistTile>;
          })}
        </div>
        <button>abacate</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
