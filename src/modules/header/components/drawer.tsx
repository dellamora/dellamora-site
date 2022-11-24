/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import Instagram from "../../../common/svgs/withAnimation/instagramIcon";
import GitHub from "../../../common/svgs/withAnimation/gitHub";
import Twitter from "../../../common/svgs/withAnimation/twitterIcon";
import SendMail from "../../../common/svgs/withAnimation/sendMail";

type Props = {
  links: { name: string; to: string; id: number }[];
  height: number;
  handleClose: () => void;
};

const Drawer = ({ links, height, handleClose }: Props): JSX.Element => {
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
      style={{ height: `calc(100vh - ${height}px)` }}
      className={` flex grow flex-col  bg-[#FBFAFF] dark:bg-[#1E1E1E] dark:text-[#FBFAFF] p-3 justify-between items-center  `}
      initial={{ x: 360 }}
      animate={{ x: 0 }}
      exit={{ x: 700 }}
      transition={{ duration: 0.4 }}
    >
      <div />
      <motion.ul
        className="flex flex-col space-y-6 items-center"
        variants={variants}
      >
        {links.map(({ name, to, id }) => (
          <motion.li
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
            <a className="font-thin text-3xl " href={to} onClick={handleClose}>
              {name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
      <footer>
        <div className=" flex justify-center items-center space-x-8 py-11">
          <Instagram className="stroke-[#656D72]" width="20px" />
          <GitHub className="stroke-[#656D72]" width="20px" />
          <Twitter className="stroke-[#656D72]" width="22px" />
          <SendMail className="stroke-[#656D72]" width="23px" />
        </div>
        <div className="flex justify-center items-center pb-[88px]">
          <p className="font-Inter text-[#656D72]">© 2022 — @francidellamora</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Drawer;
