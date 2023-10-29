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
      "I decided to develop a project inspired by Netflix when I faced the dilemma of every programmer who is building his portoflio, which project would be fun to work on? ",
      "Dellaflix came up as the answer, since I would challenge myself both on the backend by developing a movie API and if the movie searched doesn't exist in my database, look it up in another API (The Movie Database) and on the frontend by cloning Netflix's design.",
    ],
    img: "/portfolio/dellaflix.png",
    link: "https://dellaflix.dellamora.dev/",
    technologies: [
      "React",
      "TypeScript",
      "NextJS",
      "TailWindCSS",
      "Express.js",
      "Prisma/SQL/NoSQL",
    ],
    data: "20/20/2002",
  },
  {
    name: "Lockdesk",
    id: 2,
    description: [
      "Lockdesk is user-friendly software created by Venturus to streamline the workstation booking process in shared spaces. It aims to efficiently organize workspaces while prioritizing flexibility and inclusivity. The software provides a simple, visually appealing interface for booking and managing workstations.",
      "My role in this project was pivotal, as I spearheaded  a major overhaul/refactor in the code of Lockdesk, such as creating a base design system with shared components, making the integration with Firebase, working with the design team to make the best UI/UX possible, and writing the documentation.",
    ],
    img: "/portfolio/lockdesk.jpg",
    link: "https://www.venturus.org.br/blog/lockdesk-o-software-para-a-volta-ao-escritorio/",
    technologies: [
      "React",
      "JavaScript",
      "Firebase",
      "Styled-Components",
      "Konva.React",
      "MUI",
      "Figma",
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
