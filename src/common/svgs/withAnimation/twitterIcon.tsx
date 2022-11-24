import { Icon } from "../../../domain/components/icon";
import Link from "next/link";
import { motion } from "framer-motion";

const Twitter: Icon = ({ width, className }): JSX.Element => {
  return (
    <Link href="https://twitter.com/francidellamora">
      <motion.svg
        width={width}
        viewBox="0 0 41 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M38.6667 2.20277C36.8333 3.1011 35.0367 3.46593 33.1667 4.01777C31.1115 1.6986 28.0645 1.57027 25.1367 2.6666C22.2088 3.76293 20.2912 6.44327 20.3333 9.51777V11.3511C14.3842 11.5033 9.08583 8.7936 5.66667 4.01777C5.66667 4.01777 -2.00033 17.6449 13 24.1844C9.568 26.4706 6.14517 28.0124 2 27.8511C8.06467 31.1566 14.6738 32.2933 20.3957 30.6323C26.959 28.7256 32.3527 23.8068 34.4225 16.4386C35.0399 14.1977 35.3465 11.8825 35.3337 9.5581C35.33 9.1016 38.102 4.4761 38.6667 2.20093V2.20277Z"
          stroke="#232E35"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </Link>
  );
};

export default Twitter;
