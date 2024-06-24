import b3 from "../images/b3.jpg";
import b4 from "../images/b4.jpg";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import "./Section-one.css";

export function ProjectInfo(props) {
  return (
    <div
      className="w-50 py-5 px-2 mt-4 mb-4 "
      style={{ backgroundColor: " rgb(229, 229, 233)" }}
    >
      <img src={props.image1} class="img-thumbnail" alt="..." />
      <div className="px-3 mt-2">
        <h5>What My Happy Client Says </h5>
        <div className="d-flex">
          <div>
            <h2 className="display-7">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <br></br>
            </h2>
            <p className="text-justify">{props.msg}</p>
            <p className="bold">{props.name}</p>
          </div>
          <div>
            <div className="d-flex justify-content-end mb-2 mt-5 px-2">
              <img
                src={props.img1}
                class="rounded-circle"
                alt="..."
                style={{ width: "7rem", height: "8rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
