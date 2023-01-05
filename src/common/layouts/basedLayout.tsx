import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import Header from "../../modules/header";
const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  return (
    <div className="h-screen w-screen overflow-y-hidden">
      <div id="modal-root" />
      <div
        className="h-screen flex flex-col bg-[#FBFAFF] dark:bg-[#1E1E1E] overflow-auto "
        ref={containerRef}
      >
        <Header scrollProgress={scrollYProgress} />
        <div className="mt-[64px]">{children}</div>
      </div>
    </div>
  );
};

export default BaseLayout;
