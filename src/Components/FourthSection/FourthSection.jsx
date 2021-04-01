import React from "react";
import "./styles.css";
import Slider from "react-slick";
const FourthSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow:
    // nextArrow: <i class="fa fa-angle-right fa-3x nextArrow" aria-hidden="true"></i>
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <>
        <i
          class="fa fa-angle-right fa-2x"
          onClick={onClick}
          style={{
            ...style,
            bottom: 50,
            right: 40,
            cursor: "pointer",
            zIndex: 1111,
            position: "absolute",
            marginRight: 50,
            zIndex: 1111,
            position: "absolute",
            display: "block",
            background: "white",
            borderRadius: 100,
            padding: 15,
            width: 30,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></i>
        ,
      </>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <>
        <i
          class="fa fa-angle-left fa-2x"
          onClick={onClick}
          style={{
            ...style,
            bottom: 50,
            right: 170,
            zIndex: 1111,
            cursor: "pointer",
            position: "absolute",
            display: "block",
            background: "white",
            borderRadius: 50,
            padding: 15,
            width: 30,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></i>
        ,
      </>
    );
  }
  return (
    <div className="content">
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139179.58709566444!2d23.988736985783305!3d56.971395812037684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C%20Latvia!5e0!3m2!1sen!2s!4v1617315633665!5m2!1sen!2s" width="600" height="450" style={{border:0, height : '100%', width : '100%',}}></iframe>
      </div>
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img
              style={{ width: "100%", height: 600, objectFit: "cover" }}
              src="https://resources.joomcdn.net/about-page/offices/1-1440x1440.webp"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: 600, objectFit: "cover" }}
              src="https://resources.joomcdn.net/about-page/offices/2-1440x1440.webp"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: 600, objectFit: "cover" }}
              src="https://resources.joomcdn.net/about-page/offices/3-1440x1440.webp"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: 600, objectFit: "cover" }}
              src="https://resources.joomcdn.net/about-page/offices/4-1440x1440.webp"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: 600, objectFit: "cover" }}
              src="https://resources.joomcdn.net/about-page/offices/5-1440x1440.webp"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: 600, objectFit: "cover" }}
              src="https://resources.joomcdn.net/about-page/offices/6-1440x1440.webp"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: 600, objectFit: "cover" }}
              src="https://resources.joomcdn.net/about-page/offices/7-1440x1440.webp"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FourthSection;
