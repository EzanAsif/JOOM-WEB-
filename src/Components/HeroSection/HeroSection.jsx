import React from "react";
import "./styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const HeroSection = () => {

    AOS.init({
        duration : 800,
    })

  return (
    <div className="HeroSection">
      <div>
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

        <div className="primHeading">
          <h1>
            A new era <br /> of shopping
          </h1>
          <div className="subtitle">
            The fastest-growing shopping application in Europe
          </div>
        </div>
        <div className="phoneBlock">
          <div className="phoneWrapper phone1">
            <picture>
              <img
                src="https://resources.joomcdn.net/about-page/langs/en/iphones/iphone1-232x457.png"
                alt=""
                data-aos="slide-down"
                data-aos-once = "true" 
              />
            </picture>
          </div>
          <div className="phoneWrapper phone2">
            <picture>
              <img
                src="https://resources.joomcdn.net/about-page/langs/en/iphones/iphone1-232x457.png"
                alt=""
                data-aos="slide-down"
                data-aos-once = "true" 
              />
            </picture>
          </div>
          <div className="phoneWrapper phone3">
            <picture>
              <img
                src="https://resources.joomcdn.net/about-page/langs/en/iphones/iphone1-232x457.png"
                alt=""
                data-aos="slide-down"
                data-aos-once = "true" 
              />
            </picture>
          </div>
          <div className="phoneWrapper phone4">
            <picture>
              <img
                src="https://resources.joomcdn.net/about-page/langs/en/iphones/iphone1-232x457.png"
                alt=""
                data-aos="slide-up"
                data-aos-once = "true" 
              />
            </picture>
          </div>
        </div>
        <div className="usersAmount">
          <strong>Over 250,000,000</strong>
          <br />
          users on iOS, Web, Android
        </div>
        <ul className="appsBlock">
          <li className="appsItem">
            <a href="https://joom.app.link/sluY1gMHH3?$ios_deeplink_path=&$fallback_url=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fid1117424833">
              <div className="downloadsIcon apple">
                <svg width="25" height="30" class="appleStoreIcon___3Dk9b">
                  <defs>
                    <linearGradient
                      x1="30.434%"
                      y1="28.929%"
                      x2="78.384%"
                      y2="100%"
                      id="apple-store_jsx_svg__a"
                    >
                      <stop stop-color="#F26393" offset="0%"></stop>
                      <stop stop-color="#BF62B4" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M16.57 4.87c.954-1.263 1.678-3.048 1.416-4.87-1.56.111-3.383 1.134-4.447 2.468-.97 1.208-1.767 3.006-1.456 4.75 1.705.055 3.466-.993 4.487-2.348zM25 22.01c-.683 1.56-1.011 2.257-1.89 3.638-1.227 1.928-2.956 4.329-5.101 4.346-1.904.022-2.395-1.278-4.98-1.263-2.585.015-3.124 1.288-5.031 1.269-2.143-.02-3.782-2.186-5.009-4.114C-.442 20.5-.803 14.176 1.313 10.811c1.505-2.388 3.88-3.785 6.11-3.785 2.27 0 3.699 1.284 5.579 1.284 1.823 0 2.933-1.288 5.56-1.288 1.987 0 4.093 1.117 5.591 3.043-4.913 2.777-4.117 10.01.847 11.946z"
                    fill="url(#apple-store_jsx_svg__a)"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="ratingText">Top 5 in App Store in 2018</div>
            </a>
          </li>
          <li className="appsItem">
            <a href="https://joom.app.link/sluY1gMHH3?$android_deeplink_path=&$android_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.joom&$fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.joom">
              <div className="downloadsIcon Google">
                <svg width="25" height="27" class="googlePlayIcon___1AgLD">
                  <defs>
                    <linearGradient
                      x1="7.133%"
                      y1="8.294%"
                      x2="82.251%"
                      y2="90.005%"
                      id="google-play_jsx_svg__a"
                    >
                      <stop stop-color="#F3A04D" offset="0%"></stop>
                      <stop stop-color="#FF7575" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M4.987.432l12.926 7.224-4.081 4.132L1.682.44A3.35 3.35 0 014.987.432zm-4.52 1.17l12.186 11.38L.435 25.354A3.187 3.187 0 010 23.745V3.25c0-.596.17-1.158.467-1.65zm22.858 9.077c1.048.586 1.673 1.639 1.675 2.817 0 1.178-.627 2.23-1.673 2.818l-2.909 1.625-5.361-5.007 4.375-4.428 3.893 2.175zm-9.447 3.448l5.004 4.672-13.895 7.764A3.392 3.392 0 013.328 27a3.4 3.4 0 01-1.701-.47l12.251-12.403z"
                    fill="url(#google-play_jsx_svg__a)"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="ratingText">Top 5 in Google Play in 2018</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
