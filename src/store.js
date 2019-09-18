import React from 'react';
import reducer from 'reducer';

const CTX = React.createContext();

const initialState = {
    navOpen: false,
    title: 'newaeon.co',
    activeScreen: null,
}

const Store = (props) => {
    const stateHook = React.useReducer(reducer,initialState)
    return (
        <CTX.Provider value={stateHook}>
            {props.children}
        </CTX.Provider>
    )
}

export { CTX }
export default Store;