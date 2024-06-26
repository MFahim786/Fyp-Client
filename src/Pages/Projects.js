import Footer from "./Footer";
import { useState } from "react";
import QrCode from "./QrCode";
import Header from "./Header";
import allPCards from "./PCard";
import PData from "./PData";
import { MdClose } from "react-icons/md";
import backgroundImage from "../images/backback.jpg";
function Projects() {
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
    <div className="gradient-animation-p">
      <div className="right" style={{ width: left_width }}>
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
                  Our Projects
                </p>
                <p
                  className=" fs-lg-3 fs-md-3 fs-sm-2 bold"
                  style={{ color: "black" }}
                >
                  Welcome to our "Our Projects" page, where we showcase the
                  diverse range of successful ventures and endeavors we have
                  undertaken. At ArCarnival, we take immense pride in the
                  projects we have delivered, each representing our commitment
                  to excellence, innovation, and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {PData.map(allPCards)}

        <Footer />
      </div>
      <div
        className="left gradient-animation  p-4"
        style={{ width: right_width, display: display }}
      >
        <div className="close-icon" onClick={handleCancel}>
          <MdClose />
        </div>
        <QrCode/>
      </div>
    </div>
  );
}
export default Projects;
