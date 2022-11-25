/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Icon } from "../../domain/components";

const ChevronRight: Icon = ({ className, width }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#232E35"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
};

export default ChevronRight;
