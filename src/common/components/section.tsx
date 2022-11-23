import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (setIsInView) {
      setIsInView(inView);
    }
  }, [inView]);
  return (
    <section className={`relative p-[65px] h-[90vh] ${bgColor}`} ref={ref}>
      <div id={id} className="absolute pointer-events-none -top-[100px]"></div>
      {title && <h1>{title}</h1>}
      {subTitle && <h1>{subTitle}</h1>}
      {children}
    </section>
  );
};

export default Section;
