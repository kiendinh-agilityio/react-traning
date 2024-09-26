import { SVGProps } from 'react';

const SettingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#4FD1C5"
        d="M13.757 4.031a.468.468 0 0 0-.749-.117l-1.8 1.801a.472.472 0 0 1-.663 0l-.778-.779a.469.469 0 0 1 0-.663L11.56 2.48a.468.468 0 0 0-.14-.759c-1.354-.605-3.044-.29-4.11.768-.905.9-1.175 2.304-.74 3.854a.466.466 0 0 1-.13.468l-4.878 4.455a1.88 1.88 0 1 0 2.654 2.655l4.502-4.888A.466.466 0 0 1 9.18 8.9c.442.121.897.184 1.355.187.978 0 1.837-.317 2.456-.927 1.147-1.13 1.322-3.047.766-4.128Zm-10.842 9.57a.937.937 0 1 1-.203-1.864.937.937 0 0 1 .203 1.864Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h15v15H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SettingIcon;
