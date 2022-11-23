/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Icon } from "../../domain/components/icon";
/* import { Container } from "./styles"; */

const Instagram: Icon = ({ width, className }): JSX.Element => {
  return (
    <Link href="https://www.instagram.com/francidellamora/">
      <motion.svg
        width={width}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M23.5 1.5H8.5C4.63401 1.5 1.5 4.63401 1.5 8.5V23.5C1.5 27.366 4.63401 30.5 8.5 30.5H23.5C27.366 30.5 30.5 27.366 30.5 23.5V8.5C30.5 4.63401 27.366 1.5 23.5 1.5Z"
          stroke="black"
          strokeWidth="2.5"
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
            delay: 0.1,
            duration: 3,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M24.1968 7.63025H24.2858"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
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
            delay: 0.1,
            duration: 3,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M16 10.5C19.0376 10.5 21.5 12.9624 21.5 16C21.5 19.0376 19.0376 21.5 16 21.5C12.9624 21.5 10.5 19.0376 10.5 16C10.5 12.9624 12.9624 10.5 16 10.5Z"
          stroke="black"
          strokeWidth="3"
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
            delay: 0.1,
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </Link>
  );
};

export default Instagram;
