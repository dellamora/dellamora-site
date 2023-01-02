import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./backdrop";
import Image from "next/image";
import { Projects } from "../../../domain/interfaces";
import CloseIcon from "../../../common/svgs/closeIcon";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  project?: Pick<
    Projects,
    "name" | "description" | "link" | "technologies" | "data"
  >;
};

export default function ModalProject({ isOpen, onClose, project }: Props) {
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
                  className="object-cover "
                  alt="project image"
                  fill
                  src="https://criticalhits.com.br/wp-content/uploads/2020/09/anbu-minato-768x432.jpg"
                />
                <CloseIcon
                  className="block md:hidden absolute top-0 right-0 "
                  onClick={() => {
                    onClose();
                  }}
                />
              </div>
              <div className="flex flex-col gap-5 p-4 overflow-y-auto grow pb-20">
                <h1 className="font-bold text-2xl md:text-title text-gray dark:text-whiteTextDarkMode  text-bold ">
                  {project.name}
                </h1>
                <span className="font-Inter font-medium mb-3 text-justify dark:text-grayLight">
                  {project.description}
                </span>
                <div className="flex flex-row  flex-wrap ">
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
              <a
                href={project.link}
                className="absolute w-full bottom-0 bg-gradient-to-t from-primary via-primary to-[rgba(0,0,0,0)] pt-8 dark:from-secondaryDark dark:via-secondaryDark "
              >
                <h3 className=" w-fit px-2 py-1 font-thin rounded-sm text-redLight dark:text-redLight ">
                  View Project
                </h3>
              </a>
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
}
