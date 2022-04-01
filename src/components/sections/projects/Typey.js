import React from "react";
import Carousel from "react-bootstrap/Carousel";

import typey1 from "../../../assets/images/typey/typey1.jpg";
import typey2 from "../../../assets/images/typey/typey2.jpg";
import typey3 from "../../../assets/images/typey/typey3.jpg";

function Typey() {
  return (
    <div className="typey-container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={typey1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={typey2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={typey3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Typey;
