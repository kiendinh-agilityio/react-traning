import { memo, useState, cloneElement, ReactElement } from 'react';

// Import components
import { IconWrapper } from '@/components/common/';

interface SidebarItemProps {
  icon: ReactElement;
  label: string;
  active: boolean;
  href: string;
}

const SidebarItem = memo(({ icon, label, active, href }: SidebarItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  const className = `py-2 px-4 text-sm w-[220px] h-[54px] rounded-[15px] font-bold text-base mb-3 ${
    active || isHovered ? 'bg-white text-dark flex items-center cursor-pointer' : ''
  }`;

  return (
    <li
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a className="flex items-center gap-4" href={href}>
        <IconWrapper
          icon={cloneElement(icon, { fill: isHovered ? '#fff' : '#4fd1c5' })}
          active={active || isHovered}
        />
        <span className="text-xs leading-base">{label}</span>
      </a>
    </li>
  );
});

export default SidebarItem;
