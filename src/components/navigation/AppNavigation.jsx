import { useLocation, Link } from 'wouter';

const AppNavigation = () => {
  const [location, setLocation] = useLocation();

  return (
    <div className="header">
      <Link href={'/'}>
        <span id="menu-item" className={location === '/' ? 'active' : ''}>
          About
        </span>
      </Link>
      <Link href={'/projects'}>
        <span
          id="menu-item"
          className={location === '/projects' ? 'active' : ''}
        >
          Projects
        </span>
      </Link>
      <Link href={'/stack'}>
        <span id="menu-item" className={location === '/stack' ? 'active' : ''}>
          Tech Stack
        </span>
      </Link>
    </div>
  );
};

export default AppNavigation;
