import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SectionTitle from "./sectionTitle";
type Props = {
  id: string;
  children: JSX.Element | JSX.Element[];
  bgColor?: `bg-${string}`;
  setIsInView?: (isInView: boolean) => void;
  title?: string;
  subTitle?: string;
  className?: string;
};

export const Section = ({
  id,
  children,
  bgColor,
  setIsInView,
  className,
  title,
  subTitle,
}: Props): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (setIsInView) {
      setIsInView(inView);
    }
  }, [inView]);
  return (
    <section
      className={`relative overflow-hidden lg:p-[65px] p-5  bg-[#FBFAFF] dark:bg-[#1E1E1E] dark:text-[#FBFAFF] ${className}`}
      ref={ref}
    >
      <div id={id} className="absolute pointer-events-none -top-[100px]" />
      <SectionTitle
        triggerAnimation={inView}
        title={title}
        subTitle={subTitle}
      />
      {children}
    </section>
  );
};

export default Section;
