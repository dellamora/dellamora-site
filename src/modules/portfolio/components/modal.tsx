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
    "name" | "description" |  "link" | "technologies" | "data"
  >;

}

export default function ModalProject({  isOpen, onClose, project}: Props){
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  },[])
  if (!mount) {
    return <></>
  }
  return createPortal(
    <>
    {isOpen && project &&
      <>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className=" flex fixed justify-center items-center z-50  h-screen  w-screen pointer-events-none overscroll-y-contain ">
          <div className="relative overflow-y-auto pointer-events-auto bg-white rounded-lg w-full lg:max-w-2xl  h-auto max-h-screen  md:w-3/5 overflow-hidden bg-primaryLight dark:bg-secondaryDark ">
            <div className="relative aspect-video">
              <Image
                className="object-cover"
                alt="project image"
                fill
                src="https://criticalhits.com.br/wp-content/uploads/2020/09/anbu-minato-768x432.jpg"
              />
            </div>
            <div className="flex flex-col gap-5 p-4">
            <CloseIcon className="block md:hidden absolute top-0 right-0 " onClick={() => {onClose()}}/>

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
                    <h3 className="font-thin text-base">{technology}
                    {
                      i !== project.technologies.length - 1 
                      && <span className="px-2 text-redLight">•</span>
                    }
                    </h3>
                  </>
                )
              })}
              </div>
              <a href={project.link} >
                <h3 className=" w-fit px-2 py-1 font-thin rounded-sm text-redLight dark:text-redLight ">View Project</h3>
              </a>
            </div>
          </div>
          </motion.div>
        <Backdrop onClose={() => {onClose()}} /></>}
      </>, document.getElementById("modal-root")

  );
}
