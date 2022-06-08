import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <a href="https://github.com/kamrank89/TinDog">
          <img
            className="d-block w-100"
            src={require("./Images/TinDog.JPG")}
            alt="First slide"
          />
        </a>
        <Carousel.Caption>
          <h3>TinDog Website</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://github.com/kamrank89/Simon-Game">
          <img
            className="d-block w-100"
            src={require("./Images/SimonGame.JPG")}
            alt="Second slide"
          />
        </a>
        <Carousel.Caption>
          <h3>Simon Game</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://github.com/kamrank89/Python-Game">
          <img
            className="d-block w-100"
            src={require("./Images/AlienInvasion.JPG")}
            alt="Third slide"
          />
        </a>
        <Carousel.Caption>
          <h3>Alien Invasion Game</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://github.com/kamrank89/Netflix-Clone">
          <img
            className="d-block w-100"
            src={require("./Images/Netflix.JPG")}
            alt="Third slide"
          />
        </a>
        <Carousel.Caption>
          <h3>Netflix Clone</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://github.com/kamrank89/andstudio-clone">
          <img
            className="d-block w-100"
            src={require("./Images/andstudio.JPG")}
            alt="Third slide"
          />
        </a>

        <Carousel.Caption>
          <h3>andstudio.lt Clone</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
