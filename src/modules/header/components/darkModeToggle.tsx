/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React, { useContext } from "react";
import internal from "stream";
import { DarkModeContext } from "../../../common/context/darkMode";

const DarkModeToggle = (): JSX.Element => {
  const { isDark, toggleDarkMode } = useContext(DarkModeContext);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
    duration: 0.3,
  };
  return (
    <div
      className="relative w-[65px] h-[35px] bg-[#1E1E1E] dark:bg-[#FBFAFF] items-center rounded-full cursor-pointer flex"
      onClick={toggleDarkMode}
    >
      <h1 className="absolute  left-2">oi</h1>
      <motion.div
        className="absolute aspect-square h-full bg-[#FBFAFF] dark:bg-[#1E1E1E] scale-75 rounded-full "
        initial="light"
        variants={{
          light: { right: "auto", left: 0 },
          dark: { right: 0, left: "auto" },
        }}
        animate={isDark ? "dark" : "light"}
        layout
        transition={spring}
      />
      <h1 className="absolute right-2">t</h1>
    </div>
  );
};

export default DarkModeToggle;
