import React, { useEffect, useState } from 'react';
import { CTX } from 'store';

import v1 from 'assets/img/p-veris1.png';
import v2 from 'assets/img/p-veris2.png';
import v3 from 'assets/img/p-veris3.png';
import e1 from 'assets/img/e-veris1@2x.jpg';
import ParallaxHeader from 'components/ParallaxHeader/ParallaxHeader';
import Title from 'components/Title/Title';

const Veris = (props) => {

    document.title = `Veris Global - Portfolio - newaeon.co`;
    document.documentElement.classList.remove('no')
    
    const [appState, dispatch] = React.useContext(CTX);
    
    useEffect( () => {  dispatch({type: 'UPDATE_ACTIVE_SCREEN', payload: 'portfolio'}) }, [appState.activeScreen]);

    const goToWork = () => props.history.push('/work')
    const themeColor = '#212D48';

    return (
    <>
    <nav className="nav fixed-top">
        <div className="container">
            <button className="btn-transparent" onClick={goToWork}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28.875" height="28.752" viewBox="0 0 28.875 28.752">
                    <path id="Path_81" data-name="Path 81" d="M.486,1.775l.456-.456a.774.774,0,0,0,0-1.094l-11.5-11.5H13.664a.773.773,0,0,0,.773-.773V-12.7a.773.773,0,0,0-.773-.773H-10.563l11.5-11.5a.774.774,0,0,0,0-1.094l-.456-.456a.773.773,0,0,0-1.094,0l-13.6,13.6a.774.774,0,0,0,0,1.094l13.6,13.6A.773.773,0,0,0,.486,1.775Z" transform="translate(14.438 26.751)" fill="#fff"/>
                </svg>
            </button>
        </div>
    </nav>

    <ParallaxHeader
        bgColor={themeColor}
        img={[
            {src: v3, bgY: '50%', bgSize: '100%'},
            {src: v2, bgX: '75%', bgY: '0%',  bgSize: '35%'},
            {src: v1, bgX: '0%', bgY: '95%', x: 0, bgSize: '35%'},
        ]}
    />

<div className="full-width container-wrap" style={{ backgroundColor: themeColor }}>

    <div className="container align-items-start justify-content-center flex-column">
      <div className="d-flex flex-column align-items-start justify-content-start mt-6 mb-3">
        <Title bgText="Veris" title="Design & Frontend" color={'#151A28'} />
        <p className="headline mt-3">In 2019, I was contracted by Veris Global to create a cohesive design system for several of their products. This included creating a style guide, design system, and implementation in HTML/CSS/Javascript/Angular 6.</p>

        <img src={e1} alt="" className="mt-3 mb-5 full-width"/>
      </div>  
    </div>
</div>
    </>
    )
}

export default Veris;
