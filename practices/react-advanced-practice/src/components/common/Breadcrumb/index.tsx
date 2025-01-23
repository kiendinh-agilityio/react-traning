// Import radix ui
import { Box } from '@radix-ui/themes';

// Import common components
import { Text } from '@/components/common';

interface BreadcrumbProps {
  currentPage: string;
  label: string;
}

const Breadcrumb = ({ currentPage, label }: BreadcrumbProps) => (
  <Box>
    <Text className="flex gap-[4px] text-base text-xs">
      {label} /{' '}
      <Box as="span" className="text-xs text-dark">
        {currentPage}
      </Box>
    </Text>
  </Box>
);

export default Breadcrumb;
