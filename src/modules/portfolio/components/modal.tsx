import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./backdrop";
import Image from "next/image";
import { Projects } from "../../../domain/interfaces";

type Props = {
  isOpen: boolean;
  onClose: () => void;


}

export default function ModalProject({  isOpen, onClose}: Props){
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  },[])
  if (!mount) {
    return <></>
  }
  return createPortal(
    <>
    {isOpen && 
      <>
        <div className="flex fixed justify-center items-center z-50  h-screen w-screen pointer-events-none overscroll-y-contain">
          <div className="  pointer-events-auto bg-white border border-grayLight dark:border-none rounded-lg max-w-sm overflow-hidden bg-primaryLight dark:bg-secondaryDark ">
          <div className="relative aspect-video w-auto ">
        <Image
          className="object-cover"
          alt="project image"
          fill
          src="https://criticalhits.com.br/wp-content/uploads/2020/09/anbu-minato-768x432.jpg"
        />
      </div>
      <div className="p-4">
       ccc
          <h1 className="hover:underline tracking-tight mb-2 md:text-xl ">
            sasa
          </h1>
        {/* </a> */}
        <span className="font-Inter font-medium mb-3 ">
       ccc
        </span>

      </div>
          </div>
        </div>
        <Backdrop onClose={() => {onClose()}} /></>}
      </>, document.getElementById("modal-root")

  );
}
