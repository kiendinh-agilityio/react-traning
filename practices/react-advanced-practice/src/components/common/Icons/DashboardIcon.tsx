import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const DashboardIcon = ({ color = '#2d3748', ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
    <g fill={color} clipPath="url(#a)">
      <path d="M9.972 3.675a.086.086 0 0 0 0-.148L6.691 1.62a1.378 1.378 0 0 0-1.382 0L2.028 3.527a.086.086 0 0 0 0 .148l3.929 2.312a.086.086 0 0 0 .087 0l3.928-2.312ZM1.66 4.26a.086.086 0 0 0-.129.075V8.07a1.031 1.031 0 0 0 .512.889l3.484 2.089a.086.086 0 0 0 .13-.074V6.64a.086.086 0 0 0-.044-.074L1.66 4.26ZM6.344 6.655v4.318a.086.086 0 0 0 .129.075l3.483-2.09a1.031 1.031 0 0 0 .513-.887V4.335a.085.085 0 0 0-.043-.074.086.086 0 0 0-.086 0L6.387 6.58a.086.086 0 0 0-.043.074Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5.748h11v11H.5z" />
      </clipPath>
    </defs>
  </svg>
);

export default DashboardIcon;
