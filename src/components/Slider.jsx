import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../json/appart.json";
import "../css/Slider.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={`${className} custom-next-arrow`}
    style={{ ...style, display: 'block', right: '25px', top: '50%',}}
    onClick={onClick}
  >
      <svg
        width="48"
        height="80"
        viewBox="0 0 48 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: 'block', left: '25px', top: '50%', zIndex: '1'}}
      onClick={onClick}
    >
      <svg
        width="48"
        height="80"
        viewBox="0 0 48 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

const CardPageSlider = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appartment, setAppartment] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const foundAppartment = data.find((appartment) => appartment.id === id);

    if (foundAppartment) {
      setAppartment(foundAppartment);
    } else {
      navigate("/error");
    }
  }, [id, navigate]);

  const settings = {
    dots: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    arrows: true,
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider ref={sliderRef} {...settings} className="my-slider">
        {appartment &&
          appartment.pictures.map((picture, index) => (
            <div key={index}>
              <img
                src={picture}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
      </Slider>
      <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", color: "white", fontFamily: "Montserrat" }}>
        {currentSlide + 1}/{appartment ? appartment.pictures.length : 0}
      </div>
    </div>
  );
};


export default CardPageSlider;