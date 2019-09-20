import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CTX } from 'store';

import NotFound from 'containers/NotFound';
import MainScreen from 'containers/MainScreen';
import About from 'containers/About';
import Services from 'containers/Services';
import Work from 'containers/Work';
import Veris from 'containers/Work/Veris';
import Pledgeling from 'containers/Work/Pledgeling';
import Noew from 'containers/Work/Noew';
import Pif from 'containers/Work/Pif';
import Sidenav from 'components/Sidenav/Sidenav';

const routikner = [
  {
    path: "/",
    component: MainScreen,
    exact: true
  },
  {
    path: "/about",
    component: About,
    exact: true
  },
  {
    path: "/services",
    component: Services,
    exact: true
  },
  {
    path: "/work",
    component: Work,
    exact: true
  },
  {
    path: "/work/veris",
    component: Veris,
    exact: true
  },
  {
    path: "/work/pledgeling",
    component: Pledgeling,
    exact: true
  },
  {
    path: "/work/noew",
    component: Noew,
    exact: true
  },
  {
    path: "/work/pif",
    component: Pif,
    exact: true
  },
];

const Routes = () => {
  const [appState, dispatch] = React.useContext(CTX);

  return (
    <Router>
    <div className={appState.activeScreen ? `app-container d-flex ${appState.activeScreen}` : 'app-container d-flex'}>
        <Switch>
          {routikner.map((route, i) => <Route key={i} path={route.path} component={route.component} exact={route.exact} />)}
          <Route component={NotFound} />
        </Switch>
    </div>
    <Sidenav />    
  </Router>
  )
}

export default Routes;
