/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { JobsInfo } from "../../../domain/interfaces";
import TechItem from "./techItem";

/* import { Container } from "./styles"; */
type Props = {
  experiences: Pick<
    JobsInfo,
    | "address"
    | "role"
    | "period"
    | "modality"
    | "company"
    | "description"
    | "technologies"
  >;
};
const JonInfo = ({ experiences }: Props): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-Inter text-xl font-semibold ">{experiences.role}</h1>
      <h1 className="font-Inter text-[#656D72]">
        {experiences.company} · {experiences.address} <br />
        {experiences.period.start} - {experiences.period.end} ·
        {experiences.modality}
      </h1>

      <TechItem experiences={experiences} key={"jobInfo"} />
      <hr />
      {experiences.description.map((description, i) => (
        <div key={i} className="flex  ">
          <div className=" mr-3 h-0.5 w-4 shrink-0 bg-[#D9D9D9] mt-3" />
          <span className="Inter text-[#656D72]  ">{description}</span>
        </div>
      ))}
    </div>
  );
};

export default JonInfo;
