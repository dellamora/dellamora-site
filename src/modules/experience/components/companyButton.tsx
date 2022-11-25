/* eslint-disable @typescript-eslint/no-unused-vars */

import exp from "constants";
import { motion } from "framer-motion";
import React from "react";
import ChevronRight from "../../../common/svgs/chevronRight";
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
    <div className="relative w-full">
      <button
        className={`w-full flex relative font-Inter items-center text-xl text-left  py-2 md:px-6 px-4 z-20 ${
          active ? "text-red-900" : "text-gray-900"
        }  `}
        onClick={onClick}
      >
        {experiences.company}
      </button>
      {active && (
        <motion.div
          className=" rounded absolute top-0 bottom-0 left-0 right-0 bg-[#e2e2e2] z-10 flex justify-end"
          layoutId="companyBg"
        >
          <ChevronRight
            width="25px"
            className="hidden sm:block mr-4 stroke-red-900"
          />
        </motion.div>
      )}
    </div>
  );
};

export default CompanyButton;
