/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Section from "../../common/components/section";

/* import { Container } from "./styles"; */

const Portfolio: React.FC = (): JSX.Element => {
  return (
    <Section
      id="portfolio"
      title="My Projects"
      subTitle="Featured Portifolios "
      className="bg-primaryLight dark:bg-primaryDark"
    >
      <div className="h-10 w-10 bg-red-800 bg-primaryLight dark:bg-primaryDark">
        {/* <div className="w-full grid grid-cols-cards gap-5">
        {data.map(article => {
          return <ArticleCard article={article} key={article.id} />;
        })}
      </div> */}
      </div>
    </Section>
  );
};

export default Portfolio;
