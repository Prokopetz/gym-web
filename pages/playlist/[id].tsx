import clsx from "clsx";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useInView } from "react-intersection-observer";
import { ChevronLeftIcon } from "@heroicons/react/solid";

interface Exercise {
  id: string;
  number: string;
  sets: number;
  reps: number;
  name: string;
}

interface PlaylistServerSideProps {
  playlist: Object & { id: string; name: string; exercises: Exercise[] };
}

const Playlist = ({ playlist }: PlaylistServerSideProps) => {
  const { ref, inView, entry } = useInView({
    initialInView: true,
    threshold: 0.5,
  });

  const router = useRouter();

  return (
    <div className="bg-dark h-screen text-white ">
      <Head>
        <title>{playlist.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        ref={ref}
        className="p-10 text-white w-full flex items-center bg-gradient-to-b from-blue-700 via-[#192ea9] to-dark z-10 text-3xl font-bold text-whitetransition-all duration-300"
      >
        <h1 className="transition-all duration-300 p-6">{playlist.name}</h1>
      </div>

      <div
        className={clsx(
          "p-4 w-full flex items-center bg-[#192ea9] justify-start text-lg font-bold transition-all duration-300 z-10 fixed top-0 text-white space-x-4",
          inView ? "bg-opacity-0" : "bg-opacity-100"
        )}
      >
        <ChevronLeftIcon
          className="w-8 h-8 p-1 rounded-full bg-black bg-opacity-70 cursor-pointer hover:opacity-50 transition-opacity"
          onClick={() => router.back()}
        />
        <h1
          className={clsx("duration-300", inView ? "opacity-0" : "opacity-100")}
        >
          {playlist.name}
        </h1>
      </div>
      <div className="px-4 py-2 w-full grid grid-cols-[1fr_8fr_2fr_2fr_2fr] sticky top-16 z-10 bg-dark border-b border-gray-300 border-opacity-10 text-white">
        <span>#</span>
        <span>Exercise</span>
        <span className="text-center">Weight</span>
        <span className="text-center">Sets</span>
        <span className="text-center">Reps</span>
      </div>
      <div className="p-4 relative">
        <div className="grid grid-cols-[1fr_8fr_2fr_2fr_2fr] gap-y-6">
          {playlist.exercises.map((exercise, index) => {
            return (
              <>
                <span className="self-center">{index + 1}</span>
                <span className="self-center">{exercise.name}</span>
                <span className="self-center text-center">30kg</span>
                <span className="self-center text-center">{exercise.sets}</span>
                <span className="self-center  text-center">
                  {exercise.reps}
                </span>
              </>
            );
          })}
        </div>
      </div>

      <div className="h-screen"> </div>
      <div className="h-screen"></div>
    </div>
  );
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const { id } = context.query;

  const playlist = require(`../../data/${id}.json`);

  return {
    props: {
      playlist: playlist,
    } as PlaylistServerSideProps,
  };
};

export default Playlist;
