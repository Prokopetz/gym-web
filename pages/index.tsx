import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import Page from "../components/Page";
import PlaylistTile from "../components/PlaylistTile";
import { PlaylistContext } from "../context/PlaylistContext";
import getPrismaClient from "../prisma/getPrismaClient";
const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });

const getTitleForCurrentTime = () => {
  const hours = new Date().getHours();
  if (hours < 12) return "Good Morning";
  else if (hours < 17) return "Good Afternoon";
  else if (hours < 21) return "Good Evening";
  else return "Good Night";
};



const Home: NextPage = () => {
  const { playlists, addPlaylist } = useContext(PlaylistContext);
 
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
            <div className="w-full grid gap-y-2 gap-x-2 grid-cols-2 xl:grid-cols-4 text-white">
              {playlists.map((playlistProp) => {
                return (
                  <PlaylistTile key={playlistProp.id} {...playlistProp}></PlaylistTile>
                );
              })}
            </div>
            <div>
              <Picker native disableAutoFocus onEmojiClick={(event, data) => console.log(data.emoji)}/>
            </div>
              
            <button
              className="mt-8 mb-4 lg:hidden bg-card w-full h-12 rounded text-white font-bold hover:opacity-80 hover:bg-warmGray-700 lg:h-20 duration-300"
              onClick={() => addPlaylist()}
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
