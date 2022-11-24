/* eslint-disable @typescript-eslint/no-unused-vars */

import exp from "constants";
import { motion } from "framer-motion";
import React from "react";
import Experience from "..";
import { JobsInfo } from "../../../domain/interfaces";

type Props = {
  experiences: Pick<JobsInfo, "company">;
  onClick: () => void;
  active: boolean;
};

const CompanyButton = ({
  experiences,
  onClick,
  active,
}: Props): JSX.Element => {
  return (
    <div className="relative ">
      <button
        className=" relative font-Inter  text-xl text-left  py-2 md:px-6 px-4 z-50 "
        onClick={onClick}
      >
        {experiences.company}
      </button>
      {active && (
        <motion.div
          className=" rounded absolute top-0 bottom-0 left-0 right-0 bg-[#e2e2e2] z-10"
          layoutId="companyBg"
        />
      )}
    </div>
  );
};

export default CompanyButton;
