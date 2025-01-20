import React from 'react';

// Import common components
import { Link } from '@/components/common';

// Import constants
import { HEADER_NAVBAR } from '@/constants';

interface NavbarItemProps {
  iconColor?: '#2d3748' | '#fff';
  textColor?: 'text-dark' | 'text-light';
}

const Navbar = ({ iconColor = '#2d3748', textColor = 'text-dark' }: NavbarItemProps) => (
  <nav className="flex items-center justify-between">
    <ul className="flex gap-[30px]">
      {HEADER_NAVBAR.map((item, href) => (
        <li key={href}>
          <Link
            href={item.href}
            className={`flex flex-row items-center gap-[5px] font-bold text-xs ${textColor}`}
          >
            {React.cloneElement(item.icon, { color: iconColor })}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
