import React from 'react'
import mp4 from 'assets/img/goat.mp4'
import webm from 'assets/img/goat.webm'
import './VideoBackground.scss'

const VideoBackground = (props) => {
    return (
        <>
            <svg id="video-bg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920px" height="1080px" preserveAspectRatio="xMidYMid slice">
                <g id="purple-wrap" x="0" y="0" width="1920" height="1080">
                    <g id="purple-triangle" transform="translate(1920 1080) rotate(180)">
                        <path d="M1246.679,1079.9H.866L623.772,1Z" fill="rgba(102,55,208,0.72)"/>
                    </g>
                </g>
                <defs>
                <mask id="mask" x="0" y="0" width="1920" height="1080">
                    <path id="mask-triangle" d="M1399,3772.4H775.281l623.539-1080h.18v1080Zm-623.719,0H-521v-1080H151.741l623.54,1080h0Z" transform="translate(521 -2692)"/>
                </mask>
                </defs>
                <rect x="0" y="0" width="1920" height="1080"/>
            </svg>

            <video id="bg-home" autoPlay="autoplay" muted="muted" preload="auto" loop="loop">
                <source src={webm} type="video/webm" />
                <source src={mp4} type="video/mp4" />
            </video> 
        </>
    )
}

export default VideoBackground;