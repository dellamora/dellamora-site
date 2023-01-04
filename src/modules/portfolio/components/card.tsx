/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../../common/hooks/useWindowDimensions";
import { Projects } from "../../../domain/interfaces";
type Props = {
  project: Pick<Projects, "name">;
  inView: boolean;
  onClick: () => void;
};
const CardProject = ({ project, onClick, inView }: Props): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const { isMobile } = useWindowDimensions();
  return (
    <motion.div
      className="relative h-56 rounded overflow-hidden flex justify-start max-w-sm"
      onClick={onClick}
      whileHover={{ opacity: 1 }}
      initial="hidden"
      animate={inView ? "view" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        view: {
          opacity: 1,
          transition: { delay: 2 },
        },
      }}
    >
      {mounted && (
        <motion.div
          className="flex flex-col self-end justify-end items-start z-10 h-full w-full "
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: isMobile ? 1 : 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="bg-primaryLight/50 dark:bg-secondaryDark/50 w-full h-full p-3 z-20 flex justify-center items-center flex-col">
            <h1 className="font-bold text-secondaryDark dark:text-primary">
              {project.name}
            </h1>
            <h4 className="text-sm text-secondaryDark dark:text-primary">
              Learn More
            </h4>
          </div>
        </motion.div>
      )}
      <Image
        className="absolute object-cover aspect-video"
        alt="movie poster"
        fill
        src="https://criticalhits.com.br/wp-content/uploads/2020/09/anbu-minato-768x432.jpg"
      />
    </motion.div>
  );
};

export default CardProject;
