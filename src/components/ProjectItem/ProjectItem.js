import React from 'react'

const ProjectItem = (props) => {

    
    return (
    <figure className="not-fullscreen background" style={props.bgImg ? props.bgImg : null} >    
        <div className="content-a">
            <div className="content-b">
                <h3 className="ptitle">{props.title}</h3>
                <span className="pdesc">{props.subtitle}</span>
                <button className="btn btn-primary btn-sm">View Project</button>
            </div>
        </div>
    </figure>
    )
}

export default ProjectItem;