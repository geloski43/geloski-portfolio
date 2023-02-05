import React from 'react';
import Projects from './screen/Projects';
import TechStack from './screen/TechStack';
import { Route, Switch, Link } from 'wouter';
import AppNavigation from './components/navigation/AppNavigation';
import { MobileAppNavigation } from './components/navigation/MobileAppNavigation';
import About from './screen/About';
import '@fortawesome/fontawesome-free/js/all.js';
import { useMediaQuery } from '@chakra-ui/react';
import FooterLinks from './components/FooterLinks';

const App = () => {
  const [isMoreThan1400] = useMediaQuery('(min-width: 1200px)');

  return (
    <>
      {isMoreThan1400 ? <AppNavigation /> : <MobileAppNavigation />}
      <Switch>
        <Route path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/stack" component={TechStack} />
      </Switch>
    </>
  );
};

export default App;
