import React from "react";
import Carousel from "react-bootstrap/Carousel";

import image1 from "../../../assets/images/2048/2048_1.jpg";

function Bot2048() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Bot2048;
