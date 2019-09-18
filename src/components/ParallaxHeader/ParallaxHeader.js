import React, { useEffect, useState } from 'react';
import './ParallaxHeader.scss'
 
const ParallaxHeader = (props) => {

    const [position, setPosition] = useState(1);

    useEffect(() => {
      const setFromEvent = y => setPosition(y);
        window.addEventListener('scroll', () => {
            setFromEvent(window.pageYOffset)
        }, false)
    }, [setPosition]);

    return (
        <div className="parallax-header-wrap" style={{ backgroundColor: props.bgColor ?`${props.bgColor}` : '#333333'}}>
            {props.img ? 
            props.img.map( (e, i) => 
                <div 
                    key={i}
                    className="parallax-header" 
                    style={{
                        backgroundPositionX: e.bgX ? `${e.bgX}` : 'inherit',
                        backgroundPositionY: e.bgY ? `${e.bgY}` : 'inherit',
                        backgroundImage: `url(${e.src}`,
                        backgroundSize: e.bgSize ? e.bgSize : '50%',
                        transform: 
                            e.tX ?  
                            `translate(${e.tX}%, -${position * i/ props.img.length}px)` : 
                            `translateY(-${position * i/ props.img.length}px)`,
                    }}></div>
            )
            :
            null }
        </div>
    )
}

export default ParallaxHeader;