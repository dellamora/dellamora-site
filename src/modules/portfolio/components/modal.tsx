import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./backdrop";
import Image from "next/image";
import { Projects } from "../../../domain/interfaces";
import CloseIcon from "../../../common/svgs/closeIcon";
import { motion } from "framer-motion";
import ButtonOutline from "../../../common/components/buttonOutline";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  project?: Pick<
    Projects,
    "name" | "description" | "link" | "technologies" | "data" | "img"
  >;
};

const ModalProject = ({ isOpen, onClose, project }: Props): JSX.Element => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return <></>;
  }

  return createPortal(
    <>
      {isOpen && project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex fixed justify-center items-center z-50  h-screen  w-screen pointer-events-none"
          >
            <div className="relative flex flex-col pointer-events-auto bg-white rounded-lg w-full lg:max-w-xl lg:max-h-[90vh]  h-auto max-h-screen  md:w-3/5 overflow-y-hidden bg-primaryLight dark:bg-secondaryDark ">
              <div className="relative aspect-video shrink-0">
                <Image
                  className="object-cover aspect-video object-left"
                  alt="project image"
                  fill
                  src={project.img}
                />
                <CloseIcon
                  className="block md:hidden absolute top-0 right-0 "
                  onClick={() => {
                    onClose();
                  }}
                />
              </div>
              <div className="flex flex-col  p-4 overflow-y-auto grow pb-24">
                <h1 className="font-bold text-2xl md:text-title text-gray dark:text-whiteTextDarkMode text-bold mb-5">
                  {project.name}
                </h1>
                {project.description.map((p, i) => {
                  return (
                    <span
                      key={`paragraph-${i}`}
                      className="font-Inter font-medium text-justify dark:text-grayLight"
                    >
                      {p}
                    </span>
                  );
                })}
                <div className="flex flex-row  flex-wrap mt-5">
                  <h3 className="pr-2 text-base">Stack:</h3>
                  {project.technologies.map((technology, i) => {
                    return (
                      <>
                        <h3 className="font-thin text-base">
                          {technology}
                          {i !== project.technologies.length - 1 && (
                            <span className="px-2 text-redLight">•</span>
                          )}
                        </h3>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center absolute w-full pb-4 bottom-0 bg-gradient-to-t from-primary via-primary to-[rgba(0,0,0,0)] pt-14 dark:from-secondaryDark dark:via-secondaryDark ">
                <ButtonOutline
                  className=" w-fit px-2 py-1 font-bold rounded-sm text-redLight dark:text-redLight "
                  isLink={true}
                  href={project.link}
                >
                  View Project
                </ButtonOutline>
              </div>
            </div>
          </motion.div>
          <Backdrop
            onClose={() => {
              onClose();
            }}
          />
        </>
      )}
    </>,
    document.getElementById("modal-root"),
  );
};

export default ModalProject;
