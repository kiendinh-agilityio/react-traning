import React, { SVGProps } from 'react';

interface SidebarItemProps {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: string;
  active: boolean;
}

const SidebarItem = ({ icon, text, active }: SidebarItemProps) => {
  const className = `sidebar-item ${active ? 'bg-white text-dark w-[220px] h-[54px] flex items-center rounded-[15px] cursor-pointer' : ''}`;

  const iconClassName = `flex items-center justify-center w-[30px] h-[30px] rounded-xl border ${
    active ? 'bg-primary border-primary' : 'bg-white border-white'
  }`;

  return text === 'SUPPORT' ? (
    <li className="py-2 px-4 min-w-[180px] text-sm tracking-[1px]">{text}</li>
  ) : (
    <li className={className}>
      <a className="flex items-center gap-4" href="#">
        <span className={iconClassName}>{React.createElement(icon, {})}</span>
        <span>{text}</span>
      </a>
    </li>
  );
};

export default SidebarItem;
