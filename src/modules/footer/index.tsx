/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="text-grayMedium bg-primary dark:bg-primaryDark p-4  md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm  sm:text-center text-grayMedium ">
        © 2022
        <a
          href="https://twitter.com/francidellamora"
          className="m-1 hover:underline"
        >
          - Dellamora
        </a>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm   sm:mt-0">
        <li>
          <a
            href="https://discord.gg/Xxu2raVxs5"
            className="mr-4 hover:underline md:mr-6 "
          >
            Discord Server
          </a>
        </li>
        <li>
          <a
            href="https://www.buymeacoffee.com/dellamora"
            className="mr-4 hover:underline md:mr-6"
          >
            Buy Me A Coffee!
          </a>
        </li>

        <li>
          <a href="mailto:francielle@dellamora.dev" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
