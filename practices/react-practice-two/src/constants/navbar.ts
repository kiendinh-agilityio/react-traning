export const NAVBAR_ITEMS = [
  {
    id: 'products',
    label: 'PRODUCTS',
    hasDropdown: true,
    subNavbar: [
      { id: 'info', label: 'INFO', href: '/info' },
      { id: 'colors', label: 'COLORS', href: '/colors' },
    ],
  },
  { id: 'gallery', label: 'GALLERY', href: '/gallery', hasDropdown: false },
  { id: 'contact', label: 'CONTACT', href: '/contact', hasDropdown: false },
];
