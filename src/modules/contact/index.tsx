/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import ButtonOutline from "../../common/components/buttonOutline";
import Section from "../../common/components/section";

const Contact = (): JSX.Element => {
  return (
    <Section
      id="contact"
      className="min-h-[40vh] flex flex-col gap-10 bg-primaryLight dark:bg-primaryDark"
    >
      <div className="flex font-Inter font-bold text-4xl gap-3">
        <h1 className=" text-gray ">Let&apos;s create something </h1>
        <h1 className="text-redLight  ">together!</h1>
      </div>
      <p className="font-Inter text-grayMedium ">
        I’m interested in freelance opportunities – especially ambitious or
        large projects. However, if you have other request or question, don’t
        hesitate to send me a mail.
      </p>
      <ButtonOutline
        href="mailto:francielle@dellamora.dev"
        isLink={false}
        className="md:w-52 rounded  text-redLight border-redLight dark:border-redLight  dark:text-redLight text-center"
      >
        Send Mail
      </ButtonOutline>
    </Section>
  );
};

export default Contact;
