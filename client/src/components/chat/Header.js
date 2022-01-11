import React, { useContext, useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Dark } from '../../assets/dark-theme.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';
import { AuthContext } from '../../auth/AuthContext';
import { logout } from '../../actions/auth';

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { user , dispatch } = useContext(AuthContext);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  }

  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__search-container">
        <input
          type="text"
          placeholder="Search..."
          className="header__search-input input"
        />
      </div>
      <div className="header__user-settings-container">
        <div className="header__setting-icon">
          <Dark />
        </div>
        <div
          className="header__setting-icon"
          onClick={ () => setToggle(!toggle) }
        >
          <Settings />
        </div>
        <figure className="header__user-img">
          <img
            src={ user.img }
            alt={ user.name }
          />
          {
            toggle && (
              <div className="header__user-dropdown">
                <button className="btn">
                  { user.name }
                </button>
                <button
                  className="btn btn-primary"
                  onClick={ handleLogout }
                >
                  Logout
                </button>
              </div>
            )
          }
        </figure>
      </div>
    </header>
  )
}
