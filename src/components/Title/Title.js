import React from 'react'
import './Title.scss'

const Title = (props) => {

    
    return (
        <div className="header-title">
        { props.bgText ? <span className="big">{props.bgText}</span> : null }
            <h1 className="mt-5">
                {props.title} 
                {props.subtitle? <span>{props.subtitle}</span> : null }
            </h1>
        </div>
    )
}

export default Title;