import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import "./Section-one.css";

export function ThemeInfo(props) {
  return (
    <div
      className="w-50 py-5 px-2 mt-4 mb-4 "
      style={{ backgroundColor: " rgb(229, 229, 233)" }}
    >
      <img src={props.img1} class="img-thumbnail" alt="..." />
      <div className="px-3 mt-2">
        <h5>Try Ones </h5>
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
