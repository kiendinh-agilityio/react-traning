// import navbar item
import NavbarItem from './NavbarItem';

// import constant
import { NAVBAR_ITEMS } from '@/constants';

const Navbar = () => {
  const renderNavbarItems = () =>
    NAVBAR_ITEMS.map((item) => {
      const { id, label, href, subNavbar } = item;

      return <NavbarItem key={id} label={label} href={href} subNavbar={subNavbar} />;
    });

  return (
    <nav>
      <ul className="flex gap-8">{renderNavbarItems()}</ul>
    </nav>
  );
};

export default Navbar;
