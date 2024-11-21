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
    <nav className="w-navbar">
      <ul className="flex w-full gap-[60px] 2xl:justify-center">{renderNavbarItems()}</ul>
    </nav>
  );
};

export default Navbar;
