import React from "react";
import './styles.css'

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <div>
          <svg
          className = 'elipse'
            width="1000"
            height="1000"
            viewBox="0 0 1500 1500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="742.346"
              cy="758.16"
              rx="477.288"
              ry="667.082"
              transform="rotate(-45.2744 742.346 758.16)"
              fill="#6B71D5"
            />
          </svg>
        <div className="primHeading">
            <h1>A new era <br/> of shopping</h1>
            <div className="subtitle">The fastest-growing shopping application in Europe</div>
        </div>
        <div className="phoneBlock">
            <div className="phoneWrapper phone1">
                    <picture>
                        <img src="https://resources.joomcdn.net/about-page/langs/en/iphones/iphone1-232x457.png" alt=""/>
                    </picture>
            </div>
            <div className="phoneWrapper phone2">
                    <picture>
                        <img src="https://resources.joomcdn.net/about-page/langs/en/iphones/iphone1-232x457.png" alt=""/>
                    </picture>
            </div>
            <div className="phoneWrapper phone3">
                    <picture>
                        <img src="https://resources.joomcdn.net/about-page/langs/en/iphones/iphone1-232x457.png" alt=""/>
                    </picture>
            </div>
            <div className="phoneWrapper phone4">
                    <picture>
                        <img src="https://resources.joomcdn.net/about-page/langs/en/iphones/iphone1-232x457.png" alt=""/>
                    </picture>
            </div>
        </div>
        <div className="usersAmount">
            <strong>Over 250,000,000</strong>
            <br/>
            users on iOS, Web, Android
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
