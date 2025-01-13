import { SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} fill="none" {...props}>
    <path
      fill="#a0aec0"
      d="M12.13 11.096 9.374 8.34a5.092 5.092 0 0 0 1.02-3.064A5.125 5.125 0 0 0 5.276.157a5.125 5.125 0 0 0-5.12 5.119 5.125 5.125 0 0 0 5.12 5.119 5.092 5.092 0 0 0 3.063-1.021l2.757 2.756a.733.733 0 0 0 1.034-1.034ZM1.62 5.276a3.656 3.656 0 1 1 7.312 0 3.656 3.656 0 0 1-7.313 0Z"
    />
  </svg>
);

export default SearchIcon;
