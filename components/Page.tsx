import { ReactElement, useContext } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import SideBar from "./SideBar";
import { PlaylistContext } from "../context/PlaylistContext";
import { HomeIcon, PlusCircleIcon, UserAddIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export interface PageProps {
  children: ReactElement | ReactElement[];
  className?: string;
  animate?: boolean;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { x: -30 },
};

const Header = ({ children, className, animate = false }: PageProps) => {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial={clsx({ hidden: animate })}
      animate="animate"
      transition={{ type: "linear" }}
    >
      {children}
    </motion.div>
  );
};

const Body = ({ children, className }: PageProps) => {
  return (
    <motion.main
      className={clsx("p-4", className)}
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      {children}
    </motion.main>
  );
};

const Page = ({ children }: PageProps) => {
  const { playlists, addPlaylist } = useContext(PlaylistContext);
  const router = useRouter();

  return (
    <div className="flex bg-dark h-screen">
      <SideBar>
        <SideBar.Section>
        <SideBar.Item
            icon={<HomeIcon />}
            title="Home"
            onClick={() => router.push(`/`)}
          />
          <SideBar.Item
            icon={<PlusCircleIcon />}
            title="Create training"
            onClick={addPlaylist}
          />
        </SideBar.Section>
        <SideBar.Divider />
        <SideBar.Section>
          {playlists.map((playlist) => {
            return (
              <SideBar.Item
                key={playlist.id}
                title={playlist.name}
                onClick={() => router.push(`/playlist/${playlist.id}`)}
              />
            );
          })}
        </SideBar.Section>
      </SideBar>
      <div className="w-full">{children}</div>
    </div>
  );
};

Page.Body = Body;
Page.Header = Header;
export default Page;
