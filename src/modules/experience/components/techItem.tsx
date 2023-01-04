/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { InfoJob } from "../../../domain/interfaces";

type Props = {
  experience: Pick<InfoJob, "company" | "technologies">;
  current: number;
  inView: boolean;
};

const TechItem = ({ experience, current, inView }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [current]);

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "view" : "hidden"}
      className="text-placeholder flex flex-wrap "
    >
      {experience.technologies
        .slice(0, isOpen ? experience.technologies.length : 3)
        .map((technology, index) => (
          <motion.div
            key={technology.name + "-" + current}
            variants={{
              hidden: { opacity: 0 },
              view: {
                opacity: 1,
              },
            }}
            transition={{
              x: { stiffness: 1000 },
              delay: Math.max(index - 3, isOpen ? 0 : index) * 0.2,
            }}
            whileHover={{ scale: 1.1 }}
            className="
              w-fit
              h-fit
              px-1 py-1 m-1
              border border-grayLight rounded
            text-grayMedium dark:text-grayLight font-Inter font-medium font-sm"
          >
            {technology.name}
          </motion.div>
        ))}
      {!isOpen && (
        <motion.button
          key={"learnmore-" + current}
          initial={{ opacity: 0 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                  },
                }
              : { opacity: 0 }
          }
          transition={{
            x: { stiffness: 1000 },
          }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="
          w-fit
          h-fit
          px-1 py-1 m-1
          transition-colors hover:bg-grayLight/20 dark:hover:bg-primaryDark/20
          border border-redLight rounded 
        text-redLight font-Inter font-medium font-sm"
        >
          Learn more
        </motion.button>
      )}
    </motion.div>
  );
};
export default TechItem;
