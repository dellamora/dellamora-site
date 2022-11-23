import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import React, { useContext, useRef, useState } from "react";
import { DarkModeContext } from "../../common/context/darkMode";
import { useDimensions } from "../../common/hooks/useDimensions";
import MenuToggleIcon from "../../common/svgs/menuToggle";
import DarkModeToggle from "./components/darkModeToggle";
import Drawer from "./components/drawer";

const Header: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { scrollYProgress } = useScroll();

  const { isDark, toggleDarkMode } = useContext(DarkModeContext);

  const links = [
    { name: "Portfolio", to: "#portfolio", id: 1 },
    { name: "Experience", to: "#experience", id: 2 },
    { name: "Articles", to: "#articles", id: 3 },
    { name: "About me", to: "#aboutme", id: 4 },
    { name: "Contact", to: "#contact", id: 5 },
  ];

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed overflow-hidden z-20">
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

        <div className=" hidden lg:flex lg:space-x-10 lg:items-center  ">
          <DarkModeToggle toggleSwitch={toggleDarkMode} isDark={isDark} />
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
        {isOpen && (
          <Drawer
            handleClose={() => setIsOpen(current => !current)}
            height={height}
            links={links}
          />
        )}
      </AnimatePresence>
      <motion.div
        className=" absolute top-0 left-0 right-0 h-[3px] origin-[0%] bg-[#161616]"
        style={{ scaleX }}
      />
    </div>
  );
};
export default Header;
