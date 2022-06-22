import { ReactElement } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import SideBar from "./SideBar";

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
      initial={clsx({ "hidden": animate })}
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
  return (
    <div className="flex bg-dark h-screen text-white">
      <SideBar></SideBar>
      <div className="w-full">{children}</div>
    </div>
  );
};

Page.Body = Body;
Page.Header = Header
export default Page;
