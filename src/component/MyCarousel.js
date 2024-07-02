import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={true}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img src="./img/banner1.jpeg" alt="" />
      </div>
      <div>
        <img src="./img/banner2.jpeg" alt="" />
      </div>
      <div>
        <img src="./img/banner3.jpeg" alt="" />
      </div>
      <div>
        <img src="./img/banner4.png" alt="" />
      </div>
      <div>
        <img src="./img/banner5.png" alt="" />
      </div>
      <div>
        <img src="./img/banner6.jpeg" alt="" />
      </div>
      <div>
        <img src="./img/banner7.jpeg" alt="" />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
