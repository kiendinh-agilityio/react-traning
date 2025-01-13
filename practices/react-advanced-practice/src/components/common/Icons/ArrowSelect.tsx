import { SVGProps } from 'react';

const ArrowSelectIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={7} fill="none" {...props}>
    <path
      fill="#C4C4C4"
      d="M4.243 6.329 0 2.086 1.415.672 4.243 3.5 7.071.67l1.415 1.415-4.243 4.243Z"
    />
  </svg>
);

export default ArrowSelectIcon;
