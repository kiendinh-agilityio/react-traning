import { Box } from '@radix-ui/themes';

// Import constants
import { FOOTER_NAVBAR } from '@/constants';

// Import utils
import { currentYear } from '@/utils';

// Import components
import { Link, Text } from '@/components/common';

const Footer = () => (
  <footer className="flex justify-between text-xs text-base">
    <Text className="flex gap-1">
      @ {currentYear}, Made with ❤️ by{' '}
      <Box as="span" className="text-primary font-bold">
        Creative Tim
      </Box>{' '}
      &{' '}
      <Box as="span" className="text-primary font-bold">
        Simmmple
      </Box>{' '}
      for a better web
    </Text>
    <nav>
      <ul className="flex gap-11">
        {FOOTER_NAVBAR.map((item) => (
          <li key={item.href}>
            <Link href={item.href} target="_blank">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);

export default Footer;
