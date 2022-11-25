/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Section from "../../common/components/section";
import SectionTitle from "../../common/components/sectionTitle";
import CompanyButton from "./components/companyButton";
import JonInfo from "./components/jobInfo";
import TechItem from "./components/techItem";

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
      "Worked on the development of two PWA applications.",
      "I was responsible for sprint and tasks management.",
      "padronizei arquiteura de um projeto e implementei tema global refatorei e criei components globais",
      " popularizei firebase",
      "consumo de apis",
      "sugeri ideias de features e designer q foram implementados",
      "MUI",
      "lp e sistemas",
      "Collaborate with back-end developers and web designers to improve usability    ",
      "Improving overall website performance for mobile users ",
      "manutençao em redux-sagas",
    ],
  },
  {
    company: "Dellamora",
    address: "Porto Alegre",
    role: "Founder",
    period: { start: "Fev 2022", end: "Present" },
    modality: " Home office",
    technologies: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "NextJS" },
      { name: "React" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Prisma" },
      { name: "Styled-Components" },
      { name: "TailWindCSS" },
      { name: "Figma" },
    ],
    description: [
      "My Research and Development place.",
      " descubro e estudo novas tecnologias e aplico em projetos pessoais antes de usar em projetos profissionais",
      "tambem Faco projetos para freelance",
    ],
  },
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
      <div className="flex  gap-8 md:gap-16 flex-col md:flex-row  ">
        <div className="flex md:gap-12 flex-col justify-start md:px-10">
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
                  experiences={job}
                  key={"jobInfo"}
                  active={currentExperience === index}
                  onClick={() => {
                    setCurrentExperience(index);
                  }}
                />
              );
            })}
          </motion.div>
        </div>
        <div className="md:w-3/5">
          <JonInfo
            experiences={experiences[currentExperience]}
            key={"jobInfo"}
          />
        </div>
      </div>
    </Section>
  );
};

export default Experience;
