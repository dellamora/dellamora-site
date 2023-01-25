/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Icon } from "../../../domain/components/icon";

const Path = props => (
  <motion.path
    initial={{
      opacity: 0,
      pathLength: 0,
    }}
    animate={{
      opacity: 1,
      pathLength: 1,
    }}
    transition={{
      delay: 0.1,
      duration: 3,
      ease: "easeInOut",
    }}
    {...props}
  />
);
const BuyMeACoffeee: Icon = ({ width, className }): JSX.Element => {
  return (
    <Link href="https://www.buymeacoffee.com/dellamora" target="_blank">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#fff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <Path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" />
        <Path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
        <Path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
        <Path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" />
        <Path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />
      </motion.svg>
    </Link>
  );
};

export default BuyMeACoffeee;
