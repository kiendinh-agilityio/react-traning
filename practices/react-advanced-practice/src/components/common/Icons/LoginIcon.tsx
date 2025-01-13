import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const LoginIcon = ({ color = '#2d3748', ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={11} height={12} fill="none" {...props}>
    <path
      fill={color}
      d="M5.5 1.778a4.474 4.474 0 0 0-4.469 4.47A4.474 4.474 0 0 0 5.5 10.715a4.474 4.474 0 0 0 4.469-4.469A4.474 4.474 0 0 0 5.5 1.778Zm-1.079 2.51A1.462 1.462 0 0 1 5.5 3.841c.424 0 .803.16 1.077.45.277.294.411.688.38 1.113-.064.843-.717 1.53-1.457 1.53-.74 0-1.394-.687-1.456-1.53a1.448 1.448 0 0 1 .377-1.116Zm1.079 5.74a3.77 3.77 0 0 1-2.707-1.143 2.64 2.64 0 0 1 .755-.719c.548-.35 1.24-.544 1.952-.544.711 0 1.404.193 1.951.544.298.187.554.432.756.719A3.77 3.77 0 0 1 5.5 10.028Z"
    />
  </svg>
);

export default LoginIcon;
