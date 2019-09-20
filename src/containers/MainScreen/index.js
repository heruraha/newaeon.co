import React, { useEffect } from 'react';
import { CTX } from 'store';
import Title from 'components/Title/Title';
import VideoBackground from 'components/VideoBackground/VideoBackground';
import Header from 'components/Header/Header';

const MainScreen = (props) => {

    document.title = `New Aeon Creative`;
    document.documentElement.classList.add('home')
    document.documentElement.classList.remove('no')
    const [appState, dispatch] = React.useContext(CTX);
    const gotoWork = () => props.history.push('/work');
    useEffect( () => {  dispatch({type: 'UPDATE_ACTIVE_SCREEN', payload: 'home'}) }, [appState.activeScreen]);

    return (
    <>
    <Header props={props} />
    <div className="container main-body align-items-center justify-content-center flex-column">
      <div className="col-sm-8 col-offset-2 d-flex flex-column align-items-center justify-content-center text-center z-index-3">
        <Title bgText="&" title="Senior Product Designer" subtitle="Front-end Developer" />
        <p className="headline mt-3">
        Based in New Orleans, I'm a hybrid designer developer that creates sleek user experiences that are intuitive, accessible, and don’t go over budget.
        </p>
        <button className="btn btn-white mt-4" onClick={gotoWork}>
          View Work
        </button>
      </div>  
    </div>
    <VideoBackground />
    </>
    );

}


export default MainScreen;
