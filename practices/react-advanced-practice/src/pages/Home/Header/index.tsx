import { useNavigate } from 'react-router-dom';

// Import radix ui
import { Flex, Box } from '@radix-ui/themes';

// Import components common icon
import {
  NotificationIcon,
  PinionIcon,
  UserIcon,
  LogoutIcon,
} from '@/components/common/Icons';

// Import components
import { Breadcrumb, Text, Button } from '@/components/common';

// Import components switch theme
import { SwitchTheme } from '@/components';

// Import types
import { ButtonVariant } from '@/types';

interface HeaderProps {
  currentPage: string;
}

const Header = ({ currentPage }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => navigate('/signin');

  return (
    <header className="flex justify-between mb-7 px-[21px]">
      <Box>
        <Breadcrumb label="Pages" currentPage="Tables" />
        <Text className="font-bold text-dark mt-[6px] dark:text-light">
          {currentPage}
        </Text>
      </Box>
      <Flex align="center" className="gap-[17px]">
        <SwitchTheme />
        <UserIcon color="#718096" className="cursor-pointer" />
        <PinionIcon className="cursor-pointer" />
        <NotificationIcon className="cursor-pointer" />
        <Button
          variant={ButtonVariant.Transparent}
          onClick={handleLogout}
          ariaLabel="Button logout"
          className="text-gray"
        >
          <LogoutIcon /> Log Out
        </Button>
      </Flex>
    </header>
  );
};

export default Header;
