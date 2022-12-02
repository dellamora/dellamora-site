/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { InfoJob } from "../../../domain/interfaces";
import TechItem from "./techItem";

type Props = {
  experience: Pick<
    InfoJob,
    | "address"
    | "role"
    | "period"
    | "modality"
    | "company"
    | "description"
    | "technologies"
  >;
  current: number;
  inView: boolean;
};

const InfoJob = ({ experience, current, inView }: Props): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-Inter md:text-2xl lg:text-3xl ">
        {experience.role}
      </h1>
      <h2>{experience.address} </h2>
      <h3>
        {experience.period.start} - {experience.period.end} ·
        {experience.modality}
      </h3>
      <TechItem
        experience={experience}
        current={current}
        inView={inView}
      />
      <hr className="text-grayLight" />
      {experience.description.map((description, i) => (
        <div key={`job-${experience}-description-${i}`} className="flex  ">
          <div className="mr-3 h-0.5 w-4 shrink-0 bg-grayLight mt-3" />
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoJob;
