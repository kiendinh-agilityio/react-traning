import { Box, Flex } from '@radix-ui/themes';

// Import components
import { Avatar, Text } from '@/components/common';

interface ProfileProps {
  fullName: string;
  email: string;
  avatarUrl: string;
}

const Profile = ({ fullName, email, avatarUrl }: ProfileProps) => (
  <Box className="flex gap-[15px] text-left">
    <Avatar fallback src={avatarUrl} />
    <Flex direction="column">
      <Text weight="bold" content={fullName} className="font-bold leading-base" />
      <Text content={email} className="text-gray" />
    </Flex>
  </Box>
);

export default Profile;
