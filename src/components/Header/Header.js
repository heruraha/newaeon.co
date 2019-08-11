import React from 'react';
import { CTX } from 'store';
import './Header.scss';

const Header = (props) => {
  const [appState, dispatch] = React.useContext(CTX);

  const handleClick = () =>   {
    dispatch({type: 'TOGGLE_SIDENAV', payload: !appState.navOpen});
  }

  return (
    <nav className="navbar sticky-top navbar-light bg-light navbar-expand-lg mb-3">
        <div className="container">
            <a className="navbar-brand">{appState.title}</a>
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" onClick={handleClick}>Toggle SideNav</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header;
