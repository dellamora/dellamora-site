/* eslint-disable @typescript-eslint/no-unused-vars */

import Link from "next/link";
import React, { ReactElement, useState } from "react";

type Props = {
  href?: string;
  children?: string;
  isLink: boolean;
  className?: string;
};

const ButtonOutline = ({
  href,
  children,
  isLink,
  className,
}: Props): JSX.Element => {
  const style = ` 
    dark:text-[#FBFAFF] 
    dark:border-[#FBFAFF]  
    hover:dark:bg-[#3b3b3b]/50
    hover:bg-gray-100 
    font-semibold 
    py-[10px] px-[20px]
    border 
    text-[#232E35]
    font-Inter 
    rounded-sm ${className}`;
  const buttonProps = {
    href: href,
    className: style,
  };
  return (
    <>
      {isLink ? (
        <Link {...buttonProps}>{children}</Link>
      ) : (
        <a {...buttonProps}>{children}</a>
      )}
    </>
  );
};

export default ButtonOutline;
