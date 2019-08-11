import React from 'react';
import { NavLink } from "react-router-dom";
import { CTX } from 'store';

import './Sidenav.scss';

const SideNav = () => {
  const [appState, dispatch] = React.useContext(CTX)
  return (
    <div className={'sidenav ' + (appState.navOpen ? 'show' : 'hide')}>
      <ul>
        <li className="link">
        <NavLink 
          activeClassName="active"
          to="/">
          Home
        </NavLink>
        </li>
        <li className="link">
        <NavLink 
          activeClassName="active"
          to="/send/how">
          Send
        </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SideNav;
