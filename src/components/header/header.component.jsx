import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/crown.svg';
import './header.styles.css';
const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} alt="" className="logo" />
        {/* <Logo className="logo" /> */}
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>

        <Link className="option" to="/">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
