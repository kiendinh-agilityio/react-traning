import { useState } from 'react';

// import common icons
import { ArrowDownIcon } from '@/components/common/Icons';

// import constants
import { DROPDOWN_PRODUCTS } from '@/constants';

interface NavbarItemProps {
  label: string;
  hasDropdown: boolean;
  href?: string;
}

const NavbarItem = ({ label, href = '#', hasDropdown }: NavbarItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => hasDropdown && setIsDropdownOpen((prev) => !prev);

  // Function to check icon display
  const shouldShowIcon = () => hasDropdown && label === 'PRODUCTS';

  // function display dropdown for Products
  const renderDropdown = () => (
    <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
      {DROPDOWN_PRODUCTS.map((item) => {
        const { id, href, label } = item;

        return (
          <li key={id}>
            <a href={href} className="block px-2 py-2 hover:bg-primary hover:text-light">
              {label}
            </a>
          </li>
        );
      })}
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
        {shouldShowIcon() && <ArrowDownIcon className="fill-primary group-hover:fill-light" />}
      </a>
      {hasDropdown && isDropdownOpen && renderDropdown()}
    </li>
  );
};

export default NavbarItem;
