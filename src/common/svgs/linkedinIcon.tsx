import { Icon } from "../../domain/components/icon";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const LinkedIn: Icon = ({ fill, className, width }): JSX.Element => {
  return (
    <Link href="https://www.linkedin.com/in/francielle-dellamora-3579301a1/">
      <motion.svg
        width={width}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M16.5 7.999C15.6047 7.99862 14.7233 8.22006 13.9346 8.64353C13.8626 8.45396 13.7346 8.29077 13.5677 8.17564C13.4008 8.06052 13.2028 7.99891 13 7.999H9C8.86866 7.99893 8.73859 8.02474 8.61723 8.07497C8.49587 8.1252 8.3856 8.19885 8.29273 8.29173C8.19985 8.3846 8.1262 8.49487 8.07597 8.61623C8.02574 8.73759 7.99993 8.86766 8 8.999V20.999C7.99993 21.1303 8.02574 21.2604 8.07597 21.3818C8.12619 21.5031 8.19985 21.6134 8.29272 21.7063C8.3856 21.7992 8.49587 21.8728 8.61723 21.923C8.73859 21.9733 8.86866 21.9991 9 21.999H13C13.1313 21.9991 13.2614 21.9733 13.3828 21.923C13.5041 21.8728 13.6144 21.7992 13.7073 21.7063C13.8002 21.6134 13.8738 21.5031 13.924 21.3818C13.9743 21.2604 14.0001 21.1303 14 20.999V15.499C14 15.2338 14.1054 14.9794 14.2929 14.7919C14.4804 14.6044 14.7348 14.499 15 14.499C15.2652 14.499 15.5196 14.6044 15.7071 14.7919C15.8946 14.9794 16 15.2338 16 15.499V20.999C15.9999 21.1303 16.0257 21.2604 16.076 21.3818C16.1262 21.5031 16.1999 21.6134 16.2927 21.7063C16.3856 21.7992 16.4959 21.8728 16.6172 21.923C16.7386 21.9733 16.8687 21.9991 17 21.999H21C21.1313 21.9991 21.2614 21.9733 21.3828 21.923C21.5041 21.8728 21.6144 21.7992 21.7073 21.7063C21.8002 21.6134 21.8738 21.5031 21.924 21.3818C21.9743 21.2604 22.0001 21.1303 22 20.999V13.499C21.9982 12.0409 21.4181 10.643 20.3871 9.61192C19.356 8.58086 17.9581 8.00081 16.5 7.999ZM20 19.999H18V15.499C18 14.7034 17.6839 13.9403 17.1213 13.3777C16.5587 12.8151 15.7957 12.499 15 12.499C14.2044 12.499 13.4413 12.8151 12.8787 13.3777C12.3161 13.9403 12 14.7034 12 15.499V19.999H10V9.999H12V10.7021C12.0001 10.9093 12.0646 11.1114 12.1845 11.2804C12.3043 11.4494 12.4737 11.577 12.6692 11.6456C12.8647 11.7142 13.0767 11.7204 13.2759 11.6634C13.4751 11.6063 13.6517 11.4888 13.7813 11.3271C14.23 10.7572 14.8456 10.3416 15.542 10.1384C16.2384 9.93517 16.9809 9.95452 17.6657 10.1937C18.3506 10.4329 18.9437 10.88 19.3622 11.4726C19.7806 12.0651 20.0036 12.7736 20 13.499V19.999ZM6 7.999H2C1.86866 7.99893 1.73859 8.02474 1.61723 8.07497C1.49587 8.1252 1.3856 8.19885 1.29273 8.29173C1.19985 8.3846 1.1262 8.49487 1.07597 8.61623C1.02574 8.73759 0.999926 8.86766 1 8.999V20.999C0.999925 21.1303 1.02574 21.2604 1.07597 21.3818C1.12619 21.5031 1.19985 21.6134 1.29272 21.7063C1.3856 21.7992 1.49587 21.8728 1.61723 21.923C1.73859 21.9733 1.86866 21.9991 2 21.999H6C6.13134 21.9991 6.26142 21.9733 6.38277 21.923C6.50413 21.8728 6.6144 21.7992 6.70728 21.7063C6.80015 21.6134 6.87381 21.5031 6.92404 21.3818C6.97426 21.2604 7.00008 21.1303 7 20.999V8.999C7.00008 8.86766 6.97426 8.73759 6.92403 8.61623C6.87381 8.49487 6.80015 8.3846 6.70728 8.29173C6.6144 8.19885 6.50413 8.1252 6.38277 8.07497C6.26141 8.02474 6.13134 7.99893 6 7.999ZM5 19.999H3V9.999H5V19.999ZM4.01465 0.542001C3.57701 0.515804 3.13862 0.578898 2.72613 0.727445C2.31364 0.875993 1.93567 1.10689 1.61522 1.40609C1.29476 1.7053 1.03852 2.06656 0.86206 2.4679C0.685603 2.86924 0.592624 3.30229 0.588778 3.74069C0.584932 4.1791 0.670298 4.61371 0.839686 5.01808C1.00907 5.42246 1.25894 5.78816 1.5741 6.09294C1.88925 6.39772 2.26311 6.63522 2.67293 6.79098C3.08275 6.94674 3.51997 7.01752 3.958 6.999H3.98632C4.42512 7.02506 4.86462 6.96138 5.27798 6.81185C5.69133 6.66232 6.06986 6.43007 6.39042 6.12931C6.71099 5.82854 6.96686 5.46557 7.14241 5.06258C7.31796 4.65958 7.40949 4.22503 7.41142 3.78546C7.41335 3.34589 7.32563 2.91055 7.15362 2.50603C6.98162 2.10151 6.72894 1.73631 6.41102 1.43275C6.09311 1.12918 5.71663 0.893625 5.30461 0.740473C4.89258 0.58732 4.45365 0.519787 4.01464 0.542001H4.01465ZM3.98633 4.999H3.958C3.78507 5.02 3.60964 5.00378 3.44349 4.95143C3.27734 4.89908 3.1243 4.81181 2.99464 4.69547C2.86498 4.57912 2.7617 4.4364 2.69172 4.27688C2.62173 4.11735 2.58667 3.9447 2.58887 3.77051C2.58887 3.02441 3.14844 2.54199 4.01465 2.54199C4.18935 2.5187 4.36701 2.53312 4.53567 2.58428C4.70432 2.63543 4.86006 2.72213 4.99239 2.83854C5.12471 2.95495 5.23056 3.09837 5.30279 3.25913C5.37502 3.41989 5.41197 3.59427 5.41113 3.77051C5.41113 4.5166 4.85156 4.999 3.98633 4.999Z"
          fill={fill || "#232E35"}
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
            delay: 1.6,
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </Link>
  );
};

export default LinkedIn;
