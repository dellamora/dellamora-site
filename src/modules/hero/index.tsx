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
import { motion } from "framer-motion";

const Hero: React.FC = (): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className="w-full flex justify-center bg-primary dark:bg-primaryDark"
    >
      <Section id="/" className=" flex flex-col justify-center h-[80vh]">
        <div className="flex xl:gap-80 lg:gap-20 items-center">
          <div>
            <SectionTitle
              subTitle="My name is"
              title="Francielle Dellamora"
              triggerAnimation={inView}
            />
            <motion.p
              className=" max-w-[33rem] text-justify mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Hi, I’m a fullstack developer passionate about creating projects
              for web development and technologies that makes a positive impact
              on people&apos;s lives. Always looking for new challenges and
              opportunities to learn and grow. Proficient in JavaScript, React,
              and Tailwind CSS.
            </motion.p>
            <div className="flex justify-center lg:justify-start space-x-8 items-center py-10">
              <GitHub className="stroke-redLight" width="20px" />
              <Twitter className="stroke-redLight" width="22px" />
              <Instagram className="stroke-redLight" width="20px" />
              <BuyMeACoffeee className="stroke-redLight" width="26px" />
            </div>
          </div>
          <Cards />
        </div>
      </Section>
    </div>
  );
};

export default Hero;
