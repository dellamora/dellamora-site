/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "../../common/components/section";
import ProgressBar from "./components/progressBar";
import SectionTitle from "../../common/components/sectionTitle";

const AboutMe: React.FC = (): JSX.Element => {
  const [inView, setInview] = useState(false);
  const skills = [
    { name: "TypeScript", value: 100 },
    { name: "NextJS", value: 100 },
    { name: "TailWind CSS", value: 100 },
    { name: "Express.js", value: 100 },
    { name: "Prisma/SQL/NoSQl", value: 100 },
    { name: "Firebase", value: 100 },
  ];
  return (
    <Section
      id="aboutme"
      setIsInView={isInView => {
        setInview(current => isInView || current);
      }}
      className="flex flex-col gap-10 md:items-center bg-primary dark:bg-primaryDark"
    >
      <SectionTitle
        title="About me & Skills"
        subTitle="Learning path"
        triggerAnimation={inView}
      />
      <div className="flex flex-col md:flex-row gap-6  justify-center items-start ">
        <div className="md:w-1/2">
          <p>
            Im a Full-Stack developer with a passion for creating amazing code
            and solving problems. Im always looking for new challenges and
            opportunities to learn and grow. As a Full-Stack Developer I have 2
            main Languages, TypeScript and Python. Python being most for Data
            Science and automations, and Typescript being the main language for
            Web Development. Currently Web Development is my main focus, using
            tools like NextJS, ExpressJS, MongoDB / PostgresSQL and Apollo I can
            do almost everything! I also have experience with Docker and Jest to
            make sure my code works as intended. You can check the About Me Page
            if you want to know more!
          </p>
        </div>
        <motion.div
          animate={inView ? "animate" : "default"}
          className=" w-full justify-center items-center md:w-1/2"
        >
          {skills.map((skills, i) => (
            <div key={`skill-${i}`}>
              <h4>{skills.name}</h4>
              <ProgressBar width="w-[60%]" />
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutMe;
