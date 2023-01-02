/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

type Props = {
  width?: number;
};
const ProgressBar = ({ width }: Props): JSX.Element => {
  return (
    <>
      <motion.div
        className="h-3 rounded w-full mb-5 bg-whiteBasic dark:bg-secondaryDark origin-[0%] "
        transition={{ duration: 1, type: "spring", bounce: 0.25 }}
        variants={{
          animate: { scaleX: 1 },
          default: { scaleX: 0 },
        }}
      >
        <motion.div
          className={`h-full rounded mb-10 bg-redLight  origin-[0%]`}
          transition={{ delay: 0.4, duration: 1, type: "spring", bounce: 0.25 }}
          variants={{
            animate: { scaleX: width / 100 },
            default: { scaleX: 0 },
          }}
        />
      </motion.div>
    </>
  );
};

export default ProgressBar;
