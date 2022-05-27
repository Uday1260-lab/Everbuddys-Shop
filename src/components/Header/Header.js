import React from "react";
import "./Header.css";
import compLogo from '../../Logo/Logo5/vector/default-monochrome.svg';
import homeicon from '../../Logo/icons/SVG/home.svg';
import searchicon from '../../Logo/icons/SVG/magnifying-glass.svg';
import wishlisticon from '../../Logo/icons/SVG/star.svg';
import carticon from '../../Logo/icons/SVG/shopping-cart.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={compLogo} alt='companyLogo' className="header-logo" />
      <nav className="header-nav">
        <a className="header-nav-a" href="/"><img alt="homelogo" src={homeicon} className='header-nav-a-img' />Home</a> 
        <a className="header-nav-a" href="/category/"><img alt="homelogo" src={searchicon} className='header-nav-a-img' />Search</a>
        <a className="header-nav-a" href="/watchlist/"><img alt="homelogo" src={wishlisticon} className='header-nav-a-img' />Starred</a>
        <a className="header-nav-a" href="/cart/"><img alt="homelogo" src={carticon} className='header-nav-a-img' />Cart</a>
      </nav>
    </header>
  );
};

export default Header;
