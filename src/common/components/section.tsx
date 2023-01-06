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
      className={`min-h-[50vh] relative overflow-hidden lg:p-[65px] p-5  ${className}`}
      ref={ref}
    >
      <div
        id={id}
        className="absolute pointer-events-none -top-[50px] lg:-top-[12px]"
      />
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
