import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Nosotros.css';


export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
   
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <a href="/reservations">
        <img
          className="d-block w-100 h-50"
          src= "img/banner1.png"
          alt="First slide"
          href="/reservations"
        />
      </a>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="img/banner2.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="img/banner3.png"
          alt="Third slide"
        />

      
      </Carousel.Item>
    </Carousel>
   
  );
}

