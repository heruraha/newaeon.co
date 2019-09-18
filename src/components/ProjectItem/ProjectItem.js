import React from 'react'
import './ProjectItem.scss'

const ProjectItem = (props) => {

    
    return (
    <div className={props.alt ? 'project-item-wrap alt-bg' : 'project-item-wrap'} onClick={props.link ? props.link : console.log('no project link')}>    
        <div className="bg" style={props.bgImg ? {backgroundImage: `url(${props.bgImg})`, backgroundColor: props.bgColor ? props.bgColor : 'transparent' } : null}>
            <div className="project-info">
                <div className="project-details">
                    <h4 className="title">{props.title}</h4>
                    <p className="headline">{props.subtitle}</p>
                    <button className="btn btn-white">View Project</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProjectItem;