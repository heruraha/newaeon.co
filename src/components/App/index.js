import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from 'routes';
import Store from 'store';

import Header from 'components/Header/Header';
import Sidenav from 'components/Sidenav/Sidenav';
import NotFound from 'containers/NotFound';

import 'assets/scss/index.scss';

const App = () => {
  document.title = `Send App`;
  return (
    <Store>
      <Router>
        <div className="app-container d-flex">
          <main>
          <Header />
            <Switch>
              {routes.map((route, i) => <Route key={i} path={route.path} component={route.component} exact={route.exact} />)}
              <Route component={NotFound} />
            </Switch>
          </main>
          <Sidenav />        
        </div>

      </Router>
    </Store>
  ); 
}

export default App;
