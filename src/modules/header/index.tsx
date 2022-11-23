import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useDimensions } from "../../common/hooks/useDimensions";
import MenuToggleIcon from "../../common/svgs/menuToggle";
import Drawer from "./components/drawer";

const Header: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const links = [
    { name: "Portfolio", to: "#portfolio", id: 1 },
    { name: "Experience", to: "#experience", id: 2 },
    { name: "Articles", to: "#articles", id: 3 },
    { name: "About me", to: "#aboutme", id: 4 },
    { name: "Contact", to: "#contact", id: 5 },
  ];

  return (
    <div className="fixed overflow-hidden">
      <nav
        ref={containerRef}
        className=" shrink-0 w-screen flex justify-between p-4 bg-white items-center"
      >
        <a href="/" className="font-Orya font-semibold text-3xl ">
          Dellamora.
        </a>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="lg:hidden space-x-5 z-10 bg-transparent "
        >
          <MenuToggleIcon onClick={() => setIsOpen(current => !current)} />
        </motion.div>
        <div className="hidden gap-3 lg:relative lg:flex text-xl items-center ">
          {links.map(({ name, to, id }) => (
            <a className="pl-0 px-2 font-Orya font-thin " key={id} href={to}>
              {name}
            </a>
          ))}
        </div>

        <div className=" hidden lg:flex lg:space-x-3 lg:items-center  ">
          <button
            onClick={() => console.log("baixar pdf")}
            className="
              bg-white 
              hover:bg-gray-100 
              font-semibold 
              py-[13px] px-[20px]
              border 
             border-[#F1F1F1]
             text-[#232E35]
             font-Inter 
             rounded-lg"
          >
            Resume
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && <Drawer height={height} links={links} />}
      </AnimatePresence>
    </div>
  );
};
export default Header;
