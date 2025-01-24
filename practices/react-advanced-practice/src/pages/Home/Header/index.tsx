// Import radix ui
import { Flex, Box } from '@radix-ui/themes';

// Import components common icon
import { NotificationIcon, PinionIcon, UserIcon } from '@/components/common/Icons';

// Import components
import { Breadcrumb, Text } from '@/components/common';

// Import components switch theme
import { SwitchTheme } from '@/components';

interface HeaderProps {
  currentPage: string;
}

const Header = ({ currentPage }: HeaderProps) => (
  <header className="flex justify-between mb-7 px-[21px]">
    <Box>
      <Breadcrumb label="Pages" currentPage="Tables" />
      <Text className="font-bold text-dark mt-[6px] dark:text-light">{currentPage}</Text>
    </Box>
    <Flex align="center" className="gap-[17px]">
      <SwitchTheme />
      <UserIcon />
      <PinionIcon className="cursor-pointer" />
      <NotificationIcon className="cursor-pointer" />
    </Flex>
  </header>
);

export default Header;
