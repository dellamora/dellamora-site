/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";

type Props = {
  title?: string;
  subTitle?: string;
  className?: string;
  triggerAnimation: boolean;
};

const SectionTitle = ({
  title,
  subTitle,
  triggerAnimation,
  className,
}: Props): JSX.Element => {
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
  if (!title && !subTitle) {
    return null;
  }
  return (
    <div className={className}>
      {subTitle && (
        <div className="flex md:items-center ">
          <motion.div
            initial="hidden"
            animate={triggerAnimation ? "visible" : "hidden"}
            variants={characterAnimation}
            transition={{
              delay: 0.5,
            }}
            className="hidden md:flex mr-3 h-0.5 w-4 bg-[#D9D9D9] "
          />
          {subTitle.split(" ").map((word, index) => {
            return (
              <motion.span
                className=" font-Inter text-subTitle mr-2 text-[#656D72] uppercase text-bold "
                aria-hidden="true"
                key={index}
                initial="hidden"
                animate={triggerAnimation ? "visible" : "hidden"}
                variants={wordAnimation}
                transition={{
                  delayChildren:
                    index === 0
                      ? 0
                      : subTitle.split(" ").slice(0, index).join(" ").length *
                        0.1,
                  staggerChildren: 0.1,
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
      )}
      <div className="flex md:items-center">
        {title.split(" ").map((word, index) => {
          return (
            <motion.span
              className=" font-Frank font-bold text-2xl lg:text-title mr-2 dark:text-[#dbdbdb]  text-black uppercase text-bold "
              aria-hidden="true"
              key={index}
              initial="hidden"
              animate={triggerAnimation ? "visible" : "hidden"}
              variants={wordAnimation}
              transition={{
                delayChildren:
                  index === 0
                    ? 0
                    : title.split(" ").slice(0, index).join(" ").length * 0.1,
                staggerChildren: 0.1,
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
  );
};

export default SectionTitle;
