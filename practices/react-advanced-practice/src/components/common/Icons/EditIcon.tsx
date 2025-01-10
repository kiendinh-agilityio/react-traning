import { SVGProps } from 'react';

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#2D3748"
        d="M2 9.23v1.52c0 .14.11.25.25.25h1.52c.065 0 .13-.026.175-.076l5.46-5.455L7.53 3.594 2.075 9.05A.245.245 0 0 0 2 9.23Zm8.855-5.21a.498.498 0 0 0 0-.706l-1.17-1.17a.498.498 0 0 0-.705 0l-.915.915L9.94 4.934l.915-.915Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5.5h12v12H.5z" />
      </clipPath>
    </defs>
  </svg>
);

export default EditIcon;
