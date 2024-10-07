// Import constants
import { SIDEBAR_ITEMS } from '@/constants';

// Import sidebar item
import SidebarItem from './SidebarItem';

// Import components
import { QuestionIcon } from '@/components/common/Icons';

interface SidebarItemType {
  icon: React.ReactNode;
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
    <>
      <ul className="px-[30px]">
        {renderSidebarItems(mainItems)}
        <li className="font-bold font-helveticaBold py-6 px-4">ACCOUNT PAGES</li>
        {renderSidebarItems(accountItems)}
      </ul>
      <div className="bg-primary w-[218px] py-4 px-4 border border-primary rounded-[15px] m-auto mt-16 text-white">
        <div className="flex items-center justify-center w-[35px] h-[35px] bg-white rounded-xl mb-5">
          <QuestionIcon />
        </div>
        <p className="font-helveticaBold font-bold">Need help?</p>
        <p>Please check our docs</p>
        <button className="border border-primary rounded-xl bg-white text-dark font-helveticaBold font-bold py-2.5 px-[48px] mt-[9px] text-[10px]">
          DOCUMENTATION
        </button>
      </div>
    </>
  );
};

export default Sidebar;
