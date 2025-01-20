import { memo, useMemo } from 'react';

// Import constants
import { SIDEBAR_ITEMS } from '@/constants';

// Import sidebar item
import SidebarItem from './SidebarItem';

// Import help box
import HelpBox from './HelpBox';

interface SidebarItemType {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  href: string;
  group?: string;
}

const Sidebar = () => {
  const mainItems: SidebarItemType[] = useMemo(
    () => SIDEBAR_ITEMS.filter((item) => !item.group),
    [],
  );

  const accountItems: SidebarItemType[] = useMemo(
    () => SIDEBAR_ITEMS.filter((item) => item.group === 'ACCOUNT PAGES'),
    [],
  );

  // Function renderSidebarItems
  const renderSidebarItems = (items: SidebarItemType[]) =>
    items.map((item) => (
      <SidebarItem
        key={item.label}
        icon={item.icon}
        label={item.label}
        href={item.href}
        active={item.active}
      />
    ));

  return (
    <>
      <ul className="px-[30px]">
        {renderSidebarItems(mainItems)}
        <li className="font-bold font-helveticaBold py-6 px-4">ACCOUNT PAGES</li>
        {renderSidebarItems(accountItems)}
      </ul>
      <HelpBox />
    </>
  );
};

export default memo(Sidebar);
