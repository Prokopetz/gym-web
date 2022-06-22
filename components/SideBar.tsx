import { HomeIcon } from "@heroicons/react/solid";
import { useDrag } from "@use-gesture/react";
import React, { useState } from "react";

const SideBar = () => {
  const [sideBarWidth, setSideBarWidth] = useState(300);

  const bind = useDrag(({ xy: [x] }) => {
    const windowSize = window.innerWidth;
    if (x >= windowSize / 8 && x <= windowSize / 4) {
      setSideBarWidth(x);
    }
  });

  return (
    <>
      <div>
        <div
          className="relative bg-black h-full shadow-lg"
          style={{ width: sideBarWidth }}
        >
          <label
            className="absolute left-full h-full w-[2px] cursor-col-resize transition-all hover:bg-gray-500/30"
            {...bind()}
          />
          <div className="p-4 flex flex-col space-y-4">
            <div className="w-full flex flex-col items-start overflow-hidden overflow-ellipsis space-y-4">
              <div className="flex space-x-4 items-center justify-center">
                <HomeIcon className="w-6" />
                <h1 className="font-semibold">Home</h1>
              </div>
              <div className="flex space-x-4 items-center justify-center">
                <HomeIcon className="w-6" />
                <h1 className="font-semibold">Home</h1>
              </div>
              <div className="flex space-x-4 items-center justify-center">
                <HomeIcon className="w-6" />
                <h1 className="font-semibold">Home</h1>
              </div>
              <div className="flex space-x-4 items-center whitespace-nowrap w-full">
                <div>
                  <HomeIcon className="w-6" />
                </div>
                <h1 className="font-semibold text-ellipsis overflow-hidden w-max">
                  asdasdasdausdausdhausdhasudhausdhausdh
                </h1>
              </div>
            </div>
            <div className="h-[2px] w-full bg-gray-500/30"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
