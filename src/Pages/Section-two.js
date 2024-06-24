import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../images/one.jpg";
import image2 from "../images/back.jpg";
import image3 from "../images/pr.png";
import "./Section-two.css";
export default function Section2() {
  return (
    <>
      <Carousel interval={2000} className="p-lg-5 p-md-5 p-0">
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <p>A Birthday Party.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <p>Birthday Party.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption>
            <p>Birthday Party.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div></div>
    </>
  );
}
