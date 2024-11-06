// StarIcon.tsx
import { SVGProps } from 'react';

interface StarIconProps extends SVGProps<SVGSVGElement> {
  filled?: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ filled, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={15} fill="none" {...props}>
    <path
      fill={filled ? '#FE8B75' : '#E0E0E0'}
      d="m8.727 0 2.309 5.203 5.991.45-4.565 3.667 1.395 5.481-5.13-2.937-5.13 2.937L4.993 9.32.427 5.653l5.992-.45L8.727 0Z"
    />
  </svg>
);

export default StarIcon;
