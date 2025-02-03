import { SVGProps } from 'react';

interface SigninIconProps extends SVGProps<SVGSVGElement> {
  fill?: string;
}

const SigninIcon = ({ fill, ...props }: SigninIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none" {...props}>
    <path
      fill={fill}
      d="M12.539 7.063H8.437a1.406 1.406 0 0 1-1.406-1.407V1.555a.117.117 0 0 0-.117-.117H4.219a1.875 1.875 0 0 0-1.875 1.875v9.375a1.875 1.875 0 0 0 1.875 1.875h6.562a1.875 1.875 0 0 0 1.875-1.875V7.18a.117.117 0 0 0-.117-.117Z"
    />
    <path
      fill={fill}
      d="M12.282 6.026 8.069 1.813a.059.059 0 0 0-.1.041v3.803a.469.469 0 0 0 .468.469h3.804a.059.059 0 0 0 .04-.1Z"
    />
  </svg>
);

export default SigninIcon;
