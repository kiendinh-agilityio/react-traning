import { SVGProps } from 'react';

interface ProfileIconProps extends SVGProps<SVGSVGElement> {
  fill?: string;
}

const ProfileIcon = ({ fill, ...props }: ProfileIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none" {...props}>
    <path
      fill={fill}
      d="M9.745 2.392c-.57-.616-1.366-.955-2.245-.955-.884 0-1.683.337-2.25.949-.574.618-.853 1.459-.788 2.367C4.592 6.543 5.955 8 7.5 8c1.545 0 2.905-1.457 3.037-3.247.067-.9-.215-1.738-.792-2.361ZM12.656 14.562H2.344a.908.908 0 0 1-.71-.326 1.035 1.035 0 0 1-.21-.853c.248-1.372 1.02-2.524 2.232-3.333C4.734 9.332 6.1 8.937 7.5 8.937c1.401 0 2.766.395 3.844 1.113 1.213.808 1.984 1.96 2.232 3.332.056.315-.02.626-.21.853a.908.908 0 0 1-.71.327Z"
    />
  </svg>
);

export default ProfileIcon;
