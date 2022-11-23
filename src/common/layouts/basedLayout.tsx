import React from "react";
import Header from "../../modules/header";
const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="h-screen flex flex-col bg-[#FBFAFF] dark:bg-[#1E1E1E]">
      <Header />
      <div className="mt-[64px]">{children}</div>
    </div>
  );
};

export default BaseLayout;
