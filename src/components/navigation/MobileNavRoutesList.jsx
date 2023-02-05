import * as React from 'react';
import { motion } from 'framer-motion';
import { MobileMenuItem } from './MobileMenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemRoutes = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Tech Stack', href: '/stack' },
];

export const MobileNavRoutesList = () => (
  <motion.ul variants={variants}>
    {itemRoutes.map((v, i) => (
      <MobileMenuItem i={i} href={v.href} label={v.label} key={i} />
    ))}
  </motion.ul>
);
