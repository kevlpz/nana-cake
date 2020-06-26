import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import danny from '../assets/danny.jpg';
import splashing from '../assets/splashing.png';
import logo from '../assets/logo.png';
import pasta from '../assets/pasta.jpg'

const HomeCarousel = () => {


  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pasta}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={splashing}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={danny}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeCarousel;