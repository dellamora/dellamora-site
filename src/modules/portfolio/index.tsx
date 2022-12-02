/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Section from "../../common/components/section";
import CardProject from "./components/card";
import ModalProject from "./components/modal";

const projects = [
  {name: "DellaFlix ", id: 1, description: "isloremnbla blasaksa pedro bla bla blue blue", img: "url(kkkkk)", link: "dellaflix.vercel.com.br", technologies: ["react", "deded"], data: "20/20/2002"}
]

const Portfolio: React.FC = (): JSX.Element => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
    <Section
      id="portfolio"
      title="My Projects"
      subTitle="Featured Portifolios "
      className=" bg-primaryLight dark:bg-primaryDark flex flex-col gap-10"
    >
      <div className="grid grid-cols-cards gap-10">
        {projects.map((project, id) => {
          return <CardProject project={project} onClick={() => setisOpen(true)}/>;
        })}

      </div>
        <ModalProject isOpen={isOpen} onClose={() => setisOpen(false)}   />
    </Section>
    </>

  );
};

export default Portfolio;
