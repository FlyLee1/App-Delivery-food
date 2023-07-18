import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // Hieu ung chuyen slider
    <Slider {...settings}>
      <div>
        <p className="review__text">
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et
          pariatur aut! Officiis, voluptatum molestias. Aliquam quae enim
          aliquid inventore?'
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" className="rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>

      <div>
        <p className="review__text">
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illum
          voluptatum et! Ad itaque officia ullam ut repellendus?'
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" className="rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>

      <div>
        <p className="review__text">
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure,
          repellendus est nisi impedit dignissimos?'
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" className="rounded" />
          <h6>Steven Cook</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
