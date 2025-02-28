// Import radix ui
import { Flex } from '@radix-ui/themes';

// Import components
import { Text } from '@/components/common';

interface StatusProps {
  value: string;
}

const Status = ({ value }: StatusProps) => (
  <Flex
    justify="center"
    align="center"
    className={`w-[70px] h-[25px] border rounded-lg ${
      value === 'Active' ? 'border-active bg-active' : 'border-inactive bg-inactive'
    }`}
  >
    <Text weight="bold" className="font-bold text-white">
      {value}
    </Text>
  </Flex>
);

export default Status;
