import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React from "react";

const Playlist = ({
  id,
  exercises,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div></div>;
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const { id } = context.query;

  return {
    props: {
      id: id,
      exercises: [{ id: "exercise1", name: "Exercise 1" }],
    },
  };
};

export default Playlist;
