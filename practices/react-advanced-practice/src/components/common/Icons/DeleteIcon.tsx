import { SVGProps } from 'react';

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#E53E3E"
        d="M3.75 12.375c0 .688.563 1.25 1.25 1.25h5c.688 0 1.25-.563 1.25-1.25v-6.25c0-.688-.563-1.25-1.25-1.25H5c-.688 0-1.25.563-1.25 1.25v6.25ZM11.25 3H9.687l-.443-.444a.63.63 0 0 0-.438-.181H6.194a.63.63 0 0 0-.438.181L5.312 3H3.75a.627.627 0 0 0-.625.625c0 .344.281.625.625.625h7.5a.627.627 0 0 0 .625-.625A.627.627 0 0 0 11.25 3Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h15v15H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default DeleteIcon;
