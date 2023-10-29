import { motion } from "framer-motion";
import React from "react";

const Cards: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <motion.div
        animate={{ rotate: -6 }}
        transition={{ duration: 2, delay: 0.75 }}
        className="
        bg-redLight
          lg:w-[20rem] 
          lg:rounded-[16px] 
          lg:h-[20rem] 
          "
      />
      <img
        src="/mePc.jpg"
        className="hidden lg:block lg:absolute rounded-[16px] w-[20rem] h-[20rem]"
      />
    </div>
  );
};

export default Cards;
