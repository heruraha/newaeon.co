import React from 'react';
import { Link } from "react-router-dom";
import { CTX } from 'store';
import Logo from 'assets/img/logo.svg'

import './Sidenav.scss';

const SideNav = () => {
  const [appState, dispatch] = React.useContext(CTX)
  const handleClick = () =>   {
    dispatch({type: 'TOGGLE_SIDENAV', payload: !appState.navOpen});
  }

  return (
    <div className={'sidenav ' + (appState.navOpen ? 'show' : 'hide')}>
      <div className="wrap">
        <img src={Logo} alt="New Aeon Creative" className="logo-nav" />
        <ul>
          <li className="link" onClick={handleClick}>
            <Link to="/">Home</Link>
          </li>
          <li className="link" onClick={handleClick}>
            <Link to="/work">Work</Link>
          </li>
          <li className="link" onClick={handleClick}>
            <Link to="/services">Services</Link>
          </li>
          <li className="link" onClick={handleClick}>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="social-links">
          <div className="d-flex flex-row icons">
            <a href="https://linkedin.com/in/heruraha" className="linkedin" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="33.007" height="33" viewBox="0 0 33.007 33">
                <path d="M-7.049,4.125V-17.907h-6.843V4.125Zm-3.425-25.037a4,4,0,0,0,3.963-4,3.964,3.964,0,0,0-3.963-3.963,3.964,3.964,0,0,0-3.963,3.963A4,4,0,0,0-10.475-20.912ZM18.563,4.125h.007v-12.1c0-5.922-1.274-10.482-8.2-10.482A7.19,7.19,0,0,0,3.9-14.9H3.8v-3.005H-2.762V4.125H4.073V-6.784c0-2.873.545-5.65,4.1-5.65,3.506,0,3.558,3.278,3.558,5.834V4.125Z" transform="translate(14.438 28.875)" fill="#6637d0"/>
              </svg>
            </a>
            <a href="mailto:v@newaeon.co" className="mail">
              <svg xmlns="http://www.w3.org/2000/svg" width="32.996" height="33" viewBox="0 0 32.996 33">
                <path  d="M14.212-28.669-15.662-11.437a1.547,1.547,0,0,0,.142,2.784L-8.669-5.78,9.848-22.1a.386.386,0,0,1,.554.535L-5.124-2.648V2.54A1.546,1.546,0,0,0-2.385,3.558L1.708-1.423,9.739,1.94A1.551,1.551,0,0,0,11.866.768l4.641-27.838A1.547,1.547,0,0,0,14.212-28.669Z" transform="translate(16.467 28.877)" fill="#6637d0"/>
              </svg>
            </a>
          </div>
          <div className="d-flex flex-row info">
            <small>Designed, Developed, &amp; Deployed on a Friday at 5pm by me</small>
          </div>
        </div>
      </div>

      
      <button className="close-menu" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
          <path d="M2.22-12.375l6.61-6.61,1.363-1.363a.516.516,0,0,0,0-.729L8.735-22.536a.516.516,0,0,0-.729,0L.032-14.563l-7.973-7.974a.516.516,0,0,0-.729,0l-1.459,1.459a.516.516,0,0,0,0,.729l7.974,7.974L-10.129-4.4a.516.516,0,0,0,0,.729l1.459,1.459a.516.516,0,0,0,.729,0L.032-10.187l6.61,6.61L8.006-2.214a.516.516,0,0,0,.729,0l1.459-1.459a.516.516,0,0,0,0-.729Z" transform="translate(10.28 22.687)" fill="#fff"/>
        </svg>
      </button>


    </div>
  )
}

export default SideNav;
