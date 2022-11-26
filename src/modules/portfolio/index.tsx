/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Section from "../../common/components/section";
import CardProject from "./components/card";

const Portfolio: React.FC = (): JSX.Element => {
  return (
    <Section
      id="portfolio"
      title="My Projects"
      subTitle="Featured Portifolios "
      className="bg-primaryLight dark:bg-primaryDark flex flex-col gap-10"
    >
      <div className="grid grid-cols-cards gap-10">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </Section>
  );
};

export default Portfolio;
