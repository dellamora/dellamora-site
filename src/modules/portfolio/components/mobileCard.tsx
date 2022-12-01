/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import Image from "next/image";

//fazer um card diferente para mobile pq n tem hover hehehehe

const MobileCardProject = (): JSX.Element => {
  return (
    <motion.div className="relative h-56 rounded overflow-hidden flex justify-start">
      <motion.div
        className="flex flex-col justify-end items-start z-10 p-3 bg-primaryLight/50 dark:bg-secondaryDark/50 w-full"
      >
        <h1 className="font-bold text-secondaryDark">DellaFlix</h1>
        <h4 className="text-sm text-secondaryDark" > learn more</h4>
      </motion.div>

      <Image
        className="absolute object-cover aspect-video "
        alt="movie poster"
        fill
        src="https://criticalhits.com.br/wp-content/uploads/2020/09/anbu-minato-768x432.jpg"
      />
    </motion.div>
  );
};

export default MobileCardProject;
