import React, { useEffect } from 'react';
import { CTX } from 'store';
import ParallaxHeader from 'components/ParallaxHeader/ParallaxHeader';
import Carousel from 'components/Carousel/Carousel';
import Title from 'components/Title/Title';

import v1 from 'assets/img/p-pledgeling1.png';
import v2 from 'assets/img/p-pledgeling2.jpg';
import e1 from 'assets/img/e-plg1.jpg';
import e2 from 'assets/img/e-plg2.jpg';
import e3 from 'assets/img/e-plg3.jpg';
import e4 from 'assets/img/e-plg4.jpg';


const Pledgeling = (props) => {

    document.title = `Pledgeling - Portfolio - newaeon.co`;
    document.documentElement.classList.remove('no')
    
    const [appState, dispatch] = React.useContext(CTX);
    useEffect( 
        () => dispatch({type: 'UPDATE_ACTIVE_SCREEN', payload: 'portfolio'}), [appState.activeScreen]
    );
    useEffect( () => window.scrollTo(0, 0),[] )

    const goToWork = () => props.history.push('/work')
    const themeColor = '#733b8d';

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
            {src: v2, bgY: '50%', bgSize: '100%'},
            {src: v1, bgX: '90%', bgY: '95%', x: 0, bgSize: '35%'}
        ]}/>

    <div className="full-width container-wrap" style={{ backgroundColor: themeColor }}>
        <div className="container align-items-start justify-content-center flex-column">
        <div className="d-flex flex-column align-items-start justify-content-start mt-6 mb-3">
            <Title bgText="Pledgeling" title="Design &amp; Frontend" color={'#151A28'} />
            <div className="row mt-3">
                <div className="col-sm-9">
                    <p className="headline">From 2014-2015, I worked with (then startup) Pledgeling to create their web and iOS apps. During my time at Zehner, I was responsible for the UI/UX design and development of these apps.</p>
                    <div className="d-flex flex-row">
                        <a href="https://pledgeling.com" target="_blank" nofollow noindex className="btn btn-white btn-port">Web App
                            <svg  width="22" height="19.556" viewBox="0 0 22 19.556">
                                <path d="M-11.095-14.559l.216.216a.458.458,0,0,0,.648,0L2.112-26.685l.027.027-.013,3.436a.458.458,0,0,0,.458.458h.382a.458.458,0,0,0,.458-.458l.013-5.194a.458.458,0,0,0-.458-.458l-5.194.013a.458.458,0,0,0-.458.458v.382a.458.458,0,0,0,.458.458l3.436-.013.027.027L-11.095-15.207A.458.458,0,0,0-11.095-14.559ZM-2.234-20.5l-.306.306a.526.526,0,0,0-.134.324v8.721a.611.611,0,0,1-.611.611H-16.729a.611.611,0,0,1-.611-.611V-24.6a.611.611,0,0,1,.611-.611H-3.744a.458.458,0,0,0,.324-.134l.306-.306a.458.458,0,0,0-.324-.782H-16.729A1.833,1.833,0,0,0-18.562-24.6v13.444a1.833,1.833,0,0,0,1.833,1.833H-3.285a1.833,1.833,0,0,0,1.833-1.833v-9.026A.458.458,0,0,0-2.234-20.5Z" transform="translate(18.563 28.875)" fill="#fff"/>
                            </svg>
                        </a>
                        <a href="https://apps.apple.com/us/app/pledgeling/id971374720" target="_blank" nofollow noindex className="btn btn-white btn-port">App Store
                        <svg  width="22" height="19.556" viewBox="0 0 22 19.556">
                            <path d="M-11.095-14.559l.216.216a.458.458,0,0,0,.648,0L2.112-26.685l.027.027-.013,3.436a.458.458,0,0,0,.458.458h.382a.458.458,0,0,0,.458-.458l.013-5.194a.458.458,0,0,0-.458-.458l-5.194.013a.458.458,0,0,0-.458.458v.382a.458.458,0,0,0,.458.458l3.436-.013.027.027L-11.095-15.207A.458.458,0,0,0-11.095-14.559ZM-2.234-20.5l-.306.306a.526.526,0,0,0-.134.324v8.721a.611.611,0,0,1-.611.611H-16.729a.611.611,0,0,1-.611-.611V-24.6a.611.611,0,0,1,.611-.611H-3.744a.458.458,0,0,0,.324-.134l.306-.306a.458.458,0,0,0-.324-.782H-16.729A1.833,1.833,0,0,0-18.562-24.6v13.444a1.833,1.833,0,0,0,1.833,1.833H-3.285a1.833,1.833,0,0,0,1.833-1.833v-9.026A.458.458,0,0,0-2.234-20.5Z" transform="translate(18.563 28.875)" fill="#fff"/>
                        </svg>
                        </a>
                    </div>

                </div>
                <div className="col-sm-3">
                    <h4>Tools Used</h4>
                    <p className="headline dim">Sketch <br/> Invision <br/> Angular 1 <br/> Django </p>
                </div>
            </div>

            <h4 className="mt-5">Web App</h4>
            <Carousel img={[e1,e2]} color={themeColor} />

            <h4 className="mt-5">iOS App</h4>
            <Carousel img={[e4,e3]} color={themeColor} />

        </div>  
        </div>
    </div>
    </>
    )
}

export default Pledgeling;
