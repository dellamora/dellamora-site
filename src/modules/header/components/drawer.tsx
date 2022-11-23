/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

type Props = {
  links: { name: string; to: string; id: number }[];
};

const Drawer = ({ links }: Props): JSX.Element => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  return (
    <motion.div
      className="fixed grow flex-col h-screen bg-white p-3 justify-center items-center "
      initial={{ x: 360 }}
      animate={{ x: 0 }}
      exit={{ x: 700 }}
      transition={{ duration: 0.4 }}
    >
      <motion.ul className="flex flex-col space-y-6  " variants={variants}>
        <div className="flex flex-col  items-center space-y-8  ">
          {links.map(({ name, to, id }) => (
            <motion.div
              key={id}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: id * 0.2,
                },
              }}
              transition={{
                x: { stiffness: 1000 },
              }}
              whileHover={{ scale: 1.1 }}
            >
              <a className="font-thin text-2xl " href={to}>
                {name}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.ul>
    </motion.div>
  );
};

export default Drawer;
