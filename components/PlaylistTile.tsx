import React from "react";

interface PlaylistTileProps {
  name: string;
}

export const PlaylistTile = ({ name }: PlaylistTileProps) => {
  return (
    <div className="h-12 flex items-center select-none bg-warmGray-800 cursor-pointer rounded text-white whitespace-nowrap md:h-20 hover:opacity-80 hover:bg-warmGray-700 hover:duration-300">
      <span className="p-4 md:p-6 font-bold font-mono">
        {name.substring(0, 3)}
      </span>
      <span className="w-0.5 h-full bg-black bg-opacity-20"></span>
      <span className="p-2 md:p-4 font-bold text-xs overflow-ellipsis overflow-hidden  md:text-base">
        {name}
      </span>
    </div>
  );
};
