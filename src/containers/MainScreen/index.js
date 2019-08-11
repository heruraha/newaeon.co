import React from 'react';
import { CTX } from 'store';

const MainScreen = () => {

    document.title = `React Boiler`;

    const [appState, dispatch] = React.useContext(CTX);

    return (
      <div className="container text-center">
        <h1 className="mt-5">Welcome to {appState.title}</h1>
      </div>
    );

}

export default MainScreen;
