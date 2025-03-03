import { NavLink } from 'react-router';

const Navigation = () => {
  return (
    <nav>
      <ul className='flex flex-row gap-4'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
