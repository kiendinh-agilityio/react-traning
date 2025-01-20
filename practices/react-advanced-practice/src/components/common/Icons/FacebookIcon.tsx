import { SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none" {...props}>
    <path
      fill="#2D3748"
      d="M25.917 13c0-7.13-5.786-12.917-12.916-12.917C5.87.083.084 5.87.084 13c0 6.252 4.443 11.457 10.333 12.658v-8.783H7.834V13h2.583V9.77a4.526 4.526 0 0 1 4.521-4.52h3.23v3.875h-2.584c-.71 0-1.292.581-1.292 1.292V13h3.875v3.875h-3.875v8.977c6.523-.646 11.625-6.148 11.625-12.852Z"
    />
  </svg>
);

export default FacebookIcon;
