/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React, { useContext } from "react";
import internal from "stream";
import { DarkModeContext } from "../../../common/context/darkMode";
import MoonIcon from "../../../common/svgs/moonIcon";
import SunIcon from "../../../common/svgs/sunIcon";

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
      className="relative w-[65px] h-[35px] bg-primaryDark dark:bg-[#FBFAFF] items-center rounded-full cursor-pointer flex"
      onClick={toggleDarkMode}
    >
      <SunIcon
        width="22px"
        className="absolute left-2 stroke-[#FBFAFF] dark:stroke-primaryDark"
      />
      <motion.div
        className="absolute aspect-square h-full bg-[#FBFAFF] dark:bg-primaryDark scale-75 rounded-full "
        initial="light"
        variants={{
          light: { right: "auto", left: 0 },
          dark: { right: 0, left: "auto" },
        }}
        animate={isDark ? "dark" : "light"}
        layout
        transition={spring}
      />
      <MoonIcon
        width="18px"
        className="absolute right-2 fill-[#FBFAFF] dark:fill-primaryDark"
      />
    </div>
  );
};

export default DarkModeToggle;
