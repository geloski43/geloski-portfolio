import * as React from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import { MobileMenuToggle } from './MobileMenuToggle';
import { MobileNavRoutesList } from './MobileNavRoutesList';
import { Context as AppContext } from '../../context/appContext';

import './styles.css';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileAppNavigation = () => {
  const appContext = React.useContext(AppContext);
  const { showSideMenu } = appContext.state;
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={showSideMenu ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <MobileNavRoutesList />
      <MobileMenuToggle
        toggle={() => appContext.setShowSideMenu(!showSideMenu)}
      />
    </motion.nav>
  );
};
