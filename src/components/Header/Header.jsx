import { NavLink, useLocation } from 'react-router-dom';
import UserInfo from 'components/UserInfo/UserInfo';

import s from './Header.module.scss';
import Logo from 'components/Shared/Logo';

const Header = () => {
  const location = useLocation();
  const getClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  return (
    <header className={s.header}>
      <div className={s.containerTop}>
        <Logo />
        <UserInfo />
      </div>
      <div className={s.containerBottom}>
        <NavLink
          className={getClassName({ isActive: location.pathname === '/' })}
          to="/"
        >
          Ресторани
        </NavLink>
        <NavLink
          className={getClassName({
            isActive: location.pathname === '/tweets',
          })}
          to="/tweets"
        >
          Супермаркети
        </NavLink>
        <NavLink
          className={getClassName({
            isActive: location.pathname === '/tweets',
          })}
          to="/tweets"
        >
          Здоров'я та краса
        </NavLink>
      </div>
    </header>
  );
};

export default Header;