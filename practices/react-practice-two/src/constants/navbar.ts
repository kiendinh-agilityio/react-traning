import { v4 as uuidv4 } from 'uuid';

export const NAVBAR_ITEMS = [
  {
    id: uuidv4(),
    label: 'PRODUCTS',
    subNavbar: [
      { id: uuidv4(), label: 'INFO', href: '/info' },
      { id: uuidv4(), label: 'COLORS', href: '/colors' },
    ],
  },
  { id: uuidv4(), label: 'GALLERY', href: '/gallery' },
  { id: uuidv4(), label: 'CONTACT', href: '/contact' },
];
