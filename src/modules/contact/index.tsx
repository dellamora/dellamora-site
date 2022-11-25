/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import ButtonOutline from "../../common/components/buttonOutline";
import Section from "../../common/components/section";

const Contact = (): JSX.Element => {
  return (
    <Section id="contact" className="flex flex-col gap-10">
      <div>
        <h1 className="font-Inter text-4xl">
          Let&apos;s create something together!
        </h1>
      </div>
      <p className="font-Inter">
        I’m interested in freelance opportunities – especially ambitious or
        large projects. However, if you have other request or question, don’t
        hesitate to send me a mail.
      </p>
      <div className="flex items-center">
        <ButtonOutline
          href="mailto:francielle@dellamora.dev"
          isLink={false}
          className="rounded-none"
        >
          Send Mail
        </ButtonOutline>
      </div>
    </Section>
  );
};

export default Contact;
