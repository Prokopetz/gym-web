import React from "react";

interface PlaylistTileProps {
  name: string;
}

export const PlaylistTile = ({ name }: PlaylistTileProps) => {
  return (
    <div className="group h-12 flex items-center select-none bg-warmGray-800 cursor-pointer rounded text-white lg:h-20 hover:opacity-80 hover:bg-warmGray-700 hover:duration-300">
      <span className="p-4 lg:p-6 font-bold font-mono">
        {name.substring(0, 3)}
      </span>
      <span className="w-0.5 h-full bg-black bg-opacity-20"></span>
      <div className="p-2 lg:p-4 w-full flex justify-between items-center">
        <span className="font-bold text-xs lg:text-base line-clamp-2">
          {name}
        </span>
      </div>
      <span className="mr-6 hidden lg:block opacity-0 group-hover:opacity-100 hover:duration-300">{`>`}</span>
    </div>
  );
};
