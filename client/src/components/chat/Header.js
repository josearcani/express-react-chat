import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Dark } from '../../assets/dark-theme.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  
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
        <div className="header__setting-icon">
          <Settings />
        </div>
        <figure
          className="header__user-img"
          onClick={ () => setToggle(!toggle) }
        >
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
            alt="user icon"
          />
          {
            toggle && (
              <div className="header__user-dropdown">
                <button className="btn">
                  Profile
                </button>
                <button className="btn btn-primary">
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
