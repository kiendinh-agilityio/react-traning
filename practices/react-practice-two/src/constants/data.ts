import { v4 as uuidv4 } from 'uuid';

import {
  BritainEriksen,
  SerhiyHipskyy,
  JustusMenke,
  ProductBlue,
  ProductRed,
  ProductBlack,
  ProductGreen,
} from '@/assets/images/';

// Feature list
export const FEATURES_LIST = [
  {
    id: uuidv4(),
    value: '105',
    unit: 'lbs',
    description: 'Net Weight',
  },
  {
    id: uuidv4(),
    value: '26',
    unit: 'mph',
    description: 'Top Speed',
  },
  {
    id: uuidv4(),
    value: '38',
    unit: 'miles',
    description: 'Max Range',
  },
  {
    id: uuidv4(),
    value: '89',
    unit: 'nm',
    description: 'Max Torques',
  },
  {
    id: uuidv4(),
    value: '22%',
    unit: 'slope',
    description: 'Hill Climbing',
  },
  {
    id: uuidv4(),
    value: '2x',
    description: 'Hydralic Disc Brakes',
  },
];

// Product Info List
export const PRODUCT_INFO_LIST = [
  {
    id: uuidv4(),
    value: 'Lightweight aircraft grade aluminium frame',
  },
  {
    id: uuidv4(),
    value: 'Car grade lithium battery',
  },
  {
    id: uuidv4(),
    value: 'Self-balanced',
  },
  {
    id: uuidv4(),
    value: 'Plug n play',
  },
  {
    id: uuidv4(),
    value: 'Quick release adapter',
  },
  {
    id: uuidv4(),
    value: 'RFID key card',
  },
];

// Testimonials List
export const TESTIMONIALS_LIST = [
  {
    id: uuidv4(),
    rating: 5,
    description:
      'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.',
    profile: {
      fullName: 'Serhiy Hipskyy',
      position: 'CEO Universal',
      avatarUrl: SerhiyHipskyy,
    },
  },
  {
    id: uuidv4(),
    rating: 4,
    description:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    profile: {
      fullName: 'Justus Menke',
      position: 'CEO Eronaman',
      avatarUrl: JustusMenke,
    },
  },
  {
    id: uuidv4(),
    rating: 3,
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    profile: {
      fullName: 'Britain Eriksen',
      position: 'CEO Universal',
      avatarUrl: BritainEriksen,
    },
  },
];

// Product Color List
export const PRODUCT_COLORS_LIST = [
  {
    id: uuidv4(),
    label: '01',
    image: ProductBlue,
  },
  {
    id: uuidv4(),
    label: '02',
    image: ProductGreen,
  },
  {
    id: uuidv4(),
    label: '03',
    image: ProductRed,
  },
  {
    id: uuidv4(),
    label: '04',
    image: ProductBlack,
  },
];

// Accessories List
export const ACCESSORIES_LIST = [
  {
    id: uuidv4(),
    value: 'Material : Aluminium alloy',
  },
  {
    id: uuidv4(),
    value: 'Color : Black',
  },
  {
    id: uuidv4(),
    value: 'Capacity : 45lbs',
  },
  {
    id: uuidv4(),
    value: 'Ease : Steady & adjustable',
  },
];

// About List
export const ABOUT_LIST = [
  { id: uuidv4(), label: 'Company', href: '/company' },
  { id: uuidv4(), label: 'Teams', href: '/teams' },
  { id: uuidv4(), label: 'Profile', href: '/profile' },
  { id: uuidv4(), label: 'Careers', href: '/careers' },
];

// Resources List
export const RESOURCES_LIST = [
  { id: uuidv4(), label: 'Contact', href: '/contact' },
  { id: uuidv4(), label: 'Application', href: '/application' },
  { id: uuidv4(), label: 'FQA Features', href: '/features' },
];

// Legals List
export const LEGALS_LIST = [
  { id: uuidv4(), label: 'Copyright Privacy', href: '/copyright-privacy' },
  { id: uuidv4(), label: 'Policy Disclaimer', href: '/policy-disclaimer' },
  { id: uuidv4(), label: 'Terms', href: '/terms' },
];
