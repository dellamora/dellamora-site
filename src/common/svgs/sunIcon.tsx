import { Icon } from "../../domain/components/icon";

const SunIcon: Icon = (props): JSX.Element => {
  props.className;
  props.width;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#232E35"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="4" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
  );
};

export default SunIcon;
