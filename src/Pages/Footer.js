import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { CrAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="container-fluid ">
      <footer className="container">
        <div className="pb-lg-5 pb-md-5 pb-5">
          <div className="">
            <div className="d-lg-flex d-md-flex d-inline justify-content-center align-items-center ">
              <div className="col-md-4 py-lg-1 py-2 px-4 mr-lg-2 mt-0">
                <h5 className="text-uppercase mb-4 font-weight-bold">
                  Get In Touch
                </h5>
                <p className="">
                  Elevate your events with Ar-Carnival – where innovation meets
                  imagination. Let's craft unforgettable experiences together.
                  Get in touch to transform your next event.
                </p>
              </div>

              <div className="col-md-4 px-lg-1 px-4 ">
                <h5 className="text-uppercase mb-4 font-weight-bold">
                  Contact Details
                </h5>
                <p>Ar-Carnival</p>
                <p>
                  <FaEnvelope className="icon icon-p" />
                  ArCarnival12@gmail.com
                </p>
                <p>
                  <FaPhoneAlt className="icon icon-p" />
                  +923209474113
                </p>
              </div>

              <div className="col-md-4 px-lg-1 px-4">
                <h5 className="text-uppercase mb-4 font-weight-bold">
                  My Location
                </h5>
                <ul className="list-unstyled">
                  <p>
                    {" "}
                    we are present online
                    <br></br>
                  </p>

                  <h5 className="text-uppercase mb-3 mt-4 font-weight-bold ">
                    Follow us
                  </h5>
                  <div>
                    <ul className="list-inline-icons ">
                      <div className="px-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-black"
                          />
                        </a>
                      </div>
                      <div className="px-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-black"
                          />
                        </a>
                      </div>
                      <div className="px-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-black"
                          />
                        </a>
                      </div>
                      <div className="px-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="text-black"
                          />
                        </a>
                      </div>
                      <div className="px-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faWhatsapp}
                            className="text-black"
                          />
                        </a>
                      </div>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-12 mx-auto mt-3">
            <p className="text-center">
              &copy; 2023 Ar-Carnival. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
