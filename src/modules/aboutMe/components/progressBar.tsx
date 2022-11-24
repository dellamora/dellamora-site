/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

type Props = {
  width?: `w-${string}`;
};
const ProgressBar = ({ width }: Props): JSX.Element => {
  const variants = {
    animate: { scaleX: 1 },
    default: { scaleX: 0 },
  };
  return (
    <>
      <motion.div
        className="h-3 rounded w-full mb-5 bg-[#D9D9D9] dark:bg-[#D9D9D9]/25 origin-[0%] "
        transition={{ duration: 1, type: "spring", bounce: 0.25 }}
        variants={variants}
      >
        <motion.div
          className={`h-full rounded ${width} mb-10 bg-[#131313] origin-[0%]`}
          transition={{ delay: 0.4, duration: 1, type: "spring", bounce: 0.25 }}
          variants={variants}
        />
      </motion.div>
    </>
  );
};

export default ProgressBar;
