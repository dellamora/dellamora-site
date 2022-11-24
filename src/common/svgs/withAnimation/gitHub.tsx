/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Icon } from "../../../domain/components/icon";

const GitHub: Icon = ({ width, className }): JSX.Element => {
  return (
    <Link href="https://github.com/dellamora">
      <motion.svg
        width={width}
        height="37"
        viewBox="0 0 35 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M13 31.1909C5.11667 33.7576 5.11667 26.6076 2 25.6909"
          stroke="#232E35"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            delay: 2.3,
            duration: 3,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M24 34.8576V28.4409C24 26.6076 24.1834 25.8742 23.0834 24.7742C28.2167 24.2242 33.1667 22.2076 33.1667 13.7742C33.1645 11.5833 32.3097 9.47931 30.7833 7.90758C31.4992 6.00452 31.4333 3.89556 30.6 2.04091C30.6 2.04091 28.5834 1.49091 24.1833 4.42424C20.4566 3.45365 16.5434 3.45366 12.8167 4.42425C8.41665 1.49091 6.40002 2.04091 6.40002 2.04091C5.56674 3.89556 5.5008 6.00451 6.21665 7.90758C4.69032 9.47931 3.83561 11.5833 3.83337 13.7742C3.83337 22.2076 8.78337 24.2242 13.9167 24.7742C12.8167 25.8742 12.8166 26.9742 12.9999 28.4409L13 34.8576"
          stroke="#232E35"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </Link>
  );
};

export default GitHub;
