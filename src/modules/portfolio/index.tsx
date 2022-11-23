/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Section from "../../common/components/section";

/* import { Container } from "./styles"; */

const Portfolio: React.FC = (): JSX.Element => {
  return (
    <Section id="portfolio" title="My Projects" subTitle="Featured Portifolios">
      <div className="h-10 w-10 bg-red-800 dark:bg-black"></div>
    </Section>
  );
};

export default Portfolio;
