import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useDimensions } from "../../common/hooks/useDimensions";
import MenuToggleIcon from "../../common/svgs/menuToggle";
import DarkModeToggle from "./components/darkModeToggle";
import Drawer from "./components/drawer";

const Header: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { scrollYProgress } = useScroll();

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
        className="shrink-0 w-screen flex justify-between p-4  items-center  bg-[#FBFAFF] dark:bg-[#1E1E1E] dark:text-[#FBFAFF]"
      >
        <a href="/" className="font-Orya font-semibold text-3xl ">
          Dellamora.
        </a>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="lg:hidden space-x-5 z-10 bg-transparent flex "
        >
          <DarkModeToggle />

          <MenuToggleIcon
            className="dark:stroke-white"
            onClick={() => setIsOpen(current => !current)}
          />
        </motion.div>
        <div className="hidden gap-3 lg:relative lg:flex text-xl items-center ">
          {links.map(({ name, to, id }) => (
            <a className="pl-0 px-2 font-Orya font-thin " key={id} href={to}>
              {name}
            </a>
          ))}
        </div>

        <div className=" hidden lg:flex lg:space-x-10 lg:items-center  ">
          <DarkModeToggle />
          <Link
            href={"https://www.linkedin.com/in/francielle-dellamora-3579301a1/"}
            className="
            dark:text-[#FBFAFF]
            dark:border-[#FBFAFF]
              hover:dark:bg-[#3b3b3b]/50
            hover:bg-gray-100 
              font-semibold 
              py-[13px] px-[20px]
              border 
             text-[#232E35]
             font-Inter 
             rounded-lg"
          >
            LinkedIn
          </Link>
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
        className=" absolute top-0 left-0 right-0 h-[3px] origin-[0%] dark:bg-[#FBFAFF] bg-[#161616]"
        style={{ scaleX }}
      />
    </div>
  );
};
export default Header;
