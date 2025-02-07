import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="bg-blue-500 p-12 rounded-lg shadow-lg text-white">
          <h3 className="text-2xl">Slide 1</h3>
          <p>This is the first slide of the carousel.</p>
        </div>
        <div className="bg-green-500 p-12 rounded-lg shadow-lg text-white">
          <h3 className="text-2xl">Slide 2</h3>
          <p>This is the second slide of the carousel.</p>
        </div>
        <div className="bg-red-500 p-12 rounded-lg shadow-lg text-white">
          <h3 className="text-2xl">Slide 3</h3>
          <p>This is the third slide of the carousel.</p>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;