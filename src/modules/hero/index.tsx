/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Section from "../../common/components/section";
import Cards from "./cards/Cards";
import Instagram from "../../common/svgs/withAnimation/instagramIcon";
import GitHub from "../../common/svgs/withAnimation/gitHub";
import Twitter from "../../common/svgs/withAnimation/twitterIcon";
import BuyMeACoffeee from "../../common/svgs/withAnimation/buyMeACoffeeIcon";
import SectionTitle from "../../common/components/sectionTitle";
import { useInView } from "react-intersection-observer";

const Hero: React.FC = (): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="w-full flex justify-center">
      <Section id="/" className=" flex flex-col justify-center h-[80vh]">
        <div className="flex xl:gap-80 lg:gap-20 items-center">
          <div>
            <SectionTitle
              subTitle="My name is"
              title="Francielle Dellamora"
              triggerAnimation={inView}
            />
            <p className="font-Inter text-[#232E35] dark:text-[#c2bfbf] max-w-[33rem] text-justify  mt-10">
              Creative front-end developer with more than +2 years of Experience
              in enterprise companies and startups. Proficient in Html, Tailwind
              Css, Javascript and React. Passionate about UI/UX
            </p>
            <div className="flex justify-center lg:justify-start space-x-8 items-center py-10">
              <GitHub className="stroke-[#656D72]" width="20px" />
              <Twitter className="stroke-[#656D72]" width="22px" />
              <Instagram className="stroke-[#656D72]" width="20px" />
              <BuyMeACoffeee className="stroke-[#656D72]" width="26px" />
            </div>
          </div>
          <Cards />
        </div>
      </Section>
    </div>
  );
};

export default Hero;
