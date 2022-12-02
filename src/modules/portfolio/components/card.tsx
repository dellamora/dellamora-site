/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import  useWindowDimensions  from "../../../common/hooks/useWindowDimensions";
import {Projects} from "../../../domain/interfaces"
type Props = {
  project: Pick<
  Projects,
    "name" 
  >;
  onClick: () => void
};
const CardProject = ({ project , onClick}: Props): JSX.Element => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  } ,[])
  const {isMobile} = useWindowDimensions()
  return (
    <motion.div 
    className="relative h-56 rounded overflow-hidden flex justify-start w-96" 
    onClick={onClick}>
      { mounted && 
            <motion.div
            className="flex flex-col  self-end md:self-start justify-end items-start z-10 p-3 bg-primaryLight/50 dark:bg-secondaryDark/50 w-full h-1/3 md:h-full"
            initial={{
              opacity: 0,
            }}
            animate={{opacity: isMobile ? 1 : 0}}
           whileHover={{ opacity: 1 }}
          >
            <h1 className="font-bold text-gray">{project.name}</h1>
            <h4 className="text-sm text-gray" > learn more</h4>
          </motion.div>
      }
      <Image
        className="absolute object-cover aspect-video "
        alt="movie poster"
        fill
        src="https://criticalhits.com.br/wp-content/uploads/2020/09/anbu-minato-768x432.jpg"
      />
    </motion.div>
  );
};

export default CardProject;
