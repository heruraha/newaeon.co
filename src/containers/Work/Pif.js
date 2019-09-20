import React, { useEffect } from 'react';
import { CTX } from 'store';
import ParallaxHeader from 'components/ParallaxHeader/ParallaxHeader';
import Carousel from 'components/Carousel/Carousel';
import Title from 'components/Title/Title';

import v1 from 'assets/img/p-pif1.jpg';
import v2 from 'assets/img/p-pif2.png';
import v3 from 'assets/img/p-pif3.png';
import v4 from 'assets/img/p-pif4.png';
import e1 from 'assets/img/e-pif1.jpg';
import e2 from 'assets/img/e-pif2.jpg';
import e3 from 'assets/img/e-pif3.jpg';
import e4 from 'assets/img/e-pif4.jpg';
import e5 from 'assets/img/e-pif5.jpg';
import e6 from 'assets/img/e-pif6.jpg';
import e7 from 'assets/img/e-pif7.jpg';
import e8 from 'assets/img/e-pif8.jpg';
import e9 from 'assets/img/e-pif9.jpg';


const Pif = (props) => {

    document.title = `PIF - Portfolio - newaeon.co`;
    document.documentElement.classList.remove('no')
    document.documentElement.classList.remove('home')

    const [appState, dispatch] = React.useContext(CTX);
    useEffect( 
        () => dispatch({type: 'UPDATE_ACTIVE_SCREEN', payload: 'portfolio'}), [appState.activeScreen]
    );
    useEffect( () => window.scrollTo(0, 0),[] )

    const goToWork = () => props.history.push('/work')
    const themeColor = '#207bea';

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
        bgColor={'#FFFFFF'}
        tint={false}
        img={[
            {src: v1, bgX: '50%', bgY: '100%', bgSize: '70%'},
            {src: v4, bgX: '65%', bgY: '0%', x: 0, bgSize: '35%'},
            {src: v2, bgX: '55%', bgY: '0%', x: 0, bgSize: '25%'},
            {src: v3, bgX: '35%', bgY: '50%', x: 0, bgSize: '35%'},
        ]}/>

    <div className="full-width container-wrap" style={{ backgroundColor: themeColor }}>
        <div className="container align-items-start justify-content-center flex-column">
        <div className="d-flex flex-column align-items-start justify-content-start mt-6 mb-3">
            <Title bgText="Pif" title="React Native Development" color={'#ffffff'} />
            <div className="row mt-3 project-description">
                <div className="col-sm-9">
                    <p className="headline">From 2017-2018, I worked on the development of Pif, a marketplace that enables businesses to be charitible through digital currency transactions fueled by p2p payments. This project was on a tight deadline and I found myself often designing in code. I used React Native to develop for both Android &amp; iOS.</p>
                    <div className="d-flex flex-row">
                        <a href="http://pif.io" target="_blank" nofollow noindex className="btn btn-white btn-port">Visit Site
                            <svg  width="22" height="19.556" viewBox="0 0 22 19.556">
                                <path d="M-11.095-14.559l.216.216a.458.458,0,0,0,.648,0L2.112-26.685l.027.027-.013,3.436a.458.458,0,0,0,.458.458h.382a.458.458,0,0,0,.458-.458l.013-5.194a.458.458,0,0,0-.458-.458l-5.194.013a.458.458,0,0,0-.458.458v.382a.458.458,0,0,0,.458.458l3.436-.013.027.027L-11.095-15.207A.458.458,0,0,0-11.095-14.559ZM-2.234-20.5l-.306.306a.526.526,0,0,0-.134.324v8.721a.611.611,0,0,1-.611.611H-16.729a.611.611,0,0,1-.611-.611V-24.6a.611.611,0,0,1,.611-.611H-3.744a.458.458,0,0,0,.324-.134l.306-.306a.458.458,0,0,0-.324-.782H-16.729A1.833,1.833,0,0,0-18.562-24.6v13.444a1.833,1.833,0,0,0,1.833,1.833H-3.285a1.833,1.833,0,0,0,1.833-1.833v-9.026A.458.458,0,0,0-2.234-20.5Z" transform="translate(18.563 28.875)" fill="#fff"/>
                            </svg>
                        </a>
                    </div>

                </div>
                <div className="col-sm-3">
                    <h4>Tools Used</h4>
                    <p className="headline dim">React Native <br/> Javascript <br/> Sketch</p>
                </div>
            </div>

            <div className="row full-width">
                <div className="col-sm-6">
                    <h4 className="mt-5">iOS App</h4>
                    <Carousel img={[e1,e2,e3,e4]} color={themeColor} />
                </div>
                <div className="col-sm-6">
                    <h4 className="mt-5">Android App</h4>
                    <Carousel img={[e5,e6,e7,e8,e9]} color={themeColor} /></div>
                </div>
        </div>  
        </div>
    </div>
    </>
    )
}

export default Pif;
