import React from "react";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  AOS.init({
    duration: 800,
    startEvent: "load",
  });

  return (
    <section className="Services">
      <svg
      className = "elipse"
        width="2000"
        height="2000"
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
      </svg>

      <div className="serviceSection">
        <div className="title">What we offer</div>
        <div className="layout">
          <div className="pictures" data-aos="slide-left" data-aos-once="true">
            <picture data-aos="slide-left">
              <img
                data-aos="slide-left"
                className="laptop"
                src="https://resources.joomcdn.net/about-page/langs/en/features/laptop-940x550.png"
                alt=""
                data-aos="slide-left"
              />
            </picture>
            <picture data-aos="slide-left">
              <img
                className="iphone"
                src="https://resources.joomcdn.net/about-page/langs/en/features/iphone-223x437.png"
                alt=""
                data-aos="slide-left"
              />
            </picture>
            <picture>
              <img
                className="android"
                src="https://resources.joomcdn.net/about-page/langs/en/features/android-205x449.png"
                alt=""
                data-aos="slide-left"
              />
            </picture>
          </div>
          <ul className="serviceList" data-aos="fade-up" data-aos-once="true">
            <li className="serviceItem" data-aos="fade-up">
              <div className="serviceIcon">
                <svg width="60" height="50">
                  <g fill="#6A75D9">
                    <path d="M4 40h15.656l-2.4 8H15v2h22v-2h-2.256l-2.4-8H40v-2H4a2 2 0 01-2-2v-2h38v-2H2V4a2 2 0 012-2h44a2 2 0 012 2v14h2V4a4 4 0 00-4-4H4a4 4 0 00-4 4v32a4 4 0 004 4zm26.256 0l2.4 8H19.344l2.4-8h8.512z"></path>
                    <path d="M7 5h6v2H7zm8 0h6v2h-6zm8 0h6v2h-6zm8 0h6v2h-6zm8 0h6v2h-6zm7 13v-8a1 1 0 00-1-1H7a1 1 0 00-1 1v12a1 1 0 001 1h33v-2H8V11h36v7h2zM18 30v-4a1 1 0 00-1-1H7a1 1 0 00-1 1v4h2v-3h8v3h2zm14 0v-4a1 1 0 00-1-1H21a1 1 0 00-1 1v4h2v-3h8v3h2zm2-4v4h2v-3h4v-2h-5a1 1 0 00-1 1z"></path>
                    <path d="M57 20H45a3 3 0 00-3 3v24a3 3 0 003 3h12a3 3 0 003-3V23a3 3 0 00-3-3zm1 27a1 1 0 01-1 1H45a1 1 0 01-1-1V23a1 1 0 011-1h12a1 1 0 011 1v24z"></path>
                    <path d="M46 24h2v2h-2zM55 28h-8a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1v-6a1 1 0 00-1-1zm-1 6h-6v-4h6v4zm1 4h-8a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1v-6a1 1 0 00-1-1zm-1 6h-6v-4h6v4z"></path>
                  </g>
                </svg>
              </div>
              Mobile marketplace with website
            </li>
            <li className="serviceItem" data-aos="fade-up" data-aos-delay="300">
              <div className="serviceIcon">
                <svg width="60" height="60">
                  <g fill="#E1629D">
                    <path d="M46.941 55.06V46h-2v4H15.017L15 47.991l-2 .018.059 7.051A4.946 4.946 0 0018 60h24a4.946 4.946 0 004.941-4.94zM42 58H18a2.946 2.946 0 01-2.941-2.949L15.034 52h29.907v3.06A2.944 2.944 0 0142 58z"></path>
                    <path d="M36 10v2h8.941v2h2V8.94A4.946 4.946 0 0042 4h-6v2h6a2.944 2.944 0 012.941 2.94V10H36zm-7 44h2v2h-2zM6 4v12a4 4 0 004 4h6.7l5.748 3.832A1 1 0 0024 23v-3h6a4 4 0 004-4V4a4 4 0 00-4-4H10a4 4 0 00-4 4zm26 0v12a2 2 0 01-2 2h-7a1 1 0 00-1 1v2.132l-4.445-2.964A1.006 1.006 0 0017 18h-7a2 2 0 01-2-2V4a2 2 0 012-2h20a2 2 0 012 2z"></path>
                    <path d="M12 16h10a1 1 0 001-1v-1.382l4.553 2.282A1 1 0 0029 15V5a1 1 0 00-1.447-.895L23 6.382V5a1 1 0 00-1-1H12a1 1 0 00-1 1v10a1 1 0 001 1zm1-10h8v2a1 1 0 001.447.895L27 6.618v6.764l-4.553-2.277A1 1 0 0021 12v2h-8V6zm33 10a13.98 13.98 0 00-12.2 20.838L31.132 41.5a1 1 0 001.111 1.466l5.818-1.455A13.857 13.857 0 0046 44c7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 26a11.886 11.886 0 01-7.136-2.37 1 1 0 00-.843-.17l-3.994 1 1.791-3.135A1 1 0 0035.8 36.3 11.99 11.99 0 1146 42z"></path>
                    <path d="M51.6 27H50v-2a4 4 0 00-4-4 2 2 0 00-2 2v2.586L42.586 27H39a1 1 0 00-1 1v8a1 1 0 001 1h12.6a2.4 2.4 0 002.4-2.4v-5.2a2.4 2.4 0 00-2.4-2.4zM40 29h2v6h-2v-6zm12 5.6a.4.4 0 01-.4.4H44v-6.586l1.707-1.707A1 1 0 0046 26v-3a2 2 0 012 2v2a1 1 0 000 2h3.6c.22 0 .4.18.4.4v5.2zM12 46a12.031 12.031 0 007.129-2.352l4.6 1.314a1 1 0 001.17-1.409L22.767 39.3A12 12 0 1012 46zm0-22a10 10 0 018.768 14.808 1 1 0 00-.018.928l1.339 2.678-2.9-.828a1 1 0 00-.9.185A9.888 9.888 0 0112 44C6.477 44 2 39.523 2 34s4.477-10 10-10z"></path>
                    <path d="M5.657 36.1l5.709 4.676a1 1 0 001.268 0l5.709-4.676a4.467 4.467 0 001.638-3.048 4.4 4.4 0 00-1.024-3.258A4.81 4.81 0 0012 29.417a4.84 4.84 0 00-3.574-1.3 4.768 4.768 0 00-3.383 1.677 4.4 4.4 0 00-1.024 3.258A4.467 4.467 0 005.657 36.1zm.92-5.023a2.755 2.755 0 011.961-.963h.159a2.789 2.789 0 011.923.758l.689.658a1 1 0 001.382 0l.689-.658a2.812 2.812 0 014.043.21 2.42 2.42 0 01.567 1.788 2.474 2.474 0 01-.915 1.688L12 38.707 6.925 34.55a2.474 2.474 0 01-.915-1.688 2.421 2.421 0 01.567-1.788v.003z"></path>
                  </g>
                </svg>
              </div>
              Communication between sellers, buyers and bloggers
            </li>
            <li className="serviceItem" data-aos="fade-up" data-aos-delay="300">
              <div className="serviceIcon">
                <svg width="60" height="60" viewBox="-7 0 60 60">
                  <g fill="#FC7E6B">
                    <path d="M5 60h24a5.006 5.006 0 005-5v-5H2V10h30v10h2V5a5.006 5.006 0 00-5-5H5a5.006 5.006 0 00-5 5v50a5.006 5.006 0 005 5zm27-8v3a3 3 0 01-3 3H5a3 3 0 01-3-3v-3h30zM5 2h24a3 3 0 013 3v3H2V5a3 3 0 013-3z"></path>
                    <path d="M16 54h2v2h-2zM11 4h12v2H11zm19 15v-5a1 1 0 00-1-1H5a1 1 0 00-1 1v8a1 1 0 001 1h12v-2H6v-6h22v4h2z"></path>
                    <path d="M8 17h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zM13 35a13.981 13.981 0 0022.034 11.448l6.638 6.638a3.121 3.121 0 104.414-4.414l-6.864-6.864A14 14 0 1013 35zm31.672 15.086a1.121 1.121 0 11-1.586 1.586l-6.5-6.5a14.168 14.168 0 001.505-1.667l6.581 6.581zM39 35c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12c6.624.007 11.993 5.376 12 12z"></path>
                    <path d="M17 35c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10c-5.52.006-9.994 4.48-10 10zm18 0a8 8 0 11-8-8 8.009 8.009 0 018 8z"></path>
                    <path d="M21 35h2a4 4 0 014-4v-2a6.006 6.006 0 00-6 6zM4 25h2v2H4zm0 4h8v2H4zm0 4h7v2H4zm0 4h7v2H4zm0 4h9v2H4zm0 4h5v2H4zm4-20h5v2H8zm3 20h4v2h-4z"></path>
                  </g>
                </svg>
              </div>
              Personalization of products, discounts and special offers
            </li>
            <li className="serviceItem" data-aos="fade-up" data-aos-delay="300">
              <div className="serviceIcon">
                <svg width="60" height="62">
                  <g fill="#27C28E">
                    <path d="M35.954 16.138a1 1 0 00-.818-.691l-2.943-.4-1.306-2.5a1.041 1.041 0 00-1.774 0l-1.306 2.5-2.943.4a1 1 0 00-.542 1.725l2.1 1.934-.492 2.716a1 1 0 001.425 1.078L30 21.579l2.645 1.321a1 1 0 001.046-.1 1 1 0 00.383-.978l-.492-2.716 2.1-1.934a1 1 0 00.272-1.034zm-4.132 1.871a1 1 0 00-.306.913l.234 1.294-1.3-.649a1 1 0 00-.89 0l-1.3.649.234-1.294a1 1 0 00-.306-.913l-.942-.869 1.355-.187a1 1 0 00.751-.528L30 15.163l.658 1.262a1 1 0 00.751.528l1.355.187-.942.869zm18.132-1.871a1 1 0 00-.818-.691l-2.943-.4-1.306-2.5a1.041 1.041 0 00-1.774 0l-1.306 2.5-2.943.4a1 1 0 00-.542 1.725l2.1 1.934-.492 2.716a1 1 0 001.425 1.078L44 21.579l2.645 1.321a1 1 0 001.046-.1 1 1 0 00.383-.978l-.492-2.716 2.1-1.934a1 1 0 00.272-1.034zm-4.132 1.871a1 1 0 00-.306.913l.234 1.294-1.3-.649a1 1 0 00-.89 0l-1.3.649.234-1.294a1 1 0 00-.306-.913l-.942-.869 1.355-.187a1 1 0 00.751-.528L44 15.163l.658 1.262a1 1 0 00.751.528l1.355.187-.942.869zm-23.868-1.871a1 1 0 00-.818-.691l-2.943-.4-1.306-2.5a1.041 1.041 0 00-1.774 0l-1.306 2.5-2.943.4a1 1 0 00-.542 1.725l2.1 1.934-.492 2.716a1 1 0 001.425 1.078L16 21.579l2.645 1.321a1 1 0 001.046-.1 1 1 0 00.383-.978l-.492-2.716 2.1-1.934a1 1 0 00.272-1.034zm-4.132 1.871a1 1 0 00-.306.913l.234 1.294-1.3-.649a1 1 0 00-.89 0l-1.3.649.234-1.294a1 1 0 00-.306-.913l-.942-.869 1.355-.187a1 1 0 00.751-.528L16 15.163l.658 1.262a1 1 0 00.751.528l1.355.187-.942.869z"></path>
                    <path d="M55 0H5a5.006 5.006 0 00-5 5v30a5.006 5.006 0 005 5h19v-2H8V2h44v34h2V2h1a3 3 0 013 3v30a3 3 0 01-3 3h-1v2h1a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zM6 38H5a3 3 0 01-3-3V5a3 3 0 013-3h1v36z"></path>
                    <path d="M16.25 44.336a3.882 3.882 0 00-.118 5.379l9.161 9.992 2 2 1.414-1.414-1.97-1.969-9.13-9.96c-.686-.745-.66-1.9.057-2.614a1.936 1.936 0 012.672 0l5.957 5.957A1 1 0 0028 51V28a2 2 0 114 0v12a1 1 0 002 0 2 2 0 114 0 1 1 0 002 0 2 2 0 114 0 1 1 0 002 0 2 2 0 114 0v20h2V40a4 4 0 00-7-2.643 3.995 3.995 0 00-6 0 3.994 3.994 0 00-5-.82V28a4 4 0 10-8 0v20.586l-4.25-4.25a3.894 3.894 0 00-5.5 0zM10 4h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-6 21h2v2h-2zm4 0h4v2h-4zm-4 4h8v2h-8zm28-4h2v2h-2zm4 0h4v2h-4z"></path>
                    <path d="M40 29h8v2h-8z"></path>
                  </g>
                </svg>
              </div>
              High-quality and reliable logistics
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
