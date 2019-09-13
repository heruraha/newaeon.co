import React from 'react';
import { CTX } from 'store';
import './Header.scss';
import Logo from 'assets/img/logo.svg'

const Header = (props) => {
  const [appState, dispatch] = React.useContext(CTX);

  const handleClick = () =>   {
    dispatch({type: 'TOGGLE_SIDENAV', payload: !appState.navOpen});
  }

  return (
    <nav className="top-nav">
        <div className="container">
            <img src={Logo} className="logo-header" alt=""/>
            <button className="menu-toggler" type="button" onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28.875" height="22.945" viewBox="0 0 28.875 22.945">
                <path d="M14.051-21.527a.387.387,0,0,0,.387-.387v-1.547a.387.387,0,0,0-.387-.387h-28.1a.387.387,0,0,0-.387.387v1.547a.387.387,0,0,0,.387.387Zm0,10.312a.387.387,0,0,0,.387-.387v-1.547a.387.387,0,0,0-.387-.387h-28.1a.387.387,0,0,0-.387.387V-11.6a.387.387,0,0,0,.387.387Zm0,10.312a.387.387,0,0,0,.387-.387V-2.836a.387.387,0,0,0-.387-.387h-28.1a.387.387,0,0,0-.387.387v1.547a.387.387,0,0,0,.387.387Z" transform="translate(14.438 23.848)" fill="#fff"/>
              </svg>
            </button>
        </div>
    </nav>
  )
}

export default Header;
