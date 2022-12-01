/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Section from "../../common/components/section";
import CardProject from "./components/card";

const projects = [
  {name: "DellaFlix ", id: 1, description: "isloremnbla blasaksa pedro bla bla blue blue", img: "url(kkkkk)", link: "dellaflix.vercel.com.br", technologies: ["react", "deded"]}
]

const Portfolio: React.FC = (): JSX.Element => {
  return (
    <Section
      id="portfolio"
      title="My Projects"
      subTitle="Featured Portifolios "
      className="bg-primaryLight dark:bg-primaryDark flex flex-col gap-10"
    >
      <div className="grid grid-cols-cards gap-10">
        {projects.map((project, id) => {
          return <CardProject project={project}/> 
        } )}
        
      </div>
    </Section>
  );
};

export default Portfolio;
