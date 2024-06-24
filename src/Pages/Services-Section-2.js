import { Container, Row, Col } from "reactstrap";
import b4 from "../images/resul.jpg";
import allCards from "./Card";
import { FaArrowRight } from "react-icons/fa";
import Data from "./Data";

const Services_Section_2 = () => {
  return (
    <div className="">
      <div className=" d-lg-flex d-md-inline d-inline m-5 row">
        <div className="py-5 px-5 text-left justify-content-center align-items-center d-flex col-lg-4 col-md-12 col-sm-12">
          <div className="">
            <h2>About our Services</h2>
            <p className="fs-4">
              We don't just design events; we create unforgettable experiences.
              With meticulous attention to detail and a passion for turning
              dreams into reality, we guarantee an exceptional celebration.
              Choose us for a seamless, innovative, and unforgettable event that
              exceeds expectations. Your satisfaction is not just our goal; it's
              our commitment to you.
            </p>
          </div>
        </div>
        <div className="text-center justify-content-center align-items-center d-lg-flex d-md-none d-none col-lg-8 col-md-12 col-sm-0">
          <img
            src={b4}
            alt="placeholder"
            className="img-fluid"
            style={{ height: "90vh" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Services_Section_2;
