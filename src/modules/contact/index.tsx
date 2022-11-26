/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useContext } from "react";
import ButtonOutline from "../../common/components/buttonOutline";
import Section from "../../common/components/section";
import { DarkModeContext } from "../../common/context/darkMode";

const Contact = (): JSX.Element => {
  const { isDark, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <Section className="body-font relative" id={"contact"}>
      <div className="absolute inset-0 bg-primaryLight dark:bg-primaryDark ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131362.3371708613!2d-51.0663674021011!3d-30.09587027455416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199cd2566acb1d%3A0x603111a89f87e91f!2sPorto%20Alegre%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1669444290001!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            filter: ` grayscale(1) contrast(1.2) ${
              isDark ? "opacity(0.1)" : "opacity(0.3)"
            }`,
          }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="gap-3 items-center bg-primaryLight dark:bg-secondaryDark lg:w-1/3 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <div className="flex flex-row font-Inter font-bold text-4xl gap-3">
            <h1>
              Let&apos;s create something{" "}
              <span className="text-redLight dark:text-redLight">
                together!
              </span>
            </h1>
          </div>
          <p className="font-Inter text-grayMedium ">
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to send me a mail.
          </p>
          <ButtonOutline
            href="mailto:francielle@dellamora.dev"
            isLink={false}
            className="w-full rounded  text-redLight border-redLight dark:border-redLight  dark:text-redLight text-center"
          >
            Send Mail
          </ButtonOutline>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
