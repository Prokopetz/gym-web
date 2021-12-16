import React from "react";

interface PlaylistCardProps {
  name: string;
}

export const PlaylistCard = ({ name }: PlaylistCardProps) => {
  return (
    <div className="h-14 flex items-center lg:justify-center lg:flex-col lg:h-40 lg:w-36 select-none bg-warmGray-800 cursor-pointer rounded-md text-white whitespace-nowrap">
      <span className="p-4 font-bold font-mono lg:flex-1 lg:flex lg:justify-center lg:items-center">
        {name.substring(0, 3)}
      </span>
      <span className="w-0.5 h-full lg:w-full lg:h-0.5 bg-black bg-opacity-20"></span>
      <span className="ml-2 lg:ml-0 lg:p-4 font-bold text-xs">{name}</span>
    </div>
  );
};
