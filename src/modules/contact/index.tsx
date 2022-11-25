/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import ButtonOutline from "../../common/components/buttonOutline";
import Section from "../../common/components/section";

const Contact = (): JSX.Element => {
  return (
    <Section id="contact" className="p-4">
      <h1> Lets create something together</h1>
      <p className="w-80">
        I’m interested in freelance opportunities – especially ambitious or
        large projects. However, if you have other request or question, don’t
        hesitate to use the form.
      </p>
      <ButtonOutline href="mailto:francielle@dellamora.dev" isLink={false}>
        Send Mail
      </ButtonOutline>
    </Section>
  );
};

export default Contact;
