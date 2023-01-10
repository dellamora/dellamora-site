/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React, { useState } from "react";
import Section from "../../common/components/section";
import SectionTitle from "../../common/components/sectionTitle";
import CompanyButton from "./components/companyButton";
import InfoJob from "./components/infoJob";

const experiences = [
  {
    company: "Venturus",
    address: "Campinas, São Paulo",
    role: "Front-end Developer",
    period: { start: "Fev 2021", end: "Set 2022" },
    modality: " Home office",
    technologies: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Node" },
      { name: "React" },
      { name: "Redux/Sagas" },
      { name: "Firebase" },
      { name: "Konva.React" },
      { name: "Styled-Components" },
      { name: "MUI" },
      { name: "Bootstrap" },
      { name: "Figma" },
    ],
    description: [
      "Have worked on the development of landing pages, a web crawler and two PWA applications.",
      "Had the experience of being responsible for managing the daily meeting, sprint, and tasks.",
      "Did analysis on the structure and features of the project so we could refactor and improve the Ux and DevX.",
      "Have done projects documentations.",
      "Collaborated with back-end developers and web designers to improve usability.",
      "Have organized events such as programming logic competitions, coding dojo, and the like to bring the team together.",
    ],
  },
  // {
  //   company: "Dellamora",
  //   address: "Porto Alegre",
  //   role: "Founder",
  //   period: { start: "Fev 2022", end: "Present" },
  //   modality: " Home office",
  //   technologies: [
  //     { name: "JavaScript" },
  //     { name: "TypeScript" },
  //     { name: "NextJS" },
  //     { name: "React" },
  //     { name: "Express" },
  //     { name: "MongoDB" },
  //     { name: "Prisma" },
  //     { name: "Styled-Components" },
  //     { name: "TailWindCSS" },
  //     { name: "Figma" },
  //   ],
  //   description: [
  //     "This is my research, development and freelance work place.",
  //     "I discover, study new technologies and apply them in personal projects before using them in professional projects.",
  //   ],
  // },
];
const Experience = (): JSX.Element => {
  const [inView, setInView] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(0);
  return (
    <Section
      id="experience"
      className="flex flex-col gap-10 bg-primaryLight dark:bg-primaryDark "
      setIsInView={state => {
        setInView(state);
      }}
    >
      <div className="flex gap-8 md:gap-16 lg:gap-40 flex-col md:flex-row  ">
        <div className="flex md:gap-12 flex-col  ">
          <SectionTitle
            title="Work Experience"
            subTitle="career path"
            triggerAnimation={inView}
            className="md:mb-8 mb-4"
          />
          <motion.div className="flex md:flex-col justify-between" layout>
            {experiences.map((job, index) => {
              return (
                <CompanyButton
                  inView={inView}
                  experiences={job}
                  key={`job-${job.company}`}
                  active={currentExperience === index}
                  onClick={() => {
                    setCurrentExperience(index);
                  }}
                />
              );
            })}
          </motion.div>
        </div>
        <div className="md:w-full">
          <InfoJob
            current={currentExperience}
            experience={experiences[currentExperience]}
            key={`job-details-${experiences[currentExperience].company}`}
            inView={inView}
          />
        </div>
      </div>
    </Section>
  );
};

export default Experience;
