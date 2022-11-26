/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { JobsInfo } from "../../../domain/interfaces";
import TechItem from "./techItem";

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
      <h1 className="font-Inter ">{experiences.role}</h1>
      <h2>{experiences.address} </h2>
      <h3>
        {experiences.period.start} - {experiences.period.end} ·
        {experiences.modality}
      </h3>
      <TechItem experiences={experiences} key={"jobInfo"} />
      <hr className="text-grayLight" />
      {experiences.description.map((description, i) => (
        <div key={i} className="flex  ">
          <div className="mr-3 h-0.5 w-4 shrink-0 bg-grayLight mt-3" />
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default JonInfo;
