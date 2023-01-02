import { AnimatePresence, motion, MotionValue, useSpring } from "framer-motion";
import React, { useRef, useState } from "react";
import ButtonOutline from "../../common/components/buttonOutline";
import { useDimensions } from "../../common/hooks/useDimensions";
import MenuToggleIcon from "../../common/svgs/withAnimation/menuToggle";
import DarkModeToggle from "./components/darkModeToggle";
import Drawer from "./components/drawer";

const Header = ({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const links = [
    { name: "Portfolio", to: "#portfolio", id: 1 },
    { name: "Articles", to: "#articles", id: 2 },
    { name: "Experience", to: "#experience", id: 3 },
    { name: "About me", to: "#aboutme", id: 4 },
    { name: "Contact", to: "#contact", id: 5 },
  ];

  const scaleX = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed overflow-hidden z-30">
      <nav
        ref={containerRef}
        className="shrink-0 w-screen flex justify-between p-4  text-gray items-center  bg-primary dark:bg-primaryDark dark:text-primary "
      >
        <a href="/" className="uppercase font-Inter font-extrabold text-lg  ">
          Dellamora
        </a>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="lg:hidden space-x-5 z-10 bg-transparent flex "
        >
          <DarkModeToggle />

          <MenuToggleIcon
            className="stroke-primaryDark dark:stroke-whiteBasic"
            onClick={() => setIsOpen(current => !current)}
          />
        </motion.div>
        <div className="hidden gap-3 lg:relative lg:flex text-xl items-center ">
          {links.map(({ name, to, id }) => (
            <a className="pl-0 px-2 font-Inter font-thin " key={id} href={to}>
              {name}
            </a>
          ))}
        </div>

        <div className=" hidden lg:flex lg:space-x-10 lg:items-center  ">
          <DarkModeToggle />
          <ButtonOutline
            isLink
            href="https://www.linkedin.com/in/francielle-dellamora-3579301a1/"
            className="text-grayMedium dark:text-grayLight text-sm rounded-lg border-grayLight transition-colors hover:bg-grayLight/20 dark:hover:bg-secondaryDark/50"
          >
            LinkedIn
          </ButtonOutline>
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
        className="hidden lg:block absolute bottom-0 left-0 right-0 h-[3px] origin-[0%] dark:bg-primary bg-primaryDark"
        style={{ scaleX }}
      />
    </div>
  );
};
export default Header;
