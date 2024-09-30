// Import constants
import { NAVBAR_ITEMS } from '@/constants';

const Footer = () => {
  return (
    <footer className="flex justify-between text-sidebar px-[21px]">
      <p>
        @ 2021, Made with ❤️ by{' '}
        <span className="text-primary font-helveticaBold font-bold">Creative Tim</span> &{' '}
        <span className="text-primary font-helveticaBold font-bold">Simmmple</span> for a better web
      </p>
      <nav>
        <ul className="flex gap-11">
          {NAVBAR_ITEMS.map((item, index) => (
            <li key={index}>
              <a href="#">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
