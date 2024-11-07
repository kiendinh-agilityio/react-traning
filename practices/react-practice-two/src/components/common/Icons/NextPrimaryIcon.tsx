import { SVGProps } from 'react';

const NextPrimaryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={10} fill="none" {...props}>
    <path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 5h14m0 0-4-4m4 4-4 4"
    />
  </svg>
);

export default NextPrimaryIcon;
