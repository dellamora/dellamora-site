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
      <h1 className="font-Inter text-xl font-semibold text-gray">
        {experiences.role}
      </h1>
      <h1 className="font-Inter text-grayMedium">{experiences.address} </h1>
      <h1 className="font-Inter text-sm font-semibold text-grayMedium">
        {experiences.period.start} - {experiences.period.end} ·
        {experiences.modality}
      </h1>
      <TechItem experiences={experiences} key={"jobInfo"} />
      <hr className="text-grayLight" />
      {experiences.description.map((description, i) => (
        <div key={i} className="flex  ">
          <div className=" mr-3 h-0.5 w-4 shrink-0 bg-grayLight  mt-3" />
          <span className="Inter text-grayMedium  ">{description}</span>
        </div>
      ))}
    </div>
  );
};

export default JonInfo;
