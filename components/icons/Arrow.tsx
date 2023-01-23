import { SVGProps } from 'react';

const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 13 13"
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      d="M1 12L12.5 0.499965"
      className="stroke-1 stroke-current fill-none"
    ></path>
    <path
      d="M1 0.5H12.5V12"
      className="stroke-1 stroke-current fill-none"
    ></path>
  </svg>
);

export default Arrow;
