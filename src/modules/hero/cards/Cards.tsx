import { motion } from "framer-motion";
import React from "react";

const Cards: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <motion.div
        animate={{ rotate: -6 }}
        transition={{ duration: 2, delay: 0.75 }}
        className="
        bg-[#1E1E1E]
        lg:dark:bg-[#131313]
          lg:w-[21rem] 
          lg:rounded-[16px] 
          lg:h-[25rem] 
          "
      />
      <img
        src="/mePc.jpg"
        className="hidden lg:block lg:absolute rounded-[16px] w-[21rem] h-[25rem]"
      />
    </div>
  );
};

export default Cards;
