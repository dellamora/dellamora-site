import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
type Props = {
  id: string;
  children: JSX.Element | JSX.Element[];
  bgColor?: `bg-${string}`;
  setIsInView?: (isInView: boolean) => void;
  title?: string;
  subTitle?: string;
};

export const Section = ({
  id,
  children,
  bgColor,
  setIsInView,
  title,
  subTitle,
}: Props): JSX.Element => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  useEffect(() => {
    if (setIsInView) {
      setIsInView(inView);
    }
  }, [inView]);
  return (
    <section
      className={`relative p-[65px] h-[90vh] bg-[#FBFAFF] dark:bg-[#1E1E1E] dark:text-[#FBFAFF]`}
      ref={ref}
    >
      <div id={id} className="absolute pointer-events-none -top-[100px]"></div>
      <div>
        <div className="flex md:items-center ">
          <motion.div
            initial="hidden"
            animate={ctrls}
            variants={characterAnimation}
            transition={{
              delay: 0.5,
            }}
            className=" hidden md:flex mr-3 h-0.5 w-4 bg-[#D9D9D9] justify-center"
          />
          {subTitle &&
            subTitle.split(" ").map((word, index) => {
              return (
                <motion.span
                  className=" font-Inter text-subTitle mr-2 text-[#656D72] uppercase text-bold "
                  ref={ref}
                  aria-hidden="true"
                  key={index}
                  initial="hidden"
                  animate={ctrls}
                  variants={wordAnimation}
                  transition={{
                    delayChildren: index * 0.25,
                    staggerChildren: 0.05,
                  }}
                >
                  {word.split("").map((character, index) => {
                    return (
                      <motion.span
                        aria-hidden="true"
                        key={index}
                        variants={characterAnimation}
                      >
                        {character}
                      </motion.span>
                    );
                  })}
                </motion.span>
              );
            })}
        </div>
        <div className="flex md:items-center  ">
          {title &&
            title.split(" ").map((word, index) => {
              return (
                <motion.span
                  className=" font-Frank text-title mr-2 dark:text-[#dbdbdb]  text-black uppercase text-bold "
                  ref={ref}
                  aria-hidden="true"
                  key={index}
                  initial="hidden"
                  animate={ctrls}
                  variants={wordAnimation}
                  transition={{
                    delayChildren: index * 0.25,
                    staggerChildren: 0.05,
                  }}
                >
                  {word.split("").map((character, index) => {
                    return (
                      <motion.span
                        aria-hidden="true"
                        key={index}
                        variants={characterAnimation}
                      >
                        {character}
                      </motion.span>
                    );
                  })}
                </motion.span>
              );
            })}
        </div>
      </div>
      {children}
    </section>
  );
};

export default Section;
