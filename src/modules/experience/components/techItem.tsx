/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { JobsInfo } from "../../../domain/interfaces";

type Props = {
  experiences: Pick<JobsInfo, "company" | "technologies">;
};

const TechItem = ({ experiences }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-placeholder flex flex-wrap ">
      {experiences.technologies
        .slice(0, isOpen ? experiences.technologies.length : 3)
        .map((technologies, index) => (
          <motion.div
            // variants={variants}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: Math.max(index - 3, isOpen ? 0 : index) * 0.2,
              },
            }}
            transition={{
              x: { stiffness: 1000 },
            }}
            whileHover={{ scale: 1.1 }}
            className="
          w-fit
          h-fit
          px-1 py-1
          bg-white 
          
          border 
        border-[#F1F1F1]
          rounded
        text-[#656D72]
         m-1  font-Inter font-semibold "
          >
            {technologies.name}
          </motion.div>
        ))}
      {!isOpen && (
        <motion.button
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.6,
            },
          }}
          transition={{
            x: { stiffness: 1000 },
          }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="
          w-fit
          h-fit
          px-3 py-1
          bg-primary 
          hover:bg-gray-100 
          border 
          rounded
          m-1 font-Inter text-gray-500 font-semibold"
        >
          Learn more
        </motion.button>
      )}
    </div>
  );
};
export default TechItem;
