import { SVGProps } from 'react';

const PrevPrimaryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={10}
    fill="none"
    stroke="currentColor"
    className="transition-all"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 5H1m0 0 4-4M1 5l4 4" />
  </svg>
);

export default PrevPrimaryIcon;
