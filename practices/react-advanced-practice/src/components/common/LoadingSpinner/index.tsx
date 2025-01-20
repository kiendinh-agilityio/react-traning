// Import radix ui
import { Box } from '@radix-ui/themes';

// Import styles animation for toast
import './loading.css';

const LoadingSpinner = () => (
  <Box className="loading-container">
    <Box as="span" className="loading-indicator"></Box>
  </Box>
);

export default LoadingSpinner;
