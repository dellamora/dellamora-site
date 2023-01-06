/* eslint-disable @typescript-eslint/no-unused-vars */

import Link from "next/link";

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
    font-semibold 
    py-[10px] px-[20px]
    border 
    font-Inter 
    rounded
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
        <a target="_blank" {...buttonProps}>
          {children}
        </a>
      )}
    </>
  );
};

export default ButtonOutline;
