import { memo } from 'react';

// Import components
import { IconWrapper } from '@/components/common/';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  href: string;
}

const SidebarItem = memo(({ icon, label, active, href }: SidebarItemProps) => {
  const className = `sidebar-item ${active ? 'bg-white text-dark w-[220px] h-[54px] flex items-center rounded-[15px] cursor-pointer' : ''}`;

  return (
    <li className={className}>
      <a className="flex items-center gap-4" href={href}>
        <IconWrapper icon={icon} active={active} />
        <span className="text-xs leading-base">{label}</span>
      </a>
    </li>
  );
});

export default SidebarItem;
