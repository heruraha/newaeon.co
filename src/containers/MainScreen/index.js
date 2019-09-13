import React from 'react';
import { CTX } from 'store';
import Title from 'components/Title/Title';
import VideoBackground from 'components/VideoBackground/VideoBackground';

const MainScreen = (props) => {

    document.title = `New Aeon Creative`;

    const [appState, dispatch] = React.useContext(CTX);

    const gotoWork = () => {
      props.history.push('/')
    }

    return (
    <>
    <div className="container main-body align-items-center justify-content-center flex-column">
      <div className="col-sm-8 col-offset-2 d-flex flex-column align-items-center justify-content-center text-center">
        <Title bgText="&" title="Senior Product Designer" subtitle="Front-end Developer" />
        <p class="headline mt-3">
        Based in New Orleans, I’ve been creating sleek user experiences that are intuitive, accessible, and don’t go over budget. I clozedis store qunem beranet.
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
