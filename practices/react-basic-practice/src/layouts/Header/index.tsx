// Import components common icon
import { NotificationIcon, PinionIcon, UserIcon } from '@/components/common/Icons';

interface HeaderProps {
  currentPage: string;
}

const Header = ({ currentPage }: HeaderProps) => (
  <header className="flex justify-between mb-7 px-[21px]">
    <div>
      <p className="text-[#a0aec0] mb-1.5">
        Pages / <span className="text-dark">{currentPage}</span>
      </p>
      <p className="font-helveticaBold font-bold text-dark">{currentPage}</p>
    </div>
    <div className="flex items-center gap-[17px]">
      <UserIcon />
      <PinionIcon />
      <NotificationIcon />
    </div>
  </header>
);

export default Header;
