import "./Section-one.css";
import Owner from "../images/Owner.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
export default function Section1() {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/about");
  };
  function handleButtonClick() {
    window.location.href = "https://www.google.com";
  }
  return (
    <section>
      <div className="container-fluid container-s1">
        <div className=" p-lg-4 p-md-4 p-0">
          <div className="d-lg-flex d-md-inline d-inline">
            <div className="left-intro col-lg-6 col-md-12">
              <div className="left-intro-1 px-lg-5 py-lg-5 px-0 py-0">
                <p className="text-sm">Event Designer​</p>
                <p className=" display-4">
                  we are Ar-Carnival,
                  <br></br>Event Designer & Manager.
                </p>
                <p className="text-muted">
                  Step into a new dimension of event innovation. In a world
                  where reality and imagination collide, we present a paradigm
                  shift in event organization and design. ArCarnival is not just
                  a platform; it's an invitation to revolutionize how we
                  perceive, plan, and experience events. By seamlessly weaving
                  Augmented Reality into the fabric of event design, ArCarnival
                  transcends the ordinary, delivering extraordinary moments that
                  linger in the hearts and minds of attendees. Join us on this
                  transformative journey, where every event becomes a
                  captivating carnival of digital possibilities.
                </p>
                <div className="">
                  <div>
                    <p className="text-uppercase bold mb-lg-3 mb-0  mt-lg-4 mt-0 font-weight-bold ">
                      Get in Touch
                    </p>
                  </div>
                  <div>
                    <ul className="list-inline-icons">
                      <div className="m-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-black"
                            onClick={handleButtonClick}
                          />
                        </a>
                      </div>
                      <div className="m-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-black"
                            onClick={handleButtonClick}
                          />
                        </a>
                      </div>
                      <div className="m-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-black"
                            onClick={handleButtonClick}
                          />
                        </a>
                      </div>
                      <div className="m-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="text-black"
                            onClick={handleButtonClick}
                          />
                        </a>
                      </div>
                      <div className="m-1">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faWhatsapp}
                            className="text-black"
                            onClick={handleButtonClick}
                          />
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-intro col-lg-6 col-md-12 ">
              <div className="right-intro-1 h-70 ">
                <img src={Owner} alt="Owner" className="img-fluid h-50" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-0 w-lg-50 w-md-100 w-100 mt-lg-0 mt-md-5 mt-5 d-flex align-items-center justify-content-center pb-5">
          <button
            type="button"
            class=" bg-transparent px-4 py-2"
            onClick={handleAbout}
            style={{
              borderBottom: "0.5px solid black",
              borderTop: "0",
              borderRight: 0,
              borderLeft: 0,
            }}
          >
            Read More <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
