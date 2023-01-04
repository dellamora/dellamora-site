/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Section from "../../common/components/section";
import CardProject from "./components/card";
import ModalProject from "./components/modal";

const projects = [
  {
    name: "DellaFlix ",
    id: 1,
    description: [
      "Just another Netflix clone and is a work in process that you can follow through a thread on twitter in which I will be sharing the progress.",
    ],
    img: "/portfolio/dellaflix.png",
    link: "https://v2.tailwindcss.com/docs/backdrop-filter",
    technologies: [
      "React",
      "TypeScript",
      "NextJS",
      "TailWindCSS",
      "Express.js",
      "Prisma/SQL/NoSQl",
    ],
    data: "20/20/2002",
  },
];

const Portfolio: React.FC = (): JSX.Element => {
  const [inView, setInview] = useState(false);
  const [currentProject, setCurrentProject] = useState<number | null>(null);

  return (
    <>
      <Section
        id="portfolio"
        title="My Projects"
        subTitle="Featured Portifolios "
        className=" bg-primaryLight dark:bg-primaryDark flex flex-col gap-10"
        setIsInView={() => {
          setInview(true);
        }}
      >
        <div className="grid grid-cols-cards gap-10">
          {projects.map((project, id) => {
            return (
              <CardProject
                key={`card-${id}`}
                project={project}
                onClick={() => setCurrentProject(project.id)}
                inView={inView}
              />
            );
          })}
        </div>
        <ModalProject
          isOpen={!!currentProject}
          onClose={() => setCurrentProject(null)}
          project={projects.find(p => p.id === currentProject)}
        />
      </Section>
    </>
  );
};

export default Portfolio;
