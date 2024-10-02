// Import constants
import { NAVBAR_ITEMS } from '@/constants';

// Import utils
import { currentYear } from '@/utils';

const Footer = () => (
  <footer className="flex justify-between text-sidebar px-[21px]">
    <p>
      @ {currentYear}, Made with ❤️ by{' '}
      <span className="text-primary font-helveticaBold font-bold">Creative Tim</span> &{' '}
      <span className="text-primary font-helveticaBold font-bold">Simmmple</span> for a better web
    </p>
    <nav>
      <ul className="flex gap-11">
        {NAVBAR_ITEMS.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);

export default Footer;
