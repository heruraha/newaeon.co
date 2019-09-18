import React, { useEffect } from 'react';
import { CTX } from 'store';
import Title from 'components/Title/Title';
import Header from 'components/Header/Header';
import Triangle from 'assets/img/triangle.svg'

const About = (props) => {

    document.title = `Services - newaeon.co`;
    document.documentElement.classList.add('no')
    const [appState, dispatch] = React.useContext(CTX);
    const gotoWork = () => props.history.push('/')
    useEffect( () => {  dispatch({type: 'UPDATE_ACTIVE_SCREEN', payload: 'services'}) }, [appState.activeScreen]);

    return (
    <>
    <Header props={props} />
    <div className="container main-body align-items-start justify-content-center flex-column">
      <div className="d-flex flex-column align-items-start justify-content-center">

        <Title bgText="Services" title="Design & Development" />

        <div className="services-wrap row full-width mt-5 ">
          <div className="col-md-4">
            <h4>Design Systems</h4>
            <p className="headline mt-3">
            Defining your brand into a single cohesive system of components from start to finish, I create design systems.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Product &amp; UX Design</h4>
            <p className="headline mt-3">
              I take delight in turning rough concepts into stunning prototypes for web &amp; mobile apps.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Front End Development</h4>
            <p className="headline mt-3">
              I implement prototypes into functional &amp; production-ready code. I specialize in React, &amp; React Native.
            </p>
          </div>
        </div>
        
      </div>  
    </div>
    <div className="bg-triangle">
      <svg src={Triangle} />
    </div>

    </>
    );

}


export default About;
