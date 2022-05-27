import React from 'react';
import './Footer.css';
import compLogo from '../../Logo/Logo5/vector/default-monochrome.svg';
import homeicon from '../../Logo/icons/SVG/home.svg';
import searchicon from '../../Logo/icons/SVG/magnifying-glass.svg';
import starredicon from '../../Logo/icons/SVG/star.svg';
import carticon from '../../Logo/icons/SVG/shopping-cart.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={compLogo} alt='companyLogo' className='footer-logo' />
      <div className="footer-nav">
        <a className="footer-nav-a" href="/"><img alt="homelogo" src={homeicon} className='footer-nav-a-img' />Home</a> 
        <a className="footer-nav-a" href="/category/"><img alt="homelogo" src={searchicon} className='footer-nav-a-img' />Search</a>
        <a className="footer-nav-a" href="/watchlist/"><img alt="homelogo" src={starredicon} className='footer-nav-a-img' />Starred</a>
        <a className="footer-nav-a" href="/cart/"><img alt="homelogo" src={carticon} className='footer-nav-a-img' />Cart</a>
      </div>
      <p className='footer-p'>&copy; Made with &hearts; 2022 Everybuddy's Shop.com - All Rights Reserved.Last Updated : 05/2022</p>
    </footer>
  )
}

export default Footer