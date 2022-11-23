/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React, { useContext } from "react";

type Props = {
  isDark: boolean;
  toggleSwitch: () => void;
};
const DarkModeToggle = ({ isDark, toggleSwitch }: Props): JSX.Element => {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      className="relative w-[65px] h-[35px] bg-black/10 dark:bg-[#1E1E1E] items-center rounded-full cursor-pointer flex"
      style={{ justifyContent: isDark ? "flex-end " : " " }}
      onClick={toggleSwitch}
    >
      <h1 className="absolute  left-2">oi</h1>
      <motion.div
        className="absolute aspect-square h-full bg-black  scale-75 rounded-full z-20"
        variants={{ dark: { left: 0 }, white: { right: 0 } }}
        animate={isDark ? "dark" : "white"}
        layout
        transition={spring}
      />
      <h1 className="absolute  right-2">t</h1>
    </div>
  );
};

export default DarkModeToggle;
