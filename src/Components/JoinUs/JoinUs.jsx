import React from 'react'
import './styles.css'

const JoinUs = () => {
    return (
        <div className = "JoinUs">
             <svg
            className = "elipse"
            width="1324"
            height="1342"
            viewBox="0 0 1324 1342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="661.927"
              cy="670.846"
              rx="500"
              ry="450"
              transform="rotate(-127.754 661.927 670.846)"
              fill="#6B71D5"
            />
            <path
              d="M1088.42 307.656C935.505 105.182 457.473 25.4191 244.862 273.674C32.2507 521.929 73.0443 811.604 271.496 1038.26C481.522 1278.14 836.731 1340.2 1062.24 1115.67C1279.02 899.831 1241.33 510.13 1088.42 307.656Z"
              stroke="black"
            />
            <path
              d="M1117.39 281.942C954.707 65.2086 446.127 -20.1712 219.928 245.567C-6.27059 511.305 37.1299 821.379 248.264 1064C471.712 1320.77 849.621 1387.2 1089.55 1146.85C1320.18 915.819 1280.08 498.675 1117.39 281.942Z"
              stroke="black"
            />
            <path
              d="M1062.9 330.367C920.305 141.082 474.544 66.515 276.285 298.599C78.0268 530.682 116.066 801.487 301.121 1013.38C496.969 1237.63 828.199 1295.65 1038.49 1085.74C1240.63 883.967 1205.49 519.652 1062.9 330.367Z"
              stroke="black"
            />
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
