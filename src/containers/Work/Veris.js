import React, { useEffect } from 'react';
import { CTX } from 'store';
import ParallaxHeader from 'components/ParallaxHeader/ParallaxHeader';
import Carousel from 'components/Carousel/Carousel';
import Title from 'components/Title/Title';

import v1 from 'assets/img/p-veris1.png';
import v2 from 'assets/img/p-veris2.png';
import v3 from 'assets/img/p-veris3.jpg';
import e1 from 'assets/img/e-veris1.jpg';
import e2 from 'assets/img/e-veris2.jpg';
import e3 from 'assets/img/e-veris3.jpg';
import e4 from 'assets/img/e-veris4.jpg';
import e5 from 'assets/img/e-veris5.jpg';
import e6 from 'assets/img/e-veris6.jpg';
import e7 from 'assets/img/e-veris7.jpg';
import e8 from 'assets/img/e-veris8.png';
import e9 from 'assets/img/e-veris9.png';
import e10 from 'assets/img/e-veris10.jpg';
import e11 from 'assets/img/e-veris11.jpg';
import e12 from 'assets/img/e-veris12.jpg';
import e13 from 'assets/img/e-veris13.jpg';

const Veris = (props) => {

    document.title = `Veris Global - Portfolio - newaeon.co`;
    document.documentElement.classList.remove('no')
    document.documentElement.classList.remove('home')

    const [appState, dispatch] = React.useContext(CTX);
    useEffect( 
        () => dispatch({type: 'UPDATE_ACTIVE_SCREEN', payload: 'portfolio'}), [appState.activeScreen]
    );
    useEffect( () => window.scrollTo(0, 0),[] )

    const goToWork = () => props.history.push('/work')
    const themeColor = '#212D48';

    return (
    <>
    <nav className="nav fixed-top">
        <div className="container">
            <button className="btn-transparent" onClick={goToWork} style={{ backgroundColor: themeColor }}>
                <svg width="28" height="28" viewBox="0 0 28 28">
                    <path 
                        d="M.486,1.775l.456-.456a.774.774,0,0,0,0-1.094l-11.5-11.5H13.664a.773.773,0,0,0,.773-.773V-12.7a.773.773,0,0,0-.773-.773H-10.563l11.5-11.5a.774.774,0,0,0,0-1.094l-.456-.456a.773.773,0,0,0-1.094,0l-13.6,13.6a.774.774,0,0,0,0,1.094l13.6,13.6A.773.773,0,0,0,.486,1.775Z" 
                        transform="translate(14.438 26.751)" 
                        fill="#fff"/>
                </svg>
            </button>
        </div>
    </nav>

    <ParallaxHeader
        bgColor={themeColor}
        img={[
            {src: v3, bgY: '50%', bgSize: '100%'},
            {src: v2, bgX: '75%', bgY: '0%',  bgSize: '35%'},
            {src: v1, bgX: '0%', bgY: '95%', x: 0, bgSize: '35%'}
        ]}/>

    <div className="full-width container-wrap" style={{ backgroundColor: themeColor }}>
        <div className="container align-items-start justify-content-center flex-column">
        <div className="d-flex flex-column align-items-start justify-content-start mt-6 mb-3">
            <Title bgText="Veris" title="Design &amp; Frontend" color={'#151A28'} />
            <div className="row mt-3 project-description">
                <div className="col-sm-9">
                    <p className="headline">During 2018-2019, I contracted for Veris Global to create a cohesive design system for several of their products. This included creating a style guide, design system, and implementation in HTML/CSS/Javascript/Angular 6.</p>
                </div>
                <div className="col-sm-3">
                    <h4>Tools Used</h4>
                    <p className="headline dim">Adobe XD <br/> Angular 6 <br/> Typescript</p>
                </div>
            </div>

            <h4 className="mt-5">Styleguide</h4>
            <Carousel img={[e1,e2,e3,e4]} color={themeColor} />

            <h4 className="mt-5">Web App</h4>
            <Carousel img={[e5,e6,e7,e8, e9]} color={themeColor} />

            <h4 className="mt-5">Android App</h4>
            <Carousel img={[e10,e11,e12,e13]} color={themeColor} />
        </div>  
        </div>
    </div>
    </>
    )
}

export default Veris;
