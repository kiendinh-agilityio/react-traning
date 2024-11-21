import { SVGProps } from 'react';

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={5}
    fill="none"
    className="transition-colors duration-300"
    {...props}
  >
    <path
      fill="currentColor"
      d="M.527.195c.26-.26.68-.26.94 0L4.06 2.777 6.651.194a.666.666 0 0 1 .94.941L4.728 3.998a.944.944 0 0 1-1.335 0L.527 1.135a.665.665 0 0 1 0-.94Z"
    />
  </svg>
);

export default ArrowDownIcon;
