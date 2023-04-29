import React from 'react'

import styles from "./Slider.module.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HomeSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true
  };
  return (
    <div className={styles.carousel}>
        <Slider {...settings}>
          <div className={styles.wrap}>
            <img src="/images/slider-badging.jpg" alt="" />
          </div>
          <div className={styles.wrap}>
            <img src="/images/slider-badag.jpg" alt="" />
          </div>
          <div className={styles.wrap}>
            <img src="/images/slider-scale.jpg" alt="" />
          </div>
          <div className={styles.wrap}>
          <img src="/images/slider-scales.jpg" alt="" />
          </div>
        </Slider>
    </div>
  )
}

export default HomeSlider