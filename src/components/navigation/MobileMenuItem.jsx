import * as React from 'react';
import { motion } from 'framer-motion';
import { Text, useMediaQuery } from '@chakra-ui/react';
import { Link, Route, useLocation } from 'wouter';
import { Context as AppContext } from '../../context/appContext';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#7700FF', '#4400FF', '#7700FF'];

export const MobileMenuItem = ({ href, label, i }) => {
  const appContext = React.useContext(AppContext);
  const [isLessThan393] = useMediaQuery('(max-width: 393px)');

  const style = {
    border: `2px solid ${colors[i]}`,
    borderRadius: 10,
    paddingInline: 5,
  };

  const [location, setLocation] = useLocation();

  // console.log(location);
  return (
    <motion.li
      style={{ paddingInline: 10 }}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link onClick={() => appContext.setShowSideMenu(false)} href={href}>
        <Text
          margin={isLessThan393 ? '0.977' : '1.5'}
          fontSize={{ base: '22px', sm: '30px', md: '30px', lg: '30px' }}
          color="orange"
          style={location === href ? style : null}
        >
          {label}
        </Text>
      </Link>
    </motion.li>
  );
};
