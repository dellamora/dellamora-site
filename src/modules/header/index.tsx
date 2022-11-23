import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import MenuToggleIcon from "../../common/svgs/menuToggle";
import Drawer from "./components/drawer";

const Header: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Portfolio", to: "#portfolio", id: 1 },
    { name: "Experience", to: "#experience", id: 2 },
    { name: "Articles", to: "#blog", id: 3 },
    { name: "About me", to: "#skills", id: 4 },
    { name: "Contact", to: "#contact", id: 5 },
  ];

  return (
    <>
      <nav className="fixed z-20 shrink-0 w-screen flex justify-between p-4 bg-slate-300">
        <a className="font-Inter font-semibold text-2xl ">Dellamora</a>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="flex  items-center space-x-5 z-10 bg-transparent "
        >
          <MenuToggleIcon onClick={() => setIsOpen(current => !current)} />
        </motion.div>
      </nav>
      <AnimatePresence>{isOpen && <Drawer links={links} />}</AnimatePresence>
    </>
  );
};
export default Header;
