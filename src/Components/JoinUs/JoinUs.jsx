import React from 'react'
import './styles.css'

const JoinUs = () => {
    return (
        <div className = "JoinUs">
            <svg className = "elipse" viewBox="0 0 1500 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="742.346" cy="758.16" rx="477.288" ry="667.082" transform="rotate(-45.2744 742.346 758.16)" fill="#6B71D5"/>
            </svg>
            <div className="Joincontent">
                <div className="title">How to join our team</div>
                <div className="desc">Explore open vacancies. We're always eager to recruit qualified professionals.</div>
                <div className="buttonContainer">
                    <a href="https://joom.potok.io">Careers</a>
                </div>
                <picture>
                    <img className="picMain" src="https://resources.joomcdn.net/about-page/join/main-678x439.jpg" alt=""/>
                </picture>
                <img className="sidePic" src="https://resources.joomcdn.net/about-page/join/aside-450x502.jpg" alt=""/>
            </div>
        </div>
    )
}

export default JoinUs
