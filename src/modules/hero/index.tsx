/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Section from "../../common/components/section";
import Cards from "./cards/Cards";
import Instagram from "../../common/svgs/instagramIcon";
import GitHub from "../../common/svgs/gitHub";
import Twitter from "../../common/svgs/twitterIcon";
import SendMail from "../../common/svgs/sendMail";
import LinkedIn from "../../common/svgs/linkedinIcon";

const Hero: React.FC = (): JSX.Element => {
  return (
    <Section id="/" className=" flex justify-center items-center lg:gap-80">
      <div>
        <p className="font-Inter dark:text-[#c2bfbf] max-w-[33rem] text-justify text-[#232E35]">
          Creative front-end developer with more than +2 years of Experience in
          enterprise companies and startups. Proficient in Html, Tailwind Css,
          Javascript and React. Passionate about UI/UX
        </p>
        <div className="flex justify-center lg:justify-start space-x-8 items-center py-11">
          <Instagram className="stroke-[#656D72]" width="20px" />
          <GitHub className="stroke-[#656D72]" width="20px" />
          <Twitter className="stroke-[#656D72]" width="22px" />
          <SendMail className="stroke-[#656D72]" width="23px" />
        </div>
      </div>
      <Cards />
    </Section>
  );
};

export default Hero;
