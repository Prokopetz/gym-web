import { useRouter } from "next/router";
import React from "react";

export interface PlaylistTileProps {
  name: string;
  id: string;
}

const PlaylistTile = ({ name, id }: PlaylistTileProps) => {
  const router = useRouter();

  return (
    <div
      className="group h-12 flex items-center select-none bg-card cursor-pointer rounded text-white lg:h-20 hover:bg-opacity-60 hover:bg-warmGray-700 duration-300"
      onClick={() => router.push(`/playlist/${id}`)}
    >
      <span className="p-4 lg:p-6 font-bold font-mono text-klaus">
        {name.substring(0, 3)}
      </span>
      <span className="w-0.5 h-full bg-black bg-opacity-20"></span>
      <div className="p-2 lg:p-4 w-full flex justify-between items-center">
        <span className="font-bold text-xs lg:text-base line-clamp-2">
          {name}
        </span>
      </div>
      <span className="mr-6 hidden lg:block opacity-0 group-hover:opacity-100 duration-300">{`>`}</span>
    </div>
  );
};

export default PlaylistTile;
