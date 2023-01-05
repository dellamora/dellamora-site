/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "../../common/components/section";
import ProgressBar from "./components/progressBar";
import SectionTitle from "../../common/components/sectionTitle";

const AboutMe: React.FC = (): JSX.Element => {
  const [inView, setInview] = useState(false);
  const skills = [
    { name: "TailWind CSS", value: 80 },
    { name: "NextJS", value: 70 },
    { name: "TypeScript", value: 66 },
    { name: "Firebase", value: 64 },
    { name: "Express.js", value: 62 },
    { name: "Prisma/SQL/NoSQl", value: 60 },
  ];
  return (
    <Section
      id="aboutme"
      setIsInView={isInView => {
        setInview(current => isInView || current);
      }}
      className="flex flex-col gap-10  bg-primary dark:bg-primaryDark"
    >
      <SectionTitle
        title="About me & Skills"
        subTitle="Learning path"
        triggerAnimation={inView}
      />
      <motion.div
        className="flex flex-col md:flex-row gap-6  justify-center items-start"
        initial="hidden"
        animate={inView ? "view" : "hidden"}
      >
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0 }}
          animate={
            inView ? { opacity: 1, transition: { delay: 1.6 } } : { opacity: 0 }
          }
        >
          <p id={"first-p"} className="text-justify text-lg ">
            My passion for computers began when I was a child and used my
            father&apos;s computer to play games. Over the years I learned how
            to create themes on the Tumblr platform and I consider it a
            milestone in my choice of profession, since I was messing around
            with HTML and CSS and got enchanted with the web universe.
            Currently, I have over 2 years of experience working in the software
            development industry, seeking efficiency in developing ideas and
            turning them into reality, bringing smart solutions to challenges
            and adversities.
          </p>
        </motion.div>
        <motion.div
          animate={inView ? "animate" : "default"}
          className=" w-full justify-center items-center md:w-1/2"
        >
          {skills.map((skills, i) => (
            <div key={`skill-${i}`}>
              <h4>{skills.name}</h4>
              <ProgressBar width={skills.value} />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default AboutMe;
