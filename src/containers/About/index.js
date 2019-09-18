import React, { useEffect } from 'react';
import { CTX } from 'store';
import Title from 'components/Title/Title';
import Header from 'components/Header/Header';

const About = (props) => {

    document.title = `About V - newaeon.co`;
    document.documentElement.classList.add('no')
    const [appState, dispatch] = React.useContext(CTX);
    useEffect( () => {  dispatch({type: 'UPDATE_ACTIVE_SCREEN', payload: 'about'}) }, [appState.activeScreen]);

    return (
    <>
    <Header props={props} />
    <div className="container main-body align-items-start justify-content-center flex-column">
      <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
        <Title bgText="About" title="Hi, I'm V." />
        <p class="headline my-3">
        Building things for the web since 2000, my work weaves together the magick of design, psychology & technology.
        </p>
        <p className="headline my-3">
        I design and develop exceptional websites, web & mobile apps that provide intuitive, pixel-perfect user interfaces.
        </p>
        <p className="headline my-3">
        Currently based in New Orleans, LA.
        </p>
      </div>  
    </div>
    <div className="bg-about"></div>
    </>
    );

}


export default About;
