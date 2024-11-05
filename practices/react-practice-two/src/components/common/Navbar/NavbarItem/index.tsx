import { useState } from 'react';

// import common icons
import { ArrowDownIcon } from '@/components/common/Icons';

interface SubNavbarItem {
  id: string;
  label: string;
  href: string;
}

interface NavbarItemProps {
  label: string;
  href?: string;
  subNavbar?: SubNavbarItem[];
}

const NavbarItem = ({ label, href = '#', subNavbar }: NavbarItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => subNavbar && setIsDropdownOpen((prev) => !prev);

  // Function to display dropdown for Products
  const renderDropdown = () => (
    <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
      {subNavbar?.map((item) => (
        <li key={item.id}>
          <a href={item.href} className="block px-2 py-2 hover:bg-primary hover:text-light">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <li className="relative text-primary text-xs">
      <a
        href={href}
        onClick={toggleDropdown}
        className="flex items-center gap-1.5 px-2 py-2 hover:bg-primary hover:text-light"
      >
        {label}
        {subNavbar && <ArrowDownIcon className="fill-primary group-hover:fill-light" />}
      </a>
      {isDropdownOpen && renderDropdown()}
    </li>
  );
};

export default NavbarItem;
