import { SVGProps } from 'react';

const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={10} fill="none" {...props}>
    <path fill="#F7EAE3" d="m24.5 5-6.035-5v4H.5v2h17.965v4L24.5 5Z" />
  </svg>
);

export default LinkIcon;
