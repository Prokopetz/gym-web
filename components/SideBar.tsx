import { useDrag } from "@use-gesture/react";
import clsx from "clsx";
import React, { ReactElement, useContext, useState } from "react";
import { PlaylistContext } from "../context/PlaylistContext";

const Divider = () => {
  return <div className="h-[2px] w-full bg-gray-500/30"></div>;
};

const Item = ({
  title,
  icon,
  onClick,
  className
}: {
  title: string;
  icon?: React.ComponentProps<"svg"> | string;
  onClick?: Function;
  className?: string
}) => {
  return (
    <div
      className={clsx("flex space-x-4 items-center justify-center hover:opacity-50 transition-all duration-300", {
        "cursor-pointer": onClick,
      }, className)}
      onClick={() => onClick && onClick()}
    >
      {icon && <div className="w-6">{icon}</div>}
      <h1 className="font-semibold">{title}</h1>
    </div>
  );
};

const Section = ({ children }: { children: ReactElement | ReactElement[] | JSX.Element[] }) => {
  return (
    <div className="w-full flex flex-col items-start overflow-hidden overflow-ellipsis space-y-4">
      {children}
    </div>
  );
};

const SideBar = ({ children }: {children: ReactElement | ReactElement[] }) => {  
  const [sideBarWidth, setSideBarWidth] = useState<number>();

  const bind = useDrag(({ xy: [x] }) => {
    const windowSize = window.innerWidth;
    if (x >= windowSize / 8 && x <= windowSize / 4) {
      setSideBarWidth(x);
    }
  });

  return (
    <>
      <div className="opacity-0 w-0 lg:opacity-100 lg:w-fit lg:opacitiy-100 text-white lg:min-w-fit">
        <div
          className="relative bg-black h-full shadow-lg lg:w-72"
          style={{ width: sideBarWidth }}
        >
          <label
            className="absolute z-20 left-full h-full w-1 cursor-col-resize transition-all hover:bg-gray-500/30"
            {...bind()}
          />
          <div className="p-4 flex flex-col space-y-4">{children}</div>
        </div>
      </div>
    </>
  );
};

SideBar.Section = Section;
SideBar.Divider = Divider;
SideBar.Item = Item;
export default SideBar;
