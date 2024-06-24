import Header from "./Header";
import "./About.css";
import backgroundImage from "../images/backback.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import QrCode from "./QrCode";
import Footer from "./Footer";
import ASection1 from "./About-Section-1";
import Team from "./TeamMembers";
import { MdClose } from "react-icons/md";
import { useState } from "react";

export default function About() {
  const [count, setCount] = useState("");
  const [display, setDisplay] = useState("none");
  const [show2, setShow2] = useState(true);
  const [left_width, setLeft_width] = useState("");
  const [right_width, setRight_width] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleCancel = () => {
    setLeft_width("");
    setDisplay("none");
    setCount("inline");
  };

  const incrementCount = () => {
    setCount("none");
    setLeft_width("70vw");
    setRight_width("30vw");
    setDisplay("inline");
  };

  const handleToggle = () => {
    setExpanded(!expanded);
    setShow2(!show2);
  };

  return (
    <div>
      <div className="right " style={{ width: left_width }}>
        <div style={{ backgroundColor: "rgb(229, 229, 233)" }}>
          <div
            className="about-page w-100 vh-100"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div>
              <Header
                count={count}
                expanded={expanded}
                show2={show2}
                display={display}
                incrementCount={incrementCount}
                handleToggle={handleToggle}
              />
            </div>
            <div className="h-75 d-flex justify-content-center align-items-center ">
              <div className="col-lg-6 col-md-5 col-7 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <p className=" display-lg-4 display-md-5 display-6   bold">
                    About us
                  </p>
                  <p
                    className=" fs-lg-3 fs-md-3 fs-sm-2 bold"
                    style={{ color: "black" }}
                  >
                    Welcome to Ar-Carnival, where we are passionate about what
                    we do and committed to providing exceptional solutions. With
                    a strong foundation built on expertise, innovation, and
                    customer satisfaction, we have been serving clients and
                    making a positive impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ASection1 />
          <div className="  d-flex justify-content-center align-items-center justify-content-center align-items-center p-5">
            <div class="d-lg-flex d-md-flex d-inline justify-content-center align-items-center text-center ">
              <div class="col-md-3 col-lg-4   ">
                <div class="card h-100 py-4 mx-3 bg-custom ">
                  <div class="card-body align-items-center justify-content-center d-flex">
                    <div>
                      <FontAwesomeIcon
                        className="p-1"
                        icon={faClock}
                        style={{ fontSize: "1.8rem" }}
                        color="rgb(150, 150, 150)"
                      />
                      <h5 class="card-title display-3 p-1">15</h5>
                      <p class="card-text">YEARS IN SERVICE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-lg-4  ">
                <div class="card h-100 py-4 mx-3 bg-custom ">
                  <div class="card-body align-items-center justify-content-center d-flex">
                    <div>
                      <FontAwesomeIcon
                        className="p-1"
                        icon={faTrophy}
                        style={{ fontSize: "1.8rem" }}
                        color="rgb(150, 150, 150)"
                      />
                      <h5 class="card-title display-3 p-1">12</h5>
                      <p class="card-text">AWARDS RECEIVED</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-lg-4  ">
                <div class="card h-100 py-4 mx-3 bg-custom ">
                  <div class="card-body align-items-center justify-content-center d-flex">
                    <div>
                      <FontAwesomeIcon
                        className="p-1"
                        icon={faUsers}
                        style={{ fontSize: "1.8rem" }}
                        color="rgb(150, 150, 150)"
                      />
                      <h5 className="card-title display-3 p-1">150+</h5>
                      <p class="card-text">HAPPY CUSTOMERS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-lg-4  ">
                <div class="card h-100 py-4 mx-3 bg-custom ">
                  <div class="card-body align-items-center justify-content-center d-flex">
                    <div>
                      <FontAwesomeIcon
                        className="p-1"
                        icon={faBriefcase}
                        style={{ fontSize: "1.8rem" }}
                        color="rgb(150, 150, 150)"
                      />
                      <h5 class="card-title display-3 p-1">258</h5>
                      <p class="card-text">PROJECTS COMPLETED</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" text-center container py-5 px-3">
            <div className="">
              <p className=" display-5 font-weight-bold ">Meet Our Team</p>
              <p className="text-sm">Event Designer</p>
            </div>
            <div>
              <Team />
            </div>
          </div>

          <Footer />
        </div>
      </div>
      <div
        className="left gradient-animation p-4"
        style={{ width: right_width, display: display }}
      >
        <p className="">
          <div className="close-icon" onClick={handleCancel}>
            <MdClose />
          </div>
          <QrCode />
        </p>
      </div>
    </div>
  );
}
