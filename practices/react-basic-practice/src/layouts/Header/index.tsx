// Import components common icon
import { NotificationIcon, PinionIcon, UserIcon } from '@/components/common/Icons';

// Import components
import { Breadcrumb } from '@/components/common';

interface HeaderProps {
  currentPage: string;
}

const Header = ({ currentPage }: HeaderProps) => (
  <header className="flex justify-between mb-7 px-[21px]">
    <div>
      <Breadcrumb currentPage="Tables" />
      <p className="font-helveticaBold font-bold text-dark">{currentPage}</p>
    </div>
    <div className="flex items-center gap-[17px]">
      <UserIcon />
      <PinionIcon className="cursor-pointer" />
      <NotificationIcon className="cursor-pointer" />
    </div>
  </header>
);

export default Header;
