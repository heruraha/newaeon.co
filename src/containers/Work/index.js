import React, { useEffect } from 'react';
import { CTX } from 'store';
import Title from 'components/Title/Title';
import Header from 'components/Header/Header';
import ProjectItem from 'components/ProjectItem/ProjectItem';

import verisImg from 'assets/img/ph-veris.jpg'
import plgImg from 'assets/img/ph-pledgeling.jpg'
import noewImg from 'assets/img/ph-noew.jpg'
import pifImg from 'assets/img/ph-pif.jpg'

const About = (props) => {

    document.title = `Services - newaeon.co`;
    document.documentElement.classList.remove('no')
    const [appState, dispatch] = React.useContext(CTX);
    useEffect( () => {  dispatch({type: 'UPDATE_ACTIVE_SCREEN', payload: 'work'}) }, [appState.activeScreen]);

    const verisLink = () => props.history.push('/work/veris')
    const pledgeLink = () => props.history.push('/work/pledgeling')
    const noewLink = () => props.history.push('/work/noew')
    const pifLink = () => props.history.push('/work/pif')

    return (
    <>
    <Header props={props} />
    <div className="container align-items-start justify-content-center flex-column">
      <div className="d-flex flex-column align-items-start justify-content-start mt-6 mb-3">
        <Title bgText="Work" title="Portfolio" />
      </div>  
    </div>
    <div className="d-flex flex-row flex-wrap" style={{transition: '.3s all'}}>
        <ProjectItem
          title="Veris Global - 2019"
          subtitle="UI/UX Design, Design Systems, Frontend"
          bgImg={verisImg}
          bgColor={'#24314d'}
          alt={true}
          link={verisLink}
        />
        <ProjectItem
          title="NOEW - 2016"
          subtitle="UI/UX Design, Frontend, Branding"
          bgImg={noewImg}
          bgColor={'#2ed7ba'}
          link={noewLink}
        />
        <ProjectItem
          title="Pif - 2017"
          subtitle="React Native Development, Design"
          bgImg={pifImg}
          bgColor={'#207bea'}
          link={pifLink}
        />
        <ProjectItem
          title="Pledgeling - 2014"
          subtitle="UI/UX Design & Frontend"
          bgImg={plgImg}
          bgColor={'#7c3e96'}
          link={pledgeLink}
          alt={true}
        />
    </div>


    </>
    );

}


export default About;
