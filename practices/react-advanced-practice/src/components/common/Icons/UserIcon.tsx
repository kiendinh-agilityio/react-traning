import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const UserIcon = ({ color = '#2d3748', ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
    <g fill={color} clipPath="url(#a)">
      <path d="M7.647 2.135A2.211 2.211 0 0 0 6 1.435c-.648 0-1.234.247-1.65.696-.42.453-.626 1.07-.577 1.735C3.868 5.18 4.867 6.247 6 6.247c1.133 0 2.13-1.068 2.227-2.38.05-.66-.157-1.275-.58-1.732ZM9.781 11.06H2.22a.667.667 0 0 1-.52-.24.759.759 0 0 1-.154-.625c.181-1.006.747-1.851 1.636-2.444.79-.527 1.792-.817 2.82-.817 1.027 0 2.028.29 2.818.817.89.593 1.455 1.438 1.636 2.444a.759.759 0 0 1-.154.625.666.666 0 0 1-.52.24Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5.748h11v11H.5z" />
      </clipPath>
    </defs>
  </svg>
);

export default UserIcon;
