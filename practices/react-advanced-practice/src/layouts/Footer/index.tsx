// Import constants
import { FOOTER_NAVBAR } from '@/constants';

// Import utils
import { currentYear } from '@/utils';

// Import components
import { Link } from '@/components/common';

const Footer = () => (
  <footer className="flex justify-between text-xs text-base px-[21px]">
    <p>
      @ {currentYear}, Made with ❤️ by{' '}
      <span className="text-primary font-bold">Creative Tim</span> &{' '}
      <span className="text-primary font-bold">Simmmple</span> for a better web
    </p>
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
