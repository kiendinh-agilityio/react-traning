// Import radix ui
import { Box } from '@radix-ui/themes';

// Import components common icon
import { NotificationIcon, PinionIcon, UserIcon } from '@/components/common/Icons';

// Import components
import { Breadcrumb, Text } from '@/components/common';

interface HeaderProps {
  currentPage: string;
}

const Header = ({ currentPage }: HeaderProps) => (
  <header className="flex justify-between mb-7 px-[21px]">
    <Box>
      <Breadcrumb label="Pages" currentPage="Tables" />
      <Text
        className="font-helveticaBold font-bold text-dark mt-[6px]"
        content={currentPage}
      />
    </Box>
    <Box className="flex items-center gap-[17px]">
      <UserIcon />
      <PinionIcon className="cursor-pointer" />
      <NotificationIcon className="cursor-pointer" />
    </Box>
  </header>
);

export default Header;
