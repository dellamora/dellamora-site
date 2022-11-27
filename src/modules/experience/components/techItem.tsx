/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { InfoJob } from "../../../domain/interfaces";

type Props = {
  experiences: Pick<InfoJob, "company" | "technologies">;
  current: number;
  inView: boolean;
};

const TechItem = ({ experiences, current, inView }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [current]);

  return (
    <div className="text-placeholder flex flex-wrap ">
      {experiences.technologies
        .slice(0, isOpen ? experiences.technologies.length : 3)
        .map((technologies, index) => (
          <motion.div
            animate={
              inView
                ? {
                    opacity: 1,
                    transition: {
                      delay:
                        1.5 + Math.max(index - 3, isOpen ? 0 : index) * 0.2,
                    },
                  }
                : { opacity: 0 }
            }
            transition={{
              x: { stiffness: 1000 },
            }}
            whileHover={{ scale: 1.1 }}
            className="
              w-fit
              h-fit
              px-1 py-1 m-1
              border border-grayLight rounded
            text-grayMedium dark:text-grayLight font-Inter font-medium font-sm"
          >
            {technologies.name}
          </motion.div>
        ))}
      {!isOpen && (
        <motion.button
          animate={
            inView
              ? {
                  opacity: 1,
                  transition: {
                    delay: 1.5 + 0.6,
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
    </div>
  );
};
export default TechItem;
