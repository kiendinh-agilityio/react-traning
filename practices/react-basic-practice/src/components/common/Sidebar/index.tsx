import { SVGProps } from 'react';
import { SIDEBAR_ITEMS } from '@/constants';
import SidebarItem from './SidebarItem';

interface SidebarItemType {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  label: string;
  active: boolean;
  group?: string;
}

const renderSidebarItems = (items: SidebarItemType[]) =>
  items.map((item) => (
    <SidebarItem key={item.label} icon={item.icon} label={item.label} active={item.active} />
  ));

const Sidebar = () => {
  const mainItems: SidebarItemType[] = SIDEBAR_ITEMS.filter((item) => !item.group);

  // Filter out items belonging to the ACCOUNT PAGES group
  const accountItems: SidebarItemType[] = SIDEBAR_ITEMS.filter(
    (item) => item.group === 'ACCOUNT PAGES',
  );

  return (
    <ul className="px-[30px]">
      {renderSidebarItems(mainItems)}
      <li className="font-bold font-helveticaBold py-6 px-4">ACCOUNT PAGES</li>
      {renderSidebarItems(accountItems)}
    </ul>
  );
};

export default Sidebar;
