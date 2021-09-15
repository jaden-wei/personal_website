import React from "react";
import Carousel from "react-bootstrap/Carousel";

import krypto1 from "../../../assets/images/krypto/krypto1.jpg";
import krypto2 from "../../../assets/images//krypto/krypto2.jpg";
import krypto3 from "../../../assets/images//krypto/krypto3.jpg";

function Krypto() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={krypto1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={krypto2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={krypto3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Krypto;
