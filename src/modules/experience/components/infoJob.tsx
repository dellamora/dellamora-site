/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React from "react";
import { InfoJob } from "../../../domain/interfaces";
import TechItem from "./techItem";

type Props = {
  experience: Pick<
    InfoJob,
    | "address"
    | "role"
    | "period"
    | "modality"
    | "company"
    | "description"
    | "technologies"
  >;
  current: number;
  inView: boolean;
};

const InfoJob = ({ experience, current, inView }: Props): JSX.Element => {
  return (
    <motion.div
      className="flex flex-col gap-3"
      initial="hidden"
      animate={inView ? "view" : "hidden"}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          view: { opacity: 1, transition: { delay: 1 } },
        }}
      >
        <h1 className="font-Inter md:text-2xl lg:text-3xl ">
          {experience.role}
        </h1>
        <h2>{experience.address} </h2>
        <h3>
          {experience.period.start} - {experience.period.end} ·
          {experience.modality}
        </h3>
      </motion.div>
      <TechItem experience={experience} current={current} inView={inView} />
      <motion.hr
        className="text-grayLight"
        variants={{
          hidden: { opacity: 0, width: 0 },
          view: {
            opacity: 1,
            width: "auto",
            transition: {
              delay: 1.4,
              stiffness: 100,
              damping: 30,
              bounce: 0,
              duration: 1.5,
              spring: 1,
            },
          },
        }}
      />
      {experience.description.map((description, i) => (
        <motion.div key={`job-${experience}-description-${i}`}>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              view: { opacity: 1 },
            }}
            transition={{
              x: { stiffness: 1000 },
              delay: i * 0.2,
            }}
          >
            <div className="flex">
              <motion.div
                variants={{
                  hidden: { opacity: 0, originX: 0, rotate: "12deg", x: -100 },
                  view: {
                    opacity: 1,
                    rotate: "0deg",
                    x: 0,
                  },
                }}
                transition={{
                  delay: i * 0.2,
                }}
                className="mr-3 h-0.5 w-4 shrink-0 bg-grayLight mt-3"
              />
              <p>{description}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default InfoJob;
